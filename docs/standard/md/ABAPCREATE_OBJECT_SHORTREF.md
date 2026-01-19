---
title: "ABAPCREATE_OBJECT_SHORTREF"
description: |
  ABAPCREATE_OBJECT_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCREATE_OBJECT_SHORTREF.htm"
abapFile: "ABAPCREATE_OBJECT_SHORTREF.html"
keywords: ["if", "class", "internal-table", "ABAPCREATE", "OBJECT", "SHORTREF"]
---

[Reference](ABAPCREATE_OBJECT.html)

`CREATE OBJECT oref [AREA HANDLE handle]\                     [\ [TYPE class]\                        [EXPORTING  p1 = a1 p2 = a2 ...]\                        [EXCEPTIONS exc1 = n1 exc2 = n2 ... [OTHERS = n_others]]\ ]\                   |\ [ TYPE (name)                       \{\ [EXPORTING  p1 = a1 p2 = a2 ...]\                        [EXCEPTIONS exc1 = n1 exc2 = n2 ... [OTHERS = n_others]]\}\                     |\ \{[PARAMETER-TABLE ptab]\                        [EXCEPTION-TABLE etab]\}\ ].`

Creates an instance of a class and sets the object reference in `oref` to the object. If the addition `TYPE` is not specified, `oref` must be typed with reference to a [concrete](ABENCONCRETE_GLOSRY.html) class and this class is instantiated.

-   [`AREA HANDLE handle`](ABAPCREATE_OBJECT_AREA_HANDLE.html)\\
    Creates a [shared object](ABENSHARED_OBJECT_GLOSRY.html), where a reference to an [area handle](ABENAREA_HANDLE_GLOSRY.html) has to be specified in `handle`.
-   [`\{TYPE class\}|\{TYPE (name)\}`](ABAPCREATE_OBJECT_EXPLICIT.html)\\
    Statically or dynamically specifies the class of the object that must be more specific than the static type of `oref`.
-   [`EXPORTING p1 = a1 p2 = a2 ...`](ABAPCREATE_OBJECT_PARAMETERS.html)\\
    Passes actual parameters `a1`, `a2`, ... to input parameters `p1`, `p2`, ... of the instance constructor.
-   [`EXCEPTIONS exc1 = n1 exc2 = n2 ... [OTHERS = n_others]`](ABAPCREATE_OBJECT_PARAMETERS.html)\\
    Assigns return codes to non-class-based exceptions of the instance constructor.
-   [`PARAMETER-TABLE ptab`](ABAPCREATE_OBJECT_PARA_TABLES.html)\\
    Assigns dynamic actual parameters to the formal parameters of the instance constructor using an internal table `ptab` of type `abap_parmbind_tab`.
-   [`EXCEPTION-TABLE etab`](ABAPCREATE_OBJECT_PARA_TABLES.html)\\
    Assigns dynamic return codes to non-class-based exceptions using an internal table `etab` of type `abap_excpbind_tab`.
    

abenabap.html abenabap\_reference.html abenabap\_shortref.html