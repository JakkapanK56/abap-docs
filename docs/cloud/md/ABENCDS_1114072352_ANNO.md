---
title: "No implicit client handling takes place"
description: |
  The joins of the CDS object are modified implicitly. The joins of the CDS object are modified implicitly and the session variable `$session.client` is used implicitly to improve performance. -   For more information about client handling in CDS DDIC-based views, refer to Client Handling in CDS DDIC
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1114072352_ANNO.htm"
abapFile: "ABENCDS_1114072352_ANNO.html"
keywords: ["do", "if", "ABENCDS", "1114072352", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Specifies the client handling of certain CDS objects.

An annotation @ClientHandling cannot be specified together with the obsolete annotation @ClientDependent.

Defines client handling when ABAP SQL is used to access the CDS object.

If the annotation is not specified, the value `#AUTOMATED` is used for CDS views and the value `#NONE` is used for CDS table functions.

No implicit client handling takes place

The joins of the CDS object are modified implicitly.

The joins of the CDS object are modified implicitly and the session variable `$session.client` is used implicitly to improve performance.

-   For more information about client handling in CDS DDIC-based views, refer to [Client Handling in CDS DDIC-based views](ABENCDS_VIEW_CLIENT_HANDLING_V1.html).
-   For more information about client handling in CDS table functions, refer to [Client Handling in CDS Table Functions](ABENCDS_FUNC_CLIENT_HANDLING.html).

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `ClientHandling.algorithm`\\ **Scope** `#TABLE_FUNCTION`, `#VIEW`\\ **Type** `String(20)`\\ **Enums** `#AUTOMATED, #NONE, #SESSION_VARIABLE`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`