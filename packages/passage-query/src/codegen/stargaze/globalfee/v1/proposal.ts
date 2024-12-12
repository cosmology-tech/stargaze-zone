import { CodeAuthorization, CodeAuthorizationAmino, CodeAuthorizationSDKType, ContractAuthorization, ContractAuthorizationAmino, ContractAuthorizationSDKType } from "./globalfee";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface SetCodeAuthorizationProposal {
  $typeUrl?: "/publicawesome.stargaze.globalfee.v1.SetCodeAuthorizationProposal";
  title: string;
  description: string;
  codeAuthorization?: CodeAuthorization;
}
export interface SetCodeAuthorizationProposalProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.SetCodeAuthorizationProposal";
  value: Uint8Array;
}
export interface SetCodeAuthorizationProposalAmino {
  title?: string;
  description?: string;
  code_authorization?: CodeAuthorizationAmino;
}
export interface SetCodeAuthorizationProposalAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.SetCodeAuthorizationProposal";
  value: SetCodeAuthorizationProposalAmino;
}
export interface SetCodeAuthorizationProposalSDKType {
  $typeUrl?: "/publicawesome.stargaze.globalfee.v1.SetCodeAuthorizationProposal";
  title: string;
  description: string;
  code_authorization?: CodeAuthorizationSDKType;
}
export interface RemoveCodeAuthorizationProposal {
  $typeUrl?: "/publicawesome.stargaze.globalfee.v1.RemoveCodeAuthorizationProposal";
  title: string;
  description: string;
  codeId: bigint;
}
export interface RemoveCodeAuthorizationProposalProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.RemoveCodeAuthorizationProposal";
  value: Uint8Array;
}
export interface RemoveCodeAuthorizationProposalAmino {
  title?: string;
  description?: string;
  code_id?: string;
}
export interface RemoveCodeAuthorizationProposalAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.RemoveCodeAuthorizationProposal";
  value: RemoveCodeAuthorizationProposalAmino;
}
export interface RemoveCodeAuthorizationProposalSDKType {
  $typeUrl?: "/publicawesome.stargaze.globalfee.v1.RemoveCodeAuthorizationProposal";
  title: string;
  description: string;
  code_id: bigint;
}
export interface SetContractAuthorizationProposal {
  $typeUrl?: "/publicawesome.stargaze.globalfee.v1.SetContractAuthorizationProposal";
  title: string;
  description: string;
  contractAuthorization?: ContractAuthorization;
}
export interface SetContractAuthorizationProposalProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.SetContractAuthorizationProposal";
  value: Uint8Array;
}
export interface SetContractAuthorizationProposalAmino {
  title?: string;
  description?: string;
  contract_authorization?: ContractAuthorizationAmino;
}
export interface SetContractAuthorizationProposalAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.SetContractAuthorizationProposal";
  value: SetContractAuthorizationProposalAmino;
}
export interface SetContractAuthorizationProposalSDKType {
  $typeUrl?: "/publicawesome.stargaze.globalfee.v1.SetContractAuthorizationProposal";
  title: string;
  description: string;
  contract_authorization?: ContractAuthorizationSDKType;
}
export interface RemoveContractAuthorizationProposal {
  $typeUrl?: "/publicawesome.stargaze.globalfee.v1.RemoveContractAuthorizationProposal";
  title: string;
  description: string;
  contractAddress: string;
}
export interface RemoveContractAuthorizationProposalProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.RemoveContractAuthorizationProposal";
  value: Uint8Array;
}
export interface RemoveContractAuthorizationProposalAmino {
  title?: string;
  description?: string;
  contract_address?: string;
}
export interface RemoveContractAuthorizationProposalAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.RemoveContractAuthorizationProposal";
  value: RemoveContractAuthorizationProposalAmino;
}
export interface RemoveContractAuthorizationProposalSDKType {
  $typeUrl?: "/publicawesome.stargaze.globalfee.v1.RemoveContractAuthorizationProposal";
  title: string;
  description: string;
  contract_address: string;
}
function createBaseSetCodeAuthorizationProposal(): SetCodeAuthorizationProposal {
  return {
    $typeUrl: "/publicawesome.stargaze.globalfee.v1.SetCodeAuthorizationProposal",
    title: "",
    description: "",
    codeAuthorization: undefined
  };
}
export const SetCodeAuthorizationProposal = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.SetCodeAuthorizationProposal",
  is(o: any): o is SetCodeAuthorizationProposal {
    return o && (o.$typeUrl === SetCodeAuthorizationProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string");
  },
  isSDK(o: any): o is SetCodeAuthorizationProposalSDKType {
    return o && (o.$typeUrl === SetCodeAuthorizationProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string");
  },
  isAmino(o: any): o is SetCodeAuthorizationProposalAmino {
    return o && (o.$typeUrl === SetCodeAuthorizationProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string");
  },
  encode(message: SetCodeAuthorizationProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.codeAuthorization !== undefined) {
      CodeAuthorization.encode(message.codeAuthorization, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SetCodeAuthorizationProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetCodeAuthorizationProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.codeAuthorization = CodeAuthorization.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SetCodeAuthorizationProposal>): SetCodeAuthorizationProposal {
    const message = createBaseSetCodeAuthorizationProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeAuthorization = object.codeAuthorization !== undefined && object.codeAuthorization !== null ? CodeAuthorization.fromPartial(object.codeAuthorization) : undefined;
    return message;
  },
  fromAmino(object: SetCodeAuthorizationProposalAmino): SetCodeAuthorizationProposal {
    const message = createBaseSetCodeAuthorizationProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.code_authorization !== undefined && object.code_authorization !== null) {
      message.codeAuthorization = CodeAuthorization.fromAmino(object.code_authorization);
    }
    return message;
  },
  toAmino(message: SetCodeAuthorizationProposal): SetCodeAuthorizationProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.code_authorization = message.codeAuthorization ? CodeAuthorization.toAmino(message.codeAuthorization) : undefined;
    return obj;
  },
  fromAminoMsg(object: SetCodeAuthorizationProposalAminoMsg): SetCodeAuthorizationProposal {
    return SetCodeAuthorizationProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: SetCodeAuthorizationProposalProtoMsg): SetCodeAuthorizationProposal {
    return SetCodeAuthorizationProposal.decode(message.value);
  },
  toProto(message: SetCodeAuthorizationProposal): Uint8Array {
    return SetCodeAuthorizationProposal.encode(message).finish();
  },
  toProtoMsg(message: SetCodeAuthorizationProposal): SetCodeAuthorizationProposalProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.SetCodeAuthorizationProposal",
      value: SetCodeAuthorizationProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SetCodeAuthorizationProposal.typeUrl, SetCodeAuthorizationProposal);
function createBaseRemoveCodeAuthorizationProposal(): RemoveCodeAuthorizationProposal {
  return {
    $typeUrl: "/publicawesome.stargaze.globalfee.v1.RemoveCodeAuthorizationProposal",
    title: "",
    description: "",
    codeId: BigInt(0)
  };
}
export const RemoveCodeAuthorizationProposal = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.RemoveCodeAuthorizationProposal",
  is(o: any): o is RemoveCodeAuthorizationProposal {
    return o && (o.$typeUrl === RemoveCodeAuthorizationProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.codeId === "bigint");
  },
  isSDK(o: any): o is RemoveCodeAuthorizationProposalSDKType {
    return o && (o.$typeUrl === RemoveCodeAuthorizationProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.code_id === "bigint");
  },
  isAmino(o: any): o is RemoveCodeAuthorizationProposalAmino {
    return o && (o.$typeUrl === RemoveCodeAuthorizationProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.code_id === "bigint");
  },
  encode(message: RemoveCodeAuthorizationProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.codeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RemoveCodeAuthorizationProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveCodeAuthorizationProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.codeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RemoveCodeAuthorizationProposal>): RemoveCodeAuthorizationProposal {
    const message = createBaseRemoveCodeAuthorizationProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RemoveCodeAuthorizationProposalAmino): RemoveCodeAuthorizationProposal {
    const message = createBaseRemoveCodeAuthorizationProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    return message;
  },
  toAmino(message: RemoveCodeAuthorizationProposal): RemoveCodeAuthorizationProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RemoveCodeAuthorizationProposalAminoMsg): RemoveCodeAuthorizationProposal {
    return RemoveCodeAuthorizationProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RemoveCodeAuthorizationProposalProtoMsg): RemoveCodeAuthorizationProposal {
    return RemoveCodeAuthorizationProposal.decode(message.value);
  },
  toProto(message: RemoveCodeAuthorizationProposal): Uint8Array {
    return RemoveCodeAuthorizationProposal.encode(message).finish();
  },
  toProtoMsg(message: RemoveCodeAuthorizationProposal): RemoveCodeAuthorizationProposalProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.RemoveCodeAuthorizationProposal",
      value: RemoveCodeAuthorizationProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RemoveCodeAuthorizationProposal.typeUrl, RemoveCodeAuthorizationProposal);
function createBaseSetContractAuthorizationProposal(): SetContractAuthorizationProposal {
  return {
    $typeUrl: "/publicawesome.stargaze.globalfee.v1.SetContractAuthorizationProposal",
    title: "",
    description: "",
    contractAuthorization: undefined
  };
}
export const SetContractAuthorizationProposal = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.SetContractAuthorizationProposal",
  is(o: any): o is SetContractAuthorizationProposal {
    return o && (o.$typeUrl === SetContractAuthorizationProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string");
  },
  isSDK(o: any): o is SetContractAuthorizationProposalSDKType {
    return o && (o.$typeUrl === SetContractAuthorizationProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string");
  },
  isAmino(o: any): o is SetContractAuthorizationProposalAmino {
    return o && (o.$typeUrl === SetContractAuthorizationProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string");
  },
  encode(message: SetContractAuthorizationProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contractAuthorization !== undefined) {
      ContractAuthorization.encode(message.contractAuthorization, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SetContractAuthorizationProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetContractAuthorizationProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.contractAuthorization = ContractAuthorization.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SetContractAuthorizationProposal>): SetContractAuthorizationProposal {
    const message = createBaseSetContractAuthorizationProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contractAuthorization = object.contractAuthorization !== undefined && object.contractAuthorization !== null ? ContractAuthorization.fromPartial(object.contractAuthorization) : undefined;
    return message;
  },
  fromAmino(object: SetContractAuthorizationProposalAmino): SetContractAuthorizationProposal {
    const message = createBaseSetContractAuthorizationProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.contract_authorization !== undefined && object.contract_authorization !== null) {
      message.contractAuthorization = ContractAuthorization.fromAmino(object.contract_authorization);
    }
    return message;
  },
  toAmino(message: SetContractAuthorizationProposal): SetContractAuthorizationProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.contract_authorization = message.contractAuthorization ? ContractAuthorization.toAmino(message.contractAuthorization) : undefined;
    return obj;
  },
  fromAminoMsg(object: SetContractAuthorizationProposalAminoMsg): SetContractAuthorizationProposal {
    return SetContractAuthorizationProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: SetContractAuthorizationProposalProtoMsg): SetContractAuthorizationProposal {
    return SetContractAuthorizationProposal.decode(message.value);
  },
  toProto(message: SetContractAuthorizationProposal): Uint8Array {
    return SetContractAuthorizationProposal.encode(message).finish();
  },
  toProtoMsg(message: SetContractAuthorizationProposal): SetContractAuthorizationProposalProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.SetContractAuthorizationProposal",
      value: SetContractAuthorizationProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SetContractAuthorizationProposal.typeUrl, SetContractAuthorizationProposal);
function createBaseRemoveContractAuthorizationProposal(): RemoveContractAuthorizationProposal {
  return {
    $typeUrl: "/publicawesome.stargaze.globalfee.v1.RemoveContractAuthorizationProposal",
    title: "",
    description: "",
    contractAddress: ""
  };
}
export const RemoveContractAuthorizationProposal = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.RemoveContractAuthorizationProposal",
  is(o: any): o is RemoveContractAuthorizationProposal {
    return o && (o.$typeUrl === RemoveContractAuthorizationProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contractAddress === "string");
  },
  isSDK(o: any): o is RemoveContractAuthorizationProposalSDKType {
    return o && (o.$typeUrl === RemoveContractAuthorizationProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract_address === "string");
  },
  isAmino(o: any): o is RemoveContractAuthorizationProposalAmino {
    return o && (o.$typeUrl === RemoveContractAuthorizationProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract_address === "string");
  },
  encode(message: RemoveContractAuthorizationProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RemoveContractAuthorizationProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveContractAuthorizationProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RemoveContractAuthorizationProposal>): RemoveContractAuthorizationProposal {
    const message = createBaseRemoveContractAuthorizationProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: RemoveContractAuthorizationProposalAmino): RemoveContractAuthorizationProposal {
    const message = createBaseRemoveContractAuthorizationProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: RemoveContractAuthorizationProposal): RemoveContractAuthorizationProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: RemoveContractAuthorizationProposalAminoMsg): RemoveContractAuthorizationProposal {
    return RemoveContractAuthorizationProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RemoveContractAuthorizationProposalProtoMsg): RemoveContractAuthorizationProposal {
    return RemoveContractAuthorizationProposal.decode(message.value);
  },
  toProto(message: RemoveContractAuthorizationProposal): Uint8Array {
    return RemoveContractAuthorizationProposal.encode(message).finish();
  },
  toProtoMsg(message: RemoveContractAuthorizationProposal): RemoveContractAuthorizationProposalProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.RemoveContractAuthorizationProposal",
      value: RemoveContractAuthorizationProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RemoveContractAuthorizationProposal.typeUrl, RemoveContractAuthorizationProposal);