import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateVestingAccount } from "./tx";
export interface MsgCreateVestingAccountAminoType extends AminoMsg {
    type: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount";
    value: {
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
}
export declare const AminoConverter: {
    "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, amount, startTime, endTime, delayed }: MsgCreateVestingAccount) => MsgCreateVestingAccountAminoType["value"];
        fromAmino: ({ from_address, to_address, amount, start_time, end_time, delayed }: MsgCreateVestingAccountAminoType["value"]) => MsgCreateVestingAccount;
    };
};
