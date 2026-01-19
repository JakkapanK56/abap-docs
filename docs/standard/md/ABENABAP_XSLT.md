---
title: "ABENABAP_XSLT"
description: |
  ABENABAP_XSLT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_XSLT.htm"
abapFile: "ABENABAP_XSLT.html"
keywords: ["do", "case", "data", "ABENABAP", "XSLT"]
---

An XSL transformation is a program in the [repository](ABENREPOSITORY_GLOSRY.html) that is written in [XSLT](ABENXSLT_GLOSRY.html) (XSLT program) and used for the transformation of XML data. A set of rules is defined to express how an XML input tree is transformed to an XML output tree. The following use cases are available:

Existing XSLT programs in the repository can be called using the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html). XSLT programs can be edited in the [Transformation Editor](ABENTRANSFORMATION_EDITOR_GLOSRY.html). This is called either with transaction `STRANS` or by choosing *Edit Object -> More -> Transformation* followed by *XSLT Program* in the Object Navigator in the [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html).

-   Transformation of XML to HTML or any other text-based document format
-   Transformation of XML to XML
-   Mapping of XML and ABAP data structures

-   [XSL - XSLT Processor](ABENABAP_XSLT_PROCESSOR.html)
-   [XSL - User-Defined Transformations](ABENABAP_XSLT_SELF_WRITTEN.html)
-   [XSL - Serialization from and Deserialization to ABAP](ABENABAP_XSLT_ABAP_SERIALIZATION.html)
-   [XSL - Examples](ABENXSLT_ABEXAS.html)

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html