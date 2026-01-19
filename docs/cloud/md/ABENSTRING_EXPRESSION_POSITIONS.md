---
title: "ABENSTRING_EXPRESSION_POSITIONS"
description: |
  ABENSTRING_EXPRESSION_POSITIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSTRING_EXPRESSION_POSITIONS.htm"
abapFile: "ABENSTRING_EXPRESSION_POSITIONS.html"
keywords: ["do", "if", "method", "data", "ABENSTRING", "EXPRESSION", "POSITIONS"]
---

Character-like expression positions are [read positions](ABENREAD_POSITION_GLOSRY.html) where [character-like data objects](ABENCHARLIKE_DATA_OBJECT_GLOSRY.html), [constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html), [string expressions](ABENSTRING_EXPRESSION_GLOSRY.html), [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html), and [built-in functions](ABENBUILTIN_FUNCTION_GLOSRY.html) can be specified, as well as [functional method calls](ABENFUNCTIONAL_METHOD_CALL_GLOSRY.html) and [method chainings](ABENMETHOD_CHAINING_GLOSRY.html) whose return value has a [character-like data type](ABENCHARLIKE_DATA_TYPE_GLOSRY.html). The following character-like expression positions exist:

Use of a string expression `` `(` && sub && `)+` `` to form a regular expression in the statement [`FIND`](ABAPFIND.html) to make it possible to find groups of a substring `sub`.

-   Operand positions in [string expressions](ABAPCOMPUTE_STRING.html)
-   Character-like arguments in [processing functions](ABENPROCESS_FUNCTIONS.html)
-   Character-like arguments in [description functions](ABENDESCRIPTIVE_FUNCTIONS.html)
-   Operand `comp` of the statement
-   [`ASSIGN COMPONENT comp OF STRUCTURE`](ABAPASSIGN_DYNAMIC_COMPONENTS.html)
-   Regular expression `regex` in the statements
-   [`FIND ... PCRE|REGEX regex ... IN ...`](ABAPFIND_PATTERN.html)\\ \\n[`REPLACE ... PCRE|REGEX regex ... IN ...`](ABAPREPLACE_PATTERN.html)
-   Search pattern `substring` in the statements
-   [`FIND ... SUBSTRING substring ... IN ...`](ABAPFIND_PATTERN.html)\\ \\n[`REPLACE ... SUBSTRING substring ... IN ...`](ABAPREPLACE_PATTERN.html)
-   Operand `dobj` in the statement
-   [`FIND ... IN dobj ...`](ABAPFIND.html)
-   Operand `new` in the statement
-   [`REPLACE ... WITH new ...`](ABAPREPLACE.html)\\ \\n[`REPLACE ... IN TABLE ... WITH new ...`](ABAPREPLACE_ITAB.html)
-   Operand `substring` in the statement
-   [`SHIFT ... UP TO substring`](ABAPSHIFT_PLACES.html)
-   Operand `mask` in the statement
-   [`SHIFT ... DELETING ... mask`](ABAPSHIFT_DELETING.html)
-   Operands `dobj` and `sep` in the statement
-   [`SPLIT dobj AT sep INTO ...`](ABAPSPLIT.html)
-   Operand `text` in the statement
-   [`CONVERT text INTO SORTABLE CODE ...`](ABAPCONVERT_TEXT.html)
-   Operands `text2` and `text2` in the statement
-   [`OVERLAY ... WITH text2 USING mask`](ABAPOVERLAY.html)
-   Operand `mask` in the statement
-   [`TRANSLATE ... USING mask`](ABAPTRANSLATE.html)
-   Operand `sub` in the statement
-   [`ASSERT ... SUBKEY sub ...`](ABAPASSERT.html)
-   `LOG-POINT ... SUBKEY sub ...`
-   Operands `text` and `dobj1` to `dobj4` in the statements
-   `MESSAGE text ...`\\
    `MESSAGE ... [WITH dobj1 ... dobj4](ABAPMESSAGE.html)`

DATA: text TYPE string, \\n sub TYPE string. \\n\\ \\nFIND PCRE \`(\` && sub && \`)+\` IN text. abenabap.html abenabap\_reference.html abenabap\_syntax.html abenabap\_statements.html abenoperand\_positions.html abenexpression\_positions.html abenexpression\_positions\_read.html