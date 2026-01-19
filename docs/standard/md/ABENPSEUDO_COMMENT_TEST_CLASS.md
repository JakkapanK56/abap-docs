---
title: "ABENPSEUDO_COMMENT_TEST_CLASS"
description: |
  ABENPSEUDO_COMMENT_TEST_CLASS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPSEUDO_COMMENT_TEST_CLASS.htm"
abapFile: "ABENPSEUDO_COMMENT_TEST_CLASS.html"
keywords: ["do", "if", "case", "class", "ABENPSEUDO", "COMMENT", "TEST", "CLASS"]
---

`... "#AU Risk_Level Critical|Dangerous|Harmless`

`... "#AU Duration Short|Medium|Long`

The string `"#AU` in the statement [`CLASS`](ABAPCLASS_DEFINITION.html) with the addition [`FOR TESTING`](ABAPCLASS_FOR_TESTING.html) defines a [pseudo comment](ABENPSEUDO_COMMENT_GLOSRY.html) for defining a test property of a [test class](ABENTEST_CLASS_GLOSRY.html).

Pseudo comments are case-sensitive. Any deviations from the syntax produce a warning when tests are performed.

-   Real additions are now available for the statement [`CLASS ... FOR TESTING`](ABAPCLASS_FOR_TESTING.html) for defining test properties. These additions should be used instead of the pseudo comments. This makes pseudo comments for test classes obsolete. Existing pseudo comments are not ignored, but should no longer be used.
-   To specify both test properties for a test class, the `CLASS` statement must be spread across at least two lines.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abensyntax\_obsolete.html abenpseudo\_comments\_obsolete.html