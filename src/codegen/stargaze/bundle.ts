import * as _578 from "./mint/v1beta1/genesis";
import * as _579 from "./mint/v1beta1/mint";
import * as _580 from "./mint/v1beta1/query";
import * as _1023 from "./mint/v1beta1/query.lcd";
import * as _1024 from "./mint/v1beta1/query.rpc.Query";
import * as _1075 from "./lcd";
import * as _1076 from "./rpc.query";
export namespace stargaze {
  export namespace mint {
    export const v1beta1 = {
      ..._578,
      ..._579,
      ..._580,
      ..._1023,
      ..._1024
    };
  }
  export const ClientFactory = {
    ..._1075,
    ..._1076
  };
}