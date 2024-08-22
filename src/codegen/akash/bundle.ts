import * as _0 from "./audit/v1beta1/audit";
import * as _1 from "./audit/v1beta2/audit";
import * as _2 from "./audit/v1beta2/genesis";
import * as _3 from "./audit/v1beta2/query";
import * as _4 from "./base/v1beta1/attribute";
import * as _5 from "./base/v1beta1/endpoint";
import * as _6 from "./base/v1beta1/resource";
import * as _7 from "./base/v1beta1/resourcevalue";
import * as _8 from "./base/v1beta2/attribute";
import * as _9 from "./base/v1beta2/endpoint";
import * as _10 from "./base/v1beta2/resource";
import * as _11 from "./base/v1beta2/resourceunits";
import * as _12 from "./base/v1beta2/resourcevalue";
import * as _13 from "./cert/v1beta2/cert";
import * as _14 from "./cert/v1beta2/genesis";
import * as _15 from "./cert/v1beta2/query";
import * as _16 from "./deployment/v1beta1/authz";
import * as _17 from "./deployment/v1beta1/deployment";
import * as _18 from "./deployment/v1beta1/genesis";
import * as _19 from "./deployment/v1beta1/group";
import * as _20 from "./deployment/v1beta1/params";
import * as _21 from "./deployment/v1beta1/query";
import * as _22 from "./deployment/v1beta2/authz";
import * as _23 from "./deployment/v1beta2/deployment";
import * as _24 from "./deployment/v1beta2/deploymentmsg";
import * as _25 from "./deployment/v1beta2/genesis";
import * as _26 from "./deployment/v1beta2/group";
import * as _27 from "./deployment/v1beta2/groupid";
import * as _28 from "./deployment/v1beta2/groupmsg";
import * as _29 from "./deployment/v1beta2/groupspec";
import * as _30 from "./deployment/v1beta2/params";
import * as _31 from "./deployment/v1beta2/query";
import * as _32 from "./deployment/v1beta2/resource";
import * as _33 from "./deployment/v1beta2/service";
import * as _34 from "./escrow/v1beta1/genesis";
import * as _35 from "./escrow/v1beta1/query";
import * as _36 from "./escrow/v1beta1/types";
import * as _37 from "./escrow/v1beta2/genesis";
import * as _38 from "./escrow/v1beta2/query";
import * as _39 from "./escrow/v1beta2/types";
import * as _40 from "./inflation/v1beta2/genesis";
import * as _41 from "./inflation/v1beta2/params";
import * as _42 from "./market/v1beta2/bid";
import * as _43 from "./market/v1beta2/genesis";
import * as _44 from "./market/v1beta2/lease";
import * as _45 from "./market/v1beta2/order";
import * as _46 from "./market/v1beta2/params";
import * as _47 from "./market/v1beta2/query";
import * as _48 from "./market/v1beta2/service";
import * as _49 from "./provider/v1beta1/provider";
import * as _50 from "./provider/v1beta2/genesis";
import * as _51 from "./provider/v1beta2/provider";
import * as _52 from "./provider/v1beta2/query";
import * as _603 from "./audit/v1beta1/audit.amino";
import * as _604 from "./audit/v1beta2/audit.amino";
import * as _605 from "./cert/v1beta2/cert.amino";
import * as _606 from "./deployment/v1beta1/deployment.amino";
import * as _607 from "./deployment/v1beta2/service.amino";
import * as _608 from "./market/v1beta2/service.amino";
import * as _609 from "./provider/v1beta1/provider.amino";
import * as _610 from "./provider/v1beta2/provider.amino";
import * as _611 from "./audit/v1beta1/audit.registry";
import * as _612 from "./audit/v1beta2/audit.registry";
import * as _613 from "./cert/v1beta2/cert.registry";
import * as _614 from "./deployment/v1beta1/deployment.registry";
import * as _615 from "./deployment/v1beta2/service.registry";
import * as _616 from "./market/v1beta2/service.registry";
import * as _617 from "./provider/v1beta1/provider.registry";
import * as _618 from "./provider/v1beta2/provider.registry";
import * as _619 from "./audit/v1beta2/query.lcd";
import * as _620 from "./cert/v1beta2/query.lcd";
import * as _621 from "./deployment/v1beta1/query.lcd";
import * as _622 from "./deployment/v1beta2/query.lcd";
import * as _623 from "./escrow/v1beta1/query.lcd";
import * as _624 from "./escrow/v1beta2/query.lcd";
import * as _625 from "./market/v1beta2/query.lcd";
import * as _626 from "./provider/v1beta2/query.lcd";
import * as _627 from "./audit/v1beta2/query.rpc.Query";
import * as _628 from "./cert/v1beta2/query.rpc.Query";
import * as _629 from "./deployment/v1beta1/query.rpc.Query";
import * as _630 from "./deployment/v1beta2/query.rpc.Query";
import * as _631 from "./escrow/v1beta1/query.rpc.Query";
import * as _632 from "./escrow/v1beta2/query.rpc.Query";
import * as _633 from "./market/v1beta2/query.rpc.Query";
import * as _634 from "./provider/v1beta2/query.rpc.Query";
import * as _635 from "./audit/v1beta1/audit.rpc.msg";
import * as _636 from "./audit/v1beta2/audit.rpc.msg";
import * as _637 from "./cert/v1beta2/cert.rpc.msg";
import * as _638 from "./deployment/v1beta1/deployment.rpc.msg";
import * as _639 from "./deployment/v1beta2/service.rpc.msg";
import * as _640 from "./market/v1beta2/service.rpc.msg";
import * as _641 from "./provider/v1beta1/provider.rpc.msg";
import * as _642 from "./provider/v1beta2/provider.rpc.msg";
import * as _1035 from "./lcd";
import * as _1036 from "./rpc.query";
import * as _1037 from "./rpc.tx";
export namespace akash {
  export namespace audit {
    export const v1beta1 = {
      ..._0,
      ..._603,
      ..._611,
      ..._635
    };
    export const v1beta2 = {
      ..._1,
      ..._2,
      ..._3,
      ..._604,
      ..._612,
      ..._619,
      ..._627,
      ..._636
    };
  }
  export namespace base {
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7
    };
    export const v1beta2 = {
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12
    };
  }
  export namespace cert {
    export const v1beta2 = {
      ..._13,
      ..._14,
      ..._15,
      ..._605,
      ..._613,
      ..._620,
      ..._628,
      ..._637
    };
  }
  export namespace deployment {
    export const v1beta1 = {
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._606,
      ..._614,
      ..._621,
      ..._629,
      ..._638
    };
    export const v1beta2 = {
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._607,
      ..._615,
      ..._622,
      ..._630,
      ..._639
    };
  }
  export namespace escrow {
    export const v1beta1 = {
      ..._34,
      ..._35,
      ..._36,
      ..._623,
      ..._631
    };
    export const v1beta2 = {
      ..._37,
      ..._38,
      ..._39,
      ..._624,
      ..._632
    };
  }
  export namespace inflation {
    export const v1beta2 = {
      ..._40,
      ..._41
    };
  }
  export namespace market {
    export const v1beta2 = {
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._608,
      ..._616,
      ..._625,
      ..._633,
      ..._640
    };
  }
  export namespace provider {
    export const v1beta1 = {
      ..._49,
      ..._609,
      ..._617,
      ..._641
    };
    export const v1beta2 = {
      ..._50,
      ..._51,
      ..._52,
      ..._610,
      ..._618,
      ..._626,
      ..._634,
      ..._642
    };
  }
  export const ClientFactory = {
    ..._1035,
    ..._1036,
    ..._1037
  };
}