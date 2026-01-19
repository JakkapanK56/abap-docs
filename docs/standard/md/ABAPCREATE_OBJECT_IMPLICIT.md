---
title: "ABAPCREATE_OBJECT_IMPLICIT"
description: |
  ABAPCREATE_OBJECT_IMPLICIT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCREATE_OBJECT_IMPLICIT.htm"
abapFile: "ABAPCREATE_OBJECT_IMPLICIT.html"
keywords: ["if", "method", "class", "data", "ABAPCREATE", "OBJECT", "IMPLICIT"]
---

[Short Reference](ABAPCREATE_OBJECT_SHORTREF.html)

``CREATE OBJECT oref [[`area_handle`](ABAPCREATE_OBJECT_AREA_HANDLE.html)]\ [[`parameter_list`](ABAPCREATE_OBJECT_PARAMETERS.html)].``

If the addition `TYPE` is not specified, the object reference variable `oref` must be a class reference variable. An instance of the class is created that is the static type of the object reference variable. The static type of the class reference variable must not be an [abstract](ABENABSTRACT_GLOSRY.html) class, and in particular not the root class `object`.

If the character `#` is used in an operand position with the operand type of a class reference variable, the [instance operator](ABENINSTANCE_OPERATOR_GLOSRY.html)\\ [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) works like the statement `CREATE DATA dref`.

Creation of an instance of a class `cls` by implicitly referring to the static type of the reference variables.

CLASS cls DEFINITION. \\n PUBLIC SECTION. \\n DATA attr TYPE string VALUE 'Object'. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n DATA oref TYPE REF TO cls. \\n CREATE OBJECT oref. \\n out->write( oref->attr ). \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abencreate\_objects.html abapcreate\_object.html