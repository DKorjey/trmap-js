import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { Vector2 } from "../../classes/real/Vector2";
import { BlockType } from "../../helpers/types";

export class AllDirectionMovableBlock extends BasicBlock {
	public readonly type: BlockType = 13;
	protected readonly isConst: boolean = true;
}
