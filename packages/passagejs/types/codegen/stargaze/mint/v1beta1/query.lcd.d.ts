import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    annualProvisions(_params?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponseSDKType>;
}
