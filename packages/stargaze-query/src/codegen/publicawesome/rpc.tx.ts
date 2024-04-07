import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    circuit: {
      v1: new (await import("../cosmos/circuit/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    consensus: {
      v1: new (await import("../cosmos/consensus/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/tx.rpc.msg")).MsgClientImpl(rpc),
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  },
  publicawesome: {
    stargaze: {
      alloc: {
        v1beta1: new (await import("../stargaze/alloc/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
      },
      cron: {
        v1: new (await import("./stargaze/cron/v1/tx.rpc.msg")).MsgClientImpl(rpc)
      },
      globalfee: {
        v1: new (await import("../stargaze/globalfee/v1/tx.rpc.msg")).MsgClientImpl(rpc)
      },
      claim: {
        v1beta1: new (await import("../stargaze/claim/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
      }
    }
  }
});