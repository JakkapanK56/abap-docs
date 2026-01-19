---
title: "ABENCLASS_ATTRIBUTES"
description: |
  ABENCLASS_ATTRIBUTES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCLASS_ATTRIBUTES.htm"
abapFile: "ABENCLASS_ATTRIBUTES.html"
keywords: ["select", "if", "catch", "method", "class", "data", "types", "internal-table", "ABENCLASS", "ATTRIBUTES"]
---

Attributes are internal data objects of a class of any ABAP data type. The content of the attributes determines the state of the object. Reference variables can also be defined, which can then be used to create and address objects. This allows objects to be accessed within classes.

Attributes are defined in the declaration part of a class. Public attributes are visible from outside the class without restrictions and as such are part of the interface between objects and their users. To encapsulate the state of the object, protected, package-visible, or private attributes must be used. In addition to the visibility, the modifiability of non-private attributes can also be restricted using the addition [`READ-ONLY`](ABAPDATA_OPTIONS.html) in the declaration.

The content of instance attributes represents the instance-dependent state of the object. Instance attributes are declared using the [`DATA`](ABAPDATA.html) statement. The addition [`COMMON PART`](ABAPDATA_COMMON.html) cannot be used in classes.

Referring to an instance attribute behind `LIKE` with the object component selector without creating an instance of the class of the attribute.

The content of static attributes represents the instance-independent state of the class that is valid for all instances. Static attributes exist once for each class. They are declared using the statement [`CLASS-DATA`](ABAPCLASS-DATA.html) and are preserved for the entire runtime. All the objects of a class can access its static attributes. Changes to a static attribute in an object are visible to all other objects of that class.

The data types of all attributes, including instance attributes and, in particular, [bound data types](ABENBOUND_DATA_TYPE_GLOSRY.html), belong to the static properties of a class. Therefore, in a `LIKE` addition, the class component selector or reference variables can be used to refer to the visible attributes of a class, without first creating an object. In this way, the public static properties of global classes can be accessed in every program.

Reference to the data type of an instance attribute `attr` of a global class `cl_global`.

DATA dref TYPE REF TO cl\_global.\\ 
\\ 
DATA:  f1 LIKE cl\_global=>attr,\\ 
       f2 LIKE dref->attr.

Like substructures of nested structures, attributes declared as structures can be declared as [static boxes](ABENSTATIC_BOX_GLOSRY.html) using the addition [`BOXED`](ABAPDATA_BOXED.html). In static boxes, [initial value sharing](ABENINITIAL_VALUE_SHARING_GLOSRY.html) takes effect, which leads to fewer memory requirements for little used structures of frequently used objects. A static box used as a [boxed component](ABENBOXED_COMPONENT_GLOSRY.html) is a deep component that is managed using an internal reference, such as strings and internal tables.

-   The attempt to access an instance attribute via an initial [object reference variable](ABENOBJECT_REFER_VARIABLE_GLOSRY.html), in contrast to the call of an instance method, results in an exception that is not catchable.
-   The data types of all class attributes belong to the static properties of a class. A `LIKE` addition enables the visible class attributes to be referenced using the class component selector or reference variables without first creating an object.

CLASS cls DEFINITION. \\n PUBLIC SECTION. \\n DATA attr TYPE i. \\nENDCLASS. \\n\\ \\nCLASS user DEFINITION. \\n PUBLIC SECTION. \\n METHODS meth. \\nENDCLASS. \\n\\ \\nCLASS user IMPLEMENTATION. \\n METHOD meth. \\n DATA oref TYPE REF TO cls. \\n TYPES typ LIKE oref->attr. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_objects.html abenclasses.html abenclass\_components.html