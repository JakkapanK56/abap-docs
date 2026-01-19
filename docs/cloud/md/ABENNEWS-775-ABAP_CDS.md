---
title: "ABENNEWS-775-ABAP_CDS"
description: |
  ABENNEWS-775-ABAP_CDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-775-ABAP_CDS.htm"
abapFile: "ABENNEWS-775-ABAP_CDS.html"
keywords: ["if", "ABENNEWS", "775", "ABAP", "CDS"]
---

[1\. Temporal Hierarchies](#ABAP_MODIFICATION_1@4@)

[2\. CDS Custom Entities](#ABAP_MODIFICATION_2@4@)

[3\. Root Nodes and Compositions](#ABAP_MODIFICATION_3@4@)

The new addition `PERIOD` of the statement [`DEFINE HIERARCHY`](ABENCDS_F1_DEFINE_HIERARCHY.html) can now be used to create [temporal SQL hierarchies](ABENTEMPORAL_HIERARCHY_GLOSRY.html) in which the hierarchy nodes are limited by time intervals.

A new type of [CDS entity](ABENCDS_ENTITY_GLOSRY.html) is available: the [CDS custom entity](ABENCDS_CUSTOM_ENTITIES.html). CDS custom entities are used in the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html) to implement ABAP queries in CDS.

The new addition `ROOT` is available for CDS entities to mark an entity as a [CDS root entity](ABENROOT_ENTITY_GLOSRY.html). In addition, [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) can be declared as `COMPOSITION` or `TO PARENT`. In this way, a [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) can be modeled for use in the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html).

abenabap.html abennews.html abennews-77.html abennews-775.html