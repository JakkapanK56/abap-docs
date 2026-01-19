---
title: "ABAPSET_LOCKS_DYN"
description: |
  ABAPSET_LOCKS_DYN - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPSET_LOCKS_DYN.htm"
abapFile: "ABAPSET_LOCKS_DYN.html"
keywords: ["delete", "if", "class", "data", "internal-table", "ABAPSET", "LOCKS", "DYN"]
---

```SET LOCKS lock_tab [[`` `response_param` ``](ABAPEML_RESPONSE.html)].```

[`... response_param`](#ABAP_ONE_ADD@1@)

The dynamic form of the `SET LOCKS` statement is used to collect instances of multiple RAP BO entities that are to be locked exclusively in one single `SET LOCKS` statement.

`lock_tab` must be an internal table of type `ABP_BEHV_LOCKS_TAB`. This table has specific components:

The addition [`response_param`](ABAPEML_RESPONSE.html) represents the response parameters that can be specified. When used in the context of the dynamic form of the ABAP EML statement, the parameters must be internal tables typed with `ABP_BEHV_RESPONSE_TAB`.

The internal tables that are referenced to within `lock_tab` as parameters of `INSTANCES` can also be typed with the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html)\\ [`TYPE TABLE FOR LOCK`](ABAPTYPE_TABLE_FOR.html).

The class `CL_DEMO_RAP_EML_SET_LOCKS` covers all forms of the `SET LOCKS` statement. It accesses a RAP BO using [EML](ABENEML_GLOSRY.html) and creates multiple BO instances. A `SET LOCKS` statement follows that exclusively locks instances via the keys. The following `SET LOCKS` statement (dynamic form) is used at the end of the example:

The following image shows the global lock table (transaction `SM12`) during the transaction, before the `ROLLBACK ENTITIES` statement is executed. The newly created instances are locked. After the `ROLLBACK ENTITIES` statement is executed, the entries are automatically deleted from the lock table.

DATA inst TYPE TABLE FOR KEY OF demo\_managed\_root. \\nDATA inst2 TYPE TABLE FOR KEY OF demo\_managed\_child. \\n\\ \\ninst = VALUE #( ( key\_field = 7 ) ). \\ninst2 = VALUE #( ( key\_field = 9 ) \\n ( key\_field = 10 ) ). \\n\\ \\nFINAL(lt\_lock) = VALUE abp\_behv\_locks\_tab( \\n ( entity\_name = 'DEMO\_MANAGED\_ROOT' instances = REF #( inst ) ) \\n ( entity\_name = 'DEMO\_MANAGED\_CHILD' instances = REF #( inst2 ) ) ). \\n\\ \\nSET LOCKS lt\_lock FAILED FINAL(lt\_failed3) \\n REPORTED FINAL(lt\_reported3). **Component** **Details**\\ `entity_name` Specifies the name of the RAP BO entity for which exclusive locking is intended. The name must be provided using capital letters. `instances` Specifies a reference to an internal table that is typed with the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html)\\ [`TYPE TABLE FOR KEY OF`](ABAPTYPE_TABLE_FOR.html). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapset\_locks.html