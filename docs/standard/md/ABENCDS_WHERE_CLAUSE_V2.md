---
title: "ABENCDS_WHERE_CLAUSE_V2"
description: |
  ABENCDS_WHERE_CLAUSE_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_WHERE_CLAUSE_V2.htm"
abapFile: "ABENCDS_WHERE_CLAUSE_V2.html"
keywords: ["select", "do", "if", "case", "data", "types", "ABENCDS", "WHERE", "CLAUSE"]
---

``... WHERE [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) ...``

Defines a `WHERE` condition for the result set of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). When the CDS view entity is accessed, the result set contains only the data from the data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html) that meets the condition [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) specified after `WHERE`.

The fields evaluated in the condition do not need to be defined as elements of the CDS view entity in the [`SELECT` list](ABENCDS_SELECT_LIST_V2.html).

If the view entity makes use of multiple data sources by using join expressions, then all fields specified in the `WHERE` condition must be prefixed with the name of their data source separated by a period (.). The prefix is required in all cases, even if the field names are unique.

The following rules apply to the operands and syntax of the `WHERE` condition of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html):

Special rules apply when the operands of a `WHERE` condition are [CDS enumerated elements](ABENCDS_ENUM_ELEMENT_GLOSRY.html). These rules are described in the topic [CDS TDL - Using CDS Enumerated Types](ABENCDS_USE_ENUM_TYPE.html).

The condition in the `WHERE` clause must not start with parentheses. This is not valid:

`... WHERE (field1 + field2) * 5 < 1000`

The following workarounds are possible:

Unlike in the [`HAVING` condition](ABENCDS_HAVING_CLAUSE_V2.html), [aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V2.html) cannot be specified in the `WHERE` condition.

The CDS view entity `demo_sales_order_where` has a `WHERE` condition that contains the relational operators `LIKE` and `BETWEEN`, a string function, and a cast expression.

-   All relational operators are allowed. That means all comparison operators are allowed as well as `BETWEEN`, `LIKE`, `IS [NOT] NULL`, and `IS [NOT] INITIAL`.
-   The Boolean operators `NOT`, `AND`, and `OR` are supported.
-   `lhs` expects a [field](ABENCDS_FIELD_V2.html) of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html), a [path expression](ABENCDS_PATH_EXPRESSION_V2.html), a [built-in function](ABENCDS_BUILTIN_FUNCTIONS_V2.html), an [SQL-based scalar function](ABENCDS_SQL_SCALAR_FUNCTION.html), a [cast expression](ABENCDS_CAST_EXPRESSION_V2.html), or a [CDS enumerated constant](ABENCDS_ENUM_FIELD_V2.html).
-   If a comparison operator is used as relational operator, then `lhs` can also be a [literal](ABENCDS_LITERAL_V2.html), a [case expression](ABENCDS_CASE_EXPRESSION_V2.html), or an [arithmetic expression](ABENCDS_ARITHMETIC_EXPRESSION_V2.html).
-   If `IS NULL` is used as relational operator, then `lhs` can also be a [case expression](ABENCDS_CASE_EXPRESSION_V2.html).
-   `rhs` can be a [field](ABENCDS_FIELD_V2.html) of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html), a [path expression](ABENCDS_PATH_EXPRESSION_V2.html), a [literal](ABENCDS_LITERAL_V2.html), a [parameter](ABENCDS_PARAMETER_V2.html), a [session variable](ABENCDS_SESSION_VARIABLE_V2.html), a [cast expression](ABENCDS_CAST_EXPRESSION_V2.html), a [built-in function](ABENCDS_BUILTIN_FUNCTIONS_V2.html), a [SQL-based scalar function](ABENCDS_SQL_SCALAR_FUNCTION.html), or a [CDS enumerated constant](ABENCDS_ENUM_FIELD_V2.html).
-   If a comparison operator is used as relational operator, then `rhs` can also be a [case expression](ABENCDS_CASE_EXPRESSION_V2.html) or an [arithmetic expression](ABENCDS_ARITHMETIC_EXPRESSION_V2.html).

-   **Exception:** when using the operator `LIKE`, `rhs` must be a character literal.

-   A field of a data source can be specified using a path expression `[path_expr](ABENCDS_PATH_EXPRESSION_V2.html).element`, as long as the CDS associations of the expression do not have any [CDS transient entities](ABENCDS_NON_SQL_ENTITY_GLOSRY.html) as [association target](ABENASSOCIATION_TARGET_GLOSRY.html) and the cardinality of all traversed associations is to-one:

-   The [cardinality](ABENCARDINALITY_GLOSRY.html) of the contained [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) is to-one.
-   The path expression contains the [cardinality specification](ABENCDS_PATH_EXPR_CARD_V2.html) attribute to-one.

-   `element` can be used to specify an element of the association target of the last CDS association of the path.
-   Other expressions and function calls are not allowed.

-   You may change the order of the operands so that the expression written in parentheses does not appear as first operand.
-   Example: `... WHERE 5 * (field1 + field2) < 1000`
-   You may add `1*` at the start to avoid starting with a parenthesis.
-   Example: `... WHERE 1 * (field1 + field2) * 5 < 1000`

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_SALES\_ORDER\_WHERE\\n as select from\\n demo\_sales\_order\\n association to demo\_sales\_bupa as \_partner\\n on $projection.id = \_partner.id\\n \\{\\n key so\_key,\\n id,\\n company\_code,\\n \_partner.family\_name\\n \\}\\n where\\n \_partner.family\_name like 'S%'\\n and length( \_partner.family\_name ) = abap.int1'4'\\n and created\_on between abap.dats'20200101' and abap.dats'20200401'\\n and cast( \_partner.birth\_name as DEMO\_BT\_BIRTH\_NAME\\n preserving type ) = abap.char'Meier'\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_select\_clauses\_v2.html