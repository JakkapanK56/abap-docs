---
title: "ABENDOBJ_ITAB"
description: |
  ABENDOBJ_ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDOBJ_ITAB.htm"
abapFile: "ABENDOBJ_ITAB.html"
keywords: ["select", "data", "types", "internal-table", "ABENDOBJ", "ITAB"]
---

Internal tables provide a means of taking variable data from a fixed structure and storing it in the working memory in ABAP. An internal table is a data object that contains any lines with any data type whose total is not defined statically. The data type of an internal table is a table type. As well as the line type, the table type also defines the [table category](ABENTABLE_CATEGORY_GLOSRY.html) and the [table key](ABENTABLE_KEY_GLOSRY.html).

Internal tables offer dynamic arrays and remove the task of program-driven dynamic memory management from the programmer (see [Memory Consumption of Deep Data Objects](ABENMEMORY_CONSUMPTION.html)). A particularly important application for internal tables is for storing and formatting data from a database table within a program. In conjunction with [structures](ABENDATA_OBJECTS_STRUCTURE.html), they are also the best way of defining complicated data structures in an ABAP program.

-   [itab - Table Type](ABENITAB_DATA_TYPE.html)
-   [itab - Selection of the Table Category](ABENITAB_CAT.html)
-   [itab - Table Key](ABENITAB_KEY.html)
-   [itab - Accessing Internal Tables](ABENITAB_ACCESS.html)
-   [itab - Initial Memory Requirement](ABENITAB_INITIAL_MEM_REQ.html)
-   [itab - Line-Based Administration Costs](ABENITAB_KEY_MEMORY.html)

-   For information about the maximum size of an internal table, see [Maximum Size of Dynamic Data Objects](ABENMEMORY_CONSUMPTION_2.html).
-   For information about obsolete headers of internal tables, see [Internal Tables with Header](ABENITAB_HEADER_LINE.html).

abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html