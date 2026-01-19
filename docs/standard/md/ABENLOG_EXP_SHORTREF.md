---
title: "Comparison expression with comparison operators for bit patterns"
description: |
  -   `NOT BETWEEN`(ABENLOGEXP_BETWEEN.html) Comparison expression used to check what belongs to an interval. -   `operand NOT IN range_tab`(ABENLOGEXP_SELECT_OPTION.html) Comparison expression used to check whether an operand meets the conditions of a ranges table(ABENRANGES_TABLE_GLOSR
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOG_EXP_SHORTREF.htm"
abapFile: "ABENLOG_EXP_SHORTREF.html"
keywords: ["select", "if", "class", "data", "types", "internal-table", "field-symbol", "ABENLOG", "EXP", "SHORTREF"]
---

[Reference](ABENLOGEXP.html)

`... \{\ \{operand1 \{=|EQ|<>|NE|>|GT|<|LT|>=|GE|<=|LE                  |CO|CN|CA|NA|CS|NS|CP|NP                  |BYTE-CO|BYTE-CN|BYTE-CA|BYTE-NA|BYTE-CS|BYTE-NS                  |O|Z|M\} operand2 \}\      |\ \{operand  [NOT] BETWEEN operand1 AND operand2\}\      |\ \{operand [NOT] IN range_tab\}\      |\ \{operand IS [NOT] INITIAL\}\      |\ \{ref     IS [NOT] BOUND\}\      |\ \{oref    IS [NOT] INSTANCE OF class|intf\}\      |\ \{<fs>    IS [NOT] ASSIGNED\}\      |\ \{para    IS [NOT] SUPPLIED\}\      |\ \{para    IS [NOT] REQUESTED\}\      |\ \{contains( ... )|contains_any_of( ... )|contains_any_not_of( ... )\}\      |\ \{matches( ... )\}\      |\ \{line_exists( ... )\}\ \}\    |\ \{\ [NOT] log_exp [AND|OR|EQUIV log_exp]\ \} ...`

Logical expression for formulating a condition for operands. A logical expression is a [relational expression](ABENRELATIONAL_EXPRESSION_GLOSRY.html) or multiple combined relational expressions, where [`( )`](ABENLOGEXP_BRACKET.html) can be used as parentheses. The result is a [truth value](ABENTRUTH_VALUE_GLOSRY.html).

-   [`=|EQ|<>|NE|>|GT|<|LT|>=|GE|<=|LE`](ABENLOGEXP_ANY_OPERAND.html)\\
    Comparison expression with comparison operators for all data types.
-   [`CO|CN|CA|NA|CS|NS|CP|NP`](ABENLOGEXP_STRINGS.html)\\
    Comparison expression with comparison operators for character-like data types.
-   [`BYTE-CO|BYTE-CN|BYTE-CA|BYTE-NA|BYTE-CS|BYTE-NS`](ABENLOGEXP_BYTES.html)\\
    Comparison expression with comparison operators for byte-like data types.
-   [`O|Z|M`](ABENLOGEXP_BITMASKS.html)\\
    Comparison expression with comparison operators for bit patterns
-   [`[NOT] BETWEEN`](ABENLOGEXP_BETWEEN.html)\\
    Comparison expression used to check what belongs to an interval.
-   [`operand [NOT] IN range_tab`](ABENLOGEXP_SELECT_OPTION.html)\\
    Comparison expression used to check whether an operand meets the conditions of a [ranges table](ABENRANGES_TABLE_GLOSRY.html)\\ `range_tab`.
-   [`IS [NOT] INITIAL`](ABENLOGEXP_INITIAL.html)\\
    Predicate expression used to check whether the operand `operand` is initial.
-   [`IS [NOT] BOUND`](ABENLOGEXP_BOUND.html)\\
    Predicate expression used to check whether a reference variable `ref` is valid
-   [`IS [NOT] INSTANCE OF class|intf`](ABENLOGEXP_INSTANCE_OF.html)\\
    Predicate expression for a check to verify whether an object reference variable `oref` points to an object whose dynamic type is more specific or equal to the object type `class` or `intf`.
-   [`IS [NOT] ASSIGNED`](ABENLOGEXP_ASSIGNED.html)\\
    Predicate expression used to check whether a memory area is assigned to a field symbol `<fs>`.
-   [`IS [NOT] SUPPLIED`](ABENLOGEXP_SUPPLIED.html)\\
    Predicate expression used to check whether a formal parameter `para` of a procedure is filled or requested.
-   [`IS [NOT] REQUESTED`](ABENLOGEXP_REQUESTED.html)\\
    **Obsolete:** Predicate expression used to check whether an output parameter `para` of a [procedure](ABENPROCEDURE_GLOSRY.html) is requested
-   [`contains, contains_...`](ABENCONTAINS_FUNCTIONS.html)\\
    Predicate function used to scan a string.
-   [`matches`](ABENMATCHES_FUNCTIONS.html)\\
    Predicate function used to match a string with a regular expression.
-   [`line_exists`](ABENLINE_EXISTS_FUNCTION.html)\\
    Predicate function used to check the existence of a line in an internal table.
-   [`NOT`](ABENLOGEXP_NOT.html)\\
    Boolean operator used to negate a logical expression.
-   [`AND`](ABENLOGEXP_AND.html)\\
    Boolean operator used as an `AND` operation between two logical expressions.
-   [`OR`](ABENLOGEXP_OR.html)\\
    Boolean operator used as an `OR` operation between two logical expressions.
-   [`EQUIV`](ABENLOGEXP_AND.html)\\
    Boolean operator used as an equivalence operation between two logical expressions.

abenabap.html abenabap\_reference.html abenabap\_shortref.html