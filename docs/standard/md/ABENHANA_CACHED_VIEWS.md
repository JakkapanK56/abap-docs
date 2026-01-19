---
title: "ABENHANA_CACHED_VIEWS"
description: |
  ABENHANA_CACHED_VIEWS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENHANA_CACHED_VIEWS.htm"
abapFile: "ABENHANA_CACHED_VIEWS.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENHANA", "CACHED", "VIEWS"]
---

The [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) supports the concept of cached views. Under certain circumstances, the results of reads of a view can be cached in a cache to avoid repeated aggregation. For more information, see the [SAP HANA documentation](https://help.sap.com/docs/SAP_HANA_PLATFORM/de855a01ee2248dfb139088793f8802a/550f3966082c4cc4a495d001bc607a05).

Caching can also be used for such views in read ABAP SQL statements. The following conditions must be met:

If these prerequisites are met and a suitable cache exists, queries of the same type read from the cache. To find out whether a cache was used, how old its data is, and the maximum lifetime of the data in the cache, the addition [`EXTENDED RESULT`](ABAPSELECT_EXTENDED_RESULT.html) of the [`INTO`](ABAPINTO_CLAUSE.html) clause can be used to provide the result object with the corresponding information. To do this, the value `abap_true` must be passed to the parameter `IV_CACHED_VIEW` of the instance constructor of the class [`CL_OSQL_EXTENDED_RESULT`](ABENCL_OSQL_EXTENDED_RESULT.html) when the object is created. The methods for reading the relevant values start with the prefix `CVIEW_`.

For cached views, an alternative for handling the exception `CX_OSQL_EXTENDED_RESULT` is to execute the method `CVIEW_VALID` for the result object of [`EXTENDED RESULT`](ABAPSELECT_EXTENDED_RESULT.html) to determine the validity of the extended result.

See [SAP HANA, Cached Views](ABENHANA_CACHED_VIEWS_ABEXA.html)

-   The type of a view known in ABAP SQL ([DDIC database view](ABENDATABASE_VIEW_GLOSRY.html) in the ABAP Dictionary or [CDS view](ABENCDS_VIEW_GLOSRY.html)) must be defined for the caching. Here, the SQL statement `ALTER TABLE` (described in the documentation for [HANA-specific SQL](ABENDATABASE_VIEW_GLOSRY.html)) can be used with the addition `ADD CACHE`. [ABAP Dictionary](ABENABAP_DICTIONARY.html) supports the concept of [dynamic caches](ABENDDIC_DYNAMIC_CACHES.html) for this purpose.
-   The use of the cache must be activated in the ABAP SQL [query](ABENASQL_QUERY_GLOSRY.html) by using the [database hint](ABENDATABASE_HINT_GLOSRY.html)\\ `[%_HINTS HDB](ABENABAP_SQL_DB_HINTS.html) 'RESULT_CACHE'`.
-   The ABAP SQL [query](ABENASQL_QUERY_GLOSRY.html) must have [aggregate expressions](ABAPSELECT_AGGREGATE.html) and a [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) clause.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_hana.html