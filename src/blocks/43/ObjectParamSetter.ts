import { BlockWithParameters, BlockWithParametersInfo } from "../../classes/abstract/BlockWithParameters";
import { BlockType, ParamEntry, ParamNames, Params, paramToString } from "../../helpers/types";

export class ObjectParamSetter<T extends ParamEntry[]> extends BlockWithParameters<T> {
	protected block: BlockWithParameters<T>;
	public type: BlockType;
	protected isConst: boolean = true;

  constructor(baseBlock: BlockWithParameters<T>, info?: BlockWithParametersInfo<T>) {
    super(info);

    if (baseBlock.parameters) this.setParams(baseBlock.parameters);
  }

	protected get paramsAsArray() {
		return ["¶", this.block, ...this.params.map(p => paramToString(p)), "¶", ""];
	}
}
