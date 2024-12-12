import * as _48 from "./wasm/v1/authz";
import * as _49 from "./wasm/v1/genesis";
import * as _50 from "./wasm/v1/ibc";
import * as _51 from "./wasm/v1/proposal";
import * as _52 from "./wasm/v1/query";
import * as _53 from "./wasm/v1/tx";
import * as _54 from "./wasm/v1/types";
import * as _181 from "./wasm/v1/tx.amino";
import * as _182 from "./wasm/v1/tx.registry";
import * as _183 from "./wasm/v1/query.lcd";
import * as _184 from "./wasm/v1/query.rpc.Query";
import * as _185 from "./wasm/v1/tx.rpc.msg";
import * as _257 from "./lcd";
import * as _258 from "./rpc.query";
import * as _259 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._181,
      ..._182,
      ..._183,
      ..._184,
      ..._185
    };
  }
  export const ClientFactory = {
    ..._257,
    ..._258,
    ..._259
  };
}