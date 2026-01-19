---
title: "ABENNEWS-753-ASSIGNMENTS"
description: |
  ABENNEWS-753-ASSIGNMENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-753-ASSIGNMENTS.htm"
abapFile: "ABENNEWS-753-ASSIGNMENTS.html"
keywords: ["do", "while", "data", "types", "ABENNEWS", "753", "ASSIGNMENTS"]
---

The [conversion rules for flat structures](ABENCONVERSION_FLAT_FLAT.html) are based on their [fragment views](ABENUNICODE_FRAGMENT_VIEW_GLOSRY.html), where each [alignment gap](ABENALIGNMENT_GAP_GLOSRY.html) is considered as a fragment. Alignment gaps arise from the [alignment](ABENALIGNMENT_GLOSRY.html) requirements of the component's data types. For character-like components, the alignment requirement depends on the character representation:

Before [only Unicode systems](ABENNEWS-750-UNICODE.html) were supported, the conversion rules for structures had to take all possible alignment requirements for characters into account, regardless of the actual length of a character in its character representation.

Meanwhile, only [Unicode systems](ABENUNICODE_SYSTEM_GLOSRY.html) are supported. The system codepage is [UTF-16](ABENUTF16_GLOSRY.html) and its subset [UCS-2](ABENUCS2_GLOSRY.html) is supported in ABAP language. Any character is represented by 2 bytes and the alignment requirement is always a divisibility by 2.

Because of this, the conversion rules for flat structures can be less strict than before and the new determination of possible alignment gaps was introduced in ABAP release 7.53.

For example, the following assignment between two flat structures was not possible before ABAP release 7.53 but is possible now.

In the included substructure `incl1`, the character component has the same alignment as the integer component and there is no alignment gap. But as long as non-Unicode Systems were supported, an alignment gap had to be assumed behind the included structure in order to make the program executable in Unicode systems as well as in non-Unicode Systems.

When downporting programs from higher to lower releases, syntax errors might occur in the lower releases because of the stricter rules there.

-   For character representation [UCS-2](ABENUCS2_GLOSRY.html) used by the ABAP programming language, the memory address of character-like data objects must be divisible by 2.
-   For other character representations there are other alignment requirements. For example, the non-Unicode character representation [ASCII](ABENASCII_GLOSRY.html) has no alignment requirement while the Unicode character representation [UTF-32](ABENUTF32_GLOSRY.html) requires a divisibility by 4.

TYPES: \\n BEGIN OF incl1, \\n num TYPE i, \\n c2 TYPE c LENGTH 2, \\n END OF incl1. \\n\\ \\nDATA: \\n BEGIN OF struc1, \\n c1 TYPE c LENGTH 2. \\n INCLUDE TYPE incl1. \\nDATA: \\n c3 TYPE c LENGTH 2, \\n END OF struc1. \\n\\ \\nDATA: \\n BEGIN OF struc2, \\n c1 TYPE c LENGTH 2, \\n num TYPE i, \\n c2 TYPE c LENGTH 2, \\n c3 TYPE c LENGTH 2, \\n END OF struc2. \\n\\ \\nstruc1 = struc2. abenabap.html abennews.html abennews-75.html abennews-753.html