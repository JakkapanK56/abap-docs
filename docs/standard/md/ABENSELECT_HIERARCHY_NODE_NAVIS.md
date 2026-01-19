---
title: "ABENSELECT_HIERARCHY_NODE_NAVIS"
description: |
  ABENSELECT_HIERARCHY_NODE_NAVIS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSELECT_HIERARCHY_NODE_NAVIS.htm"
abapFile: "ABENSELECT_HIERARCHY_NODE_NAVIS.html"
keywords: ["select", "insert", "while", "if", "case", "class", "data", "types", "ABENSELECT", "HIERARCHY", "NODE", "NAVIS"]
---

``... \{HIERARCHY_DESCENDANTS      |HIERARCHY_ANCESTORS      |HIERARCHY_SIBLINGS\}(         SOURCE [`hierarchy`](ABENSELECT_HIERARCHY.html)\         START WHERE [`sql_cond`](ABENABAP_SQL_EXPR_LOGEXP.html)\        [DISTANCE [FROM n1]\ [TO n2]] ) ...``

[1. `HIERARCHY_DESCENDANTS( ... )`](#ABAP_VARIANT_1@1@)

[2. `HIERARCHY_ANCESTORS( ... )`](#ABAP_VARIANT_2@1@)

[3. `HIERARCHY_SIBLINGS( ... )`](#ABAP_VARIANT_3@1@)

[`... DISTANCE [FROM n1]\ [TO n2]`](#ABAP_ONE_ADD@1@)

Specifies a [hierarchy node navigator](ABENHIERARCHY_NODE_NAVI_GLOSRY.html) as a data source [`data_source`](ABAPSELECT_DATA_SOURCE.html) in an ABAP SQL [query](ABENASQL_QUERY_GLOSRY.html). It accesses and evaluates the [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html)\\ [`hierarchy`](ABENSELECT_HIERARCHY.html) specified after `SOURCE`.

After `START WHERE`, a logical expression [`sql_cond`](ABENABAP_SQL_EXPR_LOGEXP.html) must be specified that contains conditions for [hierarchy nodes](ABENHIERARCHY_NODE_GLOSRY.html) of the SQL hierarchy after `SOURCE`. The columns of the hierarchy can also be used as operands here. Any hierarchy nodes that meet the conditions are the [start nodes](ABENSTART_NODE_GLOSRY.html) of the hierarchy navigators. They evaluate the SQL hierarchy [`hierarchy`](ABENSELECT_HIERARCHY.html) specified after `SOURCE`, starting from all start nodes, and insert the selected hierarchy nodes into their result set.

In addition to the [hierarchy columns](ABENDDDDL_HIERARCHY.html) of the SQL hierarchy specified after `SOURCE`, the result set of each of these hierarchy navigators contains two further hierarchy columns:

In each row of the result set, these columns contain the values of the [hierarchy columns](ABENDDDDL_HIERARCHY.html)\\ `HIERARCHY_RANK` and `NODE_ID` of the associated start nodes.

The hierarchy navigator `HIERARCHY_DESCENDANTS` selects all [descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html) of the [start nodes](ABENSTART_NODE_GLOSRY.html) and the start nodes themselves, from the SQL hierarchy [`hierarchy`](ABENSELECT_HIERARCHY.html) specified after `SOURCE`. In addition the [hierarchy columns](ABENDDDDL_HIERARCHY.html) of the SQL hierarchy specified after `SOURCE`, plus `START_RANK` and `START_ID`, the result set contains a further hierarchy column, `HIERARCHY_DISTANCE`, with the type `INT4`, which contains the distance to the respective start node. This distance is the positive difference between the hierarchy levels `HIERARCHY_LEVEL` of the individual [child nodes](ABENCHILD_NODE_GLOSRY.html) and the respective start nodes.

Call of the hierarchy navigator `HIERARCHY_DESCENDANTS` in the class `CL_DEMO_HIERARCHY_NAVIGATORS`, where the hierarchy generator `HIERARCHY` is specified as the source. When executed, `CL_DEMO_HIERARCHY_NAVIGATORS` demonstrates how this hierarchy navigator works. It also displays the value of the hierarchy column `HIERARCHY_DISTANCE`.

The hierarchy navigator `HIERARCHY_ANCESTORS` selects all [ancestor nodes](ABENANCESTOR_NODE_GLOSRY.html) of the [start nodes](ABENSTART_NODE_GLOSRY.html), as well as the start nodes themselves, from the SQL hierarchy specified after `SOURCE`. In addition to the [hierarchy columns](ABENDDDDL_HIERARCHY.html) of the SQL hierarchy specified after `SOURCE`, plus `START_RANK` and `START_ID`, the result set contains a further hierarchy column, `HIERARCHY_DISTANCE`, with the type `INT4`, which contains the distance to the respective start node. This distance is the negative difference between the hierarchy levels `HIERARCHY_LEVEL` of the individual [parent nodes](ABENPARENT_NODE_GLOSRY.html) and the respective start nodes.

Call of the hierarchy navigator `HIERARCHY_ANCESTORS` in the class `CL_DEMO_HIERARCHY_NAVIGATORS`, where the CDS hierarchy `DEMO_CDS_SIMPLE_TREE` is specified as a source. When executed, this class demonstrates how this hierarchy navigator works. It also displays the value of the additional hierarchy column `HIERARCHY_DISTANCE`.

The hierarchy navigator `HIERARCHY_SIBLINGS` selects all [sibling nodes](ABENSIBLING_NODE_GLOSRY.html) of the [start nodes](ABENSTART_NODE_GLOSRY.html), as well as the start nodes themselves, from the SQL hierarchy specified after `SOURCE`. In addition to the [hierarchy columns](ABENDDDDL_HIERARCHY.html) of the SQL hierarchy specified after `SOURCE`, plus `START_RANK` and `START_ID`, the result set contains a further hierarchy column, `HIERARCHY_SIBLING_DISTANCE`, with the type `INT4`, which contains the distance to the respective start node. This is the positive or negative difference between the numbers `HIERARCHY_RANK` of the sibling nodes and the respective start nodes.

If the values in the additional column `HIERARCHY_SIBLING_DISTANCE` are accessed, the addition `SIBLINGS ORDER BY` should be used in the SQL hierarchy specified after `SOURCE`. Otherwise, the values remain undefined.

Call of the hierarchy navigator `HIERARCHY_SIBLINGS` in the class `CL_DEMO_HIERARCHY_NAVIGATORS`, where the [CTE hierarchy](ABENCTE_HIERARCHY_GLOSRY.html)\\ `+hierarchy` is specified a source. When executed, this class demonstrates how this hierarchy navigator works. It also displays the value of the additional hierarchy column `HIERARCHY_SIBLING_DISTANCE`.

In the case of the hierarchy navigators `HIERARCHY_DESCENDANTS` and `HIERARCHY_ANCESTORS`, the addition `DISTANCE` restricts the distance to the respective [start node](ABENSTART_NODE_GLOSRY.html). The addition `DISTANCE` cannot be specified for the hierarchy navigator `HIERARCHY_SIBLINGS`.

At least one of the additions `FROM` or `TO` must be specified in the order shown. `n1` and `n2` expect [host variables](ABENABAP_SQL_HOST_VARIABLES.html), [host expressions](ABENABAP_SQL_LITERALS.html), or [literals](ABENABAP_SQL_LITERALS.html) with the type `i`. Only the types `b`, `s`, or `i` can be used. Only those hierarchy nodes are selected for which the value of the hierarchy column `HIERARCHY_DISTANCE` is between the values of `n1` and `n2`. If the value of `n1` is greater than `n2`, no hierarchy node is selected. If `TO`, is not specified, there is no upper limit. If `FROM`, is not specified, there is no lower limit.

Call of the hierarchy navigator `HIERARCHY_DESCENDANTS` in the class `CL_DEMO_HIERARCHY_DISTANCE` while specifying the addition `DISTANCE`. When executed, this class demonstrates how this addition works. If, for example, the value *2* is specified for `n1` and `3` is specified for `n2`, only the grandchildren nodes and great-grandchildren nodes of the start node are selected. If `-3` is specified for `n1` and `-2` is specified for `n2`, the result set of `HIERARCHY_DESCENDANTS` is empty. For these values, on the other hand, the result set of `HIERARCHY_ANCESTORS` contains the grandparents and great-grandparents of the start node.

-   `START_RANK` with the type `INT8`
-   `START_ID` with the type `SSTRING` and length 1333

-   The function of the addition `DISTANCE` can also be achieved using the comparison operator [`BETWEEN`](ABENWHERE_LOGEXP_INTERVAL.html) for the hierarchy column `HIERARCHY_DISTANCE`. In this case, the selection is applied to the result set of the hierarchy navigator rather than being performed by the navigator itself.
-   To get hierarchy nodes in the result set of `HIERARCHY_DESCENDANTS`, the interval boundaries must include positive values. To get hierarchy nodes in the result set of `HIERARCHY_ANCESTORS`, the interval boundaries must include negative values.
-   To exclude the start nodes from the result set, the additions `FROM` and `TO` can be used as follows:

-   If `FROM 1` is specified without the addition `TO`, `HIERARCHY_DESCENDANTS` selects only [descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html)
-   If `TO -1` is specified without the addition `FROM`, `HIERARCHY_ANCESTORS` selects only the [ancestor nodes](ABENANCESTOR_NODE_GLOSRY.html)

FINAL(id) = 6. \\n\\ \\nSELECT FROM HIERARCHY\_DESCENDANTS( \\n SOURCE HIERARCHY( \\n SOURCE demo\_cds\_simple\_tree\_source \\n CHILD TO PARENT ASSOCIATION \_tree \\n START WHERE id = 1 \\n SIBLINGS ORDER BY id ASCENDING ) \\n START WHERE id = @id ) \\n FIELDS id, \\n parent\_id, \\n hierarchy\_rank, \\n hierarchy\_level, \\n hierarchy\_tree\_size, \\n hierarchy\_distance \\n INTO TABLE @FINAL(descendants). FINAL(id) = 6. \\n\\ \\nSELECT FROM HIERARCHY\_ANCESTORS( \\n SOURCE demo\_cds\_simple\_tree( p\_id = 1 ) \\n START WHERE id = @id ) \\n FIELDS id, \\n parent\_id, \\n hierarchy\_rank, \\n hierarchy\_level, \\n hierarchy\_tree\_size, \\n hierarchy\_distance \\n INTO TABLE @FINAL(ancestors). FINAL(id) = 6. \\n\\ \\nWITH +hierarchy AS ( \\n SELECT FROM HIERARCHY( \\n SOURCE demo\_cds\_simple\_tree\_source \\n CHILD TO PARENT ASSOCIATION \_tree \\n START WHERE id = 1 \\n SIBLINGS ORDER BY id ASCENDING ) AS hierarchy \\n FIELDS id, \\n parent ) WITH HIERARCHY hierarchy \\n SELECT FROM HIERARCHY\_SIBLINGS( \\n SOURCE +hierarchy \\n START WHERE id = @id ) \\n FIELDS id, \\n parent\_id, \\n hierarchy\_rank, \\n hierarchy\_level, \\n hierarchy\_tree\_size, \\n hierarchy\_sibling\_distance \\n INTO TABLE @FINAL(siblings). FINAL(id) = 1. \\nFINAL(n1) = 2. \\nFINAL(n2) = 3. \\n\\ \\nSELECT FROM HIERARCHY\_DESCENDANTS( \\n SOURCE HIERARCHY( \\n SOURCE demo\_cds\_simple\_tree\_source \\n CHILD TO PARENT ASSOCIATION \_tree \\n START WHERE id = 1 \\n SIBLINGS ORDER BY id ASCENDING ) \\n START WHERE id = @id \\n DISTANCE FROM @n1 TO @n2 ) \\n FIELDS id, \\n parent\_id, \\n hierarchy\_rank, \\n hierarchy\_level, \\n hierarchy\_tree\_size, \\n hierarchy\_distance \\n INTO TABLE @FINAL(descendants). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapfrom\_clause.html abapselect\_data\_source.html abenselect\_hierarchy\_data.html abenselect\_hierarchy\_navigators.html