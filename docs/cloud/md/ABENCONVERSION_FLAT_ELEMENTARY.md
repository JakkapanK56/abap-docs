---
title: "ABENCONVERSION_FLAT_ELEMENTARY"
description: |
  ABENCONVERSION_FLAT_ELEMENTARY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCONVERSION_FLAT_ELEMENTARY.htm"
abapFile: "ABENCONVERSION_FLAT_ELEMENTARY.html"
keywords: ["if", "case", "data", "types", "ABENCONVERSION", "FLAT", "ELEMENTARY"]
---

The following rules apply when converting a [flat](ABENFLAT_GLOSRY.html) structure to a single field and vice versa:

No conversion rule is defined for any other cases, and assignments are not possible.

Conversion of the character-like `abcde` to a flat structure of character-like components. After this, each component contains a letter.

-   If a structure is purely character-like, it is handled like a data object of the type `c` (casting) during conversion. The single field can have any elementary data type, except for an [enumerated type](ABENENUM_TYPE_GLOSRY.html).
-   If the structure is not completely character-like, the single field must have the type `c` and the structure must begin with a character-like [fragment](ABENUNICODE_FRAGMENT_VIEW.html) that is at least as long as the single field. The assignment takes place only between this fragment and the single field. The character-like fragment of the structure is handled like a data object of the type `c` (casting) during assignment. If the structure is the target field, the remaining character-like fragments are filled with blanks and all other components with the type-dependent [initial value](ABENINITIAL_VALUE_GLOSRY.html).

TYPES: \\n BEGIN OF characters, \\n a TYPE c LENGTH 1, \\n b TYPE c LENGTH 1, \\n c TYPE c LENGTH 1, \\n d TYPE c LENGTH 1, \\n e TYPE c LENGTH 1, \\n f TYPE c LENGTH 1, \\n g TYPE c LENGTH 1, \\n h TYPE c LENGTH 1, \\n i TYPE c LENGTH 1, \\n j TYPE c LENGTH 1, \\n k TYPE c LENGTH 1, \\n l TYPE c LENGTH 1, \\n m TYPE c LENGTH 1, \\n n TYPE c LENGTH 1, \\n o TYPE c LENGTH 1, \\n p TYPE c LENGTH 1, \\n q TYPE c LENGTH 1, \\n r TYPE c LENGTH 1, \\n s TYPE c LENGTH 1, \\n t TYPE c LENGTH 1, \\n u TYPE c LENGTH 1, \\n v TYPE c LENGTH 1, \\n w TYPE c LENGTH 1, \\n x TYPE c LENGTH 1, \\n y TYPE c LENGTH 1, \\n z TYPE c LENGTH 1, \\n END OF characters. \\n\\ \\nFINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'. \\ncl\_demo\_output=>display( CONV characters( abcde ) ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenconversion\_rules.html abenconversion\_struc.html