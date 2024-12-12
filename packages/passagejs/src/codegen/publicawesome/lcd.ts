import { LCDClient } from "@cosmology/lcd";
export const createLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => {
  const requestClient = new LCDClient({
    restEndpoint
  });
  return {
    cosmos: {
      authz: {
        v1beta1: new (await import("../cosmos/authz/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      bank: {
        v1beta1: new (await import("../cosmos/bank/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      base: {
        node: {
          v1beta1: new (await import("../cosmos/base/node/v1beta1/query.lcd")).LCDQueryClient({
            requestClient
          })
        }
      },
      distribution: {
        v1beta1: new (await import("../cosmos/distribution/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      gov: {
        v1: new (await import("../cosmos/gov/v1/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v1beta1: new (await import("../cosmos/gov/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      tx: {
        v1beta1: new (await import("../cosmos/tx/v1beta1/service.lcd")).LCDQueryClient({
          requestClient
        })
      },
      upgrade: {
        v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    },
    publicawesome: {
      stargaze: {
        alloc: {
          v1beta1: new (await import("../stargaze/alloc/v1beta1/query.lcd")).LCDQueryClient({
            requestClient
          })
        },
        cron: {
          v1: new (await import("../stargaze/cron/v1/query.lcd")).LCDQueryClient({
            requestClient
          })
        },
        globalfee: {
          v1: new (await import("../stargaze/globalfee/v1/query.lcd")).LCDQueryClient({
            requestClient
          })
        },
        mint: {
          v1beta1: new (await import("./stargaze/mint/v1beta1/query.lcd")).LCDQueryClient({
            requestClient
          })
        },
        claim: {
          v1beta1: new (await import("../stargaze/claim/v1beta1/query.lcd")).LCDQueryClient({
            requestClient
          })
        }
      }
    }
  };
};