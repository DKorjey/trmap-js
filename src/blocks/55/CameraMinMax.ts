import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Float, Bool } from "../../helpers/types";
import { CameraMinMaxInfo } from "./CameraMinMaxInfo";

export class CameraMinMax extends BlockWithParameters<CameraMinMaxInfo> {
	public readonly type: BlockType = 55;
	protected readonly isConst: boolean = true;
	protected params: [Float, Float, Float, Float, Float, Bool, Bool] = [Float(0), Float(-100000), Float(100000), Float(-100000), Float(100000), Bool(1), Bool(0)];
	protected paramOrder: ["unusedMinX", "minX", "maxX", "minY", "maxY", "forHero", "forBody"] = ["unusedMinX", "minX", "maxX", "minY", "maxY", "forHero", "forBody"];

	public set minX(val: number | boolean) {
		this.params[1] = Float(val);
	}

	public get minX() {
		return this.params[1];
	}

	public set maxX(val: number | boolean) {
		this.params[2] = Float(val);
	}

	public get maxX() {
		return this.params[2];
	}

	public set minY(val: number | boolean) {
		this.params[3] = Float(val);
	}

	public get minY() {
		return this.params[3];
	}

	public set maxY(val: number | boolean) {
		this.params[4] = Float(val);
	}

	public get maxY() {
		return this.params[4];
	}

	public set forHero(val: number | boolean) {
		this.params[5] = Bool(val);
	}

	public get forHero() {
		return this.params[5];
	}

	public set forBody(val: number | boolean) {
		this.params[6] = Bool(val);
	}

	public get forBody() {
		return this.params[6];
	}
}
