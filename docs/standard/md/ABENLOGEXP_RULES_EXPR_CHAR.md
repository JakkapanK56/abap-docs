---
title: "ABENLOGEXP_RULES_EXPR_CHAR"
description: |
  ABENLOGEXP_RULES_EXPR_CHAR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOGEXP_RULES_EXPR_CHAR.htm"
abapFile: "ABENLOGEXP_RULES_EXPR_CHAR.html"
keywords: ["loop", "if", "case", "data", "types", "internal-table", "ABENLOGEXP", "RULES", "EXPR", "CHAR"]
---

[String expressions](ABENSTRING_EXPRESSION_GLOSRY.html) can be used as operands of comparison expressions with the following operators:

It is possible to compare a [string expression](ABENSTRING_EXPRESSION_GLOSRY.html) with a single operand of any [elementary data type](ABENELEMENTARY_DATA_TYPE_GLOSRY.html) or with another string expression. With regard to the conversion of the expression by string, two cases can be distinguished:

This example demonstrates the effect of different comparison types. The first comparison is true, since the character-like operand is converted to the type of the numeric operand in accordance with the rule for [comparing character-like data types](ABENLOGEXP_CHARACTER.html) and the numeric value is compared. However, the second comparison is also true, since the numeric operand is formatted as a text string and the internal representation of the code page used is compared.

This example demonstrates the effect of different formatting and different rules. All comparisons are true. An operand of type `decfloat34` is compared with a text string and a string expression. For the comparison with the text string, the left side is also converted to the type `string` and the values of both sides are the same. For the comparison with the chain, the left-hand side is [formatted](ABENSTRING_TEMPLATES_PREDEF_FORMAT.html) differently and the values of both sides are different. The third comparison shows explicitly how the operand is handled during the comparison with the chain. In contrast, the `WHERE` conditions [`LOOP`](ABAPLOOP_AT_ITAB.html) statements convert both sides to the numeric [comparison type](ABENLOGEXP_CHARACTER.html)\\ `decfloat34`. The output shows the difference between simple conversion and formatting as an embedded expression.

-   [Comparison operators for all data types](ABENLOGEXP_COMPARE_ALL.html)
-   [Comparison operators for character-like data types](ABENLOGEXP_STRINGS.html)

-   If a string expression is compared with an individual operand in a generic logical expression, the comparison type is `string`. The individual operand is implicitly regarded as an [embedded expression](ABENEMBEDDED_EXPRESSION_GLOSRY.html) of a [string template](ABENSTRING_TEMPLATE_GLOSRY.html) and formatted as a text string before the comparison in accordance with the associated [predefined format](ABENSTRING_TEMPLATES_PREDEF_FORMAT.html).
-   If a string expression on the right side of a `WHERE` condition is used in a [processing statement for internal tables](ABENTABLE_PROCESSING_STATEMENTS.html), the comparison type results from the [combination](ABENLOGEXP_CHARACTER.html) of `string` with the type on the left side. Both sides are [converted](ABENCONVERSION_ELEMENTARY.html) to the comparison type as required.

-   A string expression cannot be specified as the operand of a [predicate expression](ABENPREDICATE_EXPRESSION_GLOSRY.html).
-   The result of the formatting of an individual operand differs from the result of a simple [conversion](ABENCONVERSION_ELEMENTARY.html) for some data types. An example is the type `decfloat34`.
-   The results of general logical expressions and logical expressions in `WHERE` conditions for internal tables may differ for comparisons with string expressions, since both the formatting and the comparison type play a role.

ASSERT \`02\` > 1. \\nASSERT |02| < 1. DATA decf TYPE decfloat34 VALUE '0.00000004'. \\nDATA itab LIKE TABLE OF decf. \\nAPPEND decf TO itab. \\n\\ \\nASSERT decf = CONV string( decf ). \\nASSERT decf <> CONV string( decf ) && \`\`. \\nASSERT |\\{ decf \\}| <> CONV string( decf ) && \`\`. \\n\\ \\nLOOP AT itab TRANSPORTING NO FIELDS \\n WHERE table\_line = CONV string( decf ). \\nENDLOOP. \\nASSERT sy-subrc = 0. \\n\\ \\nLOOP AT itab TRANSPORTING NO FIELDS \\n WHERE table\_line = CONV string( decf ) && \`\`. \\nENDLOOP. \\nASSERT sy-subrc = 0. \\n\\ \\ncl\_demo\_output=>display( \\n |CONV string( decf ):\\\\t\\{ CONV string( decf ) \\}\\\\n| && \\n |\\{ \`|\\{ decf \\}|\` \\}:\\\\t\\\\t\\{ decf \\}| ). abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_rules.html abenlogexp\_rules\_operands.html abenlogexp\_rules\_expressions.html