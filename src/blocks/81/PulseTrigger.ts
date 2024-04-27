import { WithCatalogs } from "../../classes/abstract/WithCatalogs";
import { BlockType, Float } from "../../helpers/types";
import { PulseTriggerInfo } from "./PulseTriggerInfo";

export class PulseTrigger extends WithCatalogs<PulseTriggerInfo> {
	protected isTrigger: boolean = true;
	protected catalogsCount: number = 1;
	public readonly type: BlockType = 81;
	protected readonly isConst: boolean = true;
	protected params: [Float] = [Float(1)];
	protected paramOrder: ["interval"] = ["interval"];

	public set interval(val: number | boolean) {
		this.params[0] = Float(val);
	}

	public get interval() {
		return this.params[0];
	}
}
