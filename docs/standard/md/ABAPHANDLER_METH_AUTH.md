---
title: "ABAPHANDLER_METH_AUTH"
description: |
  ABAPHANDLER_METH_AUTH - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPHANDLER_METH_AUTH.htm"
abapFile: "ABAPHANDLER_METH_AUTH.html"
keywords: ["do", "if", "method", "class", "data", "types", "internal-table", "ABAPHANDLER", "METH", "AUTH"]
---

**Handler method definition:**

```[`METHODS`](ABAPMETHODS.html) meth [[`FINAL`](ABAPMETHODS_ABSTRACT_FINAL.html)]\     FOR [INSTANCE] AUTHORIZATION     [[`` `IMPORTING` ``](ABAPMETHODS_GENERAL.html)]\ \{\ [`` `REFERENCE` ``](ABAPMETHODS_PARAMETERS.html)(im_par_auth) | im_par_auth \}\     REQUEST \{\ [`` `REFERENCE` ``](ABAPMETHODS_PARAMETERS.html)(req_auth) | req_auth \}\     FOR bdef     RESULT \{\ [`` `REFERENCE` ``](ABAPMETHODS_PARAMETERS.html)(res_auth) | res_auth \}\    [[`` `CHANGING` ``](ABAPMETHODS_GENERAL.html)\ \{\ [`failed` TYPE [`` `data` ``](ABENBUILT_IN_TYPES_GENERIC.html)]\ [`reported` TYPE [`` `data` ``](ABENBUILT_IN_TYPES_GENERIC.html)]\ \}].```

[Handler method](ABENABP_HANDLER_METHOD_GLOSRY.html) that is used for [instance-based authorization](ABENBDL_AUTHORIZATION.html) checks for accessing [RAP BO entities](ABENRAP_BO_ENTITY_GLOSRY.html). It must be defined and implemented in a [handler class](ABENABP_HANDLER_CLASS_GLOSRY.html) of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). The method name `meth` can be chosen freely. `bdef` is the name or the alias of the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html).

See the required BDEF notations for both variants in the topic [RAP - Authorization](ABENBDL_AUTHORIZATION.html).

Examples for RAP handler method definitions. Find demonstrations of method implementations in the executable examples further down.

... \\nMETHODS get\_instance\_authorizations FOR INSTANCE AUTHORIZATION \\n    IMPORTING keys REQUEST requested\_authorizations FOR bdef \\n    RESULT result.\\ 
\\ 
    METHODS get\_instance\_authorizations FOR AUTHORIZATION \\n    IMPORTING keys REQUEST requested\_authorizations FOR bdef RESULT result \\n    CHANGING failed TYPE DATA reported TYPE DATA. \\n...

[Example for RAP Handler Methods](ABENRAP_HANDLER_METHODS_ABEXA.html): Demonstrates this RAP handler method within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.

-   [`IMPORTING`](ABAPMETHODS_GENERAL.html) parameters:

-   `im_par_auth`: Internal table of type [`TYPE TABLE FOR AUTHORIZATION KEY`](ABAPTYPE_TABLE_FOR.html).
-   The parameter can also be passed by reference (see [`REFERENCE`](ABAPMETHODS_PARAMETERS.html)). The use of the ABAP word `IMPORTING` is optional.
-   `req_auth`: Request parameter on which the information retrieval for instance-based authorization is based on. It is a structure of type [`TYPE STRUCTURE FOR AUTHORIZATION REQUEST`](ABAPTYPE_STRUCTURE_FOR.html). The parameter can also be passed by reference.

-   [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters:

-   `res_auth`: Used to store the result of the permission information retrieval. It is an internal table of type [`TYPE TABLE FOR AUTHORIZATION RESULT`](ABAPTYPE_TABLE_FOR.html). The parameter can also be passed by reference
-   The [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters `failed` and `reported` ([RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html)) are implicitly available. It is possible to specify the parameters with the predefined names `failed` and `reported` explicitly following the ABAP word `CHANGING`. The generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html). Instead of `DATA`, a data type of type `TYPE RESPONSE FOR` can be specified.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abenabap\_behavior\_pools.html abenabp\_handler\_class.html abapmethods\_for\_rap\_behv.html