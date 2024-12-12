import { LCDClient } from "@cosmology/lcd";
import { QueryListPrivilegedRequest, QueryListPrivilegedResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.listPrivileged = this.listPrivileged.bind(this);
  }
  /* ListPrivileged queries the contracts which have the priviledge status */
  async listPrivileged(_params: QueryListPrivilegedRequest = {}): Promise<QueryListPrivilegedResponseSDKType> {
    const endpoint = `stargaze/cron/v1/list-privileged`;
    return await this.req.get<QueryListPrivilegedResponseSDKType>(endpoint);
  }
}