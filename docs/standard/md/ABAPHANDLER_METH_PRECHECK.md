---
title: "ABAPHANDLER_METH_PRECHECK"
description: |
  ABAPHANDLER_METH_PRECHECK - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPHANDLER_METH_PRECHECK.htm"
abapFile: "ABAPHANDLER_METH_PRECHECK.html"
keywords: ["update", "delete", "do", "if", "method", "class", "data", "types", "internal-table", "ABAPHANDLER", "METH", "PRECHECK"]
---

**Handler method definitions:**

```[`METHODS`](ABAPMETHODS.html) meth [[`FINAL`](ABAPMETHODS_ABSTRACT_FINAL.html)]\     FOR PRECHECK     [[`` `IMPORTING` ``](ABAPMETHODS_GENERAL.html)]\ \{\ [`` `REFERENCE` ``](ABAPMETHODS_PARAMETERS.html)(im_par_pre) | im_par_pre \}\     FOR \{ CREATE bdef \}\       |\ \{ CREATE bdef\\_assoc \}\       |\ \{ UPDATE bdef \}\       |\ \{ DELETE bdef \}\       |\ \{ ACTION bdef~action           [REQUEST \{\ [`` `REFERENCE` ``](ABAPMETHODS_PARAMETERS.html)(req_act_pre) | req_act_pre \}\ ]\ \}\     [[`` `CHANGING` ``](ABAPMETHODS_GENERAL.html)\ \{\ [`failed` TYPE [`` `data` ``](ABENBUILT_IN_TYPES_GENERIC.html)]\ [`reported` TYPE [`` `data` ``](ABENBUILT_IN_TYPES_GENERIC.html)]\ \}].```

[1. `... CREATE bdef ...`](#ABAP_VARIANT_1@1@)

[2. `... CREATE bdef\\_assoc ...`](#ABAP_VARIANT_2@1@)

[3. `... UPDATE ...`](#ABAP_VARIANT_3@1@)

[4. `... DELETE ...`](#ABAP_VARIANT_4@1@)

[5. `... ACTION bdef~action ...`](#ABAP_VARIANT_5@1@)

[1. `... REQUEST ...`](#ABAP_ADDITION_1@3@)

[2. `... CHANGING ...`](#ABAP_ADDITION_2@3@)

[Handler method](ABENABP_HANDLER_METHOD_GLOSRY.html) that is used for the [precheck](ABENBDL_PRECHECK.html). It must be defined and implemented in a [handler class](ABENABP_HANDLER_CLASS_GLOSRY.html) of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). The method name `meth` can be chosen freely. `bdef` is the name or the alias of the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html), `assoc` the name of the association, and `action` the name of the action.

See the required BDEF notations in the following topic: [RAP BDL - precheck](ABENBDL_PRECHECK.html).

Handles the precheck for [create operations](ABENBDL_STANDARD_OPERATIONS.html).

Method parameters:

Handles the precheck for [create-by-association operations](ABENBDL_ASSOCIATION.html).

Method parameters:

Handles the precheck for [update operations](ABENBDL_STANDARD_OPERATIONS.html).

Method parameters:

Handles the precheck for [delete operations](ABENBDL_STANDARD_OPERATIONS.html).

Method parameters:

Handles the precheck for [actions](ABENBDL_ACTION.html).

Method parameters:

The addition and the parameter `req_act_pre` are only available in the context of actions that are specified with a parameter in the BDEF.

`req_act_pre` is an importing parameter and specifies Request parameter on which the information retrieval ... is based on. It is a structure of type [`TYPE STRUCTURE FOR ACTION REQUEST bdef`](ABAPTYPE_STRUCTURE_FOR.html).

See the details regarding the RAP response parameters that can be specified above.

Examples for RAP handler method definitions. Find demonstrations of method implementations in the executable examples further down.

... \\nMETHODS precheck\_create FOR PRECHECK \\n    IMPORTING entities FOR CREATE bdef.\\ 
\\ 
METHODS precheck\_cba\_assoc FOR PRECHECK \\n    IMPORTING entities\_cba FOR CREATE bdef\\\\\_assoc.\\ 
\\ 
METHODS precheck\_update FOR PRECHECK \\n    IMPORTING entities FOR UPDATE bdef.\\ 
\\ 
METHODS precheck\_delete FOR PRECHECK \\n    IMPORTING keys FOR DELETE bdef.\\ 
\\ 
METHODS precheck\_action FOR PRECHECK \\n    IMPORTING entities FOR CREATE bdef~action. \\n...

Development guide for the ABAP RESTful Application Programming Model, section [Operation Precheck](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/f6e3880b641649b1b8247486579a1c9b?version=sap_cross_product_abap).

[Example for RAP Handler Methods](ABENRAP_HANDLER_METHODS_ABEXA.html): Demonstrates this RAP handler method for an action within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.

-   [`IMPORTING`](ABAPMETHODS_GENERAL.html) parameter:

-   `im_par_pre`: Includes the entities to be created. It is an internal table of type [`TYPE TABLE FOR CREATE bdef`](ABAPTYPE_TABLE_FOR.html). The parameter can also be passed by reference (see [`REFERENCE`](ABAPMETHODS_PARAMETERS.html)).

-   [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters:

-   The [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters `failed` and `reported` ([RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html)) are implicitly available. It is possible to specify the parameters with the predefined names `failed` and `reported` explicitly following the ABAP word `CHANGING`. The generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html). Instead of `DATA`, a data type of type `TYPE RESPONSE FOR` can be specified.

-   [`IMPORTING`](ABAPMETHODS_GENERAL.html) parameter:

-   `im_par_pre`: Includes the entities to be created. It is an internal table of type [`TYPE TABLE FOR CREATE bdef\\_assoc`](ABAPTYPE_TABLE_FOR.html). The parameter can also be passed by reference (see [`REFERENCE`](ABAPMETHODS_PARAMETERS.html)).

-   [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters:

-   The [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters `failed` and `reported` ([RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html)) are implicitly available. It is possible to specify the parameters with the predefined names `failed` and `reported` explicitly following the ABAP word `CHANGING`. The generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html). Instead of `DATA`, a data type of type `TYPE RESPONSE FOR` can be specified.

-   [`IMPORTING`](ABAPMETHODS_GENERAL.html) parameter:

-   `im_par_pre`: Includes the entities to be updated. It is an internal table of type [`TYPE TABLE FOR UPDATE bdef`](ABAPTYPE_TABLE_FOR.html). The parameter can also be passed by reference (see [`REFERENCE`](ABAPMETHODS_PARAMETERS.html)).

-   [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters:

-   The [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters `failed` and `reported` ([RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html)) are implicitly available. It is possible to specify the parameters with the predefined names `failed` and `reported` explicitly following the ABAP word `CHANGING`. The generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html). Instead of `DATA`, a data type of type `TYPE RESPONSE FOR` can be specified.

-   [`IMPORTING`](ABAPMETHODS_GENERAL.html) parameter:

-   `im_par_pre`: Includes the keys of the entities to be deleted. It is an internal table of type [`TYPE TABLE FOR DELETE bdef`](ABAPTYPE_TABLE_FOR.html). The parameter can also be passed by reference (see [`REFERENCE`](ABAPMETHODS_PARAMETERS.html)).

-   [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters:

-   The [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters `failed` and `reported` ([RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html)) are implicitly available. It is possible to specify the parameters with the predefined names `failed` and `reported` explicitly following the ABAP word `CHANGING`. The generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html). Instead of `DATA`, a data type of type `TYPE RESPONSE FOR` can be specified.

-   [`IMPORTING`](ABAPMETHODS_GENERAL.html) parameter:

-   `im_par_pre`: Includes the keys of the entities for which the action should be processed. It is an internal table of type [`TYPE TABLE FOR ACTION IMPORT bdef~action`](ABAPTYPE_TABLE_FOR.html). The parameter can also be passed by reference (see [`REFERENCE`](ABAPMETHODS_PARAMETERS.html)).

-   [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters:

-   The [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters `failed` and `reported` ([RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html)) are implicitly available. It is possible to specify the parameters with the predefined names `failed` and `reported` explicitly following the ABAP word `CHANGING`. The generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html). Instead of `DATA`, a data type of type `TYPE RESPONSE FOR` can be specified.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abenabap\_behavior\_pools.html abenabp\_handler\_class.html abapmethods\_for\_rap\_behv.html