import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Int, Float } from "../../helpers/types";
import { OneDirectionMovableBlockInfo } from "./OneDirectionMovableBlockInfo";

export class OneDirectionMovableBlock extends BlockWithParameters<OneDirectionMovableBlockInfo> {
	public readonly type: BlockType = 14;
	protected readonly isConst: boolean = false;
	protected params: [Int, Float] = [Int(0), Float(4)];
	protected paramOrder: ["angle", "speed"] = ["angle", "speed"];

	public set angleType(val: number | boolean) {
		this.params[0] = Int(Math.max(0, Math.min(7, +val)));
	}

	public get angleType() {
		return this.params[0];
	}

	public set speed(val: number | boolean) {
		this.params[1] = Float(val);
	}

	public get speed() {
		return this.params[1];
	}
}
