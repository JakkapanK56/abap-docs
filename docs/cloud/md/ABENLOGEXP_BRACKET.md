---
title: "A combination of the following logical expressions"
description: |
  can be parenthesized explicitly as follows to stress the implicit parentheses(ABENLOGEXP_BOOLE.html): Parentheses around the expressions with `NOT` ( NOT log_exp1 ) OR log_exp2 AND ( NOT log_exp3 ) AND log_exp4 EQUIV log_exp5 Parentheses around the expressions with `AND` ( NOT log_exp1 ) O
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOGEXP_BRACKET.htm"
abapFile: "ABENLOGEXP_BRACKET.html"
keywords: ["if", "ABENLOGEXP", "BRACKET"]
---

`... ( log_exp ) ...`

A complete logical expression [`log_exp`](ABENLOGEXP.html) can be placed in parentheses in order to define the priority of processing. `log_exp` can be a combination of multiple expressions using [`AND`](ABENLOGEXP_AND.html), [`OR`](ABENLOGEXP_OR.html), or [`EQUIV`](ABENLOGEXP_EQUIV.html) or a logical expression negated using [`NOT`](ABENLOGEXP_NOT.html). A logical expression in parentheses is itself a logical expression.

The smallest unit of a logical expression that can be placed in parentheses is a [relational expression](ABENRELATIONAL_EXPRESSION_GLOSRY.html).

A combination of the following logical expressions

can be parenthesized explicitly as follows to stress the [implicit parentheses](ABENLOGEXP_BOOLE.html):

Parentheses around the expressions with `NOT`

( NOT log\_exp1 ) OR\\ 
log\_exp2 AND ( NOT log\_exp3 ) AND log\_exp4 EQUIV log\_exp5

Parentheses around the expressions with `AND`

( NOT log\_exp1 ) OR\\ 
( log\_exp2 AND ( NOT log\_exp3 ) AND log\_exp4 ) EQUIV log\_exp5

Parentheses around the expressions with `OR`

( ( NOT log\_exp1 ) OR\\ 
  ( log\_exp2 AND ( NOT log\_exp3 ) AND log\_exp4 ) ) EQUIV log\_exp5

Parentheses around the expressions with `EQUIV`

( ( ( NOT log\_exp1 ) OR\\ 
  ( log\_exp2 AND ( NOT log\_exp3 ) AND log\_exp4 ) ) EQUIV log\_exp5 )

Changing the parentheses explicitly changes the meaning of the expression. For example, if explicit parentheses are set as follows in the expression above

( NOT log\_exp1 OR log\_exp2 ) AND\\ 
NOT ( log\_exp3 AND log\_exp4 EQUIV log\_exp5 )

the expression looks as follows after implicit parentheses are set:

( ( ( NOT log\_exp1 ) OR log\_exp2 ) AND\\ 
( NOT ( ( log\_exp3 AND log\_exp4 ) EQUIV log\_exp5 ) ) )

NOT log\_exp1 OR log\_exp2 AND NOT log\_exp3 AND log\_exp4 EQUIV log\_exp5 abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_boole.html