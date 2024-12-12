import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface WeightedAddress {
    address: string;
    weight: string;
}
export interface WeightedAddressSDKType {
    address: string;
    weight: string;
}
export interface DistributionProportions {
    nftIncentives: string;
    developerRewards: string;
}
export interface DistributionProportionsSDKType {
    nft_incentives: string;
    developer_rewards: string;
}
export interface Params {
    /** distribution_proportions defines the proportion of the minted denom */
    distributionProportions: DistributionProportions;
    /** address to receive developer rewards */
    weightedDeveloperRewardsReceivers: WeightedAddress[];
}
export interface ParamsSDKType {
    distribution_proportions: DistributionProportionsSDKType;
    weighted_developer_rewards_receivers: WeightedAddressSDKType[];
}
export declare const WeightedAddress: {
    encode(message: WeightedAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WeightedAddress;
    fromPartial(object: DeepPartial<WeightedAddress>): WeightedAddress;
};
export declare const DistributionProportions: {
    encode(message: DistributionProportions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DistributionProportions;
    fromPartial(object: DeepPartial<DistributionProportions>): DistributionProportions;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
