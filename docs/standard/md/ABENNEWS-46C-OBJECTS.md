---
title: "ABENNEWS-46C-OBJECTS"
description: |
  ABENNEWS-46C-OBJECTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-46C-OBJECTS.htm"
abapFile: "ABENNEWS-46C-OBJECTS.html"
keywords: ["if", "method", "class", "data", "types", "ABENNEWS", "46C", "OBJECTS"]
---

SAP has expanded ABAP Objects 4.6C to include the following components:

[1\. Runtime Type Identification](#ABAP_MODIFICATION_1@4@)

[2\. Local Types and Classes](#ABAP_MODIFICATION_2@4@)

[3. Specifying the `%_FRIEND` Addition](#ABAP_MODIFICATION_3@4@)

The method `APPLIES_TO_CLASS` defined in the class `CL_ABAP_OBJECTDESCR` checks whether or not a reference that has the same type as the type description object can point to an object of the passed class. The class `CL_ABAP_OBJECTDESCR` is assigned to the [Runtime Type Identification](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html) (RTTI) area in the ABAP Runtime System.

Runtime type identification also enables the determination of [technical type names](ABENTECHNICAL_TYPE_NAME_GLOSRY.html), so that types without relative type names can also be used for dynamic type declarations like [`CREATE DATA ...`](ABAPCREATE_DATA.html) or [`ASSIGN .... CASTING`](ABAPASSIGN_CASTING.html).

Local [`CLASS-POOLS`](ABAPCLASS-POOL.html) types can now be implemented in the [`PRIVATE SECTION`](ABAPPRIVATE.html) of the global class in question too.

Local data types, classes, and interfaces are now defined in includes known as [CCDEF include](ABENCCDEF_GLOSRY.html) and [CCIMP include](ABENCCIMP_GLOSRY.html) instead of in the `===CL include`.

Furthermore, the [macro](ABENMACRO_GLOSRY.html) include `===CCMAC` makes it possible to define macros in global classes.

Specifying the addition `%_FRIEND` of the statement `DATA ... TYPE REF TO class` makes it possible to access all methods and data elements of the system class `class`.

abenabap.html abennews.html abennews-4.html abennews-46c.html