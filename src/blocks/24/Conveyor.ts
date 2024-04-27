import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Float } from "../../helpers/types";
import { ConveyorInfo } from "./ConveyorInfo";

export class Conveyor extends BlockWithParameters<ConveyorInfo> {
	public readonly type: BlockType = 24;
	protected readonly isConst: boolean = false;
	protected params: [Float] = [Float(0)];
	protected paramOrder: ["speed"] = ["speed"];

	public set speed(val: number | boolean) {
		this.params[0] = Float(val);
	}

	public get speed() {
		return this.params[0];
	}
}
