---
title: "ABENNEWS-791-ABAP_CDS"
description: |
  ABENNEWS-791-ABAP_CDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-791-ABAP_CDS.htm"
abapFile: "ABENNEWS-791-ABAP_CDS.html"
keywords: ["while", "if", "data", "types", "ABENNEWS", "791", "ABAP", "CDS"]
---

[1\. CDS Analytical Projection View, Projected Entity](#ABAP_MODIFICATION_1@4@)

[2\. Release of CDS Simple Types](#ABAP_MODIFICATION_2@4@)

[3\. New Cardinality Syntax for Associations and Joins](#ABAP_MODIFICATION_3@4@)

[CDS analytical projection views](ABENCDS_ANALYTICAL_PV_GLOSRY.html) can now also have [analytical dimension views](ABENCDS_ANAL_DIM_VIEW_GLOSRY.html) as [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html).

[CDS simple types](ABENCDS_SIMPLE_TYPE_GLOSRY.html) define [elementary data types](ABENELEMENTARY_DATA_TYPE_GLOSRY.html) natively in [ABAP CDS](ABENABAP_CDS_GLOSRY.html). A CDS simple type can be enriched with metadata using [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html). The syntax statement for defining a CDS simple type is [`DEFINE TYPE`](ABENCDS_DEFINE_SIMPLE_TYPE.html).

A new syntax for specifying the [cardinality](ABENCARDINALITY_GLOSRY.html) of [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html), CDS [joins](ABENJOIN_GLOSRY.html), and of filter conditions of [CDS path expressions](ABENSQL_PATH_EXPRESSION_GLOSRY.html) is now available:

\\{MANY | ONE |\\ \\{EXACT ONE\\}\\} TO \\{MANY | ONE |\\ \\{EXACT ONE\\}\\}

This syntax allows a [source](ABENSOURCE_CARDINALITY_GLOSRY.html) and a [target cardinality](ABENTARGET_CARDINALITY_GLOSRY.html) to be specified, while the previously available numeric syntax only allowed the target cardinality to be specified. The new cardinality syntax can be used to improve query performance. It is available in [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), [CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html), [CDS custom entities](ABENCDS_CUSTOM_ENTITY_GLOSRY.html), and [CDS abstract entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html).

abenabap.html abennews.html abennews-79.html abennews-791.html