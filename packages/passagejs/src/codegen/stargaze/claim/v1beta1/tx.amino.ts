import { MsgInitialClaim, MsgClaimFor } from "./tx";
export const AminoConverter = {
  "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim": {
    aminoType: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim",
    toAmino: MsgInitialClaim.toAmino,
    fromAmino: MsgInitialClaim.fromAmino
  },
  "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor": {
    aminoType: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor",
    toAmino: MsgClaimFor.toAmino,
    fromAmino: MsgClaimFor.fromAmino
  }
};