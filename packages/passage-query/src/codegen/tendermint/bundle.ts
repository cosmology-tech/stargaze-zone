import * as _136 from "./abci/types";
import * as _137 from "./crypto/keys";
import * as _138 from "./crypto/proof";
import * as _139 from "./libs/bits/types";
import * as _140 from "./p2p/types";
import * as _141 from "./types/block";
import * as _142 from "./types/evidence";
import * as _143 from "./types/params";
import * as _144 from "./types/types";
import * as _145 from "./types/validator";
import * as _146 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._136
  };
  export const crypto = {
    ..._137,
    ..._138
  };
  export namespace libs {
    export const bits = {
      ..._139
    };
  }
  export const p2p = {
    ..._140
  };
  export const types = {
    ..._141,
    ..._142,
    ..._143,
    ..._144,
    ..._145
  };
  export const version = {
    ..._146
  };
}