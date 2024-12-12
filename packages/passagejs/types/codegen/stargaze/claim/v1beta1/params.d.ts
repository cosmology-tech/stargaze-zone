import { Action } from "./claim_record";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface ClaimAuthorization {
    contractAddress: string;
    action: Action;
}
export interface ClaimAuthorizationSDKType {
    contract_address: string;
    action: Action;
}
/** Params defines the claim module's parameters. */
export interface Params {
    airdropEnabled: boolean;
    airdropStartTime?: Date;
    durationUntilDecay?: Duration;
    durationOfDecay?: Duration;
    /** denom of claimable asset */
    claimDenom: string;
    /** list of contracts and their allowed claim actions */
    allowedClaimers: ClaimAuthorization[];
}
/** Params defines the claim module's parameters. */
export interface ParamsSDKType {
    airdrop_enabled: boolean;
    airdrop_start_time?: Date;
    duration_until_decay?: DurationSDKType;
    duration_of_decay?: DurationSDKType;
    claim_denom: string;
    allowed_claimers: ClaimAuthorizationSDKType[];
}
export declare const ClaimAuthorization: {
    encode(message: ClaimAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimAuthorization;
    fromPartial(object: DeepPartial<ClaimAuthorization>): ClaimAuthorization;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
