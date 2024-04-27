import { macroIds } from "../../helpers/consts";
import { MovementType } from "../../helpers/enums";
import { Float, Int, ParamEntry, paramToString } from "../../helpers/types";
import { BasicBlock } from "./BasicBlock";
import { BlockWithParameters, BlockWithParametersInfo } from "./BlockWithParameters";

export type BlockWithCatalogInfo<T extends ParamEntry[]> = BlockWithParametersInfo<T> & {
	catalogs?: BasicBlock[] | BasicBlock[][];
}

export abstract class WithCatalogs<T extends ParamEntry[]> extends BlockWithParameters<T> {
	protected catalogs: BasicBlock[][] = [[]];
	protected readonly isTrigger: boolean = false;
	protected readonly catalogsCount: number = 1;

	constructor(info?: BlockWithCatalogInfo<T>) {
		super(info);
		this.catalogs = Array.from({ length: this.catalogsCount }, () => [] as BasicBlock[]);
		if (!info.catalogs) return;
		if (Array.isArray(info.catalogs) && info.catalogs.every(c => Array.isArray(c))) info.catalogs.forEach((c, i) => this.addToCatalog(i, ...c));
		else if (Array.isArray(info.catalogs)) this.addToCatalog(Int(0), ...this.catalogs.flat());
	}

	protected get paramsAsArray(): (string | BasicBlock)[] {
		return ['¶', ...this.params.map(p => paramToString(p)), ...this.catalogs.map(c => this.catalogs.length > 1 ? [...c, '§'] : c).flat(), '¶', ''];
	}

	public addToCatalog(catalog: Int, ...blocks: BasicBlock[]) {
		if (catalog >= this.catalogsCount) return;
		let uniqueBlocks = blocks.filter(b => !this.catalogs[catalog].includes(b) && b.type !== 2);
		if (this.isTrigger) uniqueBlocks = uniqueBlocks.filter(b => macroIds.includes(b.type));
		if (!uniqueBlocks.length) return;
		this.catalogs[catalog].push(...uniqueBlocks);
		return this;
	}

	public removeFromCatalog(catalog: Int, ...blocks: BasicBlock[]) {
		this.catalogs[catalog] = this.catalogs[catalog].filter(b => !blocks.includes(b));
		return this;
	}

	public override get asArray() {
		const info: (number | string | Int | Float | BasicBlock)[] = [this.type, this.uuid, ...this.position.asArray, ...this.size.asArray, this.parent ?? '', this.angle ?? '', this.parent ?? ''];
		if (this.angle !== 0) info.push(this.angle);
		else if (!this.active) info.push(this.angle, this.active);
		!this.appearance.isDefault && info.push(...this.appearance.asArray);
		this.movement.type !== MovementType.None && info.push(...this.movement.asArray);
		this.rotationSpeed !== Int(0) && info.push('R', this.rotationSpeed, 'R', '');
		info.push(...this.paramsAsArray);
		return info;
	}
}
