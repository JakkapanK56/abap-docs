---
title: "ABENBEHAVIOR_POOL_GLOSRY"
description: |
  ABENBEHAVIOR_POOL_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBEHAVIOR_POOL_GLOSRY.htm"
abapFile: "ABENBEHAVIOR_POOL_GLOSRY.html"
keywords: ["do", "class", "ABENBEHAVIOR", "POOL", "GLOSRY"]
---

ABP for short. A special [class pool](ABENCLASS_POOL_GLOSRY.html) for an [ABAP behavior implementation](ABENBEHAVIOR_IMPLEMENT_GLOSRY.html). A behavior pool is based on a [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). The name of the [global class](ABENGLOBAL_CLASS_GLOSRY.html) of a behavior pool is usually prefixed with `BP_` but does not implement the behavior itself. The [behavior implementation](ABENBEHAVIOR_IMPLEMENT_GLOSRY.html) is coded in local [ABP handler classes](ABENABP_HANDLER_CLASS_GLOSRY.html) and [ABP saver classes](ABENABP_SAVER_CLASS_GLOSRY.html) in the [CCIMP include](ABENCCIMP_GLOSRY.html) of the behavior pool. These classes implement the [unmanaged RAP BO provider](ABENUNMANAGED_RAP_BO_PROV_GLOSRY.html) that is called by the [RAP runtime engine](ABENRAP_RUNTIME_ENGINE_GLOSRY.html) when the [RAP BO](ABENRAP_BO_GLOSRY.html) is accessed.

[**\-> More about**](ABENABAP_BEHAVIOR_POOLS.html)

ABENRAP\_GLOSSARY.html