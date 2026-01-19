---
title: "ABENLOGEXP_RULES_OPERANDS_STRUC"
description: |
  ABENLOGEXP_RULES_OPERANDS_STRUC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOGEXP_RULES_OPERANDS_STRUC.htm"
abapFile: "ABENLOGEXP_RULES_OPERANDS_STRUC.html"
keywords: ["if", "case", "types", "ABENLOGEXP", "RULES", "OPERANDS", "STRUC"]
---

It is possible to compare structures with structures and structures with elementary fields:

The following comparison is true because the structure is handled like a field of type `c` with length 8.

-   [Compatible](ABENCOMPATIBILITY.html) structures are compared component by component, whereby any nested structures are resolved recursively. Two structures are equal if the content of their components matches. In the case of unequal structures, the first unequal component pair determines the result of the comparison.
-   It is possible to compare incompatible structures and structures with elementary fields provided that the structures concerned are [flat](ABENFLAT_GLOSRY.html).

-   Comparisons between two flat structures require that their [fragment views](ABENUNICODE_FRAGMENT_VIEW_GLOSRY.html) match for the length of the shorter structure. Before the comparison, the shorter structure is padded to the length of the longer structure. Here, all character-like components are padded with blanks and all other components with their type-dependent [initial value](ABENINITIAL_VALUE_GLOSRY.html). The comparison then takes place in stages according to the fragment view.
-   Comparisons between a flat structure and an elementary field are subject to the following rules:
-   If the flat structure is character-like, it is handled in the comparison as an elementary field of type `c`.
-   If the flat structure is not just character-like, the elementary field must have the type `c` and the first fragment of the [structure fragment view](ABENUNICODE_FRAGMENT_VIEW_GLOSRY.html) must be character-like and at least as long as the elementary field. If the elementary field is shorter than the structure, it is extended to the length of the structure before the comparison and then handled implicitly like a structure. The character-like parts of the extension are padded with blanks and all other components are padded with their type-dependent initial value.

TYPES: \\n BEGIN OF struc, \\n year TYPE c LENGTH 4, \\n month TYPE c LENGTH 2, \\n day TYPE c LENGTH 2, \\n END OF struc. \\n\\ \\nFINAL(date) = cl\_demo\_date\_time=>get\_user\_date( ). \\nFINAL(struc) = VALUE struc( year = date(4) \\n month = date+4(2) \\n day = date+6(2) ). \\n\\ \\nASSERT date = struc. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_rules.html