---
title: "ABENSXML_TRAFO_FROM_READER_ABEXA"
description: |
  ABENSXML_TRAFO_FROM_READER_ABEXA - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSXML_TRAFO_FROM_READER_ABEXA.htm"
abapFile: "ABENSXML_TRAFO_FROM_READER_ABEXA.html"
keywords: ["data", "internal-table", "ABENSXML", "TRAFO", "FROM", "READER", "ABEXA"]
---

Deserializes ABAP data from an XML reader.

An XML string reader parses the XML data of a byte string until it reaches the element `<body>`. The element `<header>` is not analyzed further. The reader located at the element opening of `<body>` is used as an XML source for the [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID`. The content of `<body>` is in asXML format for an internal table, which means it can be deserialized to such a table.