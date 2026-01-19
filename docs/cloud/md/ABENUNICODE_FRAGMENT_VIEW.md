---
title: "ABENUNICODE_FRAGMENT_VIEW"
description: |
  ABENUNICODE_FRAGMENT_VIEW - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENUNICODE_FRAGMENT_VIEW.htm"
abapFile: "ABENUNICODE_FRAGMENT_VIEW.html"
keywords: ["if", "data", "types", "ABENUNICODE", "FRAGMENT", "VIEW"]
---

The structure fragment view splits a structure into fragments. A fragment is a grouping of structure components of the same or similar data types. In nested structures, the elementary components on the lowest nesting depth are considered when forming fragments. The following parts of a structure are each grouped to form fragments:

Structure with fragments.

The structure `struc` contains the following fragments for the character representation [UCS-2](ABENUCS2_GLOSRY.html) used by the ABAP programming language, in which character-like fields are represented by two bytes per character. Alignment gaps are marked with an *A*.

-   Consecutive [flat](ABENFLAT_GLOSRY.html) character-like components of the types `c`, `n`, `d`, and `t`, between which there are no [alignment gaps](ABENALIGNMENT_GAP_GLOSRY.html), form character-like fragments.
-   Consecutive flat byte-like components of the type `x`, between which there are no alignment gaps, form byte-like fragments.
-   Consecutive, similar numeric components of type (`b`, `s`), `i`, `int8`, `decfloat16`, `decfloat34`, or `f`, between which there are no alignment gaps, each form a common fragment.
-   Consecutive time stamp fields of the type `utclong`, between which there are no alignment gaps, form a separate fragment.
-   Each individual numeric type `p` component forms a separate fragment. For this type of fragment, the length is important, but not the number of decimal places.
-   In [deep](ABENDEEP_GLOSRY.html) structures, each deep component (reference) forms a separate fragment.
-   Each component with an [enumerated type](ABENENUM_TYPE_GLOSRY.html) forms a separate fragment of this type.
-   Each alignment gap is considered a fragment.

-   In nested structures, alignment gaps can occur before and after aligned substructures.
-   When structure components are transferred using [`INCLUDE`](ABAPINCLUDE_TYPE.html), an additional alignment gap can be created in front of the included components.
-   The fragment view of structures with components of type `p` can match, even when the number of decimal places in the components concerned is different.
-   An [enumerated structure](ABENENUMERATED_STRUCTURE_GLOSRY.html) of an [enumerated type](ABENENUM_TYPE_GLOSRY.html) is a special structure in which each component has an enumerated type and forms a separate fragment.

DATA: \\n BEGIN OF struc, \\n a TYPE c LENGTH 3, \\n b TYPE n LENGTH 4, \\n c TYPE d, \\n d TYPE t, \\n e TYPE decfloat16, \\n f TYPE x LENGTH 2, \\n g TYPE x LENGTH 4, \\n h TYPE i, \\n i TYPE i, \\n j TYPE i, \\n k TYPE i, \\n END OF struc. **Fragment** **Components** **Bytes** 1 `a`, `b`, `c`, `d` 6+8+16+12 2 *A* 6 3 `e` 8 4 `f`, `g` 2+4 5 *A* 2 6 `h`, `i`, `j`, `k` 4+4+4+4 abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenconversion\_rules.html abenconversion\_struc.html