---
title: "ABENCDS_SELECT_STATEMENT_V2"
description: |
  ABENCDS_SELECT_STATEMENT_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_SELECT_STATEMENT_V2.htm"
abapFile: "ABENCDS_SELECT_STATEMENT_V2.html"
keywords: ["select", "if", "case", "try", "class", "data", "types", "ABENCDS", "SELECT", "STATEMENT"]
---

``SELECT [DISTINCT] FROM [`data_source`](ABENCDS_DATA_SOURCE_V2.html)\         [[`association1`](ABENCDS_SIMPLE_ASSOCIATION_V2.html)\ [`association2`](ABENCDS_SIMPLE_ASSOCIATION_V2.html) ...]\         [[`aspect binding`](ABENCDS_BIND_ASPECT.html)]\             \{[`select_list`](ABENCDS_SELECT_LIST_V2.html)\}         [[`clauses`](ABENCDS_SELECT_CLAUSES_V2.html)]``

In a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), as part of the statement `DEFINE VIEW ENTITY`, a `SELECT` statement defines a query performed on the data sources specified in [`data_source`](ABENCDS_DATA_SOURCE_V2.html). Possible data sources are [DDIC database tables](ABENDDIC_DATABASE_TABLES.html), [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html), [CDS hierarchies](ABENCDS_HIERARCHY_GLOSRY.html), or [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html).

The CDS view entity `DEMO_CDS_BUPA_NAME` shown below is based on the existing [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html)\\ `DEMO_SALES_CDS_BUPA`. In the `SELECT` list, the element `family_name` is defined, assigned the alias name `last_name`, and given the comment `Business partner last name`.

The CDS view entity `DEMO_CDS_BUPA_NAME` can be addressed in ABAP programs using ABAP SQL, for example:

The following CDS view entity removes any duplicate values of the result set using `DISTINCT`.

The class `CL_DEMO_CDS_DISTINCT` first fills the underlying database table and then accesses the view using [`SELECT`](ABAPSELECT.html). One duplicate entry is removed from the result set.

The addition `DISTINCT` of `SELECT` is no longer needed in this case.

-   `DISTINCT` removes duplicates from the result set. If `DISTINCT` is specified, the elements cannot have the [type](ABENDDIC_BUILTIN_TYPES.html)\\ `LCHR`, `LRAW`, `STRING`, `RAWSTRING`, or `GEOM_EWKB`.
-   **Note** For determining duplicate rows, **all** columns are considered and not just key fields.
-   [`association1`](ABENCDS_SIMPLE_ASSOCIATION_V2.html), [`association2`](ABENCDS_SIMPLE_ASSOCIATION_V2.html), ... define CDS associations for the current `SELECT` statement. These CDS associations can be accessed in [`data_source`](ABENCDS_DATA_SOURCE_V2.html) and in [`select_list`](ABENCDS_SELECT_LIST_V2.html) using [path expressions](ABENCDS_PATH_EXPRESSION_V2.html).
-   [`aspect binding`](ABENCDS_BIND_ASPECT.html): Optionally, one or more CDS aspects can be bound to the view entity.
-   The [`select_list`](ABENCDS_SELECT_LIST_V2.html) defines the components read in a list.
-   The optional addition [`clauses`](ABENCDS_SELECT_CLAUSES_V2.html) are `SELECT` clauses that enable conditions, groupings, or set operators.

-   The syntax `SELECT *` to select all elements from the data source is **not** supported in CDS view entities. This syntax can be used in ABAP SQL and in [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), but **not** in CDS view entities.
-   For an overview of all possible data sources of all available CDS entities, see [Data Source Matrix](ABENCDS_DATA_SOURCE_MATRIX.html).

@EndUserText.label: 'CDS view entity business partner name'\\ndefine view entity DEMO\_CDS\_BUPA\_NAME\\n as select from\\n DEMO\_SALES\_CDS\_BUPA\\n \\{\\n family\_name as last\_name // Business partner last name\\n \\}\\n SELECT \* FROM demo\_cds\_bupa\_name INTO TABLE @itab ... @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, select distinct'\\n\\ndefine view entity DEMO\_CDS\_DISTINCT\\n as select distinct from demo\_dbtab\_child\\n\\{\\n key key\_field,\\n char\_field\\n\\}\\nwhere\\n key\_field = 1 // 3 entries, 2 duplicate\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html