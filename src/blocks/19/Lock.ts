import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Int } from "../../helpers/types";
import { LockInfo } from "./LockInfo";

export class Lock extends BlockWithParameters<LockInfo> {
	public readonly type: BlockType = 19;
	protected readonly isConst: boolean = false;
	protected params: [Int] = [Int(0)];
	protected paramOrder: ["id"] = ["id"];

	public set id(val: number | boolean) {
		this.params[0] = Int(val);
	}

	public get id() {
		return this.params[0];
	}
}
