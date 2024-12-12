import { Params, ParamsAmino, ParamsSDKType } from "./cron";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/** GenesisState defines the cron module's genesis state. */
export interface GenesisState {
  /**
   * List of all the contracts that have been given the privilege status via
   * governance. They can set up hooks to abci.EndBlocker
   */
  privilegedContractAddresses: string[];
  /** Module params */
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/publicawesome.stargaze.cron.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the cron module's genesis state. */
export interface GenesisStateAmino {
  /**
   * List of all the contracts that have been given the privilege status via
   * governance. They can set up hooks to abci.EndBlocker
   */
  privileged_contract_addresses?: string[];
  /** Module params */
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/publicawesome.stargaze.cron.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the cron module's genesis state. */
export interface GenesisStateSDKType {
  privileged_contract_addresses: string[];
  params: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    privilegedContractAddresses: [],
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/publicawesome.stargaze.cron.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.privilegedContractAddresses) && (!o.privilegedContractAddresses.length || typeof o.privilegedContractAddresses[0] === "string") && Params.is(o.params));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.privileged_contract_addresses) && (!o.privileged_contract_addresses.length || typeof o.privileged_contract_addresses[0] === "string") && Params.isSDK(o.params));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.privileged_contract_addresses) && (!o.privileged_contract_addresses.length || typeof o.privileged_contract_addresses[0] === "string") && Params.isAmino(o.params));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.privilegedContractAddresses) {
      writer.uint32(10).string(v!);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privilegedContractAddresses.push(reader.string());
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.privilegedContractAddresses = object.privilegedContractAddresses?.map(e => e) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.privilegedContractAddresses = object.privileged_contract_addresses?.map(e => e) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.privilegedContractAddresses) {
      obj.privileged_contract_addresses = message.privilegedContractAddresses.map(e => e);
    } else {
      obj.privileged_contract_addresses = message.privilegedContractAddresses;
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.cron.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);