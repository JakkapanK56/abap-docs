---
title: "ABAPSHIFT"
description: |
  ABAPSHIFT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPSHIFT.htm"
abapFile: "ABAPSHIFT.html"
keywords: ["delete", "do", "if", "method", "data", "ABAPSHIFT"]
---

``SHIFT dobj [\ \{[[`places`](ABAPSHIFT_PLACES.html)][[`direction`](ABAPSHIFT_DIRECTION.html)]\}\ |\ [`deleting`](ABAPSHIFT_DELETING.html)\ ]``\\ 
           `[IN \{CHARACTER|BYTE\} MODE].`

[`... IN \{CHARACTER|BYTE\} MODE`](#ABAP_ONE_ADD@1@)

This statement shifts the content of a variable `dobj`. In [`places`](ABAPSHIFT_PLACES.html), the number of places to be shifted can be specified and in [`direction`](ABAPSHIFT_DIRECTION.html), the direction of the shift. In [`deleting`](ABAPSHIFT_DELETING.html), the characters to be deleted from the data object by the shift can be specified. If no additions are specified, the content is shifted to the left by one place.

By default, free places created by the shift are filled with blanks or hexadecimal 0 for data objects of fixed length, depending on the processing method. Data objects of type `string` or `xstring` are truncated by the number of shifted places when shifted to the left and lengthened by the number of shifted places when shifted to the right.

In character string processing, the trailing blanks are respected for data objects `dobj` of fixed length.

To shift a string in an operand position, [shift functions](ABENSHIFT_FUNCTIONS.html) that cover part of the functions of the statement `SHIFT` can be used.

The shortest form of the statement `SHIFT`. The content of `str` is moved one place to the left.

The optional addition `IN \{CHARACTER|BYTE\} MODE` determines whether [character string or byte string processing](ABENSTRING_PROCESSING_STATEMENTS.html) is performed. If the addition is not specified, character string processing is performed. Depending on the processing method, `dobj`, [`substring`](ABAPSHIFT_PLACES.html) and [`mask`](ABAPSHIFT_DELETING.html) must be character-like or byte-like.

Shifting a byte string one byte to the left.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(str) = \`0123456789\`. \\nSHIFT str. \\nout->write( str ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(xstr) = CONV xstring( \`AABBCCDDEEFF\` ). \\nSHIFT xstr IN BYTE MODE. \\nout->write( xstr ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html