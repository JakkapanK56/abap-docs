---
title: "ABENDDIC_CONVERSION_FUNCTIONS"
description: |
  ABENDDIC_CONVERSION_FUNCTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_CONVERSION_FUNCTIONS.htm"
abapFile: "ABENDDIC_CONVERSION_FUNCTIONS.html"
keywords: ["do", "if", "data", "types", "ABENDDIC", "CONVERSION", "FUNCTIONS"]
---

The following table shows the conversion functions that can be used by [ABAP CDS](ABENABAP_CDS_GLOSRY.html) and [ABAP SQL](ABENABAP_SQL_GLOSRY.html). The last three columns indicate where a function can be used.

The possible operands and data types as well as the exact functionality is described in the corresponding documentation for [ABAP CDS, DDIC-Based Views](ABENCDS_CONVERSION_FUNCTIONS_V1.html), [ABAP CDS, View Entities](ABENCDS_CONVERSION_FUNCTIONS_V2.html), and [ABAP SQL](ABENABAP_SQL_CONVERSION_FUNCTIONS.html).

**SQL Function** **Result** \\ **ABAP CDS, DDIC-Based Views** \\ **ABAP CDS, View Entities**\\ **ABAP SQL**\\ `AS_GEO_JSON` Converts an argument of type `GEOM_EWKB` to JSON format. - - \\ [x](ABENSQL_GEO_CONV_FUNC.html)\\ `BINTOHEX` Converts an argument of the type `RAW` to a string of the type `CHAR`. [x](ABENCDS_CONV_FUNC_TYPES_V1.html) \\ [x](ABENCDS_CONV_FUNC_TYPES_V2.html) [x](ABENSQL_TYPE_CONV_FUNC.html)\\ `CURRENCY_CONVERSION` Conversion of currencies. [x](ABENCDS_CONV_FUNC_UNIT_CURR_V1.html) \\ [x](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html) [x](ABENSQL_CURR_UNIT_CONV_FUNC.html)\\ `CURR_TO_DECFLOAT_AMOUNT` Converts a currency field of data type `CURR` into a currency field of data type `DECFLOAT34`. - \\ [x](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html) - `DECIMAL_SHIFT` Sets the decimal separator of an argument in accordance with a currency. [x](ABENCDS_CONV_FUNC_UNIT_CURR_V1.html) - - `FLTP_TO_DEC` Converts an argument of type `FLTP` to a packed number. [x](ABENCDS_CONV_FUNC_TYPES_V1.html) \\ [x](ABENCDS_CONV_FUNC_TYPES_V2.html) - `GET_NUMERIC_VALUE` Converts a [CDS amount field](ABENCDS_AMOUNT_FIELD_GLOSRY.html) or a [CDS quantity field](ABENCDS_QUANTITY_GLOSRY.html) into a regular field of data type `DECFLOAT34`. The reference to a unit or currency key is removed. - \\ [x](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html) - `HEXTOBIN` Converts an argument of the type `CHAR` or `NUMC` to a byte string of the type `RAW`. [x](ABENCDS_CONV_FUNC_TYPES_V1.html) \\ [x](ABENCDS_CONV_FUNC_TYPES_V2.html) [x](ABENSQL_TYPE_CONV_FUNC.html)\\ `TO_BLOB` Converts an argument of the type `RAW` to a byte string (BLOB) of the type `RAWSTRING`. - - [x](ABENSQL_TYPE_CONV_FUNC.html)\\ `TO_CLOB` Converts an argument of the type `SSTRING` to a CLOB of the type `STRING`. - - [x](ABENSQL_TYPE_CONV_FUNC.html)\\ `UNIT_CONVERSION` Conversion of units. [x](ABENCDS_CONV_FUNC_UNIT_CURR_V1.html) \\ [x](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html) \\ [x](ABENSQL_CURR_UNIT_CONV_FUNC.html) abenabap.html abenabap\_dictionary.html abenddic\_builtin\_functions.html abenddic\_special\_functions.html