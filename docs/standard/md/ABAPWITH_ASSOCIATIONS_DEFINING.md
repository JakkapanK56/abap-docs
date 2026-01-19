---
title: "ABAPWITH_ASSOCIATIONS_DEFINING"
description: |
  ABAPWITH_ASSOCIATIONS_DEFINING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWITH_ASSOCIATIONS_DEFINING.htm"
abapFile: "ABAPWITH_ASSOCIATIONS_DEFINING.html"
keywords: ["select", "do", "if", "class", "data", "internal-table", "ABAPWITH", "ASSOCIATIONS", "DEFINING"]
---

``... JOIN cardinality target AS _assoc        ON [`sql_cond`](ABENABAP_SQL_EXPR_LOGEXP.html) ...``

[`... cardinality`](#ABAP_ONE_ADD@1@)

Specifying `JOIN` initiates the definition and exposure of a [CTE association](ABENCTE_ASSOCIATION_GLOSRY.html) with the name `_assoc` in the addition [`WITH ASSOCIATIONS`](ABAPWITH_ASSOCIATIONS.html) when a common table expression is defined in a [`WITH`](ABAPWITH.html) statement.

A CTE association joins the current common table expression `+cte` as an [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) with the [association target](ABENASSOCIATION_TARGET_GLOSRY.html)\\ `target` specified in the definition of the CTE association using an `ON` condition [`sql_cond`](ABENABAP_SQL_EXPR_LOGEXP.html). All [data sources](ABAPSELECT_DATA_SOURCE.html) visible and usable in this position can be specified for `target`.

`AS` must be used to specify a name `_assoc` for the CTE association under which it can be addressed in the subsequent queries of the current `WITH` statement. The name can contain letters, digits, the minus sign (`-`), and the underscore (`_`) in any order.

By specifying its name, a CTE association of a common table expression can be used in the subsequent queries of the same `WITH` statement in all operand positions for associations. These are elements of [path expressions](ABENABAP_SQL_PATH.html) or the specification of [hierarchy associations](ABENHIERARCHY_ASSOCIATION_GLOSRY.html).

When a CTE association is used in a path expression, it is transformed to a join expression. The [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) represents the left side and the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) represents the right side. The `ON` condition of the CTE association is added to the `ON` condition of the join. The category of the join is determined by where the path expression is used:

The following applies when the `ON` condition [`sql_cond`](ABENABAP_SQL_EXPR_LOGEXP.html) is specified:

It is mandatory to specify a [cardinality](ABENCARDINALITY_GLOSRY.html)\\ `cardinality`. A cardinality for both the source and the target, or only for the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the CTE association is possible. The following options are available:

This cardinality is used by some database systems for performance optimizations. This works in the same way as for cardinality specifications in [join expressions](ABAPSELECT_JOIN.html). This means that an optimization is attempted, and the result can be undefined if the result set does not match the cardinality.

To avoid undefined and platform-dependent behavior, the cardinality should always be defined to match the data to be read.

The following `WITH` statement from the class `CL_DEMO_WITH_ASSOCIATIONS_JOIN` demonstrates the way [CTE associations](ABENCTE_ASSOCIATION_GLOSRY.html) are defined and used. The example works in exactly the same way as the [executable example](ABENPATH_EXPR_IN_FROM_CLAUSE_ABEXA.html) for path expressions in the `FROM` clause. The CDS views and CDS associations used here are replaced one by one by common table expressions and CTE associations. When executing `CL_DEMO_WITH_ASSOCIATIONS_JOIN`, the class displays the result and compares the behavior of CTE associations and CDS associations when accessed.

The following `WITH` statement from the class `CL_DEMO_WITH_ASSCTNS_HIERA` demonstrates the way a common table expression `+parent_child_source` and its CTE association `_relat` are used as the data source and [hierarchy association](ABENHIERARCHY_ASSOCIATION_GLOSRY.html) of the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html). The CTE association `_relat` is a [self-association](ABENSELF_ASSOCIATION_GLOSRY.html). When executing `CL_DEMO_WITH_ASSCTNS_HIERA`, the class displays the result and compares it with the result when a similar CDS view and CDS association are used in the hierarchy generator.

-   After [`FROM`](ABAPFROM_CLAUSE.html), it is an inner join (`INNER JOIN`)
-   As a [column specification](ABENABAP_SQL_COLUMNS.html), it is a left outer join (`LEFT OUTER JOIN`)

-   Any fields in the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) can be prefixed with the name of the CTE association `_assoc.`. Any fields in the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) can be prefixed with the name of the common table expression `+cte`. The prefix is separated using the [column selector](ABENTABLE_COMP_SELECTOR_GLOSRY.html)\\ `~`. These specifications are mandatory only if the names of the fields occur in both data sources.
-   Any fields of the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) specified in the `ON` condition must be listed in the [`SELECT` list](ABAPSELECT_LIST.html) of the common table expression so that a join expression can be built from the CTE association when used in a path expression. The names defined in the common table expression must be used here. These are either the alias names defined using `AS` or the names defined in an optional name list.

-   A CTE association cannot be used in the same common table expression for which it is defined.
-   More specifically, [internal tables](ABAPSELECT_ITAB.html) or previously defined common table expressions of the same `WITH` statement and the current common table expression itself can also be specified as [association targets](ABENASSOCIATION_TARGET_GLOSRY.html). The latter is a [self-association](ABENSELF_ASSOCIATION_GLOSRY.html).
-   It is advisable to use an underscore `_` as the first character of the CTE association name.
-   The character `+` cannot be used as the first character of a CTE association name, which means there can be no naming conflicts in the `ON` condition.
-   A common table expression that defines and exposes a self-association can be used as the source of the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html). More specifically, this makes it possible to also use internal tables as the source of hierarchies.
-   For the latter, see the [executable example](ABENSELECT_FROM_ITAB_HIERA_ABEXA.html).
-   A common table expression for which a CTE association is defined can also be a result set merged using [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), or [`EXCEPT`](ABAPUNION.html). The columns specified in the `ON` condition refer to the merged result set.
-   The definition of a CTE association enforces [strict mode from ABAP release 7.74](ABENABAP_SQL_STRICTMODE_774.html).

-   `ONE TO ONE`
-   `ONE TO MANY`
-   `ONE TO EXACT ONE`
-   `EXACT ONE TO ONE`
-   `EXACT ONE TO MANY`
-   `EXACT ONE TO EXACT ONE`
-   `MANY TO ONE`
-   `MANY TO MANY`
-   `MANY TO EXACT ONE`
-   `TO ONE`
-   `TO MANY`

DATA: \\n tz TYPE s\_tzone VALUE 'UTC+1', \\n currc TYPE s\_currcode VALUE 'EUR', \\n fltime TYPE s\_fltime VALUE 0. \\n\\ \\nWITH \\n +spfli\_scarr AS \\n ( SELECT FROM spfli \\n FIELDS carrid, \\n airpfrom, \\n fltime ) \\n WITH ASSOCIATIONS ( JOIN MANY TO ONE scarr AS \_scarr \\n ON +spfli\_scarr~carrid = \_scarr~carrid ), \\n +sairport\_tz AS \\n ( SELECT FROM sairport \\n FIELDS id \\n WHERE time\_zone = @tz ) \\n WITH ASSOCIATIONS ( JOIN MANY TO ONE +spfli\_scarr AS \_spfli \\n ON +sairport\_tz~id = \_spfli~airpfrom ) \\n SELECT DISTINCT carrname \\n FROM +sairport\_tz \\n \\\\\_spfli\[ fltime > @fltime \] \\n \\\\\_scarr\[ currcode = @( CONV s\_currcode( \\n to\_upper( currc ) ) ) \] \\n AS scarr \\n ORDER BY carrname \\n INTO TABLE @FINAL(result\_cte\_assoc). FINAL(start\_id) = CONV demo\_parent\_chld-id( 'A' ). \\n\\ \\nWITH \\n +parent\_child\_source AS \\n ( SELECT FROM demo\_parent\_chld \\n FIELDS id, \\n parent\_id AS parent ) \\n WITH ASSOCIATIONS ( JOIN MANY TO MANY +parent\_child\_source \\n AS \_relat \\n ON +parent\_child\_source~parent = \_relat~id ) \\n SELECT FROM HIERARCHY( SOURCE +parent\_child\_source \\n CHILD TO PARENT ASSOCIATION \_relat \\n START WHERE id = @start\_id \\n SIBLINGS ORDER BY id \\n MULTIPLE PARENTS ALLOWED ) \\n FIELDS id, \\n parent, \\n hierarchy\_rank, \\n hierarchy\_tree\_size, \\n hierarchy\_parent\_rank, \\n hierarchy\_level, \\n hierarchy\_is\_cycle, \\n hierarchy\_is\_orphan, \\n node\_id, \\n parent\_id \\n INTO TABLE @FINAL(cte\_result). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abapwith.html abapwith\_associations.html