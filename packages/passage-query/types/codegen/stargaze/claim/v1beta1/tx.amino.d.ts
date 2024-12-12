import { AminoMsg } from "@cosmjs/amino";
import { MsgInitialClaim, MsgClaimFor } from "./tx";
export interface MsgInitialClaimAminoType extends AminoMsg {
    type: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim";
    value: {
        sender: string;
    };
}
export interface MsgClaimForAminoType extends AminoMsg {
    type: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor";
    value: {
        sender: string;
        address: string;
        action: number;
    };
}
export declare const AminoConverter: {
    "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim": {
        aminoType: string;
        toAmino: ({ sender }: MsgInitialClaim) => MsgInitialClaimAminoType["value"];
        fromAmino: ({ sender }: MsgInitialClaimAminoType["value"]) => MsgInitialClaim;
    };
    "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor": {
        aminoType: string;
        toAmino: ({ sender, address, action }: MsgClaimFor) => MsgClaimForAminoType["value"];
        fromAmino: ({ sender, address, action }: MsgClaimForAminoType["value"]) => MsgClaimFor;
    };
};
