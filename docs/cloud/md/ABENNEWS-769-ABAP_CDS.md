---
title: "ABENNEWS-769-ABAP_CDS"
description: |
  ABENNEWS-769-ABAP_CDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-769-ABAP_CDS.htm"
abapFile: "ABENNEWS-769-ABAP_CDS.html"
keywords: ["if", "ABENNEWS", "769", "ABAP", "CDS"]
---

[1\. Access Control](#ABAP_MODIFICATION_1@4@)

[2\. Extensions](#ABAP_MODIFICATION_2@4@)

The following enhancements have been implemented in [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html):

[CDS DDIC-based view extensions](ABENCDS_VIEW_EXTEND_GLOSRY.html) are now connected to [Switch Framework](ABENSWITCH_FRAMEWORK_GLOSRY.html) whenever they are defined in a [package](ABENPACKAGE_GLOSRY.html) that is assigned a [switch](ABENSWITCH_GLOSRY.html).

-   [CDS roles](ABENCDS_ROLE_GLOSRY.html) can now also be defined for [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html). When a CDS table function is accessed in ABAP SQL, the access conditions are evaluated by default.
-   Extensions in DCL for defining CDS roles:

-   When [access conditions](ABENACCESS_CONDITION_GLOSRY.html)\\ [`cds_cond`](ABENCDS_DCL_ROLE_COND_EXPR.html) are specified, there are no longer any restrictions on how Boolean operators and parentheses are used. The Boolean operator `NOT` can now also be used and any combination of parentheses is possible.
-   The operators [`BETWEEN`](ABENCDS_F1_COND_LITERAL.html) and [`IS NULL`](ABENCDS_F1_COND_LITERAL.html) are now available for literal conditions as part of an access condition.
-   When a path is specified for an element in an [access condition](ABENACCESS_CONDITION_GLOSRY.html), multivalue CDS associations are now also tracked.
-   In a [literal condition](ABENCDS_F1_COND_LITERAL.html)\\ `[NOT] LIKE`, it is now possible to specify an escape character using `ESCAPE`.
-   Blanks are now no longer forced in certain positions.

abenabap.html abennews.html abennews-76.html abennews-769.html