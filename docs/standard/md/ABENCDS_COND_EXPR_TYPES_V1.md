---
title: "ABENCDS_COND_EXPR_TYPES_V1"
description: |
  ABENCDS_COND_EXPR_TYPES_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_COND_EXPR_TYPES_V1.htm"
abapFile: "ABENCDS_COND_EXPR_TYPES_V1.html"
keywords: ["select", "data", "types", "ABENCDS", "COND", "EXPR", "TYPES"]
---

The following tables show which [built-in data types](ABENDDIC_BUILTIN_TYPES.html) in ABAP Dictionary can be compared with each other in a [condition](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html).

The following table shows the possible combinations of data source fields [`data_source`](ABENCDS_DATA_SOURCE_V1.html) on the left side (`lhs`) with data source fields on the right side (`rhs`) of [comparisons](ABENCDS_COND_EXPR_COMP_V1.html).

The following table shows the possible combinations of data source fields [`data_source`](ABENCDS_DATA_SOURCE_V1.html) on the left side (`lhs`) with [parameters](ABENCDS_PARAMETER_V1.html) on the right side (`rhs`) of [comparisons](ABENCDS_COND_EXPR_COMP_V1.html).

The following table shows the possible combinations of data source fields [`data_source`](ABENCDS_DATA_SOURCE_V1.html) on the left side (`lhs`) with [literals](ABENCDS_LITERAL_V1.html) on the right side (`rhs`) of [comparisons](ABENCDS_COND_EXPR_COMP_V1.html). The data types of literals are determined by their content (as described [here](ABENCDS_LITERAL_V1.html)) and only the data types shown in the table are possible.

-   There are no restrictions for combinations using *x*.
-   In combinations using *l*, the lengths of the compared columns must match exactly.

-   There are no restrictions for combinations using *x*.
-   In combinations using *l*, the lengths of the compared operands must match exactly.

-   There are no restrictions for combinations using *x*.
-   For the combination using *v*, the literal value must be within the following value range:

-   Comparison of `INT1`(`lhs`) with `INT2`(`rhs`): between 0 and 999.
-   Comparison of `INT2`(`lhs`) with `INT4`(`rhs`): between -99,999 and +99,999.
-   Comparison of `INT4`(`lhs`) with `INT8`(`rhs`): between -9,999,999,999 and +9,999,999,999.
-   Comparison of `INT8`(`lhs`) with `INT8`(`rhs`): between -9,223,372,036,854,775,808 and +9,223,372,036,854,775,807.

-   For combinations using *m*, the length of the literal cannot be greater than the column.
-   For combinations using *d*, the length of the literal and the number of decimal places cannot be greater than the length and number for the column.
-   For combinations using *l*, the length of the literal must be equal to the length of the column.

**lhs/rhs** **`INT1`** **`INT2`** **`INT4`** **`INT8`** **`DEC`** **`CURR`** **`QUAN`** **`DECFLOAT16`** **`DECFLOAT34`** **`FLTP`** **`CHAR`** **`SSTRING`** **`NUMC`** **`CLNT`** **`LANG`** **`DATS`** **`TIMS`** **`DATN`** **`TIMN`** **`UTCLONG`** **`ACCP`** **`UNIT`** **`CUKY`** **`RAW`**\\ **`INT1`** x x x x x x x x x x - - - - - - - - - - - - - - **`INT2`** x x x x x x x x x x - - - - - - - - - - - - - - **`INT4`** x x x x x x x x x x - - - - - - - - - - - - - - **`INT8`** x x x x x x x x x x - - - - - - - - - - - - - - **`DEC`** x x x x x x x x x x - - - - - - - - - - - - - - **`CURR`** x x x x x x x x x x - - - - - - - - - - - - - - **`QUAN`** x x x x x x x x x x - - - - - - - - - - - - - - **`DECFLOAT16`** x x x x x x x x x x - - - - - - - - - - - - - - **`DECFLOAT34`** x x x x x x x x x x - - - - - - - - - - - - - - **`FLTP`** x x x x x x x x x x - - - - - - - - - - - - - - **`CHAR`** - - - - - - - - - - x x x l x x x - - - x x x - **`SSTRING`** - - - - - - - - - - x x - - x - - - - - x x x - **`NUMC`** - - - - - - - - - - x - l l - l l - - - - - - - **`CLNT`** - - - - - - - - - - l - l x - - - - - - - - - - **`LANG`** - - - - - - - - - - x x - - x - - - - - - - - - **`DATS`** - - - - - - - - - - x - l - - x - - - - - - - - **`TIMS`** - - - - - - - - - - x - l - - - x - - - - - - - **`DATN`** - - - - - - - - - - - - - - - - - x - - - - - - **`TIMN`** - - - - - - - - - - - - - - - - - - x - - - - - **`UTCLONG`** - - - - - - - - - - - - - - - - - - - x - - - - **`ACCP`** - - - - - - - - - - x x - - - - - - - - x - - - **`UNIT`** - - - - - - - - - - x x - - - - - - - - - x - - **`CUKY`** - - - - - - - - - - x x - - - - - - - - - - x - **`RAW`** - - - - - - - - - - - - - - - - - - - - - - - l **lhs/rhs** **`INT1`** **`INT2`** **`INT4`** **`INT8`** **`DEC`** **`CURR`** **`QUAN`** **`DECFLOAT16`** **`DECFLOAT34`** **`FLTP`** **`CHAR`** **`SSTRING`** **`NUMC`** **`CLNT`** **`LANG`** **`DATS`** **`TIMS`** **`DATN`** **`TIMN`** **`UTCLONG`** **`ACCP`** **`UNIT`** **`CUKY`** **`RAW`**\\ **`INT1`** x x x x x x x x x x - - - - - - - - - - - - - - **`INT2`** x x x x x x x x x x - - - - - - - - - - - - - - **`INT4`** x x x x x x x x x x - - - - - - - - - - - - - - **`INT8`** x x x x x x x x x x - - - - - - - - - - - - - - **`DEC`** x x x x x x x x x x - - - - - - - - - - - - - - **`CURR`** x x x x x x x x x x - - - - - - - - - - - - - - **`QUAN`** x x x x x x x x x x - - - - - - - - - - - - - - **`DECFLOAT16`** x x x x x x x x x x - - - - - - - - - - - - - - **`DECFLOAT34`** x x x x x x x x x x - - - - - - - - - - - - - - **`FLTP`** x x x x x x x x x x - - - - - - - - - - - - - - **`CHAR`** - - - - - - - - - - x x x l x x x - - - - x x - **`SSTRING`** - - - - - - - - - - x x - - x - - - - - - x x - **`NUMC`** - - - - - - - - - - x - l l - l l - - - - - - - **`CLNT`** - - - - - - - - - - l - l x - - - - - - - - - - **`LANG`** - - - - - - - - - - x x - - x - - - - - - - - - **`DATS`** - - - - - - - - - - x - l - - x - - - - - - - - **`TIMS`** - - - - - - - - - - x - l - - - x - - - - - - - **`DATN`** - - - - - - - - - - - - - - - - - x - - - - - - **`TIMN`** - - - - - - - - - - - - - - - - - - x - - - - - **`UTCLONG`** - - - - - - - - - - - - - - - - - - - x - - - - **`ACCP`** - - - - - - - - - - x x - - - - - - - - - - - - **`UNIT`** - - - - - - - - - - x x - - - - - - - - - x - - **`CUKY`** - - - - - - - - - - x x - - - - - - -- - - x - **`RAW`** - - - - - - - - - - - - - - - - - - - - - - - l **lhs/rhs** **`INT1`** **`INT2`** **`INT4`** **`INT8`** **`FLTP`** **`CHAR`** **`NUMC`**\\ **`INT1`** x v - - - - - **`INT2`** x x v - - - - **`INT4`** x x x v - - - **`INT8`** x x x v - - - **`DEC`** x x x x d - - **`CURR`** l l l l d - - **`QUAN`** l l l l d - - **`DECFLOAT16`** x x x x - - - **`DECFLOAT34`** x x x x - - - **`FLTP`** - - - - - - - **`CHAR`** - - - - - m m **`SSTRING`** - - - - - m - **`NUMC`** - - - - - - l **`CLNT`** - - - - - - l **`LANG`** - - - - - l l **`DATS`** - - - - - - l **`TIMS`** - - - - - - l **`ACCP`** - - - - - - l **`UNIT`** - - - - - m - **`CUKY`** - - - - - m - **`RAW`** - - - - - - - abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_conditional\_expression\_v1.html abencds\_cond\_expr\_comp\_v1.html