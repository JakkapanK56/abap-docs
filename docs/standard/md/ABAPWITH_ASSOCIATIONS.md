---
title: "ABAPWITH_ASSOCIATIONS"
description: |
  ABAPWITH_ASSOCIATIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWITH_ASSOCIATIONS.htm"
abapFile: "ABAPWITH_ASSOCIATIONS.html"
keywords: ["select", "if", "case", "catch", "class", "data", "internal-table", "ABAPWITH", "ASSOCIATIONS"]
---

``... WITH ASSOCIATIONS ( [`path`](ABAPWITH_ASSOCIATIONS_USING.html)\                         |[`join`](ABAPWITH_ASSOCIATIONS_DEFINING.html)[,                          ...] )                       |(assoc_syntax)``

The addition `WITH ASSOCIATIONS` for the definition of a common table expression exposes associations of this table expression for use in the subsequent queries of a [`WITH`](ABAPWITH.html) statement. The following can be specified:

The parentheses must contain at least one association and multiple associations can be specified as a comma-separated list. Both existing and new associations can be specified together and in any order.

Instead of specifying associations statically in parentheses, a parenthesized data object `assoc_syntax` can be specified. When the statement is executed, the data object must contain the syntax shown for the static specification. In this case, the common table expression can be used only in other dynamic tokens of the `WITH` statement. The data object `assoc_syntax` can be a character-like data object or a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) with a character-like row type. The syntax in `assoc_syntax`, as in the static syntax, is not case-sensitive. When an internal table is specified, the syntax can be distributed across multiple rows. Invalid syntax raises a catchable exception from the class `CX_SY_DYNAMIC_OSQL_ERROR`.

If an association is exposed more than once under different alias names, it is handled as a separate association when used in a path expression. A separate instance of a join expression is created for each association used and each expression uses the result set of the exposing common table expression as its left side.

The addition `WITH ASSOCIATIONS` cannot be used if the subquery of the common table expression contains the [set operator](ABENCDS_SET_OPERATORS_GLOSRY.html)\\ [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), or [`EXCEPT`](ABAPUNION.html). Furthermore, it is not possible to use the addition [`USING`](ABAPSELECT_CLIENT.html) or the obsolete addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html) in the current CTE, nor in CTEs where the addition `REDIRECTED TO` is applied, nor in queries that use the association in a path expression and that transform it to a join expression.

The following example class `CL_DEMO_WITH_ASSOCIATIONS` demonstrates how CDS associations are exposed by common table expressions. It works in the same way as the [executable example](ABENPATH_EXPR_IN_FROM_CLAUSE_ABEXA.html) for using path expressions in the `FROM` clause. The main query uses the alias name `_spfli_scarr` to access the [association target](ABENASSOCIATION_TARGET_GLOSRY.html)\\ `SCARR` of the final CDS association `_scarr` of the path expression `\\_spfli[ fltime > @fltime ]\\_scarr` exposed for the common table expression `+cte`. The `SELECT` list of the common table expression must specify the component `\\_spfli-carrid` with the same filter condition `fltime > @fltime` as in the exposed association so that the associated join can be created.

-   Existing [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) or [CTE associations](ABENCTE_ASSOCIATION_GLOSRY.html) of the common table expression using [SQL path expressions](ABENSQL_PATH_EXPRESSION_GLOSRY.html)\\ [`path`](ABAPWITH_ASSOCIATIONS_USING.html).
-   Definitions of new [CTE associations](ABENCTE_ASSOCIATION_GLOSRY.html) of the common table expression using [`join`](ABAPWITH_ASSOCIATIONS_DEFINING.html).

-   In subsequent queries of the current `WITH` statement, the exposed associations can be used as root elements of the path expressions in question.

-   In the [specified columns](ABENABAP_SQL_COLUMNS.html) of `SELECT` statements of the subsequent queries.
-   As a [data source](ABAPSELECT_DATA_SOURCE.html) of the [`FROM` clause](ABAPFROM_CLAUSE.html) of the subsequent queries.

-   Exposed [self-associations](ABENSELF_ASSOCIATION_GLOSRY.html) can be specified in the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html) as a [hierarchy association](ABENHIERARCHY_ASSOCIATION_GLOSRY.html).
-   An exposed association can be exposed again by a subsequent common table expression of the current `WITH` statement using the addition `WITH ASSOCIATIONS`, as long as this addition uses the exposing table expression as a data source. Different [attributes](ABENABAP_SQL_PATH_FILTER.html) can be specified here.

-   When an association of the data source of a common table expression is exposed using `WITH ASSOCIATION`, this is the same as [exposing](ABENCDS_SELECT_LIST_ASSOCIATION_V2.html) an association of the data source of a CDS view entity in its `SELECT` list.
-   It should be noted that the exposing common table expression itself is the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) of the exposed association and not the data source of the expression. The exposing common table expression replaces the original [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) of the association. The left side of a join expression created for the exposed association is the result set of the subquery of the common table expression.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: \\n tz TYPE s\_tzone VALUE 'UTC+1', \\n currc TYPE s\_currcode VALUE 'EUR', \\n fltime TYPE s\_fltime VALUE 0. \\n\\ \\ncl\_demo\_input=>new( \\n )->add\_field( CHANGING field = tz \\n )->add\_field( CHANGING field = currc \\n )->add\_field( CHANGING field = fltime )->request( ). \\n\\ \\nWITH \\n +cte AS ( SELECT \\\\\_spfli\[ MANY TO MANY \\n WHERE fltime > @fltime \]-carrid \\n FROM demo\_cds\_assoc\_sairport\_tz( \\n tz = @( to\_upper( tz ) ) ) ) \\n WITH ASSOCIATIONS ( \\\\\_spfli\[ MANY TO MANY \\n WHERE fltime > @fltime \] \\n \\\\\_scarr AS \_spfli\_scarr ) \\n SELECT DISTINCT carrname \\n FROM +cte\\\\\_spfli\_scarr\[ \\n currcode = @( CONV s\_currcode( to\_upper( currc ) ) ) \] \\n AS scarr \\n ORDER BY carrname \\n INTO TABLE @FINAL(result). \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abapwith.html