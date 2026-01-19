---
title: "ABAPHANDLER_METH_GLOBAL_AUTH"
description: |
  ABAPHANDLER_METH_GLOBAL_AUTH - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPHANDLER_METH_GLOBAL_AUTH.htm"
abapFile: "ABAPHANDLER_METH_GLOBAL_AUTH.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABAPHANDLER", "METH", "GLOBAL", "AUTH"]
---

**Handler method definition:**

```[`METHODS`](ABAPMETHODS.html) meth [[`FINAL`](ABAPMETHODS_ABSTRACT_FINAL.html)]\     FOR GLOBAL AUTHORIZATION     [[`` `IMPORTING` ``](ABAPMETHODS_GENERAL.html)]\ \{\ [`` `REFERENCE` ``](ABAPMETHODS_PARAMETERS.html)(im_par_gl_auth) | im_par_gl_auth \}\     REQUEST \{\ [`` `REFERENCE` ``](ABAPMETHODS_PARAMETERS.html)(req_gl_auth) | req_gl_auth \}\     FOR bdef     RESULT \{\ [`` `REFERENCE` ``](ABAPMETHODS_PARAMETERS.html)(res_gl_auth) | res_gl_auth \}\     [[`` `CHANGING` ``](ABAPMETHODS_GENERAL.html)\ `reported` TYPE [`` `data` ``](ABENBUILT_IN_TYPES_GENERIC.html)].```

[Handler method](ABENABP_HANDLER_METHOD_GLOSRY.html) that is used for [global authorization](ABENBDL_AUTHORIZATION.html) checks for accessing [RAP BO entities](ABENRAP_BO_ENTITY_GLOSRY.html). It must be defined and implemented in a [handler class](ABENABP_HANDLER_CLASS_GLOSRY.html) of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). The method name `meth` can be chosen freely. `bdef` is the name or the alias of the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html).

See the required BDEF notations for both variants in the topic [RAP - Authorization](ABENBDL_AUTHORIZATION.html).

Example for a RAP handler method definition. Find demonstrations of method implementations in the executable examples further down.

-   [`IMPORTING`](ABAPMETHODS_GENERAL.html) parameters:

-   `req_gl_auth`: Request parameter on which the information retrieval for instance-based authorization is based on. It is a structure of type [`TYPE STRUCTURE FOR GLOBAL AUTHORIZATION REQUEST`](ABAPTYPE_STRUCTURE_FOR.html).

-   [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters:

-   `res_gl_auth`: Used to store the result of the permission information retrieval. It is a structure of type [`TYPE STRUCTURE FOR GLOBAL AUTHORIZATION RESULT`](ABAPTYPE_STRUCTURE_FOR.html).
-   The [`CHANGING`](ABAPMETHODS_GENERAL.html) parameter `reported` ([RAP response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html)) is implicitly available. It is possible to specify the parameter with the predefined name `reported` explicitly following the ABAP word `CHANGING`. The generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) can be specified. At runtime, the typed parameter implicitly has the BDEF derived type [`TYPE RESPONSE FOR REPORTED`](ABAPTYPE_RESPONSE_FOR.html). Instead of `DATA`, a data type of type `TYPE RESPONSE FOR REPORTED` can be specified.

-   [Example for RAP Handler Methods](ABENRAP_HANDLER_METHODS_ABEXA.html): Demonstrates this RAP handler method within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.
-   [RAP BDL - global authorization](ABENBDL_AUTHORIZATION_ABEXA.html)

... \\nMETHODS get\_global\_authorizations FOR GLOBAL AUTHORIZATION \\n IMPORTING REQUEST requested\_authorizations FOR bdef \\n RESULT result. \\n... abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abenabap\_behavior\_pools.html abenabp\_handler\_class.html abapmethods\_for\_rap\_behv.html