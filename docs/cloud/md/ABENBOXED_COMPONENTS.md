---
title: "It is currently possible to declare substructures of structured data types and structured attributes of classes as"
description: |
  These boxes support initial value sharing(ABENINITIAL_VALUE_SHARING_GLOSRY.html). -   static boxes(ABENSTATIC_BOXES.html) -   Boxed components are a middle ground between static(ABENSTATIC_DATA_OBJECT_GLOSRY.html) and dynamic data objects(ABENDYNAMIC_DATA_OBJECT_GLOSRY.html). Their memory re
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBOXED_COMPONENTS.htm"
abapFile: "ABENBOXED_COMPONENTS.html"
keywords: ["if", "method", "class", "data", "types", "ABENBOXED", "COMPONENTS"]
---

Boxed components are structures that are not stored in their superordinate context. Instead, an internal reference that points to the actual structure is stored instead of the structure. A boxed component is therefore always a [deep](ABENDEEP_GLOSRY.html) component of its context.

It is currently possible to declare substructures of structured data types and structured attributes of classes as

These boxes support [initial value sharing](ABENINITIAL_VALUE_SHARING_GLOSRY.html).

-   [static boxes](ABENSTATIC_BOXES.html)

-   Boxed components are a middle ground between [static](ABENSTATIC_DATA_OBJECT_GLOSRY.html) and [dynamic data objects](ABENDYNAMIC_DATA_OBJECT_GLOSRY.html). Their memory requirements are not fixed when the program is started in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html), but they can be handled like static data objects with a fixed length.
-   A nested structure that contains a boxed component as a component is always a [deep structure](ABENDEEP_STRUCTURE_GLOSRY.html).
-   Structures of the ABAP Dictionary can also contain boxed components. ABAP Dictionary database tables cannot contain any boxed components since their structures must be flat.
-   In [RTTS](ABENRUN_TIME_TYPE_SERVICES_GLOSRY.html) classes and objects, boxed components are handled as follows:

-   The class `CL_ABAP_TYPEDESCR` contains the constant `TYPEKIND_BREF` for static boxes. The value of these constants is specified as the type of a static box in the component table `COMPONENTS` of the class `CL_ABAP_STRUCTDESCR` or the attribute table `ATTRIBUTES` of the classes `CL_ABAP_CLASSDESCR` or `CL_ABAP_INTFDESCR`.
-   In the return value of the method `GET_COMPONENTS` of the class `CL_ABAP_STRUCTDESCR` or `GET_ATTRIBUTE_TYPE` of the classes `CL_ABAP_CLASSDESCR` or `CL_ABAP_INTFDESCR`, boxed components are listed as type description objects of the class `CL_ABAP_REFDESCR`, like reference variables. The method `GET_REFERENCED_TYPE` of this class returns a type description object for the substructure. A type description object of the class `CL_ABAP_REFDESCR`, which describes a boxed component, cannot be used in the statements [`CREATE DATA`](ABAPCREATE_DATA.html) or [`ASSIGN CASTING`](ABAPASSIGN_CASTING.html).

abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html abendata\_objects\_structure.html