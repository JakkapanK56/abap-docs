---
title: "ABENSELECT_INTO_CONVERSION"
description: |
  ABENSELECT_INTO_CONVERSION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSELECT_INTO_CONVERSION.htm"
abapFile: "ABENSELECT_INTO_CONVERSION.html"
keywords: ["select", "insert", "delete", "if", "class", "data", "types", "ABENSELECT", "INTO", "CONVERSION"]
---

The following assignment rules apply to assignments of the result fields of the result set of a standalone [`SELECT`](ABAPSELECT.html), [`WITH`](ABAPWITH.html), or [`FETCH`](ABAPFETCH.html) statement to the target fields defined in the [`INTO`](ABAPINTO_CLAUSE.html) clause.

The following table shows the prerequisites for assigning individual columns of the result set to individual data objects, that is, for all forms of the `SELECT` statement, except when all columns in a work area `wa` are read with `*` and `CORRESPONDING FIELDS` is not specified at the same time. The table shows which data types of the result set can be assigned to which ABAP data types.

The assignments are made according to the following rules:

For assignments of LOBs to reference variables, see [LOB Handles](ABENSELECT_INTO_LOB_HANDLES.html).

The variable `result1` is given the value 1. Any surplus decimal places are cut off. The built-in SQL function [`ROUND`](ABENSQL_ARITH_FUNC.html) can be used to perform roundings like in [conversions](ABENCONVERSION_RULES.html) in ABAP. `result2` is given the value 2.

-   Fields of the types `STRING` and `RAWSTRING` ([LOBs](ABENLOB_GLOSRY.html)) from the result set can be assigned to reference variables for [LOB handles](ABENSELECT_INTO_LOB_HANDLES.html) as well as to strings. The static type of these reference variables must be one of the system classes or one of the system interfaces that support [streaming and locators](ABENSTREAMS_LOCATORS.html) for ABAP SQL.
-   Fields cannot be assigned to [enumerated variables](ABENENUMERATED_VARIABLE_GLOSRY.html), even if their [base type](ABENBASE_TYPE_GLOSRY.html) would be an allowed ABAP type.

-   If the target field is of data type `c` or `x`, the content of the result field is inserted left-aligned into the target field. If the target field is too short, the result is truncated to the right. If the target field is too long, spaces or hexadecimal 0 are filled to the right.
-   If the target field is of data type `string` or `xstring`, the content of the result field is inserted left-aligned into the target field. In result fields of the type `STRING`, the trailing blanks are transferred. The target field has the same length as the result field.
-   If the target field is of data type `n`, the content of the result field is inserted right-aligned into the target field. If necessary, it is padded with zeros on the left. If the target field is too short, the result is truncated to the left.
-   If the target field has a [numeric data type](ABENNUMERIC_DATA_TYPE_GLOSRY.html), the value of the result field is converted to this data type and the [value range](ABENVALUE_RANGE_GLOSRY.html) of the target field must be large enough. Here, any surplus decimal places in result fields of the type `CURR`, `DEC`, or `QUAN` (numbers in the [BCD](ABENBCD_GLOSRY.html) format) are cut off.
-   If the result field contains a [null value](ABENNULL_VALUE_GLOSRY.html), a type-dependent initial value is assigned to the target field.

DELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM @( VALUE #( id = 'X' \\n dec2 = '1.9999999999' ) ). \\n\\ \\nDATA result1 TYPE i. \\nSELECT SINGLE \\n FROM demo\_expressions \\n FIELDS dec2 \\n WHERE id = 'X' \\n INTO (@result1). \\n\\ \\nDATA result2 TYPE i. \\nSELECT SINGLE \\n FROM demo\_expressions \\n FIELDS ROUND( dec2,0 ) AS dec2 \\n WHERE id = 'X' \\n INTO (@result2). **Data Type of Column in Result Set** **ABAP Data Type** `CHAR`, `CLNT`, `CUKY`, `LANG`, `SSTRING`, `STRING`, `UNIT` `c`, `string` `ACCP`, `NUMC` `c`, `n` `LCHR` `c` `RAW`, `RAWSTRING`, `GEOM_EWKB` `x`, `xstring` `LRAW` `x` `DF16_DEC` `decfloat16`, `decfloat34` `DECFLOAT16`, `DF16_RAW`, `DF16_SCL` (obsolete) `decfloat16` `DECFLOAT34`, `DF34_DEC`, `DF34_RAW`, `DF34_SCL` (obsolete) `decfloat34` `CURR`, `DEC`, `INT1`, `INT2`, `INT4`, `INT8`, `PREC`, `QUAN` (`b`, `s`,) `i`, `int8`, `p`, `f` `FLTP` `f` `DATN`, `DATS` `d` `TIMN`, `TIMS` `t` `UTCLONG` `utclong` abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapinto\_clause.html