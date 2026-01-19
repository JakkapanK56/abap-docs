---
title: "ABAPFORM_PARAMETERS"
description: |
  ABAPFORM_PARAMETERS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFORM_PARAMETERS.htm"
abapFile: "ABAPFORM_PARAMETERS.html"
keywords: ["if", "data", "types", "ABAPFORM", "PARAMETERS"]
---

[Short Reference](ABAPFORM_SHORTREF.html)

`... \{ VALUE(p1) | p1 \}\ [[typing](ABENTYPING_SYNTAX.html)|[structure](ABAPFORM_STRUCTURE.html)]`\\ 
    `\{ VALUE(p2) | p2 \}\ [[typing](ABENTYPING_SYNTAX.html)|[structure](ABAPFORM_STRUCTURE.html)]`\\ 
    `...`

Defines the formal parameters `p1 p2 ...` for subroutines.

The addition `typing` types a formal parameter `p1 p2 ...`. The syntax of `typing` is described in [Typing](ABENTYPING_SYNTAX.html). The typing of a formal parameter causes the data type to be [checked](ABENTYPING_CHECK.html) against the typing when an actual parameter is passed. In addition, the typing specifies at which operand positions the formal parameter can be used in the subroutine. If no explicit typing is specified, a formal parameter is typed with the fully generic type `any`.

`VALUE` can be used to specify how [values are passed](ABENPASS_BY_VALUE_GLOSRY.html) for a formal parameter `p1 p2 ...`. If `VALUE` is not specified, values are [passed by reference](ABENPASS_BY_REFERENCE_GLOSRY.html).

The addition [`structure`](ABAPFORM_STRUCTURE.html) can also be used to implement an obsolete form of typing.

Without an explicit typing, a formal parameter is typed implicitly with the fully generic type `any`.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_modularization.html abenabap\_subroutines.html abapform.html