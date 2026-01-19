---
title: "ABAPSHIFT_SHORTREF"
description: |
  ABAPSHIFT_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSHIFT_SHORTREF.htm"
abapFile: "ABAPSHIFT_SHORTREF.html"
keywords: ["insert", "do", "if", "ABAPSHIFT", "SHORTREF"]
---

[Reference](ABAPSHIFT.html)

`SHIFT dobj [\ \{\ [\ \{BY num PLACES\}\ |\ \{UP TO substring\}\ ]\                   [LEFT|RIGHT]\ [CIRCULAR]\ \}\             |\ \{\ \{LEFT DELETING LEADING\}\               |\ \{RIGHT DELETING TRAILING\} mask\}\ ]\             [IN \{CHARACTER|BYTE\} MODE].`

Moves characters or bytes in a character string or byte string `dobj`.

-   [`BY num PLACES`](ABAPSHIFT_PLACES.html)\\
    Moves the characters or bytes by `num`.
-   [`UP TO substring`](ABAPSHIFT_PLACES.html)\\
    Moves the characters or bytes up to the substring specified in `substring`.
-   [`[LEFT|RIGHT]\ [CIRCULAR]`](ABAPSHIFT_DIRECTION.html)\\
    Moves the characters or bytes to the left or right. `CIRCULAR` inserts characters pushed out of the screen on the other side.
-   [`\{LEFT DELETING LEADING\}|\{RIGHT DELETING TRAILING\} mask`](ABAPSHIFT_DELETING.html)\\
    Moves the characters or bytes by one position to the left or the right as long as the content of the first or last position in `dobj` is contained in `pattern`.
-   [`IN \{CHARACTER|BYTE\} MODE`](ABAPSHIFT.html)\\
    Specifies character string or byte string processing.

abenabap.html abenabap\_reference.html abenabap\_shortref.html