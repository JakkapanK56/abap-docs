---
title: "ABENMEMORY_CONSUMPTION"
description: |
  ABENMEMORY_CONSUMPTION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENMEMORY_CONSUMPTION.htm"
abapFile: "ABENMEMORY_CONSUMPTION.html"
keywords: ["if", "case", "class", "data", "types", "internal-table", "ABENMEMORY", "CONSUMPTION"]
---

All data types for which the content of their data objects represents the actual work data referred to as *flat* in ABAP. The [elementary data types](ABENELEMENTARY_DATA_TYPE_GLOSRY.html) of a fixed length are flat, as are structures with exclusively flat components. The memory requirements of flat data objects are defined statically by the data type. Flat data objects are always [static data objects](ABENSTATIC_DATA_OBJECT_GLOSRY.html).

On the other hand, data types where the content of their data objects consists of [references](ABENREFERENCE_GLOSRY.html), which, in turn, refer to work data in another memory area, are referred to as *deep*. Types of [data reference variables](ABENDATA_REFERENCE_VARIABLE_GLOSRY.html) and [object reference variables](ABENOBJECT_REFER_VARIABLE_GLOSRY.html), as well as the types of [strings](ABENSTRING_GLOSRY.html), [internal tables](ABENINTERNAL_TABLE_GLOSRY.html), and [boxed components](ABENBOXED_COMPONENT_GLOSRY.html) are deep. Strings and internal tables are [dynamic data objects](ABENDYNAMIC_DATA_OBJECT_GLOSRY.html) whose memory requirements can change at program runtime and are managed internally using references. Reference variables are static data objects since their actual size is fixed, whereas the size of the explicitly referenced objects is dynamic. Boxed components are a medium in between because their memory requirements in the internal session are not defined when the program is started in the internal session, but can be handled like static data objects with a fixed length. Structures are referred to as deep, regardless of [nesting](ABENNESTED_STRUCTURE_GLOSRY.html) if they contain at least one deep component.

When using deep data objects, working memory is requested at program runtime. In the case of reference variables, this is the memory for administrative information and the objects created (instances of classes and [anonymous data objects](ABENANONYMOUS_DATA_OBJECT_GLOSRY.html)). In the case of dynamic data objects (strings, internal tables) and boxed components, this is the memory for administrative information and for the data objects themselves. Objects referenced by reference variables can themselves, in turn, be dynamic, that is, be or contain strings or internal tables.

The requested memory must be available in the [session memory](ABENROLL_AREA_GLOSRY.html) of the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html), since otherwise a runtime error occurs.

-   [Memory Requirements for Deep Data Objects](ABENMEMORY_CONSUMPTION_1.html)
-   [Maximum Size of Dynamic Data Objects](ABENMEMORY_CONSUMPTION_2.html)
-   [Sharing Between Dynamic Data Objects](ABENMEMORY_CONSUMPTION_3.html)
-   [Complex Data Objects with Deep Components](ABENMEMORY_CONSUMPTION_4.html)

abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html