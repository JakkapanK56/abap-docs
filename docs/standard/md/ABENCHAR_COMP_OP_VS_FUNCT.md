---
title: "ABENCHAR_COMP_OP_VS_FUNCT"
description: |
  ABENCHAR_COMP_OP_VS_FUNCT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCHAR_COMP_OP_VS_FUNCT.htm"
abapFile: "ABENCHAR_COMP_OP_VS_FUNCT.html"
keywords: ["if", "case", "data", "types", "ABENCHAR", "COMP", "FUNCT"]
---

Instead of the [comparison operators for character-like data types](ABENLOGEXP_STRINGS.html), [predicate functions](ABENPREDICATE_FUNCTIONS_STRGS.html) can be used as shown in the following table:

Since the comparison operators `CS` and `NS` are not case-sensitive, the arguments must be processed by the functions [`to_upper`](ABENCASE_FUNCTIONS.html) (or `to_lower`). It should also be noted that the trailing blanks of character-like arguments of fixed length are always ignored in the predicate functions, whereas there are exceptions to this rule for operands of comparison operators.

The operators `CP` and `NP` can also be replaced by the predicate function `contains` or `matches` and a suitable [regular expression](ABENREGULAR_EXPRESSION_GLOSRY.html). The differences in case handling must also be respected, whereby a simple mapping like in `CS` and `NS` is not possible, but usually not required.

The following two relational expressions yield the same result.

FINAL(text) = \`xxxxaaayyyy\`. \\n\\ \\nASSERT text CP \`\*aaa\*\` AND \\n matches( val = text pcre = \`.\*aaa.\*\` case = ' ' ). **Comparison Operator** **Predicate Function** `o1 CO o2` `NOT contains_any_not_of( val = o1 sub = o2 )` `o1 CN o2` `contains_any_not_of( val = o1 sub = o2 )` `o1 CA o2` `contains_any_of( val = o1 sub = o2 )` `o1 NA o2` `NOT contains_any_of( val = o1 sub = o2 )` `o1 CS o2` `contains( val = to_upper( o1 ) sub = to_upper( o2 ) )` `o1 NS o2` `NOT contains( val = to_upper( o1 ) sub = to_upper( o2 ) )` abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_op.html abenlogexp\_strings.html