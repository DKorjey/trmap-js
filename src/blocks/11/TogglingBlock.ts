import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Float } from "../../helpers/types";
import { TogglingBlockInfo } from "./TogglingBlockInfo";

export class TogglingBlock extends BlockWithParameters<TogglingBlockInfo> {
	public readonly type: BlockType = 11;
	protected readonly isConst: boolean = false;
	protected params: [Float, Float, Float] = [Float(2), Float(2), Float(0)];
	protected paramOrder: ["enableTime", "disableTime", "startTime"] = ["enableTime", "disableTime", "startTime"];

	public set enableTime(val: number | boolean) {
		this.params[0] = Float(val);
	}

	public get enableTime() {
		return this.params[0];
	}

	public set disableTime(val: number | boolean) {
		this.params[1] = Float(val);
	}

	public get disableTime() {
		return this.params[1];
	}

	public set startTime(val: number | boolean) {
		this.params[2] = Float(val);
	}

	public get startTime() {
		return this.params[2];
	}
}
