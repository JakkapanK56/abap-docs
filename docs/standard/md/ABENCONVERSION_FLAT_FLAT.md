---
title: "ABENCONVERSION_FLAT_FLAT"
description: |
  ABENCONVERSION_FLAT_FLAT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONVERSION_FLAT_FLAT.htm"
abapFile: "ABENCONVERSION_FLAT_FLAT.html"
keywords: ["do", "if", "case", "class", "data", "types", "ABENCONVERSION", "FLAT"]
---

When flat structures are converted, the [fragment view](ABENUNICODE_FRAGMENT_VIEW_GLOSRY.html) of the structures must be considered. The following rules apply when converting a flat structure to another flat structure.

No conversion rule is defined for any other cases, which means that no assignment is possible.

Assignment of `struc1` to `struc2` and vice versa is not allowed because the fragment views are not the same, since unlike `struc2-b`, `struc1-x` only fills one byte.

Assignments of `struc3` to `struc4` and vice versa are allowed because the fragment view of the shorter structure `struc3` is the same as the fragment view in the first part of the longer structure `struc4`.

Assignments of `struc5` to `struc6` and vice versa are also not allowed because the fragment views in the two structures do not match due to the alignment gaps before `struc5-b` and before `struc6-struc0-b`.

Assignments of `struc7` to `struc8` and vice versa is possible because the fragment view is the same until the second last fragment `p` in the shorter structure `struc7`:

An assignment from `struc9` to `struc10` and vice versa is possible because the fragment view matches despite the differences in decimal places for the type `p`. If `struc9-a` has the value 999, then `struc10-a` has the value 0.999 after a mapping from `struc9` to `struc10`. A direct mapping from `struc9-a` to `struc10-a`, on the other hand, raises an exception of the class `CX_SY_CONVERSION_OVERFLOW`.

The following assignment between two flat structures is possible in the current release, but it was not possible as long as non-Unicode systems were still supported. In the included substructure `incl1`, the character component has the same alignment as the integer component and there is no alignment gap. However, as long as non-Unicode Systems were supported, an alignment gap had to be assumed behind the included structure in order to make the program executable in Unicode systems as well as in non-Unicode Systems.

-   When assigning structures with the same fragment view, the structure is assigned unconverted.
-   When assigning structures of different lengths where the length of the [fragment view](ABENUNICODE_FRAGMENT_VIEW.html) exactly matches the length of the shorter structure, the assignment is made in the length of the shorter structure without conversion.

-   If the target structure is longer than the source structure, the components of the target structure located behind the shared fragments are filled with type-dependent [initial values](ABENINITIAL_VALUE_GLOSRY.html) and any alignment gaps are set to hexadecimal 0.
-   If the target structure is shorter than the source structure, the components of the source structure located behind the shared fragments are cut off.

-   When assigning structures of different lengths whose fragment views match until the second last fragment of the shorter structure, and in which the next fragment is either character-like in one and byte-like in the other, the part in which the fragments are the same is assigned unconverted. The characters of the next fragment of the source structure are assigned to the corresponding fragment of the target structure without conversion and left-aligned. If this fragment in the target structure is greater than that in the source structure, the right hand side is padded with blanks or with hexadecimal 0, depending on the data type. If it is shorter, it is truncated on the right. The remaining components after this fragment are either cut off or padded with type-dependent initial values.

-   If components of data type `p` occur in the involved structures, these components form individual fragments for which only the length is significant and not the number of decimal places. When assigning such structures, the value of the source components of type `p` is cast to the number of decimal places of the target components, and the decimal point may shift. This means that the result for such a component can differ from the result of a direct assignment between the components.
-   If a component of a flat structure has an [enumerated type](ABENENUM_TYPE_GLOSRY.html), this is a separate fragment of the fragment view, regardless of its [basis type](ABENBASE_TYPE_GLOSRY.html), and must exist at the same position and with the same type in assignments between these structures in the source and target structure.
-   Since only [Unicode systems](ABENUNICODE_SYSTEM_GLOSRY.html) are supported in which a character is always represented by 2 bytes, the conversion rules for flat structures are less strict than in systems in which also non-Unicode systems are still supported. There, all possible alignment requirements for characters have to be considered, regardless of the actual length of a character in its character representation. When downporting programs from higher to lower releases, syntax errors might occur in the lower releases because of the stricter rules there.
-   If a syntax error occurs due to an invalid assignment between flat structures, the fragment views for the corresponding structures can be displayed when displaying the syntax error in the ABAP Editor by choosing the pushbutton with the information icon.

DATA: \\n BEGIN OF struc1, \\n a TYPE c LENGTH 1, \\n x TYPE x LENGTH 1, \\n END OF struc1. \\n\\ \\nDATA: \\n BEGIN OF struc2, \\n a TYPE c LENGTH 1, \\n b TYPE c LENGTH 1, \\n END OF struc2. DATA: \\n BEGIN OF struc3, \\n a TYPE c LENGTH 2, \\n n TYPE n LENGTH 6, \\n i TYPE i, \\n END OF struc3. \\n\\ \\nDATA: \\n BEGIN OF struc4, \\n a TYPE c LENGTH 8, \\n i TYPE i, \\n d TYPE decfloat16, \\n END OF struc4. DATA: \\n BEGIN OF struc5, \\n a TYPE x LENGTH 1, \\n b TYPE x LENGTH 1, \\n c TYPE c LENGTH 1, \\n END OF struc5. \\n\\ \\nDATA: \\n BEGIN OF struc6, \\n a TYPE x LENGTH 1, \\n BEGIN OF struc0, \\n b TYPE x LENGTH 1, \\n c TYPE c LENGTH 1, \\n END OF struc0, \\n END OF struc6. DATA: \\n BEGIN OF struc7, \\n a TYPE i, \\n p TYPE p LENGTH 8, \\n c TYPE c LENGTH 1, \\n END OF struc7. \\n\\ \\nDATA: \\n BEGIN OF struc8, \\n a TYPE i, \\n p TYPE p LENGTH 8, \\n c TYPE c LENGTH 5, \\n o TYPE p LENGTH 8, \\n END OF struc8. DATA: \\n BEGIN OF struc9, \\n a TYPE p LENGTH 2 \\n DECIMALS 0, \\n END OF struc9. \\n\\ \\nDATA: \\n BEGIN OF struc10, \\n a TYPE p LENGTH 2 \\n DECIMALS 3, \\n END OF struc10. TYPES: \\n BEGIN OF incl1, \\n num TYPE i, \\n c2 TYPE c LENGTH 2, \\n END OF incl1. \\n\\ \\nDATA: \\n BEGIN OF struc1, \\n c1 TYPE c LENGTH 2. \\n INCLUDE TYPE incl1. \\nDATA: \\n c3 TYPE c LENGTH 2, \\n END OF struc1. \\n\\ \\nDATA: \\n BEGIN OF struc2, \\n c1 TYPE c LENGTH 2, \\n num TYPE i, \\n c2 TYPE c LENGTH 2, \\n c3 TYPE c LENGTH 2, \\n END OF struc2. \\n\\ \\nstruc1 = struc2. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenconversion\_rules.html abenconversion\_struc.html