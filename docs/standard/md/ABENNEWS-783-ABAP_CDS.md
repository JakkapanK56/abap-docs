---
title: "ABENNEWS-783-ABAP_CDS"
description: |
  ABENNEWS-783-ABAP_CDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-783-ABAP_CDS.htm"
abapFile: "ABENNEWS-783-ABAP_CDS.html"
keywords: ["select", "if", "data", "types", "ABENNEWS", "783", "ABAP", "CDS"]
---

[1. CDS View Entity, `UNION` Clause](#ABAP_MODIFICATION_1@4@) 

[2. CDS View Entity, `DISTINCT`](#ABAP_MODIFICATION_2@4@)

[3\. CDS View Entity, New Conversion Functions](#ABAP_MODIFICATION_3@4@)

[4\. CDS View Entity, Typed Literals](#ABAP_MODIFICATION_4@4@)

[5. CDS Projection View, `PROVIDER CONTRACT`](#ABAP_MODIFICATION_5@4@)

[`UNION`](ABENCDS_UNION_V2.html) clauses are now supported in [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html). There are a few differences to `UNION` clauses in [CDS DDIC-based views](ABENCDS_V1_VIEW_GLOSRY.html). The most important difference is that branches of union clauses can be nested within each other in CDS view entities.

The addition [`DISTINCT`](ABENCDS_SELECT_STATEMENT_V2.html) is now available for `SELECT` statements in [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html).

Two new conversion functions are available in CDS view entities:

[Typed literals](ABENCDS_TYPED_LITERAL_V2.html) are now available for [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html). Typed literals allow an explicit type declaration and they are available for many built-in ABAP Dictionary data types.

It is now possible to specify a provider contract for [CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html) using the keyword [`PROVIDER CONTRACT`](ABENCDS_PV_PROVIDER_CONTRACT.html). The provider contract specifies in which scenario a CDS projection view is used, and the scenario in turn determines in which runtime the view is executed and which features are available.

In this release, there is only one provider contract option available: `TRANSACTIONAL_QUERY`.

-   [`GET_NUMERIC_VALUE`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html)
-   [`CURR_TO_DECFLOAT_AMOUNT`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html)

abenabap.html abennews.html abennews-78.html abennews-783.html