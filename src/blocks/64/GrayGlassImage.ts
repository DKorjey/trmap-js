import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class GrayGlassImage extends BasicBlock {
	public readonly type: BlockType = 64;
	protected readonly isConst: boolean = false;
}
