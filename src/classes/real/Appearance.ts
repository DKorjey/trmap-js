import chroma from "chroma-js";
import { Int } from "../../helpers/types";

export class Appearance {
	constructor(public color: chroma.Color = chroma('fff'), public layer: Int = Int(0)) {}

	public get clone() {
		return new Appearance(chroma(this.color), this.layer);
	}

	public get isDefault() {
		return this.color.hex("rgba") === chroma('fff').hex('rgba') && this.layer === Int(0);
	}

	public get asArray(): ['C', string, Int, 'C'] {
		return ['C', this.color.hex("rgba").replace('#', '').toUpperCase(), this.layer, 'C'];
	}
}
