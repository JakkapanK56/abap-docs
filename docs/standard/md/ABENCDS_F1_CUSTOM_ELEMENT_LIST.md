---
title: "ABENCDS_F1_CUSTOM_ELEMENT_LIST"
description: |
  ABENCDS_F1_CUSTOM_ELEMENT_LIST - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_CUSTOM_ELEMENT_LIST.htm"
abapFile: "ABENCDS_F1_CUSTOM_ELEMENT_LIST.html"
keywords: ["if", "data", "types", "ABENCDS", "CUSTOM", "ELEMENT", "LIST"]
---

``... \{ [`element1`](ABENCDS_F1_CUSTOM_ELEMENT.html); [`element2`](ABENCDS_F1_CUSTOM_ELEMENT.html); ...; \} ...``

Defines the elements of a [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html). The elements are specified in a semicolon-separated list `[element1](ABENCDS_F1_CUSTOM_ELEMENT.html); [element2](ABENCDS_F1_CUSTOM_ELEMENT.html); ...;` in curly brackets `\{ \}`. The final element must also be followed by a semicolon.

The elements either determine the components of the structured data type represented by the CDS custom entity with respect to ABAP, or they define and expose a [CDS association](ABENCDS_F1_CUSTOM_ASSOCIATION.html), a [CDS to-child association](ABENTO_CHILD_ASSOCIATION_GLOSRY.html), or a [CDS to-parent association](ABENCDS_F1_CUSTOM_TP_ASSOCIATION.html).

The ABAP data types of the components of the structured data type are derived from the dictionary types of the elements in accordance with the associated [mapping rules](ABENDDIC_BUILTIN_TYPES.html).

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_custom\_entities.html abencds\_f1\_define\_custom\_entity.html