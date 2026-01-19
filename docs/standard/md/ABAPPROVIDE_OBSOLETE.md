---
title: "ABAPPROVIDE_OBSOLETE"
description: |
  ABAPPROVIDE_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPPROVIDE_OBSOLETE.htm"
abapFile: "ABAPPROVIDE_OBSOLETE.html"
keywords: ["loop", "do", "if", "class", "data", "types", "internal-table", "ABAPPROVIDE", "OBSOLETE"]
---

**This statement should be used by specialists only.**\\ \\n**In-depth knowledge of the corresponding environment is essential.**\\ \\n**This environment is not part of ABAP and is not documented here.**

[Short Reference](ABAPPROVIDE_SHORTREF.html)

`PROVIDE \{*|\{comp1 comp2 ...\}\} FROM itab1          \{*|\{comp1 comp2 ...\}\} FROM itab2          ...          BETWEEN extliml AND extlimu.`

This form of the statement `PROVIDE`, which is not allowed in classes, is a short form of the allowed [variant](ABAPPROVIDE.html). The compiler distinguishes the long form from the short form by the additions `FIELDS`, to be specified explicitly in front of the component specifications.

The short form is exclusively intended for processing internal tables for `HR`\\ [info types](ABENINFO_TYPE_GLOSRY.html), which have been declared with the special statement [`INFOTYPES`](ABAPINFOTYPES.html) or which have the corresponding structure.

In principle, the short form of the statement `PROVIDE` works like the allowed [variant](ABAPPROVIDE.html). Unlike the allowed [variant](ABAPPROVIDE.html), however, fewer additions are possible here. A table cannot be specified more than once in the short form. The internal tables must have [header lines](ABENHEADER_LINE_GLOSRY.html) and the additions to be specified in the long form are added in the short form by the runtime framework, as described below.

For the `PROVIDE` loop to function correctly, the same conditions apply as in the [long form](ABAPPROVIDE.html). However, no exceptions are raised if one of the involved tables is not sorted or if there are overlapping intervals.

**Interval limits `BOUNDS`**

The columns for interval limits to be specified in the [long form](ABAPPROVIDE.html) as `intlim1` and `intlim2` using the addition `BOUNDS` are properties of the relevant tables in the short form and must be specified when they are declared.

This is done using the addition `VALID BETWEEN`, which can be specified after `DATA END OF` if an internal table is declared with the obsolete addition `OCCURS` of the statement `DATA BEGIN OF`. If an internal table is declared using the special statement [`INFOTYPES`](ABAPINFOTYPES.html), these are the `BEGDA` and `ENDDA` columns. If no columns are specified for the interval limits in the declaration, the short form of `PROVIDE` uses the first two columns of the internal table.

**Work area `INTO`**

In the short form, the headers of the internal table are used implicitly for the work areas that have to be specified as `wa` in the [long form](ABAPPROVIDE.html) using the addition `INTO`.

**Flag `VALID`**

For the data objects to be specified as `flag` in the [long form](ABAPPROVIDE.html) using the addition `VALID`, a data object `itab_valid` of type `c` and length 1 is created in the short form for every table `itab`.

**Condition `WHERE`**

No conditions can be specified in the short form.

**Addition `INCLUDING GAPS`**

In the short form, the `PROVIDE` loop cannot be forced for every interval.

The system fields `sy-tabix` and `sy-subrc` are not filled by the short form for `PROVIDE` - `ENDPROVIDE`.

This example has the same result as the example for the [long form](ABAPPROVIDE.html). Here, the tables `itab1` and `itab2` have header lines and the columns `col1` and `col2` are defined as interval limits of type `i` using the addition `VALID` of the statement `DATA END OF`.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: BEGIN OF itab1 OCCURS 0, \\n col1 TYPE i, \\n col2 TYPE i, \\n col3 TYPE string, \\n END OF itab1 VALID BETWEEN col1 AND col2. \\n\\ \\nDATA: BEGIN OF itab2 OCCURS 0, \\n col1 TYPE i, \\n col2 TYPE i, \\n col3 TYPE string, \\n END OF itab2 VALID BETWEEN col1 AND col2. \\n\\ \\nitab1-col1 = 1. \\nitab1-col2 = 6. \\nitab1-col3 = 'Itab1 Int1'. \\nAPPEND itab1 TO itab1. \\n\\ \\nitab1-col1 = 9. \\nitab1-col2 = 12. \\nitab1-col3 = 'Itab1 Int2'. \\nAPPEND itab1 TO itab1. \\n\\ \\nitab2-col1 = 4. \\nitab2-col2 = 11. \\nitab2-col3 = 'Itab2 Int1'. \\nAPPEND itab2 TO itab2. \\n\\ \\nDATA output TYPE TABLE OF string WITH EMPTY KEY. \\nPROVIDE col3 FROM itab1 \\n col3 FROM itab2 \\n BETWEEN 2 AND 14. \\n APPEND | \\{ itab1-col1 WIDTH = 2 \\} \\{ itab1-col2 WIDTH = 2 \\} \\{ \\n itab1-col3 \\} \\{ itab1\_valid \\} | TO output. \\n APPEND | \\{ itab2-col1 WIDTH = 2 \\} \\{ itab2-col2 WIDTH = 2 \\} \\{ \\n itab2-col3 \\} \\{ itab2\_valid \\} | TO output. \\n APPEND INITIAL LINE TO output. \\nENDPROVIDE. \\nout->write( output ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenitab\_obsolete.html