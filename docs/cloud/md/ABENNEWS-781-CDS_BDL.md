---
title: "ABENNEWS-781-CDS_BDL"
description: |
  ABENNEWS-781-CDS_BDL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-781-CDS_BDL.htm"
abapFile: "ABENNEWS-781-CDS_BDL.html"
keywords: ["update", "do", "if", "ABENNEWS", "781", "CDS", "BDL"]
---

[1\. Draft Support for RAP BOs](#ABAP_MODIFICATION_1@4@)

[2\. Determine Actions](#ABAP_MODIFICATION_2@4@)

[3\. Precheck for Modify Operations](#ABAP_MODIFICATION_3@4@)

[4\. New Field Characteristics](#ABAP_MODIFICATION_4@4@)

The new statement [`with draft`](ABENBDL_WITH_DRAFT.html) can be used to enable the draft concept for a RAP BO.

Determine actions are a new type of action defined using [`determine action`](ABENBDL_DETERMINE_ACTION.html). With a determine action, determinations and validations can be executed on request.

The new RAP BO operation addition [`precheck`](ABENBDL_PRECHECK.html) can be used to prevent illegal changes from reaching the application buffer by prechecking modify operations.

RAP BDL now supports the following new [field characteristics](ABENBDL_FIELD_CHAR.html):

-   [`mandatory:create`](ABENBDL_FIELD_CHAR.html)
-   [`readonly:update`](ABENBDL_FIELD_CHAR.html)

abenabap.html abennews.html abennews-78.html abennews-781.html abennews-781-restful.html