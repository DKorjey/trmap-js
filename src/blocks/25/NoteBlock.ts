import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Float } from "../../helpers/types";
import { NoteBlockInfo } from "./NoteBlockInfo";

export class NoteBlock extends BlockWithParameters<NoteBlockInfo> {
	public readonly type: BlockType = 25;
	protected readonly isConst: boolean = false;
	protected params: [string, Float] = [String('C5'), Float(1)];
	protected paramOrder: ["note", "volume"] = ["note", "volume"];

	public set note(val: string) {
		this.params[0] = String(val).replace("B", "H");
	}

	public get note() {
		return this.params[0];
	}

	public set volume(val: number | boolean) {
		this.params[1] = Float(val);
	}

	public get volume() {
		return this.params[1];
	}
}
