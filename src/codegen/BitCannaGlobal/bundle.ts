import * as _254 from "../bcna/bitcannaid";
import * as _255 from "../bcna/genesis";
import * as _256 from "../bcna/params";
import * as _257 from "../bcna/query";
import * as _258 from "../bcna/supplychain";
import * as _259 from "../bcna/tx";
import * as _765 from "../bcna/tx.amino";
import * as _766 from "../bcna/tx.registry";
import * as _767 from "../bcna/query.lcd";
import * as _768 from "../bcna/query.rpc.Query";
import * as _769 from "../bcna/tx.rpc.msg";
import * as _1041 from "./lcd";
import * as _1042 from "./rpc.query";
import * as _1043 from "./rpc.tx";
export namespace BitCannaGlobal {
  export namespace bcna {
    export const bcna = {
      ..._254,
      ..._255,
      ..._256,
      ..._257,
      ..._258,
      ..._259,
      ..._765,
      ..._766,
      ..._767,
      ..._768,
      ..._769
    };
  }
  export const ClientFactory = {
    ..._1041,
    ..._1042,
    ..._1043
  };
}