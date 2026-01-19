---
title: "ABENNEWS-796-CDS_BDL"
description: |
  ABENNEWS-796-CDS_BDL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-796-CDS_BDL.htm"
abapFile: "ABENNEWS-796-CDS_BDL.html"
keywords: ["if", "ABENNEWS", "796", "CDS", "BDL"]
---

[1\. RAP Business Events for Child Entities](#ABAP_MODIFICATION_1@4@)

[2\. Subentities as Authorization Master](#ABAP_MODIFICATION_2@4@)

[3\. Result Multiplicity in Factory Actions](#ABAP_MODIFICATION_3@4@)

[4\. RAP Key Functions](#ABAP_MODIFICATION_4@4@)

[RAP business events](ABENRAP_ENTITY_EVENT_GLOSRY.html) can now also be defined for [CDS child entities](ABENCHILD_ENTITY_GLOSRY.html). Up to now, a RAP business event could only be defined for the [root node](ABENROOT_NODE_GLOSRY.html) of a [RAP business object](ABENRAP_BO_GLOSRY.html).

You can now define [RAP BO entities](ABENRAP_BO_ENTITY_GLOSRY.html) as [RAP authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html) that are not defined as [root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html).

[RAP factory actions](ABENRAP_FACTORY_ACTION_GLOSRY.html) now allow result multiplicity. This means that the cardinality can have one of the following values:

A factory action can be used to create none, one, or any number of [entity instances](ABENRAP_BO_ENTITY_INST_GLOSRY.html).

[RAP key functions](ABENRAP_KEY_FUNCTION_GLOSRY.html) are now available. A RAP key function is defined with reference to a [BDEF alternative key](ABENRAP_ALTERNATIVE_KEY_GLOSRY.html) and it returns the entity instances with matching values.

-   [`[0..*]`](ABENBDL_ACTION_FACTORY.html)
-   [`[1..*]`](ABENBDL_ACTION_FACTORY.html)

abenabap.html abennews.html abennews-79.html abennews-796.html abennews-796-restful.html