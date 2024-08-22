import * as _54 from "./modules/x/assets/genesis/genesis";
import * as _55 from "./modules/x/assets/key/key";
import * as _56 from "./modules/x/assets/mappable/mappable";
import * as _57 from "./modules/x/assets/queries/asset/query_request";
import * as _58 from "./modules/x/assets/queries/asset/query_response";
import * as _59 from "./modules/x/assets/queries/asset/service";
import * as _60 from "./modules/x/assets/queries/assets/query_request";
import * as _61 from "./modules/x/assets/queries/assets/query_response";
import * as _62 from "./modules/x/assets/queries/assets/service";
import * as _63 from "./modules/x/assets/record/record";
import * as _64 from "./modules/x/assets/transactions/burn/message";
import * as _65 from "./modules/x/assets/transactions/burn/service";
import * as _66 from "./modules/x/assets/transactions/burn/transaction_response";
import * as _67 from "./modules/x/assets/transactions/define/message";
import * as _68 from "./modules/x/assets/transactions/define/service";
import * as _69 from "./modules/x/assets/transactions/define/transaction_response";
import * as _70 from "./modules/x/assets/transactions/deputize/message";
import * as _71 from "./modules/x/assets/transactions/deputize/service";
import * as _72 from "./modules/x/assets/transactions/deputize/transaction_response";
import * as _73 from "./modules/x/assets/transactions/mint/message";
import * as _74 from "./modules/x/assets/transactions/mint/service";
import * as _75 from "./modules/x/assets/transactions/mint/transaction_response";
import * as _76 from "./modules/x/assets/transactions/mutate/message";
import * as _77 from "./modules/x/assets/transactions/mutate/service";
import * as _78 from "./modules/x/assets/transactions/mutate/transaction_response";
import * as _79 from "./modules/x/assets/transactions/renumerate/message";
import * as _80 from "./modules/x/assets/transactions/renumerate/service";
import * as _81 from "./modules/x/assets/transactions/renumerate/transaction_response";
import * as _82 from "./modules/x/assets/transactions/revoke/message";
import * as _83 from "./modules/x/assets/transactions/revoke/service";
import * as _84 from "./modules/x/assets/transactions/revoke/transaction_response";
import * as _85 from "./modules/x/assets/transactions/send/message";
import * as _86 from "./modules/x/assets/transactions/send/service";
import * as _87 from "./modules/x/assets/transactions/send/transaction_response";
import * as _88 from "./modules/x/assets/transactions/unwrap/message";
import * as _89 from "./modules/x/assets/transactions/unwrap/service";
import * as _90 from "./modules/x/assets/transactions/unwrap/transaction_response";
import * as _91 from "./modules/x/assets/transactions/wrap/message";
import * as _92 from "./modules/x/assets/transactions/wrap/service";
import * as _93 from "./modules/x/assets/transactions/wrap/transaction_response";
import * as _94 from "./modules/x/classifications/genesis/genesis";
import * as _95 from "./modules/x/classifications/key/key";
import * as _96 from "./modules/x/classifications/mappable/mappable";
import * as _97 from "./modules/x/classifications/queries/classification/query_request";
import * as _98 from "./modules/x/classifications/queries/classification/query_response";
import * as _99 from "./modules/x/classifications/queries/classification/service";
import * as _100 from "./modules/x/classifications/queries/classifications/query_request";
import * as _101 from "./modules/x/classifications/queries/classifications/query_response";
import * as _102 from "./modules/x/classifications/queries/classifications/service";
import * as _103 from "./modules/x/classifications/record/record";
import * as _104 from "./modules/x/identities/genesis/genesis";
import * as _105 from "./modules/x/identities/key/key";
import * as _106 from "./modules/x/identities/mappable/mappable";
import * as _107 from "./modules/x/identities/queries/identities/query_request";
import * as _108 from "./modules/x/identities/queries/identities/query_response";
import * as _109 from "./modules/x/identities/queries/identities/service";
import * as _110 from "./modules/x/identities/queries/identity/query_request";
import * as _111 from "./modules/x/identities/queries/identity/query_response";
import * as _112 from "./modules/x/identities/queries/identity/service";
import * as _113 from "./modules/x/identities/record/record";
import * as _114 from "./modules/x/identities/transactions/define/message";
import * as _115 from "./modules/x/identities/transactions/define/service";
import * as _116 from "./modules/x/identities/transactions/define/transaction_response";
import * as _117 from "./modules/x/identities/transactions/deputize/message";
import * as _118 from "./modules/x/identities/transactions/deputize/service";
import * as _119 from "./modules/x/identities/transactions/deputize/transaction_response";
import * as _120 from "./modules/x/identities/transactions/issue/message";
import * as _121 from "./modules/x/identities/transactions/issue/service";
import * as _122 from "./modules/x/identities/transactions/issue/transaction_response";
import * as _123 from "./modules/x/identities/transactions/name/message";
import * as _124 from "./modules/x/identities/transactions/name/service";
import * as _125 from "./modules/x/identities/transactions/name/transaction_response";
import * as _126 from "./modules/x/identities/transactions/provision/message";
import * as _127 from "./modules/x/identities/transactions/provision/service";
import * as _128 from "./modules/x/identities/transactions/provision/transaction_response";
import * as _129 from "./modules/x/identities/transactions/quash/message";
import * as _130 from "./modules/x/identities/transactions/quash/service";
import * as _131 from "./modules/x/identities/transactions/quash/transaction_response";
import * as _132 from "./modules/x/identities/transactions/revoke/message";
import * as _133 from "./modules/x/identities/transactions/revoke/service";
import * as _134 from "./modules/x/identities/transactions/revoke/transaction_response";
import * as _135 from "./modules/x/identities/transactions/unprovision/message";
import * as _136 from "./modules/x/identities/transactions/unprovision/service";
import * as _137 from "./modules/x/identities/transactions/unprovision/transaction_response";
import * as _138 from "./modules/x/identities/transactions/update/message";
import * as _139 from "./modules/x/identities/transactions/update/service";
import * as _140 from "./modules/x/identities/transactions/update/transaction_response";
import * as _141 from "./modules/x/maintainers/genesis/genesis";
import * as _142 from "./modules/x/maintainers/key/key";
import * as _143 from "./modules/x/maintainers/mappable/mappable";
import * as _144 from "./modules/x/maintainers/queries/maintainer/query_request";
import * as _145 from "./modules/x/maintainers/queries/maintainer/query_response";
import * as _146 from "./modules/x/maintainers/queries/maintainer/service";
import * as _147 from "./modules/x/maintainers/queries/maintainers/query_request";
import * as _148 from "./modules/x/maintainers/queries/maintainers/query_response";
import * as _149 from "./modules/x/maintainers/queries/maintainers/service";
import * as _150 from "./modules/x/maintainers/record/record";
import * as _151 from "./modules/x/metas/genesis/genesis";
import * as _152 from "./modules/x/metas/key/key";
import * as _153 from "./modules/x/metas/mappable/mappable";
import * as _154 from "./modules/x/metas/queries/meta/query_request";
import * as _155 from "./modules/x/metas/queries/meta/query_response";
import * as _156 from "./modules/x/metas/queries/meta/service";
import * as _157 from "./modules/x/metas/queries/metas/query_request";
import * as _158 from "./modules/x/metas/queries/metas/query_response";
import * as _159 from "./modules/x/metas/queries/metas/service";
import * as _160 from "./modules/x/metas/record/record";
import * as _161 from "./modules/x/metas/transactions/reveal/message";
import * as _162 from "./modules/x/metas/transactions/reveal/service";
import * as _163 from "./modules/x/metas/transactions/reveal/transaction_response";
import * as _164 from "./modules/x/orders/genesis/genesis";
import * as _165 from "./modules/x/orders/key/key";
import * as _166 from "./modules/x/orders/mappable/mappable";
import * as _167 from "./modules/x/orders/queries/order/query_request";
import * as _168 from "./modules/x/orders/queries/order/query_response";
import * as _169 from "./modules/x/orders/queries/order/service";
import * as _170 from "./modules/x/orders/queries/orders/query_request";
import * as _171 from "./modules/x/orders/queries/orders/query_response";
import * as _172 from "./modules/x/orders/queries/orders/service";
import * as _173 from "./modules/x/orders/record/record";
import * as _174 from "./modules/x/orders/transactions/cancel/message";
import * as _175 from "./modules/x/orders/transactions/cancel/service";
import * as _176 from "./modules/x/orders/transactions/cancel/transaction_response";
import * as _177 from "./modules/x/orders/transactions/define/message";
import * as _178 from "./modules/x/orders/transactions/define/service";
import * as _179 from "./modules/x/orders/transactions/define/transaction_response";
import * as _180 from "./modules/x/orders/transactions/deputize/message";
import * as _181 from "./modules/x/orders/transactions/deputize/service";
import * as _182 from "./modules/x/orders/transactions/deputize/transaction_response";
import * as _183 from "./modules/x/orders/transactions/get/message";
import * as _184 from "./modules/x/orders/transactions/get/service";
import * as _185 from "./modules/x/orders/transactions/get/transaction_response";
import * as _186 from "./modules/x/orders/transactions/immediate/message";
import * as _187 from "./modules/x/orders/transactions/immediate/service";
import * as _188 from "./modules/x/orders/transactions/immediate/transaction_response";
import * as _189 from "./modules/x/orders/transactions/make/message";
import * as _190 from "./modules/x/orders/transactions/make/service";
import * as _191 from "./modules/x/orders/transactions/make/transaction_response";
import * as _192 from "./modules/x/orders/transactions/modify/message";
import * as _193 from "./modules/x/orders/transactions/modify/service";
import * as _194 from "./modules/x/orders/transactions/modify/transaction_response";
import * as _195 from "./modules/x/orders/transactions/put/message";
import * as _196 from "./modules/x/orders/transactions/put/service";
import * as _197 from "./modules/x/orders/transactions/put/transaction_response";
import * as _198 from "./modules/x/orders/transactions/revoke/message";
import * as _199 from "./modules/x/orders/transactions/revoke/service";
import * as _200 from "./modules/x/orders/transactions/revoke/transaction_response";
import * as _201 from "./modules/x/orders/transactions/take/message";
import * as _202 from "./modules/x/orders/transactions/take/service";
import * as _203 from "./modules/x/orders/transactions/take/transaction_response";
import * as _204 from "./modules/x/splits/genesis/genesis";
import * as _205 from "./modules/x/splits/key/key";
import * as _206 from "./modules/x/splits/mappable/mappable";
import * as _207 from "./modules/x/splits/queries/balances/query_request";
import * as _208 from "./modules/x/splits/queries/balances/query_response";
import * as _209 from "./modules/x/splits/queries/balances/service";
import * as _210 from "./modules/x/splits/queries/split/query_request";
import * as _211 from "./modules/x/splits/queries/split/query_response";
import * as _212 from "./modules/x/splits/queries/split/service";
import * as _213 from "./modules/x/splits/queries/splits/query_request";
import * as _214 from "./modules/x/splits/queries/splits/query_response";
import * as _215 from "./modules/x/splits/queries/splits/service";
import * as _216 from "./modules/x/splits/queries/supply/query_request";
import * as _217 from "./modules/x/splits/queries/supply/query_response";
import * as _218 from "./modules/x/splits/queries/supply/service";
import * as _219 from "./modules/x/splits/record/record";
import * as _220 from "./schema/data/base/acc_address_data";
import * as _221 from "./schema/data/base/any_data";
import * as _222 from "./schema/data/base/any_listable_data";
import * as _223 from "./schema/data/base/boolean_data";
import * as _224 from "./schema/data/base/dec_data";
import * as _225 from "./schema/data/base/height_data";
import * as _226 from "./schema/data/base/id_data";
import * as _227 from "./schema/data/base/linked_data";
import * as _228 from "./schema/data/base/list_data";
import * as _229 from "./schema/data/base/number_data";
import * as _230 from "./schema/data/base/string_data";
import * as _231 from "./schema/documents/base/document";
import * as _232 from "./schema/ids/base/any_id";
import * as _233 from "./schema/ids/base/asset_id";
import * as _234 from "./schema/ids/base/classification_id";
import * as _235 from "./schema/ids/base/data_id";
import * as _236 from "./schema/ids/base/hash_id";
import * as _237 from "./schema/ids/base/identity_id";
import * as _238 from "./schema/ids/base/maintainer_id";
import * as _239 from "./schema/ids/base/order_id";
import * as _240 from "./schema/ids/base/property_id";
import * as _241 from "./schema/ids/base/split_id";
import * as _242 from "./schema/ids/base/string_id";
import * as _243 from "./schema/lists/base/id_list";
import * as _244 from "./schema/lists/base/parameter_list";
import * as _245 from "./schema/lists/base/property_list";
import * as _246 from "./schema/parameters/base/parameter";
import * as _247 from "./schema/properties/base/any_property";
import * as _248 from "./schema/properties/base/mesa_property";
import * as _249 from "./schema/properties/base/meta_property";
import * as _250 from "./schema/qualified/base/immutables";
import * as _251 from "./schema/qualified/base/mutables";
import * as _252 from "./schema/types/base/height";
import * as _253 from "./schema/types/base/split";
import * as _643 from "./modules/x/assets/transactions/burn/service.amino";
import * as _644 from "./modules/x/assets/transactions/define/service.amino";
import * as _645 from "./modules/x/assets/transactions/deputize/service.amino";
import * as _646 from "./modules/x/assets/transactions/mint/service.amino";
import * as _647 from "./modules/x/assets/transactions/mutate/service.amino";
import * as _648 from "./modules/x/assets/transactions/renumerate/service.amino";
import * as _649 from "./modules/x/assets/transactions/revoke/service.amino";
import * as _650 from "./modules/x/assets/transactions/send/service.amino";
import * as _651 from "./modules/x/assets/transactions/unwrap/service.amino";
import * as _652 from "./modules/x/assets/transactions/wrap/service.amino";
import * as _653 from "./modules/x/identities/transactions/define/service.amino";
import * as _654 from "./modules/x/identities/transactions/deputize/service.amino";
import * as _655 from "./modules/x/identities/transactions/issue/service.amino";
import * as _656 from "./modules/x/identities/transactions/name/service.amino";
import * as _657 from "./modules/x/identities/transactions/provision/service.amino";
import * as _658 from "./modules/x/identities/transactions/quash/service.amino";
import * as _659 from "./modules/x/identities/transactions/revoke/service.amino";
import * as _660 from "./modules/x/identities/transactions/unprovision/service.amino";
import * as _661 from "./modules/x/identities/transactions/update/service.amino";
import * as _662 from "./modules/x/metas/transactions/reveal/service.amino";
import * as _663 from "./modules/x/orders/transactions/cancel/service.amino";
import * as _664 from "./modules/x/orders/transactions/define/service.amino";
import * as _665 from "./modules/x/orders/transactions/deputize/service.amino";
import * as _666 from "./modules/x/orders/transactions/get/service.amino";
import * as _667 from "./modules/x/orders/transactions/immediate/service.amino";
import * as _668 from "./modules/x/orders/transactions/make/service.amino";
import * as _669 from "./modules/x/orders/transactions/modify/service.amino";
import * as _670 from "./modules/x/orders/transactions/put/service.amino";
import * as _671 from "./modules/x/orders/transactions/revoke/service.amino";
import * as _672 from "./modules/x/orders/transactions/take/service.amino";
import * as _673 from "./modules/x/assets/transactions/burn/service.registry";
import * as _674 from "./modules/x/assets/transactions/define/service.registry";
import * as _675 from "./modules/x/assets/transactions/deputize/service.registry";
import * as _676 from "./modules/x/assets/transactions/mint/service.registry";
import * as _677 from "./modules/x/assets/transactions/mutate/service.registry";
import * as _678 from "./modules/x/assets/transactions/renumerate/service.registry";
import * as _679 from "./modules/x/assets/transactions/revoke/service.registry";
import * as _680 from "./modules/x/assets/transactions/send/service.registry";
import * as _681 from "./modules/x/assets/transactions/unwrap/service.registry";
import * as _682 from "./modules/x/assets/transactions/wrap/service.registry";
import * as _683 from "./modules/x/identities/transactions/define/service.registry";
import * as _684 from "./modules/x/identities/transactions/deputize/service.registry";
import * as _685 from "./modules/x/identities/transactions/issue/service.registry";
import * as _686 from "./modules/x/identities/transactions/name/service.registry";
import * as _687 from "./modules/x/identities/transactions/provision/service.registry";
import * as _688 from "./modules/x/identities/transactions/quash/service.registry";
import * as _689 from "./modules/x/identities/transactions/revoke/service.registry";
import * as _690 from "./modules/x/identities/transactions/unprovision/service.registry";
import * as _691 from "./modules/x/identities/transactions/update/service.registry";
import * as _692 from "./modules/x/metas/transactions/reveal/service.registry";
import * as _693 from "./modules/x/orders/transactions/cancel/service.registry";
import * as _694 from "./modules/x/orders/transactions/define/service.registry";
import * as _695 from "./modules/x/orders/transactions/deputize/service.registry";
import * as _696 from "./modules/x/orders/transactions/get/service.registry";
import * as _697 from "./modules/x/orders/transactions/immediate/service.registry";
import * as _698 from "./modules/x/orders/transactions/make/service.registry";
import * as _699 from "./modules/x/orders/transactions/modify/service.registry";
import * as _700 from "./modules/x/orders/transactions/put/service.registry";
import * as _701 from "./modules/x/orders/transactions/revoke/service.registry";
import * as _702 from "./modules/x/orders/transactions/take/service.registry";
import * as _703 from "./modules/x/assets/queries/asset/service.lcd";
import * as _704 from "./modules/x/assets/queries/assets/service.lcd";
import * as _705 from "./modules/x/classifications/queries/classification/service.lcd";
import * as _706 from "./modules/x/classifications/queries/classifications/service.lcd";
import * as _707 from "./modules/x/identities/queries/identities/service.lcd";
import * as _708 from "./modules/x/identities/queries/identity/service.lcd";
import * as _709 from "./modules/x/maintainers/queries/maintainer/service.lcd";
import * as _710 from "./modules/x/maintainers/queries/maintainers/service.lcd";
import * as _711 from "./modules/x/metas/queries/meta/service.lcd";
import * as _712 from "./modules/x/metas/queries/metas/service.lcd";
import * as _713 from "./modules/x/orders/queries/order/service.lcd";
import * as _714 from "./modules/x/orders/queries/orders/service.lcd";
import * as _715 from "./modules/x/splits/queries/balances/service.lcd";
import * as _716 from "./modules/x/splits/queries/split/service.lcd";
import * as _717 from "./modules/x/splits/queries/splits/service.lcd";
import * as _718 from "./modules/x/splits/queries/supply/service.lcd";
import * as _719 from "./modules/x/assets/queries/asset/service.rpc.Query";
import * as _720 from "./modules/x/assets/queries/assets/service.rpc.Query";
import * as _721 from "./modules/x/classifications/queries/classification/service.rpc.Query";
import * as _722 from "./modules/x/classifications/queries/classifications/service.rpc.Query";
import * as _723 from "./modules/x/identities/queries/identities/service.rpc.Query";
import * as _724 from "./modules/x/identities/queries/identity/service.rpc.Query";
import * as _725 from "./modules/x/maintainers/queries/maintainer/service.rpc.Query";
import * as _726 from "./modules/x/maintainers/queries/maintainers/service.rpc.Query";
import * as _727 from "./modules/x/metas/queries/meta/service.rpc.Query";
import * as _728 from "./modules/x/metas/queries/metas/service.rpc.Query";
import * as _729 from "./modules/x/orders/queries/order/service.rpc.Query";
import * as _730 from "./modules/x/orders/queries/orders/service.rpc.Query";
import * as _731 from "./modules/x/splits/queries/balances/service.rpc.Query";
import * as _732 from "./modules/x/splits/queries/split/service.rpc.Query";
import * as _733 from "./modules/x/splits/queries/splits/service.rpc.Query";
import * as _734 from "./modules/x/splits/queries/supply/service.rpc.Query";
import * as _735 from "./modules/x/assets/transactions/burn/service.rpc.msg";
import * as _736 from "./modules/x/assets/transactions/define/service.rpc.msg";
import * as _737 from "./modules/x/assets/transactions/deputize/service.rpc.msg";
import * as _738 from "./modules/x/assets/transactions/mint/service.rpc.msg";
import * as _739 from "./modules/x/assets/transactions/mutate/service.rpc.msg";
import * as _740 from "./modules/x/assets/transactions/renumerate/service.rpc.msg";
import * as _741 from "./modules/x/assets/transactions/revoke/service.rpc.msg";
import * as _742 from "./modules/x/assets/transactions/send/service.rpc.msg";
import * as _743 from "./modules/x/assets/transactions/unwrap/service.rpc.msg";
import * as _744 from "./modules/x/assets/transactions/wrap/service.rpc.msg";
import * as _745 from "./modules/x/identities/transactions/define/service.rpc.msg";
import * as _746 from "./modules/x/identities/transactions/deputize/service.rpc.msg";
import * as _747 from "./modules/x/identities/transactions/issue/service.rpc.msg";
import * as _748 from "./modules/x/identities/transactions/name/service.rpc.msg";
import * as _749 from "./modules/x/identities/transactions/provision/service.rpc.msg";
import * as _750 from "./modules/x/identities/transactions/quash/service.rpc.msg";
import * as _751 from "./modules/x/identities/transactions/revoke/service.rpc.msg";
import * as _752 from "./modules/x/identities/transactions/unprovision/service.rpc.msg";
import * as _753 from "./modules/x/identities/transactions/update/service.rpc.msg";
import * as _754 from "./modules/x/metas/transactions/reveal/service.rpc.msg";
import * as _755 from "./modules/x/orders/transactions/cancel/service.rpc.msg";
import * as _756 from "./modules/x/orders/transactions/define/service.rpc.msg";
import * as _757 from "./modules/x/orders/transactions/deputize/service.rpc.msg";
import * as _758 from "./modules/x/orders/transactions/get/service.rpc.msg";
import * as _759 from "./modules/x/orders/transactions/immediate/service.rpc.msg";
import * as _760 from "./modules/x/orders/transactions/make/service.rpc.msg";
import * as _761 from "./modules/x/orders/transactions/modify/service.rpc.msg";
import * as _762 from "./modules/x/orders/transactions/put/service.rpc.msg";
import * as _763 from "./modules/x/orders/transactions/revoke/service.rpc.msg";
import * as _764 from "./modules/x/orders/transactions/take/service.rpc.msg";
import * as _1038 from "./lcd";
import * as _1039 from "./rpc.query";
import * as _1040 from "./rpc.tx";
export namespace AssetMantle {
  export namespace modules {
    export namespace x {
      export namespace assets {
        export const genesis = {
          ..._54
        };
        export const key = {
          ..._55
        };
        export const mappable = {
          ..._56
        };
        export namespace queries {
          export const asset = {
            ..._57,
            ..._58,
            ..._59,
            ..._703,
            ..._719
          };
          export const assets = {
            ..._60,
            ..._61,
            ..._62,
            ..._704,
            ..._720
          };
        }
        export const record = {
          ..._63
        };
        export namespace transactions {
          export const burn = {
            ..._64,
            ..._65,
            ..._66,
            ..._643,
            ..._673,
            ..._735
          };
          export const define = {
            ..._67,
            ..._68,
            ..._69,
            ..._644,
            ..._674,
            ..._736
          };
          export const deputize = {
            ..._70,
            ..._71,
            ..._72,
            ..._645,
            ..._675,
            ..._737
          };
          export const mint = {
            ..._73,
            ..._74,
            ..._75,
            ..._646,
            ..._676,
            ..._738
          };
          export const mutate = {
            ..._76,
            ..._77,
            ..._78,
            ..._647,
            ..._677,
            ..._739
          };
          export const renumerate = {
            ..._79,
            ..._80,
            ..._81,
            ..._648,
            ..._678,
            ..._740
          };
          export const revoke = {
            ..._82,
            ..._83,
            ..._84,
            ..._649,
            ..._679,
            ..._741
          };
          export const send = {
            ..._85,
            ..._86,
            ..._87,
            ..._650,
            ..._680,
            ..._742
          };
          export const unwrap = {
            ..._88,
            ..._89,
            ..._90,
            ..._651,
            ..._681,
            ..._743
          };
          export const wrap = {
            ..._91,
            ..._92,
            ..._93,
            ..._652,
            ..._682,
            ..._744
          };
        }
      }
      export namespace classifications {
        export const genesis = {
          ..._94
        };
        export const key = {
          ..._95
        };
        export const mappable = {
          ..._96
        };
        export namespace queries {
          export const classification = {
            ..._97,
            ..._98,
            ..._99,
            ..._705,
            ..._721
          };
          export const classifications = {
            ..._100,
            ..._101,
            ..._102,
            ..._706,
            ..._722
          };
        }
        export const record = {
          ..._103
        };
      }
      export namespace identities {
        export const genesis = {
          ..._104
        };
        export const key = {
          ..._105
        };
        export const mappable = {
          ..._106
        };
        export namespace queries {
          export const identities = {
            ..._107,
            ..._108,
            ..._109,
            ..._707,
            ..._723
          };
          export const identity = {
            ..._110,
            ..._111,
            ..._112,
            ..._708,
            ..._724
          };
        }
        export const record = {
          ..._113
        };
        export namespace transactions {
          export const define = {
            ..._114,
            ..._115,
            ..._116,
            ..._653,
            ..._683,
            ..._745
          };
          export const deputize = {
            ..._117,
            ..._118,
            ..._119,
            ..._654,
            ..._684,
            ..._746
          };
          export const issue = {
            ..._120,
            ..._121,
            ..._122,
            ..._655,
            ..._685,
            ..._747
          };
          export const name = {
            ..._123,
            ..._124,
            ..._125,
            ..._656,
            ..._686,
            ..._748
          };
          export const provision = {
            ..._126,
            ..._127,
            ..._128,
            ..._657,
            ..._687,
            ..._749
          };
          export const quash = {
            ..._129,
            ..._130,
            ..._131,
            ..._658,
            ..._688,
            ..._750
          };
          export const revoke = {
            ..._132,
            ..._133,
            ..._134,
            ..._659,
            ..._689,
            ..._751
          };
          export const unprovision = {
            ..._135,
            ..._136,
            ..._137,
            ..._660,
            ..._690,
            ..._752
          };
          export const update = {
            ..._138,
            ..._139,
            ..._140,
            ..._661,
            ..._691,
            ..._753
          };
        }
      }
      export namespace maintainers {
        export const genesis = {
          ..._141
        };
        export const key = {
          ..._142
        };
        export const mappable = {
          ..._143
        };
        export namespace queries {
          export const maintainer = {
            ..._144,
            ..._145,
            ..._146,
            ..._709,
            ..._725
          };
          export const maintainers = {
            ..._147,
            ..._148,
            ..._149,
            ..._710,
            ..._726
          };
        }
        export const record = {
          ..._150
        };
      }
      export namespace metas {
        export const genesis = {
          ..._151
        };
        export const key = {
          ..._152
        };
        export const mappable = {
          ..._153
        };
        export namespace queries {
          export const meta = {
            ..._154,
            ..._155,
            ..._156,
            ..._711,
            ..._727
          };
          export const metas = {
            ..._157,
            ..._158,
            ..._159,
            ..._712,
            ..._728
          };
        }
        export const record = {
          ..._160
        };
        export namespace transactions {
          export const reveal = {
            ..._161,
            ..._162,
            ..._163,
            ..._662,
            ..._692,
            ..._754
          };
        }
      }
      export namespace orders {
        export const genesis = {
          ..._164
        };
        export const key = {
          ..._165
        };
        export const mappable = {
          ..._166
        };
        export namespace queries {
          export const order = {
            ..._167,
            ..._168,
            ..._169,
            ..._713,
            ..._729
          };
          export const orders = {
            ..._170,
            ..._171,
            ..._172,
            ..._714,
            ..._730
          };
        }
        export const record = {
          ..._173
        };
        export namespace transactions {
          export const cancel = {
            ..._174,
            ..._175,
            ..._176,
            ..._663,
            ..._693,
            ..._755
          };
          export const define = {
            ..._177,
            ..._178,
            ..._179,
            ..._664,
            ..._694,
            ..._756
          };
          export const deputize = {
            ..._180,
            ..._181,
            ..._182,
            ..._665,
            ..._695,
            ..._757
          };
          export const get = {
            ..._183,
            ..._184,
            ..._185,
            ..._666,
            ..._696,
            ..._758
          };
          export const immediate = {
            ..._186,
            ..._187,
            ..._188,
            ..._667,
            ..._697,
            ..._759
          };
          export const make = {
            ..._189,
            ..._190,
            ..._191,
            ..._668,
            ..._698,
            ..._760
          };
          export const modify = {
            ..._192,
            ..._193,
            ..._194,
            ..._669,
            ..._699,
            ..._761
          };
          export const put = {
            ..._195,
            ..._196,
            ..._197,
            ..._670,
            ..._700,
            ..._762
          };
          export const revoke = {
            ..._198,
            ..._199,
            ..._200,
            ..._671,
            ..._701,
            ..._763
          };
          export const take = {
            ..._201,
            ..._202,
            ..._203,
            ..._672,
            ..._702,
            ..._764
          };
        }
      }
      export namespace splits {
        export const genesis = {
          ..._204
        };
        export const key = {
          ..._205
        };
        export const mappable = {
          ..._206
        };
        export namespace queries {
          export const balances = {
            ..._207,
            ..._208,
            ..._209,
            ..._715,
            ..._731
          };
          export const split = {
            ..._210,
            ..._211,
            ..._212,
            ..._716,
            ..._732
          };
          export const splits = {
            ..._213,
            ..._214,
            ..._215,
            ..._717,
            ..._733
          };
          export const supply = {
            ..._216,
            ..._217,
            ..._218,
            ..._718,
            ..._734
          };
        }
        export const record = {
          ..._219
        };
      }
    }
  }
  export namespace schema {
    export namespace data {
      export const base = {
        ..._220,
        ..._221,
        ..._222,
        ..._223,
        ..._224,
        ..._225,
        ..._226,
        ..._227,
        ..._228,
        ..._229,
        ..._230
      };
    }
    export namespace documents {
      export const base = {
        ..._231
      };
    }
    export namespace ids {
      export const base = {
        ..._232,
        ..._233,
        ..._234,
        ..._235,
        ..._236,
        ..._237,
        ..._238,
        ..._239,
        ..._240,
        ..._241,
        ..._242
      };
    }
    export namespace lists {
      export const base = {
        ..._243,
        ..._244,
        ..._245
      };
    }
    export namespace parameters {
      export const base = {
        ..._246
      };
    }
    export namespace properties {
      export const base = {
        ..._247,
        ..._248,
        ..._249
      };
    }
    export namespace qualified {
      export const base = {
        ..._250,
        ..._251
      };
    }
    export namespace types {
      export const base = {
        ..._252,
        ..._253
      };
    }
  }
  export const ClientFactory = {
    ..._1038,
    ..._1039,
    ..._1040
  };
}