import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgInitialClaim, MsgInitialClaimResponse, MsgClaimFor, MsgClaimForResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  initialClaim(request: MsgInitialClaim): Promise<MsgInitialClaimResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  claimFor(request: MsgClaimFor): Promise<MsgClaimForResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.initialClaim = this.initialClaim.bind(this);
    this.claimFor = this.claimFor.bind(this);
  }
  initialClaim(request: MsgInitialClaim): Promise<MsgInitialClaimResponse> {
    const data = MsgInitialClaim.encode(request).finish();
    const promise = this.rpc.request("publicawesome.stargaze.claim.v1beta1.Msg", "InitialClaim", data);
    return promise.then(data => MsgInitialClaimResponse.decode(new BinaryReader(data)));
  }
  claimFor(request: MsgClaimFor): Promise<MsgClaimForResponse> {
    const data = MsgClaimFor.encode(request).finish();
    const promise = this.rpc.request("publicawesome.stargaze.claim.v1beta1.Msg", "ClaimFor", data);
    return promise.then(data => MsgClaimForResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};