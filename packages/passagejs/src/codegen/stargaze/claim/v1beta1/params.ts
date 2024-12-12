import { Action } from "./claim_record";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { isSet, DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export interface ClaimAuthorization {
  contractAddress: string;
  action: Action;
}
export interface ClaimAuthorizationProtoMsg {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.ClaimAuthorization";
  value: Uint8Array;
}
export interface ClaimAuthorizationAmino {
  contract_address?: string;
  action?: Action;
}
export interface ClaimAuthorizationAminoMsg {
  type: "/publicawesome.stargaze.claim.v1beta1.ClaimAuthorization";
  value: ClaimAuthorizationAmino;
}
export interface ClaimAuthorizationSDKType {
  contract_address: string;
  action: Action;
}
/** Params defines the claim module's parameters. */
export interface Params {
  airdropEnabled: boolean;
  airdropStartTime: Date;
  durationUntilDecay: Duration;
  durationOfDecay: Duration;
  /** denom of claimable asset */
  claimDenom: string;
  /** list of contracts and their allowed claim actions */
  allowedClaimers: ClaimAuthorization[];
}
export interface ParamsProtoMsg {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the claim module's parameters. */
export interface ParamsAmino {
  airdrop_enabled?: boolean;
  airdrop_start_time?: string;
  duration_until_decay?: DurationAmino;
  duration_of_decay?: DurationAmino;
  /** denom of claimable asset */
  claim_denom?: string;
  /** list of contracts and their allowed claim actions */
  allowed_claimers: ClaimAuthorizationAmino[];
}
export interface ParamsAminoMsg {
  type: "/publicawesome.stargaze.claim.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the claim module's parameters. */
export interface ParamsSDKType {
  airdrop_enabled: boolean;
  airdrop_start_time: Date;
  duration_until_decay: DurationSDKType;
  duration_of_decay: DurationSDKType;
  claim_denom: string;
  allowed_claimers: ClaimAuthorizationSDKType[];
}
function createBaseClaimAuthorization(): ClaimAuthorization {
  return {
    contractAddress: "",
    action: 0
  };
}
export const ClaimAuthorization = {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.ClaimAuthorization",
  is(o: any): o is ClaimAuthorization {
    return o && (o.$typeUrl === ClaimAuthorization.typeUrl || typeof o.contractAddress === "string" && isSet(o.action));
  },
  isSDK(o: any): o is ClaimAuthorizationSDKType {
    return o && (o.$typeUrl === ClaimAuthorization.typeUrl || typeof o.contract_address === "string" && isSet(o.action));
  },
  isAmino(o: any): o is ClaimAuthorizationAmino {
    return o && (o.$typeUrl === ClaimAuthorization.typeUrl || typeof o.contract_address === "string" && isSet(o.action));
  },
  encode(message: ClaimAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.action !== 0) {
      writer.uint32(16).int32(message.action);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClaimAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.action = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ClaimAuthorization>): ClaimAuthorization {
    const message = createBaseClaimAuthorization();
    message.contractAddress = object.contractAddress ?? "";
    message.action = object.action ?? 0;
    return message;
  },
  fromAmino(object: ClaimAuthorizationAmino): ClaimAuthorization {
    const message = createBaseClaimAuthorization();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    }
    return message;
  },
  toAmino(message: ClaimAuthorization): ClaimAuthorizationAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.action = message.action === 0 ? undefined : message.action;
    return obj;
  },
  fromAminoMsg(object: ClaimAuthorizationAminoMsg): ClaimAuthorization {
    return ClaimAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimAuthorizationProtoMsg): ClaimAuthorization {
    return ClaimAuthorization.decode(message.value);
  },
  toProto(message: ClaimAuthorization): Uint8Array {
    return ClaimAuthorization.encode(message).finish();
  },
  toProtoMsg(message: ClaimAuthorization): ClaimAuthorizationProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.claim.v1beta1.ClaimAuthorization",
      value: ClaimAuthorization.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ClaimAuthorization.typeUrl, ClaimAuthorization);
function createBaseParams(): Params {
  return {
    airdropEnabled: false,
    airdropStartTime: new Date(),
    durationUntilDecay: Duration.fromPartial({}),
    durationOfDecay: Duration.fromPartial({}),
    claimDenom: "",
    allowedClaimers: []
  };
}
export const Params = {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.airdropEnabled === "boolean" && Timestamp.is(o.airdropStartTime) && Duration.is(o.durationUntilDecay) && Duration.is(o.durationOfDecay) && typeof o.claimDenom === "string" && Array.isArray(o.allowedClaimers) && (!o.allowedClaimers.length || ClaimAuthorization.is(o.allowedClaimers[0])));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.airdrop_enabled === "boolean" && Timestamp.isSDK(o.airdrop_start_time) && Duration.isSDK(o.duration_until_decay) && Duration.isSDK(o.duration_of_decay) && typeof o.claim_denom === "string" && Array.isArray(o.allowed_claimers) && (!o.allowed_claimers.length || ClaimAuthorization.isSDK(o.allowed_claimers[0])));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.airdrop_enabled === "boolean" && Timestamp.isAmino(o.airdrop_start_time) && Duration.isAmino(o.duration_until_decay) && Duration.isAmino(o.duration_of_decay) && typeof o.claim_denom === "string" && Array.isArray(o.allowed_claimers) && (!o.allowed_claimers.length || ClaimAuthorization.isAmino(o.allowed_claimers[0])));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.airdropEnabled === true) {
      writer.uint32(8).bool(message.airdropEnabled);
    }
    if (message.airdropStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.airdropStartTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.durationUntilDecay !== undefined) {
      Duration.encode(message.durationUntilDecay, writer.uint32(26).fork()).ldelim();
    }
    if (message.durationOfDecay !== undefined) {
      Duration.encode(message.durationOfDecay, writer.uint32(34).fork()).ldelim();
    }
    if (message.claimDenom !== "") {
      writer.uint32(42).string(message.claimDenom);
    }
    for (const v of message.allowedClaimers) {
      ClaimAuthorization.encode(v!, writer.uint32(50).fork()).ldelim();
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
          message.airdropEnabled = reader.bool();
          break;
        case 2:
          message.airdropStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.durationUntilDecay = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.durationOfDecay = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.claimDenom = reader.string();
          break;
        case 6:
          message.allowedClaimers.push(ClaimAuthorization.decode(reader, reader.uint32()));
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
    message.airdropEnabled = object.airdropEnabled ?? false;
    message.airdropStartTime = object.airdropStartTime ?? undefined;
    message.durationUntilDecay = object.durationUntilDecay !== undefined && object.durationUntilDecay !== null ? Duration.fromPartial(object.durationUntilDecay) : undefined;
    message.durationOfDecay = object.durationOfDecay !== undefined && object.durationOfDecay !== null ? Duration.fromPartial(object.durationOfDecay) : undefined;
    message.claimDenom = object.claimDenom ?? "";
    message.allowedClaimers = object.allowedClaimers?.map(e => ClaimAuthorization.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.airdrop_enabled !== undefined && object.airdrop_enabled !== null) {
      message.airdropEnabled = object.airdrop_enabled;
    }
    if (object.airdrop_start_time !== undefined && object.airdrop_start_time !== null) {
      message.airdropStartTime = fromTimestamp(Timestamp.fromAmino(object.airdrop_start_time));
    }
    if (object.duration_until_decay !== undefined && object.duration_until_decay !== null) {
      message.durationUntilDecay = Duration.fromAmino(object.duration_until_decay);
    }
    if (object.duration_of_decay !== undefined && object.duration_of_decay !== null) {
      message.durationOfDecay = Duration.fromAmino(object.duration_of_decay);
    }
    if (object.claim_denom !== undefined && object.claim_denom !== null) {
      message.claimDenom = object.claim_denom;
    }
    message.allowedClaimers = object.allowed_claimers?.map(e => ClaimAuthorization.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.airdrop_enabled = message.airdropEnabled === false ? undefined : message.airdropEnabled;
    obj.airdrop_start_time = message.airdropStartTime ? Timestamp.toAmino(toTimestamp(message.airdropStartTime)) : undefined;
    obj.duration_until_decay = message.durationUntilDecay ? Duration.toAmino(message.durationUntilDecay) : undefined;
    obj.duration_of_decay = message.durationOfDecay ? Duration.toAmino(message.durationOfDecay) : undefined;
    obj.claim_denom = message.claimDenom === "" ? undefined : message.claimDenom;
    if (message.allowedClaimers) {
      obj.allowed_claimers = message.allowedClaimers.map(e => e ? ClaimAuthorization.toAmino(e) : undefined);
    } else {
      obj.allowed_claimers = message.allowedClaimers;
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
      typeUrl: "/publicawesome.stargaze.claim.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);