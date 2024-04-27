import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Float } from "../../helpers/types";
import { TrampolineInfo } from "./TrampolineInfo";

export class Trampoline extends BlockWithParameters<TrampolineInfo> {
	protected params: [Float] = [Float(10)];
	protected paramOrder: ["power"] = ["power"];
	public readonly type: BlockType = 5;
	protected readonly isConst: boolean = false;
}
