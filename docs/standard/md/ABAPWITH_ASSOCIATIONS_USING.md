---
title: "ABAPWITH_ASSOCIATIONS_USING"
description: |
  ABAPWITH_ASSOCIATIONS_USING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWITH_ASSOCIATIONS_USING.htm"
abapFile: "ABAPWITH_ASSOCIATIONS_USING.html"
keywords: ["select", "do", "if", "case", "data", "ABAPWITH", "ASSOCIATIONS", "USING"]
---

``... [`sql_path`](ABENABAP_SQL_PATH.html)\ [AS alias]\      [REDIRECTED TO +cte VIA target] ...``

[`... REDIRECTED TO +cte VIA target`](#ABAP_ONE_ADD@1@)

Specifies an existing [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) or [CTE association](ABENCTE_ASSOCIATION_GLOSRY.html) using an [SQL path expression](ABENSQL_PATH_EXPRESSION_GLOSRY.html)\\ [`sql_path`](ABENABAP_SQL_PATH.html) in the addition [`WITH ASSOCIATIONS`](ABAPWITH_ASSOCIATIONS.html) when a common table expression is defined in a [`WITH`](ABAPWITH.html) statement. The path expression exposes the association at its end. The exposing table expression is the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) of the exposed association and any join expressions that are created when the association is used in a path expression use the exposing table expression as their left side.

The root element of each path expression can be the following associations:

If [`~`](ABENABAP_SQL_PATH.html) is used to prefix the path expression with the name of the data source that exposes its first association, this name must be the name used in the table expression. Therefore, if [`AS`](ABAPFROM_CLAUSE.html) is used to define an alias name, this name must be used instead of the original name in the path expression.

[Parameter passing](ABENABAP_SQL_PARAMETERS.html) is not allowed in the final association of the specified path expressions and the [type of the join](ABENABAP_SQL_PATH_FILTER.html) must not be defined. All fields of the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) of a path expression that occur in the `ON` condition of the association must be elements of the `SELECT` list of the common table expression. In path expressions that contain only one association, the elements can be specified as single elements or by using `*` or `dbtab~*`. If a path expression contains more than one association, an element must be specified as a path expression closed by the field that has the same [attributes](ABENABAP_SQL_PATH_FILTER.html) as the path expression used for exposing.

`AS` can be used to specify an alias name `alias` for the exposed association, under which it can be addressed in the subsequent queries of the current `WITH` statement. The alias name can contain letters, digits, the minus sign (`-`), and the underscore (`_`) in any order.

The following `WITH` statement is a syntax example only and does not have a function. Its main role is to show different ways of specifying path expressions and operands.

[Exposing Associations](ABENWITH_ASSOCIATIONS_ABEXA.html)

The addition `REDIRECTED TO` replaces the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the association exposed using `WITH ASSOCIATIONS` with the common table expression specified as `+cte`.

If an [attribute](ABENABAP_SQL_PATH_FILTER.html) is specified for the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) when the exposed association is used in a subsequent path expression, this attribute affects the target `+cte` of the redirect. An attribute specified after `WITH ASSOCIATIONS` when the association is exposed, however, is applied to the original association target of the exposed association.

The common table expression `+cte2` of the following `WITH` statement uses the path expression `demo_cds_expose_assoc~\\_spfli` to expose the CDS association `_spfli` that is itself exposed in the CDS view `demo_cds_expose_assoc`. The common table expression `+cte2` hence replaces this view as the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) of the CDS association. This is meaningless in this example, however, since the subquery of the common table expression reads all data from the data source. The common table expression `+cte1` uses `REDIRECTED TO +cte1~demo_cds_assoc_spfli` to replace the [association target](ABENASSOCIATION_TARGET_GLOSRY.html)\\ `demo_cds_assoc_spfli` of the exposed path expression. `demo_cds_assoc_spfli` is the only data source of the common table expression `+cte1`. In the main query of the `WITH` statement, the path expression `+cte2\\_spfli` is used to access the [association target](ABENASSOCIATION_TARGET_GLOSRY.html)\\ `+cte1` of the exposed CDS association, which is restricted by the `WHERE` condition.

[DDL Source Code](ABENDDL_SOURCE_CODE_GLOSRY.html) of `DEMO_CDS_EXPOSE_ASSOC`:

[DDL Source Code](ABENDDL_SOURCE_CODE_GLOSRY.html) of `DEMO_CDS_ASSOC_SPFLI`:

-   CDS associations

-   exposed in the `SELECT` list of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) or a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) in cases where these views are used as a [data source](ABAPSELECT_DATA_SOURCE.html) in the [subquery](ABAPWITH_SUBQUERY.html) of the common table expression.
-   exposed using `WITH ASSOCIATIONS` of preceding table expressions of the current [`WITH`](ABAPWITH.html) statement in cases where these table expressions are used as a [data source](ABAPSELECT_DATA_SOURCE.html) in the [subquery](ABAPWITH_SUBQUERY.html) of the common table expression.

-   CTE associations defined and exposed using `WITH ASSOCIATIONS` of preceding table expressions of the current [`WITH`](ABAPWITH.html) statement in cases where these table expressions are used as a [data source](ABAPSELECT_DATA_SOURCE.html) in the [subquery](ABAPWITH_SUBQUERY.html) of the common table expression.

-   The following can be specified for `+cte`:

-   A common table expression defined in front of the current common table expression in the current [`WITH`](ABAPWITH.html) statement.
-   The current common table expression

-   `+cte` must specify the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) as a data source of the exposed association in the `FROM` clause of the subquery.
-   `VIA` must be followed by the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the exposed association under the name it uses in the `FROM` clause of `+cte`:

-   The [association target](ABENASSOCIATION_TARGET_GLOSRY.html) must be specified after `VIA` even if it is used only once. If [`AS`](ABAPFROM_CLAUSE.html) is used to define an alias name, this name must be specified.
-   If the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is used more than once as a data source of join expressions, one of these occurrences must be specified after `VIA`. The occurrence can be specified using the alias name or, if necessary, using its original name.

-   All columns that occur in the `ON` condition of the exposed association must be listed as columns of the data source specified after `VIA` in the `SELECT` list of the subquery of `+cte`. If the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) occurs more than once in the `FROM` clause of `+cte`, the addition `VIA` defines that these columns of the result set, which represent the right side of the join expression created when the exposed association is used in a subsequent path expression, are used in the `ON` condition of the expression.

-   [Exposing Associations with a Redirect](ABENWITH_ASSOCS_REDIRECT_ABEXA.html)
-   [Exposing Associations with a Recursive Redirect](ABENWITH_ASSOCS_REDIR_SELF_ABEXA.html)

WITH \\n +cte1 AS ( SELECT \* \\n FROM demo\_cds\_expose\_assoc AS subsrc \\n WHERE subsrc~\\\\\_spfli\[ MANY TO MANY \\n \]-carrid = '...' ) \\n WITH ASSOCIATIONS ( subsrc~\\\\\_spfli AS assoc1 ), \\n +cte2 AS ( SELECT \* FROM +cte1 ) \\n WITH ASSOCIATIONS ( +cte1~\\\\assoc1\[ carrid = '...' \] \\n AS assoc2 ) \\n SELECT carrid AS id \\n FROM +cte1\\\\assoc1 AS mainsrc \\n WHERE mainsrc~carrid = '...' \\n UNION \\n SELECT carrid AS id \\n FROM +cte2 \\n WHERE +cte2~\\\\assoc2\[ (\*) \]-carrid = '...' \\n ORDER BY id \\n INTO TABLE @FINAL(result). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA carrid TYPE spfli-carrid. \\ncl\_demo\_input=>request( CHANGING field = carrid ). \\n\\ \\nWITH \\n +cte1 AS ( SELECT \* \\n FROM demo\_cds\_assoc\_spfli \\n WHERE carrid = @carrid ), \\n +cte2 AS ( SELECT \* \\n FROM demo\_cds\_expose\_assoc ) \\n WITH ASSOCIATIONS ( demo\_cds\_expose\_assoc~\\\\\_spfli \\n REDIRECTED TO +cte1 VIA demo\_cds\_assoc\_spfli ) \\n SELECT spfli~\* \\n FROM +cte2\\\\\_spfli AS spfli \\n ORDER BY spfli~carrid, spfli~connid \\n INTO TABLE @FINAL(result). \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_EXPOSE\_ASSOC\\n as select from scarr\\n association \[1..\*\] to demo\_cds\_assoc\_spfli as \_spfli \\n on scarr.carrid = \_spfli.carrid\\n\\{\\n \_spfli,\\n key scarr.carrid as scarr\_carrid,\\n \_spfli.\_sflight,\\n \_spfli.carrid,\\n \_spfli.connid \\n\\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity demo\_cds\_assoc\_spfli \\n as select from\\n spfli\\n association \[1..\*\] to demo\_cds\_sflight as \_sflight on\\n spfli.carrid = \_sflight.carrid\\n and spfli.connid = \_sflight.connid\\n association \[1..1\] to demo\_cds\_sairport as \_sairport on\\n spfli.airpfrom = \_sairport.id\\n \\{\\n \_sflight,\\n \_sairport,\\n key carrid,\\n key connid,\\n airpfrom\\n \\}\\n abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abapwith.html abapwith\_associations.html