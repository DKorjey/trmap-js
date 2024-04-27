import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Float } from "../../helpers/types";
import { TimeScaleInfo } from "./TimeScaleInfo";

export class TimeScale extends BlockWithParameters<TimeScaleInfo> {
	public readonly type: BlockType = 71;
	protected readonly isConst: boolean = true;
	protected params: [Float] = [Float(1)];
	protected paramOrder: ["scaleFactor"] = ["scaleFactor"];

	public set scaleFactor(val: number | boolean) {
		this.params[0] = Float(val);
	}

	public get scaleFactor() {
		return this.params[0];
	}
}
