---
title: "ABENABAP_ST"
description: |
  ABENABAP_ST - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_ST.htm"
abapFile: "ABENABAP_ST.html"
keywords: ["case", "method", "data", "internal-table", "ABENABAP"]
---

Simple Transformations (ST) is an SAP programming language for describing transformations between ABAP data and [XML](ABENXML_GLOSRY.html) formats. ST is restricted to the two modes of [serialization](ABENSERIALIZATION_GLOSRY.html) (ABAP to XML) and [deserialization](ABENDESERIALIZATION_GLOSRY.html) (XML to ABAP) of ABAP data, which are most important for data integration. Transformations from ABAP to ABAP and XML to XML are not possible in ST as is the case for more general [XSLT](ABENXSLT_GLOSRY.html).

Simple Transformations are created as [ST programs](ABENST_PROGRAMS_STRUCTURE.html). Existing ST programs can be called using the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html). The associated ST processor is integrated into the ABAP runtime framework.

In contrast to [XSLT](ABENABAP_XSLT.html), the main advantages of ST programs are as follows:

The following topics describe ST:

-   ST programs are declarative and thus easier to read.
-   ST programs only have serial access to the XML data and are therefore very efficient even with large data volumes. The nodes in XML data, however, cannot be accessed in an arbitrary order.
-   ST programs describe serialization and deserialization simultaneously, that is, ABAP data serialized in XML with ST can also be deserialized with the same ST program.
-   Objects can be created from ABAP Objects and their methods called in ST programs.
-   ST programs are restricted to the transformation of elementary and structured ABAP data, along with internal tables. The transformation of reference variables and referenced objects is not currently supported.

-   [ST - Structure of ST Programs](ABENST_PROGRAMS_STRUCTURE.html)
-   [ST - Addressing ABAP Data](ABENST_ADDRESSING.html)
-   [ST - Serialization and Deserialization](ABENST_SERIAL_DESERIAL.html)
-   [ST - Modularization with Subtemplates](ABENST_MODULARIZATION.html)
-   [ST - Reusing ST Programs](ABENST_REUSE.html)
-   [ST - Access to ABAP Objects from ST](ABENST_ABAP_OBJECTS.html)
-   [ST - Overview of Statements](ABENST_STATEMENTS.html)
-   [ST - Examples](ABENST_ABEXAS.html)

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html