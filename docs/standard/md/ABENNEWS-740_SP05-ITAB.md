---
title: "ABENNEWS-740_SP05-ITAB"
description: |
  ABENNEWS-740_SP05-ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740_SP05-ITAB.htm"
abapFile: "ABENNEWS-740_SP05-ITAB.html"
keywords: ["loop", "if", "internal-table", "ABENNEWS", "740", "SP05", "ITAB"]
---

[1. `MOVE-CORRESPONDING` for Internal Tables](#ABAP_MODIFICATION_1@4@) 

[2\. Table Comprehensions](#ABAP_MODIFICATION_2@4@)

From ABAP release 7.40, SP05, the operands of the statement [`MOVE-CORRESPONDING`](ABAPMOVE-CORRESPONDING.html) can be internal tables, as well as structures. This has been enabled by a new [variant](ABAPMOVE-CORRESPONDING.html) of this statement, which assigns identically named components of internal tables line by line. The new addition `EXPANDING NESTED TABLES` enables tabular components of structures to be resolved. The addition `KEEPING TARGET LINES` adds lines to target tables instead of overwriting them.

Component by component assignments between internal tables are also possible using the new component operator [`CORRESPONDING`](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html).

[Table comprehensions](ABENTABLE_COMPREHENSION_GLOSRY.html) are an enhancement of the [instance operator](ABENINSTANCE_OPERATOR_GLOSRY.html)\\ [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) or the [value operator](ABENVALUE_OPERATOR_GLOSRY.html)\\ [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) and are used to create the content of internal tables. One or more [`FOR` expressions](ABENFOR_IN_ITAB.html) can now be specified as subexpressions of the constructor expression. These `FOR` expressions evaluate existing internal tables whose content can be used to construct the result within the loops.

abenabap.html abennews.html abennews-740.html abennews-740\_sp05.html