import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Float } from "../../helpers/types";
import { RobotInfo } from "./RobotInfo";

export class Robot extends BlockWithParameters<RobotInfo> {
	public readonly type: BlockType = 48;
	protected readonly isConst: boolean = false;
	protected params: [Float, Float] = [Float(3), Float(9)];
	protected paramOrder: ["walkSpeed", "jumpPower"] = ["walkSpeed", "jumpPower"];

	public set walkSpeed(val: number | boolean) {
		this.params[0] = Float(val);
	}

	public get walkSpeed() {
		return this.params[0];
	}

	public set jumpPower(val: number | boolean) {
		this.params[1] = Float(val);
	}

	public get jumpPower() {
		return this.params[1];
	}
}
