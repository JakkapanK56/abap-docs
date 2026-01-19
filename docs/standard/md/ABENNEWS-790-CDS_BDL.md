---
title: "ABENNEWS-790-CDS_BDL"
description: |
  ABENNEWS-790-CDS_BDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-790-CDS_BDL.htm"
abapFile: "ABENNEWS-790-CDS_BDL.html"
keywords: ["update", "do", "if", "data", "ABENNEWS", "790", "CDS", "BDL"]
---

[1\. Interface BDEF, New Field Characteristics](#ABAP_MODIFICATION_1@4@)

[2\. Managed and Unmanaged RAP BO, New Field Characteristic](#ABAP_MODIFICATION_2@4@)

[3\. Static Default Factory Actions](#ABAP_MODIFICATION_3@4@)

In [RAP interface behavior definitions](ABENCDS_INTERFACE_BDEF_GLOSRY.html), the following [RAP field characteristics](ABENRAP_FIELD_CHAR_GLOSRY.html) are now available:

A new [RAP field characteristic](ABENRAP_FIELD_CHAR_GLOSRY.html) is available for managed and unmanaged RAP BOs: [`notrigger[:warn]`](ABENBDL_FIELD_CHAR.html). Fields with this attribute must not be used in a trigger condition of a [RAP validation](ABENRAP_VALIDATION_GLOSRY.html) or a [RAP determination](ABENRAP_DETERMINATION_GLOSRY.html).

The syntax addition [`default`](ABENBDL_ACTION_DEFAULT_FACTORY.html) is available for static factory actions in managed, unmanaged, and projection BDEFs. Exactly one static factory action per [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) can be defined as default static factory action. The addition `default` is evaluated by consuming frameworks, such as OData.

-   [`readonly`](ABENBDL_FIELD_INTERFACE.html)
-   [`mandatory:create`](ABENBDL_FIELD_INTERFACE.html)
-   [`readonly:update`](ABENBDL_FIELD_INTERFACE.html)

abenabap.html abennews.html abennews-79.html abennews-790.html abennews-790-restful.html