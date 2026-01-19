---
title: "ABENNEWS-71-BOXED_COMPONENTS"
description: |
  ABENNEWS-71-BOXED_COMPONENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-71-BOXED_COMPONENTS.htm"
abapFile: "ABENNEWS-71-BOXED_COMPONENTS.html"
keywords: ["if", "method", "class", "data", "types", "internal-table", "ABENNEWS", "BOXED", "COMPONENTS"]
---

Structures or classes often have further structures as components which are not used every time a program is executed. This can lead to unnecessary memory usage, especially if these structures are instantiated multiple times. Examples are structures with substructures as a line type from internal tables or structures in classes that are frequently instantiated. To avoid unnecessary memory usage without this having to be programmed by ABAP developers, [static boxes](ABENSTATIC_BOX_GLOSRY.html) were introduced as a preliminary form of [boxed components](ABENBOXED_COMPONENT_GLOSRY.html) in ABAP release 7.0 (EhP2). Like strings and internal tables, these are based on an implicit referencing and support [initial value sharing](ABENINITIAL_VALUE_SHARING_GLOSRY.html).

[1\. Structured Types with Static Boxes](#ABAP_MODIFICATION_1@4@)

[2\. Attributes of Classes as Static Boxes](#ABAP_MODIFICATION_2@4@)

[3\. Enhancements to RTTS for Static Boxes](#ABAP_MODIFICATION_3@4@)

Within a structure definition using [`TYPES BEGIN OF`](ABAPTYPES_STRUC.html), the addition [`BOXED`](ABAPTYPES_BOXED.html) in `TYPES` can be used to create a substructure as a static box.

Within a class declaration, the [`BOXED`](ABAPDATA_BOXED.html) addition of `DATA` can be used to create a structured attribute as a static box.

The class `CL_ABAP_TYPEDESCR` contains the new constant `TYPEKIND_BREF` for static boxes. The value of these constants is specified as the type of a static box in the component table `COMPONENTS` of the class `CL_ABAP_STRUCTDESCR`. The return value of the method `GET_COMPONENTS` of the class `CL_ABAP_STRUCTDESCR` contains boxed components and reference variables as type description objects of the class `CL_ABAP_REFDESCR`. The method `GET_REFERENCED_TYPE` of this class gets a type description object for the substructure. A type description object of the class `CL_ABAP_REFDESCR`, which describes a boxed component, cannot be used in the statements [`CREATE DATA`](ABAPCREATE_DATA.html) or [`ASSIGN CASTING`](ABAPASSIGN_CASTING.html).

abenabap.html abennews.html abennews-70\_ehps.html abennews-71.html