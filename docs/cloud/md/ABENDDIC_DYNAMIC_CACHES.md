---
title: "ABAP Dictionary dynamic caches are defined using the"
description: |
  ABAP Data Models guide, section about Dynamic Caches(https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/c0e7cc2d637b4abeb221585da667ae29?version=sap_cross_product_abap). -   Dictionary DDL for Defining Dynamic Caches(ABENDDIC_DEFINE_DYNAMIC_CACHE.html) -   SAP HANA offers stat
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_DYNAMIC_CACHES.htm"
abapFile: "ABENDDIC_DYNAMIC_CACHES.html"
keywords: ["insert", "update", "do", "case", "data", "ABENDDIC", "DYNAMIC", "CACHES"]
---

A [dynamic cache](ABENDYNAMIC_CACHE_GLOSRY.html) is a [HANA tuning object](ABENHANA_TUNING_OBJECT_GLOSRY.html) that serves as an interface between [dynamic result caches](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/bc12a173118548e9be8b69f1d62dfae1) in SAP HANA and DDIC views. A dynamic cache is defined for a DDIC database table. It defines a restricted subquery on the database table with the goal to cache read results of the table in question to avoid repeated aggregation. This optimizes the performance in certain use cases. At the same time, a dynamic caches guarantees up-to-date data. Each time the cached database table is updated with `INSERT`, the cached data is updated automatically.

ABAP Dictionary dynamic caches are defined using the

ABAP Data Models guide, section about [Dynamic Caches](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/c0e7cc2d637b4abeb221585da667ae29?version=sap_cross_product_abap).

-   [Dictionary DDL for Defining Dynamic Caches](ABENDDIC_DEFINE_DYNAMIC_CACHE.html)

-   SAP HANA offers static and dynamic [view caches](ABENVIEW_CACHE_GLOSRY.html). Only the dynamic version has been integrated into DDIC. Static view caches are called [Result Cache](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/8ea43b3ff2e541e398e27d7e5caefab7) on SAP HANA, and dynamic caches are called [Dynamic Result Cache](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/bc12a173118548e9be8b69f1d62dfae1).
-   A DDIC dynamic cache is generated as SQL view on the database. Therefore, it is also referred to as *view cache*.

abenabap.html abenabap\_dictionary.html abenddic\_tuning\_objects.html