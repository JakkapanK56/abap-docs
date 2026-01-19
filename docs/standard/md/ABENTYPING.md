---
title: "ABENTYPING"
description: |
  ABENTYPING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTYPING.htm"
abapFile: "ABENTYPING.html"
keywords: ["do", "if", "data", "types", "field-symbol", "ABENTYPING"]
---

Typing means specifying a generic or complete data type for a [formal parameter](ABENFORMAL_PARAMETER_GLOSRY.html) of a [procedure](ABENPROCEDURE_GLOSRY.html) or for a [field symbol](ABENFIELD_SYMBOL_GLOSRY.html). When an actual parameter is assigned to a formal parameter, or a data object to a field symbol, the systems performs a a [check](ABENTYPING_CHECK.html) whether the data type matches the typing.

Unlike data objects, where the data type has a specific property and is always completely known, formal parameters and field symbols that are generically typed receive their complete data type only when an actual parameter is passed in a procedure call or when a memory area is assigned using [`ASSIGN`](ABAPASSIGN.html).

When using generically typed formal parameters or field symbols, a distinction must be made between static and dynamic access.

The properties of the actual parameter, which are not [checked](ABENTYPING_CHECK.html) in calls or assignments, can be different from those of the formal parameter. This can produce different behavior in static and dynamic accesses. A dynamic access to components of generically typed formal parameters will result in a runtime error if the components do not exist in the actual parameter.

During compilation and at runtime, formal parameters and field symbols that are completely typed are handled like data objects with completely known data types.

When completely typed formal parameters, or field symbols are used, the properties specified by the typing are used, regardless of whether they are accessed statically or dynamically.

[Be as specific as possible when typing formal parameters](ABENTYPE_FORMAL_PARAM_GUIDL.html)

[Generic Typing and Complete Typing](ABENTYPING_ABEXA.html)

-   In static access to a generically typed formal parameter, field symbol, or their components, the type properties specified by the typing of the formal parameter are used. In static accesses where a complete data type is required, a [standard type](ABENSTANDARD_TYPE_GLOSRY.html) is used if possible.
-   In dynamic access to a generically typed formal parameter, field symbol, or their components, the type properties of the actual parameter are used.

-   The typing of formal parameters or field symbols defines some or all of the type properties before the actual specification of the type. This allows the use of formal parameters and field symbols in operand positions that require certain type properties.
-   If the typing of an existing field symbol or formal parameter is made weaker, note that there may then be fewer options for static accesses and that the associated standard type may change if they are used in [inline declarations](ABENINLINE_DECLARATION_GLOSRY.html).
-   The static type of data reference variables is always completely generic (`data`) or completely typed (see [`DATA` - reference variables](ABAPDATA_REFERENCES.html)).
-   An obsolete [table parameter](ABENTABLE_PARAMETER_GLOSRY.html) can be typed completely or generically with respect to the table key and the same rules apply as to other formal parameters.

abenabap.html abenabap\_reference.html abendeclarations.html