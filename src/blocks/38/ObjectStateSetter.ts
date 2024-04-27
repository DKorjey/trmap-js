import { WithCatalogs } from "../../classes/abstract/WithCatalogs";
import { BlockType, Bool } from "../../helpers/types";
import { ObjectStateSetterInfo } from "./ObjectStateSetterInfo";

export class ObjectStateSetter extends WithCatalogs<ObjectStateSetterInfo> {
	protected isTrigger: boolean = false;
	protected catalogsCount: number = 1;
	public readonly type: BlockType = 38;
	protected readonly isConst: boolean = true;
	protected params: [Bool] = [Bool(1)];
	protected paramOrder: ["objectState"] = ["objectState"];

	public set objectState(val: number | boolean) {
		this.params[0] = Bool(val);
	}

	public get objectState() {
		return this.params[0];
	}
}
