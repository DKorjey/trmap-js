import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class GradientImage extends BasicBlock {
	public readonly type: BlockType = 52;
	protected readonly isConst: boolean = false;
}
