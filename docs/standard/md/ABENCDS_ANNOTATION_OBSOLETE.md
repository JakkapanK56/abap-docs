---
title: "ABENCDS_ANNOTATION_OBSOLETE"
description: |
  ABENCDS_ANNOTATION_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_ANNOTATION_OBSOLETE.htm"
abapFile: "ABENCDS_ANNOTATION_OBSOLETE.html"
keywords: ["select", "do", "if", "ABENCDS", "ANNOTATION", "OBSOLETE"]
---

The following CDS annotations are obsolete.

Defines [client handling](ABENCDS_VIEW_CLIENT_HANDLING_OBS.html) for obsolete [CDS DDIC-based views](ABENCDS_V1_VIEW_GLOSRY.html).

-   AbapCatalog Annotations for obsolete [CDS DDIC-based views](ABENCDS_V1_VIEW_GLOSRY.html)

-   `[AbapCatalog.dbHints.dbSystem](ABENCDS_680013611-_ANNO.html)`
-   `[AbapCatalog.dbHints.hint](ABENCDS_828976635-_ANNO.html)`
-   `[AbapCatalog.preserveKey](ABENCDS_450773322_ANNO.html)`

-   The obsolete annotation `@ClientDependent` is replaced by the annotations `@ClientHandling.type` and `@ClientHandling.algorithm`.
-   The obsolete annotation `@ClientDependent` does not have a default value if it is not used. If neither of the annotations `@ClientDependent` or `@ClientHandling` are specified, the default values of the `@ClientHandling` annotations apply.
-   The obsolete annotation `@ClientDependent` cannot be specified together with the annotation `@ClientHandling`.
-   The obsolete annotation `ClientDependent` is not defined with [`DEFINE ANNOTATION`](ABENCDS_F1_DEFINE_ANNOTATION.html) and there is no [Annotation Documentation](ABENCDS_ANNOTATIONS_KTD_DOCU.html).

**Annotation** **Meaning** \\ **Annotation Values** **Default Value if Not Used** **Default Value if Used Without Value**\\ `ClientDependent` Defines [client handling](ABENCDS_VIEW_CLIENT_HANDLING_OBS.html) when ABAP SQL is used to access the CDS view (obsolete). `true`:\\
The CDS view is client-dependent. The view fields of the CDS entity do not cover a client column, from the perspective of an ABAP program. When accessed using [`SELECT`](ABAPSELECT.html), [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) is applied. \\
\\
`false`:\\
The CDS view is a client-independent view. No [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) is applied. `-` `true` abenabap.html abencds.html abencds\_obsolete.html