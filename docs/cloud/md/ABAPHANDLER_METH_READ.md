---
title: "ABAPHANDLER_METH_READ"
description: |
  ABAPHANDLER_METH_READ - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPHANDLER_METH_READ.htm"
abapFile: "ABAPHANDLER_METH_READ.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "types", "internal-table", "ABAPHANDLER", "METH", "READ"]
---

**Handler method definitions:**

```[`METHODS`](ABAPMETHODS.html) meth [[`FINAL`](ABAPMETHODS_ABSTRACT_FINAL.html)]\     FOR READ     [[`` `IMPORTING` ``](ABAPMETHODS_GENERAL.html)]\ \{\ [`` `REFERENCE` ``](ABAPMETHODS_PARAMETERS.html)(im_par_read) | im_par_read \}\     FOR \{ READ bdef RESULT \{\ [`` `REFERENCE` ``](ABAPMETHODS_PARAMETERS.html)(res_read) | res_read \}\ \}\       |\ \{ READ bdef\\_assoc FULL \{\ [`` `REFERENCE` ``](ABAPMETHODS_PARAMETERS.html)(full_rba) | full_rba \}\                            RESULT \{\ [`` `REFERENCE` ``](ABAPMETHODS_PARAMETERS.html)(res_rba) | res_rba \}\                            LINK \{\ [`` `REFERENCE` ``](ABAPMETHODS_PARAMETERS.html)(link_rba) | link_rba \}\ \}\       |\ \{ FUNCTION bdef~function [REQUEST \{\ [`` `REFERENCE` ``](ABAPMETHODS_PARAMETERS.html)(req_func) | req_func \}]\                                   RESULT \{\ [`` `REFERENCE` ``](ABAPMETHODS_PARAMETERS.html)(res_func) | res_func \}  \}\     [[`` `CHANGING` ``](ABAPMETHODS_GENERAL.html)\ \{\ [`failed` TYPE [`` `data` ``](ABENBUILT_IN_TYPES_GENERIC.html)]\ [`reported` TYPE [`` `data` ``](ABENBUILT_IN_TYPES_GENERIC.html)]\ \}].```

[1. `... READ bdef ...`](#ABAP_VARIANT_1@1@)

[2. `... READ bdef\\_assoc ...`](#ABAP_VARIANT_2@1@)

[3. `... FUNCTION bdef~function ...`](#ABAP_VARIANT_3@1@)

[Handler method](ABENABP_HANDLER_METHOD_GLOSRY.html) that is used for read operations in [RAP](ABENRAP_GLOSRY.html). It must be defined and implemented in a [handler class](ABENABP_HANDLER_CLASS_GLOSRY.html) of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). The method name `meth` can be chosen freely, except for the methods names in the context of [RAP default values functions](ABAPRAP_HANDLER_DEFAULT_VAL_FUNC.html). `bdef` is the name or the alias of the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html), `assoc` the name of the association, and `function` the name of a function.

The method parameters can be passed by reference (see [`REFERENCE`](ABAPMETHODS_PARAMETERS.html)), except for the predefined parameters `failed` and `reported`.

**Note** Find information about the handler methods to be implemented for [RAP default values functions](ABENRAP_BO_DEFAULTING_GLOSRY.html) [here](ABAPRAP_HANDLER_DEFAULT_VAL_FUNC.html).

[1. `... REQUEST ...`](#ABAP_ADDITION_1@3@)

[2. `... CHANGING ...`](#ABAP_ADDITION_2@3@)

Handles the read requests in RAP read operations. BDEF requirement for the read operations: The entities to be read from must be declared after the notation [`define behavior for`](ABENBDL_DEFINE_BEH.html).

Method parameters:

Handles the read requests in [RAP read-by-association operations](ABENRAP_RBA_OPERATION_GLOSRY.html). BDEF requirement for read-by-association operations: The entities to be read from must be declared after the notation [`define behavior for`](ABENBDL_DEFINE_BEH.html).

Method parameters:

The parameters must be specified in the method definition in the following sequence: `... IMPORTING ... FULL ... RESULT ... LINK ... CHANGING ...`

Handles the read requests in the context of [functions](ABENBDL_FUNCTION.html). See the required BDEF notations for functions in topic [RAP BDL - function](ABENBDL_FUNCTION.html).

Method parameters:

The parameters must be specified in the method definition in the following sequence: `... IMPORTING ... FULL ... RESULT ... LINK ... CHANGING ...`

The addition and the parameter `req_func` are only available in the context of functions that are specified with the notation [`result selective`](ABENBDL_ACTION_OUTPUT_PARA.html) in the BDEF. `req_func` is a structure of type [`TYPE STRUCTURE FOR FUNCTION REQUEST bdef~function`](ABAPTYPE_STRUCTURE_FOR.html).

See the details regarding the RAP response parameters that can be specified above.

Examples for RAP handler method definitions. Find demonstrations of method implementations in the executable examples further down.

... \\nMETHODS read FOR READ \\n    IMPORTING keys FOR READ bdef RESULT result.\\ 
\\ 
METHODS rba\_assoc FOR READ \\n    IMPORTING keys\_rba FOR READ bdef\\\\\_assoc \\n    FULL result\_requested RESULT result LINK association\_links.\\ 
\\ 
METHODS function1 FOR READ \\n    IMPORTING keys FOR READ bdef~function1 RESULT result.\\ 
\\ 
METHODS function2 FOR READ \\n    IMPORTING keys FOR READ bdef~function2 \\n    REQUEST requested\_fields RESULT result. \\n...

-   [`IMPORTING`](ABAPMETHODS_GENERAL.html) parameter:

-   `im_par_read`: Includes the entities to be read. It is an internal table of type [`TYPE TABLE FOR READ IMPORT bdef`](ABAPTYPE_TABLE_FOR.html).

-   [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters:

-   `res_read`: Mandatory parameter used to store the read result. It must be specified after the ABAP word `RESULT` and is an internal table of type [`TYPE TABLE FOR READ RESULT bdef`](ABAPTYPE_TABLE_FOR.html).
-   The [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters `failed` and `reported` ([RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html)) are implicitly available. It is possible to specify the parameters with the predefined names `failed` and `reported` explicitly following the ABAP word `CHANGING`. The generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html). Instead of `DATA`, a data type of type `TYPE RESPONSE FOR` can be specified.

-   [`IMPORTING`](ABAPMETHODS_GENERAL.html) parameters:

-   `im_par_read`: Includes the entities to be read. It is an internal table of type [`TYPE TABLE FOR READ IMPORT bdef\\_assoc`](ABAPTYPE_TABLE_FOR.html).
-   `full_rba`: Used to indicate whether the `res_rba` parameter, i. e. all target instances, or just the links, i. e. the `link_rba` parameter, should be retrieved in the context of read-by-association operations. It is a Boolean value of type `c` with length 1. `full_rba` specified with `'X'` respects all target instances. Note that the explicit specification of the `FULL` parameter with ABAP EML is only possible for the dynamic form of the ABAP EML `READ` statement ([`READ ENTITIES OPERATIONS`](ABAPREAD_ENTITIES_OPERATIONS.html)). With the short form ([`READ ENTITY`](ABAPREAD_ENTITY_SHORT.html)) and long form ([`READ ENTITIES`](ABAPREAD_ENTITIES_LONG.html)), the explicit specification of the `full_rba` parameter is not possible. In these cases, the specification is irrelevant because it applies anyway if the links (`link_rba` parameter) or the data are requested.

-   [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters.

-   `res_rba`: Used to store the read result. It must be specified after the ABAP word `RESULT` and is an internal table of type [`TYPE TABLE FOR READ RESULT bdef\\_assoc`](ABAPTYPE_TABLE_FOR.html).
-   `link_rba`: Used to store the keys of the source and target entities. It is an internal table of type [`TYPE TABLE FOR READ LINK bdef\\_assoc`](ABAPTYPE_TABLE_FOR.html).
-   The [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters `failed` and `reported` ([RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html)) are implicitly available. It is possible to specify the parameters with the predefined names `failed` and `reported` explicitly following the ABAP word `CHANGING`. The generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html). Instead of `DATA`, a data type of type `TYPE RESPONSE FOR` can be specified.

-   [`IMPORTING`](ABAPMETHODS_GENERAL.html) parameters:

-   `im_par_read`: Includes the [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) to be read. It is an internal table of type [`TYPE TABLE FOR FUNCTION IMPORT bdef~function`](ABAPTYPE_TABLE_FOR.html).
-   `req_func`: Additional parameter whose availability depends on the BDEF specification. See [`... REQUEST ...`](ABAPHANDLER_METH_MODIFY.html)

-   [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters.

-   `res_func`: Used to store the read result. It must be specified after the ABAP word `RESULT` and is an internal table of type [`TYPE TABLE FOR READ RESULT bdef\\_assoc`](ABAPTYPE_TABLE_FOR.html).
-   The [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters `failed` and `reported` ([RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html)) are implicitly available. It is possible to specify the parameters with the predefined names `failed` and `reported` explicitly following the ABAP word `CHANGING`. The generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html). Instead of `DATA`, a data type of type `TYPE RESPONSE FOR` can be specified.

-   [Example for RAP Handler Methods](ABENRAP_HANDLER_METHODS_ABEXA.html): Demonstrates this RAP handler method within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.
-   [RAP BDL - function](ABENBDL_FUNCTION_ABEXA.html)

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abenabap\_behavior\_pools.html abenabp\_handler\_class.html abapmethods\_for\_rap\_behv.html