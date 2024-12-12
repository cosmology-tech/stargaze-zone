import { Rpc } from "../../../helpers";
import { MsgInitialClaim, MsgInitialClaimResponse, MsgClaimFor, MsgClaimForResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    initialClaim(request: MsgInitialClaim): Promise<MsgInitialClaimResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    claimFor(request: MsgClaimFor): Promise<MsgClaimForResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    initialClaim(request: MsgInitialClaim): Promise<MsgInitialClaimResponse>;
    claimFor(request: MsgClaimFor): Promise<MsgClaimForResponse>;
}
