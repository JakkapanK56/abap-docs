---
title: "ABENCDS_1373877666-_ANNO"
description: |
  ABENCDS_1373877666-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1373877666-_ANNO.htm"
abapFile: "ABENCDS_1373877666-_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "1373877666", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

`AbapCatalog.extensibility.dataSources`

Technical settings of a CDS entity.

Extensibility settings for CDS objects.

Allowlist of stable alias names of data sources and locally defined associations to be used in extensions.

`data_source_name:`

Alias name of a data source or alias name of a locally defined or redefined association.

-   can only be specified if extensions are allowed. If `@AbapCatalog.extensibility.extensible` is set to `false` or `@AbapCatalog.viewEnhancementCategory` is set to `#NONE`, no data sources can be specified.
-   can specify only such associations as `data_source_name` which have a maximum [target cardinality](ABENTARGET_CARDINALITY_GLOSRY.html) not greater than 1.
-   must not be set in union views.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `AbapCatalog.extensibility.dataSources[ ]`\\ **Scope** `#VIEW`\\ **Type** `LocalDefinitionRef`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_abapcatalog\_a.html