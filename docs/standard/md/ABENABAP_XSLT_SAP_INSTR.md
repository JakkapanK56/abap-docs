---
title: "ABENABAP_XSLT_SAP_INSTR"
description: |
  ABENABAP_XSLT_SAP_INSTR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_XSLT_SAP_INSTR.htm"
abapFile: "ABENABAP_XSLT_SAP_INSTR.html"
keywords: ["if", "method", "class", "data", "ABENABAP", "XSLT", "SAP", "INSTR"]
---

In the following, enhanced SAP-specific instructions of the [SAP XSLT processor](ABENABAP_XSLT_PROCESSOR.html) are listed. The URI for the SAP namespace is `http://www.sap.com/sapxsl`.

Transformations should be described using XSLT elements. However, it can be useful to access additional data from within an XSLT program, for example, data in the database, or to execute calculations in procedures. For this purpose, ABAP calls have been integrated as enhancements into the SAP XSLT processor. In this way, constructor calls and class method calls in XSLT programs can be defined, in addition to method calls for ABAP objects that are included as program parameters using `xsl:param`.

XSLT is a declarative language, which means that the order in program execution is not fixed. ABAP calls should therefore be limited to read access. Possible state manipulations are the exception and are visible when transformations are executed.

Even recursive functions at the level of tree transformations can be defined using named templates. The SAP XSLT processor provides an enhancement to define XPath functions. Functions of this type always have their own namespace (not XSLT or SAP XSLT) and are generally used in connection with the additional [SAP functions](ABENABAP_SAP_FNCTNS.html)\\ `sap:if()` and `sap:let()`.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt.html abenabap\_xslt\_self\_written.html abenabap\_xslt\_statements.html