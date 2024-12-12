import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const publicawesomeAminoConverters: {
    "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim": {
        aminoType: string;
        toAmino: ({ sender }: import("../stargaze/claim/v1beta1/tx").MsgInitialClaim) => {
            sender: string;
        };
        fromAmino: ({ sender }: {
            sender: string;
        }) => import("../stargaze/claim/v1beta1/tx").MsgInitialClaim;
    };
    "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor": {
        aminoType: string;
        toAmino: ({ sender, address, action }: import("../stargaze/claim/v1beta1/tx").MsgClaimFor) => {
            sender: string;
            address: string;
            action: number;
        };
        fromAmino: ({ sender, address, action }: {
            sender: string;
            address: string;
            action: number;
        }) => import("../stargaze/claim/v1beta1/tx").MsgClaimFor;
    };
    "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, amount, startTime, endTime, delayed }: import("../stargaze/alloc/v1beta1/tx").MsgCreateVestingAccount) => {
            from_address: string;
            to_address: string;
            amount: {
                denom: string;
                amount: string;
            }[];
            start_time: string;
            end_time: string;
            delayed: boolean;
        };
        fromAmino: ({ from_address, to_address, amount, start_time, end_time, delayed }: {
            from_address: string;
            to_address: string;
            amount: {
                denom: string;
                amount: string;
            }[];
            start_time: string;
            end_time: string;
            delayed: boolean;
        }) => import("../stargaze/alloc/v1beta1/tx").MsgCreateVestingAccount;
    };
};
export declare const publicawesomeProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningPublicawesomeClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningPublicawesomeClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
