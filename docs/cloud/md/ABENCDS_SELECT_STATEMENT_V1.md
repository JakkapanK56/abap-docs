---
title: "ABENCDS_SELECT_STATEMENT_V1"
description: |
  ABENCDS_SELECT_STATEMENT_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_SELECT_STATEMENT_V1.htm"
abapFile: "ABENCDS_SELECT_STATEMENT_V1.html"
keywords: ["select", "if", "data", "types", "ABENCDS", "SELECT", "STATEMENT"]
---

``SELECT [DISTINCT]\ \{\ [`select_list`](ABENCDS_SELECT_LIST_V1.html)\                      FROM [`data_source`](ABENCDS_DATA_SOURCE_V1.html)\                      [[`association1`](ABENCDS_SIMPLE_ASSOCIATION_V1.html)\ [`association2`](ABENCDS_SIMPLE_ASSOCIATION_V1.html) ...]\ \}\                  |\ \{ FROM [`data_source`](ABENCDS_DATA_SOURCE_V1.html)\                      [[`association1`](ABENCDS_SIMPLE_ASSOCIATION_V1.html)\ [`association2`](ABENCDS_SIMPLE_ASSOCIATION_V1.html) ...]\                      \{[`select_list`](ABENCDS_SELECT_LIST_V1.html)\} \}\                    [[`clauses`](ABENCDS_SELECT_CLAUSES_V1.html)]``

The `SELECT` statement defines a query performed on the data sources specified in [`data_source`](ABENCDS_DATA_SOURCE_V1.html) for a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), as part of the statement [`DEFINE VIEW`](ABENCDS_DEFINE_VIEW_V1.html). Possible data sources are [DDIC database tables](ABENDDIC_DATABASE_TABLES.html), [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html), [CDS hierarchies](ABENCDS_HIERARCHY_GLOSRY.html), or [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html).

Both variants of the code are equivalent. Curly brackets `\{ \}` must be used in the second variant before and after the `select_list`.

The optional addition [`clauses`](ABENCDS_SELECT_CLAUSES_V1.html) are `SELECT` clauses that enable conditions, groupings, and unions.

The CDS view `demo_cds_scarr_spfli` defined here is a view that joins two database tables `SCARR` and `SPFLI`.

The CDS view can be addressed in ABAP programs using ABAP SQL, for example:

-   [`select_list`](ABENCDS_SELECT_LIST_V1.html) defines the components read in a list.
-   [`association1`](ABENCDS_SIMPLE_ASSOCIATION_V1.html), [`association2`](ABENCDS_SIMPLE_ASSOCIATION_V1.html), ... define CDS associations for the current `SELECT` statement. These CDS associations can be accessed in [`data_source`](ABENCDS_DATA_SOURCE_V1.html) and in [`select_list`](ABENCDS_SELECT_LIST_V1.html) using [path expressions](ABENCDS_PATH_EXPRESSION_V1.html).
-   `DISTINCT` removes duplicates from the results list. If `DISTINCT` is specified, the elements cannot have the [type](ABENDDIC_BUILTIN_TYPES.html)\\ `LCHR`, `LRAW`, `STRING`, `RAWSTRING`, or `GEOM_EWKB`.
-   **Note** For determining duplicate rows, **all** columns are considered and not just key fields.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_JOIN'\\n@AccessControl.authorizationCheck: #NOT\_ALLOWED\\ndefine view demo\_cds\_scarr\_spfli(\\n id,\\n carrier,\\n flight,\\n departure,\\n destination\\n )\\n as select from spfli\\n join scarr on scarr.carrid = spfli.carrid\\n\\{\\n key spfli.carrid,\\n key scarr.carrname,\\n key spfli.connid,\\n spfli.cityfrom,\\n spfli.cityto\\n\\}\\n SELECT \* FROM demo\_cds\_scarr\_spfli INTO TABLE @itab ... abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html