import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    moduleAccountBalance(request?: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
    claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse>;
    totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    moduleAccountBalance(request?: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
    claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse>;
    totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    moduleAccountBalance(request?: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
    claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse>;
    totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse>;
};
