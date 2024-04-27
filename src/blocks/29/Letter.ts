import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType } from "../../helpers/types";
import { LetterInfo } from "./LetterInfo";

export class Letter extends BlockWithParameters<LetterInfo> {
	public readonly type: BlockType = 29;
	protected readonly isConst: boolean = false;
	protected params: [string] = [String("text")];
	protected paramOrder: ["text"] = ["text"];

	public set text(val: number | boolean | string) {
		this.params[0] = String(val);
	}

	public get text() {
		return this.params[0];
	}
}
