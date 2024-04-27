import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { WithCatalogs } from "../../classes/abstract/WithCatalogs";
import { BlockType, Int } from "../../helpers/types";
import { ToggleTriggerInfo } from "./ToggleTriggerInfo";

export enum ToggleTriggerMode {
	Loop = 0,
	Stop,
	Last
};

export class ToggleTrigger extends WithCatalogs<ToggleTriggerInfo> {
	protected isTrigger: boolean = true;
	protected catalogsCount: number = 2;
	public readonly type: BlockType = 79;
	protected readonly isConst: boolean = true;
	protected params: [Int] = [Int(0)];
	protected paramOrder: ["mode"] = ["mode"];

	public set mode(val: number | boolean | ToggleTriggerMode) {
		this.params[0] = Int(Math.max(0, Math.min(2, +val)));
	}

	public get mode() {
		return this.params[0];
	}
}
