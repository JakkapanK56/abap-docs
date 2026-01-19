---
title: "ABENSHARING_GLOSRY"
description: |
  ABENSHARING_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSHARING_GLOSRY.htm"
abapFile: "ABENSHARING_GLOSRY.html"
keywords: ["do", "if", "data", "types", "internal-table", "ABENSHARING", "GLOSRY"]
---

When [assignments](ABENASSIGNMENT_GLOSRY.html) are made between [dynamic data objects](ABENDYNAMIC_DATA_OBJECT_GLOSRY.html) ([strings](ABENSTRING_GLOSRY.html) and [internal tables](ABENINTERNAL_TABLE_GLOSRY.html) of the same type) and if these data types are [passed by value](ABENPASS_BY_VALUE_GLOSRY.html), for performance reasons, only the required internal administrative entries for the string or [table body](ABENTABLE_BODY_GLOSRY.html) are passed ([table sharing](ABENTABLE_SHARING_GLOSRY.html) possible only if the [line type](ABENROW_TYPE_GLOSRY.html) itself does not contain any [table types](ABENTABLE_TYPE_GLOSRY.html)). Sharing is kept until one of the data objects involved is accessed and changed. At this point, the actual copy process takes place. See also [initial value sharing](ABENINITIAL_VALUE_SHARING_GLOSRY.html).

[**\-> More about**](ABENMEMORY_CONSUMPTION_3.html)

ABENABALA\_GLOSSARY.html