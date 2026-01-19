---
title: "ABENCL_ABAP_CODEPAGE_OBSOLETE"
description: |
  ABENCL_ABAP_CODEPAGE_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCL_ABAP_CODEPAGE_OBSOLETE.htm"
abapFile: "ABENCL_ABAP_CODEPAGE_OBSOLETE.html"
keywords: ["if", "method", "class", "data", "ABENCL", "ABAP", "CODEPAGE", "OBSOLETE"]
---

The class `CL_ABAP_CODEPAGE` contains methods for converting the representation of character strings between different code pages. The interface `IF_ABAP_CODEPAGE` enables objects in the class to be accessed.

The methods `CONVERT` of the interfaces [`IF_ABAP_CONV_OUT`](ABENCL_ABAP_CONV_CODEPAGE.html) and [`IF_ABAP_CONV_IN`](ABENCL_ABAP_CONV_CODEPAGE.html) are more robust than the methods of the class `CL_ABAP_CODEPAGE` and replace them.

This example demonstrates a conversion of strings to their UTF-8 representation and vice versa. The interface methods `CONVERT` replace the methods `CONVERT_TO` and `CONVERT_FROM` of the class `CL_ABAP_CODEPAGE`.

FINAL(xstr\_new) = \\n cl\_abap\_conv\_codepage=>create\_out( )->convert( \`Blahblah\` ). \\nFINAL(xstr\_old) = \\n cl\_abap\_codepage=>convert\_to( \`Blahblah\` ). \\nASSERT xstr\_new = xstr\_old. \\n\\ \\nFINAL(text\_new) = \\n cl\_abap\_conv\_codepage=>create\_in( )->convert( xstr\_new ). \\nFINAL(text\_old) = \\n cl\_abap\_codepage=>convert\_from( xstr\_old ). \\nASSERT text\_new = text\_old. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abencharacter\_string\_obsolete.html