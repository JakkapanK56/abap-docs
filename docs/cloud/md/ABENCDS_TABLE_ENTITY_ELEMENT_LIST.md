---
title: "ABENCDS_TABLE_ENTITY_ELEMENT_LIST"
description: |
  ABENCDS_TABLE_ENTITY_ELEMENT_LIST - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_TABLE_ENTITY_ELEMENT_LIST.htm"
abapFile: "ABENCDS_TABLE_ENTITY_ELEMENT_LIST.html"
keywords: ["if", "data", "types", "ABENCDS", "TABLE", "ENTITY", "ELEMENT", "LIST"]
---

``... \{ [`element1`](ABENCDS_TABLE_ENTITY_ELEMENT.html); [`element2`](ABENCDS_TABLE_ENTITY_ELEMENT.html); ... \}``

Defines the elements of a [CDS table entity](ABENCDS_TABLE_ENTITY_GLOSRY.html). The elements can be specified in a list separated by semicolons: [`element1`](ABENCDS_TABLE_ENTITY_ELEMENT.html); [`element2`](ABENCDS_TABLE_ENTITY_ELEMENT.html) ... in curly brackets `\{ \}`.

The elements either determine the components of the structured data type represented by the table entity with respect to ABAP, or they define and expose a [CDS association](ABENCDS_TABLE_ENTITY_ASSOC.html), a [CDS to-child association](ABENCDS_TABLE_ENTITY_COMPOS.html), or a [CDS to-parent association](ABENCDS_TABLE_ENTITY_TO_PARENT.html).

The ABAP data types of the components of the structured data type are derived from the CDS types of the elements in accordance with the associated [mapping rules](ABENDDIC_BUILTIN_TYPES.html).

The names of the elements of a CDS table entity must be unique and comply with the naming rules described in the topic [ABAP CDS - General Syntax Rules](ABENCDS_GENERAL_SYNTAX_RULES.html).

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_table\_entities.html abencds\_define\_table\_entity.html