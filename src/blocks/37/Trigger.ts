import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { WithCatalogs } from "../../classes/abstract/WithCatalogs";
import { Bool, BlockType } from "../../helpers/types";
import { TriggerInfo } from "./TriggerInfo";

export class Trigger extends WithCatalogs<TriggerInfo> {
	protected readonly isTrigger: boolean = true;
	protected readonly catalogsCount: number = 2;
	protected params: [Bool, Bool] = [Bool(1), Bool(1)];
	protected readonly paramOrder: ["forHero", "forBody"] = ["forHero", "forBody"];
	public readonly type: BlockType = 37;
	protected isConst: boolean = false;

	public set forHero(val: boolean | number | Bool) {
		this.params[0] = Bool(val);
	}
	public get forHero() {
		return this.params[0];
	}

	public set forBody(val: boolean | number | Bool) {
		this.params[1] = Bool(val);
	}
	public get forBody() {
		return this.params[1];
	}
}
