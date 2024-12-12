import { CodeAuthorization, CodeAuthorizationAmino, CodeAuthorizationSDKType, ContractAuthorization, ContractAuthorizationAmino, ContractAuthorizationSDKType, Params, ParamsAmino, ParamsSDKType } from "./globalfee";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
export interface MsgSetCodeAuthorization {
  sender: string;
  codeAuthorization?: CodeAuthorization;
}
export interface MsgSetCodeAuthorizationProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorization";
  value: Uint8Array;
}
export interface MsgSetCodeAuthorizationAmino {
  sender?: string;
  code_authorization?: CodeAuthorizationAmino;
}
export interface MsgSetCodeAuthorizationAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorization";
  value: MsgSetCodeAuthorizationAmino;
}
export interface MsgSetCodeAuthorizationSDKType {
  sender: string;
  code_authorization?: CodeAuthorizationSDKType;
}
export interface MsgSetCodeAuthorizationResponse {}
export interface MsgSetCodeAuthorizationResponseProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorizationResponse";
  value: Uint8Array;
}
export interface MsgSetCodeAuthorizationResponseAmino {}
export interface MsgSetCodeAuthorizationResponseAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorizationResponse";
  value: MsgSetCodeAuthorizationResponseAmino;
}
export interface MsgSetCodeAuthorizationResponseSDKType {}
export interface MsgRemoveCodeAuthorization {
  sender: string;
  codeId: bigint;
}
export interface MsgRemoveCodeAuthorizationProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorization";
  value: Uint8Array;
}
export interface MsgRemoveCodeAuthorizationAmino {
  sender?: string;
  code_id?: string;
}
export interface MsgRemoveCodeAuthorizationAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorization";
  value: MsgRemoveCodeAuthorizationAmino;
}
export interface MsgRemoveCodeAuthorizationSDKType {
  sender: string;
  code_id: bigint;
}
export interface MsgRemoveCodeAuthorizationResponse {}
export interface MsgRemoveCodeAuthorizationResponseProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorizationResponse";
  value: Uint8Array;
}
export interface MsgRemoveCodeAuthorizationResponseAmino {}
export interface MsgRemoveCodeAuthorizationResponseAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorizationResponse";
  value: MsgRemoveCodeAuthorizationResponseAmino;
}
export interface MsgRemoveCodeAuthorizationResponseSDKType {}
export interface MsgSetContractAuthorization {
  sender: string;
  contractAuthorization?: ContractAuthorization;
}
export interface MsgSetContractAuthorizationProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorization";
  value: Uint8Array;
}
export interface MsgSetContractAuthorizationAmino {
  sender?: string;
  contract_authorization?: ContractAuthorizationAmino;
}
export interface MsgSetContractAuthorizationAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorization";
  value: MsgSetContractAuthorizationAmino;
}
export interface MsgSetContractAuthorizationSDKType {
  sender: string;
  contract_authorization?: ContractAuthorizationSDKType;
}
export interface MsgSetContractAuthorizationResponse {}
export interface MsgSetContractAuthorizationResponseProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorizationResponse";
  value: Uint8Array;
}
export interface MsgSetContractAuthorizationResponseAmino {}
export interface MsgSetContractAuthorizationResponseAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorizationResponse";
  value: MsgSetContractAuthorizationResponseAmino;
}
export interface MsgSetContractAuthorizationResponseSDKType {}
export interface MsgRemoveContractAuthorization {
  sender: string;
  contractAddress: string;
}
export interface MsgRemoveContractAuthorizationProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorization";
  value: Uint8Array;
}
export interface MsgRemoveContractAuthorizationAmino {
  sender?: string;
  contract_address?: string;
}
export interface MsgRemoveContractAuthorizationAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorization";
  value: MsgRemoveContractAuthorizationAmino;
}
export interface MsgRemoveContractAuthorizationSDKType {
  sender: string;
  contract_address: string;
}
export interface MsgRemoveContractAuthorizationResponse {}
export interface MsgRemoveContractAuthorizationResponseProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorizationResponse";
  value: Uint8Array;
}
export interface MsgRemoveContractAuthorizationResponseAmino {}
export interface MsgRemoveContractAuthorizationResponseAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorizationResponse";
  value: MsgRemoveContractAuthorizationResponseAmino;
}
export interface MsgRemoveContractAuthorizationResponseSDKType {}
export interface MsgUpdateParams {
  sender: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  sender?: string;
  /** NOTE: All parameters must be supplied. */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  sender: string;
  params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgSetCodeAuthorization(): MsgSetCodeAuthorization {
  return {
    sender: "",
    codeAuthorization: undefined
  };
}
export const MsgSetCodeAuthorization = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorization",
  is(o: any): o is MsgSetCodeAuthorization {
    return o && (o.$typeUrl === MsgSetCodeAuthorization.typeUrl || typeof o.sender === "string");
  },
  isSDK(o: any): o is MsgSetCodeAuthorizationSDKType {
    return o && (o.$typeUrl === MsgSetCodeAuthorization.typeUrl || typeof o.sender === "string");
  },
  isAmino(o: any): o is MsgSetCodeAuthorizationAmino {
    return o && (o.$typeUrl === MsgSetCodeAuthorization.typeUrl || typeof o.sender === "string");
  },
  encode(message: MsgSetCodeAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.codeAuthorization !== undefined) {
      CodeAuthorization.encode(message.codeAuthorization, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetCodeAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCodeAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.codeAuthorization = CodeAuthorization.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetCodeAuthorization>): MsgSetCodeAuthorization {
    const message = createBaseMsgSetCodeAuthorization();
    message.sender = object.sender ?? "";
    message.codeAuthorization = object.codeAuthorization !== undefined && object.codeAuthorization !== null ? CodeAuthorization.fromPartial(object.codeAuthorization) : undefined;
    return message;
  },
  fromAmino(object: MsgSetCodeAuthorizationAmino): MsgSetCodeAuthorization {
    const message = createBaseMsgSetCodeAuthorization();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.code_authorization !== undefined && object.code_authorization !== null) {
      message.codeAuthorization = CodeAuthorization.fromAmino(object.code_authorization);
    }
    return message;
  },
  toAmino(message: MsgSetCodeAuthorization): MsgSetCodeAuthorizationAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.code_authorization = message.codeAuthorization ? CodeAuthorization.toAmino(message.codeAuthorization) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetCodeAuthorizationAminoMsg): MsgSetCodeAuthorization {
    return MsgSetCodeAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetCodeAuthorizationProtoMsg): MsgSetCodeAuthorization {
    return MsgSetCodeAuthorization.decode(message.value);
  },
  toProto(message: MsgSetCodeAuthorization): Uint8Array {
    return MsgSetCodeAuthorization.encode(message).finish();
  },
  toProtoMsg(message: MsgSetCodeAuthorization): MsgSetCodeAuthorizationProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorization",
      value: MsgSetCodeAuthorization.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetCodeAuthorization.typeUrl, MsgSetCodeAuthorization);
function createBaseMsgSetCodeAuthorizationResponse(): MsgSetCodeAuthorizationResponse {
  return {};
}
export const MsgSetCodeAuthorizationResponse = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorizationResponse",
  is(o: any): o is MsgSetCodeAuthorizationResponse {
    return o && o.$typeUrl === MsgSetCodeAuthorizationResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetCodeAuthorizationResponseSDKType {
    return o && o.$typeUrl === MsgSetCodeAuthorizationResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetCodeAuthorizationResponseAmino {
    return o && o.$typeUrl === MsgSetCodeAuthorizationResponse.typeUrl;
  },
  encode(_: MsgSetCodeAuthorizationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetCodeAuthorizationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCodeAuthorizationResponse();
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
  fromPartial(_: DeepPartial<MsgSetCodeAuthorizationResponse>): MsgSetCodeAuthorizationResponse {
    const message = createBaseMsgSetCodeAuthorizationResponse();
    return message;
  },
  fromAmino(_: MsgSetCodeAuthorizationResponseAmino): MsgSetCodeAuthorizationResponse {
    const message = createBaseMsgSetCodeAuthorizationResponse();
    return message;
  },
  toAmino(_: MsgSetCodeAuthorizationResponse): MsgSetCodeAuthorizationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetCodeAuthorizationResponseAminoMsg): MsgSetCodeAuthorizationResponse {
    return MsgSetCodeAuthorizationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetCodeAuthorizationResponseProtoMsg): MsgSetCodeAuthorizationResponse {
    return MsgSetCodeAuthorizationResponse.decode(message.value);
  },
  toProto(message: MsgSetCodeAuthorizationResponse): Uint8Array {
    return MsgSetCodeAuthorizationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetCodeAuthorizationResponse): MsgSetCodeAuthorizationResponseProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorizationResponse",
      value: MsgSetCodeAuthorizationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetCodeAuthorizationResponse.typeUrl, MsgSetCodeAuthorizationResponse);
function createBaseMsgRemoveCodeAuthorization(): MsgRemoveCodeAuthorization {
  return {
    sender: "",
    codeId: BigInt(0)
  };
}
export const MsgRemoveCodeAuthorization = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorization",
  is(o: any): o is MsgRemoveCodeAuthorization {
    return o && (o.$typeUrl === MsgRemoveCodeAuthorization.typeUrl || typeof o.sender === "string" && typeof o.codeId === "bigint");
  },
  isSDK(o: any): o is MsgRemoveCodeAuthorizationSDKType {
    return o && (o.$typeUrl === MsgRemoveCodeAuthorization.typeUrl || typeof o.sender === "string" && typeof o.code_id === "bigint");
  },
  isAmino(o: any): o is MsgRemoveCodeAuthorizationAmino {
    return o && (o.$typeUrl === MsgRemoveCodeAuthorization.typeUrl || typeof o.sender === "string" && typeof o.code_id === "bigint");
  },
  encode(message: MsgRemoveCodeAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.codeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveCodeAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveCodeAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.codeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRemoveCodeAuthorization>): MsgRemoveCodeAuthorization {
    const message = createBaseMsgRemoveCodeAuthorization();
    message.sender = object.sender ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRemoveCodeAuthorizationAmino): MsgRemoveCodeAuthorization {
    const message = createBaseMsgRemoveCodeAuthorization();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    return message;
  },
  toAmino(message: MsgRemoveCodeAuthorization): MsgRemoveCodeAuthorizationAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveCodeAuthorizationAminoMsg): MsgRemoveCodeAuthorization {
    return MsgRemoveCodeAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveCodeAuthorizationProtoMsg): MsgRemoveCodeAuthorization {
    return MsgRemoveCodeAuthorization.decode(message.value);
  },
  toProto(message: MsgRemoveCodeAuthorization): Uint8Array {
    return MsgRemoveCodeAuthorization.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveCodeAuthorization): MsgRemoveCodeAuthorizationProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorization",
      value: MsgRemoveCodeAuthorization.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRemoveCodeAuthorization.typeUrl, MsgRemoveCodeAuthorization);
function createBaseMsgRemoveCodeAuthorizationResponse(): MsgRemoveCodeAuthorizationResponse {
  return {};
}
export const MsgRemoveCodeAuthorizationResponse = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorizationResponse",
  is(o: any): o is MsgRemoveCodeAuthorizationResponse {
    return o && o.$typeUrl === MsgRemoveCodeAuthorizationResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRemoveCodeAuthorizationResponseSDKType {
    return o && o.$typeUrl === MsgRemoveCodeAuthorizationResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRemoveCodeAuthorizationResponseAmino {
    return o && o.$typeUrl === MsgRemoveCodeAuthorizationResponse.typeUrl;
  },
  encode(_: MsgRemoveCodeAuthorizationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveCodeAuthorizationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveCodeAuthorizationResponse();
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
  fromPartial(_: DeepPartial<MsgRemoveCodeAuthorizationResponse>): MsgRemoveCodeAuthorizationResponse {
    const message = createBaseMsgRemoveCodeAuthorizationResponse();
    return message;
  },
  fromAmino(_: MsgRemoveCodeAuthorizationResponseAmino): MsgRemoveCodeAuthorizationResponse {
    const message = createBaseMsgRemoveCodeAuthorizationResponse();
    return message;
  },
  toAmino(_: MsgRemoveCodeAuthorizationResponse): MsgRemoveCodeAuthorizationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveCodeAuthorizationResponseAminoMsg): MsgRemoveCodeAuthorizationResponse {
    return MsgRemoveCodeAuthorizationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveCodeAuthorizationResponseProtoMsg): MsgRemoveCodeAuthorizationResponse {
    return MsgRemoveCodeAuthorizationResponse.decode(message.value);
  },
  toProto(message: MsgRemoveCodeAuthorizationResponse): Uint8Array {
    return MsgRemoveCodeAuthorizationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveCodeAuthorizationResponse): MsgRemoveCodeAuthorizationResponseProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorizationResponse",
      value: MsgRemoveCodeAuthorizationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRemoveCodeAuthorizationResponse.typeUrl, MsgRemoveCodeAuthorizationResponse);
function createBaseMsgSetContractAuthorization(): MsgSetContractAuthorization {
  return {
    sender: "",
    contractAuthorization: undefined
  };
}
export const MsgSetContractAuthorization = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorization",
  is(o: any): o is MsgSetContractAuthorization {
    return o && (o.$typeUrl === MsgSetContractAuthorization.typeUrl || typeof o.sender === "string");
  },
  isSDK(o: any): o is MsgSetContractAuthorizationSDKType {
    return o && (o.$typeUrl === MsgSetContractAuthorization.typeUrl || typeof o.sender === "string");
  },
  isAmino(o: any): o is MsgSetContractAuthorizationAmino {
    return o && (o.$typeUrl === MsgSetContractAuthorization.typeUrl || typeof o.sender === "string");
  },
  encode(message: MsgSetContractAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractAuthorization !== undefined) {
      ContractAuthorization.encode(message.contractAuthorization, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetContractAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetContractAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contractAuthorization = ContractAuthorization.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetContractAuthorization>): MsgSetContractAuthorization {
    const message = createBaseMsgSetContractAuthorization();
    message.sender = object.sender ?? "";
    message.contractAuthorization = object.contractAuthorization !== undefined && object.contractAuthorization !== null ? ContractAuthorization.fromPartial(object.contractAuthorization) : undefined;
    return message;
  },
  fromAmino(object: MsgSetContractAuthorizationAmino): MsgSetContractAuthorization {
    const message = createBaseMsgSetContractAuthorization();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.contract_authorization !== undefined && object.contract_authorization !== null) {
      message.contractAuthorization = ContractAuthorization.fromAmino(object.contract_authorization);
    }
    return message;
  },
  toAmino(message: MsgSetContractAuthorization): MsgSetContractAuthorizationAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.contract_authorization = message.contractAuthorization ? ContractAuthorization.toAmino(message.contractAuthorization) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetContractAuthorizationAminoMsg): MsgSetContractAuthorization {
    return MsgSetContractAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetContractAuthorizationProtoMsg): MsgSetContractAuthorization {
    return MsgSetContractAuthorization.decode(message.value);
  },
  toProto(message: MsgSetContractAuthorization): Uint8Array {
    return MsgSetContractAuthorization.encode(message).finish();
  },
  toProtoMsg(message: MsgSetContractAuthorization): MsgSetContractAuthorizationProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorization",
      value: MsgSetContractAuthorization.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetContractAuthorization.typeUrl, MsgSetContractAuthorization);
function createBaseMsgSetContractAuthorizationResponse(): MsgSetContractAuthorizationResponse {
  return {};
}
export const MsgSetContractAuthorizationResponse = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorizationResponse",
  is(o: any): o is MsgSetContractAuthorizationResponse {
    return o && o.$typeUrl === MsgSetContractAuthorizationResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetContractAuthorizationResponseSDKType {
    return o && o.$typeUrl === MsgSetContractAuthorizationResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetContractAuthorizationResponseAmino {
    return o && o.$typeUrl === MsgSetContractAuthorizationResponse.typeUrl;
  },
  encode(_: MsgSetContractAuthorizationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetContractAuthorizationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetContractAuthorizationResponse();
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
  fromPartial(_: DeepPartial<MsgSetContractAuthorizationResponse>): MsgSetContractAuthorizationResponse {
    const message = createBaseMsgSetContractAuthorizationResponse();
    return message;
  },
  fromAmino(_: MsgSetContractAuthorizationResponseAmino): MsgSetContractAuthorizationResponse {
    const message = createBaseMsgSetContractAuthorizationResponse();
    return message;
  },
  toAmino(_: MsgSetContractAuthorizationResponse): MsgSetContractAuthorizationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetContractAuthorizationResponseAminoMsg): MsgSetContractAuthorizationResponse {
    return MsgSetContractAuthorizationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetContractAuthorizationResponseProtoMsg): MsgSetContractAuthorizationResponse {
    return MsgSetContractAuthorizationResponse.decode(message.value);
  },
  toProto(message: MsgSetContractAuthorizationResponse): Uint8Array {
    return MsgSetContractAuthorizationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetContractAuthorizationResponse): MsgSetContractAuthorizationResponseProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorizationResponse",
      value: MsgSetContractAuthorizationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetContractAuthorizationResponse.typeUrl, MsgSetContractAuthorizationResponse);
function createBaseMsgRemoveContractAuthorization(): MsgRemoveContractAuthorization {
  return {
    sender: "",
    contractAddress: ""
  };
}
export const MsgRemoveContractAuthorization = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorization",
  is(o: any): o is MsgRemoveContractAuthorization {
    return o && (o.$typeUrl === MsgRemoveContractAuthorization.typeUrl || typeof o.sender === "string" && typeof o.contractAddress === "string");
  },
  isSDK(o: any): o is MsgRemoveContractAuthorizationSDKType {
    return o && (o.$typeUrl === MsgRemoveContractAuthorization.typeUrl || typeof o.sender === "string" && typeof o.contract_address === "string");
  },
  isAmino(o: any): o is MsgRemoveContractAuthorizationAmino {
    return o && (o.$typeUrl === MsgRemoveContractAuthorization.typeUrl || typeof o.sender === "string" && typeof o.contract_address === "string");
  },
  encode(message: MsgRemoveContractAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveContractAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveContractAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRemoveContractAuthorization>): MsgRemoveContractAuthorization {
    const message = createBaseMsgRemoveContractAuthorization();
    message.sender = object.sender ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveContractAuthorizationAmino): MsgRemoveContractAuthorization {
    const message = createBaseMsgRemoveContractAuthorization();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: MsgRemoveContractAuthorization): MsgRemoveContractAuthorizationAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveContractAuthorizationAminoMsg): MsgRemoveContractAuthorization {
    return MsgRemoveContractAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveContractAuthorizationProtoMsg): MsgRemoveContractAuthorization {
    return MsgRemoveContractAuthorization.decode(message.value);
  },
  toProto(message: MsgRemoveContractAuthorization): Uint8Array {
    return MsgRemoveContractAuthorization.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveContractAuthorization): MsgRemoveContractAuthorizationProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorization",
      value: MsgRemoveContractAuthorization.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRemoveContractAuthorization.typeUrl, MsgRemoveContractAuthorization);
function createBaseMsgRemoveContractAuthorizationResponse(): MsgRemoveContractAuthorizationResponse {
  return {};
}
export const MsgRemoveContractAuthorizationResponse = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorizationResponse",
  is(o: any): o is MsgRemoveContractAuthorizationResponse {
    return o && o.$typeUrl === MsgRemoveContractAuthorizationResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRemoveContractAuthorizationResponseSDKType {
    return o && o.$typeUrl === MsgRemoveContractAuthorizationResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRemoveContractAuthorizationResponseAmino {
    return o && o.$typeUrl === MsgRemoveContractAuthorizationResponse.typeUrl;
  },
  encode(_: MsgRemoveContractAuthorizationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveContractAuthorizationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveContractAuthorizationResponse();
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
  fromPartial(_: DeepPartial<MsgRemoveContractAuthorizationResponse>): MsgRemoveContractAuthorizationResponse {
    const message = createBaseMsgRemoveContractAuthorizationResponse();
    return message;
  },
  fromAmino(_: MsgRemoveContractAuthorizationResponseAmino): MsgRemoveContractAuthorizationResponse {
    const message = createBaseMsgRemoveContractAuthorizationResponse();
    return message;
  },
  toAmino(_: MsgRemoveContractAuthorizationResponse): MsgRemoveContractAuthorizationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveContractAuthorizationResponseAminoMsg): MsgRemoveContractAuthorizationResponse {
    return MsgRemoveContractAuthorizationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveContractAuthorizationResponseProtoMsg): MsgRemoveContractAuthorizationResponse {
    return MsgRemoveContractAuthorizationResponse.decode(message.value);
  },
  toProto(message: MsgRemoveContractAuthorizationResponse): Uint8Array {
    return MsgRemoveContractAuthorizationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveContractAuthorizationResponse): MsgRemoveContractAuthorizationResponseProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorizationResponse",
      value: MsgRemoveContractAuthorizationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRemoveContractAuthorizationResponse.typeUrl, MsgRemoveContractAuthorizationResponse);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    sender: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.sender === "string" && Params.is(o.params));
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.sender === "string" && Params.isSDK(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.sender === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
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
  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.sender = object.sender ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);