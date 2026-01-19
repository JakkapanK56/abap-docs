---
title: "ABAPHANDLER_METH_NUMBERING"
description: |
  ABAPHANDLER_METH_NUMBERING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPHANDLER_METH_NUMBERING.htm"
abapFile: "ABAPHANDLER_METH_NUMBERING.html"
keywords: ["do", "if", "method", "class", "data", "types", "internal-table", "ABAPHANDLER", "METH", "NUMBERING"]
---

**Handler method definition:**

```[`METHODS`](ABAPMETHODS.html) meth [[`FINAL`](ABAPMETHODS_ABSTRACT_FINAL.html)]\     FOR NUMBERING     [[`` `IMPORTING` ``](ABAPMETHODS_GENERAL.html)]\ \{\ [`` `REFERENCE` ``](ABAPMETHODS_PARAMETERS.html)(im_par_num) | im_par_num \}\     FOR CREATE bdef     [[`` `CHANGING` ``](ABAPMETHODS_GENERAL.html)\ \{\ [`failed` TYPE [`` `data` ``](ABENBUILT_IN_TYPES_GENERIC.html)]\ [`reported` TYPE [`` `data` ``](ABENBUILT_IN_TYPES_GENERIC.html)]\ [`mapped` TYPE [`` `data` ``](ABENBUILT_IN_TYPES_GENERIC.html)]\ \}].```

[Handler method](ABENABP_HANDLER_METHOD_GLOSRY.html) that is used for the [early numbering](ABENBDL_EARLY_NUMB.html). It must be defined and implemented in a [handler class](ABENABP_HANDLER_CLASS_GLOSRY.html) of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). The method name `meth` can be chosen freely. `bdef` is the name or the alias of the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). The method is implicitly triggered during an ABAP EML create request.

See the required BDEF notations for both variants in the topic [RAP - `early numbering`](ABENBDL_EARLY_NUMB.html).

Example for a RAP handler method definition. Find demonstrations of method implementations in the executable examples further down.

[Example for RAP Handler Methods](ABENRAP_HANDLER_METHODS_ABEXA.html): Demonstrates this RAP handler method within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.

-   [`IMPORTING`](ABAPMETHODS_GENERAL.html) parameters:

-   `im_par_num`: Includes [RAP BO](ABENRAP_BO_GLOSRY.html) instances for which early numbering should be executed. It is an internal table of type [`TYPE TABLE FOR CREATE`](ABAPTYPE_TABLE_FOR.html). The parameter can also be passed by reference (see [`REFERENCE`](ABAPMETHODS_PARAMETERS.html)).

-   [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters:

-   The [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters `failed`, `reported` and `mapped` ([RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html)) are implicitly available. It is possible to specify the parameters with the predefined names `failed`, `reported` and `mapped` explicitly following the addition `CHANGING`. The generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html). Instead of `DATA`, a data type of type `TYPE RESPONSE FOR` can be specified.

... \\nMETHODS earlynumbering\_create FOR NUMBERING \\n IMPORTING entities FOR CREATE bdef. \\n... abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abenabap\_behavior\_pools.html abenabp\_handler\_class.html abapmethods\_for\_rap\_behv.html