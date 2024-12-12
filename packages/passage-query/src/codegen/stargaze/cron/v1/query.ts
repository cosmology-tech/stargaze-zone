import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * QueryListPrivilegedRequest is request type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedRequest {}
export interface QueryListPrivilegedRequestProtoMsg {
  typeUrl: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedRequest";
  value: Uint8Array;
}
/**
 * QueryListPrivilegedRequest is request type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedRequestAmino {}
export interface QueryListPrivilegedRequestAminoMsg {
  type: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedRequest";
  value: QueryListPrivilegedRequestAmino;
}
/**
 * QueryListPrivilegedRequest is request type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedRequestSDKType {}
/**
 * QueryListPrivilegedResponse is response type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedResponse {
  /**
   * contract_addresses holds all the smart contract addresses which have
   * privilege status.
   */
  contractAddresses: string[];
}
export interface QueryListPrivilegedResponseProtoMsg {
  typeUrl: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedResponse";
  value: Uint8Array;
}
/**
 * QueryListPrivilegedResponse is response type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedResponseAmino {
  /**
   * contract_addresses holds all the smart contract addresses which have
   * privilege status.
   */
  contract_addresses?: string[];
}
export interface QueryListPrivilegedResponseAminoMsg {
  type: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedResponse";
  value: QueryListPrivilegedResponseAmino;
}
/**
 * QueryListPrivilegedResponse is response type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedResponseSDKType {
  contract_addresses: string[];
}
function createBaseQueryListPrivilegedRequest(): QueryListPrivilegedRequest {
  return {};
}
export const QueryListPrivilegedRequest = {
  typeUrl: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedRequest",
  is(o: any): o is QueryListPrivilegedRequest {
    return o && o.$typeUrl === QueryListPrivilegedRequest.typeUrl;
  },
  isSDK(o: any): o is QueryListPrivilegedRequestSDKType {
    return o && o.$typeUrl === QueryListPrivilegedRequest.typeUrl;
  },
  isAmino(o: any): o is QueryListPrivilegedRequestAmino {
    return o && o.$typeUrl === QueryListPrivilegedRequest.typeUrl;
  },
  encode(_: QueryListPrivilegedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListPrivilegedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListPrivilegedRequest();
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
  fromPartial(_: DeepPartial<QueryListPrivilegedRequest>): QueryListPrivilegedRequest {
    const message = createBaseQueryListPrivilegedRequest();
    return message;
  },
  fromAmino(_: QueryListPrivilegedRequestAmino): QueryListPrivilegedRequest {
    const message = createBaseQueryListPrivilegedRequest();
    return message;
  },
  toAmino(_: QueryListPrivilegedRequest): QueryListPrivilegedRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryListPrivilegedRequestAminoMsg): QueryListPrivilegedRequest {
    return QueryListPrivilegedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListPrivilegedRequestProtoMsg): QueryListPrivilegedRequest {
    return QueryListPrivilegedRequest.decode(message.value);
  },
  toProto(message: QueryListPrivilegedRequest): Uint8Array {
    return QueryListPrivilegedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListPrivilegedRequest): QueryListPrivilegedRequestProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedRequest",
      value: QueryListPrivilegedRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryListPrivilegedRequest.typeUrl, QueryListPrivilegedRequest);
function createBaseQueryListPrivilegedResponse(): QueryListPrivilegedResponse {
  return {
    contractAddresses: []
  };
}
export const QueryListPrivilegedResponse = {
  typeUrl: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedResponse",
  is(o: any): o is QueryListPrivilegedResponse {
    return o && (o.$typeUrl === QueryListPrivilegedResponse.typeUrl || Array.isArray(o.contractAddresses) && (!o.contractAddresses.length || typeof o.contractAddresses[0] === "string"));
  },
  isSDK(o: any): o is QueryListPrivilegedResponseSDKType {
    return o && (o.$typeUrl === QueryListPrivilegedResponse.typeUrl || Array.isArray(o.contract_addresses) && (!o.contract_addresses.length || typeof o.contract_addresses[0] === "string"));
  },
  isAmino(o: any): o is QueryListPrivilegedResponseAmino {
    return o && (o.$typeUrl === QueryListPrivilegedResponse.typeUrl || Array.isArray(o.contract_addresses) && (!o.contract_addresses.length || typeof o.contract_addresses[0] === "string"));
  },
  encode(message: QueryListPrivilegedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListPrivilegedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListPrivilegedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryListPrivilegedResponse>): QueryListPrivilegedResponse {
    const message = createBaseQueryListPrivilegedResponse();
    message.contractAddresses = object.contractAddresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryListPrivilegedResponseAmino): QueryListPrivilegedResponse {
    const message = createBaseQueryListPrivilegedResponse();
    message.contractAddresses = object.contract_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryListPrivilegedResponse): QueryListPrivilegedResponseAmino {
    const obj: any = {};
    if (message.contractAddresses) {
      obj.contract_addresses = message.contractAddresses.map(e => e);
    } else {
      obj.contract_addresses = message.contractAddresses;
    }
    return obj;
  },
  fromAminoMsg(object: QueryListPrivilegedResponseAminoMsg): QueryListPrivilegedResponse {
    return QueryListPrivilegedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListPrivilegedResponseProtoMsg): QueryListPrivilegedResponse {
    return QueryListPrivilegedResponse.decode(message.value);
  },
  toProto(message: QueryListPrivilegedResponse): Uint8Array {
    return QueryListPrivilegedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListPrivilegedResponse): QueryListPrivilegedResponseProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedResponse",
      value: QueryListPrivilegedResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryListPrivilegedResponse.typeUrl, QueryListPrivilegedResponse);