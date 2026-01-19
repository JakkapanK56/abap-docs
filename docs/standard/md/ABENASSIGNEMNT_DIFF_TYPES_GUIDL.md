---
title: "ABENASSIGNEMNT_DIFF_TYPES_GUIDL"
description: |
  ABENASSIGNEMNT_DIFF_TYPES_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENASSIGNEMNT_DIFF_TYPES_GUIDL.htm"
abapFile: "ABENASSIGNEMNT_DIFF_TYPES_GUIDL.html"
keywords: ["do", "if", "data", "types", "ABENASSIGNEMNT", "DIFF", "TYPES", "GUIDL"]
---

ABAP allows a direct assignment between data objects with different data types. There must be a suitable conversion rule and the content of the source field must be a meaningful value for the data type of the target field. If a suitable conversion rule is not found or the content of the source field is not suitable, an exception is raised.

Such conversions take place not only in direct assignments, but also in many operand positions and in particular in arithmetic calculations, if the specified operand does not have the data type expected at the position.

**Avoid conversions**

Where possible, assignments should be performed between compatible data objects with the same data type.

Type conversions incur additional runtime and may not always have the result intended by the developer. Therefore, conversions should only be performed between data objects with different data types if there is no other choice. In particular, conversions should be avoided where the [conversion rules](ABENUSE_CONVERSION_RULES_GUIDL.html) produce unexpected results.

The following source code shows an arithmetic calculation involving two unnecessary conversions. First the text field literal '1' has to be converted to the calculation type i, then the result of the calculation has to be converted from type i to data type n. Such conversions produce significant increases in runtime.

The following source code shows how code can be improved compared to the previous example, so that no conversions are necessary.

DATA index TYPE n LENGTH 4. \\n... \\nDO ... TIMES. \\n index = sy-index - '1'. \\n ... \\nENDDO. DATA index TYPE i. \\n... \\nDO ... TIMES. \\n index = sy-index - 1. \\n ... \\nENDDO. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abenassignment\_access\_gdl.html