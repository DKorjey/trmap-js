import { WithCatalogs } from "../../classes/abstract/WithCatalogs";
import { BlockType, Color } from "../../helpers/types";
import { ObjectColorSetterInfo } from "./ObjectColorSetterInfo";

export class ObjectColorSetter extends WithCatalogs<ObjectColorSetterInfo> {
	public readonly type: BlockType = 44;
	protected readonly isConst: boolean = true;
	protected params: [Color] = [Color('fff')];
	protected paramOrder: ["value"] = ["value"];

	public set value(val: Color | string) {
		this.params[0] = Color(val);
	}

	public get value() {
		return this.params[0];
	}
}
