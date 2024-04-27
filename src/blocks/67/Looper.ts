import { BlockType, Bool, Color } from "../../helpers/types";
import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { LooperInfo } from "./LooperInfo";

export class Looper extends BlockWithParameters<LooperInfo> {
	protected params: [Color, Color, Bool, string] = [Color("fff"), Color("fff"), Bool(0), "trSkin17cYhAQAACMCwSvf074WgBGJTqzOJiIiIiIj8yAI="];
	protected paramOrder: ["primaryColor", "secondaryColor", "flipX", "skin"] = ["primaryColor", "secondaryColor", "flipX", "skin"];

	public readonly type: BlockType = 67;
	protected readonly isConst: boolean = false;

	public get primaryColor() {
		return this.params[0];
	}
	public set primaryColor(val: Color) {
		this.params[0] = val;
	}

	public get secondaryColor() {
		return this.params[1];
	}
	public set secondaryColor(val: Color) {
		this.params[1] = val;
	}

	public get flipX() {
		return this.params[2];
	}
	public set flipX(val: number | boolean) {
		this.params[2] = Bool(val);
	}

	public get skin() {
		return this.params[3];
	}
	public set skin(val: string) {
		this.params[3] = val;
	}
}
