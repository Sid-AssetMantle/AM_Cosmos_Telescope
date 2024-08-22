import * as _525 from "./claim/v1beta1/claim_record";
import * as _526 from "./claim/v1beta1/genesis";
import * as _527 from "./claim/v1beta1/params";
import * as _528 from "./claim/v1beta1/query";
import * as _529 from "./claim/v1beta1/tx";
import * as _971 from "./claim/v1beta1/tx.amino";
import * as _972 from "./claim/v1beta1/tx.registry";
import * as _973 from "./claim/v1beta1/query.lcd";
import * as _974 from "./claim/v1beta1/query.rpc.Query";
import * as _975 from "./claim/v1beta1/tx.rpc.msg";
import * as _1064 from "./lcd";
import * as _1065 from "./rpc.query";
import * as _1066 from "./rpc.tx";
export namespace passage3d {
  export namespace claim {
    export const v1beta1 = {
      ..._525,
      ..._526,
      ..._527,
      ..._528,
      ..._529,
      ..._971,
      ..._972,
      ..._973,
      ..._974,
      ..._975
    };
  }
  export const ClientFactory = {
    ..._1064,
    ..._1065,
    ..._1066
  };
}