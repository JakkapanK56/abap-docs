---
title: "ABAPAUTHORITY-CHECK_SHORTREF"
description: |
  ABAPAUTHORITY-CHECK_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPAUTHORITY-CHECK_SHORTREF.htm"
abapFile: "ABAPAUTHORITY-CHECK_SHORTREF.html"
keywords: ["if", "try", "ABAPAUTHORITY", "CHECK", "SHORTREF"]
---

[Reference](ABAPAUTHORITY-CHECK.html)

`AUTHORITY-CHECK OBJECT auth_obj [FOR USER user]\                          ID id1 \{FIELD val1\}|DUMMY                         [ID id2 \{FIELD val2\}|DUMMY]\                         ...                         [ID id10 \{FIELD val10\}|DUMMY].`

Performs an authorization check for the current user or a specified user compared with the [authorization object](ABENAUTHORIZATION_OBJECT_GLOSRY.html)\\ `auth_obj`. Either the entry in the user master record is evaluated using `FIELD` for the authorization field `id1`, ..., `id10`, or the check is skipped using `DUMMY`.

-   `FOR USER user`\\
    Checks the user entered in `user`.
-   `FIELD val1`, ..., `FIELD val10`\\
    Compares the content of `val1`, ..., `val10` with the values for the authorization field `id1`, ..., `id10` in the user master record.
-   `DUMMY`\\
    Skips the check for the authorization field `id1`, ..., `id10`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html