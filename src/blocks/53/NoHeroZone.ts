import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class NoHeroZone extends BasicBlock {
	public readonly type: BlockType = 53;
	protected readonly isConst: boolean = false;
}
