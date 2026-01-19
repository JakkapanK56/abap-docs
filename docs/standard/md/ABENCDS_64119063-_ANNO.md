---
title: "ABENCDS_64119063-_ANNO"
description: |
  ABENCDS_64119063-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_64119063-_ANNO.htm"
abapFile: "ABENCDS_64119063-_ANNO.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "ABENCDS", "64119063", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`AccessControl Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/f0a2c16bf64e4edc92f393bcaab0a1c7?version=sap_cross_product_abap).

Defines access control for a CDS object.

For the operations specified in the annotation, access control is enforced at runtime. For operations that are not specified, access control is disabled, with the exception of the `SELECT` operation. In the case of the `SELECT` operation, the system falls back to the value stored in the '@AccessControl.authorizationCheck' annotation.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AccessControl.authorizationCheckMandatory[ ]`\\ **Scope** `#EXTERNAL_ENTITY`, `#HIERARCHY`, `#TABLE_ENTITY`, `#TABLE_FUNCTION`, `#VIEW`\\ **Type** `String(20)`\\ **Enums** `#DELETE, #INSERT, #SELECT, #UPDATE`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_accesscontrol\_f.html