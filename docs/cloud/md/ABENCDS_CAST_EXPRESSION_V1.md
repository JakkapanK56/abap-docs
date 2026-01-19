---
title: "ABENCDS_CAST_EXPRESSION_V1"
description: |
  ABENCDS_CAST_EXPRESSION_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_CAST_EXPRESSION_V1.htm"
abapFile: "ABENCDS_CAST_EXPRESSION_V1.html"
keywords: ["select", "do", "if", "case", "data", "types", "ABENCDS", "CAST", "EXPRESSION"]
---

`... CAST( operand AS dtype [PRESERVING TYPE]) ...`

Casting in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). The cast expression [converts](ABENCDS_CAST_EXPRESSION_RULES_V1.html) the value of the operand `operand` to the ABAP Dictionary type specified by `dtype`. The result has the type `dtype`. The following can be specified for `dtype`:

The following can be specified for `operand`:

Cast expressions can be specified in the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) and in operand positions of expressions.

The following table shows which combinations of built-in data types in ABAP Dictionary can currently be cast to each other and what the prerequisites are in each case. There is a special list of [conversion rules](ABENCDS_CAST_EXPRESSION_RULES_V1.html) for every combination.

There are no further restrictions to note in combinations with *x*. The following rules apply to the other combinations:

In the case of incompatible types, the content of the operand is [converted](ABENCDS_CAST_EXPRESSION_RULES_V1.html) to the target type (exceptions can be raised if values are not suitable). In compatible types, a syntax check warning occurs (unless the target data type is specified as a data element using the addition `PRESERVING TYPE`).

Cast expressions in a `SELECT` list.

In the following view, the column `char1` of the DDIC database table `DEMO_EXPRESSIONS` is cast to the data element `demo_char_text` with the same technical properties. In this case, it is advisable to specify the addition `PRESERVING TYPE`.

The following function module call returns the properties of the view field. The text shows that the semantic properties of the data element were applied. The column `char1` does not have its own text.

In the following view, a literal is given the technical and semantic properties of the data element `S_MANDT`.

-   A [DDIC data element](ABENDATA_ELEMENT_GLOSRY.html). In this case, the optional addition `PRESERVING TYPE` can be specified. If this addition is specified, the built-in data type, the length of the operand and the number of decimal places, and the target data type must match exactly.
-   A built-in data type from ABAP Dictionary. The addition `PRESERVING TYPE` cannot be specified in this case. All available data types are listed in the topic [ABAP CDS - Built-In Data Types](ABENCDS_OVERVIEW_BUILTIN_TYPES.html).

-   A [literal](ABENCDS_LITERAL_V1.html) without a domain prefix
-   A [parameter](ABENCDS_PARAMETER_V1.html)
-   A [session variable](ABENCDS_SESSION_VARIABLE_V1.html)
-   A [field](ABENCDS_FIELD_V1.html) of a data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html) of the current CDS view
-   An [aggregate expression](ABENCDS_AGGREGATE_FUNCTIONS_V1.html)
-   A [path expression](ABENCDS_PATH_EXPRESSION_V1.html) that identifies a field of a data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html)
-   A [built-in function](ABENCDS_BUILTIN_FUNCTIONS_V1.html)
-   An [arithmetic expression](ABENCDS_ARITHMETIC_EXPRESSION_V1.html)
-   A case distinction with [`CASE`](ABENCDS_CASE_EXPRESSION_V1.html)
-   A nested cast expression

-   In combinations with *y*, the length of the target data type must be sufficient.
-   In combinations with *z*, the lengths of the data types must match exactly.
-   In the case of combinations with *p* or *d*, a data element must be specified as the target data type. It is not possible to specify a built-in data type from ABAP Dictionary.

-   In combinations with *d*, the data element can have a suitable target type in accordance with the table above and with any length.
-   In combinations with *p*, the data element must have the built-in data type and the same length as the data type of the operand.

-   If a data element is specified for `dtype`, the result of the expression inherits the semantic properties of the data element. An exception to this is the use of the `CAST` expression within a case distinction.
-   If the addition `PRESERVING TYPE` is specified, the data type of the operand stays the same and only the semantic properties are changed.
-   The characters in the [surrogate area](ABENSURROGATE_AREA_GLOSRY.html) of the [system code page](ABENSYSTEM_CODEPAGE_GLOSRY.html)\\ [UTF-16](ABENUTF16_GLOSRY.html) are handled as two characters in cast expressions for strings. Care should be taken to avoid splitting these characters in truncation operations.
-   When performing a [conversion](ABENCDS_CAST_EXPRESSION_RULES_V1.html) between [currency fields](ABENDDIC_CURRENCY_FIELD.html) with type `CURR`, it should be noted that `CAST` respects the decimal places defined for the type. In ABAP applications, on the other hand, the position of the decimal point is usually ignored.
-   A `CAST` expression should be platform-independent. Conversions from the type `FLTP` to other numeric types are not allowed because the result would be platform-dependent.
-   An aggregate expression [`AVG`](ABENCDS_AGGREGATE_FUNCTIONS_V1.html) has the type `FLTP` by default. It can be specified as an operand but it is not possible to cast to other types. Therefore there is a separate addition for `AVG`\\ [`AS dtype`](ABENCDS_AVG_AS_V1.html).
-   Special built-in [conversion functions](ABENCDS_CONVERSION_FUNCTIONS_V1.html) are available for special conversions that cannot be covered by a `CAST` expression:

-   [`FLTP_TO_DEC`](ABENCDS_CONV_FUNC_TYPES_V1.html) for converting `FLTP` to packed numbers.
-   [`BINTOHEX`](ABENCDS_CONV_FUNC_TYPES_V1.html) and [`HEXTOBIN`](ABENCDS_CONV_FUNC_TYPES_V1.html) for conversions of byte strings to character strings and back.
-   [Conversion functions for units and currencies](ABENCDS_CONV_FUNC_UNIT_CURR_V1.html)

@AbapCatalog.sqlViewName: 'DEMO\_SO\_V1'\\ndefine view DEMO\_CDS\_SALES\_ORDER\_V1\\n as select from snwd\_so\\n association \[1..\*\] to snwd\_so\_i \\n as \_item on snwd\_so.node\_key = \_item.parent\_key\\n\\{\\n key snwd\_so.node\_key,\\n gross\_amount as original\_amount,\\n cast(gross\_amount as abap.fltp) +\\n (cast( -gross\_amount as abap.fltp) \* 0.03) as reduced\_amount,\\n cast(gross\_amount as abap.fltp) \* 0.03 as overall\_savings,\\n \_item.so\_item\_pos as item\_position,\\n \_item.gross\_amount as item\_gross\_amount,\\n cast(\_item.gross\_amount as abap.fltp) \* 0.97 as item\_savings\\n\\}\\n @AbapCatalog.sqlViewName: 'DEMO\_CDS\_CAST\_DE'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view demo\_cds\_cast\_data\_element\\n as select from\\n demo\_expressions\\n \\{\\n cast ( char1 as demo\_char\_text preserving type)\\n as char\_with\_text\\n \\};\\n DATA dfies\_tab TYPE TABLE OF dfies. \\nCALL FUNCTION 'DDIF\_FIELDINFO\_GET' \\n EXPORTING \\n tabname = 'DEMO\_CDS\_CAST\_DE' \\n fieldname = 'CHAR\_WITH\_TEXT' \\n langu = sy-langu \\n TABLES \\n dfies\_tab = dfies\_tab. \\ncl\_demo\_output=>display( dfies\_tab\[ 1 \]-fieldtext ). @AbapCatalog.sqlViewName: 'DEMO\_CDS\_CSTCLNT'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED \\ndefine view demo\_cds\_cast\_clnt\\n as select from\\n scarr\\n \\{\\n key cast ( 'XXX' as s\_mandt )\\n as pseudo\_client,\\n key carrid,\\n carrname\\n \\};\\n **from/to** **`INT1`** **`INT2`** **`INT4`** **`INT8`** **`DEC`** **`CURR`** **`QUAN`** **`DECFLOAT16`** **`DECFLOAT34`** **`FLTP`** **`CHAR`** **`SSTRING`** **`NUMC`** **`DATS`** **`TIMS`** **`DATN`** **`TIMN`** **`UTCLONG`** **`ACCP`** **`CLNT`** **`LANG`** **`UNIT`** **`CUKY`** **`RAW`**\\ **`INT1`** x x x x x x x x x x y y - - - - - - - x - - - - **`INT2`** x x x x x x x x x x y y - - - - - - - - - - - - **`INT4`** x x x x x x x x x x y y - - - - - - - - - - - - **`INT8`** x x x x x x x x x x y y - - - - - - - - - - - - **`DEC`** x x x x x x x x x x y y - - - - - - - - - - - - **`CURR`** x x x x x x x x x x y y - - - - - - - - - - - - **`QUAN`** x x x x x x x x x x y y - - - - - - - - - - - - **`DECFLOAT16`** x x x x x x x x x - - - - - - - - - - - - - - - **`DECFLOAT34`** x x x x x x x x x - - - - - - - - - - - - - - - **`FLTP`** - - - - - - - - - x - - - - - - - - - - - - - - **`CHAR`** - - - - - - - - - - x x x x x - - - p x x x x - **`SSTRING`** - - - - - - - - - - x x x x x - - - p x x x x - **`NUMC`** y y y y x x x x x x x x z z z - - - p z - - - - **`DATS`** - - - - - - - - - - x x - z - - - - - - - - - - **`TIMS`** - - - - - - - - - - x x - - z - - - - - - - - - **`DATN`** - - - - - - - - - - - - - - - x - - - - - - - - **`TIMN`** - - - - - - - - - - - - - - - - x - - - - - - - **`UTCLONG`** - - - - - - - - - - - - - - - - - x - - - - - - **`ACCP`** - - - - - - - - - - z z z - - - - - p - - - - - **`CLNT`** - - - - - - - - - - d d - - - - - - - p - - - - **`LANG`** - - - - - - - - - - d d - - - - - - - - p - - - **`UNIT`** - - - - - - - - - - d d - - - - - - - - - p - - **`CUKY`** - - - - - - - - - - d d - - - - - - - - - - p - **`RAW`** - - - - - - - - - - - - - - - - - - - - - - - p abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_expressions\_v1.html