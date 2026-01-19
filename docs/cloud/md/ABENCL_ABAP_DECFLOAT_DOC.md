---
title: "ABENCL_ABAP_DECFLOAT_DOC"
description: |
  ABENCL_ABAP_DECFLOAT_DOC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCL_ABAP_DECFLOAT_DOC.htm"
abapFile: "ABENCL_ABAP_DECFLOAT_DOC.html"
keywords: ["if", "method", "class", "data", "ABENCL", "ABAP", "DECFLOAT", "DOC"]
---

The system class `CL_ABAP_DECFLOAT` contains methods for handling [decimal floating point numbers](ABENDECFLOAT_GLOSRY.html).

-   The methods `READ_DECFLOAT34` and `READ_DECFLOAT16` convert strings to decimal floating point numbers. The exceptions of these methods are more significant than those of a regular assignment. Furthermore, the methods return a return value that reveals information about the roundings performed.
-   The methods `CONVERT_CURR_TO_DECFLOAT` and `CONVERT_DECFLOAT_TO_CURR` convert currency amounts to decimal floating point numbers as specified by a currency key and vice versa.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abencl\_abap\_math.html