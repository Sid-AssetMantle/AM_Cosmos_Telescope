import * as _373 from "./wasm/v1/authz";
import * as _374 from "./wasm/v1/genesis";
import * as _375 from "./wasm/v1/ibc";
import * as _376 from "./wasm/v1/proposal";
import * as _377 from "./wasm/v1/query";
import * as _378 from "./wasm/v1/tx";
import * as _379 from "./wasm/v1/types";
import * as _847 from "./wasm/v1/tx.amino";
import * as _848 from "./wasm/v1/tx.registry";
import * as _849 from "./wasm/v1/query.lcd";
import * as _850 from "./wasm/v1/query.rpc.Query";
import * as _851 from "./wasm/v1/tx.rpc.msg";
import * as _1047 from "./lcd";
import * as _1048 from "./rpc.query";
import * as _1049 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._373,
      ..._374,
      ..._375,
      ..._376,
      ..._377,
      ..._378,
      ..._379,
      ..._847,
      ..._848,
      ..._849,
      ..._850,
      ..._851
    };
  }
  export const ClientFactory = {
    ..._1047,
    ..._1048,
    ..._1049
  };
}