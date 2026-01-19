---
title: "ABENNEWS-740_SP10-ABAP_CDS"
description: |
  ABENNEWS-740_SP10-ABAP_CDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740_SP10-ABAP_CDS.htm"
abapFile: "ABENNEWS-740_SP10-ABAP_CDS.html"
keywords: ["if", "data", "ABENNEWS", "740", "SP10", "ABAP", "CDS"]
---

A dedicated [access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) was introduced for [ABAP CDS](ABENABAP_CDS_GLOSRY.html). The new [CDS DCL](ABENCDS_F1_DCL_SYNTAX.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) makes it possible to define [CDS](ABENCDS_ROLE_GLOSRY.html) roles. If a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) of a [CDS view](ABENCDS_VIEW_GLOSRY.html) is linked with a CDS role, additional [access conditions](ABENACCESS_CONDITION_GLOSRY.html) are evaluated by default when the CDS entity is accessed by a query processed by [SADL](ABENSADL_GLOSRY.html) and only that data is read for which the current user has an authorization or that matches a literal condition.

From ABAP release 7.65, SADL uses ABAP SQL to access CDS entities. From ABAP release 7.62, ABAP SQL evaluates CDS roles implicitly.

abenabap.html abennews.html abennews-740.html abennews-740\_sp10.html