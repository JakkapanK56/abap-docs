---
title: "ABAPGENERATE_DYNPRO"
description: |
  ABAPGENERATE_DYNPRO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGENERATE_DYNPRO.htm"
abapFile: "ABAPGENERATE_DYNPRO.html"
keywords: ["if", "internal-table", "ABAPGENERATE", "DYNPRO"]
---

**This statement is for internal use only. \\nIt must not be used in application programs.**

`GENERATE DYNPRO h f e m ID g`\\ 
  `... MESSAGE f1 ... LINE f2 ... WORD f3.`

[1. `... OFFSET f4`](#ABAP_ADDITION_1@3@)

[2. `... TRACE-FILE f5`](#ABAP_ADDITION_2@3@)

Generates the [dynpro](ABENDYNPRO_GLOSRY.html) specified in the field `g`.
The source code is taken from the structure `h` and the internal tables `f`, `e`, and `m`. The field `h`(`=dynpro header`) should correspond to the structure `D020S`, the internal table `f` (=field list) should correspond to the structure `D021S`, the internal table `e` (=flow logic) should correspond to the structure `D022S`, and the internal table `m` (=matchcode information) should correspond to the structure `D023S`. Standard tables without secondary keys can be specified for `f`, `e`, and `m`.
\\
If a syntax error occurs, the error message is stored in the field `f1`.
\\
If a syntax error occurs, the number of the incorrect line is stored in the field `f2`.
By querying the return code, it is possible to determine whether this line refers to the flow logic or the field list.
\\
If a syntax error occurs, the incorrect word is stored in the field `f3`.

When a syntax error occurs, the position of the incorrect word in the incorrect line is stored in this field.

Trace output is stored in this file. This addition automatically activates trace mode.

`**sy-subrc**` **Meaning** 0 The dynpro was generated. 4 The dynpro could not be generated. The specified error position is in the flow logic. 8 The dynpro could not be generated. The specified error position is in the field list. abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_language\_dynamic.html abenabap\_generic\_dynpro.html abengeneric\_dynpro\_internal.html