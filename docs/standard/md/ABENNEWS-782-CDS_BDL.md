---
title: "ABENNEWS-782-CDS_BDL"
description: |
  ABENNEWS-782-CDS_BDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-782-CDS_BDL.htm"
abapFile: "ABENNEWS-782-CDS_BDL.html"
keywords: ["if", "ABENNEWS", "782", "CDS", "BDL"]
---

[1\. Nested Determinations on Modify](#ABAP_MODIFICATION_1@4@)

[2\. Always Flag in Determine Actions](#ABAP_MODIFICATION_2@4@)

[3\. Global Feature Control](#ABAP_MODIFICATION_3@4@)

[4\. Global Authorization Control](#ABAP_MODIFICATION_4@4@)

[5\. Non-Locking Actions](#ABAP_MODIFICATION_5@4@)

[6\. Projection BDEF, Operation Augment](#ABAP_MODIFICATION_6@4@)

It is now possible to trigger a [determination on modify](ABENBDL_DETERMINATIONS.html) by another determination on modify.

The new addition [`always`](ABENBDL_DETERMINE_ACTION.html) can be used for determinations and validations assigned to a [`determine action`](ABENBDL_DETERMINE_ACTION.html). When the determine action is called, determinations and validations with this flag are executed regardless of their trigger conditions.

The new RAP BO operation addition [`features:global`](ABENBDL_ACTIONS_FC.html) can be used to define global [feature control](ABENRAP_FEATURE_CONTROL_GLOSRY.html) for RAP BO operations.

Global authorization control is available. It can be defined using [`authorization master (global)`](ABENBDL_AUTHORIZATION.html).

The new RAP BO operation addition [`lock:none`](ABENBDL_LOCK_NONE.html) can be used to suppress the locking mechanism for an action.

For [projections BDEFs](ABENCDS_PROJ_BDEF_GLOSRY.html), the [operation augment](ABENBDL_AUGMENT_PROJECTION.html) is available. Augmentation enhances incoming requests with a custom implementation, for example with default values.

abenabap.html abennews.html abennews-78.html abennews-782.html abennews-782-restful.html