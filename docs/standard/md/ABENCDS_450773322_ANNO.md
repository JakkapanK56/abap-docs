---
title: "ABENCDS_450773322_ANNO"
description: |
  ABENCDS_450773322_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_450773322_ANNO.htm"
abapFile: "ABENCDS_450773322_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "450773322", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Technical settings of a CDS entity.

**Obsolete:** Used before release 7.58/7.90 to define the key fields of the CDS-managed DDIC view of an obsolete CDS DDIC-based view.

The annotation can be kept in existing DDLS sources, but it does not have an effect any more and leads to a warning from the syntax check. The key fields of the CDS-managed DDIC view are always defined by the addition `KEY` in the `SELECT` list.

`true`: This value was used to specify that the key fields of the CDS-managed DDIC view are defined by the addition `KEY` in the `SELECT` list. This is the present behavior.

`false`: This value was used to define the key fields of the CDS-managed DDIC view as for a DDIC database views in ABAP Dictionary, regardless of the addition `KEY`. It was also the standard value, when the annotation was not specified. Now, the behavior is always as for the value `true`.

The change in behavior between 7.57/7.89 and 7.58/7.90 is incompatible. The key fields of the CDS-managed DDIC view of an obsolete CDS DDIC-based view are defined differently now for views where the annotation was not specified or where it was specified with the value `false`.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `AbapCatalog.preserveKey`\\ **Scope** `#VIEW`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_abapcatalog\_a.html