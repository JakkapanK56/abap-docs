---
title: "ABENNEWS-790-ABAP_CDS"
description: |
  ABENNEWS-790-ABAP_CDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-790-ABAP_CDS.htm"
abapFile: "ABENNEWS-790-ABAP_CDS.html"
keywords: ["select", "do", "if", "try", "data", "ABENNEWS", "790", "ABAP", "CDS"]
---

The CDS annotation `@AbapCatalog.preserveKey` is [obsolete](ABENCDS_ANNOTATION_OBSOLETE.html) and has partly a different behavior now.

The annotation was used before Release 7.90 to define the key fields of the [CDS-managed DDIC view](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of an obsolete [CDS DDIC-based view](ABENCDS_V1_VIEW_GLOSRY.html). The annotation can be kept in existing data definitions, but it does not have an effect any more and leads to a syntax check warning. The key fields of the CDS-managed DDIC view are always defined by the addition [`key`](ABENCDS_SELECT_LIST_ENTRY_V2.html) in the `SELECT` list.

The change in behavior between 7.89 and 7.90 is incompatible. The key fields of the CDS-managed DDIC view of an obsolete CDS DDIC-based view are defined differently now for views where the annotation was not specified or where it was specified with the value `false`. The value `false` was used to define the key fields of the CDS-managed DDIC view as for a DDIC database views in ABAP Dictionary, regardless of the addition `KEY`. It was also the standard value, when the annotation was not specified. Now, the behavior is always as for the value `true`.

abenabap.html abennews.html abennews-79.html abennews-790.html