---
title: "ABAPPERFORM_FORM"
description: |
  ABAPPERFORM_FORM - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPPERFORM_FORM.htm"
abapFile: "ABAPPERFORM_FORM.html"
keywords: ["select", "if", "data", "ABAPPERFORM", "FORM"]
---

`... subr`\\
`|\ \{subr|(sname) IN PROGRAM \{prog|(pname)\}\ [IF FOUND]\}`\\
`|\ \{n OF subr1 subr2 ...\} ...`

[1. `... subr ...`](#ABAP_ALTERNATIVE_1@2@)

[2. `... subr|(sname) IN PROGRAM \{prog|(pname)\}\ [IF FOUND] ...`](#ABAP_ALTERNATIVE_2@2@)

[3. `... n OF subr1 subr2 ...`](#ABAP_ALTERNATIVE_3@2@)

***This syntax is only supported temporarily in the current ABAP language version and must be replaced with valid syntax for that version.***\\ \\n\\n

These names are used in the statement [`PERFORM`](ABAPPERFORM.html) to specify the called program and the ABAP program in which it is defined.

When specified directly, `subr` calls any subroutine of the current program using its name declared in the statement [`FORM`](ABAPFORM.html). The subroutine must exist.

[`... IF FOUND`](#ABAP_ONE_ADD@1@)

If specified, this selects a subroutine `subr` of the current program from a list. The list `subr1 subr2 ...` can contain up to 256 directly specified subroutines. `n` expects a numeric data object containing a number between 1 and the specified number of subroutines when the statement is executed. The subroutine `subr` is called, whose list position is in `n`. In this variant, it is not possible to specify `parameter_list` and only subroutines without a parameter interface can be called.

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapperform.html abapperform\_general.html