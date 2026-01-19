---
title: "ABAPMODIFY_ENTITY_SHORT"
description: |
  ABAPMODIFY_ENTITY_SHORT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMODIFY_ENTITY_SHORT.htm"
abapFile: "ABAPMODIFY_ENTITY_SHORT.html"
keywords: ["insert", "do", "if", "case", "method", "class", "data", "ABAPMODIFY", "ENTITY", "SHORT"]
---

```MODIFY ENTITY [[`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html)|[[`` `FORWARDING` ``](ABAPEML_PRIVILEGED.html)]\ [`` `PRIVILEGED` ``](ABAPEML_PRIVILEGED.html)] entity [`operations`](ABAPMODIFY_ENTITY_ENTITIES_OP.html)\ [[`` `response_param` ``](ABAPEML_RESPONSE.html)].```

[1. `... IN LOCAL MODE ...`](#ABAP_ADDITION_1@3@)

[2. `... [FORWARDING] PRIVILEGED ...`](#ABAP_ADDITION_2@3@)

[3. `... response_param.`](#ABAP_ADDITION_3@3@)

The short form of the `MODIFY` statement is used to perform transactional modify operations ([`operations`](ABAPMODIFY_ENTITY_ENTITIES_OP.html)) for a single RAP BO node.

`entity` can be any node of the RAP BO when the statement is used within the implementation class. If the statement is used outside of the implementation class, `entity` can only be the [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html). `entity` must be the full entity name and cannot be an alias name. It is also possible to specify any node of the RAP BO following the root entity name and `\\\\`:

MODIFY ENTITY root\_entity\\\\\\\\\\bdef\_node1 ... \\nMODIFY ENTITY root\_entity\\\\\\\\\\bdef\_node2 ... \\n...

`bdef_node1`, `bdef_node2`, and so on, must be the alias names if provided in the BDEF. Otherwise, the full names must be inserted.

Multiple operations can be inserted for `operations` within a single `MODIFY` statement.

A [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) must not use ABAP EML `MODIFY` statements in the [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html)\\ [`check_before_save`](ABENSAVER_CHECK_BEFORE_SAVE.html), [`adjust_numbers`](ABENSAVER_ADJUST_NUMBERS.html), [`save`](ABENSAVER_METHOD_SAVE.html), [`save_modified`](ABAPRAP_SAVER_METH_SAVE_MODIFIED.html) and [`cleanup`](ABENSAVER_METHOD_CLEANUP.html). The statements can only be used in the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html) and in the [`finalize`](ABENSAVER_FINALIZE.html) saver method in the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html). Furthermore, ABAP EML `MODIFY` statements are not allowed in read-only [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html).

The addition [`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html) is used to exclude [feature controls](ABENBDL_ACTIONS_FC.html) and [authorization checks](ABENBDL_AUTHORIZATION.html). It can only be used within the RAP BO runtime implementation.

In case of a non-dynamic ABAP EML `MODIFY` statement without the addition `IN LOCAL MODE` and without specifying the `FAILED` response parameter, it is recommended that the `FAILED` response parameter is specified and that proper error handling on the [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) side is implemented. Otherwise, a syntax warning occurs, which can be suppressed using the pragma `##EML_FAILED_MISSING_OK`.

The addition [`PRIVILEGED`](ABAPEML_PRIVILEGED.html) is used for a privileged access to a RAP BO, i. e. the RAP BO runtime does not perform certain authorization checks. As a prerequisite, `privileged` must be specified in the BDEF.

The addition [`response_param`](ABAPEML_RESPONSE.html) represents the response parameters that can be specified.

The following source code section taken from `CL_DEMO_RAP_EML_MODIFY` demonstrates an EML `MODIFY ENTITY` statement that includes a `CREATE` and create-by-association operation.

-   The example [ABAP EML - `MODIFY`, Variants](ABENEML_MODIFY_ALTERNATIVES_ABEXA.html) demonstrates this `MODIFY` variant with a simple managed RAP BO.
-   For more examples on `MODIFY` operations in general, see [Examples for ABAP EML `MODIFY`](ABAPEML_MODIFY_EXAMPLES_ABEXAS.html).

MODIFY ENTITY demo\_managed\_root \\n CREATE FIELDS ( key\_field data\_field1\_root \\n data\_field2\_root ) WITH VALUE #( \\n ( %cid = 'cid1' key\_field = 1 \\n data\_field1\_root = 'aaa' data\_field2\_root = 'bbb' ) \\n ( %cid = 'cid2' key\_field = 2 \\n data\_field1\_root = 'ccc' data\_field2\_root = 'ddd' ) ) \\n CREATE BY \\\\\_child FIELDS ( data\_field1\_child \\n data\_field2\_child ) WITH VALUE #( \\n ( %cid\_ref = 'cid1' \\n %target = VALUE #( ( %cid = 'cid3' \\n data\_field1\_child = 'eee' \\n data\_field2\_child = 'fff' ) \\n ) ) \\n ( %cid\_ref = 'cid2' \\n %target = VALUE #( ( %cid = 'cid4' \\n data\_field1\_child = 'ggg' \\n data\_field2\_child = 'hhh' ) \\n ) ) \\n ) \\n FAILED FINAL(fail\_mod) \\n REPORTED FINAL(rep\_mod) \\n MAPPED FINAL(map\_mod). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapmodify\_entity\_entities.html