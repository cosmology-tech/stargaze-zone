import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export enum Action {
  ActionInitialClaim = 0,
  ActionBidNFT = 1,
  ActionMintNFT = 2,
  ActionVote = 3,
  ActionDelegateStake = 4,
  UNRECOGNIZED = -1,
}
export const ActionSDKType = Action;
export const ActionAmino = Action;
export function actionFromJSON(object: any): Action {
  switch (object) {
    case 0:
    case "ActionInitialClaim":
      return Action.ActionInitialClaim;
    case 1:
    case "ActionBidNFT":
      return Action.ActionBidNFT;
    case 2:
    case "ActionMintNFT":
      return Action.ActionMintNFT;
    case 3:
    case "ActionVote":
      return Action.ActionVote;
    case 4:
    case "ActionDelegateStake":
      return Action.ActionDelegateStake;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action.UNRECOGNIZED;
  }
}
export function actionToJSON(object: Action): string {
  switch (object) {
    case Action.ActionInitialClaim:
      return "ActionInitialClaim";
    case Action.ActionBidNFT:
      return "ActionBidNFT";
    case Action.ActionMintNFT:
      return "ActionMintNFT";
    case Action.ActionVote:
      return "ActionVote";
    case Action.ActionDelegateStake:
      return "ActionDelegateStake";
    case Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface ClaimRecord {
  /** address of claim user */
  address: string;
  /** total initial claimable amount for the user */
  initialClaimableAmount: Coin[];
  /**
   * true if action is completed
   * index of bool in array refers to action enum #
   */
  actionCompleted: boolean[];
}
export interface ClaimRecordProtoMsg {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.ClaimRecord";
  value: Uint8Array;
}
export interface ClaimRecordAmino {
  /** address of claim user */
  address?: string;
  /** total initial claimable amount for the user */
  initial_claimable_amount?: CoinAmino[];
  /**
   * true if action is completed
   * index of bool in array refers to action enum #
   */
  action_completed?: boolean[];
}
export interface ClaimRecordAminoMsg {
  type: "/publicawesome.stargaze.claim.v1beta1.ClaimRecord";
  value: ClaimRecordAmino;
}
export interface ClaimRecordSDKType {
  address: string;
  initial_claimable_amount: CoinSDKType[];
  action_completed: boolean[];
}
function createBaseClaimRecord(): ClaimRecord {
  return {
    address: "",
    initialClaimableAmount: [],
    actionCompleted: []
  };
}
export const ClaimRecord = {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.ClaimRecord",
  is(o: any): o is ClaimRecord {
    return o && (o.$typeUrl === ClaimRecord.typeUrl || typeof o.address === "string" && Array.isArray(o.initialClaimableAmount) && (!o.initialClaimableAmount.length || Coin.is(o.initialClaimableAmount[0])) && Array.isArray(o.actionCompleted) && (!o.actionCompleted.length || typeof o.actionCompleted[0] === "boolean"));
  },
  isSDK(o: any): o is ClaimRecordSDKType {
    return o && (o.$typeUrl === ClaimRecord.typeUrl || typeof o.address === "string" && Array.isArray(o.initial_claimable_amount) && (!o.initial_claimable_amount.length || Coin.isSDK(o.initial_claimable_amount[0])) && Array.isArray(o.action_completed) && (!o.action_completed.length || typeof o.action_completed[0] === "boolean"));
  },
  isAmino(o: any): o is ClaimRecordAmino {
    return o && (o.$typeUrl === ClaimRecord.typeUrl || typeof o.address === "string" && Array.isArray(o.initial_claimable_amount) && (!o.initial_claimable_amount.length || Coin.isAmino(o.initial_claimable_amount[0])) && Array.isArray(o.action_completed) && (!o.action_completed.length || typeof o.action_completed[0] === "boolean"));
  },
  encode(message: ClaimRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.initialClaimableAmount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.actionCompleted) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClaimRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.initialClaimableAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.actionCompleted.push(reader.bool());
            }
          } else {
            message.actionCompleted.push(reader.bool());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ClaimRecord>): ClaimRecord {
    const message = createBaseClaimRecord();
    message.address = object.address ?? "";
    message.initialClaimableAmount = object.initialClaimableAmount?.map(e => Coin.fromPartial(e)) || [];
    message.actionCompleted = object.actionCompleted?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ClaimRecordAmino): ClaimRecord {
    const message = createBaseClaimRecord();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.initialClaimableAmount = object.initial_claimable_amount?.map(e => Coin.fromAmino(e)) || [];
    message.actionCompleted = object.action_completed?.map(e => e) || [];
    return message;
  },
  toAmino(message: ClaimRecord): ClaimRecordAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.initialClaimableAmount) {
      obj.initial_claimable_amount = message.initialClaimableAmount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.initial_claimable_amount = message.initialClaimableAmount;
    }
    if (message.actionCompleted) {
      obj.action_completed = message.actionCompleted.map(e => e);
    } else {
      obj.action_completed = message.actionCompleted;
    }
    return obj;
  },
  fromAminoMsg(object: ClaimRecordAminoMsg): ClaimRecord {
    return ClaimRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimRecordProtoMsg): ClaimRecord {
    return ClaimRecord.decode(message.value);
  },
  toProto(message: ClaimRecord): Uint8Array {
    return ClaimRecord.encode(message).finish();
  },
  toProtoMsg(message: ClaimRecord): ClaimRecordProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.claim.v1beta1.ClaimRecord",
      value: ClaimRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ClaimRecord.typeUrl, ClaimRecord);