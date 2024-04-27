import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class GlassImage extends BasicBlock {
	public readonly type: BlockType = 34;
	protected readonly isConst: boolean = false;
}
