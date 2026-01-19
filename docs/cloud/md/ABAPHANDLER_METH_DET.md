---
title: "ABAPHANDLER_METH_DET"
description: |
  ABAPHANDLER_METH_DET - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPHANDLER_METH_DET.htm"
abapFile: "ABAPHANDLER_METH_DET.html"
keywords: ["do", "if", "method", "class", "data", "types", "internal-table", "ABAPHANDLER", "METH", "DET"]
---

**Handler method definition:**

```[`METHODS`](ABAPMETHODS.html) meth [[`FINAL`](ABAPMETHODS_ABSTRACT_FINAL.html)]\    FOR DETERMINE ON \{ SAVE | MODIFY \}\    [[`` `IMPORTING` ``](ABAPMETHODS_GENERAL.html)]\ \{\ [`` `REFERENCE` ``](ABAPMETHODS_PARAMETERS.html)(im_par_det) | im_par_det \}\     FOR bdef~det    [[`` `CHANGING` ``](ABAPMETHODS_GENERAL.html)\ `reported` TYPE [`` `data` ``](ABAPTYPE_RESPONSE_FOR.html)].```

[1. `... SAVE ...`](#ABAP_VARIANT_1@1@)

[2. `... MODIFY ...`](#ABAP_VARIANT_2@1@)

[Handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) that are used for [determinations](ABENBDL_DETERMINATIONS.html). They must be defined and implemented in a [handler class](ABENABP_HANDLER_CLASS_GLOSRY.html) of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). The method name `meth` can be chosen freely. `bdef` is the name or the alias of the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). `det` is the name of a [determination](ABENBDL_DETERMINATIONS.html) specified in the BDEF.

See the required BDEF notations for both variants in the topic [RAP BDL - determinations](ABENBDL_DETERMINATIONS.html).

Used for determinations that are executed during the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html).

The method is called after data changes take place in the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html).

Examples for RAP handler method definitions. Find demonstrations of method implementations in the executable examples further down.

... \\n    METHODS det\_on\_save FOR DETERMINE ON SAVE \\n    IMPORTING keys FOR bdef~det\_save.\\ 
\\ 
    METHODS det\_on\_modify FOR DETERMINE ON MODIFY \\n    IMPORTING keys FOR bdef~det\_mod.\\ 
\\ 
    METHODS det\_on\_save2 FOR DETERMINE ON SAVE \\n    IMPORTING keys FOR bdef~det\_save2 \\n    CHANGING reported TYPE DATA reported TYPE DATA. \\n...

-   [`IMPORTING`](ABAPMETHODS_GENERAL.html) parameter:

-   `im_par_det`: Includes the keys of [RAP BO](ABENRAP_BO_GLOSRY.html) instances for which a determination should be executed. It is an internal table of type [`TYPE TABLE FOR DETERMINATION`](ABAPTYPE_TABLE_FOR.html).
-   The parameter can also be passed by reference (see [`REFERENCE`](ABAPMETHODS_PARAMETERS.html)). The use of the ABAP word `IMPORTING` is optional.

-   [`CHANGING`](ABAPMETHODS_GENERAL.html) parameter:

-   The [`CHANGING`](ABAPMETHODS_GENERAL.html) parameter `reported` ([RAP response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html)) is implicitly available. It is possible to specify the parameter with the predefined name `reported` explicitly following the ABAP word `CHANGING`. The generic type [`DATA`](ABENBUILT_IN_TYPES_GENERIC.html) can be specified. At runtime, the typed parameter implicitly has the BDEF derived type [`TYPE RESPONSE FOR REPORTED`](ABAPTYPE_RESPONSE_FOR.html). Instead of `DATA`, a data type of type `TYPE RESPONSE FOR REPORTED` can be specified.

-   [Example for RAP Handler Methods](ABENRAP_HANDLER_METHODS_ABEXA.html): Demonstrates this RAP handler method within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.
-   [RAP BDL - determination](ABENBDL_DETERMINATION_ABEXA.html)

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abenabap\_behavior\_pools.html abenabp\_handler\_class.html abapmethods\_for\_rap\_behv.html