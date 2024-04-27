import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class BlockImage extends BasicBlock {
	public readonly type: BlockType = 36;
	protected readonly isConst: boolean = false;
}
