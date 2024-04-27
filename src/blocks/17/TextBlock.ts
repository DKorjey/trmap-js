import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType } from "../../helpers/types";
import { TextBlockInfo } from "./TextBlockInfo";

export class TextBlock extends BlockWithParameters<TextBlockInfo> {
	public readonly type: BlockType = 17;
	protected readonly isConst: boolean = false;
	protected params: [string] = [String('text')];
	protected paramOrder: ["text"] = ["text"];

	public set text(val: number | boolean | string) {
		this.params[0] = String(val);
	}

	public get text() {
		return this.params[0];
	}
}
