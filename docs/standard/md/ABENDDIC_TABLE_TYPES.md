---
title: "ABENDDIC_TABLE_TYPES"
description: |
  ABENDDIC_TABLE_TYPES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_TABLE_TYPES.htm"
abapFile: "ABENDDIC_TABLE_TYPES.html"
keywords: ["do", "if", "class", "data", "types", "internal-table", "ABENDDIC", "TABLE", "TYPES"]
---

A [DDIC table type](ABENDDIC_TABLE_TYPE_GLOSRY.html) defines the data type of an [internal table](ABENINTERNAL_TABLE_GLOSRY.html) in ABAP. The DDIC table type defines the following properties of an internal table:

A program-internal object declared with reference to a table type is an internal table of this type.

The table type `SPFLI_KEY_TAB` describes a hashed table with the structured line type `SPFLI` with a unique primary key and two non-unique secondary table keys.

-   [Line type](ABENROW_TYPE_GLOSRY.html)
-   The [table category](ABENTABLE_CATEGORY_GLOSRY.html)
-   The [table key](ABENTABLE_KEY_GLOSRY.html)

-   [Technical properties of table types](ABENDDIC_TABLE_TYPES_TECH.html)
-   [Semantic properties of table types](ABENDDIC_TABLE_TYPES_SEMA.html)

-   Unlike [data elements](ABENDDIC_DATA_ELEMENTS.html) and [DDIC structures](ABENDDIC_STRUCTURES.html), the sole purpose of DDIC table types is to create globally visible definitions of internal tables. DDIC table types replace the definition of internal tables in [type pools](ABENTYPE_POOL_GLOSRY.html). DDIC table types can themselves be replaced by the declaration of internal table types in global classes and interfaces, if the context is suitable. The properties of an internal table that can be defined in the ABAP Dictionary completely match those that can be specified using the statement [`TYPES ... TABLE OF`](ABAPTYPES_ITAB.html) in ABAP programs. For more information, see the in-depth documentation about [internal tables](ABENITAB.html) in the ABAP programming language.
-   The name of a table type must follow the [naming rules for DDIC data types](ABENDDIC_TYPES_NAMES.html).

abenabap.html abenabap\_dictionary.html abenddic\_data\_types.html