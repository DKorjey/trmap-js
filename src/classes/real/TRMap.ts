import { standartLastWords } from "../../helpers/consts";
import { Bool, Color, Float, Int, paramToString } from "../../helpers/types";
import { BasicBlock } from "../abstract/BasicBlock";

export interface TRMapInfo {
	actualVer?: Int;
	dash?: Bool;
	hook?: Bool;
	grave?: Bool;
	checkPointMode?: "standart" | "last";
	skyColor?: Color;
	cameraSize?: Float;

	minX?: Float;
	maxX?: Float;
	minY?: Float;
	maxY?: Float;

	lastWords?: string;

	blocks?: BasicBlock[];
}

export class TRMap {
	public actualVer = Int(2);
	public dash = Bool(1);
	public hook = Bool(1);
	public grave = Bool(1);
	public checkPointMode: "standart" | "last" = "standart";
	public skyColor: Color = Color("808080");
	public cameraSize = Float(15);

	public minX = Float(-100000);
	public maxX = Float(100000);
	public minY = Float(-100000);
	public maxY = Float(100000);

	public lastWords = standartLastWords;

	public blocks: BasicBlock[] = [];

	constructor(info?: TRMapInfo) {
		if (!info) return;
		if (info.actualVer) this.actualVer = info.actualVer;
		if (info.dash) this.dash = info.dash;
		if (info.hook) this.hook = info.hook;
		if (info.grave) this.grave = info.grave;
		if (info.checkPointMode) this.checkPointMode = info.checkPointMode;
		if (info.skyColor) this.skyColor = info.skyColor;

		if (info.minX) this.minX = info.minX;
		if (info.maxX) this.maxX = info.maxX;
		if (info.minY) this.minY = info.minY;
		if (info.maxY) this.maxY = info.maxY;

		if (info.lastWords) this.lastWords = info.lastWords;

		if (info.blocks) this.blocks = info.blocks;
	}

	public export() {
		const mapInfo = [this.actualVer, this.dash, this.hook, paramToString(this.skyColor), this.cameraSize, ...(this.maxX === Float(100000) && this.maxY === Float(100000) ? ['', ''] : [this.maxX, this.maxY]), ...(this.minX === Float(-100000) && this.minY === Float(-100000) ? ['', ''] : [this.minX, this.minX]), this.grave, +(this.checkPointMode === "standart"), ...(this.lastWords === standartLastWords ? [] : ['L', this.lastWords, 'L']), ''];
		const blocksIDs = [...new Set(this.blocks.map(b => b.uniqueId))];
		const blockLines = this.blocks.map((b, i) => {
			const arr = b.asArray.map(el => el instanceof BasicBlock ? blocksIDs.indexOf(el.uniqueId) : el);
			arr.splice(1, 1, i);
			return arr.join(';');
		});

		return mapInfo.join(';') + '\n' + blockLines.join('\n');
	}
}
