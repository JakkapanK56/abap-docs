---
title: "ABENMEMORY_CONSUMPTION_3"
description: |
  ABENMEMORY_CONSUMPTION_3 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMEMORY_CONSUMPTION_3.htm"
abapFile: "ABENMEMORY_CONSUMPTION_3.html"
keywords: ["do", "if", "case", "class", "data", "types", "internal-table", "ABENMEMORY", "CONSUMPTION"]
---

When reference variables are assigned, only the references are copied. After an assignment, source and target variables point to the same data object or instance of a class (more precisely, to their headers).

Sharing also takes place internally in [assignments](ABENASSIGNMENT_GLOSRY.html) between similar [strings](ABENSTRING_GLOSRY.html) and between similar [internal tables](ABENINTERNAL_TABLE_GLOSRY.html) whose line types do not themselves contain table types. This means that the actual data values are not copied at first. Only the necessary administration entries are copied, so that the target object refers to the same data as the source object.

For strings, a new internal reference is created that points to the existing string header. For internal tables, a new internal reference and a new table header, which refers to the existing [table body](ABENTABLE_BODY_GLOSRY.html), are created.

Sharing between dynamic data objects is, of course, only active for as long as multiple dynamic data objects are involved, or more than one internal reference refers to the data values. As soon as only one internal reference refers to the data, sharing no longer takes place. Such cases occur, for example, if involved dynamic data objects only exist during the lifetime of a procedure, or if they are recorded as anonymous data objects by the Garbage Collector.

Active sharing between existing dynamic data objects is canceled when either the source object or target object is accessed in change mode (copy-on-write semantics). The actual copy process for the data values then takes place and the references and headers are changed accordingly.

The following figure illustrates the sharing of dynamic data objects. The upper section shows how strings are shared on the left and how internal tables are shared on the right side. The lower section shows how sharing is canceled when the source or target object is changed.

-   Table sharing usually only occurs for tables whose line types do not themselves contain table types. Otherwise, the prerequisite for "similar tables" is kept deliberately vague. Tables are similar if they at least have the exact same table type, that is the same line type, table category, and keys. There are other table combinations that are also considered to be similar and in which sharing can take place. However, this is an internal optimization measure that may be changed between releases. Therefore, programming should never be based on when table sharing occurs and when it is canceled again.
-   Sharing also occurs during [pass by value](ABENPASS_BY_VALUE_GLOSRY.html) to procedures.
-   Sharing is not canceled by changes to the objects for reference variables that point to the same data object or the same instance of a class.
-   Another type of sharing is the [initial value sharing](ABENINITIAL_VALUE_SHARING_GLOSRY.html) of [boxed components](ABENBOXED_COMPONENT_GLOSRY.html) for which the initial value is stored only once per AS instance.
-   Sharing is also supported when accessing [shared objects](ABENSHARED_OBJECTS_GLOSRY.html), for as long as an [area instance version](ABENAREA_INSTANCE_VERSION_GLOSRY.html) is bound to the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html) using an [area handle](ABENAREA_HANDLE_GLOSRY.html).

abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html abenmemory\_consumption.html