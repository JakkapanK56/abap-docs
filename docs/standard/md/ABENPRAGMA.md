---
title: "ABENPRAGMA"
description: |
  ABENPRAGMA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPRAGMA.htm"
abapFile: "ABENPRAGMA.html"
keywords: ["delete", "do", "if", "case", "method", "data", "types", "internal-table", "ABENPRAGMA"]
---

`... ##code[par][par]...`

Pragmas are [program directives](ABENPROGRAM_DIRECTIVE_GLOSRY.html) that can be used to hide warnings from various check tools. The following are supported:

A pragma is not case-sensitive and does not contain blanks. The pragma code (`code`) determines the effect and parameters (`par`) further restrict the effect if necessary.

A warning is affected by a pragma if all the parameters *specified* match the *concrete* parameters. The concrete parameters can also be taken from the long text of the message. *Compulsory* parameters are underlined in the long text and must not be omitted. Non-compulsory parameters are optional. Optional parameters can be omitted using empty parentheses `[]` at the appropriate position or by completely omitting an end part.

A pragma applies to the current statement, that is to the statement that ends at the next `.` or `,`. Pragmas in front of the`:` of a chained statement apply to the entire chained statement. Pragmas that are used when calling a [macro](ABENMACRO_GLOSRY.html) apply to all statements of the macro.

Pragmas must only be used at specific positions in the source code for reasons of readability, namely:

Unknown, formally incorrect, or incorrectly parameterized pragmas produce a syntax warning. Incorrectly positioned pragmas for warnings in the syntax check have no effect.

The following is an example of a pragma for syntax check warnings:

This pragma can be used to hide a syntax warning in a method definition that reports the hiding of a built-in function. The pragma has an optional parameter in which the name of the function can be specified as well.

A warning about *SUBSTRING* is suppressed using one of the following:

but not using `SHADOW[FIND]`.

An example of pragmas for hiding warnings from the extended program check is:

In some executable examples for key accesses to internal tables ([read](ABENREAD_ITAB_USING_KEY_ABEXA.html), [delete](ABENDELETE_ITAB_USING_KEY_ABEXA.html)), syntax warnings are hidden by the associated pragma. The pragmas are found in the long text of the syntax warnings.

-   Warnings from the ABAP Compiler [syntax check](ABENSYNTAX_CHECK_GLOSRY.html)
-   Warnings from the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html)

-   At the *start* of a line, after any number of blanks
-   At the *end* of a line, only followed by `.`, `,`, or `:`.
-   *Not*\\ *after*\\ `.`, `,`, or `:`.
-   Multiple pragmas may be positioned one after another, separated by blanks, at allowed positions.

-   For a system check warning, the existence of a pragma and its rules can be checked using the *long text of the message*, which in this case always exists. The description of a message in the extended program check also indicates the pragma that can be used to hide it.
-   A pragma in a type definition made using [`TYPES`](ABAPTYPES.html),for example, to hide the warning for redundant secondary keys of table types, can also be applied to data declarations using [`DATA`](ABAPDATA.html) in the case of non-generic types and related statements that reference the data type using [`TYPE`](ABAPDATA_REFERRING.html). If a reference is made to a generic data type defined using `TYPES`, that is, a table type for which no primary table key is defined, a pragma specified there is not applied to the data declaration, since it uses a full table type implicitly and the pragma must potentially be specified again.
-   Pragmas replace the previously used [pseudo comments](ABENPSEUDO_COMMENT_SLIN.html) to hide warnings from the extended program check. These pseudo comments are therefore obsolete and should no longer be used. The program `ABAP_SLIN_PRAGMAS` shows which pragmas are to be used instead of the obsolete pseudo comments.
-   In a program that uses pragmas to deactivate warnings, the statement [`SET EXTENDED CHECK`](ABAPSET_EXTENDED_CHECK.html) and the [pseudo comment](ABENPSEUDO_COMMENT_SLIN.html)\\ `#EC *` can no longer be used and produce an extended program check warning that cannot be deactivated.

-   `##SHADOW`
-   `##SHADOW[SUBSTRING]`
-   `##SHADOW[]`

##SHADOW ##SHADOW\[SUBSTRING\] DATA TEXT TYPE STRING ##needed.text = 'Hello Pragmas' ##no\_text. abenabap.html abenabap\_reference.html abenabap\_syntax.html abenprogram\_directives.html