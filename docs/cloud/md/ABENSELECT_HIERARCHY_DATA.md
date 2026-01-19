---
title: "ABENSELECT_HIERARCHY_DATA"
description: |
  ABENSELECT_HIERARCHY_DATA - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSELECT_HIERARCHY_DATA.htm"
abapFile: "ABENSELECT_HIERARCHY_DATA.html"
keywords: ["select", "if", "data", "internal-table", "ABENSELECT", "HIERARCHY", "DATA"]
---

``... [`hierarchy`](ABENSELECT_HIERARCHY.html)\    |\ [`hierarchy_navigator`](ABENSELECT_HIERARCHY_NAVIGATORS.html) ...``

Specifies hierarchy data as a data source [`data_source`](ABAPSELECT_DATA_SOURCE.html) in an ABAP SQL [query](ABENASQL_QUERY_GLOSRY.html). Possible hierarchy data is:

Access to hierarchy data is not supported by all databases.

Access to the [hierarchy navigator](ABENHIERARCHY_NAVIGATOR_GLOSRY.html)\\ [`HIERARCHY_SIBLINGS`](ABENSELECT_HIERARCHY_NAVIGATORS.html) as the data source of a query. The hierarchy navigator uses a CDS hierarchy as a source.

-   An [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html)\\ [`hierarchy`](ABENSELECT_HIERARCHY.html)
-   A [hierarchy navigator](ABENHIERARCHY_NAVIGATOR_GLOSRY.html)\\ [`hierarchy_navigator`](ABENSELECT_HIERARCHY_NAVIGATORS.html) that accesses an SQL hierarchy.

-   Hierarchy data as data sources are handled like any other data source. They can have alias names defined using [`AS`](ABAPFROM_CLAUSE.html) and can be used in join expressions. There are no restrictions on which [queries](ABENASQL_QUERY_GLOSRY.html) they can be used in.
-   Hierarchy data cannot be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). An ABAP SQL statement that accesses hierarchy data bypasses the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

FINAL(id) = 5. \\n\\ \\nSELECT FROM HIERARCHY\_SIBLINGS( \\n SOURCE demo\_cds\_simple\_tree( p\_id = 1 ) \\n START WHERE id = @id ) \\n FIELDS id, \\n parent\_id, \\n hierarchy\_rank, \\n hierarchy\_level, \\n hierarchy\_tree\_size, \\n hierarchy\_sibling\_distance \\n INTO TABLE @FINAL(ancestors). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapfrom\_clause.html abapselect\_data\_source.html