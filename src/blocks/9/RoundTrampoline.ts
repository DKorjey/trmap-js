import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Float } from "../../helpers/types";
import { RoundTrampolineInfo } from "./RoundTrampolineInfo";

export class RoundTrampoline extends BlockWithParameters<RoundTrampolineInfo> {
	protected params: [Float] = [Float(20)];
	protected paramOrder: ["power"] = ["power"];
	public readonly type: BlockType = 9;
	protected readonly isConst: boolean = false;

	public set power(val: number) {
		this.params[0] = Float(val);
	}
	public get power() {
		return this.params[0];
	}
}
