---
title: "No KTD found"
description: |
  Target CDS views, which use the annotation value NOT_REQUIRED, are use cases, where no person-related data is accessed. Therefore, the users of the CDS views don’t need to have an additional authorization condition for how to execute the data retrieval regarding the protection of personal data. Tar
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1832902093_ANNO.htm"
abapFile: "ABENCDS_1832902093_ANNO.html"
keywords: ["select", "do", "if", "case", "data", "ABENCDS", "1832902093", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`AccessControl Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/f0a2c16bf64e4edc92f393bcaab0a1c7?version=sap_cross_product_abap).

Defines access control for a CDS object.

No KTD found

Target CDS views, which use the annotation value NOT\_REQUIRED, are use cases, where no person-related data is accessed. Therefore, the users of the CDS views don’t need to have an additional authorization condition for how to execute the data retrieval regarding the protection of personal data.

Target CDS views, which use the annotation value REQUIRED, are use cases, where person-related data, including the related business partner master data, is valid for the primary business purpose as defined and used by the responsible data controller and should be processed. Blocked personal data can be included into the selection result, if the blocking status of the related business partner master data is set and when the user specifically has display authorization for blocked personal data.

Target CDS views, which use the annotation value BLOCKED\_DATA\_INCLUDED are exceptional use cases, where reporting for public authorities, for example, for auditing purposes, should be provided. This use case is a valid reason to process personal data beyond the end of the primary business purpose as defined and used by the responsible data controller. Companies are obliged to include all required data into these reports, which makes a differentiation between blocked and unblocked personal data obsolete. The users of the CDS views need a specific authorization for the application data or CDS view to execute the data retrieval for this specific use case, for example, based on a corresponding legal entity. It would contradict the protection of personal data, if these users would also always need a display authorization for blocked personal data, which they could use to see blocked personal data in other use cases.

The annotation value BLOCKED\_DATA\_EXCLUDED reassures the consumer that blocked personal data is never exposed and thus no authorization checks for blocked personal data are required. The reason for not exposing blocked personal data is purely related to the underlying business logic. For instance, a modeled filter condition for the specific business purpose of the view, such as active data, guarantees in combination with the EoP (End of Purpose) check of the application that blocked personal data can never be retrieved with the view. The modeled filter condition shouldn’t be based on a specific personal data blocking status of the data or a specific authorization condition. For these cases, we recommend that the CDS entity use the annotations REQUIRED or #('TRANSACTIONAL\_DATA').

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AccessControl.personalData.blocking`\\ **Scope** `#HIERARCHY`, `#TABLE_ENTITY`, `#TABLE_FUNCTION`, `#VIEW`\\ **Type** `String(30)`\\ **Enums** `#BLOCKED_DATA_EXCLUDED, #BLOCKED_DATA_INCLUDED, #NOT_REQUIRED, #REQUIRED`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_accesscontrol\_f.html