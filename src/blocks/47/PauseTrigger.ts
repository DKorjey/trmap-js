import { WithCatalogs } from "../../classes/abstract/WithCatalogs";
import { BlockType, Float } from "../../helpers/types";
import { PauseTriggerInfo } from "./PauseTriggerInfo";

export class PauseTrigger extends WithCatalogs<PauseTriggerInfo> {
	protected isTrigger: boolean = true;
	protected catalogsCount: number = 1;
	public readonly type: BlockType = 47;
	protected readonly isConst: boolean = true;
	protected params: [Float] = [Float(1)];
	protected paramOrder: ["delay"] = ["delay"];

	public set delay(val: number | boolean) {
		this.params[0] = Float(val);
	}

	public get delay() {
		return this.params[0];
	}
}
