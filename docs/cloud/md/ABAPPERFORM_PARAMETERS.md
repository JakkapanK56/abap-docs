---
title: "ABAPPERFORM_PARAMETERS"
description: |
  ABAPPERFORM_PARAMETERS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPPERFORM_PARAMETERS.htm"
abapFile: "ABAPPERFORM_PARAMETERS.html"
keywords: ["do", "if", "data", "internal-table", "ABAPPERFORM", "PARAMETERS"]
---

`... [TABLES itab1 itab2 ...]`\\
`[USING a1 a2 ...]`\\
`[CHANGING a1 a2 ...].`

[1. `... TABLES itab1 itab2 ...`](#ABAP_ADDITION_1@3@)

[2. `... USING a1 a2 ...`](#ABAP_ADDITION_2@3@)

[3. `... CHANGING a1 a2 ...`](#ABAP_ADDITION_3@3@)

***This syntax is only supported temporarily in the current ABAP language version and must be replaced with valid syntax for that version.***\\ \\n\\n

These additions assign actual parameters to the formal parameters of the parameter interface of the subroutine `subr`. All data objects whose data type matches the [typing](ABENTYPING_GLOSRY.html) of the corresponding formal parameter can be specified (see [Check Typing](ABENTYPING_CHECK.html)) as actual parameters. Each formal parameter assumes all the properties of the actual parameter assigned to it when it is called. The order of the additions is fixed.

The addition `TABLES` must be used to assign an internal table `itab` as an actual parameter to each table parameter `t1 t2 ...` defined for the called subroutine using the addition `TABLES` of the statement [`FORM`](ABAPFORM.html). The assignment of the actual parameters to the formal parameters takes place using their positions in the lists `t1 t2 ...` and `itab1 itab2 ...`

Only [standard tables](ABENSTANDARD_TABLE_GLOSRY.html) can be specified for `itab`. The data is passed by reference. If a specified table `itab` has a [header line](ABENHEADER_LINE_GLOSRY.html), this is also passed. Otherwise, the header line in the corresponding table parameter `t` is initial when it is called.

The use of table parameters in the interface of subroutines is obsolete, but a large number of subroutines have not yet been switched to appropriately typed `USING` parameters or `CHANGING` parameters and must still be filled by the addition `TABLES` of the statement `PERFORM`.

If the additions `USING` and `CHANGING` are specified, a type-specific actual parameter `a1 a2 ...` must be assigned to each of the formal parameters `u1 u2 ...` and `c1 c2 ...` defined for the called subroutine using the identically named additions of the statement [`FORM`](ABAPFORM.html). The actual parameters specified after `USING` and `CHANGING` form one single shared list. They are assigned to the formal parameters in accordance with the position in the shared list. The type of parameter passing is defined by the additions `USING` and `CHANGING` in the statement `FORM`. The addition `USING` must be in front of `CHANGING`. Otherwise, the assignment of the actual parameters to the additions `USING` and `CHANGING` is ignored by the statement `PERFORM`. It is also irrelevant whether only one or both of the additions are specified.

-   For program documentation purposes, it is best to specify the additions `USING` and `CHANGING` in the statement `FORM` in accordance with the definition of the parameter interface.
-   No [substring access](ABENOFFSET_LENGTH.html) is possible to an actual parameter of type `string` or `xstring` specified after `USING` or `CHANGING`.
-   [Upcasts](ABENUP_CAST_GLOSRY.html) are not possible when passing an actual parameter to a `USING` parameter typed as a reference variable.
-   A `USING` parameter declared for [pass by reference](ABENPASS_BY_REFERENCE_GLOSRY.html) behaves in the same way as a `CHANGING` parameter, which means that the content of the actual parameter could be changed in a forbidden way.

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapperform.html