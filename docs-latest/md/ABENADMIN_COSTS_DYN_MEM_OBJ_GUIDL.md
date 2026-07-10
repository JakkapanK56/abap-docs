---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENADMIN_COSTS_DYN_MEM_OBJ_GUIDL.html"
abapFile: "ABENADMIN_COSTS_DYN_MEM_OBJ_GUIDL.html"
type: "abap-reference"
---

## Background

Dynamic memory objects provide flexibility, but this comes at a price. The administration of these objects incurs internal costs, which are reflected in increased memory consumption, and in the worst case possibly far too high.

The total memory requirements of a dynamic memory object comprise the requirements of the objects themselves and the requirements of the administration data. The administration data consists of the reference, with a fixed size of 8 bytes, and a header that contains the address of the data itself and additional administration information. The reference initially points to a header and not directly to the object. The size of the header is itself dynamic and depends on the category of memory object as follows:

-   *String headers* of strings whose length is less than approximately 30 characters or 60 bytes require between 10 and 40 bytes approximately, depending on the string length. For longer strings, the header requires approximately 50 bytes, regardless of the string length.
-   *Table headers* require approximately 150 bytes (in 32 bit architecture) or approximately 200 bytes (in 64 bit architecture).
-   *Object headers* of anonymous data objects and instances of classes require approximately 30 bytes, regardless of the object.

The headers are created when dynamic data objects are provided with content or when objects are created. When a dynamic data object (a string or internal table) is initialized, only the content itself is deleted, while the header is retained to be used again. Only the statement `FREE` deletes (some) table headers that are too big. When it deletes an object, Garbage Collector also deletes the object header.

In internal tables, the administration data in the header is mostly independent of the number of rows but there can be additions to the data such as index or hash management. This memory is not created in the table header but in parallel to the table body. Depending on the table category, every table has at least one primary index (standard tables, sorted tables) or hash management (hashed tables). The costs are:

-   6 bytes on average per each table line for the primary index.
-   18 bytes per table line on average for the hash management, provided that the table is not accessed using the `DELETE` or `SORT` statements. If one of these access types occurs, an average of 30 bytes is required per table line.

With each additional secondary table key, the [memory](ABENSECONDARY_KEY_GUIDL.md) requirement increases by the memory needed for secondary key management (secondary index or secondary hash management).

## Rule

**Consider the ratio of administration and application data**

When using dynamically managed memory objects, it should remembered that memory is required for administration purposes, in addition to memory for the actual data. The size of the administrative memory should be relatively small compared to the application data.

## Details

Memory management of dynamic memory objects is generally invisible for developers and cannot be controlled by developers. However, it is important to consider administration costs during the design and development phases, to ensure that the costs do not become disproportionately high compared to the actual data content. For internal tables, for example, the administration data consists of a part that is mainly independent of the number of lines and a part for each line. Consequently, tables with only a few lines and tables with very narrow lines are unfavorable. A sorted table of integers, for instance, always uses more memory for its administrative information than for the actual application data. Hashed tables require even more administration for each line.

In addition, the *fill level* of complex data objects assumes a significant role. If the application data is only stored in a small number of large memory objects, the administrative part usually does not play a role. However, if complex data objects (structures, internal tables) have a lot of deep components, care must be taken: For example, a disproportionate amount of memory space is lost for tables with a lot of relatively small strings or for nested tables containing relatively small tables. We distinguish the following three cases:

-   **Complex data objects with a sparse fill level**
-   These data objects contain a lot of deep components and most of them are initial.
-   **Complex data objects with a duplicative fill level**
-   These data objects contain a lot of deep components and most of them point to the same application data by means of a reference variable or sharing.
-   **Complex data objects with a low fill level**
-   These data objects contain a lot of deep components that refer to different objects, strings, or internal tables, which only contain a small amount of application data or are empty.

Deep data objects with a fill level that is sparse or duplicative can usually be used without problems. But for complex data objects with a low fill level, a disparity between administration data and application data can easily occur. ABAP is inappropriate for large-scale use of data objects with a low fill level.

At a low dataset level, class wrapping can be considered as an alternative to internal tables. This is because the extra costs for objects are comparatively low and objects can be completely deleted from the memory (unlike dynamic data objects). This is an exception to the rule that [dynamic data objects](ABENUSE_DYN_DATA_OBJECT_GUIDL.md) should be used wherever possible.

## Hint

Besides the ratio of administration data to application data, the ratio of the [memory allocated](ABENINITIAL_MEMORY_REQU_GUIDL.md) for application data and the memory actually used is also interesting for internal tables.

## Example

The executable example [`CL_DEMO_MEMORY_USAGE`](ABENMEMORY_USAGE_ABEXA.md) demonstrates the administration costs of deep components with low data content.
