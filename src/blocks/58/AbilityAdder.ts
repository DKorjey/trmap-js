import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Int } from "../../helpers/types";
import { AbilityAdderInfo } from "./AbilityAdderInfo";

export enum AbilityAdderPowerIDs {
	Hook = 0,
	Dash,
	Left,
	Right,
	Jump
};

export class AbilityAdder extends BlockWithParameters<AbilityAdderInfo> {
	public readonly type: BlockType = 58;
	protected readonly isConst: boolean = true;
	protected params: [Int] = [Int(0)];
	protected paramOrder: ["powerId"] = ["powerId"];

	public set powerId(val: number | boolean | AbilityAdderPowerIDs) {
		this.params[0] = Int(Math.max(0, Math.min(4, +val)));
	}

	public get powerId() {
		return this.params[0];
	}
}
