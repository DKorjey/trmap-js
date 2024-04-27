import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Float } from "../../helpers/types";
import { GravityPowerSetterInfo } from "./GravityPowerSetterInfo";

export class GravityPowerSetter extends BlockWithParameters<GravityPowerSetterInfo> {
	public readonly type: BlockType = 74;
	protected readonly isConst: boolean = true;
	protected params: [Float] = [Float(1)];
	protected paramOrder: ["gravityPower"] = ["gravityPower"];

	public set gravityPower(val: number | boolean) {
		this.params[0] = Float(val);
	}

	public get gravityPower() {
		return this.params[0];
	}
}
