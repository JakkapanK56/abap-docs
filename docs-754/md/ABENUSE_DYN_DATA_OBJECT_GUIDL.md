---
title: "Using Dynamic Data Objects - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuse_dyn_data_object_guidl.htm"
abapFile: "abenuse_dyn_data_object_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) →  [Dynamic Programming Techniques](ABENDYNAMIC_PROG_TECHNIQUE_GUIDL.md) → 

Using Dynamic Data Objects

Background

Dynamic data objects are a subgroup of [dynamic memory objects](ABENMEM_CONS_DYN_MEM_OBJ_GUIDL.md "Guideline") and simply consist of:

-   Strings

-   Internal tables

The data type statically defines all properties for dynamic data objects, apart from memory consumption. Although the objects are managed internally using references, they are addressed by their names and value semantics applies. This means the referenced internal reference is always used for access.

Rule

Use appropriate dynamic data objects

To store dynamic data sets transiently when using dynamic data objects, always select the type that best corresponds to the content and the required access:

-   Strings for data that cannot be divided

-   Internal tables for data that can be divided

To avoid memory bottlenecks for large data sets, you might need to use other procedures as well.

Details

When using dynamic data objects, selecting the type is a key decision. The general rule is:

-   Data that can be handled as one piece is stored as a character string or byte string (string or xstring data type).

-   Structured data or data that can be sensibly divided into individual sections is stored as internal table rows.

However, if you need to store a very large data set as dynamic data objects, different aspects must be considered. String and xstring data objects must be stored as one piece in the memory, whereas the content of internal tables is stored in blocks. This is more likely to cause resource bottlenecks when strings are used. Even if sufficient [memory](ABENMEM_CONS_DYN_MEM_OBJ_GUIDL.md "Guideline") space is available, the memory cannot handle a string of the requested length, due to fragmentation. In these cases, it makes more sense to store the data as an internal table instead of storing the data in a string as one piece.

The EXPORT statement for storing data in a cluster supports both storage types, for example: EXPORT ... TO DATA BUFFER stores the cluster in a single long byte string, whereas EXPORT ... TO INTERNAL TABLE distributes the cluster across numerous rows of an internal table. The latter possibility (EXPORT ... TO INTERNAL TABLE) is more secure (for the reason explained above), if the cluster needs to contain a very large data set.

Note

Strings and internal tables are predefined (or built in) in the ABAP language as data types and the corresponding access statements. In other programming languages, however, they are often implemented as libraries (such as string classes and container classes). In ABAP, it is usually [neither necessary nor useful](ABENOBJ_ORIENTED_GUIDL.md "Guideline") to define specific classes for storing strings or table-like data. However, in rare cases, it may be useful to wrap internal tables in classes, to release more [memory](ABENADMIN_COSTS_DYN_MEM_OBJ_GUIDL.md "Guideline") when data is deleted.
