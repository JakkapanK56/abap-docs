---
title: "ABENCDS_F1_DCL_IFTHENELSE"
description: |
  ABENCDS_F1_DCL_IFTHENELSE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_DCL_IFTHENELSE.htm"
abapFile: "ABENCDS_F1_DCL_IFTHENELSE.html"
keywords: ["select", "if", "ABENCDS", "DCL", "IFTHENELSE"]
---

`... IF ( condition ) THEN \{ condition \} ELSE \{ condition \} ...`

The condition `condition` in the `IF` branch is evaluated in the application server. If the result is *true*, the `if_then_else` is replaced by the condition in the `THEN` branch, otherwise by the condition in the `ELSE` branch.

This condition tests whether the actual value of the view parameter `P1` is either `NEW` or `MODERN` and in addition whether the current user has any authorization for the authorization object `S_DEMO`. If this condition is true, the access condition using the fields `A_NEW` and `B_NEW` applies, otherwise the one using `A_OLD` and `B_OLD` applies.

-   The condition in the `IF` branch must contain only [left-side host expressions](ABENCDS_DCL_COND_LEFT_SIDE.html) (that is, it must not contain a reference to any elements of the CDS entity). Parentheses and logical operators are allowed.
-   The conditions in the `THEN` and `ELSE` branches can be any condition, including a nested `if_then_else`.
-   The separation between the `THEN` and the `ELSE` branches occurs at runtime. At compile time, both branches must be syntactically valid.

GRANT SELECT ON cds\_entity \\n WHERE \\n IF \\n ( \\n ( $PARAMETERS.P1 = 'NEW' OR $PARAMETERS.P1 = 'MODERN' ) \\n AND \\n ( ) = ASPECT PFCG\_AUTH( S\_DEMO ) \\n ) \\n THEN \\n \\{ \\n A\_NEW = 1 AND ( B\_NEW ) = ASPECT PFCG\_AUTH( S\_DEMO, F1 ) \\n \\} \\n ELSE \\n \\{ \\n A\_OLD = 1 AND ( B\_OLD ) = ASPECT PFCG\_AUTH( S\_OLD, F1 ) \\n \\}; abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_role.html abencds\_dcl\_role\_conditions.html