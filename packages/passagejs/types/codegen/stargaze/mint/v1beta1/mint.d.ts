import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Minter represents the minting state. */
export interface Minter {
    /** current annual expected provisions */
    annualProvisions: string;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
    annual_provisions: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
    /** type of coin to mint */
    mintDenom: string;
    /** the time the chain starts */
    startTime?: Date;
    /** initial annual provisions */
    initialAnnualProvisions: string;
    /** factor to reduce inflation by each year */
    reductionFactor: string;
    /** expected blocks per year */
    blocksPerYear: Long;
}
/** Params holds parameters for the mint module. */
export interface ParamsSDKType {
    mint_denom: string;
    start_time?: Date;
    initial_annual_provisions: string;
    reduction_factor: string;
    blocks_per_year: Long;
}
export declare const Minter: {
    encode(message: Minter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Minter;
    fromPartial(object: DeepPartial<Minter>): Minter;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
