---
title: "ABENNAMES_ESCAPING"
description: |
  ABENNAMES_ESCAPING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNAMES_ESCAPING.htm"
abapFile: "ABENNAMES_ESCAPING.html"
keywords: ["select", "do", "if", "data", "ABENNAMES", "ESCAPING"]
---

`... !operand ...`

The character `!` can be written directly before a name `operand` of a single operand in order to distinguish it from an [ABAP word](ABENABAP_WORD_GLOSRY.html) with the same notation in a statement. The escape character `!` can be placed in front of a [chaining](ABENCOMPONENT_CHAINING_SELECTOR.html), but it cannot be used in front of components that are addressed by a [component selector](ABENCOMPONENT_SELECTOR_GLOSRY.html).

With the exception of the first word of a statement that is introduced by a keyword, each word of a statement that is preceded by the escape character is interpreted as an operand, and not as an ABAP word during program generation. The escape character itself is not part of a name and is ignored when the statement is executed.

-   The escape character `!` may be required on rare occasions in which the compiler cannot tell the difference between an operand and a [reserved word](ABENABAP_WORD_GLOSRY.html) of the same name. Otherwise, it can be used for the documentation of operands in the source code.
-   The escape character `!` must not be used in front of [operators](ABENOPERATOR_GLOSRY.html). For example, `!=` cannot be specified instead of `=`.

abenabap.html abenabap\_reference.html abenoperands.html abenoperands\_data\_objects.html