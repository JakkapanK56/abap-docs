---
title: "ABAPCLASS-DATA"
description: |
  ABAPCLASS-DATA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCLASS-DATA.htm"
abapFile: "ABAPCLASS-DATA.html"
keywords: ["select", "if", "method", "class", "data", "types", "ABAPCLASS", "DATA"]
---

[Short Reference](ABAPCLASS-DATA_SHORTREF.html)

``CLASS-DATA attr [[`options`](ABAPDATA.html)].``

The statement `CLASS-DATA` can only be used in the declaration part of a class or an interface. It declares a static attribute `attr` whose validity is not tied to instances of a class, but to the class itself. All instances of the class and its subclasses access a static attribute.

The [naming conventions](ABENNAMING_CONVENTIONS.html) apply to the name `attr`. The syntax of the additions `options` is identical to the statement [`DATA`](ABAPDATA.html) for instance attributes (only the addition [`WITH HEADER LINE`](ABAPDATA_ITAB.html) must not be used).

In this example, the static attribute `text` of class `c1` is accessed using the class component selector without creating an instance of the class.

-   Like all [static components in the inheritance](ABENINHERITANCE_STATICAL.html), the static attributes of a superclass exist in all subclasses. A static attribute that is visible externally can be addressed using the class component selector and all the names of the classes in which it exists. This means that the class in which it is declared is always addressed, which, for example, has an effect on the execution of the [static constructor](ABENSTATIC_CONSTRUCTOR_GLOSRY.html). A change to a static attribute applies to all classes in which it exists, independently of the addressing.
-   Static attributes declared using `CLASS-DATA` can be accessed using the class component selector only with class names, not with interface names.
-   Structured static attributes can be declared as a [static box](ABENSTATIC_BOX_GLOSRY.html) using the addition [`BOXED`](ABAPDATA_BOXED.html).
-   The static attributes of a [shared memory-enabled class](ABENSHM_CLASS_GLOSRY.html) are handled in the same way as a regular class, which means they are created in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) of a program when the class is loaded there. If different programs access the same [shared objects](ABENSHARED_OBJECTS_GLOSRY.html), the static attributes of the associated classes exist more than once and independently of one another in the programs.

CLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n CLASS-DATA text TYPE string VALUE \`Static data\`. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n out->write\_text( c1=>text ). \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abenclass\_ifac\_components.html abentypes\_attributes.html