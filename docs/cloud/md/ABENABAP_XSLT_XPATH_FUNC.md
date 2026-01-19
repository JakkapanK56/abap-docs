---
title: "ABENABAP_XSLT_XPATH_FUNC"
description: |
  ABENABAP_XSLT_XPATH_FUNC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_XSLT_XPATH_FUNC.htm"
abapFile: "ABENABAP_XSLT_XPATH_FUNC.html"
keywords: ["if", "data", "ABENABAP", "XSLT", "XPATH", "FUNC"]
---

User-defined XPath functions can be specified in XSLT programs using the instruction `sap:function`.

<sap:function name="prefix:fName"> \\n   <sap:argument    name = "arg1"/> \\n   <sap:argument    name = "arg2"/> \\n      ... \\n   <sap:result      define = " \\n                            <!-- function definition --> \\n                            "/> \\n</sap:function>

Multiple functions can be called with the same name, if they have different arguments.

You can define a function for calculating the factorial as follows.

-   All function arguments are declared using the sub-instruction `sap:argument`. They are specified only by their names.
-   The result of the function is defined as an XPath expression for the `define` attribute within the sub-instruction `sap:result`. The function body can contain calls to previously defined functions.

\\n \\n \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt.html abenabap\_xslt\_self\_written.html abenabap\_xslt\_statements.html abenabap\_xslt\_sap\_instr.html