---
title: "ABAPSET_LOCKS_ENTITY"
description: |
  ABAPSET_LOCKS_ENTITY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_LOCKS_ENTITY.htm"
abapFile: "ABAPSET_LOCKS_ENTITY.html"
keywords: ["delete", "if", "class", "internal-table", "ABAPSET", "LOCKS", "ENTITY"]
---

```SET LOCKS ENTITY entity FROM inst [[`` `response_param` ``](ABAPEML_RESPONSE.html)].```

[`... response_param.`](#ABAP_ONE_ADD@1@)

Used to exclusively lock instances of a single RAP BO entity.

The entity name `entity` can be specified directly. The entity name must be the full entity name and cannot be an alias name because the context of a RAP BO is unknown.

`inst` is an internal table specifying the instances that are to be locked. The table must be typed with the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html)\\ [`TYPE TABLE FOR KEY OF`](ABAPTYPE_TABLE_FOR.html). It can be constructed in an operand position using [constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html), for example with the [value operator](ABENVALUE_OPERATOR_GLOSRY.html) (`VALUE`) and other [constructor operators](ABENCONSTRUCTOR_EXPRESSIONS.html) to fill the internal table with instances as input parameters after the keyword `FROM`.

The addition [`response_param`](ABAPEML_RESPONSE.html) represents the response parameters that can be specified.

The internal table `inst` can also be typed with the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html)\\ [`TYPE TABLE FOR LOCK`](ABAPTYPE_TABLE_FOR.html).

The class `CL_DEMO_RAP_EML_SET_LOCKS` covers all forms of the `SET LOCKS` statement. It accesses a RAP BO using [EML](ABENEML_GLOSRY.html) and creates several BO instances. A `SET LOCKS` statement follows that exclusively locks instances via the keys. The following `SET LOCKS` statement (short form) is used at the beginning of the example:

The following image shows the global lock table (transaction `SM12`) during the transaction, before the `ROLLBACK ENTITIES` statement is executed. The newly created instances are locked. After the `ROLLBACK ENTITIES` statement is executed, the entries are automatically deleted from the lock table.

SET LOCKS ENTITY demo\_managed\_root \\n FROM VALUE #( ( key\_field = 1 ) \\n ( key\_field = 2 ) ) \\n FAILED FINAL(lt\_failed1) \\n REPORTED FINAL(lt\_reported1). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapset\_locks.html