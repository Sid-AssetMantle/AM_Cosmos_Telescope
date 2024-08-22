import * as _388 from "./applications/transfer/v1/genesis";
import * as _389 from "./applications/transfer/v1/query";
import * as _390 from "./applications/transfer/v1/transfer";
import * as _391 from "./applications/transfer/v1/tx";
import * as _392 from "./applications/transfer/v2/packet";
import * as _393 from "./core/channel/v1/channel";
import * as _394 from "./core/channel/v1/genesis";
import * as _395 from "./core/channel/v1/query";
import * as _396 from "./core/channel/v1/tx";
import * as _397 from "./core/client/v1/client";
import * as _398 from "./core/client/v1/genesis";
import * as _399 from "./core/client/v1/query";
import * as _400 from "./core/client/v1/tx";
import * as _401 from "./core/commitment/v1/commitment";
import * as _402 from "./core/connection/v1/connection";
import * as _403 from "./core/connection/v1/genesis";
import * as _404 from "./core/connection/v1/query";
import * as _405 from "./core/connection/v1/tx";
import * as _406 from "./core/port/v1/query";
import * as _407 from "./core/types/v1/genesis";
import * as _408 from "./lightclients/localhost/v1/localhost";
import * as _409 from "./lightclients/solomachine/v1/solomachine";
import * as _410 from "./lightclients/solomachine/v2/solomachine";
import * as _411 from "./lightclients/tendermint/v1/tendermint";
import * as _852 from "./applications/transfer/v1/tx.amino";
import * as _853 from "./core/channel/v1/tx.amino";
import * as _854 from "./core/client/v1/tx.amino";
import * as _855 from "./core/connection/v1/tx.amino";
import * as _856 from "./applications/transfer/v1/tx.registry";
import * as _857 from "./core/channel/v1/tx.registry";
import * as _858 from "./core/client/v1/tx.registry";
import * as _859 from "./core/connection/v1/tx.registry";
import * as _860 from "./applications/transfer/v1/query.lcd";
import * as _861 from "./core/channel/v1/query.lcd";
import * as _862 from "./core/client/v1/query.lcd";
import * as _863 from "./core/connection/v1/query.lcd";
import * as _864 from "./applications/transfer/v1/query.rpc.Query";
import * as _865 from "./core/channel/v1/query.rpc.Query";
import * as _866 from "./core/client/v1/query.rpc.Query";
import * as _867 from "./core/connection/v1/query.rpc.Query";
import * as _868 from "./core/port/v1/query.rpc.Query";
import * as _869 from "./applications/transfer/v1/tx.rpc.msg";
import * as _870 from "./core/channel/v1/tx.rpc.msg";
import * as _871 from "./core/client/v1/tx.rpc.msg";
import * as _872 from "./core/connection/v1/tx.rpc.msg";
import * as _1050 from "./lcd";
import * as _1051 from "./rpc.query";
import * as _1052 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._388,
        ..._389,
        ..._390,
        ..._391,
        ..._852,
        ..._856,
        ..._860,
        ..._864,
        ..._869
      };
      export const v2 = {
        ..._392
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._393,
        ..._394,
        ..._395,
        ..._396,
        ..._853,
        ..._857,
        ..._861,
        ..._865,
        ..._870
      };
    }
    export namespace client {
      export const v1 = {
        ..._397,
        ..._398,
        ..._399,
        ..._400,
        ..._854,
        ..._858,
        ..._862,
        ..._866,
        ..._871
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._401
      };
    }
    export namespace connection {
      export const v1 = {
        ..._402,
        ..._403,
        ..._404,
        ..._405,
        ..._855,
        ..._859,
        ..._863,
        ..._867,
        ..._872
      };
    }
    export namespace port {
      export const v1 = {
        ..._406,
        ..._868
      };
    }
    export namespace types {
      export const v1 = {
        ..._407
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._408
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._409
      };
      export const v2 = {
        ..._410
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._411
      };
    }
  }
  export const ClientFactory = {
    ..._1050,
    ..._1051,
    ..._1052
  };
}