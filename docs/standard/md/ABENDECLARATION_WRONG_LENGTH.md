---
title: "ABENDECLARATION_WRONG_LENGTH"
description: |
  ABENDECLARATION_WRONG_LENGTH - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDECLARATION_WRONG_LENGTH.htm"
abapFile: "ABENDECLARATION_WRONG_LENGTH.html"
keywords: ["do", "if", "class", "data", "types", "ABENDECLARATION", "WRONG", "LENGTH"]
---

`... dtype(len)|dobj(len) TYPE d|f|i|t ...`

Length specifications in [declarations](ABENABAP_DECLARATIONS.html) using the statements `TYPES`, `DATA`, `STATICS`, and `CONSTANTS` and the built-in ABAP types `d`, `f`, `i`, and `t` are ignored. Only the predefined [fixed lengths](ABENBUILT_IN_TYPES_COMPLETE.html) can be specified. Lengths specified in this way produce syntax errors in classes and interfaces and syntax warnings elsewhere.

This obsolete length specification is only possible with the obsolete parenthesis syntax and not with the recommended addition `LENGTH`.

Superfluous length specifications.

Correct declarations.

DATA: f1(8) TYPE d, \\n f2(4) TYPE i. DATA: f1 TYPE d, \\n f2 TYPE i. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_declarations.html abentypes\_data\_obsolete.html