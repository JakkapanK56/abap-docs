---
title: "ABENDDIC_SPECIAL_CHARACTER_TYPES"
description: |
  ABENDDIC_SPECIAL_CHARACTER_TYPES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_SPECIAL_CHARACTER_TYPES.htm"
abapFile: "ABENDDIC_SPECIAL_CHARACTER_TYPES.html"
keywords: ["if", "data", "types", "ABENDDIC", "SPECIAL", "CHARACTER", "TYPES"]
---

The following character-like data types in ABAP Dictionary have a special semantic meaning:

-   [`NUMC`](ABENDDIC_BUILTIN_TYPES.html#abenddic-builtin-types-7--for--numeric-texts--abennumeric-text-glosry-html------from-a-technical-perspective--the-built-in-data-type--numc--describes-objects-of-the-type--char--with-a-maximum-length-of-255-characters--it-is-intended-for-numeric-texts--this-is-not-checked-however-when-writing-to-or-reading-from-database-fields-of-this-type--------clnt---abenddic-builtin-types-html-@ITOC@@ABENDDIC_BUILTIN_TYPES_7) for [client columns](ABENCLIENT_COLUMN_GLOSRY.html)
-   From a technical perspective, the data type `CLNT` describes objects of the type `CHAR` with length 3. If the data type `CLNT` is used for the first key field of a DDIC database table, this makes the DDIC database table [client-dependent](ABENDDIC_DATABASE_TABLES_CLIENT.html).
-   [`LANG`](ABENDDIC_BUILTIN_TYPES.html#@@ITOC@@ABENDDIC_BUILTIN_TYPES_7) for language keys
-   From a technical perspective, the built-in data type `LANG` describes objects of the type `CHAR` with length 1. It is intended specifically for language keys. The [primary key](ABENPRIMARY_KEY_GLOSRY.html) of a [text table](ABENTEXT_TABLE_GLOSRY.html) consists of the [foreign key](ABENFOREIGN_KEY_GLOSRY.html) and a field of type `LANG`.

abenabap.html abenabap\_dictionary.html abenddic\_builtin\_types\_intro.html abenddic\_builtin\_types\_prop.html abenddic\_builtin\_types\_special.html