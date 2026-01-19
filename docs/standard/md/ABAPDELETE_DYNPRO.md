---
title: "ABAPDELETE_DYNPRO"
description: |
  ABAPDELETE_DYNPRO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDELETE_DYNPRO.htm"
abapFile: "ABAPDELETE_DYNPRO.html"
keywords: ["delete", "do", "if", "data", "ABAPDELETE", "DYNPRO"]
---

**This statement is for internal use only. \\nIt must not be used in application programs.**

`DELETE DYNPRO f.`

Deletes the `[dynpro](ABENDYNPRO_GLOSRY.html)` with the name specified in the field `f`.

The content of `f` consists of the 40 character program name and the four digit `[dynpro number](ABENDYNPRO_NUMBER_GLOSRY.html)`.

Usage of `DELETE DYNPRO`.

DATA DYNPRONAME(44) VALUE 'SAPTEST'. \\nDYNPRONAME+40 = '0100'. \\nDELETE DYNPRO DYNPRONAME. `**sy-subrc**` **Meaning** 0 The dynpro was deleted. 4 The dynpro does not exist. abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_language\_dynamic.html abenabap\_generic\_dynpro.html abengeneric\_dynpro\_internal.html