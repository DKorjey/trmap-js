import { WithCatalogs } from "../../classes/abstract/WithCatalogs";
import { BlockType, Float } from "../../helpers/types";
import { RandomTriggerInfo } from "./RandomTriggerInfo";

export class RandomTrigger extends WithCatalogs<RandomTriggerInfo> {
	protected isTrigger: boolean = true;
	protected catalogsCount: number = 2;
	public readonly type: BlockType = 70;
	protected readonly isConst: boolean = true;
	protected params: [Float] = [Float(50)];
	protected paramOrder: ["chance"] = ["chance"];

	public set chance(val: number | boolean) {
		this.params[0] = Float(val);
	}

	public get chance() {
		return this.params[0];
	}
}
