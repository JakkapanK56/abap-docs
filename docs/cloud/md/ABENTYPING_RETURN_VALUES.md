---
title: "ABENTYPING_RETURN_VALUES"
description: |
  ABENTYPING_RETURN_VALUES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTYPING_RETURN_VALUES.htm"
abapFile: "ABENTYPING_RETURN_VALUES.html"
keywords: ["do", "if", "case", "method", "data", "types", "ABENTYPING", "RETURN", "VALUES"]
---

The return value of a [functional method](ABENFUNCTIONAL_METHOD_GLOSRY.html) is always completely typed and is always passed by value. An actual parameter can be appended to the return value as follows:

If an exception is raised when the return value is assigned to a formal parameter or when it is used as an operand, it cannot always be handled, but cause a runtime error, depending on the operand position.

-   Specification of the method in an [operand position](ABENOPERANDS_EXPRESSIONS.html)
-   If a functional method is used in an operation position, the return value is used like a data object whose data type is determined with an exception by the complete typing of the return value (a type-compliant actual parameter is implicitly bound to it). Checking of this typing is not necessary (or is always successful). An error always occurs, however, if the typing of the return value is not compatible with the [operand type](ABENOPERAND_TYPE_GLOSRY.html).
-   If the return value of a functional method is bound as an actual parameter to a generically typed formal parameter of type `p`, the method inherits the decimal places of the return value but not its length. In this case the formal parameter is given a length of 16.
-   [Method call](ABAPCALL_METHOD_STATIC.html) with the addition [`RECEIVING`](ABAPCALL_METHOD_PARAMETERS.html)
-   If an actual parameter is specified explicitly after `RECEIVING`, it does not have to comply with the [general typing rules](ABENTYPING_CHECK_GENERAL.html) for typing the formal parameter. Instead, it is enough if the formal parameter can be converted to the actual parameter in accordance with the [conversion rules](ABENCONVERSION_RULES.html).

-   If reference variables are returned using `RECEIVING`, an [upcast](ABENUP_CAST_GLOSRY.html) is possible but a [downcast](ABENDOWN_CAST_GLOSRY.html) is not.
-   The special rule that a generic formal parameter of type `p` gets the length of 16 when a functional method is passed does not apply to the other generic types `any`, `data`, `simple`, or `numeric`.

abenabap.html abenabap\_reference.html abendeclarations.html abentyping.html abentyping\_check.html