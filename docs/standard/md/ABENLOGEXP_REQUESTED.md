---
title: "ABENLOGEXP_REQUESTED"
description: |
  ABENLOGEXP_REQUESTED - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOGEXP_REQUESTED.htm"
abapFile: "ABENLOGEXP_REQUESTED.html"
keywords: ["update", "if", "case", "method", "ABENLOGEXP", "REQUESTED"]
---

`... para IS [NOT] REQUESTED ...`

This [predicate expression](ABENPREDICATE_EXPRESSION_GLOSRY.html) checks whether an output parameter `para` of a [procedure](ABENPROCEDURE_GLOSRY.html) is being requested. The expression is true if in the call an actual parameter was assigned to the formal parameter.

This expression is possible only in function modules and methods. `para` expects only output parameters and optional input/output parameters.

If the addition `NOT` is specified, the expression is true if no actual parameter was assigned to the formal parameter in the call.

-   The predicate `IS REQUESTED` should no longer be used. The predicate expression [`IS SUPPLIED`](ABENLOGEXP_SUPPLIED.html) can be used instead, which includes all functions of `IS REQUESTED`.
-   In [update function modules](ABENUPDATE_FUNCTION_MODULE_GLOSRY.html), checks on [table parameters](ABENTABLE_PARAMETER_GLOSRY.html) using `IS REQUESTED` produce a syntax check warning because an actual parameter is always assigned to the table parameter in this case.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_program\_flow.html abenobsolete\_logexp.html