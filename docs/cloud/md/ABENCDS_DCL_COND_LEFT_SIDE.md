---
title: "ABENCDS_DCL_COND_LEFT_SIDE"
description: |
  ABENCDS_DCL_COND_LEFT_SIDE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_DCL_COND_LEFT_SIDE.htm"
abapFile: "ABENCDS_DCL_COND_LEFT_SIDE.html"
keywords: ["case", "data", "ABENCDS", "DCL", "COND", "LEFT", "SIDE"]
---

Instead of an element of the protected CDS entity, one of the following expressions can be used on the left side of [literal conditions](ABENCDS_F1_COND_LITERAL.html), [PFCG conditions](ABENCDS_F1_COND_PFCG.html), and [user conditions](ABENCDS_F1_COND_USER.html):

Conditions with left side host expressions are evaluated before the expression is passed to the database and evaluate as a true or false predicate.

Properties:

Runtime support for session variables and literals on the left side is an indirect consequence of inheritance with parameter replacement and also exists in DCL source code (for reasons of consistency). Direct use is not recommended.

-   The actual value of a [parameter](ABENCDS_F1_PARAM.html) of the CDS entity replaced by `$parameters.pname`
-   The value of a [session variable](ABENSESSION_VARIABLE_GLOSRY.html) replaced by `$session.vname`
-   (For session variables in CDS DDIC-based views (obsolete), see [here](ABENCDS_SESSION_VARIABLE_V1.html).
-   For session variables in CDS view entities, see [here](ABENCDS_SESSION_VARIABLE_V2.html).)
-   The set of supported session variables in access controls may be smaller than the one in CDS in general.
-   A literal value
-   The DCL function `CONTEXT_NODE_VALUES`. This function is reserved for use by SAP.

-   The operators [`LIKE`](ABENCDS_F1_COND_LITERAL.html) and [`NOT LIKE`](ABENCDS_F1_COND_LITERAL.html) are mapped to the comparison operator for character-like data type [`CP`](ABENLOGEXP_STRINGS.html). This results in non-case-sensitive pattern searches.
-   Left side host expressions cannot be used on the left side of [PFCG mappings](ABENCDS_PFCG_MAPPING_GLOSRY.html) or user-defined aspects.

abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_role.html abencds\_dcl\_role\_conditions.html