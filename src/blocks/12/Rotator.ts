import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Bool } from "../../helpers/types";
import { RotatorInfo } from "./RotatorInfo";

export class Rotator extends BlockWithParameters<RotatorInfo> {
	public readonly type: BlockType = 12;
	protected readonly isConst: boolean = false;
	protected params: [Bool] = [Bool(1)];
	protected paramOrder: ["clockwise"] = ["clockwise"];

	public set clockwise(val: number | boolean) {
		this.params[0] = Bool(val);
	}

	public get clockwise() {
		return this.params[0];
	}
}
