---
title: "ABAPSHIFT_DIRECTION"
description: |
  ABAPSHIFT_DIRECTION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPSHIFT_DIRECTION.htm"
abapFile: "ABAPSHIFT_DIRECTION.html"
keywords: ["insert", "do", "if", "data", "ABAPSHIFT", "DIRECTION"]
---

`... [LEFT|RIGHT]\ [CIRCULAR] ...`

[1. `... LEFT|RIGHT`](#ABAP_ADDITION_1@3@)

[2. `... CIRCULAR`](#ABAP_ADDITION_2@3@)

The shift direction is defined using `LEFT` or `RIGHT`. If neither of the additions is specified, `LEFT` is used implicitly. If the data object `dobj` is a string and the addition `CIRCULAR` is not specified, it is truncated when shifted to the left by the places shifted and extended accordingly when shifted to the right.

The content of text field `text` is moved one place to the right, which means that the digit *9* is lost. The data type `string` would extend the string by one space.

Using the addition `CIRCULAR`, the content shifted from the data object to the left or to the right, is inserted again in the places that become available on the opposite side. If the addition `CIRCULAR` is specified, data objects of the type `string` or `xstring` are not truncated or extended. Instead, they are handled like data objects of fixed length.

This example is a variant of the second example under [`places`](ABAPSHIFT_PLACES.html). Using the addition `CIRCULAR` makes the result *you know I know*.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(text) = '0123456789'. \\nSHIFT text RIGHT. \\nout->write( text ). \\n\\ \\nout->display( ). DATA text TYPE string VALUE \`I know you know \`. \\n\\ \\nSHIFT text UP TO 'you' LEFT CIRCULAR. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html abapshift.html