---
title: "ABAPSORT_KEY"
description: |
  ABAPSORT_KEY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSORT_KEY.htm"
abapFile: "ABAPSORT_KEY.html"
keywords: ["do", "if", "case", "catch", "data", "field-symbol", "ABAPSORT", "KEY"]
---

[Short Reference](ABAPSORT_SHORTREF.html)

`... BY field1 [ASCENDING|DESCENDING]\ [AS TEXT]\         field2 [ASCENDING|DESCENDING]\ [AS TEXT]\         ...`

[1. `... ASCENDING|DESCENDING`](#ABAP_ADDITION_1@3@)

[2. `... AS TEXT`](#ABAP_ADDITION_2@3@)

When a sort key is specified using the addition `BY`, sorting is not done by field group `header`, but by the `field1 field2 ...` fields specified after it. For `field1 field2 ...`, only components of field group `header` or field groups that contain only fields of field group `header` can be specified. The sort order depends on the order in which the components `field1 field2 ...` are specified. The number of fields to be used for sorting is limited to 50.

For `field1 field2 ...`, field symbols can also be specified. If a component of the field group `header` is assigned to a field symbol when the statement is executed, sorting takes place according to the corresponding component. If no data object is assigned to a field symbol, the specification is ignored. If a different data object is assigned to a field symbol, an uncatchable exception is raised.

No [customizing includes](ABENCUSTOMIZING_INCLUDE_GLOSRY.html) may be specified for `field1 field2 ...` if they are empty.

If, after a component `field1 field2 ...`, neither of the `ASCENDING` or `DESCENDING` additions is specified, the predefined sort direction is applied. If one of the additions `ASCENDING` or `DESCENDING` is specified, it overwrites the default for this component.

Without the addition `AS TEXT` after a text-like component `field1 field2 ...`, the default is applied. If the addition `AS TEXT` is specified after a text-like component, it overwrites the default for this component. In the case of non-text-like components, `AS TEXT` cannot be specified. If `AS TEXT` is specified after a field group, the addition only affects the text-like components of this group.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenabap\_extracts\_extended.html abapsort\_extract.html