import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.annualProvisions = this.annualProvisions.bind(this);
  }
  /* Params returns the total set of minting parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `stargaze/mint/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* AnnualProvisions current minting annual provisions value. */
  async annualProvisions(_params: QueryAnnualProvisionsRequest = {}): Promise<QueryAnnualProvisionsResponseSDKType> {
    const endpoint = `stargaze/mint/v1beta1/annual_provisions`;
    return await this.req.get<QueryAnnualProvisionsResponseSDKType>(endpoint);
  }
}