---
title: "ABAPFORM_PARAMETERS"
description: |
  ABAPFORM_PARAMETERS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPFORM_PARAMETERS.htm"
abapFile: "ABAPFORM_PARAMETERS.html"
keywords: ["if", "data", "types", "ABAPFORM", "PARAMETERS"]
---

`... \{ VALUE(p1) | p1 \}\ [[typing](ABENTYPING_SYNTAX.html)|[structure](ABAPFORM_STRUCTURE.html)]`\\ 
    `\{ VALUE(p2) | p2 \}\ [[typing](ABENTYPING_SYNTAX.html)|[structure](ABAPFORM_STRUCTURE.html)]`\\ 
    `...`

***This syntax is only supported temporarily in the current ABAP language version and must be replaced with valid syntax for that version.***\\ \\n\\n

Defines the formal parameters `p1 p2 ...` for subroutines.

The addition `typing` types a formal parameter `p1 p2 ...`. The syntax of `typing` is described in [Typing](ABENTYPING_SYNTAX.html). The typing of a formal parameter causes the data type to be [checked](ABENTYPING_CHECK.html) against the typing when an actual parameter is passed. In addition, the typing specifies at which operand positions the formal parameter can be used in the subroutine. If no explicit typing is specified, a formal parameter is typed with the fully generic type `any`.

`VALUE` can be used to specify how [values are passed](ABENPASS_BY_VALUE_GLOSRY.html) for a formal parameter `p1 p2 ...`. If `VALUE` is not specified, values are [passed by reference](ABENPASS_BY_REFERENCE_GLOSRY.html).

The addition [`structure`](ABAPFORM_STRUCTURE.html) can also be used to implement an obsolete form of typing.

Without an explicit typing, a formal parameter is typed implicitly with the fully generic type `any`.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_modularization.html abenabap\_subroutines.html abapform.html