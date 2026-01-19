---
title: "ABENNAMES_ESCAPING"
description: |
  ABENNAMES_ESCAPING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNAMES_ESCAPING.htm"
abapFile: "ABENNAMES_ESCAPING.html"
keywords: ["select", "do", "if", "data", "ABENNAMES", "ESCAPING"]
---

`... !operand ...`

The character `!` can be written directly before a name `operand` of a single operand in order to distinguish it from an [ABAP word](ABENABAP_WORD_GLOSRY.html) with the same notation in a statement. The escape character `!` can be placed in front of a [chaining](ABENCOMPONENT_CHAINING_SELECTOR.html), but it cannot be used in front of components that are addressed by a [component selector](ABENCOMPONENT_SELECTOR_GLOSRY.html).

With the exception of the first word of a statement that is introduced by a keyword, each word of a statement that is preceded by the escape character is interpreted as an operand, and not as an ABAP word during program generation. The escape character itself is not part of a name and is ignored when the statement is executed.

Without the escape character `!` before `CHANGING` after `USING`, the following program extract would be syntactically incorrect, because a formal parameter must be entered after `USING`. Although the second escape character is not necessary, it is used to document `USING` after `CHANGING` as a formal parameter.

-   The escape character `!` may be required on rare occasions in which the compiler cannot tell the difference between an operand and a [reserved word](ABENABAP_WORD_GLOSRY.html) of the same name. Otherwise, it can be used for the documentation of operands in the source code.
-   The escape character `!` must not be used in front of [operators](ABENOPERATOR_GLOSRY.html). For example, `!=` cannot be specified instead of `=`.

FORM test USING !CHANGING \\n CHANGING !USING. \\n using = changing. \\nENDFORM. abenabap.html abenabap\_reference.html abenoperands.html abenoperands\_data\_objects.html