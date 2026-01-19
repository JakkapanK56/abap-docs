---
title: "ABENNEWS-785-ABAP_CDS"
description: |
  ABENNEWS-785-ABAP_CDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-785-ABAP_CDS.htm"
abapFile: "ABENNEWS-785-ABAP_CDS.html"
keywords: ["do", "if", "case", "data", "ABENNEWS", "785", "ABAP", "CDS"]
---

[1\. CDS Abstract Entity, To-Parent Association](#ABAP_MODIFICATION_1@4@)

[2\. CDS View Entity, New Set Operators](#ABAP_MODIFICATION_2@4@)

[3\. CDS View Entity, Extended Expression Matrix](#ABAP_MODIFICATION_3@4@)

[4\. Migration Tool for CDS Views](#ABAP_MODIFICATION_4@4@)

[5. New `AbapCatalog` Annotations](#ABAP_MODIFICATION_5@4@) 

[6\. Using CDS-Managed DDIC Views is Obsolete](#ABAP_MODIFICATION_6@4@)

In [CDS abstract entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html), it is now possible to define [to-parent associations](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) without `ON` condition. The `ON` condition can be left out if the association target is also a CDS abstract entity.

In [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), two new [set operators](ABENCDS_SET_OPERATORS_GLOSRY.html) are available:

In [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), the expression matrix has been extended:

The following documented ABAP program is now available for migrating CDS DDIC-based views to CDS view entities:

`RUTDDLSV2MIGRATION`.

The following new `AbapCatalog.extensibility` annotations have been released:

For each [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), a [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) is created in ABAP Dictionary upon activation. Using this [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html), for example for typing or for accessing the CDS entity in question, is [obsolete](ABENCDS_ACCESS_OBSOLETE.html) from now on. The reason is the release of a new type of CDS entity, the [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), which will replace [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) in the future. CDS view entities do not have a [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) attached and in case of a migration from CDS DDIC-based view (obsolete) to CDS view entity, each usage of a [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) leads to a syntax error.

-   [`EXCEPT`](ABENCDS_EXCEPT_V2.html)
-   [`INTERSECT`](ABENCDS_INTERSECT_V2.html)

-   In a [searched case expression](ABENCDS_SEARCHED_CASE_EXPR_V2.html), arithmetic expressions and case expressions are supported as operands.

-   [`AbapCatalog.extensibility.allowNewdataSources`](ABENCDS_VIEW_ENTITY_ANNO.html)
-   [`AbapCatalog.extensibility.dataSources`](ABENCDS_VIEW_ENTITY_ANNO.html)
-   [`AbapCatalog.extensibility.elementSuffix`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)
-   [`AbapCatalog.extensibility.extensible`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)
-   [`AbapCatalog.extensibility.quota.maximumBytes`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)
-   [`AbapCatalog.extensibility.quota.maximumFields`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)

abenabap.html abennews.html abennews-78.html abennews-785.html