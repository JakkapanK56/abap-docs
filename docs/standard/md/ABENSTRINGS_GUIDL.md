---
title: "ABENSTRINGS_GUIDL"
description: |
  ABENSTRINGS_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTRINGS_GUIDL.htm"
abapFile: "ABENSTRINGS_GUIDL.html"
keywords: ["if", "case", "data", "types", "internal-table", "ABENSTRINGS", "GUIDL"]
---

Strings are [dynamic data objects](ABENUSE_DYN_DATA_OBJECT_GUIDL.html) of variable length. There are text strings of the `string` data type and byte strings of the `xstring` data type, in which character strings or byte strings can be saved.

In contrast to text and byte fields of a fixed length (`c`, `x` data types), the length of strings automatically adapts to the content. Other data types, such as `n`, `d`, and `t`, are also handled as text fields in many operand positions. Strings are deep data objects that are internally managed by references. For this, the following additional memory is required:

In the case of assignments between strings, sharing takes effect. This means that only the internal reference is copied first. Sharing is canceled if the source or target object is accessed for modification.

**Use strings in character string and byte string processing**

Use strings rather than fixed length fields for the internal saving and processing of character strings and byte strings.

Strings are more flexible than fields of a fixed length and usually help to save memory space, because no unnecessary space is occupied by blanks or zeros, and because sharing is implemented for assignments. Furthermore, trailing blanks are always significant in text strings. Text fields simply ignore trailing blanks in many operand positions (but not in all), which may be quite confusing at times.

In the following cases, fields of a fixed length should be used instead of strings:

The following source code shows an internal table for saving an HTML page whose line type is a text field with a fixed length of 255. Most of the memory space of the internal table, however, is probably wasted on blanks.

The following source code shows the above example but uses text strings. The memory space gained should outweigh the additional administration effort considerably. As an alternative to using an internal table, the HTML page can also be concatenated in a single text string; however, this makes it more difficult to read, for example, in the ABAP Debugger.

-   Strings whose length is less than approximately 30 characters or 60 bytes require between approximately 10 and 40 bytes of additional memory, depending on the string length.
-   For longer strings, the additional memory requirement is approximately 50 bytes, irrespective of the string length.

-   The length of the field is critical, for example, for templates or for interfaces to screen fields.
-   Despite [sharing](ABENADMIN_COSTS_DYN_MEM_OBJ_GUIDL.html), the additional administration work outweighs the benefits which can often be the case for very short strings. If it is obvious that a certain length is never exceeded, short fields of a fixed length can also be used.
-   Structures that only contain character-like components should be handled like a single text field. This is not possible for structures that contain text strings.

TYPES html\_line TYPE c LENGTH 255. \\nDATA html\_table TYPE TABLE OF html\_line. \\nAPPEND '' TO html\_table. \\n... \\nAPPEND '' TO html\_table. \\n... \\nAPPEND '' TO html\_table. \\nAPPEND '' TO html\_table. DATA html\_table TYPE TABLE OF string. \\nAPPEND \`\` TO html\_table. \\n... \\nAPPEND \`\` TO html\_table. \\n... \\nAPPEND \`\` TO html\_table. \\nAPPEND \`\` TO html\_table. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abendata\_type\_obj\_gdl.html