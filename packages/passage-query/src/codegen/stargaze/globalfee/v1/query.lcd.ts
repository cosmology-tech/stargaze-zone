import { LCDClient } from "@cosmology/lcd";
import { QueryCodeAuthorizationRequest, QueryCodeAuthorizationResponseSDKType, QueryContractAuthorizationRequest, QueryContractAuthorizationResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryAuthorizationsRequest, QueryAuthorizationsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.codeAuthorization = this.codeAuthorization.bind(this);
    this.contractAuthorization = this.contractAuthorization.bind(this);
    this.params = this.params.bind(this);
    this.authorizations = this.authorizations.bind(this);
  }
  /* CodeAuthorization */
  async codeAuthorization(params: QueryCodeAuthorizationRequest): Promise<QueryCodeAuthorizationResponseSDKType> {
    const endpoint = `stargaze/globalfee/v1/code_authorization/${params.codeId}`;
    return await this.req.get<QueryCodeAuthorizationResponseSDKType>(endpoint);
  }
  /* ContractAuthorization */
  async contractAuthorization(params: QueryContractAuthorizationRequest): Promise<QueryContractAuthorizationResponseSDKType> {
    const endpoint = `stargaze/globalfee/v1/contract_authorization/${params.contractAddress}`;
    return await this.req.get<QueryContractAuthorizationResponseSDKType>(endpoint);
  }
  /* Params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `stargaze/globalfee/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Authorizations */
  async authorizations(_params: QueryAuthorizationsRequest = {}): Promise<QueryAuthorizationsResponseSDKType> {
    const endpoint = `stargaze/globalfee/v1/authorizations`;
    return await this.req.get<QueryAuthorizationsResponseSDKType>(endpoint);
  }
}