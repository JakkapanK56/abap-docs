---
title: "ABENNEWS-772-ABAP_CDS"
description: |
  ABENNEWS-772-ABAP_CDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-772-ABAP_CDS.htm"
abapFile: "ABENNEWS-772-ABAP_CDS.html"
keywords: ["if", "ABENNEWS", "772", "ABAP", "CDS"]
---

[1\. Literals](#ABAP_MODIFICATION_1@4@)

[2\. Access Control](#ABAP_MODIFICATION_2@4@)

A [numeric literal](ABENCDS_LITERAL_V1.html) whose value is outside the value range of `INT4` but within the value range of `INT8` is now handled like a field of type `INT8` everywhere, including the definition of CDS associations.

The following enhancements have been implemented in [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html):

-   New [inheritance conditions](ABENCDS_F1_COND_INHERIT.html) can be used as [access conditions](ABENCDS_DCL_ROLE_CONDITIONS.html) in [CDS roles](ABENCDS_ROLE_GLOSRY.html). Some inheritance conditions apply conditions from existing CDS roles and some inheritance conditions apply access rules defined for other CDS entities.
-   In a [PFCG condition](ABENCDS_F1_COND_PFCG.html), a [PFCG mapping](ABENCDS_PFCG_MAPPING_GLOSRY.html) can be [mapped](ABENCDS_F1_COND_PFCG_MAPPING.html) to an element list. This mapping assigns the CDS elements to the authorization fields of an authorization object. A PFCG mapping is defined in a [CDS access policy](ABENCDS_ACCESS_POLICY_GLOSRY.html) using [`DEFINE PFCG_MAPPING`](ABENCDS_F1_DEFINE_PFCG_MAPPING.html).

abenabap.html abennews.html abennews-77.html abennews-772.html