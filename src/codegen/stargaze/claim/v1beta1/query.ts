import { Action, ClaimRecord, ClaimRecordAmino, ClaimRecordSDKType } from "./claim_record";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceRequest {}
export interface QueryModuleAccountBalanceRequestProtoMsg {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryModuleAccountBalanceRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceRequestAmino {}
export interface QueryModuleAccountBalanceRequestAminoMsg {
  type: "/publicawesome.stargaze.claim.v1beta1.QueryModuleAccountBalanceRequest";
  value: QueryModuleAccountBalanceRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceResponse {
  /** params defines the parameters of the module. */
  moduleAccountBalance: Coin[];
}
export interface QueryModuleAccountBalanceResponseProtoMsg {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryModuleAccountBalanceResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceResponseAmino {
  /** params defines the parameters of the module. */
  moduleAccountBalance?: CoinAmino[];
}
export interface QueryModuleAccountBalanceResponseAminoMsg {
  type: "/publicawesome.stargaze.claim.v1beta1.QueryModuleAccountBalanceResponse";
  value: QueryModuleAccountBalanceResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceResponseSDKType {
  moduleAccountBalance: CoinSDKType[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/publicawesome.stargaze.claim.v1beta1.QueryParamsRequest";
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
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/publicawesome.stargaze.claim.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryClaimRecordRequest {
  address: string;
}
export interface QueryClaimRecordRequestProtoMsg {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryClaimRecordRequest";
  value: Uint8Array;
}
export interface QueryClaimRecordRequestAmino {
  address?: string;
}
export interface QueryClaimRecordRequestAminoMsg {
  type: "/publicawesome.stargaze.claim.v1beta1.QueryClaimRecordRequest";
  value: QueryClaimRecordRequestAmino;
}
export interface QueryClaimRecordRequestSDKType {
  address: string;
}
export interface QueryClaimRecordResponse {
  claimRecord: ClaimRecord;
}
export interface QueryClaimRecordResponseProtoMsg {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryClaimRecordResponse";
  value: Uint8Array;
}
export interface QueryClaimRecordResponseAmino {
  claim_record?: ClaimRecordAmino;
}
export interface QueryClaimRecordResponseAminoMsg {
  type: "/publicawesome.stargaze.claim.v1beta1.QueryClaimRecordResponse";
  value: QueryClaimRecordResponseAmino;
}
export interface QueryClaimRecordResponseSDKType {
  claim_record: ClaimRecordSDKType;
}
export interface QueryClaimableForActionRequest {
  address: string;
  action: Action;
}
export interface QueryClaimableForActionRequestProtoMsg {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryClaimableForActionRequest";
  value: Uint8Array;
}
export interface QueryClaimableForActionRequestAmino {
  address?: string;
  action?: Action;
}
export interface QueryClaimableForActionRequestAminoMsg {
  type: "/publicawesome.stargaze.claim.v1beta1.QueryClaimableForActionRequest";
  value: QueryClaimableForActionRequestAmino;
}
export interface QueryClaimableForActionRequestSDKType {
  address: string;
  action: Action;
}
export interface QueryClaimableForActionResponse {
  coins: Coin[];
}
export interface QueryClaimableForActionResponseProtoMsg {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryClaimableForActionResponse";
  value: Uint8Array;
}
export interface QueryClaimableForActionResponseAmino {
  coins?: CoinAmino[];
}
export interface QueryClaimableForActionResponseAminoMsg {
  type: "/publicawesome.stargaze.claim.v1beta1.QueryClaimableForActionResponse";
  value: QueryClaimableForActionResponseAmino;
}
export interface QueryClaimableForActionResponseSDKType {
  coins: CoinSDKType[];
}
export interface QueryTotalClaimableRequest {
  address: string;
}
export interface QueryTotalClaimableRequestProtoMsg {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryTotalClaimableRequest";
  value: Uint8Array;
}
export interface QueryTotalClaimableRequestAmino {
  address?: string;
}
export interface QueryTotalClaimableRequestAminoMsg {
  type: "/publicawesome.stargaze.claim.v1beta1.QueryTotalClaimableRequest";
  value: QueryTotalClaimableRequestAmino;
}
export interface QueryTotalClaimableRequestSDKType {
  address: string;
}
export interface QueryTotalClaimableResponse {
  coins: Coin[];
}
export interface QueryTotalClaimableResponseProtoMsg {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryTotalClaimableResponse";
  value: Uint8Array;
}
export interface QueryTotalClaimableResponseAmino {
  coins?: CoinAmino[];
}
export interface QueryTotalClaimableResponseAminoMsg {
  type: "/publicawesome.stargaze.claim.v1beta1.QueryTotalClaimableResponse";
  value: QueryTotalClaimableResponseAmino;
}
export interface QueryTotalClaimableResponseSDKType {
  coins: CoinSDKType[];
}
function createBaseQueryModuleAccountBalanceRequest(): QueryModuleAccountBalanceRequest {
  return {};
}
export const QueryModuleAccountBalanceRequest = {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryModuleAccountBalanceRequest",
  encode(_: QueryModuleAccountBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountBalanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountBalanceRequest();
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
  fromPartial(_: Partial<QueryModuleAccountBalanceRequest>): QueryModuleAccountBalanceRequest {
    const message = createBaseQueryModuleAccountBalanceRequest();
    return message;
  },
  fromAmino(_: QueryModuleAccountBalanceRequestAmino): QueryModuleAccountBalanceRequest {
    const message = createBaseQueryModuleAccountBalanceRequest();
    return message;
  },
  toAmino(_: QueryModuleAccountBalanceRequest): QueryModuleAccountBalanceRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryModuleAccountBalanceRequestAminoMsg): QueryModuleAccountBalanceRequest {
    return QueryModuleAccountBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleAccountBalanceRequestProtoMsg): QueryModuleAccountBalanceRequest {
    return QueryModuleAccountBalanceRequest.decode(message.value);
  },
  toProto(message: QueryModuleAccountBalanceRequest): Uint8Array {
    return QueryModuleAccountBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleAccountBalanceRequest): QueryModuleAccountBalanceRequestProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryModuleAccountBalanceRequest",
      value: QueryModuleAccountBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryModuleAccountBalanceResponse(): QueryModuleAccountBalanceResponse {
  return {
    moduleAccountBalance: []
  };
}
export const QueryModuleAccountBalanceResponse = {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryModuleAccountBalanceResponse",
  encode(message: QueryModuleAccountBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.moduleAccountBalance) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountBalanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleAccountBalance.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryModuleAccountBalanceResponse>): QueryModuleAccountBalanceResponse {
    const message = createBaseQueryModuleAccountBalanceResponse();
    message.moduleAccountBalance = object.moduleAccountBalance?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryModuleAccountBalanceResponseAmino): QueryModuleAccountBalanceResponse {
    const message = createBaseQueryModuleAccountBalanceResponse();
    message.moduleAccountBalance = object.moduleAccountBalance?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryModuleAccountBalanceResponse): QueryModuleAccountBalanceResponseAmino {
    const obj: any = {};
    if (message.moduleAccountBalance) {
      obj.moduleAccountBalance = message.moduleAccountBalance.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.moduleAccountBalance = message.moduleAccountBalance;
    }
    return obj;
  },
  fromAminoMsg(object: QueryModuleAccountBalanceResponseAminoMsg): QueryModuleAccountBalanceResponse {
    return QueryModuleAccountBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleAccountBalanceResponseProtoMsg): QueryModuleAccountBalanceResponse {
    return QueryModuleAccountBalanceResponse.decode(message.value);
  },
  toProto(message: QueryModuleAccountBalanceResponse): Uint8Array {
    return QueryModuleAccountBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleAccountBalanceResponse): QueryModuleAccountBalanceResponseProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryModuleAccountBalanceResponse",
      value: QueryModuleAccountBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryParamsRequest",
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
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
      typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryParamsResponse",
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
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
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
      typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClaimRecordRequest(): QueryClaimRecordRequest {
  return {
    address: ""
  };
}
export const QueryClaimRecordRequest = {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryClaimRecordRequest",
  encode(message: QueryClaimRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryClaimRecordRequest>): QueryClaimRecordRequest {
    const message = createBaseQueryClaimRecordRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryClaimRecordRequestAmino): QueryClaimRecordRequest {
    const message = createBaseQueryClaimRecordRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryClaimRecordRequest): QueryClaimRecordRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryClaimRecordRequestAminoMsg): QueryClaimRecordRequest {
    return QueryClaimRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimRecordRequestProtoMsg): QueryClaimRecordRequest {
    return QueryClaimRecordRequest.decode(message.value);
  },
  toProto(message: QueryClaimRecordRequest): Uint8Array {
    return QueryClaimRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimRecordRequest): QueryClaimRecordRequestProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryClaimRecordRequest",
      value: QueryClaimRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimRecordResponse(): QueryClaimRecordResponse {
  return {
    claimRecord: ClaimRecord.fromPartial({})
  };
}
export const QueryClaimRecordResponse = {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryClaimRecordResponse",
  encode(message: QueryClaimRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claimRecord !== undefined) {
      ClaimRecord.encode(message.claimRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimRecord = ClaimRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryClaimRecordResponse>): QueryClaimRecordResponse {
    const message = createBaseQueryClaimRecordResponse();
    message.claimRecord = object.claimRecord !== undefined && object.claimRecord !== null ? ClaimRecord.fromPartial(object.claimRecord) : undefined;
    return message;
  },
  fromAmino(object: QueryClaimRecordResponseAmino): QueryClaimRecordResponse {
    const message = createBaseQueryClaimRecordResponse();
    if (object.claim_record !== undefined && object.claim_record !== null) {
      message.claimRecord = ClaimRecord.fromAmino(object.claim_record);
    }
    return message;
  },
  toAmino(message: QueryClaimRecordResponse): QueryClaimRecordResponseAmino {
    const obj: any = {};
    obj.claim_record = message.claimRecord ? ClaimRecord.toAmino(message.claimRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClaimRecordResponseAminoMsg): QueryClaimRecordResponse {
    return QueryClaimRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimRecordResponseProtoMsg): QueryClaimRecordResponse {
    return QueryClaimRecordResponse.decode(message.value);
  },
  toProto(message: QueryClaimRecordResponse): Uint8Array {
    return QueryClaimRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimRecordResponse): QueryClaimRecordResponseProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryClaimRecordResponse",
      value: QueryClaimRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClaimableForActionRequest(): QueryClaimableForActionRequest {
  return {
    address: "",
    action: 0
  };
}
export const QueryClaimableForActionRequest = {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryClaimableForActionRequest",
  encode(message: QueryClaimableForActionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.action !== 0) {
      writer.uint32(16).int32(message.action);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimableForActionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimableForActionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.action = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryClaimableForActionRequest>): QueryClaimableForActionRequest {
    const message = createBaseQueryClaimableForActionRequest();
    message.address = object.address ?? "";
    message.action = object.action ?? 0;
    return message;
  },
  fromAmino(object: QueryClaimableForActionRequestAmino): QueryClaimableForActionRequest {
    const message = createBaseQueryClaimableForActionRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    }
    return message;
  },
  toAmino(message: QueryClaimableForActionRequest): QueryClaimableForActionRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.action = message.action === 0 ? undefined : message.action;
    return obj;
  },
  fromAminoMsg(object: QueryClaimableForActionRequestAminoMsg): QueryClaimableForActionRequest {
    return QueryClaimableForActionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimableForActionRequestProtoMsg): QueryClaimableForActionRequest {
    return QueryClaimableForActionRequest.decode(message.value);
  },
  toProto(message: QueryClaimableForActionRequest): Uint8Array {
    return QueryClaimableForActionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimableForActionRequest): QueryClaimableForActionRequestProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryClaimableForActionRequest",
      value: QueryClaimableForActionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimableForActionResponse(): QueryClaimableForActionResponse {
  return {
    coins: []
  };
}
export const QueryClaimableForActionResponse = {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryClaimableForActionResponse",
  encode(message: QueryClaimableForActionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimableForActionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimableForActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryClaimableForActionResponse>): QueryClaimableForActionResponse {
    const message = createBaseQueryClaimableForActionResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryClaimableForActionResponseAmino): QueryClaimableForActionResponse {
    const message = createBaseQueryClaimableForActionResponse();
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryClaimableForActionResponse): QueryClaimableForActionResponseAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: QueryClaimableForActionResponseAminoMsg): QueryClaimableForActionResponse {
    return QueryClaimableForActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimableForActionResponseProtoMsg): QueryClaimableForActionResponse {
    return QueryClaimableForActionResponse.decode(message.value);
  },
  toProto(message: QueryClaimableForActionResponse): Uint8Array {
    return QueryClaimableForActionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimableForActionResponse): QueryClaimableForActionResponseProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryClaimableForActionResponse",
      value: QueryClaimableForActionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalClaimableRequest(): QueryTotalClaimableRequest {
  return {
    address: ""
  };
}
export const QueryTotalClaimableRequest = {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryTotalClaimableRequest",
  encode(message: QueryTotalClaimableRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalClaimableRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalClaimableRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalClaimableRequest>): QueryTotalClaimableRequest {
    const message = createBaseQueryTotalClaimableRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryTotalClaimableRequestAmino): QueryTotalClaimableRequest {
    const message = createBaseQueryTotalClaimableRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryTotalClaimableRequest): QueryTotalClaimableRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryTotalClaimableRequestAminoMsg): QueryTotalClaimableRequest {
    return QueryTotalClaimableRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalClaimableRequestProtoMsg): QueryTotalClaimableRequest {
    return QueryTotalClaimableRequest.decode(message.value);
  },
  toProto(message: QueryTotalClaimableRequest): Uint8Array {
    return QueryTotalClaimableRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalClaimableRequest): QueryTotalClaimableRequestProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryTotalClaimableRequest",
      value: QueryTotalClaimableRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalClaimableResponse(): QueryTotalClaimableResponse {
  return {
    coins: []
  };
}
export const QueryTotalClaimableResponse = {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryTotalClaimableResponse",
  encode(message: QueryTotalClaimableResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalClaimableResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalClaimableResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalClaimableResponse>): QueryTotalClaimableResponse {
    const message = createBaseQueryTotalClaimableResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTotalClaimableResponseAmino): QueryTotalClaimableResponse {
    const message = createBaseQueryTotalClaimableResponse();
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTotalClaimableResponse): QueryTotalClaimableResponseAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalClaimableResponseAminoMsg): QueryTotalClaimableResponse {
    return QueryTotalClaimableResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalClaimableResponseProtoMsg): QueryTotalClaimableResponse {
    return QueryTotalClaimableResponse.decode(message.value);
  },
  toProto(message: QueryTotalClaimableResponse): Uint8Array {
    return QueryTotalClaimableResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalClaimableResponse): QueryTotalClaimableResponseProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.claim.v1beta1.QueryTotalClaimableResponse",
      value: QueryTotalClaimableResponse.encode(message).finish()
    };
  }
};