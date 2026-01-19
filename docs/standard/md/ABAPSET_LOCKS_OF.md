---
title: "ABAPSET_LOCKS_OF"
description: |
  ABAPSET_LOCKS_OF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_LOCKS_OF.htm"
abapFile: "ABAPSET_LOCKS_OF.html"
keywords: ["insert", "if", "try", "class", "internal-table", "ABAPSET", "LOCKS"]
---

`SET LOCKS OF bdef`\\ 
   `ENTITY entity1 FROM inst1`\\ 
  `[ENTITY entity2 FROM inst2]`\\ 
  `[...]`\\ 
  ```[[`` `response_param` ``](ABAPEML_RESPONSE.html)].```

[`... response_param.`](#ABAP_ONE_ADD@1@)

The long form of the `SET LOCKS` statement is used to exclusively lock instances of multiple RAP BO entities.

`bdef` must be a root entity followed by a list of locks grouped by individual entities. `entity1`, `entity2`, and so on, must be entities contained in the [composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) of the root entity `bdef`. The root entity itself can also be inserted in the position of `entity1`, for example. Each part of the list specified after `SET LOCKS OF bdef` has the same syntax as the [short form](ABAPSET_LOCKS_ENTITY.html). At least one entry (`ENTITY bdef1 FROM inst`) must be specified. The root entity name in the position of the first statement, `SET LOCKS OF bdef`, must be the full entity name. `entity1`, and so on, should be the entity alias names if provided in the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). Using the full entity name will cause a warning. If the root entity is used in the list of operations, its alias name, if defined in the BDEF, should be used as well.

`inst1`, `inst2`, and so on, are internal tables specifying the instances that are to be locked. The tables must be typed with the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html)\\ [`TYPE TABLE FOR KEY OF`](ABAPTYPE_TABLE_FOR.html). They can be constructed in an operand position using [constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html), for example with the [value operator](ABENVALUE_OPERATOR_GLOSRY.html) (`VALUE`) and other [constructor operators](ABENCONSTRUCTOR_EXPRESSIONS.html) to fill the internal tables with instances as input parameters after the keyword `FROM`.

The addition [`response_param`](ABAPEML_RESPONSE.html) represents the response parameters that can be specified.

The internal tables `inst1`, `inst2`, and so on, can also be typed with the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html)\\ [`TYPE TABLE FOR LOCK`](ABAPTYPE_TABLE_FOR.html).

The class `CL_DEMO_RAP_EML_SET_LOCKS` covers all forms of the `SET LOCKS` statement. It accesses a RAP BO using [EML](ABENEML_GLOSRY.html) and creates multiple BO instances. A `SET LOCKS` statement follows that exclusively locks instances via the keys. The following `SET LOCKS` statement (long form) is used in the middle of the example:

The following image shows the global lock table (transaction `SM12`) during the transaction, before the `ROLLBACK ENTITIES` statement is executed. The newly created instances are locked, and they are automatically removed from the lock table after the `ROLLBACK ENTITIES` statement is executed.

SET LOCKS OF demo\_managed\_root \\n ENTITY demo\_managed\_root \\n FROM VALUE #( ( key\_field = 4 ) ) \\n ENTITY child \\n FROM VALUE #( ( key\_field = 6 ) ) \\n FAILED FINAL(lt\_failed2) \\n REPORTED FINAL(lt\_reported2). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapset\_locks.html