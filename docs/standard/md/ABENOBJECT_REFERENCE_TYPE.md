---
title: "ABENOBJECT_REFERENCE_TYPE"
description: |
  ABENOBJECT_REFERENCE_TYPE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENOBJECT_REFERENCE_TYPE.htm"
abapFile: "ABENOBJECT_REFERENCE_TYPE.html"
keywords: ["select", "if", "catch", "method", "class", "data", "types", "ABENOBJECT", "REFERENCE", "TYPE"]
---

Object references can point to instances of [classes](ABENCLASS_GLOSRY.html). The static type of their reference variables is either a class or an interface. Both types can be used to create objects with the statement [`CREATE OBJECT`](ABAPCREATE_OBJECT.html).

If an attempt is made to access an instance attribute using an object reference variable that contains the [null reference](ABENNULL_REFERENCE_GLOSRY.html), an uncatchable exception is raised. A catchable exception is raised when an instance method is called.

Object references are always [heap references](ABENHEAP_REFERENCE_GLOSRY.html).

For more information, see [Object References](ABENREFERENCES.html).

Inline declaration of an object reference variable `out` with the static type `IF_DEMO_OUTPUT` on the left side of an object of the class `CL_DEMO_OUTPUT` created using its factory method `NEW`. Calling of the method `DISPLAY` using the object component selector.

-   Class reference variables allow access to all visible components of a class.
-   Interface reference variables restrict the view of the [interface components](ABENINTERFACE_COMPONENT_GLOSRY.html) of a class.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nout->display( \`Hello\` ). abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html abendata\_references.html