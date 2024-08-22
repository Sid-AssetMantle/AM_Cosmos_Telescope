import * as _457 from "./alloc/v1beta1/genesis";
import * as _458 from "./alloc/v1beta1/params";
import * as _459 from "./alloc/v1beta1/query";
import * as _460 from "./alloc/v1beta1/tx";
import * as _907 from "./alloc/v1beta1/query.lcd";
import * as _908 from "./alloc/v1beta1/query.rpc.Query";
import * as _1058 from "./lcd";
import * as _1059 from "./rpc.query";
import * as _1060 from "./rpc.tx";
export namespace omniflix {
  export namespace alloc {
    export const v1beta1 = {
      ..._457,
      ..._458,
      ..._459,
      ..._460,
      ..._907,
      ..._908
    };
  }
  export const ClientFactory = {
    ..._1058,
    ..._1059,
    ..._1060
  };
}