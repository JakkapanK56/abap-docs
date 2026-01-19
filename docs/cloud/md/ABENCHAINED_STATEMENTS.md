---
title: "ABENCHAINED_STATEMENTS"
description: |
  ABENCHAINED_STATEMENTS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCHAINED_STATEMENTS.htm"
abapFile: "ABENCHAINED_STATEMENTS.html"
keywords: ["if", "ABENCHAINED", "STATEMENTS"]
---

`initial_part: remaining_part1,                remaining_part2,                ... .`

Consecutive statements that have the same initial part can be combined into in a single chained statement as follows:

When the syntax is checked and the program is executed, a chained statement is handled in the same way as the corresponding sequence of individual ABAP statements.

-   The identical initial part `initial_part` is specified once and closed with a colon (`:`).
-   The remaining parts `remaining_part1`, `remaining_part2`, ... are then listed separately, divided by commas (`,`), and closed with a period (`.`).

-   The identical starting parts are not limited to the keyword.
-   When using chained statements, it must be ensured that no syntactically correct statements with incorrect behavior are created by mistake. The risk of this is especially high for more complex statements, as well as when using [expressions](ABENEXPRESSION_GLOSRY.html) or function calls where chained statements should be avoided all together.
-   If further colons are listed after the first colon of a chained statement, they are handled like blanks.

abenabap.html abenabap\_reference.html abenabap\_syntax.html abenabap\_statements.html