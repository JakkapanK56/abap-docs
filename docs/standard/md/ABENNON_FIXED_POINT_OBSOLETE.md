---
title: "ABENNON_FIXED_POINT_OBSOLETE"
description: |
  ABENNON_FIXED_POINT_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNON_FIXED_POINT_OBSOLETE.htm"
abapFile: "ABENNON_FIXED_POINT_OBSOLETE.html"
keywords: ["do", "if", "class", "types", "ABENNON", "FIXED", "POINT", "OBSOLETE"]
---

The [program property](ABENPROGRAM_PROPERTY_GLOSRY.html)\\ [fixed point arithmetic](ABENFIXED_POINT_ARITHMETIC_GLOSRY.html) is set by default when a program is created. This program property cannot be undone.

The option to modify this program property is provided only for reasons of compatibility. It is generally only needed to enable fixed point arithmetic in programs where it is not yet enabled. If fixed point arithmetic is disabled, the position of the decimal separator of packed numbers (type `p`) is only respected for output in a classic dynpro, for assignments to fields of the types `c` and `string`, or for formatting using `WRITE [TO]`. The position is not respected for calculations.

[Program Properties](ABENPROGRAM_PROPERTY_GUIDL.html)

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenprogram\_properties\_obsolete.html