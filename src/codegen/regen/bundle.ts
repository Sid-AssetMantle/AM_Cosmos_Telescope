import * as _533 from "./data/v1/events";
import * as _534 from "./data/v1/query";
import * as _535 from "./data/v1/state";
import * as _536 from "./data/v1/tx";
import * as _537 from "./data/v1/types";
import * as _538 from "./data/v1alpha2/events";
import * as _539 from "./data/v1alpha2/genesis";
import * as _540 from "./data/v1alpha2/query";
import * as _541 from "./data/v1alpha2/tx";
import * as _542 from "./data/v1alpha2/types";
import * as _543 from "./ecocredit/basket/v1/events";
import * as _544 from "./ecocredit/basket/v1/query";
import * as _545 from "./ecocredit/basket/v1/state";
import * as _546 from "./ecocredit/basket/v1/tx";
import * as _547 from "./ecocredit/basket/v1/types";
import * as _548 from "./ecocredit/marketplace/v1/events";
import * as _549 from "./ecocredit/marketplace/v1/query";
import * as _550 from "./ecocredit/marketplace/v1/state";
import * as _551 from "./ecocredit/marketplace/v1/tx";
import * as _552 from "./ecocredit/marketplace/v1/types";
import * as _553 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _554 from "./ecocredit/v1/events";
import * as _555 from "./ecocredit/v1/query";
import * as _556 from "./ecocredit/v1/state";
import * as _557 from "./ecocredit/v1/tx";
import * as _558 from "./ecocredit/v1/types";
import * as _559 from "./ecocredit/v1alpha1/events";
import * as _560 from "./ecocredit/v1alpha1/genesis";
import * as _561 from "./ecocredit/v1alpha1/query";
import * as _562 from "./ecocredit/v1alpha1/tx";
import * as _563 from "./ecocredit/v1alpha1/types";
import * as _564 from "./group/v1alpha1/events";
import * as _565 from "./group/v1alpha1/genesis";
import * as _566 from "./group/v1alpha1/query";
import * as _567 from "./group/v1alpha1/tx";
import * as _568 from "./group/v1alpha1/types";
import * as _978 from "./data/v1/tx.amino";
import * as _979 from "./data/v1alpha2/tx.amino";
import * as _980 from "./ecocredit/basket/v1/tx.amino";
import * as _981 from "./ecocredit/marketplace/v1/tx.amino";
import * as _982 from "./ecocredit/v1/tx.amino";
import * as _983 from "./ecocredit/v1alpha1/tx.amino";
import * as _984 from "./group/v1alpha1/tx.amino";
import * as _985 from "./data/v1/tx.registry";
import * as _986 from "./data/v1alpha2/tx.registry";
import * as _987 from "./ecocredit/basket/v1/tx.registry";
import * as _988 from "./ecocredit/marketplace/v1/tx.registry";
import * as _989 from "./ecocredit/v1/tx.registry";
import * as _990 from "./ecocredit/v1alpha1/tx.registry";
import * as _991 from "./group/v1alpha1/tx.registry";
import * as _992 from "./data/v1/query.lcd";
import * as _993 from "./data/v1alpha2/query.lcd";
import * as _994 from "./ecocredit/basket/v1/query.lcd";
import * as _995 from "./ecocredit/marketplace/v1/query.lcd";
import * as _996 from "./ecocredit/v1/query.lcd";
import * as _997 from "./ecocredit/v1alpha1/query.lcd";
import * as _998 from "./group/v1alpha1/query.lcd";
import * as _999 from "./data/v1/query.rpc.Query";
import * as _1000 from "./data/v1alpha2/query.rpc.Query";
import * as _1001 from "./ecocredit/basket/v1/query.rpc.Query";
import * as _1002 from "./ecocredit/marketplace/v1/query.rpc.Query";
import * as _1003 from "./ecocredit/v1/query.rpc.Query";
import * as _1004 from "./ecocredit/v1alpha1/query.rpc.Query";
import * as _1005 from "./group/v1alpha1/query.rpc.Query";
import * as _1006 from "./data/v1/tx.rpc.msg";
import * as _1007 from "./data/v1alpha2/tx.rpc.msg";
import * as _1008 from "./ecocredit/basket/v1/tx.rpc.msg";
import * as _1009 from "./ecocredit/marketplace/v1/tx.rpc.msg";
import * as _1010 from "./ecocredit/v1/tx.rpc.msg";
import * as _1011 from "./ecocredit/v1alpha1/tx.rpc.msg";
import * as _1012 from "./group/v1alpha1/tx.rpc.msg";
import * as _1069 from "./lcd";
import * as _1070 from "./rpc.query";
import * as _1071 from "./rpc.tx";
export namespace regen {
  export namespace data {
    export const v1 = {
      ..._533,
      ..._534,
      ..._535,
      ..._536,
      ..._537,
      ..._978,
      ..._985,
      ..._992,
      ..._999,
      ..._1006
    };
    export const v1alpha2 = {
      ..._538,
      ..._539,
      ..._540,
      ..._541,
      ..._542,
      ..._979,
      ..._986,
      ..._993,
      ..._1000,
      ..._1007
    };
  }
  export namespace ecocredit {
    export namespace basket {
      export const v1 = {
        ..._543,
        ..._544,
        ..._545,
        ..._546,
        ..._547,
        ..._980,
        ..._987,
        ..._994,
        ..._1001,
        ..._1008
      };
    }
    export namespace marketplace {
      export const v1 = {
        ..._548,
        ..._549,
        ..._550,
        ..._551,
        ..._552,
        ..._981,
        ..._988,
        ..._995,
        ..._1002,
        ..._1009
      };
    }
    export namespace orderbook {
      export const v1alpha1 = {
        ..._553
      };
    }
    export const v1 = {
      ..._554,
      ..._555,
      ..._556,
      ..._557,
      ..._558,
      ..._982,
      ..._989,
      ..._996,
      ..._1003,
      ..._1010
    };
    export const v1alpha1 = {
      ..._559,
      ..._560,
      ..._561,
      ..._562,
      ..._563,
      ..._983,
      ..._990,
      ..._997,
      ..._1004,
      ..._1011
    };
  }
  export namespace group {
    export const v1alpha1 = {
      ..._564,
      ..._565,
      ..._566,
      ..._567,
      ..._568,
      ..._984,
      ..._991,
      ..._998,
      ..._1005,
      ..._1012
    };
  }
  export const ClientFactory = {
    ..._1069,
    ..._1070,
    ..._1071
  };
}