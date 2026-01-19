---
title: "ABENST_SERIAL_DESERIAL"
description: |
  ABENST_SERIAL_DESERIAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_SERIAL_DESERIAL.htm"
abapFile: "ABENST_SERIAL_DESERIAL.html"
keywords: ["if", "try", "method", "data", "ABENST", "SERIAL", "DESERIAL"]
---

Serialization and deserialization are primarily based on the following schema:

Serializations and deserializations can be divided into the following topics:

When a Simple Transformation is defined, it must be noted whether the serializations and deserializations are [symmetric](ABENST_SYMMETRY.html).

-   During serialization, the literal elements of templates are passed to the target XML data unchanged and the ST statements specified in between are executed.
-   In deserializations, the source XML data is handled as an inbound stream and compared to the template element by element. Identically named elements (or attributes or texts) of the inbound stream are consumed if they are at the same position in the ST program or if there is a statement there that can process the element. After the successful comparison or consumption of the element, the comparison of the subsequent element starts.

-   [Literal Template Content](ABENST_LITERALS.html)
-   [Non-Literal Attributes](ABENST_TT_ATTRIBUTE.html)
-   [Namespaces](ABENST_TT_NAMESPACE.html)
-   [Transformation of ABAP Values](ABENST_ABAP_VALUES.html)
-   [Value Assignments](ABENST_ASSIGNMENTS.html)
-   [Reading and Writing Variables](ABENST_VARIABLE_TRANSFORMATIONS.html)
-   [Flow Control](ABENST_TT_COND.html)

-   In serializations and deserializations, the XML data is processed in the form of writer streams and reader streams. When ABAP methods are called from Simple Transformations, [processing these XML streams](ABENST_TT_CALL-METHOD_WRITERREADER.html) is possible.
-   Serializations and deserializations are subject to the general restriction that the content of a [data root](ABENST_TT_ROOT.html) cannot be modified by serialization and only writes are possible to a data root in deserializations.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html