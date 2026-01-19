---
title: "ABENRTTI"
description: |
  ABENRTTI - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRTTI.htm"
abapFile: "ABENRTTI.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENRTTI"]
---

The [RTTS](ABENRUN_TIME_TYPE_SERVICES_GLOSRY.html) are implemented using a hierarchy of [type description classes](ABENTYPE_CLASS_GLOSRY.html) that contain the methods for [Runtime Type Creation (RTTC)](ABENRUN_TIME_TYPE_CREATION_GLOSRY.html) and [Runtime Type Identification (RTTI)](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html). Using these system classes, it is possible to

The properties of the types are represented by the attributes of [type description objects](ABENTYPE_OBJECT_GLOSRY.html). For each type there is exactly one type description object. The attributes of the type description object contain information about the properties of the type. For each type category (elementary type, table, class, and so on), there is a type description class with special attributes for the special type properties. The class hierarchy of the type description classes corresponds to the hierarchy of the type categories in the [ABAP type hierarchy](ABENTYPE_HIERARCHY.html).

In addition, type description classes for complex types, references, classes, and interfaces have special methods for determining references to partial types. These methods can be used can navigate to all partial types using a composite type.

Type description objects can only be created using the methods of type description classes. To get a reference to a type description object of a type, the static methods of the class `CL_ABAP_TYPEDESCR` can be used or methods of the special type description classes can be called.

`` \ `CL_ABAP_TYPEDESCR`\ | |--`CL_ABAP_DATADESCR`\ | | | |--`CL_ABAP_ELEMDESCR`\ | | | | | |--`CL_ABAP_ENUMDESCR`\ | | | |--`CL_ABAP_REFDESCR`\ | |--`CL_ABAP_COMPLEXDESCR`\ | | | |--`CL_ABAP_STRUCTDESCR`\ | |--`CL_ABAP_TABLEDESCR`\ | |--`CL_ABAP_OBJECTDESCR`\ | |--`CL_ABAP_CLASSDESCR`\ |--`CL_ABAP_INTFDESCR` ``

Reading of the type properties of an elementary type from a type object generated with the method `DESCRIBE_BY_DATA`.

Reading of the properties of the components of a structure. The reference to the type object is assigned using a downcast to a reference variable of type `CL_ABAP_STRUCTDESCR`.

-   determine type information of existing [instances](ABENINSTANCE_GLOSRY.html) and [type names](ABENTYPE_NAMES.html) in the [ABAP type hierarchy](ABENTYPE_HIERARCHY.html) at runtime.
-   define new data types at runtime.

-   The RTTS type description classes use constants to refer to data types.
-   The value of these constants corresponds to the single character IDs returned by statement [`DESCRIBE FIELD`](ABAPDESCRIBE_FIELD.html). A mapping of the constants to these IDs is listed for the addition [`TYPE`](ABAPDESCRIBE_FIELD.html) of that statement.
-   In the statement [`CREATE DATA`](ABAPCREATE_DATA.html), type description objects can be specified after the addition [`HANDLE`](ABAPCREATE_DATA_HANDLE.html) to create data objects with dynamically created data types.

TYPES my\_type TYPE p LENGTH 16 DECIMALS 6. \\n\\ \\nDATA my\_data TYPE my\_type. \\n\\ \\nFINAL(descr) = cl\_abap\_typedescr=>describe\_by\_data( my\_data ). \\n\\ \\ncl\_demo\_output=>display( \\n |Typename: \\{ descr->absolute\_name \\}\\\\n| && \\n |Kind: \\{ descr->type\_kind \\}\\\\n| && \\n |Length: \\{ descr->length \\}\\\\n| && \\n |Decimals: \\{ descr->decimals \\}\\\\n| ). cl\_demo\_output=>display( CAST cl\_abap\_structdescr( \\n cl\_abap\_typedescr=>describe\_by\_name( 'SYST' ) )->components ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendescribe\_field.html