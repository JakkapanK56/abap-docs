---
title: "ABAPFUNCTION_TYPING_OBSOLETE"
description: |
  ABAPFUNCTION_TYPING_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFUNCTION_TYPING_OBSOLETE.htm"
abapFile: "ABAPFUNCTION_TYPING_OBSOLETE.html"
keywords: ["if", "case", "data", "types", "field-symbol", "ABAPFUNCTION", "TYPING", "OBSOLETE"]
---

`...  \{LIKE struc-comp\}\ |\ \{LIKE struc STRUCTURE struc\} ...`

Typing of interface parameters in the display of the [properties of the interface parameters](ABENFUNCTION_PARAMETERS.html) of a function module interface in the source code of function modules, if the type is specified using `LIKE` in the Function Builder. Specifying the type in this way now produces a warning in the Function Builder.

If a component of a global program structure in the function pool of a function module has exactly the same name (structure name `struc` and component `comp`) as the component of a DDIC structure specified after `LIKE`, `LIKE` refers to the component of the structure defined in the function pool. This leads to a warning in the syntax check.

-   A typing using `LIKE` is displayed if an elementary component `struc-comp` of a [flat DDIC structure](ABENDDIC_STRUCTURES.html) (or DDIC database table or DDIC view) is specified after `LIKE` in the Function Builder. The typing check is the same as when specifying components after `TYPE`, with the exception that the [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) are ignored for [packed numbers](ABENPACKED_NUMBER_GLOSRY.html). No types from a type pool can be specified.
-   A typing using `STRUCTURE` is displayed if a flat DDIC structure (or DDIC database table or DDIC view) `struc` is specified after `LIKE` in the Function Builder. This structure is then applied to the formal parameter ([casting](ABENCAST_CASTING_GLOSRY.html)), and it is possible to access the individual components. In the case of a structured actual parameter, this parameter must be at least as long as the formal parameter:

-   In the case of a structured actual parameter, its [fragment view](ABENUNICODE_FRAGMENT_VIEW_GLOSRY.html) must match the fragment view of the corresponding initial part of `struc`.
-   An elementary actual parameter must be character-like and flat and the corresponding initial part of `struc` can contain only components of this type.

-   No types from a type pool can be specified.

-   Only `TYPE` should be used instead of `LIKE` in the Function Builder. This is always displayed as `TYPE` in the source code. Furthermore, `TYPE` always refers to types in the ABAP Dictionary and never to local types of the function pool.
-   Formal parameters typed with `STRUCTURE` can usually be replaced by formal parameters typed with `TYPE`. If a casting is necessary, generic formal parameters should be used and assigned to field symbols using the statement [`ASSIGN`](ABAPASSIGN.html) and the addition `CASTING`.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_modularization.html abenfunction\_modules\_obsolete.html