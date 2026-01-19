---
title: "ABENABAP_MESSAGE_EXIT"
description: |
  ABENABAP_MESSAGE_EXIT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_MESSAGE_EXIT.htm"
abapFile: "ABENABAP_MESSAGE_EXIT.html"
keywords: ["if", "catch", "types", "ABENABAP", "MESSAGE", "EXIT"]
---

[conversion exit](ABENCONVERSION_EXIT_GLOSRY.html) are implemented in [conversion routines](ABENCONVERSION_ROUTINE_GLOSRY.html) (function modules) `..._INPUT` and `...OUTPUT`:

-   In an `..._INPUT` function module, all messages apart from those of type *E*, *A*, or `S` raise an uncatchable exception. Messages of types *E*, *A*, and `S` behave as specified in [dialog processing](ABENABAP_MESSAGE_DIALOG.html).
-   In an `..._OUTPUT` function module, all messages apart from those of type *A* raise an uncatchable exception. Messages of type `A` behave as specified in [dialog processing](ABENABAP_MESSAGE_DIALOG.html).

abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html abenabap\_messages\_types.html