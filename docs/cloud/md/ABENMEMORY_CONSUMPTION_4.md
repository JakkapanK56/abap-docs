---
title: "ABENMEMORY_CONSUMPTION_4"
description: |
  ABENMEMORY_CONSUMPTION_4 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENMEMORY_CONSUMPTION_4.htm"
abapFile: "ABENMEMORY_CONSUMPTION_4.html"
keywords: ["do", "if", "case", "class", "data", "types", "internal-table", "ABENMEMORY", "CONSUMPTION"]
---

If data objects of [complex data types](ABENCOMPLEX_DATA_TYPE_GLOSRY.html) have many deep components, which often, for example, applies to internal tables with a deep line type for example, the administrative costs in the form of memory for references and headers must be prevented from growing disproportionately large compared to the actual data content.

For complex data objects with relatively little data content, three basic cases can be distinguished:

Deep data objects with a fill level that is sparse, duplicative, and not too low can usually be used without any concerns.

For deep data objects with a sparse fill level and few duplicates, it is vital to consider the memory requirements for references and headers. Unlike other programming languages, ABAP is not suitable for the massive use of such data objects. If the dataset is low, a class wrapper can also be used as an alternative to internal tables, since the additional costs for objects are comparatively low.

An example of a duplicative data object with a low fill level is an internal table whose line type itself is table-like or contains table-like components. Even if the inner internal tables are initialized after previous use, they still occupy memory for reference and header, which can cause considerable memory requirements for little or no work data in the case of a large outer internal table.

See Deep Data Objects, Memory Usage.

1.  **Complex data objects with a sparse fill level**
2.  A complex deep data object is sparsely populated if it contains many deep components of which most are initial. The memory requirement of such a deep initial component like this is 8 bytes for as long as the component does not yet refer to a header.
3.  **Complex data objects with a duplicative fill level**
4.  A complex deep data object has a duplicative fill level if it contains many deep components of which most refer to the same data. Such components share the dynamic memory and only contribute to the memory requirement of their references. For [dynamic data objects](ABENDYNAMIC_DATA_OBJECT_GLOSRY.html), this is achieved by [sharing](ABENMEMORY_CONSUMPTION_3.html).
5.  **Complex data objects with a low fill level**
6.  A complex deep data object has a low fill level if it contains many deep components that refer to different objects, strings, or internal tables, but the objects only require very little memory or are empty.

abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html abenmemory\_consumption.html