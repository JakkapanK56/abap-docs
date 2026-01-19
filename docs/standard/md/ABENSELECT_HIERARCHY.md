---
title: "ABENSELECT_HIERARCHY"
description: |
  ABENSELECT_HIERARCHY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSELECT_HIERARCHY.htm"
abapFile: "ABENSELECT_HIERARCHY.html"
keywords: ["select", "do", "while", "if", "case", "class", "data", "internal-table", "ABENSELECT", "HIERARCHY"]
---

``... [`cds_hierarchy`](ABENSELECT_CDS_HIERARCHY.html)\    |\ [`HIERARCHY( ... )`](ABENSELECT_HIERARCHY_GENERATOR.html)\    |\ [`cte_hierarchy`](ABENSELECT_CTE_HIERARCHY.html)``

Specifies an [ABAP SQL hierarchy](ABENSQL_HIERARCHIES.html) as a data source in an ABAP SQL query.

When an ABAP SQL hierarchy is used as a data source in an ABAP SQL query, its additional [hierarchy columns](ABENDDDDL_HIERARCHY.html) can be accessed as follows:

The following classes demonstrate the three ways of specifying SQL hierarchies as the data source of a `SELECT` statement while reading all possible [hierarchy columns](ABENDDDDL_HIERARCHY.html).

-   The following can be specified:

-   A [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html)\\ [`cds_hierarchy`](ABENSELECT_CDS_HIERARCHY.html)
-   The [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html)
-   A [CTE hierarchy](ABENCTE_HIERARCHY_GLOSRY.html)\\ [`cte_hierarchy`](ABENSELECT_CTE_HIERARCHY.html)

-   An ABAP SQL hierarchy can be specified in the following places:

-   As a data source [`data_source`](ABAPSELECT_DATA_SOURCE.html) in an ABAP SQL [query](ABENASQL_QUERY_GLOSRY.html).
-   As the source of a [hierarchy navigator](ABENSELECT_HIERARCHY_NAVIGATORS.html)
-   As the source of the hierarchy generator [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html)

-   In the [`SELECT`](ABAPSELECT_LIST.html) list

-   Hierarchy columns can be specified as regular columns using [`colname`](ABENABAP_SQL_COLUMNS.html) and then become part of the result set of the query.
-   If `*` or `...~*` is specified, hierarchy columns are not part of the result set of the query. Only the components of the source of the SQL hierarchy are respected. In this case, the hierarchy columns are also ignored by any structure or internal table created in the [`INTO` clause](ABAPINTO_CLAUSE.html) by an inline declaration `@DATA|@FINAL(...)`.

-   In other clauses, hierarchy columns can be specified regardless of the `SELECT` list and are evaluated accordingly.

-   It is possible to evaluate the [hierarchy columns](ABENDDDDL_HIERARCHY.html) in a query, but this is not mandatory. In most cases, only the data content of an SQL hierarchy is of interest and not the technical properties of the hierarchy nodes.
-   On [SAP HANA databases](ABENHANA_DATABASE_GLOSRY.html), the result sets of CDS hierarchies and the hierarchy generator `HIERARCHY` are created using the SAP HANA hierarchy generator function `HIERARCHY` and similar. For more information, see [SAP HANA documentation](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f).

-   `CL_DEMO_HIERARCHY_TREE`
-   `CL_DEMO_HIERARCHY_PARENT_CHILD`
-   [ABAP SQL - Working with Hierarchies](ABENABAP_SQL_HIERA_ABEXA.html)

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapfrom\_clause.html abapselect\_data\_source.html abenselect\_hierarchy\_data.html