---
title: "ABENCDS_F1_DCL_COND_EXPRESSION"
description: |
  ABENCDS_F1_DCL_COND_EXPRESSION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_DCL_COND_EXPRESSION.htm"
abapFile: "ABENCDS_F1_DCL_COND_EXPRESSION.html"
keywords: ["if", "case", "data", "ABENCDS", "DCL", "COND", "EXPRESSION"]
---

`... operator ...`

Operator of a comparison expression in a [literal condition](ABENCDS_F1_COND_LITERAL.html) in an [access rule](ABENACCESS_RULE_GLOSRY.html) in the definition of a role using [`DEFINE ROLE`](ABENCDS_F1_DEFINE_ROLE.html) in the [CDS DCL](ABENCDS_DCL_GLOSRY.html). The operator compares a left side and a right side. The left side is an element of the CDS entity to which the rule applies. The right side is represented using a literal value.

**operator** **True if**\\ `=` The value of the left side is equal to the value of the right side. `<>` The value of the left side is not equal to the value of the right side. `<` The value of the left side is less than the value of the right side. `>` The value of the left side is greater than the value of the right side. `<=` The value of the left side is less than or equal to the value of the right side. `>=` The value of the left side is greater than or equal to the value of the right side. `?=` Like the operator `=`. The condition is also met, however, if the value of the left side is the [null value](ABENNULL_VALUE_GLOSRY.html) or a type-dependent initial value. \\
\\
The usage of this operator is discouraged. \\
\\
It was introduced when access controls did not support arbitrary logical conditions and summarized two prominent use-cases in a single statement. The disadvantage is that the application of both conditions when not really needed introduces additional burden to the database. \\
\\
SAP recommends to replace the use of this operator by dedicated statement tailored to the data model. The access control syntax check issues a warning for each use of this operator and the long text of this warning provides help for the replacement. abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_role.html abencds\_dcl\_role\_conditions.html abencds\_f1\_cond\_literal.html