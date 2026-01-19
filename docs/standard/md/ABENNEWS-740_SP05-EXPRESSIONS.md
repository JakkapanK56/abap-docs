---
title: "ABENNEWS-740_SP05-EXPRESSIONS"
description: |
  ABENNEWS-740_SP05-EXPRESSIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740_SP05-EXPRESSIONS.htm"
abapFile: "ABENNEWS-740_SP05-EXPRESSIONS.html"
keywords: ["loop", "if", "internal-table", "field-symbol", "ABENNEWS", "740", "SP05", "EXPRESSIONS"]
---

[1. `LET` Expressions](#ABAP_MODIFICATION_1@4@) 

[2\. Component Operator](#ABAP_MODIFICATION_2@4@)

[3\. Table Comprehensions](#ABAP_MODIFICATION_3@4@)

The new [`LET` expressions](ABAPLET.html) in the form `LET ... IN` make it possible to define variables or field symbols as helper fields in expressions. Currently, `LET` expressions can be used in all [constructor expressions](ABENCONSTRUCTOR_EXPRESSIONS.html) where this makes sense.

The component operator [`CORRESPONDING`](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html) is a new [constructor operator](ABENCONSTRUCTOR_OPERATOR_GLOSRY.html) that enables component by component assignments to be made between structures or between internal operands at operand positions. Mappings between components are based by default on matching names and can be defined using mapping rules.

[Table comprehensions](ABENTABLE_COMPREHENSION_GLOSRY.html) are an enhancement of the [instance operator](ABENINSTANCE_OPERATOR_GLOSRY.html)\\ [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) or the [value operator](ABENVALUE_OPERATOR_GLOSRY.html)\\ [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) and are used to create the content of internal tables. One or more [`FOR` expressions](ABENFOR_IN_ITAB.html) can now be specified as a subexpression of the constructor expression. These `FOR` expressions evaluate existing internal tables whose content can be used to construct the result within the loops.

abenabap.html abennews.html abennews-740.html abennews-740\_sp05.html