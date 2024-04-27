import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Float, Bool } from "../../helpers/types";
import { CameraSizeInfo } from "./CameraSizeInfo";

export class CameraSize extends BlockWithParameters<CameraSizeInfo> {
	public readonly type: BlockType = 56;
	protected readonly isConst: boolean = true;
	protected params: [Float, Float, Bool, Bool] = [Float(0), Float(15), Bool(1), Bool(0)];
	protected paramOrder: ["unusedSize", "size", "forHero", "forBody"] = ["unusedSize", "size", "forHero", "forBody"];

	public set newCameraSize(val: number | boolean) {
		this.params[1] = Float(val);
	}

	public get newCameraSize() {
		return this.params[1];
	}

	public set forHero(val: number | boolean) {
		this.params[2] = Bool(val);
	}

	public get forHero() {
		return this.params[2];
	}

	public set forBody(val: number | boolean) {
		this.params[3] = Bool(val);
	}

	public get forBody() {
		return this.params[3];
	}
}
