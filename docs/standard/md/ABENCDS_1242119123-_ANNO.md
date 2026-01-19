---
title: "ABENCDS_1242119123-_ANNO"
description: |
  ABENCDS_1242119123-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1242119123-_ANNO.htm"
abapFile: "ABENCDS_1242119123-_ANNO.html"
keywords: ["select", "do", "if", "ABENCDS", "1242119123", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More information:

Activates [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) with single record buffering for the CDS view `business_partner`.

For the CDS view `business_partner`, activates [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) for a generic area and a key element.

Technical settings of a CDS entity.

Defines table buffering for a CDS DDIC-based view.

Activates and deactivates table buffering for the CDS DDIC-based view.

If the annotation is not specified, the value `#SWITCHED_OFF` is used.

Table buffering not allowed.

Table buffering active.

Table buffering allowed but not active.

-   [Table Buffering of CDS DDIC-Based Views](ABENCDS_V1_BUFFERING.html)

@AbapCatalog.sqlViewName: 'BPA\_VW' \\n@AbapCatalog.buffering.status: #ACTIVE \\n@AbapCatalog.buffering.type: #SINGLE \\ndefine view business\_partner as \\n select from snwd\_bpa \\n \\{ key snwd\_bpa.bp\_id as id, \\n snwd\_bpa.bp\_role as role, \\n snwd\_bpa.company\_name, \\n snwd\_bpa.phone\_number \\} @AbapCatalog.sqlViewName: 'BPA\_VW' \\n@AbapCatalog.buffering.status: #ACTIVE \\n@AbapCatalog.buffering.type: #GENERIC \\n@AbapCatalog.buffering.numberOfKeyFields: 1 \\ndefine view business\_partner as \\n select from snwd\_bpa \\n \\{ key snwd\_bpa.bp\_id as id, \\n snwd\_bpa.bp\_role as role, \\n snwd\_bpa.company\_name, \\n snwd\_bpa.phone\_number \\} **Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `AbapCatalog.buffering.status`\\ **Scope** `#VIEW`\\ **Type** `String(20)`\\ **Enums** `#ACTIVE, #NOT_ALLOWED, #SWITCHED_OFF`\\ **Default** `#SWITCHED_OFF`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_abapcatalog\_a.html