---
title: "ABAPSELECT_AVG_AS"
description: |
  ABAPSELECT_AVG_AS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECT_AVG_AS.htm"
abapFile: "ABAPSELECT_AVG_AS.html"
keywords: ["select", "if", "class", "data", "types", "ABAPSELECT", "AVG"]
---

``... AVG( [DISTINCT]\ [`col`](ABENABAP_SQL_COLUMNS.html) AS dtype ) ...``

Aggregate function [`AVG`](ABENSQL_AGG_FUNC.html) in ABAP SQL with a data type `dtype` specified. The data type determines the result type in which the average value is returned. The data type of `col` must be numeric and have one of the types [`INT1`](ABENDDIC_BUILTIN_TYPES.html), [`INT2`](ABENDDIC_BUILTIN_TYPES.html), [`INT4`](ABENDDIC_BUILTIN_TYPES.html), [`INT8`](ABENDDIC_BUILTIN_TYPES.html), [`DEC`](ABENDDIC_BUILTIN_TYPES.html), [`CURR`](ABENDDIC_BUILTIN_TYPES.html), [`QUAN`](ABENDDIC_BUILTIN_TYPES.html), or [`FLTP`](ABENDDIC_BUILTIN_TYPES.html). The addition `AS` cannot yet be used for all types for [decimal floating point numbers](ABENDDIC_DECIMAL_FLOATING_POINT.html).

The data type `dtype` can have the built-in numeric type [`DEC`](ABENDDIC_BUILTIN_TYPES.html), [`CURR`](ABENDDIC_BUILTIN_TYPES.html), [`QUAN`](ABENDDIC_BUILTIN_TYPES.html), [`DECFLOAT16`](ABENDDIC_BUILTIN_TYPES.html), [`DECFLOAT34`](ABENDDIC_BUILTIN_TYPES.html), or [`FLTP`](ABENDDIC_BUILTIN_TYPES.html). The data type `FLTP`, however, can only be specified for operands of type `FLTP`. The data type `dtype` can be specified as follows:

Length and decimal places must be specified with `len` and `decimals`. [Literals](ABENABAP_SQL_LITERALS.html) or [host constants](ABENABAP_SQL_HOST_VARIABLES.html) of the [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `b`, `s`, `i`, or `int8` can be specified for `len` and `decimals`. The value range of the data type `dtype` should cover the value range of the operand type:

The data types `DECFLOAT16` and `DECFLOAT34` can be used for all allowed data types of `col`. If the average value cannot be represented exactly in the data type `dtype`, the result is rounded commercially for decimal types.

**Note** The usage of smaller result types (e.g. less digits) is possible, but not recommended. Overflows during execution may occur.

Application of the aggregate function `AVG` to a column of the DDIC database table `DEMO_EXPRESSIONS`. The class `CL_DEMO_SQL_AVG` implements this access to the table and can be executed to show the result.

-   `DEC( len,decimals )`
-   `CURR( len,decimals )`
-   `QUAN( len,decimals )`
-   `D16N` for `DECFLOAT16`
-   `D34N` for `DECFLOAT34`
-   `FLTP`

-   If `col` is an integer type, a type `dtype` of type `DEC`, `CURR`, `QUAN` must have at least as many integer digits as is required by the value range of the respective integer type, that is, 3 for `INT1`, 5 for `INT2`, 10 for `INT4`, and 19 for `INT8`. There is no restriction on the number of decimal places.
-   If `col` has type `DEC`, `CURR`, `QUAN`, a type `dtype` of type `DEC`, `CURR`, `QUAN` must have at least as many integer digits and decimal places.

-   The addition `AS` to `AVG` bridges the gap for average values where the default result type `FLTP` cannot be cast to other numeric data types with [`CAST`](ABENSQL_CAST.html).
-   Since average values usually have decimal places, integer types are not supported for `dtype`. If necessary, the type `DEC` can be used without decimal places.
-   An aggregate expression `AVG` cannot be applied to operands with the data type `INT8` without using the addition `AS`. The addition `AS` can also be used to form average values for columns with data type `INT8`. However, for the types [`DF16_...`](ABENDDIC_BUILTIN_TYPES.html), [`DF34_...`](ABENDDIC_BUILTIN_TYPES.html), `AVG` is only possible without the addition `AS`.
-   The actual calculation of the average value depending on the involved data types is platform dependent. This can lead to platform-dependent underflows, overflows and corresponding exceptions during the calculation. To prevent exceptions, the total of the values for which the average value is calculated should be within the value range of `dtype`.
-   If `AS FLTP` is specified explicitly for operands of type `FLTP`, this ensures that the result of `AVG` has this type.
-   If used, `D16N` or `D34N` force the [strict mode of the syntax check from ABAP release 7.77](ABENABAP_SQL_STRICTMODE_777.html).

SELECT \\n FROM demo\_expressions \\n FIELDS \\n AVG( num1 ) AS avg\_no\_type, \\n AVG( DISTINCT num1 ) AS avg\_no\_type\_distinct, \\n AVG( num1 AS DEC( 10,0 ) ) AS avg\_dec0, \\n AVG( DISTINCT num1 AS DEC( 10,0 ) ) AS avg\_dec0\_distinct, \\n AVG( num1 AS DEC( 14,4 ) ) AS avg\_dec4, \\n AVG( DISTINCT num1 AS DEC( 14,4 ) ) AS avg\_dec4\_distinct \\n INTO @FINAL(result). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abapselect\_aggregate.html abensql\_agg\_func.html