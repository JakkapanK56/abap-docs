---
title: "ABAPMETHODS_SHORTREF"
description: |
  ABAPMETHODS_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMETHODS_SHORTREF.htm"
abapFile: "ABAPMETHODS_SHORTREF.html"
keywords: ["method", "class", "types", "ABAPMETHODS", "SHORTREF"]
---

[Reference](ABAPMETHODS.html)

``METHODS meth [ABSTRACT|FINAL]\              |[DEFAULT IGNORE|FAIL]\               [FOR EVENT evt OF \{class|intf\}]\    [ IMPORTING \{\{VALUE(p1)|REFERENCE(p1)|p1\}\ [`typing`](ABENTYPING_SHORTREF.html)\ [OPTIONAL|DEFAULT def1]\                 \{VALUE(p2)|REFERENCE(p2)|p2\}\ [`typing`](ABENTYPING_SHORTREF.html)\ [OPTIONAL|DEFAULT def2]\                 ... \}\                [PREFERRED PARAMETER p]\ ]\    [ EXPORTING \{\{VALUE(p1)|REFERENCE(p1)|p1\}\ [`typing`](ABENTYPING_SHORTREF.html)\                 \{VALUE(p2)|REFERENCE(p2)|p2\}\ [`typing`](ABENTYPING_SHORTREF.html)\                ... \}\ ]\    [ CHANGING  \{\{VALUE(p1)|REFERENCE(p1)|p1\}\ [`typing`](ABENTYPING_SHORTREF.html)\ [OPTIONAL|DEFAULT def1]\                 \{VALUE(p2)|REFERENCE(p2)|p2\}\ [`typing`](ABENTYPING_SHORTREF.html)\ [OPTIONAL|DEFAULT def2]\                ... \}\ ]\    [ RETURNING \{VALUE(r)\}\ [`typing`](ABENTYPING_SHORTREF.html)\ ]\    [\ \{RAISING exc1|RESUMABLE(exc1) exc2|RESUMABLE(exc2) ...\}\    |\ \{EXCEPTIONS exc1 exc2 ...\}\ ].``

Declares an [instance method](ABENINSTANCE_METHOD_GLOSRY.html)\\ `meth` in the declaration part of a class or in an interface.

-   [`ABSTRACT`](ABAPMETHODS_ABSTRACT_FINAL.html)\\
    Declares an abstract method that cannot be implemented in the same class.
-   [`FINAL`](ABAPMETHODS_ABSTRACT_FINAL.html)\\
    Declares a final method that cannot be redefined in a subclass.
-   [`DEFAULT IGNORE|FAIL`](ABAPMETHODS_DEFAULT.html)\\
    Declares an optional interface method.
-   [`FOR EVENT evt OF \{class|intf\}`](ABAPMETHODS_EVENT_HANDLER.html)\\
    Declares an [event handler](ABENEVENT_HANDLER_GLOSRY.html) that can handle the event `evt` of the class `class` or of the interface `intf`. Only input parameters are possible.
-   [`AMDP OPTIONS ...`](ABAPMETHODS_AMDP_OPTIONS.html)\\
    Declares attributes of [AMDP methods](ABENAMDP_METHOD_GLOSRY.html)
-   [`IMPORTING`](ABAPMETHODS_GENERAL.html)\\
    Defines input parameters `p1`, `p2`, ...
-   [`EXPORTING`](ABAPMETHODS_GENERAL.html)\\
    Defines output parameters `p1`, `p2`, ...
-   [`CHANGING`](ABAPMETHODS_GENERAL.html)\\
    Defines input/output parameters `p1`, `p2`, ...
-   [`RETURNING`](ABAPMETHODS_FUNCTIONAL.html)\\
    Declares a [functional method](ABENFUNCTIONAL_METHOD_GLOSRY.html) with a completely typed return value `r`.
-   [`VALUE(p1) ... VALUE(p2) ...`](ABAPMETHODS_PARAMETERS.html)\\
    Defines the [pass by value](ABENPASS_BY_VALUE_GLOSRY.html) for a formal parameter.
-   [`REFERENCE(p1)|p1 ... REFERENCE(p2)|p2 ...`](ABAPMETHODS_PARAMETERS.html)\\
    Defines the [pass by reference](ABENPASS_BY_REFERENCE_GLOSRY.html) for a formal parameter.
-   [`typing`](ABENTYPING_SYNTAX.html)\\
    Types the formal parameters.
-   [`OPTIONAL|DEFAULT`](ABAPMETHODS_PARAMETERS.html)\\
    Defines optional input or input/output parameters either with or without the replacement parameters `def1`, `def2`, ...
-   [`PREFERRED PARAMETER p`](ABAPMETHODS_GENERAL.html)\\
    Declares a parameter `p` of exclusively optional input parameters as preferred parameters.
-   [`RAISING exc1|RESUMABLE(exc1) exc2|RESUMABLE(exc2) ...`](ABAPMETHODS_GENERAL.html)\\
    Declares class-based exceptions `exc1`, `exc2`, ... that can be propagated from the method either with or without resumability.
-   [`EXCEPTIONS exc1 exc2 ...`](ABAPMETHODS_GENERAL.html)\\
    Defines non-class-based exceptions `exc1`, `exc2`, ...

abenabap.html abenabap\_reference.html abenabap\_shortref.html