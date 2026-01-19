---
title: "ABENCDS_F1_DCL_HIERARCHIES"
description: |
  ABENCDS_F1_DCL_HIERARCHIES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_DCL_HIERARCHIES.htm"
abapFile: "ABENCDS_F1_DCL_HIERARCHIES.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "DCL", "HIERARCHIES"]
---

[CDS hierarchies](ABENCDS_HIERARCHY_GLOSRY.html) can be protected with access control. However, it must be ensured that individual rows are not filtered out if they are part of a logical block in the hierarchy construction. Otherwise, the hierarchies constructed by the database could be destroyed and hierarchy operators produce undefined results.

For this reason, the use of [access conditions](ABENACCESS_CONDITION_GLOSRY.html) with arbitrary entity elements is not allowed.

However, if the CDS hierarchy declares a directory (`[DEFINE HIERARCHY ... DIRECTORY ... FILTER BY](ABENCDS_F1_DEFINE_HIERARCHY.html)`), then elements of this association can be used.

In addition, access conditions that do not result in database selections can be used:

-   PFCG conditions without fields `( ( ) = ASPECT PFCG_AUTH( ... ) )`
-   Conditions with exclusive use of [left side host expressions](ABENCDS_DCL_COND_LEFT_SIDE.html). This allows protection of a CDS hierarchy using the hierarchy directory specified by a parameter.
-   The special conditions `TRUE`, `FALSE`, and `VOID`. These should not, however, be used directly in CDS access controls.

-   When conditions on the directory association are involved, they are applied to the constructed hierarchy object. Therefore, the time for its creation will be consumed even if the user does not have the authorization to retrieve the result.
-   The requirement to specify a `FILTER BY` addition in the `CDS` hierarchy definition still exists and by design already provides an all-or-nothing behavior regarding the hierarchy directory. Due to the properties from above, access control can act as an additional reason for *nothing*.

abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html