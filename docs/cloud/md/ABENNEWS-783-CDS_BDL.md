---
title: "ABENNEWS-783-CDS_BDL"
description: |
  ABENNEWS-783-CDS_BDL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-783-CDS_BDL.htm"
abapFile: "ABENNEWS-783-CDS_BDL.html"
keywords: ["if", "method", "ABENNEWS", "783", "CDS", "BDL"]
---

[1\. Unmanaged Early Numbering in Managed BOs](#ABAP_MODIFICATION_1@4@)

[2\. Implementing Cleanup in Managed BOs](#ABAP_MODIFICATION_2@4@)

[3\. CDS Abstract Behavior Definitions](#ABAP_MODIFICATION_3@4@)

The entity behavior characteristic [`early numbering`](ABENBDL_EARLY_NUMB.html) can be used to define unmanaged [early numbering](ABENRAP_EARLY_NUMBERING_GLOSRY.html) for all primary key fields of a managed RAP BO.

The new addition [`and cleanup`](ABENBDL_SAVING.html) is available for additional and unmanaged save in managed RAP BOs. It allows the application developer to implement the cleanup method.

A new [implementation type](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html) is available: the [RAP abstract behavior definition](ABENBDL_ABSTRACT.html). Such abstract BDEFs mainly serve as typing mechanism for deep action or function parameters.

abenabap.html abennews.html abennews-78.html abennews-783.html abennews-783-restful.html