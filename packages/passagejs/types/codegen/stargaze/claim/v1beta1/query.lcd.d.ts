import { LCDClient } from "@cosmology/lcd";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryClaimRecordRequest, QueryClaimRecordResponseSDKType, QueryClaimableForActionRequest, QueryClaimableForActionResponseSDKType, QueryTotalClaimableRequest, QueryTotalClaimableResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    moduleAccountBalance(_params?: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    claimRecord(params: QueryClaimRecordRequest): Promise<QueryClaimRecordResponseSDKType>;
    claimableForAction(params: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponseSDKType>;
    totalClaimable(params: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponseSDKType>;
}
