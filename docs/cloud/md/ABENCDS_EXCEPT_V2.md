---
title: "ABENCDS_EXCEPT_V2"
description: |
  ABENCDS_EXCEPT_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_EXCEPT_V2.htm"
abapFile: "ABENCDS_EXCEPT_V2.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "ABENCDS", "EXCEPT"]
---

``... EXCEPT [`select_statement`](ABENCDS_SELECT_STATEMENT_V2.html) ...``

The [set operator](ABENCDS_SET_OPERATORS_GLOSRY.html)\\ `EXCEPT` returns all rows of a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) that are not part of the result sets of the following `SELECT` statements. As a prerequisite, the result sets must have the same number of elements and the element pairs that occur in the same position of the result set must have a compatible data type. All data types except for [`STRING`](ABENDDIC_BUILTIN_TYPES.html), [`RAWSTRING`](ABENDDIC_BUILTIN_TYPES.html), [`LCHR`](ABENDDIC_BUILTIN_TYPES.html), [`LRAW`](ABENDDIC_BUILTIN_TYPES.html), and [`GEOM_EWKB`](ABENDDIC_BUILTIN_TYPES.html) are supported. An `EXCEPT` result set can itself be the left side of a further `EXCEPT`.

As a prerequisite for using the statement `EXCEPT` in a CDS view entity, the CDS view entity annotation [`Metadata.ignorePropagatedAnnotations: true`](ABENCDS_VIEW_ENTITY_ANNO.html) must be specified.

The first `SELECT` statement defines the signature of the view using `EXCEPT`. The elements of the result set of the `EXCEPT` view have the following properties:

The following table shows which data types can be merged with each other in a view using `EXCEPT`. On the left side, the data types of the `SELECT` list of the first `SELECT` statement are listed and the other columns specify with which data types of the following `SELECT` lists they can be merged.

There are no further restrictions to note in combinations using *x*. The following rules apply to the other combinations:

If the length or value range of the first element does not cover the following elements in combinations with *w*, the value returned by the database can be too great for the data type of the element of the CDS entity. It is still possible to activate the view here, but the content may be truncated or exceptions may be raised in ABAP SQL [queries](ABENASQL_QUERY_GLOSRY.html) if a type reference is applied to the entity. This is due to the [assignment rules](ABENSELECT_INTO_CONVERSION.html) of the [`INTO`](ABAPINTO_CLAUSE.html) clause. Assignments to ABAP data objects with a sufficiently large value range, on the other hand, do not cause problems.

A CDS view entity in which result sets are formed with `EXCEPT` can define and expose [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html). Such an association must be defined and exposed in the same way in all `SELECT` statements combined with `EXCEPT`. That is, CDS associations that are exposed in the respective `SELECT` lists must appear in all `SELECT` statements combined with `EXCEPT` and the following requirements must be met:

These rules also apply if a CDS association is defined in a data source of a `SELECT` statement and is exposed by the current statement. From outside, the CDS associations with the same name that are exposed in the individual `SELECT` lists act like a CDS association exposed by the `EXCEPT` result set. There are no restrictions on CDS associations that are not exposed in the `SELECT` lists.

In CDS view entities, nesting of `EXCEPT` clauses is possible. To nest an `EXCEPT` clause within another `EXCEPT` clause, use parentheses `( ... )`. A nested `EXCEPT` clause is merged first and its result set is then merged again with the result sets of the other `EXCEPT` branches.

The second example below demonstrates nesting of `EXCEPT` branches.

The following CDS view entity combines the result sets of two `SELECT` statements using `EXCEPT`. It returns only unique rows returned by the first query but not by the second. In this example, it returns all flights that cost less than 2000, at the same time excluding all such flights that cost between 600 and 900.

The class `CL_DEMO_CDS_EXCEPT` uses [`SELECT`](ABAPSELECT.html) to access the view and it displays the result set.

-   Element names
-   The direct element names or the alternative element names defined using `AS` must match for each column in the [`SELECT` lists](ABENCDS_SELECT_LIST_V2.html) of all `SELECT` statements and are used.
-   Key elements
-   They key elements of all `SELECT` lists must match. Otherwise, a syntax check error occurs.
-   Element annotations
-   Only the `SELECT` list of the first `SELECT` statement can define [element annotations](ABENCDS_ELEMENT_ANNOTATIONS_V2.html). In all subsequent branches, element annotations are forbidden.
-   Data type

-   The `SELECT` list of the first `SELECT` statement determines the DDIC data type of each element of the CDS entity.
-   The data type used to create the result set on the database is a data type whose value range covers the data types of the associated columns of all result sets involved.

-   In combinations with *w*, the length or the value range of the data type in the first `SELECT` must be long enough for all following `SELECT` lists. If this is not the case, a syntax check warning is raised.
-   In combinations using *l*, the lengths of the data types must match exactly.

-   They have the same [cardinality](ABENCARDINALITY_GLOSRY.html).
-   They must be exposed at the same position in the `SELECT` list using a [path expression](ABENCDS_PATH_EXPRESSION_V2.html).
-   They must have the same `ON` conditions, that is:

-   The conditions must relate to the same fields in the association source and association target and express the same logic for these fields.
-   The fields of the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) that are listed in an `ON` condition must be at identical positions in the `SELECT` list.

-   **Note** It is **not** required that the associations are defined with the same alias name.

-   Defining new to-child and to-parent associations is not possible in a view using `EXCEPT`. Exposing to-child and to-parent associations that were defined in the data source of the `SELECT` statement is possible.
-   Annotations are only allowed in the `SELECT` list of the first `SELECT` statement. In all following branches, annotations are not allowed.

-   If the length of the value range of an element from the `SELECT` list of the first `SELECT` statement does not cover the associated elements of the following `SELECT` statements, it is advisable to define an appropriate type with a suitable [`CAST`](ABENCDS_CAST_EXPRESSION_V2.html) expression.
-   The maximum number of different `SELECT` statements that can be merged using `EXCEPT` depends on the database system. If this number is exceeded, the CDS view entity cannot be activated.
-   The addition `ALL` is not available for the set operator `EXCEPT`.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, set operator EXCEPT'\\n@Metadata.ignorePropagatedAnnotations: true\\n\\ndefine view entity DEMO\_CDS\_EXCEPT\\n as select from sflight\\n\\{\\n carrid,\\n connid,\\n @Semantics.amount.currencyCode: 'currency'\\n price,\\n currency\\n\\}\\nwhere\\n price < 2000\\n\\nexcept\\n\\nselect from sflight\\n\\{\\n carrid,\\n connid,\\n price,\\n currency\\n\\}\\nwhere\\n price between 600 and 900\\n **First/following** **`INT1`** **`INT2`** **`INT4`** **`INT8`** **`DEC`** \\ **`DF16_...`** **`DF34_...`** \\ **`CURR`** **`QUAN`** **`FLTP`** **`CHAR`** **`SSTRING`** **`STRING`** **`NUMC`** **`DATS`** \\ **`DATN`** \\ **`TIMS`** **`TIMN`** **`UTCL`** **`ACCP`** **`CLNT`** **`LANG`** **`UNIT`** **`CUKY`** **`RAW`** **`GEOM_EWKB`**\\ **`INT1`** x w w w w - - - w w - - - - - - - - - - - - - - - - **`INT2`** x x w w w - - - w w - - - - - - - - - - - - - - - - **`INT4`** x x x w w - - - w w - - - - - - - - - - - - - - - - **`INT8`** x x x x w x - - w w - - - - - - - - - - - - - - - - **`DEC`** w w w w w w w - w w - - - - - - - - - - - - - - - - **`DF16_...`** w w w w w x - - w w - - - - - - - - - - - - - - - - **`DF34_...`** w w w w w x x - w w - - - - - - - - - - - - - - - - **`CURR`** - - - - - - - w - - - - - - - - - - - - - - - - - - **`QUAN`** w w w w w w w - w w - - - - - - - - - - - - - - - - **`FLTP`** x x x w w w w - w x - - - - - - - - - - - - - - - - **`CHAR`** - - - - - - - - - - w w - l w - w - - l - l - - - - **`SSTRING`** - - - - - - - - - - w w - - - - - - - - - - - - - - **`STRING`** - - - - - - - - - - - - w - - - - - - - - - - - - - **`NUMC`** - - - - - - - - - - w - - l l - l - - l - l - - - - **`DATS`** - - - - - - - - - - w - - l x - - - - - - - - - - - **`DATN`** - - - - - - - - - - - - - - - x - - - - - - - - - - **`TIMS`** - - - - - - - - - - w - - l - - x - - - - - - - - - **`TIMN`** - - - - - - - - - - - - - - - - - x - - - - - - - - **`UTCL`** - - - - - - - - - - - - - - - - - - x - - - - - - - **`ACCP`** - - - - - - - - - - l - - l - - - - - x - - - - - - **`CLNT`** - - - - - - - - - - - - - - - - - - - - x - - - - - **`LANG`** - - - - - - - - - - l - - l - - - - - - - x - - - - **`UNIT`** - - - - - - - - - - - - - - - - - - - - - - x - - - **`CUKY`** - - - - - - - - - - - - - - - - - - - - - - - x - - **`RAW`** - - - - - - - - - - - - - - - - - - - - - - - - x - **`GEOM_EWKB`** - - - - - - - - - - - - - - - - - - - - - - - - - x abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_select\_clauses\_v2.html abencds\_set\_operators.html