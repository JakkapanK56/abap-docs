---
title: "Deep Data Objects, Memory Consumption"
description: |
  -   The memory requirement for the reference is 8 bytes. With data and object references, this is the memory requirement of the explicitly declared reference variable. In strings, internal tables, and boxed components, an implicit reference is created internally. For as long as no dynamic memory is
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENMEMORY_CONSUMPTION_1.htm"
abapFile: "ABENMEMORY_CONSUMPTION_1.html"
keywords: ["insert", "delete", "do", "if", "class", "data", "types", "internal-table", "ABENMEMORY", "CONSUMPTION"]
---

The memory requirement for a deep data object consists of a constant memory requirement for the reference and a dynamic memory required for the header and the actual objects.

Dynamic memory (header and data) is requested:

When a deep data object is initialized using [`CLEAR`](ABAPCLEAR.html), `REFRESH` (obsolete), or [`FREE`](ABAPFREE_DATAOBJECT.html), the actual data is deleted, but the reference variables and the header of dynamic data objects are preserved. The latter is reused when another memory request is made. The memory requirement of a dynamic data object that was used once and then deleted therefore consists of the reference and the memory requirement of the header, except for boxed components. Only when using the statement `FREE` on internal tables, the table headers may also be deleted if they would take up too much memory. For static boxed components, initialization does not currently cause memory to be released. Initializing a static box in which [initial value sharing](ABENINITIAL_VALUE_SHARING_GLOSRY.html) was canceled does not delete the instance in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) but assigns its type-dependent initial value to it.

The memory requirement of the different headers is approximately as follows:

In internal tables, there are additional [line-related management costs](ABENITAB_KEY_MEMORY.html) in the header. This memory is not created in the table header but in parallel to the table body. This means that when lines are deleted, the corresponding administrative data is also deleted.

Deep Data Objects, Memory Consumption

-   The memory requirement for the reference is 8 bytes. With data and object references, this is the memory requirement of the explicitly declared reference variable. In strings, internal tables, and boxed components, an implicit reference is created internally. For as long as no dynamic memory is requested, the memory requirement for a string, internal table, or boxed component is exactly 8 bytes.
-   The dynamic memory consists of a header (string header, table header, box header, or object header) and the actual data (string, table body, substructure, anonymous data object, or class instance). The reference refers to the header, which in turn contains the address of the actual data and additional administrative information. The following figure illustrates the memory usage of deep data objects.

-   For data and object references by [creating objects](ABENCREATE_OBJECTS.html)
-   For [dynamic data objects](ABENDYNAMIC_DATA_OBJECT_GLOSRY.html) (strings and internal tables) by inserting content. For internal tables, the memory is requested in blocks, whereby the initial size of a block is the [initial memory requirement](ABENINITIAL_MEM_REQ_GLOSRY.html) that can be affected by the addition [`INITIAL SIZE`](ABAPTYPES_ITAB.html) when defining an internal table.
-   For [boxed components](ABENBOXED_COMPONENT_GLOSRY.html) by undoing the [initial value sharing](ABENINITIAL_VALUE_SHARING_GLOSRY.html).

-   For performance reasons, the memory usage of a string header depends on the length of the string. Strings with a length of less than approximately 30 characters/ or 60 bytes are referred to as short strings. The memory overhead of the string header of short strings is between approximately 10 and 40 bytes, depending on the length of the string. For all other strings, the overhead is approximately 50 bytes, regardless of the string length.
-   A table header of an internal table that dynamic memory has already been requested for is approximately 100 bytes, regardless of the line usage. For filled internal tables, approximately 50 or 100 bytes are added for pointers, depending on whether the architecture is 32 or 64-bit.
-   A box header of a boxed component always uses approximately 20 to 30 bytes.
-   An object header always uses approximately 30 bytes.

-   Deleting lines of internal tables using [`DELETE`](ABAPDELETE_ITAB.html) does not usually release any memory in the internal table, statements such as [`CLEAR`](ABAPCLEAR.html) or [`FREE`](ABAPFREE_DATAOBJECT.html) must be used to free memory in internal tables.
-   The exact memory requirement of a deep data object can be determined in the [ABAP Debugger](ABENABAP_DEBUGGER_GLOSRY.html) using the *memory consumption* function.

abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html abenmemory\_consumption.html