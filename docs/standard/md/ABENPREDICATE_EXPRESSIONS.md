---
title: "ABENPREDICATE_EXPRESSIONS"
description: |
  ABENPREDICATE_EXPRESSIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPREDICATE_EXPRESSIONS.htm"
abapFile: "ABENPREDICATE_EXPRESSIONS.html"
keywords: ["ABENPREDICATE", "EXPRESSIONS"]
---

``...   \{operand  [`IS [NOT] INITIAL`](ABENLOGEXP_INITIAL.html)\}\      |\ \{ref      [`IS [NOT] BOUND`](ABENLOGEXP_BOUND.html)\}\      |\ \{oref     [`IS [NOT] INSTANCE OF`](ABENLOGEXP_INSTANCE_OF.html)\}\      |\ \{<fs>     [`IS [NOT] ASSIGNED`](ABENLOGEXP_ASSIGNED.html)\}\      |\ \{para     [`IS [NOT] SUPPLIED`](ABENLOGEXP_SUPPLIED.html)\} ...``

A predicate expression uses the [predicate operator](ABENPREDICATE_OPERATOR_GLOSRY.html)\\ `IS` to determine a [truth value](ABENTRUTH_VALUE_GLOSRY.html) from the state of an operand.

-   Apart from `INSTANCE OF`, no operands of the possible predicate expressions are [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html). No predicate expression can be applied to a [calculation expression](ABENCALCULATION_EXPRESSION_GLOSRY.html).
-   The predicate expression [`IS [NOT] REQUESTED`](ABENLOGEXP_REQUESTED.html) is obsolete and was replaced by [`IS [NOT] SUPPLIED`](ABENLOGEXP_SUPPLIED.html).

abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenpredicate.html