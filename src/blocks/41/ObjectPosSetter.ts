import { WithCatalogs } from "../../classes/abstract/WithCatalogs";
import { BlockType, Float } from "../../helpers/types";
import { ObjectPosSetterInfo } from "./ObjectPosSetterInfo";

export class ObjectPosSetter extends WithCatalogs<ObjectPosSetterInfo> {
	protected isTrigger: boolean = false;
	protected catalogsCount: number = 1;
	public readonly type: BlockType = 41;
	protected readonly isConst: boolean = true;
	protected params: [Float, Float] = [Float(0), Float(0)];
	protected paramOrder: ["x", "y"] = ["x", "y"];

	public set objectX(val: number | boolean) {
		this.params[0] = Float(val);
	}

	public get objectX() {
		return this.params[0];
	}

	public set objectY(val: number | boolean) {
		this.params[1] = Float(val);
	}

	public get objectY() {
		return this.params[1];
	}
}
