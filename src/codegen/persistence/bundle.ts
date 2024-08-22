import * as _530 from "./halving/v1beta1/genesis";
import * as _531 from "./halving/v1beta1/halving";
import * as _532 from "./halving/v1beta1/query";
import * as _976 from "./halving/v1beta1/query.lcd";
import * as _977 from "./halving/v1beta1/query.rpc.Query";
import * as _1067 from "./lcd";
import * as _1068 from "./rpc.query";
export namespace persistence {
  export namespace halving {
    export const v1beta1 = {
      ..._530,
      ..._531,
      ..._532,
      ..._976,
      ..._977
    };
  }
  export const ClientFactory = {
    ..._1067,
    ..._1068
  };
}