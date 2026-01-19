---
title: "ABENCHAINED_STATEMENTS"
description: |
  ABENCHAINED_STATEMENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCHAINED_STATEMENTS.htm"
abapFile: "ABENCHAINED_STATEMENTS.html"
keywords: ["update", "do", "if", "data", "ABENCHAINED", "STATEMENTS"]
---

`initial_part: remaining_part1,                remaining_part2,                ... .`

Consecutive statements that have the same initial part can be combined into in a single chained statement as follows:

When the syntax is checked and the program is executed, a chained statement is handled in the same way as the corresponding sequence of individual ABAP statements.

[Only use chained statements where appropriate](ABENCHAINED_STATEMENTS_GUIDL.html)

Typical use of a chained statement:

DATA: BEGIN OF struc,\\ 
        col1 TYPE c LENGTH 4,\\ 
        col2 TYPE c LENGTH 4,\\ 
      END OF struc.

The complete syntax of the four statements is:

DATA BEGIN OF struc.\\ 
DATA   col1 TYPE c LENGTH 4.\\ 
DATA   col2 TYPE c LENGTH 4.\\ 
DATA END OF struc.

Chained statement in which more than just the keyword is separated:

The complete syntax of the three statements is:

CALL FUNCTION func EXPORTING para = '1'.\\ 
CALL FUNCTION func EXPORTING para = '2'.\\ 
CALL FUNCTION func EXPORTING para = '3'.

Incorrect use of a chained statement in ABAP SQL.

This code fragment does not represent an individual statement that updates the discount and phone number of customer 00017777. Instead, there are two statements: the first changes the discount for all customers, and the second changes the phone number of customer 00017777.

Chained statements without commas:

The colons are all handled like blanks.

The following syntax is correct but meaningless:

Both chained statements represent:

And the effect is the same as:

-   The identical initial part `initial_part` is specified once and closed with a colon (`:`).
-   The remaining parts `remaining_part1`, `remaining_part2`, ... are then listed separately, divided by commas (`,`), and closed with a period (`.`).

-   The identical starting parts are not limited to the keyword.
-   When using chained statements, it must be ensured that no syntactically correct statements with incorrect behavior are created by mistake. The risk of this is especially high for more complex statements, as well as when using [expressions](ABENEXPRESSION_GLOSRY.html) or function calls where chained statements should be avoided all together.
-   If further colons are listed after the first colon of a chained statement, they are handled like blanks.

CALL FUNCTION func EXPORTING para = : '1', '2', '3'. UPDATE scustom SET: discount = '003', \\n telephone = '0621/444444' \\n WHERE id = '00017777'. DATA: :num :TYPE :i. \\nADD :1 TO :num. \\nnum :+= :1. num: = 5, = 6, = 7. \\n\\ \\nnum =: 5, 6, 7. num = 5. \\nnum = 6. \\nnum = 7. num = 7. abenabap.html abenabap\_reference.html abenabap\_syntax.html abenabap\_statements.html