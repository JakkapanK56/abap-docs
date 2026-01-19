---
title: "ABENALIGNMENT"
description: |
  ABENALIGNMENT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENALIGNMENT.htm"
abapFile: "ABENALIGNMENT.html"
keywords: ["do", "if", "case", "data", "types", "ABENALIGNMENT"]
---

Data objects with certain data types cannot be stored in random addresses in the main memory:

An elementary data object is aligned when it has an address that corresponds to its data type.

Normally, the correct alignment of data objects is not normally an issue, because they are automatically created correctly during declaration. This can cause [alignment gaps](ABENALIGNMENT_GAP_GLOSRY.html) in structures with components of different data types.

However, correct alignment must be checked in the following cases:

If a statement expects a specific alignment of a data object, an exception is raised when there is insufficient alignment.

The following alignment gaps (A) appear in the following structure:

The first alignment gap is constructed as a result of the alignment of the substructure `struc2`, the second gap due to the alignment of the component `c` of type `c`, and the third due to the component `d` of type `i`.

-   [Numeric data objects](ABENNUMERIC_DATA_OBJECT_GLOSRY.html)
-   The memory address of ABAP fields with the following numeric types must be divisible as follows:

-   `s` by 2
-   `i` by 4
-   `int8`, `decfloat16`, `f` by 8
-   `decfloat34` by 16

-   [Character-like data objects](ABENCHARLIKE_DATA_OBJECT_GLOSRY.html)
-   The memory address of character-like data objects must be divisible by 2 for the character representation [UCS-2](ABENUCS2_GLOSRY.html) used by the ABAP programming language.
-   [Time stamp fields](ABENTIMESTAMP_FIELD_GLOSRY.html)
-   The memory address of time stamp fields of the type `utclong` must be divisible by eight.
-   [Deep data objects](ABENDEEP_GLOSRY.html)
-   The memory address of deep data objects such as strings or reference variables must be divisible by 4.

-   A structure is aligned if:

-   Its start address meets the strictest alignment requirements of its components and
-   The [offsets](ABENOFFSET_GLOSRY.html) of all components meet the same type-specific divisibility requirements.

-   In assignments and comparisons of structures where the [structure fragment view](ABENUNICODE_FRAGMENT_VIEW_GLOSRY.html) that splits a structure into fragments in accordance with its alignment gaps must be considered.
-   When a data object is handled using explicit or implicit [casting](ABENCAST_CASTING_GLOSRY.html) with a different data type.
-   When a work area that has a different type from the database table is used in an [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement.

-   Components that are included in structures using [`INCLUDE TYPE|STRUCTURE`](ABAPINCLUDE_TYPE.html) behave like real [substructures](ABENSUBSTRUCTURE_GLOSRY.html) in regard to alignment.
-   The binary content of alignment gaps is not defined and must not be evaluated.
-   Trailing alignment gaps can also occur at the end of structures, since the overall length of the structure is determined by the component with the largest alignment requirement.
-   Alignment gaps are part of the length of a structure.

\[ a | A | b | A | cccccccccccc | A | dddd \] DATA: \\n BEGIN OF struc1, \\n a TYPE x LENGTH 1, \\n BEGIN OF struc2, \\n b TYPE x LENGTH 1, \\n c TYPE c LENGTH 6, \\n END OF struc2, \\n d TYPE i, \\n END OF struc1. abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html