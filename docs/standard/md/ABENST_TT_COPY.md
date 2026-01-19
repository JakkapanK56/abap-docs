---
title: "ABENST_TT_COPY"
description: |
  ABENST_TT_COPY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_TT_COPY.htm"
abapFile: "ABENST_TT_COPY.html"
keywords: ["insert", "loop", "do", "if", "try", "data", "internal-table", "ABENST", "COPY"]
---

`<tt:copy [ref="node"] />`

Statement `tt:copy` is used to serialize in and deserialize from the [asXML format](ABENABAP_XSLT_ASXML.html). It can be used on all data objects with the exception of reference variables or objects containing reference variables as components.

The optional attribute `ref` can be used to define the [current node](ABENST_TT_REF.html) for the statement. If `ref` is not specified, the current node of the surrounding element is used implicitly.

**Serialization**

In serializations, the entire ABAP data object that is bound to the current node is recursively transformed with all its components to [asXML](ABENABAP_XSLT_ASXML.html) format and inserted into the XML data in place of the statement.

**Deserialization**

In deserializations, the XML data stream is interpreted as [asXML format](ABENABAP_XSLT_ASXML.html) and its values are passed to the ABAP data object that is bound to the current node.

In serializations of data objects using `tt:copy`, it is important to note that a node will not be automatically inserted for the asXML format created. To get valid XML data, the node must be explicitly specified in the template. If not, the XML data cannot be deserialized. The only exceptions are structures with a single component or internal tables with a single line. However, these do not generally have any practical use.

The following Simple Transformation `DEMO_ST_COPY` serializes the ABAP data object that is bound to data root `ROOT` under the node `<node>` into the asXML format. If the node `<node>` is not specified, the transformation would not produce valid XML data and deserialization would raise an exception.

When the ABAP program from the example in section [Internal Tables](ABENST_TT_LOOP.html) calls this transformation, the serialization process has the following result:

The Simple Transformation is [symmetrical](ABENST_SYMMETRY.html).

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n 2\\ \\n \\ \\n 4\\ \\n 8\\ \\n 16\\ \\n \\ \\n \\ \\n \\ \\n 3\\ \\n \\ \\n 9\\ \\n 27\\ \\n 81\\ \\n \\ \\n \\ \\n \\ \\n 4\\ \\n \\ \\n 16\\ \\n 64\\ \\n 256\\ \\n \\ \\n \\ \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_abap\_values.html