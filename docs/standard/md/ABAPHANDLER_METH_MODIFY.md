---
title: "ABAPHANDLER_METH_MODIFY"
description: |
  ABAPHANDLER_METH_MODIFY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPHANDLER_METH_MODIFY.htm"
abapFile: "ABAPHANDLER_METH_MODIFY.html"
keywords: ["select", "update", "delete", "do", "if", "method", "class", "data", "types", "internal-table", "ABAPHANDLER", "METH", "MODIFY"]
---

**Handler method definitions:**

```[`METHODS`](ABAPMETHODS.html) meth [[`FINAL`](ABAPMETHODS_ABSTRACT_FINAL.html)]\     FOR MODIFY     [[`` `IMPORTING` ``](ABAPMETHODS_GENERAL.html)]\ \{\ [`` `REFERENCE` ``](ABAPMETHODS_PARAMETERS.html)(im_par_mod) | im_par_mod \}\     FOR \{ CREATE bdef \}\       |\ \{ CREATE bdef\\_assoc \}\       |\ \{ UPDATE bdef \}\       |\ \{ DELETE bdef \}\       |\ \{ ACTION bdef~action            [REQUEST \{\ [`` `REFERENCE` ``](ABAPMETHODS_PARAMETERS.html)(req_act) | req_act \}\ ]\            [RESULT \{\ [`` `REFERENCE` ``](ABAPMETHODS_PARAMETERS.html)(res_act) | res_act \}]\ \}\       |\ \{ ACTION \{ bdef~activate                  | bdef~additionalsave                  | bdef~edit                  | bdef~discard                  | bdef~resume \}\ \}\     [[`` `CHANGING` ``](ABAPMETHODS_GENERAL.html)\ \{\ [`failed` TYPE [`` `data` ``](ABENBUILT_IN_TYPES_GENERIC.html)]\ [`reported` TYPE [`` `data` ``](ABENBUILT_IN_TYPES_GENERIC.html)]\ [`mapped` TYPE [`` `data` ``](ABENBUILT_IN_TYPES_GENERIC.html)]\ \}].```

[1. `... CREATE bdef ...`](#ABAP_VARIANT_1@1@)

[2. `... CREATE bdef\\_assoc ...`](#ABAP_VARIANT_2@1@)

[3. `... UPDATE ...`](#ABAP_VARIANT_3@1@)

[4. `... DELETE ...`](#ABAP_VARIANT_4@1@)

[5. `... ACTION bdef~action ...`](#ABAP_VARIANT_5@1@)

[6. `... ACTION bdef~additionalsave ...`](#ABAP_VARIANT_6@1@)

[7. `... ACTION bdef~activate ...`](#ABAP_VARIANT_7@1@)

[8. `... ACTION bdef~edit ...`](#ABAP_VARIANT_8@1@)

[9. `... ACTION bdef~discard ...`](#ABAP_VARIANT_9@1@)

[10. `... ACTION bdef~resume ...`](#ABAP_VARIANT_10@1@)

[1. `... REQUEST ...`](#ABAP_ADDITION_1@3@)

[2. `... RESULT ...`](#ABAP_ADDITION_2@3@)

[3. `... CHANGING ...`](#ABAP_ADDITION_3@3@)

[Handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) that are used for changing operations on [RAP BO entities](ABENRAP_BO_ENTITY_GLOSRY.html) and [operation augmentation](ABENBDL_AUGMENT_PROJECTION.html). They must be defined and implemented in a [handler class](ABENABP_HANDLER_CLASS_GLOSRY.html) of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). A single method can include multiple, different operations during one processing step. The method name `meth` can be chosen freely except for the draft-related methods. `bdef` is the name or the alias of the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html), `assoc` the name of the association, and `action` the name of an action. It is possible to combine operations in one method.

Handles create operations.

See more details and the required BDEF specifications for the variant in the following topics:

Method parameters:

Handles [create-by-association operations](ABENRAP_CBA_OPERATION_GLOSRY.html).

See more details and the required BDEF specifications for the variant in the following topics:

Method parameters:

Handles update operations.

See more details and the required BDEF specifications for the variant in the following topics:

Method parameters:

Handles delete operations.

See more details and the required BDEF specifications for the variant in the following topic: [RAP BDL - standard operations](ABENBDL_STANDARD_OPERATIONS.html).

Method parameters:

Handles actions.

See more details and the required BDEF specifications for the variant in the following topics:

Method parameters:

Handles the [RAP BO draft action](ABENRAP_BO_DRAFT_ACTION_GLOSRY.html)\\ `additionalsave`. The name `additionalsave` is predefined. The method cannot be directly called using an ABAP EML statement and is not exposed with OData. It is called on commit.

The method implementation provides a dedicated save exit for draft instances, for example, for external draft persistencies that are available in parallel with the internally managed draft persistence.

The following restrictions currently apply:

See the required BDEF specifications for the variant in the topic [draft action](ABENBDL_DRAFT_ACTION.html).

Method parameters:

Handles the `activate` action in [draft](ABENBDL_WITH_DRAFT.html) scenarios.

See more details and the required BDEF specifications for the variant in the following topic: [RAP BDL - draft actions](ABENBDL_DRAFT_ACTION.html).

Method parameters:

Handles the `edit` action in draft scenarios.

See more details and the required BDEF specifications for the variant in the following topic: [RAP BDL - draft actions](ABENBDL_DRAFT_ACTION.html).

Method parameters:

Handles the `discard` action in draft scenarios.

See more details and the required BDEF specifications for the variant in the following topic: [RAP BDL - draft actions](ABENBDL_DRAFT_ACTION.html).

Method parameters:

Handles the `resume` action in draft scenarios.

See the required BDEF specifications for the variant in the following topic: [RAP BDL - draft actions](ABENBDL_DRAFT_ACTION.html).

Method parameters:

The addition and the parameter `req_act` are only available in the context of non-draft actions that are specified with a parameter in the BDEF. `req_act` is a structure of type [`TYPE STRUCTURE FOR GLOBAL FEATURES REQUEST bdef~action`](ABAPTYPE_STRUCTURE_FOR.html).

See more details and the required BDEF specifications for the variant in the following topics:

The addition and the parameter `res_act` are only available in the context of non-draft actions that are specified with a result in the BDEF. `res_act` is an internal table of type [`TYPE TABLE FOR ACTION RESULT bdef~action`](ABAPTYPE_TABLE_FOR.html). The parameter can also be passed by reference.

See more details and the required BDEF specifications for the variant in the following topics:

See the details regarding the RAP response parameters that can be specified above.

Examples for RAP handler method definitions. Find demonstrations of method implementations in the executable examples further down. The first example in the code below shows a handler method definition combining multiple operations in one method.

... \\nMETHODS modify FOR MODIFY \\n    IMPORTING ent\_cr FOR CREATE bdef \\n              ent\_upd FOR UPDATE bdef \\n              keys FOR DELETE bdef.\\ 
\\ 
METHODS create FOR MODIFY \\n    IMPORTING entities FOR CREATE bdef.\\ 
\\ 
METHODS cba\_child FOR MODIFY \\n    IMPORTING entities\_cba FOR CREATE bdef\\\\\_child.\\ 
\\ 
METHODS update FOR MODIFY \\n    IMPORTING entities FOR UPDATE bdef.\\ 
\\ 
METHODS delete FOR MODIFY \\n    IMPORTING keys FOR DELETE bdef.\\ 
\\ 
METHODS action1 FOR MODIFY \\n    IMPORTING keys FOR CREATE bdef~action1.\\ 
\\ 
METHODS action2 FOR MODIFY \\n    IMPORTING keys FOR CREATE bdef~action2 RESULT result.\\ 
\\ 
METHODS action3 FOR MODIFY \\n    IMPORTING keys FOR CREATE bdef~action3 \\n    REQUEST requested\_fields RESULT result.\\ 
\\ 
METHODS activate FOR MODIFY \\n    IMPORTING keys FOR ACTION bdef~activate.\\ 
\\ 
METHODS additionalsave FOR MODIFY \\n    IMPORTING keys FOR ACTION bdef~additionalsave.\\ 
\\ 
METHODS discard FOR MODIFY \\n    IMPORTING keys FOR ACTION bdef~discard.\\ 
\\ 
METHODS create FOR MODIFY \\n    IMPORTING entities FOR CREATE bdef.\\ 
\\ 
METHODS edit FOR MODIFY \\n    IMPORTING keys FOR ACTION bdef~edit.\\ 
\\ 
METHODS resume FOR MODIFY \\n    IMPORTING keys FOR ACTION bdef~resume. \\n...

-   [RAP BDL - operations for associations](ABENBDL_ASSOCIATION.html)
-   [RAP BDL - `augment`, projection](ABENBDL_AUGMENT_PROJECTION.html)

-   [`IMPORTING`](ABAPMETHODS_GENERAL.html) parameter:

-   `im_par_mod`: Includes the [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) to be created. It is an internal table of type [`TYPE TABLE FOR CREATE bdef`](ABAPTYPE_TABLE_FOR.html). The parameter can also be passed by reference (see [`REFERENCE`](ABAPMETHODS_PARAMETERS.html)).

-   [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters:

-   The [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters `failed`, `reported` and `mapped` ([RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html)) are implicitly available. It is possible to specify the parameters with the predefined names `failed`, `reported` and `mapped` explicitly following the addition `CHANGING`. The generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html). Instead of `DATA`, a data type of type `TYPE RESPONSE FOR` can be specified.

-   [RAP BDL - operations for associations](ABENBDL_ASSOCIATION.html)
-   [RAP BDL - `augment`, projection](ABENBDL_AUGMENT_PROJECTION.html)

-   [`IMPORTING`](ABAPMETHODS_GENERAL.html) parameter:

-   `im_par_mod`: Includes the RAP BO instances to be created. It is an internal table of type [`TYPE TABLE FOR CREATE bdef\\_assoc`](ABAPTYPE_TABLE_FOR.html). The parameter can also be passed by reference.

-   [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters:

-   The [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters `failed`, `reported` and `mapped` ([RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html)) are implicitly available. It is possible to specify the parameters with the predefined names `failed`, `reported` and `mapped` explicitly following the addition `CHANGING`. The generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html). Instead of `DATA`, a data type of type `TYPE RESPONSE FOR` can be specified.

-   [RAP BDL - operations for associations](ABENBDL_ASSOCIATION.html)
-   [RAP BDL - `augment`, projection](ABENBDL_AUGMENT_PROJECTION.html)

-   [`IMPORTING`](ABAPMETHODS_GENERAL.html) parameter:

-   `im_par_mod`: Includes the RAP BO instances to be updated. It is an internal table of type [`TYPE TABLE FOR UPDATE bdef`](ABAPTYPE_TABLE_FOR.html). The parameter can also be passed by reference.

-   [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters:

-   The [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters `failed`, `reported` and `mapped` ([RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html)) are implicitly available. It is possible to specify the parameters with the predefined names `failed`, `reported` and `mapped` explicitly following the addition `CHANGING`. The generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html). Instead of `DATA`, a data type of type `TYPE RESPONSE FOR` can be specified.

-   [`IMPORTING`](ABAPMETHODS_GENERAL.html) parameter:

-   `im_par_mod`: Includes the keys of the RAP BO instances to be deleted. It is an internal table of type [`TYPE TABLE FOR DELETE bdef`](ABAPTYPE_TABLE_FOR.html). The parameter can also be passed by reference.

-   [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters:

-   The [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters `failed`, `reported` and `mapped` ([RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html)) are implicitly available. It is possible to specify the parameters with the predefined names `failed`, `reported` and `mapped` explicitly following the addition `CHANGING`. The generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html). Instead of `DATA`, a data type of type `TYPE RESPONSE FOR` can be specified.

-   [RAP BDL - action](ABENBDL_ACTION.html)
-   [RAP BDL - determine actions](ABENBDL_DETERMINE_ACTION.html)

-   [`IMPORTING`](ABAPMETHODS_GENERAL.html) parameter:

-   `im_par_mod`: Includes the keys of the RAP BO instances for which an action should be executed. It is an internal table of type [`TYPE TABLE FOR ACTION IMPORT bdef~action`](ABAPTYPE_TABLE_FOR.html). The parameter can also be passed by reference.
-   `req_act`: See the details in section [`... REQUEST ...`](ABAPHANDLER_METH_MODIFY.html).

-   [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters:

-   `res_act`: See the details in section [`... RESULT ...`](ABAPHANDLER_METH_MODIFY.html).
-   The [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters `failed`, `reported` and `mapped` ([RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html)) are implicitly available. It is possible to specify the parameters with the predefined names `failed`, `reported` and `mapped` explicitly following the addition `CHANGING`. The generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html). Instead of `DATA`, a data type of type `TYPE RESPONSE FOR` can be specified.

-   Only the instance key values of created, updated and deleted instances (indicated by [`%chg`](ABAPDERIVED_TYPES_CHG.html)) are available.
-   Information about which fields of instances were updated in the transaction can be obtained by selecting from the CDS view and comparing this data with the read result of an ABAP EML read request.
-   Information about which fields of instances were updated or created at the end of a transaction can be obtained by selecting from the CDS view and comparing this data with the read result of an ABAP EML read request.
-   Information about whether draft instances were deleted after the `activate` or `discard` method calls must be stored appropriately by you for use in the `additionalsave` method.

-   [`IMPORTING`](ABAPMETHODS_GENERAL.html) parameter:

-   `im_par_mod`: Contains [`%cid`](ABAPDERIVED_TYPES_CID.html) and [`%param`](ABAPDERIVED_TYPES_PARAM.html). `%param` is a deep structure here. It has the [absolute type name](ABENABSOLUTE_TYPENAME_GLOSRY.html)\\ `\\BDEF=NAME\\TYPE=%CHANGEOP` and internal tables as components for each core entity of the RAP BO. The names of the components correspond to the entities. The line type of these internal tables contains the key (component groups: [`%key`](ABAPDERIVED_TYPES_KEY.html), [`%pky`](ABAPDERIVED_TYPES_PKY.html)) and [`%chg`](ABAPDERIVED_TYPES_CHG.html). The internal tables do not have an associated concrete type. The types are dynamically available. The absolute type name is `\\BDEF=NAME\\ENTITY=NAME\\TYPE=CHANGEOP`.

-   [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters:

-   The [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters `failed`, `reported` and `mapped` ([RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html)) are implicitly available. It is possible to specify the parameters with the predefined names `failed`, `reported` and `mapped` explicitly following the addition `CHANGING`. The generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html). Instead of `DATA`, a data type of type `TYPE RESPONSE FOR` can be specified.

-   [`IMPORTING`](ABAPMETHODS_GENERAL.html) parameter:

-   `im_par_mod`: Includes the keys of the RAP BO instances for which the `activate` action should be executed. It is an internal table of type [`TYPE TABLE FOR ACTION IMPORT bdef~activate`](ABAPTYPE_TABLE_FOR.html). The parameter can also be passed by reference.

-   [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters:

-   The [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters `failed`, `reported` and `mapped` ([RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html)) are implicitly available. It is possible to specify the parameters with the predefined names `failed`, `reported` and `mapped` explicitly following the addition `CHANGING`. The generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html). Instead of `DATA`, a data type of type `TYPE RESPONSE FOR` can be specified.

-   [`IMPORTING`](ABAPMETHODS_GENERAL.html) parameter:

-   `im_par_mod`: Includes the keys of the RAP BO instances for which the `edit` action should be executed. It is an internal table of type [`TYPE TABLE FOR ACTION IMPORT bdef~edit`](ABAPTYPE_TABLE_FOR.html). The parameter can also be passed by reference.

-   [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters:

-   The [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters `failed`, `reported` and `mapped` ([RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html)) are implicitly available. It is possible to specify the parameters with the predefined names `failed`, `reported` and `mapped` explicitly following the addition `CHANGING`. The generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html). Instead of `DATA`, a data type of type `TYPE RESPONSE FOR` can be specified.

-   [`IMPORTING`](ABAPMETHODS_GENERAL.html) parameter:

-   `im_par_mod`: Includes the keys of the RAP BO instances for which the `discard` action should be executed. It is an internal table of type [`TYPE TABLE FOR ACTION IMPORT bdef~discard`](ABAPTYPE_TABLE_FOR.html). The parameter can also be passed by reference.

-   [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters:

-   The [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters `failed`, `reported` and `mapped` ([RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html)) are implicitly available. It is possible to specify the parameters with the predefined names `failed`, `reported` and `mapped` explicitly following the addition `CHANGING`. The generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html). Instead of `DATA`, a data type of type `TYPE RESPONSE FOR` can be specified.

-   [`IMPORTING`](ABAPMETHODS_GENERAL.html) parameter:

-   `im_par_mod`: Includes the keys of the RAP BO instances for which the `resume` action should be executed. It is an internal table of type [`TYPE TABLE FOR ACTION IMPORT bdef~resume`](ABAPTYPE_TABLE_FOR.html). The parameter can also be passed by reference.

-   [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters:

-   The [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters `failed`, `reported` and `mapped` ([RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html)) are implicitly available. It is possible to specify the parameters with the predefined names `failed`, `reported` and `mapped` explicitly following the addition `CHANGING`. The generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html). Instead of `DATA`, a data type of type `TYPE RESPONSE FOR` can be specified.

-   [RAP BDL - action](ABENBDL_ACTION.html)
-   [RAP BDL - determine actions](ABENBDL_DETERMINE_ACTION.html)

-   [RAP BDL - action](ABENBDL_ACTION.html)
-   [RAP BDL - determine actions](ABENBDL_DETERMINE_ACTION.html)

-   [Example for RAP Handler Methods](ABENRAP_HANDLER_METHODS_ABEXA.html): Demonstrates this RAP handler method within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.
-   [RAP BDL - Examples of actions](ABENBDL_ACTION_ABEXAS.html)
-   The example [ABAP EML - `MODIFY AUGMENTING ENTITY`](ABENEML_MODIFY_AUGMENTING_ABEXA.html) demonstrates the three handler methods `augment_create`, `augment_update` and `augment_cba_assoc` (`assoc` refers to the name of the association) with a RAP projection business object.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abenabap\_behavior\_pools.html abenabp\_handler\_class.html abapmethods\_for\_rap\_behv.html