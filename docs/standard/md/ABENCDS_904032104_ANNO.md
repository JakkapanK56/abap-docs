---
title: "No KTD found"
description: |
  No KTD found The channel that implements the specific area sends the log-relevant field values to the read access logging framework. Name of the business area of the log domain For a log domain, you specify a business area that the data element is related to. The business area is necessary because d
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_904032104_ANNO.htm"
abapFile: "ABENCDS_904032104_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "904032104", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`AccessControl Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/f0a2c16bf64e4edc92f393bcaab0a1c7?version=sap_cross_product_abap).

Defines access control for a CDS object.

No KTD found

No KTD found

The channel that implements the specific area sends the log-relevant field values to the read access logging framework.

Name of the business area of the log domain

For a log domain, you specify a business area that the data element is related to. The business area is necessary because different applications might use the same log domain. For example, a log domain "account" might be something different in the Human Resources application than it is in the Banking application.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AccessControl.readAccess.logging.logdomain[ ].area`\\ **Scope** `#ELEMENT`, `#HIERARCHY`, `#PARAMETER`, `#TABLE_ENTITY`, `#VIEW`\\ **Type** `String(30)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `-` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_accesscontrol\_f.html