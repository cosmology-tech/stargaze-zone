import * as _2 from "./authz/module/v1/module";
import * as _3 from "./authz/v1beta1/authz";
import * as _4 from "./authz/v1beta1/event";
import * as _5 from "./authz/v1beta1/genesis";
import * as _6 from "./authz/v1beta1/query";
import * as _7 from "./authz/v1beta1/tx";
import * as _8 from "./bank/module/v1/module";
import * as _9 from "./bank/v1beta1/authz";
import * as _10 from "./bank/v1beta1/bank";
import * as _11 from "./bank/v1beta1/genesis";
import * as _12 from "./bank/v1beta1/query";
import * as _13 from "./bank/v1beta1/tx";
import * as _14 from "./base/abci/v1beta1/abci";
import * as _15 from "./base/node/v1beta1/query";
import * as _16 from "./base/query/v1beta1/pagination";
import * as _17 from "./base/reflection/v2alpha1/reflection";
import * as _18 from "./base/v1beta1/coin";
import * as _19 from "./crypto/ed25519/keys";
import * as _20 from "./crypto/hd/v1/hd";
import * as _21 from "./crypto/keyring/v1/record";
import * as _22 from "./crypto/multisig/keys";
import * as _23 from "./crypto/secp256k1/keys";
import * as _24 from "./crypto/secp256r1/keys";
import * as _25 from "./distribution/module/v1/module";
import * as _26 from "./distribution/v1beta1/distribution";
import * as _27 from "./distribution/v1beta1/genesis";
import * as _28 from "./distribution/v1beta1/query";
import * as _29 from "./distribution/v1beta1/tx";
import * as _30 from "./gov/module/v1/module";
import * as _31 from "./gov/v1/genesis";
import * as _32 from "./gov/v1/gov";
import * as _33 from "./gov/v1/query";
import * as _34 from "./gov/v1/tx";
import * as _35 from "./gov/v1beta1/genesis";
import * as _36 from "./gov/v1beta1/gov";
import * as _37 from "./gov/v1beta1/query";
import * as _38 from "./gov/v1beta1/tx";
import * as _39 from "./ics23/v1/proofs";
import * as _40 from "./tx/config/v1/config";
import * as _41 from "./tx/signing/v1beta1/signing";
import * as _42 from "./tx/v1beta1/service";
import * as _43 from "./tx/v1beta1/tx";
import * as _44 from "./upgrade/module/v1/module";
import * as _45 from "./upgrade/v1beta1/query";
import * as _46 from "./upgrade/v1beta1/tx";
import * as _47 from "./upgrade/v1beta1/upgrade";
import * as _147 from "./authz/v1beta1/tx.amino";
import * as _148 from "./bank/v1beta1/tx.amino";
import * as _149 from "./distribution/v1beta1/tx.amino";
import * as _150 from "./gov/v1/tx.amino";
import * as _151 from "./gov/v1beta1/tx.amino";
import * as _152 from "./upgrade/v1beta1/tx.amino";
import * as _153 from "./authz/v1beta1/tx.registry";
import * as _154 from "./bank/v1beta1/tx.registry";
import * as _155 from "./distribution/v1beta1/tx.registry";
import * as _156 from "./gov/v1/tx.registry";
import * as _157 from "./gov/v1beta1/tx.registry";
import * as _158 from "./upgrade/v1beta1/tx.registry";
import * as _159 from "./authz/v1beta1/query.lcd";
import * as _160 from "./bank/v1beta1/query.lcd";
import * as _161 from "./base/node/v1beta1/query.lcd";
import * as _162 from "./distribution/v1beta1/query.lcd";
import * as _163 from "./gov/v1/query.lcd";
import * as _164 from "./gov/v1beta1/query.lcd";
import * as _165 from "./tx/v1beta1/service.lcd";
import * as _166 from "./upgrade/v1beta1/query.lcd";
import * as _167 from "./authz/v1beta1/query.rpc.Query";
import * as _168 from "./bank/v1beta1/query.rpc.Query";
import * as _169 from "./base/node/v1beta1/query.rpc.Service";
import * as _170 from "./distribution/v1beta1/query.rpc.Query";
import * as _171 from "./gov/v1/query.rpc.Query";
import * as _172 from "./gov/v1beta1/query.rpc.Query";
import * as _173 from "./tx/v1beta1/service.rpc.Service";
import * as _174 from "./upgrade/v1beta1/query.rpc.Query";
import * as _175 from "./authz/v1beta1/tx.rpc.msg";
import * as _176 from "./bank/v1beta1/tx.rpc.msg";
import * as _177 from "./distribution/v1beta1/tx.rpc.msg";
import * as _178 from "./gov/v1/tx.rpc.msg";
import * as _179 from "./gov/v1beta1/tx.rpc.msg";
import * as _180 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _254 from "./lcd";
import * as _255 from "./rpc.query";
import * as _256 from "./rpc.tx";
export namespace cosmos {
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._2
      };
    }
    export const v1beta1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._147,
      ..._153,
      ..._159,
      ..._167,
      ..._175
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._8
      };
    }
    export const v1beta1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._148,
      ..._154,
      ..._160,
      ..._168,
      ..._176
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._14
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._15,
        ..._161,
        ..._169
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._16
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._17
      };
    }
    export const v1beta1 = {
      ..._18
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._19
    };
    export namespace hd {
      export const v1 = {
        ..._20
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._21
      };
    }
    export const multisig = {
      ..._22
    };
    export const secp256k1 = {
      ..._23
    };
    export const secp256r1 = {
      ..._24
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._25
      };
    }
    export const v1beta1 = {
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._149,
      ..._155,
      ..._162,
      ..._170,
      ..._177
    };
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._30
      };
    }
    export const v1 = {
      ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._150,
      ..._156,
      ..._163,
      ..._171,
      ..._178
    };
    export const v1beta1 = {
      ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._151,
      ..._157,
      ..._164,
      ..._172,
      ..._179
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._39
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._40
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._41
      };
    }
    export const v1beta1 = {
      ..._42,
      ..._43,
      ..._165,
      ..._173
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._44
      };
    }
    export const v1beta1 = {
      ..._45,
      ..._46,
      ..._47,
      ..._152,
      ..._158,
      ..._166,
      ..._174,
      ..._180
    };
  }
  export const ClientFactory = {
    ..._254,
    ..._255,
    ..._256
  };
}