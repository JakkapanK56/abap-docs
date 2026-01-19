---
title: "ABENNEWS-791-CDS_ACCESS_CONTROL"
description: |
  ABENNEWS-791-CDS_ACCESS_CONTROL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-791-CDS_ACCESS_CONTROL.htm"
abapFile: "ABENNEWS-791-CDS_ACCESS_CONTROL.html"
keywords: ["select", "if", "ABENNEWS", "791", "CDS", "ACCESS", "CONTROL"]
---

[1\. New Type of Access Rule for CDS Projection Views](#ABAP_MODIFICATION_1@4@)

[2\. New DCL Functions](#ABAP_MODIFICATION_2@4@)

A new type of [access rule](ABENCDS_DCL_ROLE_RULES.html) is available for CDS projection views of type [CDS transactional query](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html): the [`projection_rule`](ABENCDS_DCL_ROLE_PROJ_RULE.html) defined with the statement [`GRANT SELECT ON ... AS PROJECTION ON ... FALLBACK ASSOCIATION ...`](ABENCDS_DCL_ROLE_PROJ_RULE.html).

Two new DCL functions are available:

Both functions retrieve the runtime state of a switch in the Switch Framework.

-   [`SWITCH_RUNTIME_STATE`](ABENCDS_F1_DCL_FUNCTION.html)
-   [`TOGGLE_RUNTIME_STATE`](ABENCDS_F1_DCL_FUNCTION.html)

abenabap.html abennews.html abennews-79.html abennews-791.html