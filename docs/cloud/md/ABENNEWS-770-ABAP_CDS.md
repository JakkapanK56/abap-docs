---
title: "ABENNEWS-770-ABAP_CDS"
description: |
  ABENNEWS-770-ABAP_CDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-770-ABAP_CDS.htm"
abapFile: "ABENNEWS-770-ABAP_CDS.html"
keywords: ["if", "data", "ABENNEWS", "770", "ABAP", "CDS"]
---

[1\. CDS Abstract Entities](#ABAP_MODIFICATION_1@4@)

[2\. Metadata Extensions for CDS Entities](#ABAP_MODIFICATION_2@4@)

An [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) defines the type properties of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) without creating an instance of a database object. A CDS abstract entity is defined using [`DEFINE ABSTRACT ENTITY`](ABENCDS_F1_DEFINE_ABSTRACT_ENTITY.html) in a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html).

The variant [`ANNOTATE ENTITY`](ABENCDS_F1_ANNOTATE_VIEW.html) was added to the previous statement [`ANNOTATE VIEW`](ABENCDS_F1_ANNOTATE_VIEW.html). This makes it possible to define [CDS metadata extensions](ABENCDS_METADATA_EXTENSION_GLOSRY.html) for any [CDS entities](ABENCDS_ENTITY_GLOSRY.html) with the exception of [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html). Metadata extensions of this type can contain entity annotations, parameter annotations, and element annotations.

abenabap.html abennews.html abennews-77.html abennews-770.html