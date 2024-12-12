import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** Minter represents the minting state. */
export interface Minter {
  /** current annual expected provisions */
  annualProvisions: string;
}
export interface MinterProtoMsg {
  typeUrl: "/stargaze.mint.v1beta1.Minter";
  value: Uint8Array;
}
/** Minter represents the minting state. */
export interface MinterAmino {
  /** current annual expected provisions */
  annual_provisions?: string;
}
export interface MinterAminoMsg {
  type: "/stargaze.mint.v1beta1.Minter";
  value: MinterAmino;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
  annual_provisions: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** the time the chain starts */
  startTime: Date;
  /** initial annual provisions */
  initialAnnualProvisions: string;
  /** factor to reduce inflation by each year */
  reductionFactor: string;
  /** expected blocks per year */
  blocksPerYear: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/stargaze.mint.v1beta1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the mint module. */
export interface ParamsAmino {
  /** type of coin to mint */
  mint_denom?: string;
  /** the time the chain starts */
  start_time?: string;
  /** initial annual provisions */
  initial_annual_provisions?: string;
  /** factor to reduce inflation by each year */
  reduction_factor?: string;
  /** expected blocks per year */
  blocks_per_year?: string;
}
export interface ParamsAminoMsg {
  type: "/stargaze.mint.v1beta1.Params";
  value: ParamsAmino;
}
/** Params holds parameters for the mint module. */
export interface ParamsSDKType {
  mint_denom: string;
  start_time: Date;
  initial_annual_provisions: string;
  reduction_factor: string;
  blocks_per_year: bigint;
}
function createBaseMinter(): Minter {
  return {
    annualProvisions: ""
  };
}
export const Minter = {
  typeUrl: "/stargaze.mint.v1beta1.Minter",
  is(o: any): o is Minter {
    return o && (o.$typeUrl === Minter.typeUrl || typeof o.annualProvisions === "string");
  },
  isSDK(o: any): o is MinterSDKType {
    return o && (o.$typeUrl === Minter.typeUrl || typeof o.annual_provisions === "string");
  },
  isAmino(o: any): o is MinterAmino {
    return o && (o.$typeUrl === Minter.typeUrl || typeof o.annual_provisions === "string");
  },
  encode(message: Minter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.annualProvisions !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.annualProvisions, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Minter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.annualProvisions = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Minter>): Minter {
    const message = createBaseMinter();
    message.annualProvisions = object.annualProvisions ?? "";
    return message;
  },
  fromAmino(object: MinterAmino): Minter {
    const message = createBaseMinter();
    if (object.annual_provisions !== undefined && object.annual_provisions !== null) {
      message.annualProvisions = object.annual_provisions;
    }
    return message;
  },
  toAmino(message: Minter): MinterAmino {
    const obj: any = {};
    obj.annual_provisions = message.annualProvisions === "" ? undefined : message.annualProvisions;
    return obj;
  },
  fromAminoMsg(object: MinterAminoMsg): Minter {
    return Minter.fromAmino(object.value);
  },
  fromProtoMsg(message: MinterProtoMsg): Minter {
    return Minter.decode(message.value);
  },
  toProto(message: Minter): Uint8Array {
    return Minter.encode(message).finish();
  },
  toProtoMsg(message: Minter): MinterProtoMsg {
    return {
      typeUrl: "/stargaze.mint.v1beta1.Minter",
      value: Minter.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Minter.typeUrl, Minter);
function createBaseParams(): Params {
  return {
    mintDenom: "",
    startTime: new Date(),
    initialAnnualProvisions: "",
    reductionFactor: "",
    blocksPerYear: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/stargaze.mint.v1beta1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.mintDenom === "string" && Timestamp.is(o.startTime) && typeof o.initialAnnualProvisions === "string" && typeof o.reductionFactor === "string" && typeof o.blocksPerYear === "bigint");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.mint_denom === "string" && Timestamp.isSDK(o.start_time) && typeof o.initial_annual_provisions === "string" && typeof o.reduction_factor === "string" && typeof o.blocks_per_year === "bigint");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.mint_denom === "string" && Timestamp.isAmino(o.start_time) && typeof o.initial_annual_provisions === "string" && typeof o.reduction_factor === "string" && typeof o.blocks_per_year === "bigint");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.initialAnnualProvisions !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.initialAnnualProvisions, 18).atomics);
    }
    if (message.reductionFactor !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.reductionFactor, 18).atomics);
    }
    if (message.blocksPerYear !== BigInt(0)) {
      writer.uint32(40).uint64(message.blocksPerYear);
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
          message.mintDenom = reader.string();
          break;
        case 2:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.initialAnnualProvisions = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.reductionFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.blocksPerYear = reader.uint64();
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
    message.mintDenom = object.mintDenom ?? "";
    message.startTime = object.startTime ?? undefined;
    message.initialAnnualProvisions = object.initialAnnualProvisions ?? "";
    message.reductionFactor = object.reductionFactor ?? "";
    message.blocksPerYear = object.blocksPerYear !== undefined && object.blocksPerYear !== null ? BigInt(object.blocksPerYear.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.mint_denom !== undefined && object.mint_denom !== null) {
      message.mintDenom = object.mint_denom;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    if (object.initial_annual_provisions !== undefined && object.initial_annual_provisions !== null) {
      message.initialAnnualProvisions = object.initial_annual_provisions;
    }
    if (object.reduction_factor !== undefined && object.reduction_factor !== null) {
      message.reductionFactor = object.reduction_factor;
    }
    if (object.blocks_per_year !== undefined && object.blocks_per_year !== null) {
      message.blocksPerYear = BigInt(object.blocks_per_year);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.mint_denom = message.mintDenom === "" ? undefined : message.mintDenom;
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    obj.initial_annual_provisions = message.initialAnnualProvisions === "" ? undefined : message.initialAnnualProvisions;
    obj.reduction_factor = message.reductionFactor === "" ? undefined : message.reductionFactor;
    obj.blocks_per_year = message.blocksPerYear !== BigInt(0) ? message.blocksPerYear.toString() : undefined;
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
      typeUrl: "/stargaze.mint.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);