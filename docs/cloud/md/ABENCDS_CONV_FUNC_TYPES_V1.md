---
title: "ABENCDS_CONV_FUNC_TYPES_V1"
description: |
  ABENCDS_CONV_FUNC_TYPES_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_CONV_FUNC_TYPES_V1.htm"
abapFile: "ABENCDS_CONV_FUNC_TYPES_V1.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "ABENCDS", "CONV", "FUNC", "TYPES"]
---

`... FLTP_TO_DEC( arg AS dtype ) ...`\\ 
`... BINTOHEX( arg ) ...`\\ 
`... HEXTOBIN( arg ) ...`

[1. `... FLTP_TO_DEC( arg AS dtype )`](#ABAP_VARIANT_1@1@)

[2a. `... BINTOHEX( arg )`](#ABAP_VARIANT_2a@1a@)

[2b. `... HEXTOBIN( arg )`](#ABAP_VARIANT_2b@1b@)

Functions for conversions between data types in a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html).

Conversion of an argument `arg` of type [`FLTP`](ABENDDIC_BUILTIN_TYPES.html) to a packed number. [Literals](ABENCDS_LITERAL_V1.html), [fields](ABENCDS_FIELD_V1.html) of a data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html), and [path expressions](ABENCDS_PATH_EXPRESSION_V1.html) can be specified for `arg`. `arg` must have the type [`FLTP`](ABENDDIC_BUILTIN_TYPES.html).

A target data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html), [`CURR`](ABENDDIC_BUILTIN_TYPES.html), or [`QUAN`](ABENDDIC_BUILTIN_TYPES.html) must be specified with `dtype` for a packed number, as follows:

The following table shows the syntax for specifying built-in data types:

The value range of the data type `dtype` must cover the value range of the operand type. An exception occurs if the value range of the target data type is not sufficient. Any surplus decimal places are cut off without rounding.

The following CDS view applies the function `FLTP_TO_DEC` in the `SELECT` list to columns of the DDIC database table `DEMO_EXPRESSIONS`. The class `CL_DEMO_CDS_FLTP_TO_DEC` uses `SELECT` to access the view. Note that there is no rounding.

The functions `BINTOHEX` and `HEXTOBIN` convert byte strings to character strings and back:

The following CDS view applies the conversion functions for byte strings in the `SELECT` list to columns of the DDIC database table `DEMO_EXPRESSIONS`. The class `CL_DEMO_CDS_SQL_FUNCTIONS_BYTE` uses `SELECT` to access the view.

-   These functions execute special conversions that cannot be handled in a general [`CAST`](ABENCDS_CAST_EXPRESSION_V1.html) expression.
-   If an argument has the [null value](ABENNULL_VALUE_GLOSRY.html), the result of the conversion function is also the null value.

-   Using a [DDIC data element](ABENDATA_ELEMENT_GLOSRY.html) with this type.
-   Directly as a [built-in data type](ABENDDIC_BUILTIN_TYPES.html) in ABAP Dictionary.

-   The conversion of type `FLTP` to a packed number using the function `FLTP_TO_DEC` is platform dependent and does not have to be reversible using a [`CAST`](ABENCDS_CAST_EXPRESSION_V1.html).
-   The general [`CAST`](ABENCDS_CAST_EXPRESSION_V1.html) is designed to be platform-independent, which means it does not allow conversions of type `FLTP` to other numeric data types.
-   Since a literal with a prefixed sign is interpreted as an arithmetic expression, the argument `arg` of the function `FLTP_TO_DEC` cannot be a negative literal. Instead, the sign can usually be specified before the function.
-   More specifically, the built-in conversion function `FLTP_TO_DEC` can be used to convert literals with a decimal point to a packed number.

-   `BINTOHEX` takes a byte string and converts it to a character string containing the half bytes of `arg`, converted to the hexadecimal characters *0* to *9* and *A* to *F* (left-aligned). The valid argument type is [`RAW`](ABENDDIC_BUILTIN_TYPES.html) with a maximum length of 255. The result has the type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with twice the length of `arg`. Only fields of data sources can be specified as arguments.
-   `HEXTOBIN` converts a character string to a byte string whose half bytes are determined from the hexadecimal characters of `arg`. Any leading blanks are removed before the conversion from `arg` and all trailing blanks are then replaced by *0*. The valid argument types are is [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) or [`NUMC`](ABENDDIC_BUILTIN_TYPES.html) with a maximum length of 510. The result has the type [`RAW`](ABENDDIC_BUILTIN_TYPES.html) with half the length of `arg`. Only fields of data sources and literals can be specified as arguments. The total of all characters must be even and it can contain only the hexadecimal characters *0* to *9* and *A* to *F* (uppercase or lowercase) and leading and trailing blanks. Literals cannot contain any leading blanks.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_FLTPDEC'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view demo\_cds\_fltp\_to\_dec\\n as select from\\n demo\_expressions\\n \\{\\n fltp\_to\_dec( fltp1 as abap.dec(10,0) ) as dec1\_10\_0,\\n fltp\_to\_dec( fltp1 as abap.dec(10,3) ) as dec1\_10\_3,\\n fltp\_to\_dec( fltp2 as abap.dec(10,0) ) as dec2\_10\_0,\\n fltp\_to\_dec( fltp2 as abap.dec(10,3) ) as dec2\_10\_3\\n \\} \\n @AbapCatalog.sqlViewName: 'DEMO\_CDS\_BINFUNC'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view demo\_cds\_sql\_functions\_byte\\n as select from demo\_expressions\\n\\{\\n bintohex( raw1 ) as r\_bintohex,\\n hextobin( char1 ) as r\_hextobin\\n\\}\\n **dtype** **Dictionary Type**\\ `abap.dec(len,decimals)` [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length `len` and `decimals` decimal places `abap.curr(len,decimals)` [`CURR`](ABENDDIC_BUILTIN_TYPES.html) with length `len` and `decimals` decimal places `abap.quan(len,decimals)` [`QUAN`](ABENDDIC_BUILTIN_TYPES.html) with length `len` with `decimals` decimal places abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_expressions\_v1.html abencds\_builtin\_functions\_v1.html abencds\_special\_functions\_v1.html abencds\_conversion\_functions\_v1.html