import * as _260 from "./asset/v1beta1/asset";
import * as _261 from "./asset/v1beta1/events";
import * as _262 from "./asset/v1beta1/genesis";
import * as _263 from "./asset/v1beta1/gov";
import * as _264 from "./asset/v1beta1/msg";
import * as _265 from "./asset/v1beta1/pair";
import * as _266 from "./asset/v1beta1/params";
import * as _267 from "./asset/v1beta1/querier";
import * as _268 from "./oracle/v1beta1/genesis";
import * as _269 from "./oracle/v1beta1/gov";
import * as _270 from "./oracle/v1beta1/msg";
import * as _271 from "./oracle/v1beta1/oracle";
import * as _272 from "./oracle/v1beta1/params";
import * as _273 from "./oracle/v1beta1/querier";
import * as _274 from "./vault/v1beta1/events";
import * as _275 from "./vault/v1beta1/genesis";
import * as _276 from "./vault/v1beta1/msg";
import * as _277 from "./vault/v1beta1/querier";
import * as _278 from "./vault/v1beta1/vault";
export namespace comdex {
  export namespace asset {
    export const v1beta1 = {
      ..._260,
      ..._261,
      ..._262,
      ..._263,
      ..._264,
      ..._265,
      ..._266,
      ..._267
    };
  }
  export namespace oracle {
    export const v1beta1 = {
      ..._268,
      ..._269,
      ..._270,
      ..._271,
      ..._272,
      ..._273
    };
  }
  export namespace vault {
    export const v1beta1 = {
      ..._274,
      ..._275,
      ..._276,
      ..._277,
      ..._278
    };
  }
}