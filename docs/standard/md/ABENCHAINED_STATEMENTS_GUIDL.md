---
title: "ABENCHAINED_STATEMENTS_GUIDL"
description: |
  ABENCHAINED_STATEMENTS_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCHAINED_STATEMENTS_GUIDL.htm"
abapFile: "ABENCHAINED_STATEMENTS_GUIDL.html"
keywords: ["select", "update", "do", "if", "case", "try", "catch", "method", "data", "types", "exception-handling", "ABENCHAINED", "STATEMENTS", "GUIDL"]
---

Successive ABAP statements that have the same starting part can be expressed in a chained statement. A chained statement consists of the identical starting part that is specified once and that is concluded by a colon (:). Behind this colon, the remaining parts are separated by commas (,). Only the last part is concluded with a period (.). During the syntax check and the compilation, a chained statement is handled like the respective sequence of individual ABAP statements, where the shared starting part is put in front of each remaining part. The identical starting parts are not restricted to the keyword.

**Only use chained statements where appropriate**

Use chained statements mainly for declarations. They should always be used for related declarations of type `TYPES BEGIN OF ... TYPES END OF ...`.

The main motivation for using chained statements is to increase the readability of programs. Using chained statements correctly in declarations achieves this goal. In other statements, chained statements can actually decrease the readability or, in the worst case, result in incorrect program behavior. When using chained statements, only [one statement at most should be specified per program line](ABENSTATEMENT_GUIDL.html). Never span [expressions](ABENEXPRESSION_GLOSRY.html) or functional calls across multiple parts of chained statements.

**Declarations**

In complex declarations, chained statements can be used to improve readability. (However, if local declarations are too complex, this suggests an [insufficient separation of tasks](ABENPROC_VOLUME_GUIDL.html), and should not occur.) In particular, multiple chained statements can be used to group related declarations:

DATA: \\n   airplane            TYPE REF TO cl\_airplane, \\n   airplane\_attributes TYPE cl\_airplane=>airplane\_attributes. \\nDATA: \\n   airport            TYPE REF TO cl\_airport, \\n   airport\_attributes TYPE cl\_airport=>airport\_attributes. \\n...

The grouping of declarative statements that semantically represent a composite statement is even more important. For example, the declaration of structured types and data objects in ABAP is done using individual statements, whose close relationship should be expressed by a chained statement:

TYPES: \\n   BEGIN OF file, \\n     name TYPE string, \\n     owner TYPE sy-uname, \\n     creation\_date TYPE timestamp, \\n   END OF file.

For structures that copy components of another structure using the statements `INCLUDE TYPE` or `INCLUDE STRUCTURE`, this procedure cannot be used consistently because the beginning of the statement is different and therefore the chained statement must be interrupted. In any case, we [no longer recommend](ABENINCLUDING_STRUCTURES_GUIDL.html) using the statement `INCLUDE`.

**Operational Statements**

For operational statements, however, chained statements are not recommended because they do not usually result in better readability. Example:

CALL METHOD meth EXPORTING para = : '1', '2', '3'.

Here, the exploitation of the fact that the same starting parts in front of the colon are not limited to the keyword was a little overdone. The following chained statement would be easier to read:

CALL METHOD: \\nmeth EXPORTING para = '1', \\nmeth EXPORTING para = '2', \\nmeth EXPORTING para = '3'.

However, in this case the best [notation](ABENMETHOD_CALL_GUIDL.html) can manage without a chained statement anyway:

meth( '1' ). \\nmeth( '2' ). \\nmeth( '3' ).

**Unexpected Behavior**

If chained statements are not understood correctly, this can easily produce statements with correct syntax but unexpected behavior. Prominent examples are initiating statements within control structures. Here, the use of chained statements does not usually lead to the intended result.

Let us look at the following `TRY` control structure, in which the `CATCH` statements are implemented using a chained statement:

TRY. \\n     ... \\n  CATCH: cx\_1, cx\_2, cx\_3. \\n     "exception handling \\n      ... \\nENDTRY.

A reader and probably even a developer would assume that this is a `CATCH` block that handles three exceptions. In fact, the complete syntax is as follows:

TRY. \\n     ... \\n  CATCH cx\_1. \\n  CATCH cx\_2. \\n  CATCH cx\_3. \\n    "exception handling \\n     ... \\nENDTRY.

The `cx_1` and `cx_2` exceptions are indeed caught, but the corresponding `CATCH` blocks are empty. Only the third exception `cx_3` has a `CATCH` block that is not empty. The syntax that the developer presumably intended is as follows:

TRY. \\n    ... \\n  CATCH cx\_1 cx\_2 cx\_3. \\n    "exception handling \\n    ... \\nENDTRY.

For the `WHEN` blocks within a `CASE` control structure, the following applies:

WHEN: a, b, c.

is not equivalent to the more probable

WHEN a OR b OR c.

The [extended program check](ABENEXTENDED_PROGRAM_CHECK_GUIDL.html) warns of empty statement blocks after `CATCH` and `WHEN`. In this way, the extended program check can be used to uncover where chained statements have been misused within `TRY` and `CASE` control structures.

Another example in which the use of chained statements can cause problems are ABAP SQL statements. Here are two examples:

The following `INTO` clause was undoubtedly meant here:

INTO (@carrid\_wa, @connid\_wa).

Even if the previous examples of the chained statements would show the semantic that is expected by the developer, such use is not recommended in any case because each reader would probably expect a different program behavior, and the readability and maintainability of the source code would be impaired considerably.

**Expressions and Function Calls**

Unfortunately, ABAP statements can be spanned across the colon in chained statements, even within expressions or function calls. The following example with correct syntax shows what can happen here, even in the simplest of cases. This example cannot be understood and nor does it produce the expected result.

DATA: itab TYPE TABLE OF i, \\n      num  TYPE i. \\n\\ \\nitab = VALUE #(: ( 1 ) ), ( 2 ) ), ( 3 ) ), ( 4 ) ). \\nnum  = itab\[: 1 \], 2 \], 3 \], 4 \]. \\n\\ \\ncl\_demo\_output=>new( \\n  )->write\_data(: \`Text1\` ), \`Text2\` ), num \\n  )->display( ).

-   The following chained statement consists of two `SELECT` statements that both supply a work area with values, and of which only the second one has a `WHERE` condition.
-   `SELECT SINGLE carrid, connid FROM spfli WHERE @carrid = '...' INTO: @carrid_wa, @connid_wa.`

-   In the following example, the seemingly single statement does not update the discount and the telephone number of the customer with the customer ID 00017777. Instead, these are in fact two statements, of which the first changes the discount for all customers and the second changes the telephone number of the customer with the customer ID 00017777.
-   `UPDATE scustom SET: discount = '003', telephone = '0621/444444' WHERE id = '00017777'.`

abenabap.html abenabap\_reference.html abenabap\_pgl.html abenstructure\_style\_gdl.html abenalternative\_spelling\_gdl.html