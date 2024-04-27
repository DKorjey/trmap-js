import { MovementType } from "../../helpers/enums";
import { Params, ParamEntry, Float, Int, paramToString, RecordFromEntries, ParamNames } from "../../helpers/types";
import { BasicBlock, BasicBlockInfo } from "./BasicBlock";

export type BlockWithParametersInfo<T extends ParamEntry[]> = BasicBlockInfo & {
	parameters?: RecordFromEntries<T>;
};

export abstract class BlockWithParameters<T extends ParamEntry[]> extends BasicBlock {
	protected params: Params<T>;
	protected paramOrder: ParamNames<T>;

	constructor(info?: BlockWithParametersInfo<T>) {
		super(info);
		if (!info) return;
		if (!info.parameters) return;
		this.params = [] as Params<T>;
		this.paramOrder = [] as Params<T>;
		this.setParams(info.parameters);
	}

	protected get paramsAsStringArray(): string[] {
		return ["¶", ...this.params.map(p => paramToString(p)), "¶", ""];
	}

	protected setParams(params: Params<T> | RecordFromEntries<T>) {
		if (params instanceof Array) {
			params.forEach((param, index) => {
				const paramName = this.paramOrder[index];
				if (paramName) {
					this.params[paramName] = param;
				}
			});
		} else {
			for (const k in params) {
				this.params[this.paramOrder.indexOf(k)] = params[k];
			}
		}
	}
	public get parameters() {
		return structuredClone(this.params);
	}

	public override get asArray() {
		const info: (number | string | Int | Float | BasicBlock)[] = [
			this.type,
			this.uuid,
			...this.position.asArray,
			...this.size.asArray,
			this.parent ?? "",
			this.angle ?? "",
			this.parent ?? "",
		];
		if (this.angle !== 0) info.push(this.angle);
		else if (!this.active) info.push(this.angle, this.active);
		!this.appearance.isDefault && info.push(...this.appearance.asArray);
		this.movement.type !== MovementType.None && info.push(...this.movement.asArray);
		this.rotationSpeed !== Int(0) && info.push("R", this.rotationSpeed, "R", "");
		info.push(...this.paramsAsStringArray);
		return info;
	}
}
