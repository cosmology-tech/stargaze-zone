import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccount {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
  startTime: bigint;
  endTime: bigint;
  delayed: boolean;
}
export interface MsgCreateVestingAccountProtoMsg {
  typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount";
  value: Uint8Array;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccountAmino {
  from_address?: string;
  to_address?: string;
  amount?: CoinAmino[];
  start_time?: string;
  end_time?: string;
  delayed?: boolean;
}
export interface MsgCreateVestingAccountAminoMsg {
  type: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount";
  value: MsgCreateVestingAccountAmino;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccountSDKType {
  from_address: string;
  to_address: string;
  amount: CoinSDKType[];
  start_time: bigint;
  end_time: bigint;
  delayed: boolean;
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response
 * type.
 */
export interface MsgCreateVestingAccountResponse {}
export interface MsgCreateVestingAccountResponseProtoMsg {
  typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccountResponse";
  value: Uint8Array;
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response
 * type.
 */
export interface MsgCreateVestingAccountResponseAmino {}
export interface MsgCreateVestingAccountResponseAminoMsg {
  type: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccountResponse";
  value: MsgCreateVestingAccountResponseAmino;
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response
 * type.
 */
export interface MsgCreateVestingAccountResponseSDKType {}
/**
 * MsgFundFairburnPool allows an account to directly
 * fund the fee collector pool.
 */
export interface MsgFundFairburnPool {
  sender: string;
  amount: Coin[];
}
export interface MsgFundFairburnPoolProtoMsg {
  typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgFundFairburnPool";
  value: Uint8Array;
}
/**
 * MsgFundFairburnPool allows an account to directly
 * fund the fee collector pool.
 */
export interface MsgFundFairburnPoolAmino {
  sender?: string;
  amount?: CoinAmino[];
}
export interface MsgFundFairburnPoolAminoMsg {
  type: "/publicawesome.stargaze.alloc.v1beta1.MsgFundFairburnPool";
  value: MsgFundFairburnPoolAmino;
}
/**
 * MsgFundFairburnPool allows an account to directly
 * fund the fee collector pool.
 */
export interface MsgFundFairburnPoolSDKType {
  sender: string;
  amount: CoinSDKType[];
}
/**
 * MsgFundFairburnPoolResponse defines the Msg/MsgFundFairburnPool response
 * type.
 */
export interface MsgFundFairburnPoolResponse {}
export interface MsgFundFairburnPoolResponseProtoMsg {
  typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgFundFairburnPoolResponse";
  value: Uint8Array;
}
/**
 * MsgFundFairburnPoolResponse defines the Msg/MsgFundFairburnPool response
 * type.
 */
export interface MsgFundFairburnPoolResponseAmino {}
export interface MsgFundFairburnPoolResponseAminoMsg {
  type: "/publicawesome.stargaze.alloc.v1beta1.MsgFundFairburnPoolResponse";
  value: MsgFundFairburnPoolResponseAmino;
}
/**
 * MsgFundFairburnPoolResponse defines the Msg/MsgFundFairburnPool response
 * type.
 */
export interface MsgFundFairburnPoolResponseSDKType {}
function createBaseMsgCreateVestingAccount(): MsgCreateVestingAccount {
  return {
    fromAddress: "",
    toAddress: "",
    amount: [],
    startTime: BigInt(0),
    endTime: BigInt(0),
    delayed: false
  };
}
export const MsgCreateVestingAccount = {
  typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount",
  is(o: any): o is MsgCreateVestingAccount {
    return o && (o.$typeUrl === MsgCreateVestingAccount.typeUrl || typeof o.fromAddress === "string" && typeof o.toAddress === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])) && typeof o.startTime === "bigint" && typeof o.endTime === "bigint" && typeof o.delayed === "boolean");
  },
  isSDK(o: any): o is MsgCreateVestingAccountSDKType {
    return o && (o.$typeUrl === MsgCreateVestingAccount.typeUrl || typeof o.from_address === "string" && typeof o.to_address === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])) && typeof o.start_time === "bigint" && typeof o.end_time === "bigint" && typeof o.delayed === "boolean");
  },
  isAmino(o: any): o is MsgCreateVestingAccountAmino {
    return o && (o.$typeUrl === MsgCreateVestingAccount.typeUrl || typeof o.from_address === "string" && typeof o.to_address === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])) && typeof o.start_time === "bigint" && typeof o.end_time === "bigint" && typeof o.delayed === "boolean");
  },
  encode(message: MsgCreateVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(32).int64(message.startTime);
    }
    if (message.endTime !== BigInt(0)) {
      writer.uint32(40).int64(message.endTime);
    }
    if (message.delayed === true) {
      writer.uint32(48).bool(message.delayed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.startTime = reader.int64();
          break;
        case 5:
          message.endTime = reader.int64();
          break;
        case 6:
          message.delayed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateVestingAccount>): MsgCreateVestingAccount {
    const message = createBaseMsgCreateVestingAccount();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.startTime = object.startTime !== undefined && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
    message.endTime = object.endTime !== undefined && object.endTime !== null ? BigInt(object.endTime.toString()) : BigInt(0);
    message.delayed = object.delayed ?? false;
    return message;
  },
  fromAmino(object: MsgCreateVestingAccountAmino): MsgCreateVestingAccount {
    const message = createBaseMsgCreateVestingAccount();
    if (object.from_address !== undefined && object.from_address !== null) {
      message.fromAddress = object.from_address;
    }
    if (object.to_address !== undefined && object.to_address !== null) {
      message.toAddress = object.to_address;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = BigInt(object.start_time);
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = BigInt(object.end_time);
    }
    if (object.delayed !== undefined && object.delayed !== null) {
      message.delayed = object.delayed;
    }
    return message;
  },
  toAmino(message: MsgCreateVestingAccount): MsgCreateVestingAccountAmino {
    const obj: any = {};
    obj.from_address = message.fromAddress === "" ? undefined : message.fromAddress;
    obj.to_address = message.toAddress === "" ? undefined : message.toAddress;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    obj.start_time = message.startTime !== BigInt(0) ? message.startTime.toString() : undefined;
    obj.end_time = message.endTime !== BigInt(0) ? message.endTime.toString() : undefined;
    obj.delayed = message.delayed === false ? undefined : message.delayed;
    return obj;
  },
  fromAminoMsg(object: MsgCreateVestingAccountAminoMsg): MsgCreateVestingAccount {
    return MsgCreateVestingAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateVestingAccountProtoMsg): MsgCreateVestingAccount {
    return MsgCreateVestingAccount.decode(message.value);
  },
  toProto(message: MsgCreateVestingAccount): Uint8Array {
    return MsgCreateVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateVestingAccount): MsgCreateVestingAccountProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount",
      value: MsgCreateVestingAccount.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateVestingAccount.typeUrl, MsgCreateVestingAccount);
function createBaseMsgCreateVestingAccountResponse(): MsgCreateVestingAccountResponse {
  return {};
}
export const MsgCreateVestingAccountResponse = {
  typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccountResponse",
  is(o: any): o is MsgCreateVestingAccountResponse {
    return o && o.$typeUrl === MsgCreateVestingAccountResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCreateVestingAccountResponseSDKType {
    return o && o.$typeUrl === MsgCreateVestingAccountResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCreateVestingAccountResponseAmino {
    return o && o.$typeUrl === MsgCreateVestingAccountResponse.typeUrl;
  },
  encode(_: MsgCreateVestingAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateVestingAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVestingAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgCreateVestingAccountResponse>): MsgCreateVestingAccountResponse {
    const message = createBaseMsgCreateVestingAccountResponse();
    return message;
  },
  fromAmino(_: MsgCreateVestingAccountResponseAmino): MsgCreateVestingAccountResponse {
    const message = createBaseMsgCreateVestingAccountResponse();
    return message;
  },
  toAmino(_: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateVestingAccountResponseAminoMsg): MsgCreateVestingAccountResponse {
    return MsgCreateVestingAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateVestingAccountResponseProtoMsg): MsgCreateVestingAccountResponse {
    return MsgCreateVestingAccountResponse.decode(message.value);
  },
  toProto(message: MsgCreateVestingAccountResponse): Uint8Array {
    return MsgCreateVestingAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccountResponse",
      value: MsgCreateVestingAccountResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateVestingAccountResponse.typeUrl, MsgCreateVestingAccountResponse);
function createBaseMsgFundFairburnPool(): MsgFundFairburnPool {
  return {
    sender: "",
    amount: []
  };
}
export const MsgFundFairburnPool = {
  typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgFundFairburnPool",
  is(o: any): o is MsgFundFairburnPool {
    return o && (o.$typeUrl === MsgFundFairburnPool.typeUrl || typeof o.sender === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
  },
  isSDK(o: any): o is MsgFundFairburnPoolSDKType {
    return o && (o.$typeUrl === MsgFundFairburnPool.typeUrl || typeof o.sender === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])));
  },
  isAmino(o: any): o is MsgFundFairburnPoolAmino {
    return o && (o.$typeUrl === MsgFundFairburnPool.typeUrl || typeof o.sender === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])));
  },
  encode(message: MsgFundFairburnPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundFairburnPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundFairburnPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgFundFairburnPool>): MsgFundFairburnPool {
    const message = createBaseMsgFundFairburnPool();
    message.sender = object.sender ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgFundFairburnPoolAmino): MsgFundFairburnPool {
    const message = createBaseMsgFundFairburnPool();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgFundFairburnPool): MsgFundFairburnPoolAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgFundFairburnPoolAminoMsg): MsgFundFairburnPool {
    return MsgFundFairburnPool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFundFairburnPoolProtoMsg): MsgFundFairburnPool {
    return MsgFundFairburnPool.decode(message.value);
  },
  toProto(message: MsgFundFairburnPool): Uint8Array {
    return MsgFundFairburnPool.encode(message).finish();
  },
  toProtoMsg(message: MsgFundFairburnPool): MsgFundFairburnPoolProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgFundFairburnPool",
      value: MsgFundFairburnPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgFundFairburnPool.typeUrl, MsgFundFairburnPool);
function createBaseMsgFundFairburnPoolResponse(): MsgFundFairburnPoolResponse {
  return {};
}
export const MsgFundFairburnPoolResponse = {
  typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgFundFairburnPoolResponse",
  is(o: any): o is MsgFundFairburnPoolResponse {
    return o && o.$typeUrl === MsgFundFairburnPoolResponse.typeUrl;
  },
  isSDK(o: any): o is MsgFundFairburnPoolResponseSDKType {
    return o && o.$typeUrl === MsgFundFairburnPoolResponse.typeUrl;
  },
  isAmino(o: any): o is MsgFundFairburnPoolResponseAmino {
    return o && o.$typeUrl === MsgFundFairburnPoolResponse.typeUrl;
  },
  encode(_: MsgFundFairburnPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundFairburnPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundFairburnPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgFundFairburnPoolResponse>): MsgFundFairburnPoolResponse {
    const message = createBaseMsgFundFairburnPoolResponse();
    return message;
  },
  fromAmino(_: MsgFundFairburnPoolResponseAmino): MsgFundFairburnPoolResponse {
    const message = createBaseMsgFundFairburnPoolResponse();
    return message;
  },
  toAmino(_: MsgFundFairburnPoolResponse): MsgFundFairburnPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFundFairburnPoolResponseAminoMsg): MsgFundFairburnPoolResponse {
    return MsgFundFairburnPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFundFairburnPoolResponseProtoMsg): MsgFundFairburnPoolResponse {
    return MsgFundFairburnPoolResponse.decode(message.value);
  },
  toProto(message: MsgFundFairburnPoolResponse): Uint8Array {
    return MsgFundFairburnPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFundFairburnPoolResponse): MsgFundFairburnPoolResponseProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgFundFairburnPoolResponse",
      value: MsgFundFairburnPoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgFundFairburnPoolResponse.typeUrl, MsgFundFairburnPoolResponse);