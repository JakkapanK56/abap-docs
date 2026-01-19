---
title: "ABAPHANDLER_METH_VALIDATE"
description: |
  ABAPHANDLER_METH_VALIDATE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPHANDLER_METH_VALIDATE.htm"
abapFile: "ABAPHANDLER_METH_VALIDATE.html"
keywords: ["do", "if", "method", "class", "data", "types", "internal-table", "ABAPHANDLER", "METH", "VALIDATE"]
---

**Handler method definitions:**

```[`METHODS`](ABAPMETHODS.html) meth [[`FINAL`](ABAPMETHODS_ABSTRACT_FINAL.html)]\     FOR VALIDATE ON SAVE     [[`` `IMPORTING` ``](ABAPMETHODS_GENERAL.html)]\ \{\ [`` `REFERENCE` ``](ABAPMETHODS_PARAMETERS.html)(im_par_val) | im_par_val \}\     FOR bdef~val     [[`` `CHANGING` ``](ABAPMETHODS_GENERAL.html)\ \{\ [`failed` TYPE [`` `data` ``](ABENBUILT_IN_TYPES_GENERIC.html)]\ [`reported` TYPE [`` `data` ``](ABENBUILT_IN_TYPES_GENERIC.html)]\ \}].```

[Handler method](ABENABP_HANDLER_METHOD_GLOSRY.html) that is used for the [validations](ABENBDL_VALIDATIONS.html). It must be defined and implemented in a [handler class](ABENABP_HANDLER_CLASS_GLOSRY.html) of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).

The method name `meth` can be chosen freely. `bdef` is the name or the alias of the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) and `val` is the name of the validation.

See the required BDEF notations for both variants in the topic [RAP - `validation`](ABENBDL_VALIDATIONS.html).

Example for a RAP handler method definition. Find demonstrations of method implementations in the executable examples further down.

-   [`IMPORTING`](ABAPMETHODS_GENERAL.html) parameters:

-   `im_par_val`: Includes the keys of [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) that are to be validated. It is an internal table of type [`TYPE TABLE FOR VALIDATION bdef~val`](ABAPTYPE_TABLE_FOR.html).
-   The importing parameter can also be passed by reference (see [`REFERENCE`](ABAPMETHODS_PARAMETERS.html)). The use of the ABAP word `IMPORTING` is optional.

-   [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters:

-   The [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters `failed` and `reported` ([RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html)) are implicitly available. It is possible to specify the parameters with the predefined names `failed` and `reported` explicitly following the ABAP word `CHANGING`. The generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html). Instead of `DATA`, a data type of type `TYPE RESPONSE FOR` can be specified.

-   [Example for RAP Handler Methods](ABENRAP_HANDLER_METHODS_ABEXA.html): Demonstrates this RAP handler method within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.
-   [RAP BDL - validation](ABENBDL_VALIDATION_ABEXA.html)

... \\nMETHODS det\_on\_save FOR VALIDATE ON SAVE \\n IMPORTING keys FOR bdef~val. \\n... abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abenabap\_behavior\_pools.html abenabp\_handler\_class.html abapmethods\_for\_rap\_behv.html