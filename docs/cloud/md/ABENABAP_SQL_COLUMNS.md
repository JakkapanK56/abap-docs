---
title: "ABENABAP_SQL_COLUMNS"
description: |
  ABENABAP_SQL_COLUMNS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_SQL_COLUMNS.htm"
abapFile: "ABENABAP_SQL_COLUMNS.html"
keywords: ["select", "if", "case", "data", "ABENABAP", "SQL", "COLUMNS"]
---

``... [data_source|tabalias~]colname    |\ [data_source|tabalias~][`sql_path`](ABENABAP_SQL_PATH.html)-element ...``

[1. `... colname`](#ABAP_VARIANT_1@1@)

[2. `... sql_path-element`](#ABAP_VARIANT_2@1@)

[`... data_source|tabalias~`](#ABAP_ONE_ADD@1@)

Specifies a column of a [data source](ABAPSELECT_DATA_SOURCE.html) of a [query](ABENASQL_QUERY_GLOSRY.html) or the target of a [write](ABENABAP_SQL_WRITING.html) in an ABAP SQL statement.

Columns can be specified as [elementary SQL expressions](ABENSQL_ELEM.html) in all operand positions in which [SQL expressions](ABAPSQL_EXPR.html) are possible. However, they can also occur in specific operand positions in which no SQL expressions are possible.

Specifies a column of a [data source](ABAPSELECT_DATA_SOURCE.html) of a [query](ABENASQL_QUERY_GLOSRY.html) or of the target of a [write](ABENABAP_SQL_WRITING.html) directly using its name `colname` (as defined as a component of the associated DDIC structure).

For a column specification, the actual names of the components must be used for a DDIC database table that contains an [include structure](ABENDDIC_INCLUDE_STRUCTURE.html), and not the names of any groups defined in the ABAP Dictionary.

Direct column specification `carrid`, `carrname`, and `url` in the clauses of a [`SELECT`](ABAPSELECT.html) statement.

A [`SELECT`](ABAPSELECT.html) statement accesses the CDS view entity `demo_cds_enum_type_usage_1` that defines one enumerated element `friday`. This CDS enumerated element is used as column in the `SELECT` list, as operand in the `WHERE` clause, and as operand in the `ORDER BY` clause.

Specifies an element of a data source of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) after a path expression [`sql_path`](ABENABAP_SQL_PATH.html). This can be specified in `SELECT` statements where path expressions can be used in all places where a column can be specified, unless otherwise indicated.

The element `element` closes the path expression constructed from [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) or [CTE associations](ABENCTE_ASSOCIATION_GLOSRY.html), for which the structure component selector `-` is used. This element must be an element of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the final association in the path.

A [`SELECT`](ABAPSELECT.html) statement accesses the [CDS view](ABENCDS_VIEW_GLOSRY.html)\\ `demo_cds_assoc_scarr` that exposes a CDS association `_spfli`. As its [association target](ABENASSOCIATION_TARGET_GLOSRY.html), this CDS association uses a view that exposes the CDS associations `_sflight` and `_sairport`. The columns specified in the `SELECT` statement include any path expressions created by these CDS associations. See also the associated [executable example](ABENPATH_EXPR_IN_COLSPEC_ABEXA.html).

The [column selector](ABENTABLE_COMP_SELECTOR_GLOSRY.html)\\ `~` can be used to prefix every specified column directly with the name of the associated data source of a query or of the target of a write (as `data_source` or as an alias name `tabalias`).

The data source must be specified in the following cases:

Use of the name `scarr` of a data source and the alias name `connections` of a different data source in front of the column selector `~` of specified columns.

-   [Path expressions](ABENABAP_SQL_PATH.html) can be used in the following `SELECT` statements:

-   Statements that use the [CDS entity](ABENCDS_ENTITY_GLOSRY.html) to access a [CDS view](ABENCDS_VIEW_GLOSRY.html) in which the used associations are exposed for use from outside.
-   Statements in a [`WITH`](ABAPWITH.html) statement that follow [common table expressions](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) that themselves expose associations using the addition [`WITH ASSOCIATIONS`](ABAPWITH_ASSOCIATIONS.html).

-   If an element is specified after the path expression, this represents a column specified of the join created implicitly for the path expression. Left outer joins (`LEFT OUTER JOIN`) are created for path expressions in specified columns.
-   [`source~`](ABENABAP_SQL_PATH.html) can be used to prefix the path expression with the unit from which its first association is exposed.

-   If multiple [data sources](ABAPSELECT_DATA_SOURCE.html) in an ABAP SQL statement are edited and the column name is not unique.
-   On the right-hand side of the [relational expressions](ABENABAP_SQL_STMT_LOGEXP.html) of SQL conditions [`sql_cond`](ABENASQL_COND.html) for statements.

SELECT FROM scarr \\n FIELDS carrid, carrname \\n WHERE url = ' ' \\n INTO TABLE @FINAL(itab). SELECT friday AS EnumElement \\n FROM demo\_cds\_enum\_type\_usage\_1 \\n WHERE friday = @demo\_cds\_enum\_weekday-fri \\n ORDER BY friday \\n INTO TABLE @FINAL(itab). SELECT carrname, \\n \\\\\_spfli\[ MANY TO MANY \]-connid AS connid, \\n \\\\\_spfli\[ MANY TO MANY \]\\\\\_sairport-name AS name \\n FROM demo\_cds\_assoc\_scarr \\n WHERE carrid = '...' and \\n \\\\\_spfli\[ MANY TO MANY \]\\\\\_sflight\[ \\n MANY TO MANY \]-fldate > '20190515' \\n INTO TABLE @FINAL(itab). SELECT FROM scarr \\n INNER JOIN spfli AS connections \\n ON scarr~carrid = connections~carrid \\n FIELDS scarr~carrname, connections~connid \\n WHERE connections~cityfrom = '...' \\n INTO TABLE @FINAL(itab). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abensql\_operands.html