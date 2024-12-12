import * as _133 from "./mint/v1beta1/genesis";
import * as _134 from "./mint/v1beta1/mint";
import * as _135 from "./mint/v1beta1/query";
import * as _252 from "./mint/v1beta1/query.lcd";
import * as _253 from "./mint/v1beta1/query.rpc.Query";
import * as _266 from "./lcd";
import * as _267 from "./rpc.query";
export namespace stargaze {
  export namespace mint {
    export const v1beta1 = {
      ..._133,
      ..._134,
      ..._135,
      ..._252,
      ..._253
    };
  }
  export const ClientFactory = {
    ..._266,
    ..._267
  };
}