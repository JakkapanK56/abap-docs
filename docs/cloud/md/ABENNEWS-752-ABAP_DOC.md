---
title: "ABENNEWS-752-ABAP_DOC"
description: |
  ABENNEWS-752-ABAP_DOC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-752-ABAP_DOC.htm"
abapFile: "ABENNEWS-752-ABAP_DOC.html"
keywords: ["do", "if", "case", "ABENNEWS", "752", "ABAP", "DOC"]
---

[1\. Documentation Links](#ABAP_MODIFICATION_1@4@)

[2\. Further Changes](#ABAP_MODIFICATION_2@4@)

The new syntax `\{@link ...\}` makes it possible to link to other documentation of repository objects (or its components) in [ABAP Doc comments](ABENABAP_DOC_COMMENT_GLOSRY.html).

The following changes have also been made to [ABAP Doc comments](ABENABAP_DOC_COMMENT_GLOSRY.html):

-   Opening and closing tags no longer need to be specified in lowercase letters.
-   The restriction to 7 bit ASCII characters no longer applies. An ABAP Doc comment can now contain any 16 bit Unicode characters.
-   `<br>` or `<br/>` can be used to specify a line break. `<br></br>` should no longer be used.
-   The special characters `@` and `<` now only need to be escaped when they are placed directly in front of another character.
-   Lists can now be nested.
-   The tags `<p>`, `<ul>`, or `<ol>` can now be placed within `<h1>`, `<h2>`, `<h3>`, `<p>`, `<em>`, or `<strong>` tags.
-   Text can now be specified directly within `<ol>` and `<ul>` tags.
-   In the `<ol>` tag, the attributes `reversed`, `start`, and `type` can now be specified with their traditional HTML meaning.
-   The attributes specified in tags are now checked by the syntax check.

abenabap.html abennews.html abennews-75.html abennews-752.html