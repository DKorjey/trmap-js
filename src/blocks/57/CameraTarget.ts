import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Float, Bool } from "../../helpers/types";
import { CameraTargetInfo } from "./CameraTargetInfo";

export class CameraTarget extends BlockWithParameters<CameraTargetInfo> {
	public readonly type: BlockType = 57;
	protected readonly isConst: boolean = true;
	protected params: [Float, Bool, Float, Float] = [Float(10), Bool(0), Float(15), Float(10)];
	protected paramOrder: ["speed", "changeSize", "newSize", "sizeChangingSpeed"] = ["speed", "changeSize", "newSize", "sizeChangingSpeed"];

	public set speed(val: number | boolean) {
		this.params[0] = Float(val);
	}

	public get speed() {
		return this.params[0];
	}

	public set changeSize(val: number | boolean) {
		this.params[1] = Bool(val);
	}

	public get changeSize() {
		return this.params[1];
	}

	public set newSize(val: number | boolean) {
		this.params[2] = Float(val);
	}

	public get newSize() {
		return this.params[2];
	}

	public set sizeChangingSpeed(val: number | boolean) {
		this.params[3] = Float(val);
	}

	public get sizeChangingSpeed() {
		return this.params[3];
	}
}
