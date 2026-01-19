---
title: "ABAPMODIFY_ENTITIES_LONG"
description: |
  ABAPMODIFY_ENTITIES_LONG - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMODIFY_ENTITIES_LONG.htm"
abapFile: "ABAPMODIFY_ENTITIES_LONG.html"
keywords: ["insert", "update", "delete", "do", "if", "case", "try", "method", "data", "ABAPMODIFY", "ENTITIES", "LONG"]
---

```MODIFY ENTITIES OF bdef [[`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html)|[[`` `FORWARDING` ``](ABAPEML_PRIVILEGED.html)]\ [`` `PRIVILEGED` ``](ABAPEML_PRIVILEGED.html)]\             ENTITY entity1 [`operations`](ABAPMODIFY_ENTITY_ENTITIES_OP.html)\            [ENTITY entity2 [`operations`](ABAPMODIFY_ENTITY_ENTITIES_OP.html)]\            [...]\            [[`` `response_param` ``](ABAPEML_RESPONSE.html)].```

[1. `... IN LOCAL MODE ...`](#ABAP_ADDITION_1@3@)

[2. `... [FORWARDING] PRIVILEGED ...`](#ABAP_ADDITION_2@3@)

[3. `... response_param.`](#ABAP_ADDITION_3@3@)

The long form of the `MODIFY` statement is used for executing multiple modify operations ([`operations`](ABAPMODIFY_ENTITY_ENTITIES_OP.html)) on multiple entities of a RAP BO. However, it can also be used for a single operation on a single RAP BO.

`bdef` must be a [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html) followed by a list of operations grouped by individual entities. `entity1`, `entity2`, and so on, must be entities contained in the [composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) of the root entity `bdef`. If specified in the BDEF, alias names should be used for `entity1`, `entity2`, and so on. The root entity itself can also be inserted in the position of `bdef1`, for example. Each part of the list of operations specified after `MODIFY ENTITIES OF bdef` has the same syntax as the short form. At least one entry (`ENTITY bdef/entity1/...` with an operation) must be specified. The same entity can be specified after `ENTITY` repeatedly, however, the same operation in that combination is allowed only once.

A [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) must not use ABAP EML `MODIFY` statements in the [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html)\\ [`check_before_save`](ABENSAVER_CHECK_BEFORE_SAVE.html), [`adjust_numbers`](ABENSAVER_ADJUST_NUMBERS.html), [`save`](ABENSAVER_METHOD_SAVE.html), [`save_modified`](ABAPRAP_SAVER_METH_SAVE_MODIFIED.html) and [`cleanup`](ABENSAVER_METHOD_CLEANUP.html). The statements can only be used in the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html) and in the [`finalize`](ABENSAVER_FINALIZE.html) saver method in the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html). Furthermore, ABAP EML `MODIFY` statements are not allowed in read-only [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html).

The addition [`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html) is used to exclude [feature controls](ABENBDL_ACTIONS_FC.html) and [authorization checks](ABENBDL_AUTHORIZATION.html). It can only be used within the RAP BO runtime implementation.

In case of a non-dynamic ABAP EML `MODIFY` statement without the addition `IN LOCAL MODE` and without specifying the `FAILED` response parameter, it is recommended that the `FAILED` response parameter is specified and that proper error handling on the [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) side is implemented. Otherwise, a syntax warning occurs, which can be suppressed using the pragma `##EML_FAILED_MISSING_OK`.

The addition [`PRIVILEGED`](ABAPEML_PRIVILEGED.html) is used for a privileged access to a RAP BO, i. e. the RAP BO runtime does not perform certain authorization checks. As a prerequisite, `privileged` must be specified in the BDEF.

The addition [`response_param`](ABAPEML_RESPONSE.html) represents the response parameters that can be specified.

The following source code section taken from `CL_DEMO_RAP_EML_MODIFY` demonstrates an EML `MODIFY ENTITIES OF` statement that includes `CREATE`, `UPDATE` and create-by-association operations.

The root entity name in the position of the first statement, `MODIFY ENTITIES OF bdef`, must be the full entity name. `entity1`, and so on, should be the entity alias names if provided in the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). Using the full entity name will cause a warning. If the root entity is used in the list of operations, its alias name, if defined in the BDEF, should be used as well.

For example, an alias name is specified for root and child entity as in the BDEF `DEMO_RAP_MANAGED_GROUP`. A statement with `MODIFY ENTITIES OF` could be as follows:

-   The example [ABAP EML - `MODIFY`, Variants](ABENEML_MODIFY_ALTERNATIVES_ABEXA.html) demonstrates this `MODIFY` variant with a simple managed RAP BO.
-   For more examples on `MODIFY` operations in general, see [Examples for ABAP EML `MODIFY`](ABAPEML_MODIFY_EXAMPLES_ABEXAS.html).

MODIFY ENTITIES OF demo\_managed\_root \\n ENTITY demo\_managed\_root \\n CREATE FIELDS ( key\_field data\_field1\_root \\n data\_field2\_root ) WITH VALUE #( \\n ( %cid = 'cid5' \\n key\_field = 3 \\n data\_field1\_root = 'iii' \\n data\_field2\_root = 'jjj' ) \\n ( %cid = 'cid6' \\n key\_field = 4 \\n data\_field1\_root = 'kkk' \\n data\_field2\_root = 'lll' ) ) \\n ENTITY demo\_managed\_root \\n UPDATE FIELDS ( data\_field1\_root \\n data\_field2\_root ) WITH VALUE #( \\n ( %cid\_ref = 'cid6' \\n data\_field1\_root = 'mmm' \\n data\_field2\_root = 'nnn' ) ) \\n ENTITY demo\_managed\_root \\n CREATE BY \\\\\_child FIELDS ( data\_field1\_child \\n data\_field2\_child ) WITH VALUE #( \\n ( %cid\_ref = 'cid5' \\n %target = VALUE #( ( %cid = 'cid7' \\n data\_field1\_child = 'eee' \\n data\_field2\_child = 'fff' ) \\n ) ) \\n ( %cid\_ref = 'cid6' \\n %target = VALUE #( ( %cid = 'cid8' \\n data\_field1\_child = 'ggg' \\n data\_field2\_child = 'hhh' ) \\n ) ) ) \\n ENTITY child \\n UPDATE FIELDS ( data\_field1\_child \\n data\_field2\_child ) WITH VALUE #( \\n ( %cid\_ref = 'cid8' \\n data\_field1\_child = 'ooo' \\n data\_field2\_child = 'ppp' ) ) \\n FAILED FINAL(fail\_mod) \\n REPORTED FINAL(rep\_mod) \\n MAPPED FINAL(map\_mod). MODIFY ENTITIES OF demo\_rap\_managed\_group \\n ENTITY RootEntity \\n CREATE FIELDS ( keyfieldroot charfieldroot datafieldroot ) \\n WITH VALUE #( \\n ( %cid = 'cid1' keyfieldroot = 1 \\n datafieldroot = 'aaa' charfieldroot = 'bbb' ) \\n ( %cid = 'cid2' keyfieldroot = 2 \\n datafieldroot = 'ccc' charfieldroot = 'ddd' ) \\n ) \\n ENTITY ChildEntity \\n DELETE FROM VALUE #( \\n ( keyfield = 3 keyfieldchild = 4 ) \\n ( keyfield = 5 keyfieldchild = 6 ) \\n ). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapmodify\_entity\_entities.html