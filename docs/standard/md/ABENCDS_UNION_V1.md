---
title: "ABENCDS_UNION_V1"
description: |
  ABENCDS_UNION_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_UNION_V1.htm"
abapFile: "ABENCDS_UNION_V1.html"
keywords: ["select", "delete", "do", "if", "case", "method", "class", "data", "types", "internal-table", "ABENCDS", "UNION"]
---

``... UNION [ALL]\ [`select_statement`](ABENCDS_SELECT_STATEMENT_V1.html) ...``

Merges the rows of the result sets of two [`SELECT` statements](ABENCDS_SELECT_STATEMENT_V1.html) of [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) into one result set. As a prerequisite, the result sets must have the same number of elements and the element pairs that occur in the same position of the result set must have a compatible data type. The data types `DF16_...`, `DF34_...`, `LCHR`,`LRAW`,`STRING`, `RAWSTRING`, and `GEOM_EWKB` are not supported. A union result set can itself be the left side of a further union.

If the addition `ALL` is specified, all entries, even duplicates, are listed in the result set. If `ALL` is not specified, all duplicate entries are removed from the result set. For determining the duplicate rows, all columns of the result set are considered. In detail, this works as follows:

The properties of the elements of the merged result set are determined as follows:

The following table shows which data types can be merged with each other in a union. On the left side, the data types of the `SELECT` list of the first `SELECT` statement are listed and the other columns specify with which data types of the following `SELECT` lists they can be merged.

There are no further restrictions to note in combinations using *x*. The following rules apply to the other combinations:

If the length or value range of the first element does not cover the following elements in combinations with *w*, the value returned by the database can be too great for the data type of the element of the CDS entity. It is still possible to activate the view here, but the content may be truncated or exceptions may be raised in ABAP SQL [queries](ABENASQL_QUERY_GLOSRY.html) if a type reference is applied to the entity. This is due to the [assignment rules](ABENSELECT_INTO_CONVERSION.html) of the [`INTO`](ABAPINTO_CLAUSE.html) clause. Assignments to ABAP data objects with a sufficiently large value range, on the other hand, do not cause problems.

A CDS view in which union sets are formed with `UNION` can expose [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html). Such an association must be defined and exposed in the same way in all `SELECT` statements merged with `UNION`. That is, CDS associations that are exposed in the respective [`SELECT` lists](ABENCDS_SELECT_LIST_V1.html) must appear in all `SELECT` statements merged with `UNION` and the following requirements must be met:

These rules also apply if a CDS association is defined in a data source of a `SELECT` statement and is exposed by the current statement. From outside, the CDS associations with the same name that are exposed in the individual `SELECT` lists act like a CDS association exposed by the union set. There are no restrictions on CDS associations that are not exposed in the `SELECT` lists.

Defining new CDS compositions is not possible in a CDS view with `UNION` or `UNION ALL`.

Union set without name list. The element names of the `SELECT` lists must match.

Union set with name list. The element names of the `SELECT` lists do not need to match.

The following CDS view creates the union of the result sets of two `SELECT` statements. The element `col1` in the first `SELECT` list has the type `INT4`, whereas the associated element `col1` in the second `SELECT` list has the type `INT8`. This is why a syntax check warning is raised. To bypass the warning, `col2` is converted to data type `INT8` using a [`CAST`](ABENCDS_CAST_EXPRESSION_V1.html) expression.

The class `CL_DEMO_CDS_UNION_ELEMENT_TYPE` uses [`SELECT`](ABAPSELECT.html) to access the view four times:

The recommended method in all cases, however, is to handle the second element using a [`CAST`](ABENCDS_CAST_EXPRESSION_V1.html) in the CDS view.

-   First, all rows of all `UNION` branches are combined into one result set.
-   Then, all rows that occur more than once (considering all columns, not just key fields) are deleted except for one.

-   Element names

-   If an explicit [name list](ABENCDS_NAME_LIST_V1.html) is specified, this list determines the names of the elements
-   If no explicit [name list](ABENCDS_NAME_LIST_V1.html) is specified, the direct element names or the alternative element names defined using `AS` must match for each column in the [`SELECT` lists](ABENCDS_SELECT_LIST_V1.html) of all `SELECT` statements and are used.

-   Key elements
-   The [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) of the first `SELECT` statement determines the key elements.
-   Element annotations
-   Only the [element annotations](ABENCDS_ELEMENT_ANNOTATIONS_V1.html) from the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) of the first `SELECT` statement are applied.
-   Data type

-   The [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) of the first `SELECT` statement determines the data type of each element of the CDS entity.
-   The data type used to create the union set on the database is a data type whose value range covers the data types of the associated columns of all result sets involved.

-   In combinations with *w*, the length or the value range of the data type in the first `SELECT` must be long enough for all following `SELECT` lists. If this is not the case, a syntax check warning is raised.
-   In combinations using *l*, the lengths of the data types must match exactly.

-   They have the same name.
-   They have the same [cardinality](ABENCARDINALITY_GLOSRY.html).
-   They must be exposed at the same position in the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) using a [path expression](ABENCDS_PATH_EXPRESSION_V1.html).
-   They must have the same `ON` conditions, that is:

-   The conditions must relate to the same fields in the association source and association target and express the same logic for these fields.
-   The fields of the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) that are listed in an `ON` condition must be at identical positions in the `SELECT` list.

-   Union sets can be a good way of transforming non-normalized DDIC database tables into a normalized view on the data.
-   If the length of the value range of an element from the `SELECT` list of the first `SELECT` statement does not cover the associated elements of the following `SELECT` statements, it is advisable to define an appropriate type with a suitable [`CAST`](ABENCDS_CAST_EXPRESSION_V1.html) expression.
-   The maximum number of different `SELECT` statements that can be merged using `UNION` depends on the database system. If this number is exceeded, the CDS view cannot be activated.

-   The first access writes directly to an internal table with the line type of the CDS entity. The access works because the value of the element `col1` matches the value range of the data type `i`.
-   The second access is the same as the first but one value in the element `col1` is outside the value range of the data type `i` of the first column of the internal table `result2`. This is why an exception is raised.
-   In the third access, the exception is prevented since the data type of the first column of the result set (and hence the data type of the internal table `result3`) is transformed to `int8` using a [`CAST`](ABENSQL_CAST.html) in ABAP SQL.
-   In the fourth access, the exception is prevented due to an appropriate declaration of the data type of the first column of the internal table `result4`.

@AbapCatalog.sqlViewName: '...' \\ndefine view ... as \\n select \\n from demo\_join1 \\n \\{ a as c1, b as c2, c as c3, d as c4 \\} \\n union \\n select \\n from demo\_join2 \\n \\{ d as c1, e as c2, f as c3, g as c4 \\} @AbapCatalog.sqlViewName: '...' \\ndefine view ... ( c1, c2, c3, c4 ) as \\n select \\n from demo\_join1 \\n \\{ a, b, c, d \\} \\n union \\n select \\n from demo\_join2 \\n \\{ d, e, f, g \\} @AbapCatalog.sqlViewName: 'DEMOCDSUNIONTYPE'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view Demo\_Cds\_Union\_Element\_Type(\\n id,\\n col1,\\n col2\\n )\\n as select from\\n demo\_expressions\\n \\{\\n id,\\n num1 as col1,\\n cast( num1 as abap.int8 ) as col2\\n \\}\\nunion all select from\\n demo\_expressions\\n \\{\\n id,\\n numlong1 as col1,\\n numlong1 as col2\\n \\}\\n **First/following** **`INT1`** **`INT2`** **`INT4`** **`INT8`** **`DEC`** **`CURR`** **`QUAN`** **`FLTP`** **`CHAR`** **`SSTRING`** **`NUMC`** **`DATS`** **`TIMS`** **`ACCP`** **`CLNT`** **`LANG`** **`UNIT`** **`CUKY`** **`RAW`**\\ **`INT1`** x w w w w w w w - - - - - - - - - - - **`INT2`** x x w w w w w w - - - - - - - - - - - **`INT4`** x x x w w w w w - - - - - - - - - - - **`INT8`** x x x x w w w w - - - - - - - - - - - **`DEC`** w w w w w w w w - - - - - - - - - - - **`CURR`** w w w w w w w w - - - - - - - - - - - **`QUAN`** w w w w w w w w - - - - - - - - - - - **`FLTP`** x x x w w w w x - - - - - - - - - - - **`CHAR`** - - - - - - - - w w l w w l l l l l - **`SSTRING`** - - - - - - - - w w - - - - - - - - - **`NUMC`** - - - - - - - - w - l l l l l l - - - **`DATS`** - - - - - - - - w - l x - - - - - - - **`TIMS`** - - - - - - - - w - l - x - - - - - - **`ACCP`** - - - - - - - - l - l - - x - - - - - **`CLNT`** - - - - - - - - l - l - - - x - - - - **`LANG`** - - - - - - - - l - l - - - - x - - - **`UNIT`** - - - - - - - - l - - - - - - - x - - **`CUKY`** - - - - - - - - l - - - - - - - - x - **`RAW`** - - - - - - - - - - - - - - - - - - x abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_select\_clauses\_v1.html