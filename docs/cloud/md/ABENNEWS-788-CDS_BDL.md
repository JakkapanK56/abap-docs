---
title: "ABENNEWS-788-CDS_BDL"
description: |
  ABENNEWS-788-CDS_BDL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-788-CDS_BDL.htm"
abapFile: "ABENNEWS-788-CDS_BDL.html"
keywords: ["if", "method", "class", "data", "types", "ABENNEWS", "788", "CDS", "BDL"]
---

[1\. CDS Interface Behavior Definitions](#ABAP_MODIFICATION_1@4@)

[2\. Managed RAP BO, New Field Characteristic](#ABAP_MODIFICATION_2@4@)

[3. Managed RAP BO, `with full data`](#ABAP_MODIFICATION_3@4@)

[4\. Abstract BDEF, New Field Characteristic](#ABAP_MODIFICATION_4@4@)

A new [implementation type](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html) is available: the [RAP interface behavior definition](ABENBDL_RAP_BO_INTERFACE.html). Such interface BDEFs are based on [CDS transactional interfaces](ABENCDS_TRANS_INTERFACE_GLOSRY.html) and define the behavior of a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html). The overall purpose of a RAP BO interface is to project a business object for stable consumption.

In [managed RAP business objects](ABENMANAGED_RAP_BO_GLOSRY.html), a new field characteristic is available: [`field(suppress)`](ABENBDL_FIELD_CHAR.html). It removes the field in question from the [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html) and from all RAP APIs.

In [managed RAP business objects](ABENMANAGED_RAP_BO_GLOSRY.html), the optional addition [`with full data`](ABENBDL_SAVING.html) can be used in combination with one of the [RAP saving options](ABENBDL_SAVING.html) to ensure that full instance data is handed over to the `save_modified` method of the RAP saver class in the ABAP behavior pool.

In [RAP abstract behavior definitions](ABENCDS_ABSTRACT_BDEF_GLOSRY.html), a new [RAP field characteristic](ABENRAP_FIELD_CHAR_GLOSRY.html) is available: [`mandatory:execute`](ABENBDL_FIELD_ABSTRACT.html). It declares the field in question as mandatory. Whenever the hierarchical type is used as input parameter for a RAP action or a RAP function, a value must be supplied.

abenabap.html abennews.html abennews-78.html abennews-788.html abennews-788-restful.html