/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { ContractBase, IContractConstructor, IEmptyClient } from "./contractContextBase";
import { BaseMinterClient } from "./BaseMinter.client";
import { BaseMinterMsgComposer } from "./BaseMinter.message-composer";
export class BaseMinter extends ContractBase<BaseMinterClient, IEmptyClient, BaseMinterMsgComposer> {
  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient
  }: IContractConstructor) {
    super(address, cosmWasmClient, signingCosmWasmClient, BaseMinterClient, undefined, BaseMinterMsgComposer);
  }

}