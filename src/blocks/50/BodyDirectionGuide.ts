import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Int, Bool } from "../../helpers/types";
import { BodyDirectionGuideInfo } from "./BodyDirectionGuideInfo";

export enum BodyDirectionGuideTypes {
	Left = 0,
	Right,
	Up,
	Stop,
	UpLeft,
	LeftUp = 4,
	UpRight,
	RightUp = 5
}

export class BodyDirectionGuide extends BlockWithParameters<BodyDirectionGuideInfo> {
	public readonly type: BlockType = 50;
	protected readonly isConst: boolean = false;
	protected params: [Int, Bool, Bool] = [Int(0), Bool(1), Bool(1)];
	protected paramOrder: ["guideType", "forHero", "forBody"] = ["guideType", "forHero", "forBody"];

	public set guideType(val: number | boolean | BodyDirectionGuideTypes) {
		this.params[0] = Int(Math.max(0, Math.min(5, +val)));
	}

	public get guideType() {
		return this.params[0];
	}

	public set forHero(val: number | boolean) {
		this.params[1] = Bool(val);
	}

	public get forHero() {
		return this.params[1];
	}

	public set forBody(val: number | boolean) {
		this.params[2] = Bool(val);
	}

	public get forBody() {
		return this.params[2];
	}
}
