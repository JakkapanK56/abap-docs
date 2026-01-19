---
title: "ABENCDS_UNION_V2"
description: |
  ABENCDS_UNION_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_UNION_V2.htm"
abapFile: "ABENCDS_UNION_V2.html"
keywords: ["select", "delete", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "ABENCDS", "UNION"]
---

``... UNION [ALL]\ [`select_statement`](ABENCDS_SELECT_STATEMENT_V2.html) ...``

Merges the rows of the result sets of multiple [`SELECT` statements](ABENCDS_SELECT_STATEMENT_V2.html) of [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) into one result set. As a prerequisite, the result sets must have the same number of elements and the element pairs that occur in the same position of the result set must have a compatible data type. A union result set can itself be the left side of a further union.

If the addition `ALL` is specified, all entries, even duplicates, are listed in the result set. If `ALL` is not specified, all duplicate entries are removed from the result set. For determining the duplicate rows, all columns of the result set are considered. In detail, this works as follows:

If the addition `ALL` is specified, all data types are possible in a union view. Elements with data types [`LRAW`](ABENDDIC_BUILTIN_TYPES.html) and [`LCHR`](ABENDDIC_BUILTIN_TYPES.html) must be at the end of the view and an element of type `INT2` or `INT4` must stand directly in front of such an element, representing the maximum length of the element. Only one such element is allowed per view.

Without the addition `ALL`, data types [`STRING`](ABENDDIC_BUILTIN_TYPES.html), [`RAWSTRING`](ABENDDIC_BUILTIN_TYPES.html), [`LCHR`](ABENDDIC_BUILTIN_TYPES.html), [`LRAW`](ABENDDIC_BUILTIN_TYPES.html), and [`GEOM_EWKB`](ABENDDIC_BUILTIN_TYPES.html) are not supported.

As a prerequisite for using the statement `UNION` in a CDS view entity, the CDS view entity annotation [`Metadata.ignorePropagatedAnnotations: true`](ABENCDS_VIEW_ENTITY_ANNO.html) must be specified.

In general, the first `SELECT` statement defines the signature of the `UNION` view. Here are the details on the properties of the elements of the merged result set:

The following table shows which data types can be merged with each other in a union. On the left side, the data types of the `SELECT` list of the first `SELECT` statement are listed and the other columns specify with which data types of the following `SELECT` lists they can be merged.

There are no further restrictions to note in combinations using *x*. The following rules apply to the other combinations:

If the length or value range of the first element does not cover the following elements in combinations with *w*, the value returned by the database can be too great for the data type of the element of the CDS entity. It is still possible to activate the view here, but the content may be truncated or exceptions may be raised in ABAP SQL [queries](ABENASQL_QUERY_GLOSRY.html) if a type reference is applied to the entity. This is due to the [assignment rules](ABENSELECT_INTO_CONVERSION.html) of the [`INTO`](ABAPINTO_CLAUSE.html) clause. Assignments to ABAP data objects with a sufficiently large value range, on the other hand, do not cause problems.

If the elements of a `UNION` view are [CDS amount fields](ABENCDS_AMOUNT_FIELD_GLOSRY.html), [CDS quantity fields](ABENCDS_QUANTITY_GLOSRY.html), or [CDS calculated quantities](ABENCDS_CALCULATED_QUANTITY_GLOSRY.html), the following rules apply:

A CDS view entity in which union sets are formed with `UNION` can expose [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html). Such an association must be defined and exposed in the same way in all `SELECT` statements merged with `UNION`. That is, CDS associations that are exposed in the respective `SELECT` lists must appear in all `SELECT` statements merged with `UNION` and the following requirements must be met:

These rules also apply if a CDS association is defined in a data source of a `SELECT` statement and is exposed by the current statement. From outside, the CDS associations with the same name that are exposed in the individual `SELECT` lists act like a CDS association exposed by the union set. There are no restrictions on CDS associations that are not exposed in the `SELECT` lists.

In CDS view entities, nesting of union clauses is possible. To nest a union clause within another union clause, use parentheses `( ... )`. A nested union clause is merged first and its result set is then merged again with the result sets of the other union branches.

Example number 3 below demonstrates nesting of union branches.

Union set. The element names of the `SELECT` lists must match.

The following CDS view entity creates the union of the result sets of two `SELECT` statements. The element `col1` in the first `SELECT` list has the type `INT4`, whereas the associated element `col1` in the second `SELECT` list has the type `INT8`. This is why a syntax check warning is raised. To bypass the warning, `col2` is converted to data type `INT8` using a [`CAST`](ABENCDS_CAST_EXPRESSION_V2.html) expression.

The class `CL_DEMO_CDS_UNION_ELE_TYPE_VE` uses [`SELECT`](ABAPSELECT.html) to access the view four times:

The recommended method in all cases, however, is to handle the second element using a [`CAST`](ABENCDS_CAST_EXPRESSION_V2.html) in the CDS view entity.

The following CDS view entity nests a union clause within another union clause.

The class `CL_DEMO_CDS_UNION_NESTING_VE` first fills the underlying database table and then accesses the view using [`SELECT`](ABAPSELECT.html). The result set consists of 9 rows. Two of them are duplicates, marked in yellow:

If there were no nesting and the parentheses `( )` around the last two union branches were left out, the result set would return only 7 rows. The reason is that the third union branch does not use the addition `ALL`. With nesting, duplicate entries are removed only from the last two branches, which are nested within each other.

Without nesting, duplicate entries would be removed from all union branches and the result set would contain fewer rows.

-   First, all rows of all `UNION` branches are combined into one result set.
-   Then, all rows that occur more than once (considering all columns, not just key fields) are deleted except for one.

-   Element names
-   The direct element names or the alternative element names defined using `AS` must match for each column in the [`SELECT` lists](ABENCDS_SELECT_LIST_V2.html) of all `SELECT` statements and are used.
-   Key elements
-   They key elements of all `SELECT` lists must match. Otherwise, a syntax check error occurs.
-   Element annotations
-   Only the `SELECT` list of the first `SELECT` statement can define [element annotations](ABENCDS_ELEMENT_ANNOTATIONS_V2.html). In all subsequent branches, element annotations a forbidden.
-   Data type

-   The `SELECT` list of the first `SELECT` statement determines the DDIC data type of each element of the CDS entity.
-   The data type used to create the union set on the database is a data type whose value range covers the data types of the associated columns of all result sets involved.

-   In combinations with *w*, the length or the value range of the data type in the first `SELECT` must be long enough for all following `SELECT` lists. If this is not the case, a syntax check warning is raised.
-   In combinations using *l*, the lengths of the data types must match exactly.
-   In combinations using *d*, the number of decimal places must match exactly.

-   Since the annotation `Metadata.ignorePropagatedAnnotations: true` is mandatory in `UNION` views, all reference annotations are lost and must be provided again within the first `SELECT` branch.

-   For elements of data type `CURR` or `QUAN` as well as for calculated quantities, the reference annotation is mandatory.
-   Elements of other data types lose their reference information and their characteristic as amount or quantity field. The respective reference annotation can be assigned anew to declare the field an amount or quantity field. This is optional.

-   Calculated quantity fields can be merged only with other calculated quantity fields. Amount fields and quantity fields can be merged with each other, as long as the data types match (see matrix above).
-   For amount fields of type `CURR`, the number of decimal places must match exactly in all `UNION` branches.
-   **Note** Elements of data type `CURR` are incompatible to any other data type. The function [`CURR_TO_DECFLOAT_AMOUNT`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html) can be used to convert an amount field of data type `CURR` into an amount field of data type `DECFLOAT34`.

-   They have the same [cardinality](ABENCARDINALITY_GLOSRY.html).
-   They must be exposed at the same position in the `SELECT` list using a [path expression](ABENCDS_PATH_EXPRESSION_V2.html).
-   They must have the same `ON` conditions, that is:

-   The conditions must relate to the same fields in the association source and association target and express the same logic for these fields.
-   The fields of the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) that are listed in an `ON` condition must be at identical positions in the `SELECT` list.

-   **Note** It is **not** required that the associations are defined with the same alias name.

-   Defining new [CDS compositions](ABENCDS_COMPOSITION_GLOSRY.html) is not possible in a `UNION` view. Exposing to-child and to-parent associations that were defined in a data source of the `SELECT` statements is possible.
-   Annotations are only allowed in the `SELECT` list of the first `SELECT` statement. In all following branches, annotations are not allowed.

-   Union sets can be a good way of transforming non-normalized [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) into a normalized view of the data.
-   If the length of the value range of an element from the `SELECT` list of the first `SELECT` statement does not cover the associated elements of the following `SELECT` statements, it is advisable to define an appropriate type with a suitable [`CAST`](ABENCDS_CAST_EXPRESSION_V2.html) expression.
-   The maximum number of different `SELECT` statements that can be merged using `UNION` depends on the database system. If this number is exceeded, the CDS view entity cannot be activated.
-   If the annotation [`@AbapCatalog.entityBuffer.definitionAllowed`](ABENCDS_V2_VIEW_BUFFERING.html) is set to `true` in a union view, a syntax check warning occurs. Union views might return duplicate records with regards to the key fields. The buffer needs a unique key in some scenarios. Therefore, unexpected buffer behavior might occur.

-   The first access writes directly to an internal table with the line type of the CDS entity. The access works because the value of the element `col1` matches the value range of the data type `i`.
-   The second access is the same as the first but one value in the element `col1` is outside the value range of the data type `i` of the first column of the internal table `result2`. This is why an exception is raised.
-   In the third access, the exception is prevented since the data type of the first column of the result set (and hence the data type of the internal table `result3`) is transformed to `int8` using a [`CAST`](ABENSQL_CAST.html) in ABAP SQL.
-   In the fourth access, the exception is prevented due to an appropriate declaration of the data type of the first column of the internal table `result4`.

\\ \\ndefine view entity ... as \\n select \\n from demo\_join1 \\n \\{ a as c1, b as c2, c as c3, d as c4 \\} \\n union \\n select \\n from demo\_join2 \\n \\{ d as c1, e as c2, f as c3, g as c4 \\} @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@Metadata.ignorePropagatedAnnotations: true\\ndefine view entity DEMO\_CDS\_UNION\_ELEMENT\_TYPE\_VE\\n as select from\\n demo\_expressions\\n \\{\\n id,\\n num1 as col1,\\n cast( num1 as abap.int8 ) as col2,\\n raw1 as col3 \\n \\}\\nunion all select from\\n demo\_expressions\\n \\{\\n id,\\n numlong1 as col1,\\n numlong1 as col2,\\n abap.raw'AABBCCDDEEAABBCCDDEE' as col3 \\n \\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, union nesting'\\n@Metadata.ignorePropagatedAnnotations: true\\n\\ndefine view entity DEMO\_CDS\_UNION\_NESTING\_VE\\n as select from demo\_dbtab\_child\\n\\{\\n key key\_field,\\n char\_field\\n\\}\\nwhere\\n key\_field = 1 // 3 entries, 2 duplicate\\n\\nunion all select from demo\_dbtab\_child\\n\\{\\n key key\_field,\\n char\_field\\n\\}\\nwhere\\n key\_field = 3 // 3 entries, 2 duplicates\\n\\nunion all\\n(\\n select from demo\_dbtab\_child\\n \\{\\n key key\_field,\\n char\_field\\n \\}\\n where\\n key\_field = 4 // 2 unique entries\\n\\n union --distinct\\n select from demo\_dbtab\_child\\n \\{\\n key key\_field,\\n char\_field\\n \\}\\n where\\n key\_field = 6 // 1 unique entry\\n)\\n **First/following** **`INT1`** **`INT2`** **`INT4`** **`INT8`** **`DEC`** \\ **`DF16_...`** **`DF34_...`** \\ **`CURR`** **`QUAN`** **`FLTP`** **`CHAR`** **`SSTRING`** **`STRING`** **`NUMC`** **`DATS`** \\ **`DATN`** \\ **`TIMS`** **`TIMN`** **`UTCL`** **`ACCP`** **`CLNT`** **`LANG`** **`UNIT`** **`CUKY`** **`RAW`** **`GEOM_EWKB`**\\ **`INT1`** x w w w w - - - w w - - - - - - - - - - - - - - - - **`INT2`** x x w w w - - - w w - - - - - - - - - - - - - - - - **`INT4`** x x x w w - - - w w - - - - - - - - - - - - - - - - **`INT8`** x x x x w x - - w w - - - - - - - - - - - - - - - - **`DEC`** w w w w w w w - w w - - - - - - - - - - - - - - - - **`DF16_...`** w w w w w x - - w w - - - - - - - - - - - - - - - - **`DF34_...`** w w w w w x x - w w - - - - - - - - - - - - - - - - **`CURR`** - - - - - - - d - - - - - - - - - - - - - - - - - - **`QUAN`** w w w w w w w - w w - - - - - - - - - - - - - - - - **`FLTP`** x x x w w w w - w x - - - - - - - - - - - - - - - - **`CHAR`** - - - - - - - - - - w w - l w - w - - l - l - - - - **`SSTRING`** - - - - - - - - - - w w - - - - - - - - - - - - - - **`STRING`** - - - - - - - - - - - - w - - - - - - - - - - - - - **`NUMC`** - - - - - - - - - - w - - l l - l - - l - l - - - - **`DATS`** - - - - - - - - - - w - - l x - - - - - - - - - - - **`DATN`** - - - - - - - - - - - - - - - x - - - - - - - - - - **`TIMS`** - - - - - - - - - - w - - l - - x - - - - - - - - - **`TIMN`** - - - - - - - - - - - - - - - - - x - - - - - - - - **`UTCL`** - - - - - - - - - - - - - - - - - - x - - - - - - - **`ACCP`** - - - - - - - - - - l - - l - - - - - x - - - - - - **`CLNT`** - - - - - - - - - - - - - - - - - - - - x - - - - - **`LANG`** - - - - - - - - - - l - - l - - - - - - - x - - - - **`UNIT`** - - - - - - - - - - - - - - - - - - - - - - x - - - **`CUKY`** - - - - - - - - - - - - - - - - - - - - - - - x - - **`RAW`** - - - - - - - - - - - - - - - - - - - - - - - - x - **`GEOM_EWKB`** - - - - - - - - - - - - - - - - - - - - - - - - - x abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_select\_clauses\_v2.html abencds\_set\_operators.html