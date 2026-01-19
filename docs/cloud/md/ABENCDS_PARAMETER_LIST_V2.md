---
title: "ABENCDS_PARAMETER_LIST_V2"
description: |
  ABENCDS_PARAMETER_LIST_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_PARAMETER_LIST_V2.htm"
abapFile: "ABENCDS_PARAMETER_LIST_V2.html"
keywords: ["select", "case", "try", "data", "types", "ABENCDS", "PARAMETER", "LIST"]
---

``... WITH PARAMETERS [`parameter1`](ABENCDS_F1_PARAM.html), [`parameter2`](ABENCDS_F1_PARAM.html), ...``

Defines [CDS parameters](ABENCDS_PARAMETER_GLOSRY.html)\\ [`parameter1`](ABENCDS_F1_PARAM.html), [`parameter2`](ABENCDS_F1_PARAM.html), ... as input parameters of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) in a comma-separated list.

An input parameter called `pname` can be accessed using the syntax `$parameters.pname`.

A parameter must be typed with an elementary data type. All data types listed in topic [`Typing`](ABENCDS_TYPING.html) are allowed, except for `abap.accp`, `abap.geom_ewkb`, and `abap.rawstring`.

It can be used as an operand in the following places in the [`SELECT`](ABENCDS_SELECT_STATEMENT_V2.html) statement of the view entity:

The following CDS view entity has a list of three input parameters used in the [`WHERE` clause](ABENCDS_WHERE_CLAUSE_V2.html) of the `SELECT` statement. For information about passing actual parameters in a `SELECT` statement in ABAP, see the executable example [`SELECT`, CDS View Entity with Input Parameters](ABENSELECT_CDS_PARA_ABEXA.html).

-   [Element](ABENCDS_SELECT_LIST_ENTRY_V2.html) in the [`SELECT` list](ABENCDS_SELECT_LIST_V2.html). An [alias name](ABENALIAS_GLOSRY.html) is mandatory.
-   Operand of an [arithmetic expression](ABENCDS_ARITHMETIC_EXPRESSION_V2.html). The parameter can have any of the numeric data types that are supported in arithmetic expressions in `SELECT` statements (see [here](ABENCDS_ARITHMETIC_EXPRESSION_V2.html)).
-   Operand of an [aggregate expression](ABENCDS_AGGREGATE_FUNCTIONS_V2.html). The parameter can have any of the data types that are supported in aggregate expressions in `SELECT` statements.
-   Operand of a [case distinction](ABENCDS_CASE_EXPRESSION_V2.html).
-   Operand of a [cast expression](ABENCDS_CAST_EXPRESSION_V2.html).
-   Operand of a [built-in function](ABENCDS_BUILTIN_FUNCTIONS_V2.html), as long as it has a suitable data type.
-   Right side of an expression [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) in a [`WHERE`](ABENCDS_WHERE_CLAUSE_V2.html) clause or [`HAVING` clause](ABENCDS_HAVING_CLAUSE_V2.html)
-   Right side of an expression [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) in an `ON` condition in an [ABAP join](ABENCDS_JOINED_DATA_SOURCE_V2.html) or a [CDS association](ABENCDS_ASSOCIATION_V2.html)
-   Right side of an expression [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) in a [filter condition](ABENCDS_PATH_EXPRESSION_FILTER_V2.html) of a [path expression](ABENCDS_PATH_EXPRESSION_V2.html)
-   Right side of an expression [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) in the [default filter condition](ABENCDS_SIMPLE_ASSOCIATION_V2.html) of a [CDS association](ABENCDS_ASSOCIATION_V2.html)

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'View Entity with Input Parameters'\\ndefine view entity Demo\_Cds\_Param\_View\_Entity \\n with parameters\\n p\_distance\_l :s\_distance,\\n p\_distance\_u :s\_distance,\\n p\_unit :s\_distid\\n as select from\\n spfli\\n \\{\\n key carrid,\\n key connid,\\n cityfrom,\\n cityto,\\n distance,\\n distid \\n \\}\\n where\\n distid = $parameters.p\_unit\\n and distance between $parameters.p\_distance\_l \\n and $parameters.p\_distance\_u; \\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html