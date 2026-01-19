---
title: "ABAPSYNTAX-CHECK_FOR_PROGRAM"
description: |
  ABAPSYNTAX-CHECK_FOR_PROGRAM - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSYNTAX-CHECK_FOR_PROGRAM.htm"
abapFile: "ABAPSYNTAX-CHECK_FOR_PROGRAM.html"
keywords: ["do", "if", "data", "internal-table", "ABAPSYNTAX", "CHECK", "FOR", "PROGRAM"]
---

**This statement is for internal use only. \\nIt must not be used in application programs.**

`SYNTAX-CHECK FOR PROGRAM prog`\\ 
                 `MESSAGE mess LINE lin WORD wrd`\\ 
                 `[WITH CURRENT SWITCHSTATES]`\\ 
                 ``[[`error_handling`](ABAPSYNTAX-CHECK_ERROR_HANDLING.html)]``\\ 
                 `[REPLACING itab]`\\ 
                 `[SHORTDUMP-ID sid]`\\ 
                 `[TRACE-TABLE trt]`\\ 
                 `[ID id TABLE idt]`\\ 
                 `[FILTER flt].`

[1. `... REPLACING itab`](#ABAP_ADDITION_1@3@)

[2. `... SHORTDUMP-ID sid`](#ABAP_ADDITION_2@3@)

[3. `... TRACE-TABLE trt`](#ABAP_ADDITION_3@3@)

[4. `... ID id TABLE idt`](#ABAP_ADDITION_4@3@)

[5. `... FILTER flt`](#ABAP_ADDITION_5@3@)

This statement performs a [syntax check](ABENSYNTAX_CHECK_GLOSRY.html) for the program specified in `prog`. `prog` must be a [character-like data object](ABENCHARLIKE_DATA_OBJECT_GLOSRY.html) that contains the name of an existing ABAP program. If the program specified does not exist, `sy-subrc` is set to 8. The properties of the specified program are used for the syntax check. The same applies to the additions `MESSAGE`, `LINE`, `WORD`, and [`error_handling`](ABAPSYNTAX-CHECK_ERROR_HANDLING.html) and the return codes in `sy-subrc` as to the statement [`SYNTAX-CHECK FOR itab`](ABAPSYNTAX-CHECK_FOR_ITAB.html).

`itab` expects a standard table without secondary keys of table type `SREPTAB` with the line type `SREPTABLN` from the ABAP Dictionary, containing a replacement list for the include programs specified in the checked program. Each include program specified after `INCLUDE` in the program specified in `prog` is found in the column `NAME` of the internal table. If the name is found, the syntax check includes the source code referenced by the column `SOURCE` and not the specified include program. The properties used for the check are taken from the structure referenced by the column `TRDIR`.

These additions work as described in [`SYNTAX-CHECK` - Internal Additions](ABAPSYNTAX-CHECK_INTERNAL.html).

abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_language\_dynamic.html abenabap\_generic\_program.html abengeneric\_internal.html