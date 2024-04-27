import { WithCatalogs } from "../../classes/abstract/WithCatalogs";
import { BlockType, Int } from "../../helpers/types";
import { ObjectAngleSetterInfo } from "./ObjectAngleSetterInfo";

export class ObjectAngleSetter extends WithCatalogs<ObjectAngleSetterInfo> {
	public readonly type: BlockType = 42;
	protected readonly isConst: boolean = true;
	protected params: [Int] = [Int(0)];
	protected paramOrder: ["objectAngle"] = ["objectAngle"];

	public set objectAngle(val: number | boolean) {
		this.params[0] = Int(val);
	}

	public get objectAngle() {
		return this.params[0];
	}
}
