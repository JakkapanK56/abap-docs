---
title: "To release a CDS entity or display its release state,"
description: |
  The release contract `C0` permits adding of custom fields at dedicated extension points using the key user app Custom Fields and Logic. Defines the usage of an annotation in CDS entities with release contract `C0`: -   either right-click on its Data Definition in the Project Explorer and cho
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1698583913-_ANNO.htm"
abapFile: "ABENCDS_1698583913-_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "1698583913", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Define the usage and changeability of an annotation in released CDS entities as specified by the corresponding release contract `C0`, `C1` or `C2`.

In annotation definitions delivered by SAP, the annotations `@CompatibilityContract` must be specified for the release contract `C1` and `C2`, both for the main annotation and for every sub-annotation. They define the usability of the main annotations and sub-annotations in the CDS source code of a released CDS entity with respect to the release contract. If the annotation is not specified, the value `false` is used.

To release a CDS entity or display its release state,

The release contract `C0` permits *adding of custom fields* at dedicated extension points using the key user app *Custom Fields and Logic*.

Defines the usage of an annotation in CDS entities with release contract `C0`:

-   either right-click on its *Data Definition* in the *Project Explorer* and choose option *API State*,
-   or open the *Properties* view of the CDS entity and click on tab *API State*.

-   Value `true`: The annotation may be used.
-   Value `false`: The annotation must not be used.

-   either right-click on its *Data Definition* in the *Project Explorer* and choose option *API State*,
-   or open the *Properties* view of the CDS entity and click on tab *API State*.

-   Value `true`: The annotation may be used.
-   Value `false`: The annotation must not be used.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `CompatibilityContract.c0.usageAllowed`\\ **Scope** `#ANNOTATION`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `-` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_compatibilitycontract\_a.html