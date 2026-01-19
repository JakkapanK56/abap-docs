---
title: "ABENCREATE_OBJECTS"
description: |
  ABENCREATE_OBJECTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCREATE_OBJECTS.htm"
abapFile: "ABENCREATE_OBJECTS.html"
keywords: ["select", "delete", "do", "while", "if", "method", "class", "data", "types", "internal-table", "ABENCREATE", "OBJECTS"]
---

This section describes how data objects and instances of classes are created and values constructed.

Creating an object or data object is equivalent to the dynamic creation of an instance of a data type or a class. While instances of classes can only be created as described in this section, instances of data types, that is data objects, declared using the statement [`DATA`](ABAPDATA.html), or related statements such as [`CONSTANTS`](ABAPCONSTANTS.html), are created automatically as named data objects when their [context](ABENOBJ_CONTEXT_GLOSRY.html) is loaded into the internal session. Data objects only need to be created dynamically if the data type is only known when the program is executed, or if large amounts of memory are only to be used for short periods of time.

Dynamically created objects can only be addressed using reference variables and are deleted from the internal session by the [Garbage Collector](ABENGARBAGE_COLLECTOR_GLOSRY.html) if they are no longer referenced.

Objects can be created using one of the following:

Data objects and objects are created in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) of the current program by default, and only programs in the same internal session can access them. The following, however, can also be created:

The statement [`ASSIGN LOCAL COPY`](ABAPASSIGN_LOCAL_COPY.html) is used for an obsolete form of object creation.

The attribute values of a newly created instance of a class can be constructed using the [instance constructor](ABENINSTANCE_CONSTRUCTOR_GLOSRY.html) of the class. The input parameters of the instance constructor can be filled using the `EXPORTING` addition of the statement [`CREATE OBJECT`](ABAPCREATE_OBJECT.html) or using actual parameters for the instance operator [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html).

The values of dynamically created or statically declared data objects can be constructed using the following [constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html):

Like any constructor expression, the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) can be used in [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html) and in [functional operand positions](ABENFUNCTIONAL_POSITION_GLOSRY.html), including particularly the right side of an assignment to an [inline declaration](ABENINLINE_DECLARATIONS.html).

Inline declarations of a reference variable `dref` and a structured variable `dobj`. The instance operator `NEW` creates an anonymous data object that is referred to by `dref`. Using functional method calls, the instance operator `NEW` and the value operator `VALUE` are used to construct and assign values for the components of the structures.

-   [`CREATE DATA`](ABAPCREATE_DATA.html)
-   [`CREATE OBJECT`](ABAPCREATE_OBJECT.html)
-   The [instance operator](ABENINSTANCE_OPERATOR_GLOSRY.html)\\ [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) for creating objects in [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html) and [functional operand positions](ABENFUNCTIONAL_POSITION_GLOSRY.html)
-   The addition [`NEW`](ABAPSELECT_INTO_TARGET.html) in the `INTO` clause of ABAP SQL for the implicit creation of data objects as target areas.

-   [Shared objects](ABENABAP_SHARED_OBJECTS.html) in the [shared memory](ABENSHARED_MEMORY_GLOSRY.html)
-   [SPA/GPA parameters in the user memory](ABENSPA_GPA.html)

-   When anonymous data objects are created dynamically using the instance operator [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html), values for all data types, particularly structured and tabular types, can be constructed and assigned to the created data object.
-   The [value operator](ABENVALUE_OPERATOR_GLOSRY.html)\\ [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) can also be used to construct the content of complex data objects (structures, internal tables) and thus exceeds the functionality of the [`VALUE`](ABAPDATA_OPTIONS.html) addition.

DATA(dref) = NEW struct( col1 = meth->get\_col1( ) \\n col2 = meth->get\_col1( ) ). \\n\\ \\nDATA(dobj) = VALUE struct( col1 = meth->get\_col1( ) \\n col2 = meth->get\_col1( ) ). abenabap.html abenabap\_reference.html