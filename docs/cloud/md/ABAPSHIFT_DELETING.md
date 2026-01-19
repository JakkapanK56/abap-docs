---
title: "ABAPSHIFT_DELETING"
description: |
  ABAPSHIFT_DELETING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPSHIFT_DELETING.htm"
abapFile: "ABAPSHIFT_DELETING.html"
keywords: ["do", "if", "case", "data", "ABAPSHIFT", "DELETING"]
---

`... \{\ \{LEFT DELETING LEADING\}`\\ 
    `|\ \{RIGHT DELETING TRAILING\}\ \} mask ...`

If these additions are used, the statement `SHIFT` shifts the content of `dobj` by one place to the left or the right as long as the content of the first or last place of `dobj` is contained in `mask`.

If the data object `dobj` is a string, it is truncated when it is shifted to the left but not lengthened when it is shifted to the right. This means the content of `mask` can also be moved out of a string to the right.

In character string processing, `mask` is a [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html). It is case-sensitive and any trailing blanks in `mask` are respected. If the content of the first or last place in `dobj` is not contained in `mask`, the content of `text` remains unchanged. In particular, nothing is shifted if `mask` is an empty string.

After the shift to the right, `text` contains the value *\_\_\_\_\_I know you* and keeps its length of 15 characters.

The following example removes first the trailing blank and then the leading blanks from a string. For strings without leading blanks, this sequence of statements can be used to remove trailing blanks.

DATA text TYPE string VALUE \`I know you know\`. \\n\\ \\nSHIFT text RIGHT DELETING TRAILING 'no kw'. DATA txt TYPE string VALUE \`XXXXX \`. \\n\\ \\nSHIFT txt RIGHT DELETING TRAILING \` \`. \\nSHIFT txt LEFT DELETING LEADING \` \`. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html abapshift.html