---
title: "ABENSEGMENT_FUNCTIONS"
description: |
  ABENSEGMENT_FUNCTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSEGMENT_FUNCTIONS.htm"
abapFile: "ABENSEGMENT_FUNCTIONS.html"
keywords: ["do", "if", "case", "try", "catch", "class", "data", "ABENSEGMENT", "FUNCTIONS"]
---

\\ ``... segment( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html) index = idx [sep|space = delim] ) ...``

This [built-in function](ABENBUILT_IN_FUNCTIONS.html) returns the occurrence of a segment of the argument `text` specified by [`index`](ABENSTRING_FUNCTIONS_VAL.html). A segment is defined by limits. The start and end of the string in `text` are the outer limits. Inner limits `delim` can be passed to `sep` or `space` as follows:

The limits are not part of the segments. If `sep` or `space` are not specified, the parameter `sep` is supplied implicitly a single blank. In both cases, specifying an empty string raises an exception of the class `CX_SY_STRG_PAR_VAL`.

If `index` is positive, the occurrences are counted from the left and if `index` is negative from the right. The values 1, 2, .... indicate the first, second, ... occurrence. The values -1, -2, .... indicate the last, last but one, ... occurrences. If the value of `index` is 0, or the specified segment does not exist, an exception of the class `CX_SY_STRG_PAR_VAL` is raised.

`delim` is a [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html) and `index` is a [numeric expression position](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) with type `i`. If `delim` has a fixed length, any trailing blanks are ignored.

The return value has the type `string`.

If the substring specified in `delim` is not found, the entire character string forms a single segment, which can only be addressed by using the values 1 or -1 for `index`.

The following function calls return *AB*, *CD*, *EF*, and *GH* respectively, and raise an exception at the end.

[String Functions, `cmax`, `cmin`, and `segment`](ABENCMAX_CMIN_FUNCTION_ABEXA.html)

`CX_SY_STRG_PAR_VAL`

-   If the parameter `sep` is supplied, the substring specified in `delim` is searched for (case-sensitive) in `text` and used as a limit. If a substring specified in `delim` occurs directly one after another in `text`, an empty segment is created, and an empty string is returned for this segment.
-   If the parameter `space` is supplied, each individual character is searched for in `delim` (case-sensitive) and this is used as a limit. If the individual characters specified in `delim` occur directly one after another in `text`, no empty segment is created, and no result is returned.

-   *Cause:* limit in `sep` is empty or the occurrence in `index` is 0 or was not found.
    *Runtime error:*\\ `STRG_ILLEGAL_PAR`

DATA result TYPE string. \\n\\ \\nDO. \\n TRY. \\n result = segment( val = 'AB\\\\brCD\\\\brEF\\\\brGH' \\n index = sy-index \\n sep = \`\\\\br\` ). \\n ... \\n CATCH cx\_sy\_strg\_par\_val. \\n EXIT. \\n ENDTRY. \\nENDDO. \\n\\ \\nDO. \\n TRY. \\n result = segment( val = 'AB CD - EF\_GH' \\n index = sy-index \\n space = \` -\_\` ). \\n ... \\n CATCH cx\_sy\_strg\_par\_val. \\n EXIT. \\n ENDTRY. \\nENDDO. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenprocess\_functions.html