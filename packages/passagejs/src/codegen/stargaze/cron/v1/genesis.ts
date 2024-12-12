import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the cron module's genesis state. */
export interface GenesisState {
  /**
   * List of all the contracts that have been given the privilege status via
   * governance. They can set up hooks to abci.EndBlocker
   */
  privilegedContractAddresses: string[];
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
}
export interface GenesisStateAminoMsg {
  type: "/publicawesome.stargaze.cron.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the cron module's genesis state. */
export interface GenesisStateSDKType {
  privileged_contract_addresses: string[];
}
function createBaseGenesisState(): GenesisState {
  return {
    privilegedContractAddresses: []
  };
}
export const GenesisState = {
  typeUrl: "/publicawesome.stargaze.cron.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.privilegedContractAddresses) && (!o.privilegedContractAddresses.length || typeof o.privilegedContractAddresses[0] === "string"));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.privileged_contract_addresses) && (!o.privileged_contract_addresses.length || typeof o.privileged_contract_addresses[0] === "string"));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.privileged_contract_addresses) && (!o.privileged_contract_addresses.length || typeof o.privileged_contract_addresses[0] === "string"));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.privilegedContractAddresses) {
      writer.uint32(10).string(v!);
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
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.privilegedContractAddresses = object.privileged_contract_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.privilegedContractAddresses) {
      obj.privileged_contract_addresses = message.privilegedContractAddresses.map(e => e);
    } else {
      obj.privileged_contract_addresses = message.privilegedContractAddresses;
    }
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