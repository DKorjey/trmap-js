import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Bool } from "../../helpers/types";
import { SuperTileInfo } from "./SuperTileInfo";

export class SuperTile extends BlockWithParameters<SuperTileInfo> {
	public readonly type: BlockType = 80;
	protected readonly isConst: boolean = true;
	protected params: [Bool] = [Bool(0)];
	protected paramOrder: ["isOn"] = ["isOn"];

	public set isOn(val: number | boolean) {
		this.params[0] = Bool(val);
	}

	public get isOn() {
		return this.params[0];
	}
}
