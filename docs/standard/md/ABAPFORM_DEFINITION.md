---
title: "ABAPFORM_DEFINITION"
description: |
  ABAPFORM_DEFINITION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFORM_DEFINITION.htm"
abapFile: "ABAPFORM_DEFINITION.html"
keywords: ["ABAPFORM", "DEFINITION"]
---

[Short Reference](ABAPFORM_DEFINITION_SHORTREF.html)

`FORM subr DEFINITION`\\ 
          `[TABLES [table_parameters](ABAPFORM_TABLES.html)]`\\ 
          `[USING [parameters](ABAPFORM_PARAMETERS.html)]`\\ 
          `[CHANGING [parameters](ABAPFORM_PARAMETERS.html)]`\\ 
          `[RAISING exc1|RESUMABLE(exc1) exc2|RESUMABLE(exc2) ...].`\\ 
\\ 
`FORM subr IMPLEMENTATION.`\\ 
  `...`\\ 
`ENDFORM.`

In this variant of the statement [`FORM`](ABAPFORM.html) the definition of a subroutine `subr` is shared between a declaration part and an implementation part:

This variant of defining a subroutine is not supported by all tools and should be avoided.

-   The statement `FORM subr DEFINITION` declares the subroutine and its parameter interface. The meaning of the additions is the same as in [`FORM`](ABAPFORM.html). A subroutine declaration of this type is part of the [global declaration part](ABENGLOBAL_DECLARATION_SECT_GLOSRY.html) of a program.
-   The subroutine is implemented between the statements `FORM subr IMPLEMENTATION` and `ENDFORM`. These statements define a processing block in the implementation part of the program.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_modularization.html abenabap\_subroutines.html