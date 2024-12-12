import * as _98 from "./stargaze/alloc/v1beta1/genesis";
import * as _99 from "./stargaze/alloc/v1beta1/params";
import * as _100 from "./stargaze/alloc/v1beta1/query";
import * as _101 from "./stargaze/alloc/v1beta1/tx";
import * as _102 from "../stargaze/alloc/v1beta1/genesis";
import * as _103 from "../stargaze/alloc/v1beta1/params";
import * as _104 from "../stargaze/alloc/v1beta1/query";
import * as _105 from "../stargaze/alloc/v1beta1/tx";
import * as _106 from "./stargaze/cron/v1/cron";
import * as _107 from "./stargaze/cron/v1/genesis";
import * as _108 from "./stargaze/cron/v1/proposal";
import * as _109 from "./stargaze/cron/v1/query";
import * as _110 from "./stargaze/cron/v1/tx";
import * as _111 from "../stargaze/cron/v1/genesis";
import * as _112 from "../stargaze/cron/v1/proposal";
import * as _113 from "../stargaze/cron/v1/query";
import * as _114 from "./stargaze/globalfee/v1/genesis";
import * as _115 from "./stargaze/globalfee/v1/globalfee";
import * as _116 from "./stargaze/globalfee/v1/proposal";
import * as _117 from "./stargaze/globalfee/v1/query";
import * as _118 from "./stargaze/globalfee/v1/tx";
import * as _119 from "../stargaze/globalfee/v1/genesis";
import * as _120 from "../stargaze/globalfee/v1/globalfee";
import * as _121 from "../stargaze/globalfee/v1/proposal";
import * as _122 from "../stargaze/globalfee/v1/query";
import * as _123 from "../stargaze/globalfee/v1/tx";
import * as _124 from "./stargaze/mint/v1beta1/genesis";
import * as _125 from "./stargaze/mint/v1beta1/mint";
import * as _126 from "./stargaze/mint/v1beta1/query";
import * as _127 from "./stargaze/mint/v1beta1/tx";
import * as _128 from "../stargaze/claim/v1beta1/claim_record";
import * as _129 from "../stargaze/claim/v1beta1/genesis";
import * as _130 from "../stargaze/claim/v1beta1/params";
import * as _131 from "../stargaze/claim/v1beta1/query";
import * as _132 from "../stargaze/claim/v1beta1/tx";
import * as _218 from "./stargaze/alloc/v1beta1/tx.amino";
import * as _219 from "./stargaze/cron/v1/tx.amino";
import * as _220 from "./stargaze/globalfee/v1/tx.amino";
import * as _221 from "../stargaze/alloc/v1beta1/tx.amino";
import * as _222 from "../stargaze/claim/v1beta1/tx.amino";
import * as _223 from "../stargaze/globalfee/v1/tx.amino";
import * as _224 from "./stargaze/alloc/v1beta1/tx.registry";
import * as _225 from "./stargaze/cron/v1/tx.registry";
import * as _226 from "./stargaze/globalfee/v1/tx.registry";
import * as _227 from "../stargaze/alloc/v1beta1/tx.registry";
import * as _228 from "../stargaze/claim/v1beta1/tx.registry";
import * as _229 from "../stargaze/globalfee/v1/tx.registry";
import * as _230 from "./stargaze/alloc/v1beta1/query.lcd";
import * as _231 from "./stargaze/cron/v1/query.lcd";
import * as _232 from "./stargaze/globalfee/v1/query.lcd";
import * as _233 from "./stargaze/mint/v1beta1/query.lcd";
import * as _234 from "../stargaze/alloc/v1beta1/query.lcd";
import * as _235 from "../stargaze/claim/v1beta1/query.lcd";
import * as _236 from "../stargaze/cron/v1/query.lcd";
import * as _237 from "../stargaze/globalfee/v1/query.lcd";
import * as _238 from "./stargaze/alloc/v1beta1/query.rpc.Query";
import * as _239 from "./stargaze/cron/v1/query.rpc.Query";
import * as _240 from "./stargaze/globalfee/v1/query.rpc.Query";
import * as _241 from "./stargaze/mint/v1beta1/query.rpc.Query";
import * as _242 from "../stargaze/alloc/v1beta1/query.rpc.Query";
import * as _243 from "../stargaze/claim/v1beta1/query.rpc.Query";
import * as _244 from "../stargaze/cron/v1/query.rpc.Query";
import * as _245 from "../stargaze/globalfee/v1/query.rpc.Query";
import * as _246 from "./stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _247 from "./stargaze/cron/v1/tx.rpc.msg";
import * as _248 from "./stargaze/globalfee/v1/tx.rpc.msg";
import * as _249 from "../stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _250 from "../stargaze/claim/v1beta1/tx.rpc.msg";
import * as _251 from "../stargaze/globalfee/v1/tx.rpc.msg";
import * as _263 from "./lcd";
import * as _264 from "./rpc.query";
import * as _265 from "./rpc.tx";
export namespace publicawesome {
  export namespace stargaze {
    export namespace alloc {
      export const v1beta1 = {
        ..._98,
        ..._99,
        ..._100,
        ..._101,
        ..._102,
        ..._103,
        ..._104,
        ..._105,
        ..._218,
        ..._221,
        ..._224,
        ..._227,
        ..._230,
        ..._234,
        ..._238,
        ..._242,
        ..._246,
        ..._249
      };
    }
    export namespace cron {
      export const v1 = {
        ..._106,
        ..._107,
        ..._108,
        ..._109,
        ..._110,
        ..._111,
        ..._112,
        ..._113,
        ..._219,
        ..._225,
        ..._231,
        ..._236,
        ..._239,
        ..._244,
        ..._247
      };
    }
    export namespace globalfee {
      export const v1 = {
        ..._114,
        ..._115,
        ..._116,
        ..._117,
        ..._118,
        ..._119,
        ..._120,
        ..._121,
        ..._122,
        ..._123,
        ..._220,
        ..._223,
        ..._226,
        ..._229,
        ..._232,
        ..._237,
        ..._240,
        ..._245,
        ..._248,
        ..._251
      };
    }
    export namespace mint {
      export const v1beta1 = {
        ..._124,
        ..._125,
        ..._126,
        ..._127,
        ..._233,
        ..._241
      };
    }
    export namespace claim {
      export const v1beta1 = {
        ..._128,
        ..._129,
        ..._130,
        ..._131,
        ..._132,
        ..._222,
        ..._228,
        ..._235,
        ..._243,
        ..._250
      };
    }
  }
  export const ClientFactory = {
    ..._263,
    ..._264,
    ..._265
  };
}