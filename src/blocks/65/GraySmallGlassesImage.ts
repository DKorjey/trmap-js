import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class GraySmallGlassesImage extends BasicBlock {
	public readonly type: BlockType = 65;
	protected readonly isConst: boolean = false;
}
