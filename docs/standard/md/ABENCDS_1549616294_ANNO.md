---
title: "Annotation Values"
description: |
  true: Client safety is ensured by stricter checks. false: Client safety is not ensured. If the annotation is not specified, the value false is used. -   Client Safety of CDS View Entities(ABENCDS_V2_VIEW_CLIENT_SAFETY.html) -   Client Safety of CDS Table Functions(ABENCDS_FUNC_CLIENT_SAFETY.html
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1549616294_ANNO.htm"
abapFile: "ABENCDS_1549616294_ANNO.html"
keywords: ["do", "if", "ABENCDS", "1549616294", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

For more information about [client safe](ABENCLIENT_SAFE_GLOSRY.html) CDS entities, refer to:

Specifies the client handling of certain CDS objects.

An annotation @ClientHandling cannot be specified together with the obsolete annotation @ClientDependent.

Enables or disables client safety checks for a CDS object.

Annotation Values

true: Client safety is ensured by stricter checks.

false: Client safety is not ensured.

If the annotation is not specified, the value false is used.

-   [Client Safety of CDS View Entities](ABENCDS_V2_VIEW_CLIENT_SAFETY.html)
-   [Client Safety of CDS Table Functions](ABENCDS_FUNC_CLIENT_SAFETY.html)

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `ClientHandling.clientSafe`\\ **Scope** `#HIERARCHY`, `#TABLE_FUNCTION`, `#VIEW`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_clienthandling\_a.html