---
title: "To release a CDS entity or display its release state,"
description: |
  The release contract `C1` guarantees a stable interface for system-internal use within AS ABAP. Defines allowed changes to the usage of the annotation in a CDS entity with release contract `C1` after its release. Defines whether the annotation values may be changed in a CDS entity with release con
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1971561783-_ANNO.htm"
abapFile: "ABENCDS_1971561783-_ANNO.html"
keywords: ["update", "do", "if", "data", "ABENCDS", "1971561783", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Define the usage and changeability of an annotation in released CDS entities as specified by the corresponding release contract `C0`, `C1` or `C2`.

In annotation definitions delivered by SAP, the annotations `@CompatibilityContract` must be specified for the release contract `C1` and `C2`, both for the main annotation and for every sub-annotation. They define the usability of the main annotations and sub-annotations in the CDS source code of a released CDS entity with respect to the release contract. If the annotation is not specified, the value `false` is used.

To release a CDS entity or display its release state,

The release contract `C1` guarantees a stable interface for *system-internal use* within AS ABAP.

Defines allowed changes to the usage of the annotation in a CDS entity with release contract `C1` after its release.

Defines whether the annotation values may be changed in a CDS entity with release contract `C1` after its release.

-   either right-click on its *Data Definition* in the *Project Explorer* and choose option *API State*,
-   or open the *Properties* view of the CDS entity and click on tab *API State*.

-   either right-click on its *Data Definition* in the *Project Explorer* and choose option *API State*,
-   or open the *Properties* view of the CDS entity and click on tab *API State*.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `CompatibilityContract.c1.allowedChanges.value[ ]`\\ **Scope** `#ANNOTATION`\\ **Type** `String(20)`\\ **Enums** `#ADD, #ANY, #CUSTOM, #FALSE_TO_TRUE, #NONE, #REMOVE, #TRUE_TO_FALSE, #UPDATE`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `-` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_compatibilitycontract\_a.html