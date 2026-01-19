---
title: "ABAPWITH_HIERARCHY"
description: |
  ABAPWITH_HIERARCHY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWITH_HIERARCHY.htm"
abapFile: "ABAPWITH_HIERARCHY.html"
keywords: ["select", "if", "case", "catch", "class", "data", "ABAPWITH", "HIERARCHY"]
---

`... WITH HIERARCHY hierarchy                   | (hierarchy_syntax)`

The addition `WITH HIERARCHY` exposes a common table expression as a [CTE hierarchy](ABENCTE_HIERARCHY_GLOSRY.html). Under its name, a common table expression like this can be used in the subsequent queries of the current [`WITH`](ABAPWITH.html) statement as an [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html)\\ [`hierarchy`](ABENSELECT_HIERARCHY.html).

Only a single data source can be accessed in the subquery of the common table expression and this data source must be an [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html)\\ [`hierarchy`](ABENSELECT_HIERARCHY.html). The SQL hierarchy used as the data source of the subquery can be specified either statically or dynamically after `HIERARCHY`.

The result set of a common table expression exposed as a CTE hierarchy includes the [hierarchy columns](ABENDDDDL_HIERARCHY.html) of the SQL hierarchy specified in the subquery. The [`SELECT`](ABAPSELECT_LIST.html) list of the subquery must not contain any columns with the same name or alias name as a hierarchy column.

If `hierarchy_syntax` is specified dynamically, it is possible to decide at runtime whether a common table expression is exposed as a CTE hierarchy.

This excerpt from the class `CL_DEMO_HIERARCHY_CTE` accesses CTE hierarchies in two hierarchy navigators [`HIERARCHY_DESCENDANTS`](ABENHIERARCHY_NAVIGATOR_GLOSRY.html) joined in the main query of a [`WITH`](ABAPWITH.html) statement using a left outer join. The first CTE hierarchy represents the [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html)\\ `DEMO_CDS_PARENT_CHILD`, which is accessed in its subquery. The second CTE hierarchy represents the result set of the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html), which is used in its subquery. The `ON` condition of the join compares two [hierarchy columns](ABENHIERARCHY_COLUMN_GLOSRY.html) of the CTE hierarchies. Executing `CL_DEMO_HIERARCHY_CTE` shows the result.

-   `hierarchy` is used to specify either the name of the SQL hierarchy or its alias name defined using [`AS`](ABAPFROM_CLAUSE.html). When the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html) is used, it must have an alias name and this name must be specified.
-   A parenthesized data object `hierarchy_syntax` can be specified. When the statement is executed, this data object must either contain the static syntax specifying the SQL hierarchy or be initial. In this case, the common table expression can be used only in other dynamic tokens of the `WITH` statement. The data object `hierarchy_syntax` can be a character-like data object or a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) with a character-like row type. The syntax in `hierarchy_syntax`, as in the static syntax, is not case-sensitive. Invalid syntax raises a catchable exception of the class `CX_SY_DYNAMIC_OSQL_ERROR`. If `hierarchy_syntax` is initial, the common table expression is not exposed as an SQL hierarchy.

WITH +hierarchy1 AS ( \\n SELECT FROM demo\_cds\_parent\_child( p\_id = 'A' ) \\n FIELDS id AS id1, \\n parent AS parent1 ) \\n WITH HIERARCHY demo\_cds\_parent\_child, \\n +hierarchy2 AS ( \\n SELECT FROM HIERARCHY( SOURCE demo\_cds\_parent\_child\_source \\n CHILD TO PARENT ASSOCIATION \_relat \\n START WHERE id = 'U' ) AS hierarchy \\n FIELDS id AS id2, \\n parent AS parent2 ) \\n WITH HIERARCHY hierarchy \\n SELECT FROM HIERARCHY\_DESCENDANTS( \\n SOURCE +hierarchy1 \\n START WHERE hierarchy\_parent\_rank = 0 \\n DISTANCE FROM 1 ) AS h1 \\n LEFT OUTER JOIN \\n HIERARCHY\_DESCENDANTS( \\n SOURCE +hierarchy2 \\n START WHERE hierarchy\_parent\_rank = 0 \\n DISTANCE FROM 1 ) AS h2 \\n ON h1~hierarchy\_rank = h2~hierarchy\_rank \\n FIELDS h1~id1, \\n h2~id2, \\n h1~parent1, \\n h2~parent2 \\n INTO TABLE @FINAL(result). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abapwith.html