---
title: "ABENOPERANDS_SPECIFYING"
description: |
  ABENOPERANDS_SPECIFYING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENOPERANDS_SPECIFYING.htm"
abapFile: "ABENOPERANDS_SPECIFYING.html"
keywords: ["select", "do", "if", "case", "method", "data", "internal-table", "ABENOPERANDS", "SPECIFYING"]
---

There are three ways to specify the [names of operands](ABENOPERANDS_NAMES.html):

The name of the operand must be specified directly. If the name of a data object is specified, the specified name is used and not the content of the data object.

Static method call as example for a direct operand specification.

For some statements that normally expect a static specification, there is a syntactic form that allows the name of a character-like data object to be specified in parentheses at the operand position. At the time of execution, the data object must contain the actual name of the operand. It depends on the operand position, whether the name must be specified in upper case letters or is case-insensitive.

Dynamic method call as example for a dynamic operand specification.

For statements that contain lists of operands or full parts of statements, an internal table with a character-like line type can often be specified in parentheses. The table lines must then contain the tokens or the names of the individual operands.

Internal table used for dynamic token specification in ABAP SQL.

At many operand positions, the system expects character-like data objects that contain the actual names of the individual operands at the time of execution. To enable the static specification of these operands, literals must be used. It depends on the operand position, whether the name must be specified in upper case letters or is case-insensitive.

In some rare cases, there may be exceptions to these rules, where operands must be set directly in parentheses or quotation marks as literals, but no data objects can be specified. This is noted in the corresponding syntax descriptions.

The content of data object `dobj` specifies the function module to be called.

cl\_demo\_spfli=>get\_spfli( ). DATA(meth) = 'GET\_SPFLI'. \\n\\ \\nCALL METHOD cl\_demo\_spfli=>(meth). DATA itab TYPE TABLE OF string WITH EMPTY KEY. \\n\\ \\nitab = VALUE #( ( \`carrid = 'LH' AND \` ) \\n ( \`connid = '400' \` ) ). \\n\\ \\nSELECT \* \\n FROM spfli \\n WHERE (itab) \\n INTO TABLE @FINAL(result). CALL FUNCTION dobj. abenabap.html abenabap\_reference.html abenoperands.html abenoperands\_data\_objects.html