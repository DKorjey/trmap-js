import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { WithCatalogs } from "../../classes/abstract/WithCatalogs";
import { BlockType, Float } from "../../helpers/types";
import { ObjectRotationSpeedSetterInfo } from "./ObjectRotationSpeedSetterInfo";

export class ObjectRotationSpeedSetter extends WithCatalogs<ObjectRotationSpeedSetterInfo> {
	protected isTrigger: boolean = false;
	protected catalogsCount: number = 1;
	public readonly type: BlockType = 46;
	protected readonly isConst: boolean = true;
	protected params: [Float] = [Float(5)];
	protected paramOrder: ["speed"] = ["speed"];

	public set speed(val: number | boolean) {
		this.params[0] = Float(val);
	}

	public get speed() {
		return this.params[0];
	}
}
