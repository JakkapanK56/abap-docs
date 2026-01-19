---
title: "ABENABAP_SQL_PATH_FILTER"
description: |
  ABENABAP_SQL_PATH_FILTER - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_SQL_PATH_FILTER.htm"
abapFile: "ABENABAP_SQL_PATH_FILTER.html"
keywords: ["select", "do", "while", "if", "case", "data", "ABENABAP", "SQL", "PATH", "FILTER"]
---

``... [ [[cardinality]\ [INNER|\{LEFT|RIGHT OUTER\}]]\ [[WHERE]\ [`sql_cond`](ABENABAP_SQL_EXPR_LOGEXP.html)] ]    | [ [[INNER|\{LEFT|RIGHT OUTER\}]\ [cardinality]]\ [[WHERE]\ [`sql_cond`](ABENABAP_SQL_EXPR_LOGEXP.html)] ]...``

[1. `... cardinality`](#ABAP_ADDITION_1@3@)

[2. `... INNER|\{LEFT|RIGHT OUTER\}`](#ABAP_ADDITION_2@3@)

[3. `... [WHERE] sql_cond`](#ABAP_ADDITION_3@3@)

Attributes for a section of a path expression can be specified in square brackets for every [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) or [CTE association](ABENCTE_ASSOCIATION_GLOSRY.html)\\ [`_assoc`](ABENCDS_ASSOCIATION_GLOSRY.html) of the [path expression](ABENABAP_SQL_PATH.html) specified in a [data source](ABAPSELECT_DATA_SOURCE.html) of a [`FROM` clause](ABAPFROM_CLAUSE.html) or a [column specification](ABENABAP_SQL_COLUMNS.html). The following can be done using these attributes:

The [cardinality](ABENCARDINALITY_GLOSRY.html)\\ `cardinality` of the current association `_assoc` is declared.

The cardinality can either be specified in syntax written in words or in numeric syntax in parentheses. The syntax written in words can specify a [source](ABENSOURCE_CARDINALITY_GLOSRY.html) and a [target cardinality](ABENTARGET_CARDINALITY_GLOSRY.html), while the numeric syntax only specifies a target cardinality. The syntax written in words is recommended.

Specifying the cardinality overwrites the original definition of the cardinality [`cardinality`](ABENCDS_CARDINALITY_V2.html) or [`TO ONE|MANY`](ABAPWITH_ASSOCIATIONS_DEFINING.html) of the current association with the new cardinality.

Paths specified with an explicitly specified cardinality of CDS associations in the `SELECT` list. If supported by the database, only the left outer join between the DDIC database tables `SPFLI` and `SAIRPORT` is defined using the addition `MANY TO ONE`.

This addition defines the [join type](ABENJOIN_TYPE_GLOSRY.html) into which the current association `_assoc` is transformed:

The join type can only be specified together with the cardinality.

If the join type is not specified explicitly, the type depends on the place where the path expression is used:

Path specifications with an explicitly specified cardinality and a switch of the left outer joins to inner joins in the columns specified in the `SELECT` list.

Specifies a [filter condition](ABENFILTER_CONDITION_GLOSRY.html)\\ [`sql_cond`](ABENABAP_SQL_EXPR_LOGEXP.html) for the current association `_assoc`. The addition `WHERE` is optional in cases where the filter condition is the only item specified in the square brackets. The addition must be specified if one of the other additions is used first.

When the association is resolved in a join, the filter condition is converted to an extended condition for the join. If no filter condition is specified in the path expression, the default filter condition defined using [`WITH DEFAULT FILTER`](ABENCDS_ASSOCIATION_V2.html) is used in the case of a CDS association.

Columns specified in the filter condition `sql_cond` always refer to the target [`target`](ABENCDS_ASSOCIATION_V2.html) or [`target`](ABAPWITH_ASSOCIATIONS_DEFINING.html) of the association for which the condition is specified. An explicit name must not and cannot be specified with the [column selector](ABENTABLE_COMP_SELECTOR_GLOSRY.html)\\ `~` in front of a column specification.

Specification of filter conditions in a path expression.

-   The [cardinality](ABENCARDINALITY_GLOSRY.html)\\ `cardinality` of the section can be declared.
-   The type of the join expression can be specified.
-   A filter condition `sql_cond` can be specified.

-   Cardinality syntax written in words:

-   `ONE TO ONE`
-   `ONE TO MANY`
-   `ONE TO EXACT ONE`
-   `EXACT ONE TO ONE`
-   `EXACT ONE TO MANY`
-   `EXACT ONE TO EXACT ONE`
-   `MANY TO ONE`
-   `MANY TO MANY`
-   `MANY TO EXACT ONE`

-   If specified, the join type must precede the cardinality specification. For example: `\\_assoc[ INNER MANY TO ONE ]-field AS alias`.
-   Numeric cardinality syntax:

-   The target cardinality can be specified by the numbers `1` or `2` or by specifying the character `*` in parentheses `( )`.

-   If specified, the join type must be placed after the cardinality specification. For example: `\\_assoc[ (1) INNER ]-field AS alias`.
-   If the cardinality is specified as `(1)`, a `LEFT OUTER JOIN` is defined implicitly using the addition [`MANY TO ONE`](ABAPSELECT_JOIN.html) on database systems that support this, and the consequences of this should be noted.

-   The cardinality can be specified to prevent syntax warnings or syntax errors in cases where the cardinality of the association does not match the way it is used in a path expression of a `SELECT` statement or affects the way it is used.

-   `INNER` specifies an [inner join](ABENINNER_JOIN_GLOSRY.html).
-   `LEFT|RIGHT OUTER` specifies a [left outer join](ABENLEFT_OUTER_JOIN_GLOSRY.html) or a [right outer join](ABENRIGHT_OUTER_JOIN_GLOSRY.html).

-   When [columns are specified](ABENABAP_SQL_COLUMNS.html) in `SELECT` statements, a `LEFT OUTER JOIN` is used.
-   An `INNER JOIN` is used as a [data source](ABAPSELECT_DATA_SOURCE.html) of the [`FROM` clause](ABAPFROM_CLAUSE.html).

-   The [relational expressions](ABENABAP_SQL_EXPR_LOGEXP.html) that can be used in a filter condition are a subset of the [relational expressions for statements](ABENABAP_SQL_STMT_LOGEXP.html), but also allow [SQL expressions](ABAPSQL_EXPR.html) as operands on the right side.

SELECT scarr~carrname, \\n \\\\\_spfli\[ MANY TO MANY \]-connid AS connid, \\n \\\\\_spfli\[ MANY TO MANY \]\\\\\_sflight\[ MANY TO MANY \]-fldate \\n AS fldate, \\n \\\\\_spfli\[ MANY TO MANY \]\\\\\_sairport\[ \\n MANY TO ONE \]-name AS name \\n FROM demo\_cds\_assoc\_scarr AS scarr \\n WHERE scarr~carrid = '...' \\n ORDER BY carrname, connid, fldate \\n INTO TABLE @FINAL(result). SELECT scarr~carrname, \\n \\\\\_spfli\[ INNER MANY TO ONE \]-connid AS connid, \\n \\\\\_spfli\[ INNER MANY TO ONE \]\\\\\_sflight\[ INNER MANY TO ONE \\n \]-fldate \\n AS fldate, \\n \\\\\_spfli\[ INNER MANY TO ONE \]\\\\\_sairport\[ INNER MANY TO ONE \\n \]-name \\n AS name \\n FROM demo\_cds\_assoc\_scarr AS scarr \\n WHERE scarr~carrid = 'LH' \\n ORDER BY carrname, connid, fldate \\n INTO TABLE @FINAL(result). SELECT carrid, connid, fldate, price \\n FROM demo\_cds\_assoc\_scarr \\n \\\\\_spfli\[ airpfrom = 'FRA' \] \\n \\\\\_sflight\[ currency = 'EUR' AND \\n price BETWEEN 500 AND 1500 \] \\n AS flights \\n ORDER BY carrid, connid, fldate, price \\n INTO TABLE @FINAL(result). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abenabap\_sql\_path.html