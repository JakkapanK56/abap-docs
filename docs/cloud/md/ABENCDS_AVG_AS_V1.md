---
title: "ABENCDS_AVG_AS_V1"
description: |
  ABENCDS_AVG_AS_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_AVG_AS_V1.htm"
abapFile: "ABENCDS_AVG_AS_V1.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "ABENCDS", "AVG"]
---

`... AVG( [DISTINCT] arg AS dtype ) ...`

Aggregate expression [`AVG`](ABENCDS_AGGREGATE_FUNCTIONS_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) with a data type `dtype` specified. The data type determines the result type in which the average value is returned.

The same can be specified for the `arg` as for all [aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V1.html) with one exception; [`CASE`](ABENCDS_CASE_EXPRESSION_V1.html) cannot be specified. The data type of `arg` must be numeric and have one of the types [`INT1`](ABENDDIC_BUILTIN_TYPES.html), [`INT2`](ABENDDIC_BUILTIN_TYPES.html), [`INT4`](ABENDDIC_BUILTIN_TYPES.html), [`DEC`](ABENDDIC_BUILTIN_TYPES.html), [`CURR`](ABENDDIC_BUILTIN_TYPES.html), [`QUAN`](ABENDDIC_BUILTIN_TYPES.html), or [`FLTP`](ABENDDIC_BUILTIN_TYPES.html). `arg` can also have data type [`INT8`](ABENDDIC_BUILTIN_TYPES.html), but with this data type, the addition `AS` is mandatory.

The data type `dtype` can have the built-in numeric type [`DEC`](ABENDDIC_BUILTIN_TYPES.html), [`CURR`](ABENDDIC_BUILTIN_TYPES.html), [`QUAN`](ABENDDIC_BUILTIN_TYPES.html), [`DECFLOAT16`](ABENDDIC_BUILTIN_TYPES.html), [`DECFLOAT34`](ABENDDIC_BUILTIN_TYPES.html), or [`FLTP`](ABENDDIC_BUILTIN_TYPES.html). The data type `FLTP`, however, can only be specified for operands of type `FLTP`. The data type `dtype` can be specified as follows:

The following table shows the syntax for specifying built-in data types:

The value range of the data type `dtype` must cover the value range of the operand type:

If the average value cannot be represented exactly in the data type `dtype`, the result is rounded commercially.

The following CDS view demonstrates different uses of the aggregate expression `AVG`. The class `CL_DEMO_CDS_AVG` accesses the view. The average value is calculated with and without addition `DISTINCT` and is returned in various types.

-   Using a [DDIC data element](ABENDATA_ELEMENT_GLOSRY.html) with a allowed type.
-   Directly as a [built-in data type](ABENDDIC_BUILTIN_TYPES.html) in ABAP Dictionary.

-   If `arg` is an integer type, a type `dtype` of type `DEC`, `CURR`, `QUAN` must have at least as many integer digits as is required by the value range of the respective integer type, that is, 3 for `INT1`, 5 for `INT2`, 10 for `INT4`, and 19 for `INT8`. There is no restriction on the number of decimal places.
-   If `arg` has type `DEC`, `CURR`, `QUAN`, a type `dtype` of type `DEC`, `CURR`, `QUAN` must have at least as many integer digits and decimal places.
-   If `arg` has type `FLTP`, this type must also be specified for `dtype`.

-   The addition `AS` to `AVG` bridges the gap for average values where `FLTP` cannot be cast to other numeric data types with [`CAST`](ABENCDS_CAST_EXPRESSION_V1.html).
-   Since average values usually have decimal places, integer types are not supported for `dtype`. If necessary, the type `DEC` can be used without decimal places.
-   An aggregate expression `AVG` with the addition `AS dtype` can be used in accordance with this type in a [`CAST`](ABENCDS_CAST_EXPRESSION_V1.html) expression.
-   The actual calculation of the average value (determined by the involved data types) is platform-dependent. This can produce underflows, overflows, and exceptions during the calculation. To prevent exceptions, the total of the values for which the average value is being calculated should be within the value range of `dtype`. For further details on the calculation on SAP HANA Platform, see the [SAP HANA SQL Reference Guide](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f).
-   If `FLTP` is specified explicitly for operands of type `FLTP`, this ensures that the result of `AVG` actually has this type at each operand position, which cannot be guaranteed otherwise.

@AbapCatalog.sqlViewName: 'DEMOCDSAVG'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view Demo\_Cds\_Avg\\n as select from\\n demo\_expressions\\n \\{\\n avg( num1 ) as avg\_no\_type,\\n avg( distinct num1 ) as avg\_no\_type\_distinct,\\n avg( num1 as abap.dec(10,0) ) as avg\_dec0,\\n avg( distinct num1 as abap.dec(10,0) ) as avg\_dec0\_distinct,\\n avg( num1 as abap.dec(12,2) ) as avg\_dec2,\\n avg( distinct num1 as abap.dec(12,2) ) as avg\_dec2\_distinct\\n \\} \\n **dtype** **Dictionary Type**\\ `abap.dec(len,decimals)` [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length `len` and `decimals` decimal places `abap.curr(len,decimals)` [`CURR`](ABENDDIC_BUILTIN_TYPES.html) with length `len` and `decimals` decimal places `abap.quan(len,decimals)` [`QUAN`](ABENDDIC_BUILTIN_TYPES.html) with length `len` with `decimals` decimal places `abap.fltp[(16,16)]` [`FLTP`](ABENDDIC_BUILTIN_TYPES.html) abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_expressions\_v1.html abencds\_aggregate\_functions\_v1.html