---
title: "ABENCDS_META_DATA_EXTENSION_EVAL"
description: |
  ABENCDS_META_DATA_EXTENSION_EVAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_META_DATA_EXTENSION_EVAL.htm"
abapFile: "ABENCDS_META_DATA_EXTENSION_EVAL.html"
keywords: ["if", "try", "method", "class", "data", "ABENCDS", "META", "DATA", "EXTENSION", "EVAL"]
---

When [evaluating annotations](ABENCDS_ANNOTATIONS_ANALYSIS.html) with the class `CL_DD_DDL_ANNOTATION_SERVICE`, the annotations from metadata extensions are considered first. If there are different metadata extensions for the same CDS entity, priority is determined by the following criteria:

The methods of the class `CL_DD_DDL_ANNOTATION_SERVICE` collect the annotations they have returned, depending on the variant and the layers, according to the following hierarchy:

If there are several metadata extensions in a layer, the annotations of the first metadata extension to be found are used. The metadata extensions are evaluated according to an undefined but stable order.

-   **Layer of metadata extension**
-   The layer of a metadata extension is defined in its definition with [`ANNOTATE`](ABENCDS_F1_ANNOTATE_VIEW.html) by the annotation [`@Metadata.layer`](ABENCDS_F1_METADATA_EXT_ANNOS.html). These are the enumeration symbols for layers, in descending order of priority:

-   `#CUSTOMER`
-   `#PARTNER`
-   `#INDUSTRY`
-   `#LOCALIZATION`
-   `#CORE`

1.  The annotations are evaluated according to the layer defined by the annotation `@Metadata.layer`. Annotations found in a higher layer are no longer searched for in a lower layer, so any annotation that exists there is overridden.
2.  Then, the annotations of the CDS entity itself that are not found in a metadata extension are added as well. These can be annotations from the source code and inherited annotations. For annotations inherited from other CDS entities, any metadata extensions are evaluated first, according to the hierarchy described above.

abenabap.html abencds.html abencds\_annotations.html abencds\_anno\_usage.html abencds\_meta\_data\_extensions.html