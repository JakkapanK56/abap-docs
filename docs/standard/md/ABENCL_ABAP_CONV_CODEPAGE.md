---
title: "ABENCL_ABAP_CONV_CODEPAGE"
description: |
  ABENCL_ABAP_CONV_CODEPAGE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCL_ABAP_CONV_CODEPAGE.htm"
abapFile: "ABENCL_ABAP_CONV_CODEPAGE.html"
keywords: ["if", "method", "class", "data", "ABENCL", "ABAP", "CONV", "CODEPAGE"]
---

The methods `CONVERT` of the interfaces `IF_ABAP_CONV_OUT` and `IF_ABAP_CONV_IN` of objects created with the class `CL_ABAP_CONV_CODEPAGE` make it possible to convert strings to the binary representation of various code pages and vice versa.

Conversion of the content of a string into its UTF-8 representation. The value *UTF-8* is the default value for the parameter `CODEPAGE` and can also be omitted. The statement [`ASSERT`](ABAPASSERT.html) shows that the reverse conversion creates the original text again.

FINAL(str) = \`Blah blah ...\`. \\n\\ \\nFINAL(xstr) = \\n cl\_abap\_conv\_codepage=>create\_out( codepage = \`UTF-8\` \\n )->convert( source = str ). \\n\\ \\nASSERT \\n cl\_abap\_conv\_codepage=>create\_in( codepage = \`UTF-8\` \\n )->convert( source = xstr ) = str. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abencl\_abap\_string\_utilities.html