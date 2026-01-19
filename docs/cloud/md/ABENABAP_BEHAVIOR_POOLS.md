---
title: "ABENABAP_BEHAVIOR_POOLS"
description: |
  ABENABAP_BEHAVIOR_POOLS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_BEHAVIOR_POOLS.htm"
abapFile: "ABENABAP_BEHAVIOR_POOLS.html"
keywords: ["select", "do", "method", "class", "ABENABAP", "BEHAVIOR", "POOLS"]
---

The [ABAP behavior pool (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html) is a special class pool for an ABAP behavior implementation and based on a [RAP behavior definition (BDEF)](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). The [global class](ABAPCLASS_FOR_BEHAVIOR_OF.html) of the behavior pool does not implement the behavior itself. Instead, the behavior implementation is coded in one or more local RAP [handler classes](ABENABP_HANDLER_CLASS.html) and one RAP [saver class](ABENABP_SAVER_CLASS.html) in the [CCIMP include](ABENCCIMP_GLOSRY.html) of the behavior pool. These classes provide the unmanaged parts that are called by the [RAP runtime engine](ABENRAP_RUNTIME_ENGINE_GLOSRY.html) when the [RAP BO](ABENRAP_BO_GLOSRY.html) is accessed.

When implementing RAP operations, ensure that you comply with [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html). Follow the implementation guidelines in the development guide for the ABAP RESTful Application Programming Model, section [RAP Business Object Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

You can find a selected set of guidelines in [here](ABAPRAP_IMPL_RULES.html).

-   [`CLASS, FOR BEHAVIOR OF`](ABAPCLASS_FOR_BEHAVIOR_OF.html)
-   [RAP Handler Classes and Methods](ABENABP_HANDLER_CLASS.html)
-   [RAP Saver Class and Methods](ABENABP_SAVER_CLASS.html)

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html