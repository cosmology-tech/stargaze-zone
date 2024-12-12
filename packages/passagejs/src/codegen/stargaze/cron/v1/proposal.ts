import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * PromoteToPrivilegedContractProposal gov proposal content type to add
 * "privileges" to a contract
 */
export interface PromoteToPrivilegedContractProposal {
  $typeUrl?: "/publicawesome.stargaze.cron.v1.PromoteToPrivilegedContractProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the bech32 address of the smart contract */
  contract: string;
}
export interface PromoteToPrivilegedContractProposalProtoMsg {
  typeUrl: "/publicawesome.stargaze.cron.v1.PromoteToPrivilegedContractProposal";
  value: Uint8Array;
}
/**
 * PromoteToPrivilegedContractProposal gov proposal content type to add
 * "privileges" to a contract
 */
export interface PromoteToPrivilegedContractProposalAmino {
  /** Title is a short summary */
  title?: string;
  /** Description is a human readable text */
  description?: string;
  /** Contract is the bech32 address of the smart contract */
  contract?: string;
}
export interface PromoteToPrivilegedContractProposalAminoMsg {
  type: "/publicawesome.stargaze.cron.v1.PromoteToPrivilegedContractProposal";
  value: PromoteToPrivilegedContractProposalAmino;
}
/**
 * PromoteToPrivilegedContractProposal gov proposal content type to add
 * "privileges" to a contract
 */
export interface PromoteToPrivilegedContractProposalSDKType {
  $typeUrl?: "/publicawesome.stargaze.cron.v1.PromoteToPrivilegedContractProposal";
  title: string;
  description: string;
  contract: string;
}
/**
 * DemotePrivilegedContractProposal gov proposal content type to remove
 * "privileges" from a contract
 */
export interface DemotePrivilegedContractProposal {
  $typeUrl?: "/publicawesome.stargaze.cron.v1.DemotePrivilegedContractProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the bech32 address of the smart contract */
  contract: string;
}
export interface DemotePrivilegedContractProposalProtoMsg {
  typeUrl: "/publicawesome.stargaze.cron.v1.DemotePrivilegedContractProposal";
  value: Uint8Array;
}
/**
 * DemotePrivilegedContractProposal gov proposal content type to remove
 * "privileges" from a contract
 */
export interface DemotePrivilegedContractProposalAmino {
  /** Title is a short summary */
  title?: string;
  /** Description is a human readable text */
  description?: string;
  /** Contract is the bech32 address of the smart contract */
  contract?: string;
}
export interface DemotePrivilegedContractProposalAminoMsg {
  type: "/publicawesome.stargaze.cron.v1.DemotePrivilegedContractProposal";
  value: DemotePrivilegedContractProposalAmino;
}
/**
 * DemotePrivilegedContractProposal gov proposal content type to remove
 * "privileges" from a contract
 */
export interface DemotePrivilegedContractProposalSDKType {
  $typeUrl?: "/publicawesome.stargaze.cron.v1.DemotePrivilegedContractProposal";
  title: string;
  description: string;
  contract: string;
}
function createBasePromoteToPrivilegedContractProposal(): PromoteToPrivilegedContractProposal {
  return {
    $typeUrl: "/publicawesome.stargaze.cron.v1.PromoteToPrivilegedContractProposal",
    title: "",
    description: "",
    contract: ""
  };
}
export const PromoteToPrivilegedContractProposal = {
  typeUrl: "/publicawesome.stargaze.cron.v1.PromoteToPrivilegedContractProposal",
  is(o: any): o is PromoteToPrivilegedContractProposal {
    return o && (o.$typeUrl === PromoteToPrivilegedContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string");
  },
  isSDK(o: any): o is PromoteToPrivilegedContractProposalSDKType {
    return o && (o.$typeUrl === PromoteToPrivilegedContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string");
  },
  isAmino(o: any): o is PromoteToPrivilegedContractProposalAmino {
    return o && (o.$typeUrl === PromoteToPrivilegedContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string");
  },
  encode(message: PromoteToPrivilegedContractProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PromoteToPrivilegedContractProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePromoteToPrivilegedContractProposal();
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
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PromoteToPrivilegedContractProposal>): PromoteToPrivilegedContractProposal {
    const message = createBasePromoteToPrivilegedContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromAmino(object: PromoteToPrivilegedContractProposalAmino): PromoteToPrivilegedContractProposal {
    const message = createBasePromoteToPrivilegedContractProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    return message;
  },
  toAmino(message: PromoteToPrivilegedContractProposal): PromoteToPrivilegedContractProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.contract = message.contract === "" ? undefined : message.contract;
    return obj;
  },
  fromAminoMsg(object: PromoteToPrivilegedContractProposalAminoMsg): PromoteToPrivilegedContractProposal {
    return PromoteToPrivilegedContractProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: PromoteToPrivilegedContractProposalProtoMsg): PromoteToPrivilegedContractProposal {
    return PromoteToPrivilegedContractProposal.decode(message.value);
  },
  toProto(message: PromoteToPrivilegedContractProposal): Uint8Array {
    return PromoteToPrivilegedContractProposal.encode(message).finish();
  },
  toProtoMsg(message: PromoteToPrivilegedContractProposal): PromoteToPrivilegedContractProposalProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.cron.v1.PromoteToPrivilegedContractProposal",
      value: PromoteToPrivilegedContractProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PromoteToPrivilegedContractProposal.typeUrl, PromoteToPrivilegedContractProposal);
function createBaseDemotePrivilegedContractProposal(): DemotePrivilegedContractProposal {
  return {
    $typeUrl: "/publicawesome.stargaze.cron.v1.DemotePrivilegedContractProposal",
    title: "",
    description: "",
    contract: ""
  };
}
export const DemotePrivilegedContractProposal = {
  typeUrl: "/publicawesome.stargaze.cron.v1.DemotePrivilegedContractProposal",
  is(o: any): o is DemotePrivilegedContractProposal {
    return o && (o.$typeUrl === DemotePrivilegedContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string");
  },
  isSDK(o: any): o is DemotePrivilegedContractProposalSDKType {
    return o && (o.$typeUrl === DemotePrivilegedContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string");
  },
  isAmino(o: any): o is DemotePrivilegedContractProposalAmino {
    return o && (o.$typeUrl === DemotePrivilegedContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string");
  },
  encode(message: DemotePrivilegedContractProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DemotePrivilegedContractProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDemotePrivilegedContractProposal();
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
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DemotePrivilegedContractProposal>): DemotePrivilegedContractProposal {
    const message = createBaseDemotePrivilegedContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromAmino(object: DemotePrivilegedContractProposalAmino): DemotePrivilegedContractProposal {
    const message = createBaseDemotePrivilegedContractProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    return message;
  },
  toAmino(message: DemotePrivilegedContractProposal): DemotePrivilegedContractProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.contract = message.contract === "" ? undefined : message.contract;
    return obj;
  },
  fromAminoMsg(object: DemotePrivilegedContractProposalAminoMsg): DemotePrivilegedContractProposal {
    return DemotePrivilegedContractProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: DemotePrivilegedContractProposalProtoMsg): DemotePrivilegedContractProposal {
    return DemotePrivilegedContractProposal.decode(message.value);
  },
  toProto(message: DemotePrivilegedContractProposal): Uint8Array {
    return DemotePrivilegedContractProposal.encode(message).finish();
  },
  toProtoMsg(message: DemotePrivilegedContractProposal): DemotePrivilegedContractProposalProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.cron.v1.DemotePrivilegedContractProposal",
      value: DemotePrivilegedContractProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DemotePrivilegedContractProposal.typeUrl, DemotePrivilegedContractProposal);