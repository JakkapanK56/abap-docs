---
title: "ABAPDATA_REFERENCES"
description: |
  ABAPDATA_REFERENCES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPDATA_REFERENCES.htm"
abapFile: "ABAPDATA_REFERENCES.html"
keywords: ["delete", "do", "if", "case", "method", "class", "data", "types", "internal-table", "ABAPDATA", "REFERENCES"]
---

`DATA ref \{\ \{TYPE REF TO type\}`\\ 
         `|\ \{LIKE REF TO dobj\}\ \}`\\ 
         ``[`[VALUE IS INITIAL]`](ABAPDATA_OPTIONS.html)``\\ 
         ``[`[READ-ONLY]`](ABAPDATA_OPTIONS.html).``

The addition `REF TO` declares a [reference variable](ABENREFERENCE_VARIABLE_GLOSRY.html)\\ `ref`. The static type of the reference variable is specified after `REF TO`. The static type limits the set of objects to which `ref` can point. The dynamic type of a reference variable is the data type or the class to which it currently points. The static type is always more general or the same as the dynamic type (see also the conversion rule for reference variables).

The syntax and meaning of the additions `TYPE` and `LIKE` are the same as the definition of reference types in the section [`TYPES` - `REF TO`](ABAPTYPES_REFERENCES.html), but here they are used to create a bound reference type.

Only `IS INITIAL` can be specified as a [start value](ABENSTART_VALUE_GLOSRY.html) after the addition [`VALUE`](ABAPDATA_OPTIONS.html).

In this example, an object reference `oref` and two data references `dref1` and `dref2` are declared. Both data reference variables are typed fully and can be dereferenced using the dereferencing operator `->*` in operand positions.

-   Reference variables are opaque, which means their content cannot be accessed directly. A reference consists of the address of an object and other administrative information.
-   A [reference](ABENREFERENCE_GLOSRY.html) in a reference variable is valid if it points to an object. In this case the predicate expression [`IS BOUND`](ABENLOGEXP_BOUND.html) is true. A non-initial reference can be invalid if it points to deleted objects. A [heap reference](ABENHEAP_REFERENCE_GLOSRY.html) that points to a line in an internal table can become invalid if the line is deleted. A [stack reference](ABENSTACK_REFERENCE_GLOSRY.html) can become invalid if the referenced data object is removed from the stack.

CLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n DATA a1 TYPE i VALUE 1. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n DATA: oref TYPE REF TO c1, \\n dref1 LIKE REF TO oref, \\n dref2 TYPE REF TO i. \\n CREATE OBJECT oref. \\n dref1 = REF #( oref ). \\n CREATE DATA dref2. \\n dref2->\* = dref1->\*->a1. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenobjects\_statements.html abapdata.html