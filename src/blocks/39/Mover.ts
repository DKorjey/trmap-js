import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Int, Float } from "../../helpers/types";
import { MoverInfo } from "./MoverInfo";

export class Mover extends BlockWithParameters<MoverInfo> {
	public readonly type: BlockType = 39;
	protected readonly isConst: boolean = false;
	protected params: [Int, Float] = [Int(0), Float(4)];
	protected paramOrder: ["angleType", "speed"] = ["angleType", "speed"];

	public set angleType(val: number | boolean) {
		this.params[0] = Int(val);
	}

	public get angleType() {
		return this.params[0];
	}

	public set speed(val: number | boolean) {
		this.params[1] = Float(val);
	}

	public get speed() {
		return this.params[1];
	}
}
