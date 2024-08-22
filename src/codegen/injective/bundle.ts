import * as _412 from "./auction/v1beta1/auction";
import * as _413 from "./auction/v1beta1/genesis";
import * as _414 from "./auction/v1beta1/query";
import * as _415 from "./auction/v1beta1/tx";
import * as _416 from "./crypto/v1beta1/ethsecp256k1/keys";
import * as _417 from "./exchange/v1beta1/authz";
import * as _418 from "./exchange/v1beta1/events";
import * as _419 from "./exchange/v1beta1/exchange";
import * as _420 from "./exchange/v1beta1/genesis";
import * as _421 from "./exchange/v1beta1/query";
import * as _422 from "./exchange/v1beta1/tx";
import * as _423 from "./insurance/v1beta1/genesis";
import * as _424 from "./insurance/v1beta1/insurance";
import * as _425 from "./insurance/v1beta1/query";
import * as _426 from "./insurance/v1beta1/tx";
import * as _427 from "./ocr/v1beta1/genesis";
import * as _428 from "./ocr/v1beta1/ocr";
import * as _429 from "./ocr/v1beta1/query";
import * as _430 from "./ocr/v1beta1/tx";
import * as _431 from "./oracle/v1beta1/events";
import * as _432 from "./oracle/v1beta1/genesis";
import * as _433 from "./oracle/v1beta1/oracle";
import * as _434 from "./oracle/v1beta1/proposal";
import * as _435 from "./oracle/v1beta1/query";
import * as _436 from "./oracle/v1beta1/tx";
import * as _437 from "./peggy/v1/attestation";
import * as _438 from "./peggy/v1/batch";
import * as _439 from "./peggy/v1/ethereum_signer";
import * as _440 from "./peggy/v1/events";
import * as _441 from "./peggy/v1/genesis";
import * as _442 from "./peggy/v1/msgs";
import * as _443 from "./peggy/v1/pool";
import * as _444 from "./peggy/v1/proposal";
import * as _445 from "./peggy/v1/query";
import * as _446 from "./peggy/v1/types";
import * as _447 from "./types/v1beta1/account";
import * as _448 from "./types/v1beta1/tx_ext";
import * as _449 from "./types/v1beta1/tx_response";
import * as _450 from "./wasmx/v1/genesis";
import * as _451 from "./wasmx/v1/query";
import * as _452 from "./wasmx/v1/tx";
import * as _453 from "./wasmx/v1/wasmx";
import * as _873 from "./auction/v1beta1/tx.amino";
import * as _874 from "./exchange/v1beta1/tx.amino";
import * as _875 from "./insurance/v1beta1/tx.amino";
import * as _876 from "./ocr/v1beta1/tx.amino";
import * as _877 from "./oracle/v1beta1/tx.amino";
import * as _878 from "./peggy/v1/msgs.amino";
import * as _879 from "./auction/v1beta1/tx.registry";
import * as _880 from "./exchange/v1beta1/tx.registry";
import * as _881 from "./insurance/v1beta1/tx.registry";
import * as _882 from "./ocr/v1beta1/tx.registry";
import * as _883 from "./oracle/v1beta1/tx.registry";
import * as _884 from "./peggy/v1/msgs.registry";
import * as _885 from "./auction/v1beta1/query.lcd";
import * as _886 from "./exchange/v1beta1/query.lcd";
import * as _887 from "./insurance/v1beta1/query.lcd";
import * as _888 from "./ocr/v1beta1/query.lcd";
import * as _889 from "./oracle/v1beta1/query.lcd";
import * as _890 from "./peggy/v1/query.lcd";
import * as _891 from "./wasmx/v1/query.lcd";
import * as _892 from "./auction/v1beta1/query.rpc.Query";
import * as _893 from "./exchange/v1beta1/query.rpc.Query";
import * as _894 from "./insurance/v1beta1/query.rpc.Query";
import * as _895 from "./ocr/v1beta1/query.rpc.Query";
import * as _896 from "./oracle/v1beta1/query.rpc.Query";
import * as _897 from "./peggy/v1/query.rpc.Query";
import * as _898 from "./wasmx/v1/query.rpc.Query";
import * as _899 from "./auction/v1beta1/tx.rpc.msg";
import * as _900 from "./exchange/v1beta1/tx.rpc.msg";
import * as _901 from "./insurance/v1beta1/tx.rpc.msg";
import * as _902 from "./ocr/v1beta1/tx.rpc.msg";
import * as _903 from "./oracle/v1beta1/tx.rpc.msg";
import * as _904 from "./peggy/v1/msgs.rpc.msg";
import * as _1053 from "./lcd";
import * as _1054 from "./rpc.query";
import * as _1055 from "./rpc.tx";
export namespace injective {
  export namespace auction {
    export const v1beta1 = {
      ..._412,
      ..._413,
      ..._414,
      ..._415,
      ..._873,
      ..._879,
      ..._885,
      ..._892,
      ..._899
    };
  }
  export namespace crypto {
    export namespace v1beta1 {
      export const ethsecp256k1 = {
        ..._416
      };
    }
  }
  export namespace exchange {
    export const v1beta1 = {
      ..._417,
      ..._418,
      ..._419,
      ..._420,
      ..._421,
      ..._422,
      ..._874,
      ..._880,
      ..._886,
      ..._893,
      ..._900
    };
  }
  export namespace insurance {
    export const v1beta1 = {
      ..._423,
      ..._424,
      ..._425,
      ..._426,
      ..._875,
      ..._881,
      ..._887,
      ..._894,
      ..._901
    };
  }
  export namespace ocr {
    export const v1beta1 = {
      ..._427,
      ..._428,
      ..._429,
      ..._430,
      ..._876,
      ..._882,
      ..._888,
      ..._895,
      ..._902
    };
  }
  export namespace oracle {
    export const v1beta1 = {
      ..._431,
      ..._432,
      ..._433,
      ..._434,
      ..._435,
      ..._436,
      ..._877,
      ..._883,
      ..._889,
      ..._896,
      ..._903
    };
  }
  export namespace peggy {
    export const v1 = {
      ..._437,
      ..._438,
      ..._439,
      ..._440,
      ..._441,
      ..._442,
      ..._443,
      ..._444,
      ..._445,
      ..._446,
      ..._878,
      ..._884,
      ..._890,
      ..._897,
      ..._904
    };
  }
  export namespace types {
    export const v1beta1 = {
      ..._447,
      ..._448,
      ..._449
    };
  }
  export namespace wasmx {
    export const v1 = {
      ..._450,
      ..._451,
      ..._452,
      ..._453,
      ..._891,
      ..._898
    };
  }
  export const ClientFactory = {
    ..._1053,
    ..._1054,
    ..._1055
  };
}