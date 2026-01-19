---
title: "ABENNEWS-787-ABAP_CDS"
description: |
  ABENNEWS-787-ABAP_CDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-787-ABAP_CDS.htm"
abapFile: "ABENNEWS-787-ABAP_CDS.html"
keywords: ["if", "try", "data", "types", "ABENNEWS", "787", "ABAP", "CDS"]
---

[1\. Comparisons with CDS Amount Fields and CDS Quantity Fields](#ABAP_MODIFICATION_1@4@)

[2\. CDS View Entity, Extended Cast Matrix](#ABAP_MODIFICATION_2@4@)

[3\. CDS View Entity, Table Buffering](#ABAP_MODIFICATION_3@4@)

Special handling for [CDS amount fields](ABENCDS_AMOUNT_FIELD.html) and [CDS quantity fields](ABENCDS_QUANTITY_FIELD.html) for [comparisons](ABENCDS_COND_EXPR_TYPES_V2.html) in [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) has been implemented.

New [casting options](ABENCDS_CAST_EXPRESSION_V2.html) have been added in [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html).

[Table buffering](ABENTABLE_BUFFERING_GLOSRY.html) can be defined for [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) now:

Table buffering can be defined differently for the layers core, localization, industry, partner and customer.

-   Casting from data type `SSTRING` into data types `DEC`, `CURR`, `QUAN`, `INT1`, `INT2`, `INT4`, `INT8`, `DECFLOAT16`, and `DECFLOAT34` is now possible.
-   Casting from data type `CHAR` into data types `DEC`, `CURR`, `QUAN`, `INT1`, `INT2`, `INT4`, `INT8`, `DECFLOAT16`, and `DECFLOAT34` is now possible.
-   Casting from data type `DATS` into data types `DEC`, `CURR`, `QUAN`, `INT1`, `INT2`, `INT4`, `INT8`, `DECFLOAT16`, and `DECFLOAT34` is now possible.
-   Casting from data type `TIMS` into data types `DEC`, `CURR`, `QUAN`, `INT1`, `INT2`, `INT4`, `INT8`, `DECFLOAT16`, and `DECFLOAT34` is now possible.
-   Casting from data types `DECFLOAT16` and `DECFLOAT34` into data type `CHAR` is now possible.

-   Table buffering can be enabled and disabled with the annotation
-   [`@AbapCatalog.entityBuffer.definitionAllowed: true|false`](ABENCDS_V2_VIEW_BUFFERING.html)
-   The [buffering type](ABENBUFFER_TYPE.html) can be specified with a [CDS entity buffer](ABENCDS_VIEW_ENTITY_B_GLOSRY.html) defined by
-   [`DEFINE VIW ENTITY BUFFER ON cds_view_entity ...`](ABENCDS_DEFINE_VIEW_ENTITY_BUFFER.html)

abenabap.html abennews.html abennews-78.html abennews-787.html