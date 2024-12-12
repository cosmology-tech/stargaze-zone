import * as _60 from "./applications/fee/v1/ack";
import * as _61 from "./applications/fee/v1/fee";
import * as _62 from "./applications/fee/v1/genesis";
import * as _63 from "./applications/fee/v1/metadata";
import * as _64 from "./applications/fee/v1/query";
import * as _65 from "./applications/fee/v1/tx";
import * as _66 from "./applications/interchain_accounts/controller/v1/controller";
import * as _67 from "./applications/interchain_accounts/controller/v1/query";
import * as _68 from "./applications/interchain_accounts/controller/v1/tx";
import * as _69 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _70 from "./applications/interchain_accounts/host/v1/host";
import * as _71 from "./applications/interchain_accounts/host/v1/query";
import * as _72 from "./applications/interchain_accounts/v1/account";
import * as _73 from "./applications/interchain_accounts/v1/metadata";
import * as _74 from "./applications/interchain_accounts/v1/packet";
import * as _75 from "./applications/transfer/v1/authz";
import * as _76 from "./applications/transfer/v1/genesis";
import * as _77 from "./applications/transfer/v1/query";
import * as _78 from "./applications/transfer/v1/transfer";
import * as _79 from "./applications/transfer/v1/tx";
import * as _80 from "./applications/transfer/v2/packet";
import * as _81 from "./core/channel/v1/channel";
import * as _82 from "./core/channel/v1/genesis";
import * as _83 from "./core/channel/v1/query";
import * as _84 from "./core/channel/v1/tx";
import * as _85 from "./core/client/v1/client";
import * as _86 from "./core/client/v1/genesis";
import * as _87 from "./core/client/v1/query";
import * as _88 from "./core/client/v1/tx";
import * as _89 from "./core/commitment/v1/commitment";
import * as _90 from "./core/connection/v1/connection";
import * as _91 from "./core/connection/v1/genesis";
import * as _92 from "./core/connection/v1/query";
import * as _93 from "./core/connection/v1/tx";
import * as _94 from "./lightclients/localhost/v2/localhost";
import * as _95 from "./lightclients/solomachine/v2/solomachine";
import * as _96 from "./lightclients/solomachine/v3/solomachine";
import * as _97 from "./lightclients/tendermint/v1/tendermint";
import * as _186 from "./applications/fee/v1/tx.amino";
import * as _187 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _188 from "./applications/transfer/v1/tx.amino";
import * as _189 from "./core/channel/v1/tx.amino";
import * as _190 from "./core/client/v1/tx.amino";
import * as _191 from "./core/connection/v1/tx.amino";
import * as _192 from "./applications/fee/v1/tx.registry";
import * as _193 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _194 from "./applications/transfer/v1/tx.registry";
import * as _195 from "./core/channel/v1/tx.registry";
import * as _196 from "./core/client/v1/tx.registry";
import * as _197 from "./core/connection/v1/tx.registry";
import * as _198 from "./applications/fee/v1/query.lcd";
import * as _199 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _200 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _201 from "./applications/transfer/v1/query.lcd";
import * as _202 from "./core/channel/v1/query.lcd";
import * as _203 from "./core/client/v1/query.lcd";
import * as _204 from "./core/connection/v1/query.lcd";
import * as _205 from "./applications/fee/v1/query.rpc.Query";
import * as _206 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _207 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _208 from "./applications/transfer/v1/query.rpc.Query";
import * as _209 from "./core/channel/v1/query.rpc.Query";
import * as _210 from "./core/client/v1/query.rpc.Query";
import * as _211 from "./core/connection/v1/query.rpc.Query";
import * as _212 from "./applications/fee/v1/tx.rpc.msg";
import * as _213 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _214 from "./applications/transfer/v1/tx.rpc.msg";
import * as _215 from "./core/channel/v1/tx.rpc.msg";
import * as _216 from "./core/client/v1/tx.rpc.msg";
import * as _217 from "./core/connection/v1/tx.rpc.msg";
import * as _260 from "./lcd";
import * as _261 from "./rpc.query";
import * as _262 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._60,
        ..._61,
        ..._62,
        ..._63,
        ..._64,
        ..._65,
        ..._186,
        ..._192,
        ..._198,
        ..._205,
        ..._212
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._66,
          ..._67,
          ..._68,
          ..._187,
          ..._193,
          ..._199,
          ..._206,
          ..._213
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._69
        };
      }
      export namespace host {
        export const v1 = {
          ..._70,
          ..._71,
          ..._200,
          ..._207
        };
      }
      export const v1 = {
        ..._72,
        ..._73,
        ..._74
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._75,
        ..._76,
        ..._77,
        ..._78,
        ..._79,
        ..._188,
        ..._194,
        ..._201,
        ..._208,
        ..._214
      };
      export const v2 = {
        ..._80
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._81,
        ..._82,
        ..._83,
        ..._84,
        ..._189,
        ..._195,
        ..._202,
        ..._209,
        ..._215
      };
    }
    export namespace client {
      export const v1 = {
        ..._85,
        ..._86,
        ..._87,
        ..._88,
        ..._190,
        ..._196,
        ..._203,
        ..._210,
        ..._216
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._89
      };
    }
    export namespace connection {
      export const v1 = {
        ..._90,
        ..._91,
        ..._92,
        ..._93,
        ..._191,
        ..._197,
        ..._204,
        ..._211,
        ..._217
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._94
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._95
      };
      export const v3 = {
        ..._96
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._97
      };
    }
  }
  export const ClientFactory = {
    ..._260,
    ..._261,
    ..._262
  };
}