---
title: "ABENMETHOD_PARAMETERS"
description: |
  ABENMETHOD_PARAMETERS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMETHOD_PARAMETERS.htm"
abapFile: "ABENMETHOD_PARAMETERS.html"
keywords: ["do", "if", "method", "class", "ABENMETHOD", "PARAMETERS"]
---

The interface parameters in methods are input parameters (`IMPORTING` and `CHANGING` parameters) and output parameters (`EXPORTING`, `CHANGING`, and `RETURNING` parameters). Declarations using the statements

define the following attributes:

With the exception of the return value (`RETURNING` parameters), parameters can be passed both by value and by reference. Passing by reference is the default in methods. If only a name `p` is specified in the parameter declaration, the parameter is passed implicitly as a reference. If `VALUE(p)` is specified instead, the parameter is passed as a value. The return value may only be passed as a value. Pass by reference can also be specified explicitly in other parameters using `REFERENCE(p)`. An `IMPORTING` parameter passed by reference cannot be modified in the method.

All parameters must be [typed](ABENTYPING_GLOSRY.html) when declared using `TYPE` or `LIKE` additions.

All input parameters (`IMPORTING` and `CHANGING` parameters) can be defined in the declaration as optional parameters using the additions `OPTIONAL` or `DEFAULT`. These parameters then do not always have to be transferred when the method is called. The parameter remains initial and type-compliant when the addition `OPTIONAL` is specified, whereas the addition `DEFAULT` makes it possible to specify a [start value](ABENSTART_VALUE_GLOSRY.html).

-   [`METHODS`](ABAPMETHODS.html)
-   [`CLASS-METHODS`](ABAPCLASS-METHODS.html)
-   [`EVENTS`](ABAPEVENTS.html)
-   [`CLASS-EVENTS`](ABAPCLASS-EVENTS.html)

abenabap.html abenabap\_reference.html abenabap\_objects.html abenclasses.html abenclass\_components.html abenclass\_methods.html