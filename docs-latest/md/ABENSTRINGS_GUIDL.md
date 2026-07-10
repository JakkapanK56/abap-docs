---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTRINGS_GUIDL.html"
abapFile: "ABENSTRINGS_GUIDL.html"
type: "abap-reference"
---

## Exception

In the following cases, fields of a fixed length should be used instead of strings:

-   The length of the field is critical, for example, for templates or for interfaces to screen fields.
-   Despite [sharing](ABENADMIN_COSTS_DYN_MEM_OBJ_GUIDL.md), the additional administration work outweighs the benefits which can often be the case for very short strings. If it is obvious that a certain length is never exceeded, short fields of a fixed length can also be used.
-   Structures that only contain character-like components should be handled like a single text field. This is not possible for structures that contain text strings.

## Bad Example

The following source code shows an internal table for saving an HTML page whose line type is a text field with a fixed length of 255. Most of the memory space of the internal table, however, is probably wasted on blanks.

```
TYPES html_line TYPE c LENGTH 255. 
DATA html_table TYPE TABLE OF html_line. 
APPEND '' TO html_table. 
... 
APPEND '' TO html_table. 
... 
APPEND '' TO html_table. 
APPEND '' TO html_table.
```

## Good Example

The following source code shows the above example but uses text strings. The memory space gained should outweigh the additional administration effort considerably. As an alternative to using an internal table, the HTML page can also be concatenated in a single text string; however, this makes it more difficult to read, for example, in the ABAP Debugger.

```
DATA html_table TYPE TABLE OF string. 
APPEND `` TO html_table. 
... 
APPEND `` TO html_table. 
... 
APPEND `` TO html_table. 
APPEND `` TO html_table.
```
