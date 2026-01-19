---
title: "ABAPSYNTAX-CHECK_FOR_DYNPRO"
description: |
  ABAPSYNTAX-CHECK_FOR_DYNPRO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSYNTAX-CHECK_FOR_DYNPRO.htm"
abapFile: "ABAPSYNTAX-CHECK_FOR_DYNPRO.html"
keywords: ["if", "data", "internal-table", "ABAPSYNTAX", "CHECK", "FOR", "DYNPRO"]
---

**This statement is for internal use only. \\nIt must not be used in application programs.**

`SYNTAX-CHECK FOR DYNPRO h f e m ...MESSAGE f1 ...LINE f2                                  ...WORD f3.`

[1. `... OFFSET f4`](#ABAP_ADDITION_1@3@)

[2. `... TRACE-TABLE itab1`](#ABAP_ADDITION_2@3@)

[3. `... MESSAGE-ID f5`](#ABAP_ADDITION_3@3@)

The `[dynpro](ABENDYNPRO_GLOSRY.html)` description is taken from the structure `h` and the internal tables `f`, `e`, and `m`. The structure `h` (dynpro header) should correspond to the structure `D020S`, the internal table `f` (field list) to the structure `D021S`, the internal table `e` (flow logic) to the structure `D022S`, and the internal table `m` (matchcode information) to the structure `D023S`. Standard tables without secondary keys can be specified for `f`, `e`, and `m`.

Syntax check for a dynpro.

If a syntax error is detected during the check, the fields `f1`, `f2`, and `f3` are filled as follows:

When a syntax error occurs, the position of the incorrect word in the incorrect line is stored in this field.

Any trace output is stored in this table. Trace output is automatically activated when this addition is specified. A standard table without secondary keys can be specified for `itab1`.

If a syntax error occurs, the key of the corresponding error message is returned in field `f5`. This key has the same structure as the key of table `TRMSG`.

-   `f1` contains the error message text.
-   `f2` contains the dynpro line where the error occurred
-   `f3` contains the incorrect word in the dynpro

DATA: DHEAD TYPE D020S, "dynpro header \\n DFIELDS TYPE TABLE OF D021S, "field list \\n DFLOWL TYPE TABLE OF D022S, "flow logic \\n MCINFO TYPE TABLE OF D023S. "matchcode information \\n `**sy-subrc**` **Meaning** 0 The dynpro has no syntax errors. 4 The dynpro has syntax errors. abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_language\_dynamic.html abenabap\_generic\_dynpro.html abengeneric\_dynpro\_internal.html