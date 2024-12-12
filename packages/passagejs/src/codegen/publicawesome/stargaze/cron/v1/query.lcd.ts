import { LCDClient } from "@cosmology/lcd";
import { QueryListPrivilegedRequest, QueryListPrivilegedResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.listPrivileged = this.listPrivileged.bind(this);
    this.params = this.params.bind(this);
  }
  /* ListPrivileged queries the contracts which have the priviledge status */
  async listPrivileged(_params: QueryListPrivilegedRequest = {}): Promise<QueryListPrivilegedResponseSDKType> {
    const endpoint = `stargaze/cron/v1/list-privileged`;
    return await this.req.get<QueryListPrivilegedResponseSDKType>(endpoint);
  }
  /* Params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `stargaze/cron/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}