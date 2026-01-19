---
title: "ABAPCREATE_OBJECT_EXPLICIT"
description: |
  ABAPCREATE_OBJECT_EXPLICIT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCREATE_OBJECT_EXPLICIT.htm"
abapFile: "ABAPCREATE_OBJECT_EXPLICIT.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABAPCREATE", "OBJECT", "EXPLICIT"]
---

[Short Reference](ABAPCREATE_OBJECT_SHORTREF.html)

``CREATE OBJECT oref [[`area_handle`](ABAPCREATE_OBJECT_AREA_HANDLE.html)]\                     TYPE \{ class  [[`parameter_list`](ABAPCREATE_OBJECT_PARAMETERS.html)]\ \}\                        |\ \{ (name) [[`parameter_list`](ABAPCREATE_OBJECT_PARAMETERS.html)|[`parameter_tables`](ABAPCREATE_OBJECT_PARA_TABLES.html)]\ \}.``

Creation of an instance of an explicitly specified class. A [concrete](ABENCONCRETE_GLOSRY.html) class that is more specific than or identical to the static type of the object reference variable `oref` can be specified. The reference variable `oref` can be a class reference variable or an interface reference variable. The name of the class can be specified as follows:

The class must be usable at the current position:

Dynamic object creation can present a serious security risk if used incorrectly. Names of classes that are passed to a program from the outside must be checked thoroughly before being used in dynamic statements. The system class `CL_ABAP_DYN_PRG`, for example, is used to do this.

Creation of an instance of a class `cls` using an explicit reference to the class. The static type of the reference variable is the root class `object` and is therefore more general than any other class. Components must be accessed dynamically or a cast must be performed as shown here.

-   `class`
-   Direct static specification as `class`.
-   `(name)`
-   Specification as the content of a character-like data object `name`. The data object `name` must contain the name of the class in uppercase letters when the statement is executed. The class name in `name` can also be an [absolute type name](ABENABSOLUTE_TYPENAME_GLOSRY.html). The following can be specified for `name`:

-   Literal or constant
-   If the data object `name` is specified as a character literal or as a constant, it can be evaluated statically and the specified class is recognized as the used object.
-   Variable
-   If the data object `name` is specified as a variable, it is specified only dynamically and the content is not evaluated statically.

-   When the statement is executed, `name` is not evaluated until runtime (in both cases).

-   The addition [`CREATE`](ABAPCLASS_OPTIONS.html) of the class definition must allow objects to be created.
-   The package check must allow an object of a global class to be created.

-   If the class is specified dynamically, the parameters can either be specified statically in [`parameter_list`](ABAPCREATE_OBJECT_PARAMETERS.html) or dynamically in [`parameter_tables`](ABAPCREATE_OBJECT_PARA_TABLES.html).
-   When a class is used, the [instance operator](ABENINSTANCE_OPERATOR_GLOSRY.html)\\ [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) acts like the statement `CREATE OBJECT oref TYPE class` and can be used in [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html). The dynamic specification of `name` is not possible here.

CLASS cls DEFINITION. \\n PUBLIC SECTION. \\n DATA attr TYPE string VALUE 'Object'. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n DATA oref TYPE REF TO object. \\n CREATE OBJECT oref TYPE cls. \\n out->write( CAST cls( oref ) ). \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abencreate\_objects.html abapcreate\_object.html