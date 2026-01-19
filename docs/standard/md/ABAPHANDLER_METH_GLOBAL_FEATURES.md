---
title: "ABAPHANDLER_METH_GLOBAL_FEATURES"
description: |
  ABAPHANDLER_METH_GLOBAL_FEATURES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPHANDLER_METH_GLOBAL_FEATURES.htm"
abapFile: "ABAPHANDLER_METH_GLOBAL_FEATURES.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABAPHANDLER", "METH", "GLOBAL", "FEATURES"]
---

**Handler method definition:**

```[`METHODS`](ABAPMETHODS.html) meth [[`FINAL`](ABAPMETHODS_ABSTRACT_FINAL.html)]\     FOR GLOBAL FEATURES     [[`` `IMPORTING` ``](ABAPMETHODS_GENERAL.html)] REQUEST \{\ [`` `REFERENCE` ``](ABAPMETHODS_PARAMETERS.html)(req_gl_feat) | req_gl_feat \}\     FOR bdef     RESULT \{\ [`` `REFERENCE` ``](ABAPMETHODS_PARAMETERS.html)(res_gl_feat) | res_gl_feat \}\     [[`` `CHANGING` ``](ABAPMETHODS_GENERAL.html)\ `reported` TYPE [`` `data` ``](ABENBUILT_IN_TYPES_GENERIC.html)].```

[Handler method](ABENABP_HANDLER_METHOD_GLOSRY.html) that is used for the [global feature control](ABENBDL_ACTIONS_FC.html) of [RAP BO entities](ABENRAP_BO_ENTITY_GLOSRY.html). It must be defined and implemented in a [handler class](ABENABP_HANDLER_CLASS_GLOSRY.html) of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). The method name `meth` can be chosen freely. `bdef` is the name or the alias of the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html).

See the required BDEF notations for both variants in the topic [RAP - `feature control`](ABENBDL_ACTIONS_FC.html).

Example for a RAP handler method definition. Find a demonstration of a method implementation in the executable example further down.

[Example for RAP Handler Methods](ABENRAP_HANDLER_METHODS_ABEXA.html): Demonstrates this RAP handler method within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.

-   [`IMPORTING`](ABAPMETHODS_GENERAL.html) parameters:

-   `req_gl_feat`: Request parameter on which the information retrieval for global feature control is based on. It is a structure of type [`TYPE STRUCTURE FOR GLOBAL FEATURES REQUEST bdef`](ABAPTYPE_STRUCTURE_FOR.html).
-   The parameter can also be passed by reference (see [`REFERENCE`](ABAPMETHODS_PARAMETERS.html)). The use of the ABAP word `IMPORTING` is optional.

-   [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters:

-   `res_gl_feat`: Used to store the result of the information retrieval. It is a structure of type [`TYPE STRUCTURE FOR GLOBAL FEATURES RESULT bdef`](ABAPTYPE_STRUCTURE_FOR.html). The parameter can also be passed by reference.
-   The [`CHANGING`](ABAPMETHODS_GENERAL.html) parameter `reported` ([RAP response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html)) is implicitly available. It is possible to specify the parameter with the predefined name `reported` explicitly following the ABAP word `CHANGING`. The generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) can be specified. At runtime, the typed parameter implicitly has the BDEF derived type [`TYPE RESPONSE FOR REPORTED`](ABAPTYPE_RESPONSE_FOR.html). Instead of `DATA`, a data type of type `TYPE RESPONSE FOR REPORTED` can be specified.

... \\nMETHODS get\_global\_features FOR GLOBAL FEATURES \\n IMPORTING REQUEST requested\_features FOR bdef RESULT result. \\n... abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abenabap\_behavior\_pools.html abenabp\_handler\_class.html abapmethods\_for\_rap\_behv.html