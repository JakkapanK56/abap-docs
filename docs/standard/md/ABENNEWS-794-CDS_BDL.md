---
title: "ABENNEWS-794-CDS_BDL"
description: |
  ABENNEWS-794-CDS_BDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-794-CDS_BDL.htm"
abapFile: "ABENNEWS-794-CDS_BDL.html"
keywords: ["if", "types", "ABENNEWS", "794", "CDS", "BDL"]
---

[1. Abstract BDEF, `mandatory:execute` for Associations](#ABAP_MODIFICATION_1@4@) 

[2\. RAP Default Values Function](#ABAP_MODIFICATION_2@4@)

The optional addition [`mandatory:execute`](ABENBDL_ASSOCIATION_ABSTRACT.html) is now available for associations in [abstract BDEFs](ABENCDS_ABSTRACT_BDEF_GLOSRY.html). It declares the association in question as mandatory, that is, whenever the abstract BDEF is used as an [input parameter](ABENBDL_ACTION_INPUT_PARAM.html) for a [RAP action](ABENRAP_ACTION_GLOSRY.html) or a [RAP function](ABENRAP_FUNCTION_GLOSRY.html), the [`%control`](ABAPDERIVED_TYPES_CONTROL.html) flag must be set for this association.

A [RAP default values function](ABENRAP_BO_DEFAULTING_GLOSRY.html) can be used to default values for fields or input parameters for RAP BO operations on the user interface. The syntax for defining a default values function is [`default function`](ABENBDL_DEFAULT_FUNCTION.html).

abenabap.html abennews.html abennews-79.html abennews-794.html abennews-794-restful.html