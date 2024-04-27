import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Int, Float } from "../../helpers/types";
import { TiltBlockInfo } from "./TiltBlockInfo";

export enum TiltBlockDirection {
	Both = 0,
	Horizontal,
	Vertical
};

export class TiltBlock extends BlockWithParameters<TiltBlockInfo> {
	public readonly type: BlockType = 15;
	protected readonly isConst: boolean = false;
	protected params: [Int, Float] = [Int(0), Float(10)];
	protected paramOrder: ["moveDirection", "speed"] = ["moveDirection", "speed"];

	public set moveDirection(val: number | boolean | TiltBlockDirection) {
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
