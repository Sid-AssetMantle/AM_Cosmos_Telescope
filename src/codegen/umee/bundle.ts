import * as _592 from "./leverage/v1/events";
import * as _593 from "./leverage/v1/genesis";
import * as _594 from "./leverage/v1/gov";
import * as _595 from "./leverage/v1/leverage";
import * as _596 from "./leverage/v1/query";
import * as _597 from "./leverage/v1/tx";
import * as _598 from "./oracle/v1/events";
import * as _599 from "./oracle/v1/genesis";
import * as _600 from "./oracle/v1/oracle";
import * as _601 from "./oracle/v1/query";
import * as _602 from "./oracle/v1/tx";
import * as _1025 from "./leverage/v1/tx.amino";
import * as _1026 from "./oracle/v1/tx.amino";
import * as _1027 from "./leverage/v1/tx.registry";
import * as _1028 from "./oracle/v1/tx.registry";
import * as _1029 from "./leverage/v1/query.lcd";
import * as _1030 from "./oracle/v1/query.lcd";
import * as _1031 from "./leverage/v1/query.rpc.Query";
import * as _1032 from "./oracle/v1/query.rpc.Query";
import * as _1033 from "./leverage/v1/tx.rpc.msg";
import * as _1034 from "./oracle/v1/tx.rpc.msg";
import * as _1077 from "./lcd";
import * as _1078 from "./rpc.query";
import * as _1079 from "./rpc.tx";
export namespace umee {
  export namespace leverage {
    export const v1 = {
      ..._592,
      ..._593,
      ..._594,
      ..._595,
      ..._596,
      ..._597,
      ..._1025,
      ..._1027,
      ..._1029,
      ..._1031,
      ..._1033
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._598,
      ..._599,
      ..._600,
      ..._601,
      ..._602,
      ..._1026,
      ..._1028,
      ..._1030,
      ..._1032,
      ..._1034
    };
  }
  export const ClientFactory = {
    ..._1077,
    ..._1078,
    ..._1079
  };
}