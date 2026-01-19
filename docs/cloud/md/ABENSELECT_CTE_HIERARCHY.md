---
title: "ABENSELECT_CTE_HIERARCHY"
description: |
  ABENSELECT_CTE_HIERARCHY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSELECT_CTE_HIERARCHY.htm"
abapFile: "ABENSELECT_CTE_HIERARCHY.html"
keywords: ["select", "if", "class", "data", "ABENSELECT", "CTE", "HIERARCHY"]
---

`... +cte_hierarchy`

Specifies a [CTE hierarchy](ABENCTE_HIERARCHY_GLOSRY.html)\\ `+cte_hierarchy` as a an SQL hierarchy [`hierarchy`](ABENSELECT_HIERARCHY.html) in an ABAP SQL query of a [`WITH`](ABAPWITH.html) statement. A CTE hierarchy is a common table expression defined as an SQL hierarchy using the addition [`WITH HIERARCHY`](ABAPWITH_HIERARCHY.html).

The rows of the tabular result set of a CTE hierarchy are the [hierarchy nodes](ABENHIERARCHY_NODE_GLOSRY.html) of the SQL hierarchy accessed in its subquery, including their [hierarchy columns](ABENDDDDL_HIERARCHY.html).

More specifically, a CTE hierarchy can be specified as a source of the [hierarchy navigators](ABENHIERARCHY_NAVIGATOR_GLOSRY.html).

Specification of a CTE hierarchy as a data source of a `SELECT` statement in the class `CL_DEMO_HIERARCHY_TREE` with explicit access to the hierarchy columns. The data source of the subquery of the CTE hierarchy is a CDS hierarchy.

See also the example under [`WITH - hierarchy`](ABAPWITH_HIERARCHY.html).

FINAL(start\_id) = 1. \\n\\ \\nWITH +tree AS ( \\n SELECT FROM demo\_cds\_simple\_tree( p\_id = @start\_id ) \\n FIELDS \* ) \\n WITH HIERARCHY demo\_cds\_simple\_tree \\n SELECT FROM +tree \\n FIELDS id, \\n parent, \\n name, \\n hierarchy\_rank, \\n hierarchy\_tree\_size, \\n hierarchy\_parent\_rank, \\n hierarchy\_level, \\n hierarchy\_is\_cycle, \\n hierarchy\_is\_orphan, \\n node\_id, \\n parent\_id \\n INTO TABLE @FINAL(cte\_result). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapfrom\_clause.html abapselect\_data\_source.html abenselect\_hierarchy\_data.html abenselect\_hierarchy.html