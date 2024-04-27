import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class Square extends BasicBlock {
	public readonly type: BlockType = 20;
	protected readonly isConst: boolean = false;
}
