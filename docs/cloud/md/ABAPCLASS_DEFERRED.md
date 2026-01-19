---
title: "ABAPCLASS_DEFERRED"
description: |
  ABAPCLASS_DEFERRED - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCLASS_DEFERRED.htm"
abapFile: "ABAPCLASS_DEFERRED.html"
keywords: ["do", "if", "case", "class", "data", "ABAPCLASS", "DEFERRED"]
---

`CLASS class DEFINITION DEFERRED.`

This variant of the statement `CLASS` is used to make the class `class` known temporarily in the program, regardless of the location of the actual definition of the class in the program. It does not introduce a declaration part and must not be closed using `ENDCLASS`.

The statement makes a local class known before its actual definition. The program must contain a declaration part for `class` at a later point. It is not possible to access individual components before the actual definition. The statement is necessary if a reference to a local class is to be made before it is defined.

In this example, the class `c1` uses the class `c2` and vice versa. This means that one of the classes must be made known before it is actually defined.

A typical use case for the need of `CLASS class DEFINITION DEFERRED` are [test classes](ABENTEST_CLASS_GLOSRY.html) of [ABAP Unit](ABENABAP_UNIT_GLOSRY.html) that must access private components of a global class and thus must be declared as friends of that class. Since the [test include](ABENTEST_INCLUDE_GLOSRY.html), where the test classes are defined is located behind the [CCDEF include](ABENCCDEF_GLOSRY.html) where the friendship is declared, the test classes must be declared deferred in the CCDEF include.

See the class pool of `CL_DEMO_ABAP_UNIT`.

-   This variant of the statement `CLASS` can only be listed in the same context as described under [`CLASS`](ABAPCLASS.html).

CLASS c1 DEFINITION DEFERRED. \\n\\ \\nCLASS c2 DEFINITION. \\n PUBLIC SECTION. \\n DATA c1ref TYPE REF TO c1. \\nENDCLASS. \\n\\ \\nCLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n DATA c2ref TYPE REF TO c2. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abapclass.html