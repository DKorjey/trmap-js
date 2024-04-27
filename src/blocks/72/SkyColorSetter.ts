import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Color } from "../../helpers/types";
import { SkyColorSetterInfo } from "./SkyColorSetterInfo";

export class SkyColorSetter extends BlockWithParameters<SkyColorSetterInfo> {
	public readonly type: BlockType = 72;
	protected readonly isConst: boolean = true;
	protected params: [Color] = [Color("808080")];
	protected paramOrder: ["skyColor"] = ["skyColor"];

	public set skyColor(val: Color | string) {
		this.params[0] = Color(val);
	}

	public get skyColor() {
		return this.params[0];
	}
}
