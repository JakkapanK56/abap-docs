---
title: "ABENCL_OSQL_EXTENDED_RESULT"
description: |
  ABENCL_OSQL_EXTENDED_RESULT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCL_OSQL_EXTENDED_RESULT.htm"
abapFile: "ABENCL_OSQL_EXTENDED_RESULT.html"
keywords: ["select", "if", "class", "data", "ABENCL", "OSQL", "EXTENDED", "RESULT"]
---

An object of the system class `CL_OSQL_EXTENDED_RESULT` can be specified with the addition [`EXTENDED RESULT`](ABAPSELECT_EXTENDED_RESULT.html) of an [`INTO`](ABAPINTO_CLAUSE.html) clause as the target object for an extended result of a [`SELECT`](ABAPSELECT.html), [`WITH`](ABAPWITH.html), or [`FETCH`](ABAPFETCH.html) statement. First, the object must be created, and the instance constructor must be informed which values the extended result should contain.

Currently, an extended result can be used to check whether a [query](ABENASQL_QUERY_GLOSRY.html) has read data from the cache when accessing a [cached view](ABENHANA_CACHED_VIEWS.html) of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html).

See [SAP HANA, Cached Views](ABENHANA_CACHED_VIEWS_ABEXA.html)

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abencl\_osql.html