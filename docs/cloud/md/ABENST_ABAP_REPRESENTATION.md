---
title: "ABENST_ABAP_REPRESENTATION"
description: |
  ABENST_ABAP_REPRESENTATION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_ABAP_REPRESENTATION.htm"
abapFile: "ABENST_ABAP_REPRESENTATION.html"
keywords: ["if", "case", "data", "types", "ABENST", "ABAP", "REPRESENTATION"]
---

Some ST statements require ABAP values `value` to be specified, depending on the [built-in ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html) as a function of the type. In two cases, however, `value` can also be specified directly. The initial value can always be specified regardless of the ABAP type.

**Data Type** **Representation** Initial value (all ABAP types) `Initial` 4 byte integer (ABAP type `i`) `I(value) | value` 8 byte integer (ABAP type `int8`) `INT8(value)` Binary floating point numbers (ABAP type `f`) `F('value')` Byte strings (ABAP types `x` and `xstring`) `X('value')` Decimal floating point numbers (ABAP types `decfloat16`, `decfloat34`) `DECFLOAT16('value')`, `DECFLOAT34('value')` Packed numbers (ABAP type `p`) `P(value)` Numeric text fields (ABAP type `n`) `N('value')` Character strings (ABAP types `c` and `string`) `C('value') | 'value'` Date fields and time fields (ABAP types `d` and `t`) `D('value')`, `T('value')` Time stamp fields (ABAP type `utclong`) `UTCLONG('value')` abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html