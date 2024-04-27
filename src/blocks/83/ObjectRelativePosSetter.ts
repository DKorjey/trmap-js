import { WithCatalogs } from "../../classes/abstract/WithCatalogs";
import { BlockType, Float } from "../../helpers/types";
import { ObjectRelativePosSetterInfo } from "./ObjectRelativePosSetterInfo";

export class ObjectRelativePosSetter extends WithCatalogs<ObjectRelativePosSetterInfo> {
	protected isTrigger: boolean = false;
	protected catalogsCount: number = 1;
	public readonly type: BlockType = 83;
	protected readonly isConst: boolean = true;
	protected params: [Float, Float] = [Float(0), Float(0)];
	protected paramOrder: ["x", "y"] = ["x", "y"];

	public set x(val: number | boolean) {
		this.params[0] = Float(val);
	}

	public get x() {
		return this.params[0];
	}

	public set y(val: number | boolean) {
		this.params[1] = Float(val);
	}

	public get y() {
		return this.params[1];
	}
}
