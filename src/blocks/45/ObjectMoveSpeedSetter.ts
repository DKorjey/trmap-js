import { WithCatalogs } from "../../classes/abstract/WithCatalogs";
import { BlockType, Float } from "../../helpers/types";
import { ObjectMoveSpeedSetterInfo } from "./ObjectMoveSpeedSetterInfo";

export class ObjectMoveSpeedSetter extends WithCatalogs<ObjectMoveSpeedSetterInfo> {
	protected isTrigger: boolean = false;
	protected catalogsCount: number = 1;
	public readonly type: BlockType = 45;
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
