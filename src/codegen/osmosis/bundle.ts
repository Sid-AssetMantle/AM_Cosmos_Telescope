import * as _461 from "./downtime-detector/v1beta1/downtime_duration";
import * as _462 from "./downtime-detector/v1beta1/genesis";
import * as _463 from "./downtime-detector/v1beta1/query";
import * as _464 from "./epochs/genesis";
import * as _465 from "./epochs/query";
import * as _466 from "./gamm/pool-models/balancer/balancerPool";
import * as _467 from "./gamm/v1beta1/genesis";
import * as _468 from "./gamm/v1beta1/query";
import * as _469 from "./gamm/v1beta1/tx";
import * as _470 from "./gamm/pool-models/balancer/tx/tx";
import * as _471 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _472 from "./gamm/pool-models/stableswap/tx";
import * as _473 from "./gamm/v2/query";
import * as _474 from "./ibc-rate-limit/v1beta1/params";
import * as _475 from "./ibc-rate-limit/v1beta1/query";
import * as _476 from "./incentives/gauge";
import * as _477 from "./incentives/genesis";
import * as _478 from "./incentives/params";
import * as _479 from "./incentives/query";
import * as _480 from "./incentives/tx";
import * as _481 from "./lockup/genesis";
import * as _482 from "./lockup/lock";
import * as _483 from "./lockup/params";
import * as _484 from "./lockup/query";
import * as _485 from "./lockup/tx";
import * as _486 from "./mint/v1beta1/genesis";
import * as _487 from "./mint/v1beta1/mint";
import * as _488 from "./mint/v1beta1/query";
import * as _489 from "./pool-incentives/v1beta1/genesis";
import * as _490 from "./pool-incentives/v1beta1/gov";
import * as _491 from "./pool-incentives/v1beta1/incentives";
import * as _492 from "./pool-incentives/v1beta1/query";
import * as _493 from "./protorev/v1beta1/genesis";
import * as _494 from "./protorev/v1beta1/gov";
import * as _495 from "./protorev/v1beta1/params";
import * as _496 from "./protorev/v1beta1/protorev";
import * as _497 from "./protorev/v1beta1/query";
import * as _498 from "./protorev/v1beta1/tx";
import * as _499 from "./sumtree/v1beta1/tree";
import * as _500 from "./superfluid/genesis";
import * as _501 from "./superfluid/params";
import * as _502 from "./superfluid/query";
import * as _503 from "./superfluid/superfluid";
import * as _504 from "./superfluid/tx";
import * as _505 from "./swaprouter/v1beta1/genesis";
import * as _506 from "./swaprouter/v1beta1/module_route";
import * as _507 from "./swaprouter/v1beta1/query";
import * as _508 from "./swaprouter/v1beta1/swap_route";
import * as _509 from "./swaprouter/v1beta1/tx";
import * as _510 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _511 from "./tokenfactory/v1beta1/genesis";
import * as _512 from "./tokenfactory/v1beta1/params";
import * as _513 from "./tokenfactory/v1beta1/query";
import * as _514 from "./tokenfactory/v1beta1/tx";
import * as _515 from "./twap/v1beta1/genesis";
import * as _516 from "./twap/v1beta1/query";
import * as _517 from "./twap/v1beta1/twap_record";
import * as _518 from "./txfees/v1beta1/feetoken";
import * as _519 from "./txfees/v1beta1/genesis";
import * as _520 from "./txfees/v1beta1/gov";
import * as _521 from "./txfees/v1beta1/query";
import * as _522 from "./valset-pref/v1beta1/query";
import * as _523 from "./valset-pref/v1beta1/state";
import * as _524 from "./valset-pref/v1beta1/tx";
import * as _909 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _910 from "./gamm/pool-models/stableswap/tx.amino";
import * as _911 from "./gamm/v1beta1/tx.amino";
import * as _912 from "./incentives/tx.amino";
import * as _913 from "./lockup/tx.amino";
import * as _914 from "./protorev/v1beta1/tx.amino";
import * as _915 from "./superfluid/tx.amino";
import * as _916 from "./swaprouter/v1beta1/tx.amino";
import * as _917 from "./tokenfactory/v1beta1/tx.amino";
import * as _918 from "./valset-pref/v1beta1/tx.amino";
import * as _919 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _920 from "./gamm/pool-models/stableswap/tx.registry";
import * as _921 from "./gamm/v1beta1/tx.registry";
import * as _922 from "./incentives/tx.registry";
import * as _923 from "./lockup/tx.registry";
import * as _924 from "./protorev/v1beta1/tx.registry";
import * as _925 from "./superfluid/tx.registry";
import * as _926 from "./swaprouter/v1beta1/tx.registry";
import * as _927 from "./tokenfactory/v1beta1/tx.registry";
import * as _928 from "./valset-pref/v1beta1/tx.registry";
import * as _929 from "./downtime-detector/v1beta1/query.lcd";
import * as _930 from "./epochs/query.lcd";
import * as _931 from "./gamm/v1beta1/query.lcd";
import * as _932 from "./gamm/v2/query.lcd";
import * as _933 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _934 from "./incentives/query.lcd";
import * as _935 from "./lockup/query.lcd";
import * as _936 from "./mint/v1beta1/query.lcd";
import * as _937 from "./pool-incentives/v1beta1/query.lcd";
import * as _938 from "./protorev/v1beta1/query.lcd";
import * as _939 from "./superfluid/query.lcd";
import * as _940 from "./swaprouter/v1beta1/query.lcd";
import * as _941 from "./tokenfactory/v1beta1/query.lcd";
import * as _942 from "./twap/v1beta1/query.lcd";
import * as _943 from "./txfees/v1beta1/query.lcd";
import * as _944 from "./valset-pref/v1beta1/query.lcd";
import * as _945 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _946 from "./epochs/query.rpc.Query";
import * as _947 from "./gamm/v1beta1/query.rpc.Query";
import * as _948 from "./gamm/v2/query.rpc.Query";
import * as _949 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _950 from "./incentives/query.rpc.Query";
import * as _951 from "./lockup/query.rpc.Query";
import * as _952 from "./mint/v1beta1/query.rpc.Query";
import * as _953 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _954 from "./protorev/v1beta1/query.rpc.Query";
import * as _955 from "./superfluid/query.rpc.Query";
import * as _956 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _957 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _958 from "./twap/v1beta1/query.rpc.Query";
import * as _959 from "./txfees/v1beta1/query.rpc.Query";
import * as _960 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _961 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _962 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _963 from "./gamm/v1beta1/tx.rpc.msg";
import * as _964 from "./incentives/tx.rpc.msg";
import * as _965 from "./lockup/tx.rpc.msg";
import * as _966 from "./protorev/v1beta1/tx.rpc.msg";
import * as _967 from "./superfluid/tx.rpc.msg";
import * as _968 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _969 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _970 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _1061 from "./lcd";
import * as _1062 from "./rpc.query";
import * as _1063 from "./rpc.tx";
export namespace osmosis {
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._461,
      ..._462,
      ..._463,
      ..._929,
      ..._945
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._464,
      ..._465,
      ..._930,
      ..._946
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._466,
      ..._467,
      ..._468,
      ..._469,
      ..._911,
      ..._921,
      ..._931,
      ..._947,
      ..._963
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._470,
          ..._909,
          ..._919,
          ..._961
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._471,
          ..._472,
          ..._910,
          ..._920,
          ..._962
        };
      }
    }
    export const v2 = {
      ..._473,
      ..._932,
      ..._948
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._474,
      ..._475,
      ..._933,
      ..._949
    };
  }
  export const incentives = {
    ..._476,
    ..._477,
    ..._478,
    ..._479,
    ..._480,
    ..._912,
    ..._922,
    ..._934,
    ..._950,
    ..._964
  };
  export const lockup = {
    ..._481,
    ..._482,
    ..._483,
    ..._484,
    ..._485,
    ..._913,
    ..._923,
    ..._935,
    ..._951,
    ..._965
  };
  export namespace mint {
    export const v1beta1 = {
      ..._486,
      ..._487,
      ..._488,
      ..._936,
      ..._952
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._489,
      ..._490,
      ..._491,
      ..._492,
      ..._937,
      ..._953
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._493,
      ..._494,
      ..._495,
      ..._496,
      ..._497,
      ..._498,
      ..._914,
      ..._924,
      ..._938,
      ..._954,
      ..._966
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._499
    };
  }
  export const superfluid = {
    ..._500,
    ..._501,
    ..._502,
    ..._503,
    ..._504,
    ..._915,
    ..._925,
    ..._939,
    ..._955,
    ..._967
  };
  export namespace swaprouter {
    export const v1beta1 = {
      ..._505,
      ..._506,
      ..._507,
      ..._508,
      ..._509,
      ..._916,
      ..._926,
      ..._940,
      ..._956,
      ..._968
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._510,
      ..._511,
      ..._512,
      ..._513,
      ..._514,
      ..._917,
      ..._927,
      ..._941,
      ..._957,
      ..._969
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._515,
      ..._516,
      ..._517,
      ..._942,
      ..._958
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._518,
      ..._519,
      ..._520,
      ..._521,
      ..._943,
      ..._959
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._522,
      ..._523,
      ..._524,
      ..._918,
      ..._928,
      ..._944,
      ..._960,
      ..._970
    };
  }
  export const ClientFactory = {
    ..._1061,
    ..._1062,
    ..._1063
  };
}