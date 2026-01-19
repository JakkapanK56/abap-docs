---
title: "No KTD found"
description: |
  This annotation represents some mandatory attributes of the data product ORD definition. Groups the attributes describing the changes of a data product between specific releases. Version of the data product according to the semantic versioning notation: https://semver.org/. The attribute is a combin
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1329702853_ANNO.htm"
abapFile: "ABENCDS_1329702853_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "1329702853", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

No KTD found

This annotation represents some mandatory attributes of the data product ORD definition.

Groups the attributes describing the changes of a data product between specific releases.

Version of the data product according to the semantic versioning notation: https://semver.org/. The attribute is a combination of 3 integer values for MAJOR, MINOR and PATCH versions.

MAJOR is 0 for the data products of status BETA and 1 if status is RELEASED.

Major version should be increased further when one of internal elements of a data product changes its state to "decommissioned":

-   An element of one of the included views
-   One of the views included into the service definition - the successor \*\* view must be included into the data product
-   One of the APIs referenced in outputPorts - the successors must be added to the outputPorts

-   An element of one of the included views
-   One of the views included into the service definition - the successor \*\* view must be included into the data product
-   One of the APIs referenced in outputPorts - the successors must be added to the outputPorts

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `DataIntegration.dataProduct.release.version.major`\\ **Scope** `#SERVICE`\\ **Type** `Integer`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_dataintegration\_f.html