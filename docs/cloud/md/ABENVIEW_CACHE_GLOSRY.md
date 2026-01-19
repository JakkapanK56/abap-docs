---
title: "ABENVIEW_CACHE_GLOSRY"
description: |
  ABENVIEW_CACHE_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENVIEW_CACHE_GLOSRY.htm"
abapFile: "ABENVIEW_CACHE_GLOSRY.html"
keywords: ["do", "data", "types", "ABENVIEW", "CACHE", "GLOSRY"]
---

A cache on the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) that serves performance optimization. On the SAP HANA database, there are two types of view caches:

ABAP Data Models guide, section about [Static Caches](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/b8202709b9d14d1db78c188a86e5e8a8?version=sap_cross_product_abap).

-   [Static cache](ABENSTATIC_VIEW_CACHE_GLOSRY.html):

-   A cache that is kept stable for a predefined retention time.
-   Called [*result cache*](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/8ea43b3ff2e541e398e27d7e5caefab7) on the SAP HANA database.
-   Not yet supported by the [ABAP technology](ABENABAP_TECHNO_GLOSRY.html).

-   [Dynamic cache](ABENDYNAMIC_CACHE_GLOSRY.html)

-   A cache that guarantees real-time data.
-   Called [*dynamic result cache*](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/bc12a173118548e9be8b69f1d62dfae1) on the SAP HANA database.
-   Integrated into [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html). Defined using the statement [`DEFINE DYNAMIC CACHE`](ABENDDICDDL_DEFINE_DYNAMIC_CACHE.html) in [DDIC DDL](ABENDDIC_DCL_GLOSRY.html).

ABENABAP\_GLOSSARY.html