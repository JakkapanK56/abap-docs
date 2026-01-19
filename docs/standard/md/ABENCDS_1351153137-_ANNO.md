---
title: "ABENCDS_1351153137-_ANNO"
description: |
  ABENCDS_1351153137-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1351153137-_ANNO.htm"
abapFile: "ABENCDS_1351153137-_ANNO.html"
keywords: ["do", "if", "ABENCDS", "1351153137", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`AccessControl Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/f0a2c16bf64e4edc92f393bcaab0a1c7?version=sap_cross_product_abap).

Defines access control for a CDS object.

All associations that are exposed in the projection list and that are mentioned in the list defined in this annotation shall allow privileged access to the association target. No access control check happens at runtime. This annotation is evaluated by the SADL framework only.

-   In the context of the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html), additional rules for using this annotation apply. They are described in the topic [RAP - CDS-Based Authorization](ABENBDL_CDS_BASED_AUTH.html).

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AccessControl.privilegedAssociations[ ]`\\ **Scope** `#CUSTOM_ENTITY`, `#HIERARCHY`, `#TABLE_ENTITY`, `#TABLE_FUNCTION`, `#VIEW`\\ **Type** `AssociationRef`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_accesscontrol\_f.html