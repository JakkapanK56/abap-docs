---
title: "ABENBDL_ASSOC_NONSTAND_OPS"
description: |
  ABENBDL_ASSOC_NONSTAND_OPS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_ASSOC_NONSTAND_OPS.htm"
abapFile: "ABENBDL_ASSOC_NONSTAND_OPS.html"
keywords: ["ABENBDL", "ASSOC", "NONSTAND", "OPS"]
---

Non-standard operations for [associations](ABENASSOCIATION_GLOSRY.html) provide noncanonical behavior along an [association path](ABENCDS_ASSOCIATION_PATH_GLOSRY.html) from an [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) to an [association target](ABENASSOCIATION_TARGET_GLOSRY.html).

The following non-standard operations for associations are available:

-   [Link and Unlink Action](ABENBDL_LINK_UNLINK_ACTION.html):
-   A [RAP non-standard operation for associations](ABENRAP_NONST_OP_ASSOC_GLOSRY.html) that associates a [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html) to another RAP BO entity instance by setting the [foreign key](ABENFOREIGN_KEY_GLOSRY.html). The link action can be defined for [intra-BO associations](ABENCDS_INTRA_BO_ASSOC_GLOSRY.html) and for [cross-BO associations](ABENCDS_CROSS_BO_ASSOC_GLOSRY.html).
-   The unlink action disconnects two associated [RAP BO entity instances](ABENRAP_BO_ENTITY_INST_GLOSRY.html) by removing the value of the [foreign key](ABENFOREIGN_KEY_GLOSRY.html) field.
-   [Inverse Function](ABENBDL_INVERSE_FUNCT.html):
-   A [RAP non-standard operation for associations](ABENRAP_STANDARD_OP_ASSOC_GLOSRY.html) that receives the values of the [foreign key fields](ABENFOREIGN_KEY_FIELD_GLOSRY.html) of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) instances as input and provides the corresponding [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) instances as result. It can be used, for example, to enable [read-by-association operations](ABENRAP_RBA_OPERATION_GLOSRY.html) in a[cross-BO](ABENCDS_CROSS_BO_ASSOC_GLOSRY.html) scenario.

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_association.html