---
title: "ABENDDICDDL_DEFINE_STATIC_CACHE"
description: |
  ABENDDICDDL_DEFINE_STATIC_CACHE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDICDDL_DEFINE_STATIC_CACHE.htm"
abapFile: "ABENDDICDDL_DEFINE_STATIC_CACHE.html"
keywords: ["select", "do", "if", "data", "ABENDDICDDL", "DEFINE", "STATIC", "CACHE"]
---

`DEFINE STATIC CACHE cache_name    ON view_entity_name  \{ element_list \}  [RETENTION retention_in_minutes]\  [SEGREGATE CACHE DATA BY filter_cond]\  [CREATION CONFIGURABLE DEFAULT \{ON|OFF\}];`

[Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html) statement used to define a [static cache](ABENSTATIC_VIEW_CACHE_GLOSRY.html) for a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). The naming rules for CDS objects apply to static caches as well. A static cache is defined on a view entity `view_entity_name`, after which the element list that is to be included in the cache must be defined. Not all elements of the select list of the view entity need to be included in the cache.

The cache is kept stable for a retention time, defined in minutes by `RETENTION`, after which it is invalidated.

Filtering cached data can be done with the optional statement `SEGREGATE CACHE DATA BY`.

Caches can be toggled on and off with the transaction `S_DBCACHE_CONFIG`. The default state of the cache can be controlled using the statement `CREATION CONFIGURABLE DEFULT`, or otherwise the corresponding Fiori app *Manage Cache Configuration*. If the statement is not included in the static cache source code, the cache will always be active on the HANA database. If the statement is used, the cache will be able to be toggled.

There are some limitations to static caches:

-   The element list of static caches must not be empty
-   View entities with parameters cannot be cached
-   `AVG` cannot be used

abenabap.html abencds.html abencds\_tuning\_objects.html abenddic\_static\_caches.html