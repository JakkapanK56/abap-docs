---
title: "ABENCDS_F1_ABSENT_ELEMENT_LIST"
description: |
  ABENCDS_F1_ABSENT_ELEMENT_LIST - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_ABSENT_ELEMENT_LIST.htm"
abapFile: "ABENCDS_F1_ABSENT_ELEMENT_LIST.html"
keywords: ["if", "data", "types", "ABENCDS", "ABSENT", "ELEMENT", "LIST"]
---

``... \{ [`element1`](ABENCDS_F1_ABSENT_LIST_ELEMENT.html); [`element2`](ABENCDS_F1_ABSENT_LIST_ELEMENT.html); ...; \} ...``

Defines the elements of an [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html). The elements are specified in a semicolon-separated list `[element1](ABENCDS_F1_ABSENT_LIST_ELEMENT.html); [element2](ABENCDS_F1_ABSENT_LIST_ELEMENT.html); ...;` in curly brackets `\{ \}`. The final element must also be followed by a semicolon.

The elements either determine the components of the structured data type represented by a CDS abstract entity with respect to ABAP or they exposes a CDS association, a CDS to-child association, or a CDS-to-parent association.

The ABAP data types of the components of the structured data type are derived from the dictionary types of the elements in accordance with the associated [mapping rules](ABENDDIC_BUILTIN_TYPES.html).

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_abstract\_entities.html abencds\_f1\_define\_abstract\_entity.html