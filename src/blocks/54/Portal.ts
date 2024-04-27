import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Int } from "../../helpers/types";
import { PortalInfo } from "./PortalInfo";

export class Portal extends BlockWithParameters<PortalInfo> {
	public readonly type: BlockType = 54;
	protected readonly isConst: boolean = true;
	protected params: [Int] = [Int(0)];
	protected paramOrder: ["id"] = ["id"];

	public set id(val: number | boolean) {
		this.params[0] = Int(val);
	}

	public get id() {
		return this.params[0];
	}
}
