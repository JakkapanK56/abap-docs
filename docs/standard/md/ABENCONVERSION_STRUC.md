---
title: "ABENCONVERSION_STRUC"
description: |
  ABENCONVERSION_STRUC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONVERSION_STRUC.htm"
abapFile: "ABENCONVERSION_STRUC.html"
keywords: ["do", "if", "catch", "data", "ABENCONVERSION", "STRUC"]
---

In assignments between [structures](ABENDATA_OBJECTS_STRUCTURE.html), it is necessary to distinguish between [flat structures](ABENFLAT_STRUCTURE_GLOSRY.html) and [deep structures](ABENDEEP_STRUCTURE_GLOSRY.html):

Assignments between structures and data objects that cannot be assigned to structures lead to a syntax error or the runtime error `OBJECTS_MOVE_NOT_SUPPORTED`.

[Avoid unexpected conversion results](ABENUSE_CONVERSION_RULES_GUIDL.html)

-   Deep structures can only be assigned to each other if they are [compatible](ABENCOMPATIBILITY.html). Full compatibility is not required for the following deep components, and the following applies instead:

-   For components that have a [reference type](ABENREFERENCE_TYPE_GLOSRY.html), [upcasts](ABENUP_CAST_GLOSRY.html) but not [downcasts](ABENDOWN_CAST_GLOSRY.html) are allowed.
-   For table-like components, it is sufficient if the [line type](ABENROW_TYPE_GLOSRY.html) is compatible. This means that full [compatibility](ABENCOMPATIBILITY.html) is not required, which also includes [table categories](ABENTABLE_CATEGORY_GLOSRY.html) and [table keys](ABENTABLE_KEY_GLOSRY.html).

-   For flat structures, there are conversion rules for the following assignments between incompatible data objects:

-   \\ [Conversion between flat structures](ABENCONVERSION_FLAT_FLAT.html)
-   [Conversion between flat structures and single fields](ABENCONVERSION_FLAT_ELEMENTARY.html)

-   If [substring access](ABENOFFSET_LENGTH.html) is performed on a structure and the substring is shorter than the structure, the substring is handled like an operand of type `c` and the corresponding conversion rules apply. If the substring corresponds exactly to the length of the structure, the substring is handled like the structure itself.
-   A [lossless assignment](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html) can be used to apply the same assignment rule to flat structures as to deep structures.
-   The conversion rules for structures are designed to prevent catchable exceptions from being raised. If an assignment is allowed, it takes place.
-   The statement [`MOVE-CORRESPONDING`](ABAPMOVE-CORRESPONDING.html) or the conversion operator [`CORRESPONDING`](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html) can be used to assign structures component by component.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenconversion\_rules.html