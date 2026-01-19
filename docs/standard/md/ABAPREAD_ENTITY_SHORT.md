---
title: "ABAPREAD_ENTITY_SHORT"
description: |
  ABAPREAD_ENTITY_SHORT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREAD_ENTITY_SHORT.htm"
abapFile: "ABAPREAD_ENTITY_SHORT.html"
keywords: ["do", "if", "case", "types", "ABAPREAD", "ENTITY", "SHORT"]
---

```READ ENTITY [[`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html)|[[`` `FORWARDING` ``](ABAPEML_PRIVILEGED.html)]\ [`` `PRIVILEGED` ``](ABAPEML_PRIVILEGED.html)] entity [`operations`](ABAPREAD_ENTITY_ENTITIES_OP.html)\ [[`` `response_param` ``](ABAPEML_RESPONSE.html)].```

[1. `... IN LOCAL MODE ...`](#ABAP_ADDITION_1@3@)

[2. `... [FORWARDING] PRIVILEGED ...`](#ABAP_ADDITION_2@3@)

[3. `... response_param.`](#ABAP_ADDITION_3@3@)

The short form of the `READ` statement is used for read operations ([`operations`](ABAPREAD_ENTITY_ENTITIES_OP.html)) from a single RAP BO entity only. The entity name (`entity`) can be specified directly, that is, reading from a child entity can also be done directly and not via the [root entity](ABENROOT_ENTITY_GLOSRY.html) of a RAP BO. In this case, `entity` must be the full entity name and cannot be an alias name because the context of a RAP BO is unknown. It is possible to include all three read options in one operation per entity `entity`: [read operation](ABENRAP_READ_OPERATION_GLOSRY.html), [read-by-association operation](ABENRAP_RBA_OPERATION_GLOSRY.html) and an operation executing a function, but only one of each kind within the same `READ ENTITY` statement.

The addition [`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html) is used to exclude [feature controls](ABENBDL_ACTIONS_FC.html) and [authorization checks](ABENBDL_AUTHORIZATION.html). It can only be used within the RAP BO runtime implementation.

When specifying the `REPORTED` response parameter for an ABAP EML `READ` request, the related [RAP state messages](ABENRAP_STATE_MES_GLOSRY.html) of the instances and child entities of a [CDS composition](ABENCDS_COMPOSITION_GLOSRY.html) are returned for the instances with the keys specified. This leads to increased runtime and, usually, retrieving the messages of the `REPORTED` response parameter for read requests is not required. If the read request is triggered by a [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) and an entity instance contains a state message, the component [`%state_area`](ABAPDERIVED_TYPES_STATE_AREA.html) of the `REPORTED` response contains `%STATE` as an indicator for state messages. When using ABAP EML `READ` statements with the addition `IN LOCAL MODE` in behavior implementations, the original value of `%state_area` can be retrieved. See the example [RAP Messages: Transition and State Messages](ABENRAP_MESSAGES_ABEXA.html).

The addition [`PRIVILEGED`](ABAPEML_PRIVILEGED.html) is used for a privileged access to a RAP BO, i. e. the RAP BO runtime does not perform certain authorization checks. As a prerequisite, `privileged` must be specified in the BDEF.

The addition [`response_param`](ABAPEML_RESPONSE.html) represents the response parameters that can be specified.

The following source code section taken from `CL_DEMO_RAP_EML_READ` demonstrates an EML `READ ENTITY` statement.

-   The example [ABAP EML - `READ`, Variants](ABENEML_READ_ALTERNATIVES_ABEXA.html) demonstrates this `READ` variant with a simple managed RAP BO.
-   For more examples on `READ` operations, refer to [Examples for ABAP EML `READ`](ABAPEML_READ_EXAMPLES_ABEXAS.html).

READ ENTITY demo\_spfli\_flights \\nALL FIELDS WITH VALUE #( ( %key-carrid = 'LH' \\n %key-connid = 2407 ) ) \\n RESULT FINAL(read\_entity) \\n FAILED FINAL(read\_failed). \\nIF read\_failed-demo\_spfli\_flights IS NOT INITIAL. \\n "... \\n RETURN. \\nENDIF. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapread\_entity\_entities.html