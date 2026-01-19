---
title: "ABENNEWS-784-ABAP_CDS"
description: |
  ABENNEWS-784-ABAP_CDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-784-ABAP_CDS.htm"
abapFile: "ABENNEWS-784-ABAP_CDS.html"
keywords: ["select", "if", "case", "data", "types", "ABENNEWS", "784", "ABAP", "CDS"]
---

[1\. CDS View Entity, Reusing Expressions](#ABAP_MODIFICATION_1@4@)

[2\. CDS View Entity, Extended Expression Matrix](#ABAP_MODIFICATION_2@4@)

[3\. CDS Abstract Entity Extensions](#ABAP_MODIFICATION_3@4@)

[4\. CDS View Entity, Handling of Amounts and Quantities](#ABAP_MODIFICATION_4@4@)

In [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), it is now possible to reuse expressions defined in the `SELECT` list in other operand positions of the same CDS view entity by using the syntax [`$projection.reuse_exp`](ABENCDS_REUSABLE_EXPRESSION_V2.html).

In [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), the expression matrix has been extended:

The new statement [`EXTEND ABSTRACT ENTITY`](ABENCDS_EXTEND_ABSTRACT_ENTITY.html) of the DDL of ABAP CDS makes it possible to add new elements to existing [CDS abstract entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) by using [CDS abstract entity extensions](ABENCDS_ABS_ENTITY_EXTEND_GLOSRY.html).

In [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), special handling for [CDS amount fields](ABENCDS_AMOUNT_FIELD.html) and [CDS quantity fields](ABENCDS_QUANTITY_FIELD.html) has been implemented. It differs from the handling of amount fields and quantity fields in DDIC, for example, more data types are possible and the currency key/unit key reference is considered in expressions.

Moreover, a new type is available: the [CDS calculated quantity](ABENCDS_CALCULATED_QUANTITY.html). A CDS calculated quantity is the result type of a calculation using amount and/or quantity fields.

-   In the [`WHERE`](ABENCDS_WHERE_CLAUSE_V2.html) clause, arithmetic expressions and case expressions are supported as operands.
-   In the [`HAVING`](ABENCDS_HAVING_CLAUSE_V2.html) clause, arithmetic expressions and case expressions are supported as operands.

abenabap.html abennews.html abennews-78.html abennews-784.html