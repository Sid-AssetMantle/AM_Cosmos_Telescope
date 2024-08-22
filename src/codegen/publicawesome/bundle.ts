import * as _569 from "../stargaze/alloc/v1beta1/genesis";
import * as _570 from "../stargaze/alloc/v1beta1/params";
import * as _571 from "../stargaze/alloc/v1beta1/query";
import * as _572 from "../stargaze/alloc/v1beta1/tx";
import * as _573 from "../stargaze/claim/v1beta1/claim_record";
import * as _574 from "../stargaze/claim/v1beta1/genesis";
import * as _575 from "../stargaze/claim/v1beta1/params";
import * as _576 from "../stargaze/claim/v1beta1/query";
import * as _577 from "../stargaze/claim/v1beta1/tx";
import * as _1013 from "../stargaze/alloc/v1beta1/tx.amino";
import * as _1014 from "../stargaze/claim/v1beta1/tx.amino";
import * as _1015 from "../stargaze/alloc/v1beta1/tx.registry";
import * as _1016 from "../stargaze/claim/v1beta1/tx.registry";
import * as _1017 from "../stargaze/alloc/v1beta1/query.lcd";
import * as _1018 from "../stargaze/claim/v1beta1/query.lcd";
import * as _1019 from "../stargaze/alloc/v1beta1/query.rpc.Query";
import * as _1020 from "../stargaze/claim/v1beta1/query.rpc.Query";
import * as _1021 from "../stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _1022 from "../stargaze/claim/v1beta1/tx.rpc.msg";
import * as _1072 from "./lcd";
import * as _1073 from "./rpc.query";
import * as _1074 from "./rpc.tx";
export namespace publicawesome {
  export namespace stargaze {
    export namespace alloc {
      export const v1beta1 = {
        ..._569,
        ..._570,
        ..._571,
        ..._572,
        ..._1013,
        ..._1015,
        ..._1017,
        ..._1019,
        ..._1021
      };
    }
    export namespace claim {
      export const v1beta1 = {
        ..._573,
        ..._574,
        ..._575,
        ..._576,
        ..._577,
        ..._1014,
        ..._1016,
        ..._1018,
        ..._1020,
        ..._1022
      };
    }
  }
  export const ClientFactory = {
    ..._1072,
    ..._1073,
    ..._1074
  };
}