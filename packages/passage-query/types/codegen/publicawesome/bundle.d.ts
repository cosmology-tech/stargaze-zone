import * as _79 from "../stargaze/alloc/v1beta1/genesis";
import * as _80 from "../stargaze/alloc/v1beta1/params";
import * as _81 from "../stargaze/alloc/v1beta1/query";
import * as _82 from "../stargaze/alloc/v1beta1/tx";
import * as _83 from "../stargaze/claim/v1beta1/claim_record";
import * as _84 from "../stargaze/claim/v1beta1/genesis";
import * as _85 from "../stargaze/claim/v1beta1/params";
import * as _86 from "../stargaze/claim/v1beta1/query";
import * as _87 from "../stargaze/claim/v1beta1/tx";
import * as _168 from "../stargaze/alloc/v1beta1/query.lcd";
import * as _169 from "../stargaze/claim/v1beta1/query.lcd";
import * as _170 from "../stargaze/alloc/v1beta1/query.rpc.Query";
import * as _171 from "../stargaze/claim/v1beta1/query.rpc.Query";
import * as _172 from "../stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _173 from "../stargaze/claim/v1beta1/tx.rpc.msg";
export declare namespace publicawesome {
    namespace stargaze {
        namespace alloc {
            const v1beta1: {
                MsgClientImpl: typeof _172.MsgClientImpl;
                QueryClientImpl: typeof _170.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    params(request?: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                };
                LCDQueryClient: typeof _168.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createVestingAccount(value: _82.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createVestingAccount(value: _82.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: _82.MsgCreateVestingAccount;
                        };
                    };
                    fromPartial: {
                        createVestingAccount(value: _82.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: _82.MsgCreateVestingAccount;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount": {
                        aminoType: string;
                        toAmino: ({ fromAddress, toAddress, amount, startTime, endTime, delayed }: _82.MsgCreateVestingAccount) => {
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
                        }) => _82.MsgCreateVestingAccount;
                    };
                };
                MsgCreateVestingAccount: {
                    encode(message: _82.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgCreateVestingAccount;
                    fromPartial(object: any): _82.MsgCreateVestingAccount;
                };
                MsgCreateVestingAccountResponse: {
                    encode(_: _82.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgCreateVestingAccountResponse;
                    fromPartial(_: any): _82.MsgCreateVestingAccountResponse;
                };
                QueryParamsRequest: {
                    encode(_: _81.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryParamsRequest;
                    fromPartial(_: any): _81.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _81.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryParamsResponse;
                    fromPartial(object: any): _81.QueryParamsResponse;
                };
                WeightedAddress: {
                    encode(message: _80.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.WeightedAddress;
                    fromPartial(object: any): _80.WeightedAddress;
                };
                DistributionProportions: {
                    encode(message: _80.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.DistributionProportions;
                    fromPartial(object: any): _80.DistributionProportions;
                };
                Params: {
                    encode(message: _80.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Params;
                    fromPartial(object: any): _80.Params;
                };
                GenesisState: {
                    encode(message: _79.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GenesisState;
                    fromPartial(object: any): _79.GenesisState;
                };
            };
        }
        namespace claim {
            const v1beta1: {
                MsgClientImpl: typeof _173.MsgClientImpl;
                QueryClientImpl: typeof _171.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    moduleAccountBalance(request?: _86.QueryModuleAccountBalanceRequest): Promise<_86.QueryModuleAccountBalanceResponse>;
                    params(request?: _86.QueryParamsRequest): Promise<_86.QueryParamsResponse>;
                    claimRecord(request: _86.QueryClaimRecordRequest): Promise<_86.QueryClaimRecordResponse>;
                    claimableForAction(request: _86.QueryClaimableForActionRequest): Promise<_86.QueryClaimableForActionResponse>;
                    totalClaimable(request: _86.QueryTotalClaimableRequest): Promise<_86.QueryTotalClaimableResponse>;
                };
                LCDQueryClient: typeof _169.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        initialClaim(value: _87.MsgInitialClaim): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        claimFor(value: _87.MsgClaimFor): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        initialClaim(value: _87.MsgInitialClaim): {
                            typeUrl: string;
                            value: _87.MsgInitialClaim;
                        };
                        claimFor(value: _87.MsgClaimFor): {
                            typeUrl: string;
                            value: _87.MsgClaimFor;
                        };
                    };
                    fromPartial: {
                        initialClaim(value: _87.MsgInitialClaim): {
                            typeUrl: string;
                            value: _87.MsgInitialClaim;
                        };
                        claimFor(value: _87.MsgClaimFor): {
                            typeUrl: string;
                            value: _87.MsgClaimFor;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim": {
                        aminoType: string;
                        toAmino: ({ sender }: _87.MsgInitialClaim) => {
                            sender: string;
                        };
                        fromAmino: ({ sender }: {
                            sender: string;
                        }) => _87.MsgInitialClaim;
                    };
                    "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor": {
                        aminoType: string;
                        toAmino: ({ sender, address, action }: _87.MsgClaimFor) => {
                            sender: string;
                            address: string;
                            action: number;
                        };
                        fromAmino: ({ sender, address, action }: {
                            sender: string;
                            address: string;
                            action: number;
                        }) => _87.MsgClaimFor;
                    };
                };
                MsgInitialClaim: {
                    encode(message: _87.MsgInitialClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgInitialClaim;
                    fromPartial(object: any): _87.MsgInitialClaim;
                };
                MsgInitialClaimResponse: {
                    encode(message: _87.MsgInitialClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgInitialClaimResponse;
                    fromPartial(object: any): _87.MsgInitialClaimResponse;
                };
                MsgClaimFor: {
                    encode(message: _87.MsgClaimFor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgClaimFor;
                    fromPartial(object: any): _87.MsgClaimFor;
                };
                MsgClaimForResponse: {
                    encode(message: _87.MsgClaimForResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgClaimForResponse;
                    fromPartial(object: any): _87.MsgClaimForResponse;
                };
                QueryModuleAccountBalanceRequest: {
                    encode(_: _86.QueryModuleAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryModuleAccountBalanceRequest;
                    fromPartial(_: any): _86.QueryModuleAccountBalanceRequest;
                };
                QueryModuleAccountBalanceResponse: {
                    encode(message: _86.QueryModuleAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryModuleAccountBalanceResponse;
                    fromPartial(object: any): _86.QueryModuleAccountBalanceResponse;
                };
                QueryParamsRequest: {
                    encode(_: _86.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryParamsRequest;
                    fromPartial(_: any): _86.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _86.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryParamsResponse;
                    fromPartial(object: any): _86.QueryParamsResponse;
                };
                QueryClaimRecordRequest: {
                    encode(message: _86.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryClaimRecordRequest;
                    fromPartial(object: any): _86.QueryClaimRecordRequest;
                };
                QueryClaimRecordResponse: {
                    encode(message: _86.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryClaimRecordResponse;
                    fromPartial(object: any): _86.QueryClaimRecordResponse;
                };
                QueryClaimableForActionRequest: {
                    encode(message: _86.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryClaimableForActionRequest;
                    fromPartial(object: any): _86.QueryClaimableForActionRequest;
                };
                QueryClaimableForActionResponse: {
                    encode(message: _86.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryClaimableForActionResponse;
                    fromPartial(object: any): _86.QueryClaimableForActionResponse;
                };
                QueryTotalClaimableRequest: {
                    encode(message: _86.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryTotalClaimableRequest;
                    fromPartial(object: any): _86.QueryTotalClaimableRequest;
                };
                QueryTotalClaimableResponse: {
                    encode(message: _86.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryTotalClaimableResponse;
                    fromPartial(object: any): _86.QueryTotalClaimableResponse;
                };
                ClaimAuthorization: {
                    encode(message: _85.ClaimAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ClaimAuthorization;
                    fromPartial(object: any): _85.ClaimAuthorization;
                };
                Params: {
                    encode(message: _85.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Params;
                    fromPartial(object: any): _85.Params;
                };
                GenesisState: {
                    encode(message: _84.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.GenesisState;
                    fromPartial(object: any): _84.GenesisState;
                };
                actionFromJSON(object: any): _83.Action;
                actionToJSON(object: _83.Action): string;
                Action: typeof _83.Action;
                ActionSDKType: typeof _83.Action;
                ClaimRecord: {
                    encode(message: _83.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ClaimRecord;
                    fromPartial(object: any): _83.ClaimRecord;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            publicawesome: {
                stargaze: {
                    alloc: {
                        v1beta1: _172.MsgClientImpl;
                    };
                    claim: {
                        v1beta1: _173.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            publicawesome: {
                stargaze: {
                    alloc: {
                        v1beta1: {
                            params(request?: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                        };
                    };
                    claim: {
                        v1beta1: {
                            moduleAccountBalance(request?: _86.QueryModuleAccountBalanceRequest): Promise<_86.QueryModuleAccountBalanceResponse>;
                            params(request?: _86.QueryParamsRequest): Promise<_86.QueryParamsResponse>;
                            claimRecord(request: _86.QueryClaimRecordRequest): Promise<_86.QueryClaimRecordResponse>;
                            claimableForAction(request: _86.QueryClaimableForActionRequest): Promise<_86.QueryClaimableForActionResponse>;
                            totalClaimable(request: _86.QueryTotalClaimableRequest): Promise<_86.QueryTotalClaimableResponse>;
                        };
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            publicawesome: {
                stargaze: {
                    alloc: {
                        v1beta1: _168.LCDQueryClient;
                    };
                    claim: {
                        v1beta1: _169.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
