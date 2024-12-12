import { connectComet, HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await connectComet(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    cosmos: {
      authz: {
        v1beta1: (await import("../cosmos/authz/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      base: {
        node: {
          v1beta1: (await import("../cosmos/base/node/v1beta1/query.rpc.Service")).createRpcQueryExtension(client)
        }
      },
      distribution: {
        v1beta1: (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      gov: {
        v1: (await import("../cosmos/gov/v1/query.rpc.Query")).createRpcQueryExtension(client),
        v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      tx: {
        v1beta1: (await import("../cosmos/tx/v1beta1/service.rpc.Service")).createRpcQueryExtension(client)
      },
      upgrade: {
        v1beta1: (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    },
    publicawesome: {
      stargaze: {
        alloc: {
          v1beta1: (await import("../stargaze/alloc/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
        },
        cron: {
          v1: (await import("../stargaze/cron/v1/query.rpc.Query")).createRpcQueryExtension(client)
        },
        globalfee: {
          v1: (await import("../stargaze/globalfee/v1/query.rpc.Query")).createRpcQueryExtension(client)
        },
        mint: {
          v1beta1: (await import("./stargaze/mint/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
        },
        claim: {
          v1beta1: (await import("../stargaze/claim/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
        }
      }
    }
  };
};