---
title: "ABENCDS_EE_ELEM_LIST"
description: |
  ABENCDS_EE_ELEM_LIST - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_EE_ELEM_LIST.htm"
abapFile: "ABENCDS_EE_ELEM_LIST.html"
keywords: ["if", "data", "types", "ABENCDS", "ELEM", "LIST"]
---

``... \{ [`element1`](ABENCDS_EE_ELEMENT.html); [`element2`](ABENCDS_EE_ELEMENT.html); ...; \} ...``

Defines the elements of a [CDS external entity](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html). The elements are specified in a semicolon-separated list `[element1](ABENCDS_EE_ELEMENT.html); [element2](ABENCDS_EE_ELEMENT.html); ...;` in curly brackets `\{ \}`. The last element must also be followed by a semicolon.

The elements must reflect the structure of the remote data source. The (external) names of the elements must be identical to the element names of the remote database object and the data types must match. The elements determine the components of the structured data types represented by a CDS external entity with respect to ABAP.

The ABAP data types of the components of the structured data type are derived from the dictionary types of the elements in accordance with the corresponding [mapping rules](ABENDDIC_BUILTIN_TYPES.html).

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_external\_entity.html abencds\_define\_external\_entity.html