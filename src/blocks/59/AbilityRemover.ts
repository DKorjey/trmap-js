import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Int } from "../../helpers/types";
import { AbilityRemoverInfo } from "./AbilityRemoverInfo";

export enum AbilityRemoverPowerIDs {
	Hook = 0,
	Dash,
	Left,
	Right,
	Jump
};

export class AbilityRemover extends BlockWithParameters<AbilityRemoverInfo> {
	public readonly type: BlockType = 59;
	protected readonly isConst: boolean = true;
	protected params: [Int] = [Int(0)];
	protected paramOrder: ["powerId"] = ["powerId"];

	public set powerId(val: number | boolean | AbilityRemoverPowerIDs) {
		this.params[0] = Int(Math.max(0, Math.min(4, +val)));
	}
	public get powerId() {
		return this.params[0];
	}
}
