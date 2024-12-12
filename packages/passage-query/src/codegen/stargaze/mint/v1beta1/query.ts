import { Params, ParamsAmino, ParamsSDKType } from "./mint";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/stargaze.mint.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/stargaze.mint.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/stargaze.mint.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/stargaze.mint.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequest {}
export interface QueryAnnualProvisionsRequestProtoMsg {
  typeUrl: "/stargaze.mint.v1beta1.QueryAnnualProvisionsRequest";
  value: Uint8Array;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequestAmino {}
export interface QueryAnnualProvisionsRequestAminoMsg {
  type: "/stargaze.mint.v1beta1.QueryAnnualProvisionsRequest";
  value: QueryAnnualProvisionsRequestAmino;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequestSDKType {}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponse {
  /** annual_provisions is the current minting annual provisions value. */
  annualProvisions: Uint8Array;
}
export interface QueryAnnualProvisionsResponseProtoMsg {
  typeUrl: "/stargaze.mint.v1beta1.QueryAnnualProvisionsResponse";
  value: Uint8Array;
}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponseAmino {
  /** annual_provisions is the current minting annual provisions value. */
  annual_provisions?: string;
}
export interface QueryAnnualProvisionsResponseAminoMsg {
  type: "/stargaze.mint.v1beta1.QueryAnnualProvisionsResponse";
  value: QueryAnnualProvisionsResponseAmino;
}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponseSDKType {
  annual_provisions: Uint8Array;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/stargaze.mint.v1beta1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/stargaze.mint.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/stargaze.mint.v1beta1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/stargaze.mint.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryAnnualProvisionsRequest(): QueryAnnualProvisionsRequest {
  return {};
}
export const QueryAnnualProvisionsRequest = {
  typeUrl: "/stargaze.mint.v1beta1.QueryAnnualProvisionsRequest",
  is(o: any): o is QueryAnnualProvisionsRequest {
    return o && o.$typeUrl === QueryAnnualProvisionsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAnnualProvisionsRequestSDKType {
    return o && o.$typeUrl === QueryAnnualProvisionsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAnnualProvisionsRequestAmino {
    return o && o.$typeUrl === QueryAnnualProvisionsRequest.typeUrl;
  },
  encode(_: QueryAnnualProvisionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAnnualProvisionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAnnualProvisionsRequest();
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
  fromPartial(_: DeepPartial<QueryAnnualProvisionsRequest>): QueryAnnualProvisionsRequest {
    const message = createBaseQueryAnnualProvisionsRequest();
    return message;
  },
  fromAmino(_: QueryAnnualProvisionsRequestAmino): QueryAnnualProvisionsRequest {
    const message = createBaseQueryAnnualProvisionsRequest();
    return message;
  },
  toAmino(_: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAnnualProvisionsRequestAminoMsg): QueryAnnualProvisionsRequest {
    return QueryAnnualProvisionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAnnualProvisionsRequestProtoMsg): QueryAnnualProvisionsRequest {
    return QueryAnnualProvisionsRequest.decode(message.value);
  },
  toProto(message: QueryAnnualProvisionsRequest): Uint8Array {
    return QueryAnnualProvisionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequestProtoMsg {
    return {
      typeUrl: "/stargaze.mint.v1beta1.QueryAnnualProvisionsRequest",
      value: QueryAnnualProvisionsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAnnualProvisionsRequest.typeUrl, QueryAnnualProvisionsRequest);
function createBaseQueryAnnualProvisionsResponse(): QueryAnnualProvisionsResponse {
  return {
    annualProvisions: new Uint8Array()
  };
}
export const QueryAnnualProvisionsResponse = {
  typeUrl: "/stargaze.mint.v1beta1.QueryAnnualProvisionsResponse",
  is(o: any): o is QueryAnnualProvisionsResponse {
    return o && (o.$typeUrl === QueryAnnualProvisionsResponse.typeUrl || o.annualProvisions instanceof Uint8Array || typeof o.annualProvisions === "string");
  },
  isSDK(o: any): o is QueryAnnualProvisionsResponseSDKType {
    return o && (o.$typeUrl === QueryAnnualProvisionsResponse.typeUrl || o.annual_provisions instanceof Uint8Array || typeof o.annual_provisions === "string");
  },
  isAmino(o: any): o is QueryAnnualProvisionsResponseAmino {
    return o && (o.$typeUrl === QueryAnnualProvisionsResponse.typeUrl || o.annual_provisions instanceof Uint8Array || typeof o.annual_provisions === "string");
  },
  encode(message: QueryAnnualProvisionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.annualProvisions.length !== 0) {
      writer.uint32(10).bytes(message.annualProvisions);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAnnualProvisionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAnnualProvisionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.annualProvisions = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAnnualProvisionsResponse>): QueryAnnualProvisionsResponse {
    const message = createBaseQueryAnnualProvisionsResponse();
    message.annualProvisions = object.annualProvisions ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryAnnualProvisionsResponseAmino): QueryAnnualProvisionsResponse {
    const message = createBaseQueryAnnualProvisionsResponse();
    if (object.annual_provisions !== undefined && object.annual_provisions !== null) {
      message.annualProvisions = bytesFromBase64(object.annual_provisions);
    }
    return message;
  },
  toAmino(message: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponseAmino {
    const obj: any = {};
    obj.annual_provisions = message.annualProvisions ? base64FromBytes(message.annualProvisions) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAnnualProvisionsResponseAminoMsg): QueryAnnualProvisionsResponse {
    return QueryAnnualProvisionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAnnualProvisionsResponseProtoMsg): QueryAnnualProvisionsResponse {
    return QueryAnnualProvisionsResponse.decode(message.value);
  },
  toProto(message: QueryAnnualProvisionsResponse): Uint8Array {
    return QueryAnnualProvisionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponseProtoMsg {
    return {
      typeUrl: "/stargaze.mint.v1beta1.QueryAnnualProvisionsResponse",
      value: QueryAnnualProvisionsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAnnualProvisionsResponse.typeUrl, QueryAnnualProvisionsResponse);