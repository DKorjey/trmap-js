import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Int, Float } from "../../helpers/types";
import { TouchBlockInfo } from "./TouchBlockInfo";

enum TouchBlockDirection {
	Both = 0,
	Horizontal,
	Vertical
};

export class TouchBlock extends BlockWithParameters<TouchBlockInfo> {
	public readonly type: BlockType = 16;
	protected readonly isConst: boolean = false;
	protected params: [Int, Float] = [Int(0), Float(10)];
	protected paramOrder: ["moveDirection", "speed"] = ["moveDirection", "speed"];

	public set moveDirection(val: number | boolean | TouchBlockDirection) {
		this.params[0] = Int(Math.max(0, Math.min(2, +val)));
	}

	public get moveDirection() {
		return this.params[0];
	}

	public set speed(val: number | boolean) {
		this.params[1] = Float(val);
	}

	public get speed() {
		return this.params[1];
	}
}
