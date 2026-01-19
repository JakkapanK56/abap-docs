---
title: "ABAPREAD_ENTITIES_LONG"
description: |
  ABAPREAD_ENTITIES_LONG - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREAD_ENTITIES_LONG.htm"
abapFile: "ABAPREAD_ENTITIES_LONG.html"
keywords: ["insert", "do", "if", "try", "types", "ABAPREAD", "ENTITIES", "LONG"]
---

```READ ENTITIES OF bdef [[`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html)|[[`` `FORWARDING` ``](ABAPEML_PRIVILEGED.html)]\ [`` `PRIVILEGED` ``](ABAPEML_PRIVILEGED.html)]\           ENTITY entity1 [`operations`](ABAPREAD_ENTITY_ENTITIES_OP.html)\          [ENTITY entity2 [`operations`](ABAPREAD_ENTITY_ENTITIES_OP.html)]\          [...]\          [[`` `response_param` ``](ABAPEML_RESPONSE.html)].```

[1. `... IN LOCAL MODE ...`](#ABAP_ADDITION_1@3@)

[2. `... [FORWARDING] PRIVILEGED ...`](#ABAP_ADDITION_2@3@)

[3. `... response_param.`](#ABAP_ADDITION_3@3@)

The long syntax form of the `READ` statement is used to collect multiple read operations ([`operations`](ABAPREAD_ENTITY_ENTITIES_OP.html)) on multiple entities of a RAP BO. Yet, it can also be used to just read from a single entity of a RAP BO.

`bdef` must be a root entity followed by a list of operations grouped by individual entities. `entity1`, `entity2`, and so on, must be entities contained in the composition tree of the root entity `bdef`. The root entity itself can also be inserted in the position of `entity1`, for example. Each part of the list of operations specified after `READ ENTITIES OF bdef` has the same syntax as the [short form](ABAPREAD_ENTITY_SHORT.html). At least one entry (`ENTITY entity1` with the operation) must be specified. The same entity can be specified after `ENTITY` only once for a read operation. The root entity name can be used more than once but only in the context of [read-by-association operations](ABENRAP_RBA_OPERATION_GLOSRY.html) or executing actions, for example as follows:
`READ ENTITIES OF bdef`\\
`ENTITY bdef ...`\\
`ENTITY bdef BY \\_assoc1 ...`\\
`ENTITY bdef BY \\_assoc2 ...`\\
`...`

The root entity name in the position of the first statement, `READ ENTITIES OF bdef`, must be the full entity name. `entity1`, and so on, should be the entity alias names if provided in the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). Using the full entity name will cause a warning. If the root entity is used in the list of operations, its alias name, if defined in the BDEF, should be used as well.

The addition [`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html) is used to exclude [feature controls](ABENBDL_ACTIONS_FC.html) and [authorization checks](ABENBDL_AUTHORIZATION.html). It can only be used within the RAP BO runtime implementation.

When specifying the `REPORTED` response parameter for an ABAP EML `READ` request, the related [RAP state messages](ABENRAP_STATE_MES_GLOSRY.html) of the instances and child entities of a [CDS composition](ABENCDS_COMPOSITION_GLOSRY.html) are returned for the instances with the keys specified. This leads to increased runtime and, usually, retrieving the messages of the `REPORTED` response parameter for read requests is not required. If the read request is triggered by a [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) and an entity instance contains a state message, the component [`%state_area`](ABAPDERIVED_TYPES_STATE_AREA.html) of the `REPORTED` response contains `%STATE` as an indicator for state messages. When using ABAP EML `READ` statements with the addition `IN LOCAL MODE` in behavior implementations, the original value of `%state_area` can be retrieved. See the example [RAP Messages: Transition and State Messages](ABENRAP_MESSAGES_ABEXA.html).

The addition [`PRIVILEGED`](ABAPEML_PRIVILEGED.html) is used for a privileged access to a RAP BO, i. e. the RAP BO runtime does not perform certain authorization checks. As a prerequisite, `privileged` must be specified in the BDEF.

The addition [`response_param`](ABAPEML_RESPONSE.html) represents the response parameters that can be specified.

The following source code section taken from `CL_DEMO_RAP_EML_READ` demonstrates an EML `READ ENTITIES` statement.

-   The example [ABAP EML - `READ`, Variants](ABENEML_READ_ALTERNATIVES_ABEXA.html) demonstrates this `READ` variant with a simple managed RAP BO.
-   For more examples on `READ` operations in general, see [Examples for ABAP EML `READ`](ABAPEML_READ_EXAMPLES_ABEXAS.html).

READ ENTITIES OF demo\_spfli\_flights \\n ENTITY demo\_spfli\_flights \\n ALL FIELDS WITH VALUE #( ( %key-Carrid = 'SQ' \\n %key-connid = 67 ) ) \\n RESULT FINAL(read\_entities\_of) \\n ENTITY sflight \\n ALL FIELDS WITH \\n VALUE #( ( %key-Carrid = 'AA' \\n %key-connid = 17 Fldate = '20170125' ) ) \\n RESULT FINAL(read\_entities\_child) \\n ENTITY demo\_spfli\_flights \\n BY \\\\\_Flights \\n ALL FIELDS WITH \\n VALUE #( ( %key-Carrid = 'AZ' \\n %key-connid = 791 ) ) \\n RESULT FINAL(rba2) \\n FAILED FINAL(read\_entities\_failed). \\nIF read\_entities\_failed-demo\_spfli\_flights IS NOT INITIAL. \\n ... \\nENDIF. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapread\_entity\_entities.html