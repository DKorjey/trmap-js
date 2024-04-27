import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class SpikeImage extends BasicBlock {
	public readonly type: BlockType = 35;
	protected readonly isConst: boolean = false;
}
