---
title: "ABENDDIC_SPECIAL_CHARACTER_TYPES"
description: |
  ABENDDIC_SPECIAL_CHARACTER_TYPES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_SPECIAL_CHARACTER_TYPES.htm"
abapFile: "ABENDDIC_SPECIAL_CHARACTER_TYPES.html"
keywords: ["if", "data", "types", "ABENDDIC", "SPECIAL", "CHARACTER", "TYPES"]
---

The following character-like data types in ABAP Dictionary have a special semantic meaning:

When the statements [`WRITE`](ABAPWRITE-.html) or [`WRITE TO`](ABAPWRITE_TO.html) are used to represent a [dynpro field](ABENDYNPRO_FIELD_GLOSRY.html) with the type `LANG` (and when a field that references this type is formatted), this field has an output length of 2 and is converted automatically from the single-character internal language ID to the matching two-character ISO ID using the [conversion exit](ABENCONVERSION_EXIT_GLOSRY.html)\\ `ISOLA` (and back).

-   [`NUMC`](ABENDDIC_BUILTIN_TYPES.html#abenddic-builtin-types-7--for--numeric-texts--abennumeric-text-glosry-html------from-a-technical-perspective--the-built-in-data-type--numc--describes-objects-of-the-type--char--with-a-maximum-length-of-255-characters--it-is-intended-for-numeric-texts--this-is-not-checked-however-when-writing-to-or-reading-from-database-fields-of-this-type--automatic-checks-are-only-made-for-dynpro-fields-typed-with-reference-to--numc---in-abap---numc--is-assigned-to-the-special-type---n---abenbuiltin-types-character-html--and-the-associated-rules-apply--------clnt---abenddic-builtin-types-html-@ITOC@@ABENDDIC_BUILTIN_TYPES_7) for [client columns](ABENCLIENT_COLUMN_GLOSRY.html)
-   From a technical perspective, the data type `CLNT` describes objects of the type `CHAR` with length 3. If the data type `CLNT` is used for the first key field of a DDIC database table, this makes the DDIC database table [client-dependent](ABENDDIC_DATABASE_TABLES_CLIENT.html).
-   [`LANG`](ABENDDIC_BUILTIN_TYPES.html#@@ITOC@@ABENDDIC_BUILTIN_TYPES_7) for language keys
-   From a technical perspective, the built-in data type `LANG` describes objects of the type `CHAR` with length 1. It is intended specifically for language keys. The [primary key](ABENPRIMARY_KEY_GLOSRY.html) of a [text table](ABENTEXT_TABLE_GLOSRY.html) consists of the [foreign key](ABENFOREIGN_KEY_GLOSRY.html) and a field of type `LANG`. Furthermore, a component of a DDIC database table or a structure that has the data type `LANG` can be flagged as a [text language](ABENTEXT_LANGUAGE_GLOSRY.html).

abenabap.html abenabap\_dictionary.html abenddic\_builtin\_types\_intro.html abenddic\_builtin\_types\_prop.html abenddic\_builtin\_types\_special.html