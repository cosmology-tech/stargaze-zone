import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/** Params holds parameters for the globalfee module. */
export interface Params {
  /** Addresses which are whitelisted to modify the gas free operations */
  privilegedAddresses: string[];
  /** Minimum stores the minimum gas price(s) for all TX on the chain. */
  minimumGasPrices: DecCoin[];
}
export interface ParamsProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the globalfee module. */
export interface ParamsAmino {
  /** Addresses which are whitelisted to modify the gas free operations */
  privileged_addresses?: string[];
  /** Minimum stores the minimum gas price(s) for all TX on the chain. */
  minimum_gas_prices?: DecCoinAmino[];
}
export interface ParamsAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.Params";
  value: ParamsAmino;
}
/** Params holds parameters for the globalfee module. */
export interface ParamsSDKType {
  privileged_addresses: string[];
  minimum_gas_prices: DecCoinSDKType[];
}
/** Configuration for code Ids which can have zero gas operations */
export interface CodeAuthorization {
  /** authorized code ids */
  codeId: bigint;
  /** authorized contract operation methods */
  methods: string[];
}
export interface CodeAuthorizationProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.CodeAuthorization";
  value: Uint8Array;
}
/** Configuration for code Ids which can have zero gas operations */
export interface CodeAuthorizationAmino {
  /** authorized code ids */
  code_id?: string;
  /** authorized contract operation methods */
  methods?: string[];
}
export interface CodeAuthorizationAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.CodeAuthorization";
  value: CodeAuthorizationAmino;
}
/** Configuration for code Ids which can have zero gas operations */
export interface CodeAuthorizationSDKType {
  code_id: bigint;
  methods: string[];
}
/** Configuration for contract addresses which can have zero gas operations */
export interface ContractAuthorization {
  /** authorized contract addresses */
  contractAddress: string;
  /** authorized contract operation methods */
  methods: string[];
}
export interface ContractAuthorizationProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.ContractAuthorization";
  value: Uint8Array;
}
/** Configuration for contract addresses which can have zero gas operations */
export interface ContractAuthorizationAmino {
  /** authorized contract addresses */
  contract_address?: string;
  /** authorized contract operation methods */
  methods?: string[];
}
export interface ContractAuthorizationAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.ContractAuthorization";
  value: ContractAuthorizationAmino;
}
/** Configuration for contract addresses which can have zero gas operations */
export interface ContractAuthorizationSDKType {
  contract_address: string;
  methods: string[];
}
function createBaseParams(): Params {
  return {
    privilegedAddresses: [],
    minimumGasPrices: []
  };
}
export const Params = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.privilegedAddresses) && (!o.privilegedAddresses.length || typeof o.privilegedAddresses[0] === "string") && Array.isArray(o.minimumGasPrices) && (!o.minimumGasPrices.length || DecCoin.is(o.minimumGasPrices[0])));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.privileged_addresses) && (!o.privileged_addresses.length || typeof o.privileged_addresses[0] === "string") && Array.isArray(o.minimum_gas_prices) && (!o.minimum_gas_prices.length || DecCoin.isSDK(o.minimum_gas_prices[0])));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.privileged_addresses) && (!o.privileged_addresses.length || typeof o.privileged_addresses[0] === "string") && Array.isArray(o.minimum_gas_prices) && (!o.minimum_gas_prices.length || DecCoin.isAmino(o.minimum_gas_prices[0])));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.privilegedAddresses) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.minimumGasPrices) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privilegedAddresses.push(reader.string());
          break;
        case 2:
          message.minimumGasPrices.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.privilegedAddresses = object.privilegedAddresses?.map(e => e) || [];
    message.minimumGasPrices = object.minimumGasPrices?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.privilegedAddresses = object.privileged_addresses?.map(e => e) || [];
    message.minimumGasPrices = object.minimum_gas_prices?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.privilegedAddresses) {
      obj.privileged_addresses = message.privilegedAddresses.map(e => e);
    } else {
      obj.privileged_addresses = message.privilegedAddresses;
    }
    if (message.minimumGasPrices) {
      obj.minimum_gas_prices = message.minimumGasPrices.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.minimum_gas_prices = message.minimumGasPrices;
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
function createBaseCodeAuthorization(): CodeAuthorization {
  return {
    codeId: BigInt(0),
    methods: []
  };
}
export const CodeAuthorization = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.CodeAuthorization",
  is(o: any): o is CodeAuthorization {
    return o && (o.$typeUrl === CodeAuthorization.typeUrl || typeof o.codeId === "bigint" && Array.isArray(o.methods) && (!o.methods.length || typeof o.methods[0] === "string"));
  },
  isSDK(o: any): o is CodeAuthorizationSDKType {
    return o && (o.$typeUrl === CodeAuthorization.typeUrl || typeof o.code_id === "bigint" && Array.isArray(o.methods) && (!o.methods.length || typeof o.methods[0] === "string"));
  },
  isAmino(o: any): o is CodeAuthorizationAmino {
    return o && (o.$typeUrl === CodeAuthorization.typeUrl || typeof o.code_id === "bigint" && Array.isArray(o.methods) && (!o.methods.length || typeof o.methods[0] === "string"));
  },
  encode(message: CodeAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    for (const v of message.methods) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CodeAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.methods.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CodeAuthorization>): CodeAuthorization {
    const message = createBaseCodeAuthorization();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.methods = object.methods?.map(e => e) || [];
    return message;
  },
  fromAmino(object: CodeAuthorizationAmino): CodeAuthorization {
    const message = createBaseCodeAuthorization();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    message.methods = object.methods?.map(e => e) || [];
    return message;
  },
  toAmino(message: CodeAuthorization): CodeAuthorizationAmino {
    const obj: any = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId.toString() : undefined;
    if (message.methods) {
      obj.methods = message.methods.map(e => e);
    } else {
      obj.methods = message.methods;
    }
    return obj;
  },
  fromAminoMsg(object: CodeAuthorizationAminoMsg): CodeAuthorization {
    return CodeAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: CodeAuthorizationProtoMsg): CodeAuthorization {
    return CodeAuthorization.decode(message.value);
  },
  toProto(message: CodeAuthorization): Uint8Array {
    return CodeAuthorization.encode(message).finish();
  },
  toProtoMsg(message: CodeAuthorization): CodeAuthorizationProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.CodeAuthorization",
      value: CodeAuthorization.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CodeAuthorization.typeUrl, CodeAuthorization);
function createBaseContractAuthorization(): ContractAuthorization {
  return {
    contractAddress: "",
    methods: []
  };
}
export const ContractAuthorization = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.ContractAuthorization",
  is(o: any): o is ContractAuthorization {
    return o && (o.$typeUrl === ContractAuthorization.typeUrl || typeof o.contractAddress === "string" && Array.isArray(o.methods) && (!o.methods.length || typeof o.methods[0] === "string"));
  },
  isSDK(o: any): o is ContractAuthorizationSDKType {
    return o && (o.$typeUrl === ContractAuthorization.typeUrl || typeof o.contract_address === "string" && Array.isArray(o.methods) && (!o.methods.length || typeof o.methods[0] === "string"));
  },
  isAmino(o: any): o is ContractAuthorizationAmino {
    return o && (o.$typeUrl === ContractAuthorization.typeUrl || typeof o.contract_address === "string" && Array.isArray(o.methods) && (!o.methods.length || typeof o.methods[0] === "string"));
  },
  encode(message: ContractAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    for (const v of message.methods) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContractAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.methods.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ContractAuthorization>): ContractAuthorization {
    const message = createBaseContractAuthorization();
    message.contractAddress = object.contractAddress ?? "";
    message.methods = object.methods?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ContractAuthorizationAmino): ContractAuthorization {
    const message = createBaseContractAuthorization();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    message.methods = object.methods?.map(e => e) || [];
    return message;
  },
  toAmino(message: ContractAuthorization): ContractAuthorizationAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    if (message.methods) {
      obj.methods = message.methods.map(e => e);
    } else {
      obj.methods = message.methods;
    }
    return obj;
  },
  fromAminoMsg(object: ContractAuthorizationAminoMsg): ContractAuthorization {
    return ContractAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractAuthorizationProtoMsg): ContractAuthorization {
    return ContractAuthorization.decode(message.value);
  },
  toProto(message: ContractAuthorization): Uint8Array {
    return ContractAuthorization.encode(message).finish();
  },
  toProtoMsg(message: ContractAuthorization): ContractAuthorizationProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.ContractAuthorization",
      value: ContractAuthorization.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ContractAuthorization.typeUrl, ContractAuthorization);