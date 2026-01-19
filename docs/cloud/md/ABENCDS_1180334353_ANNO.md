---
title: "ABENCDS_1180334353_ANNO"
description: |
  ABENCDS_1180334353_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1180334353_ANNO.htm"
abapFile: "ABENCDS_1180334353_ANNO.html"
keywords: ["select", "update", "do", "if", "data", "ABENCDS", "1180334353", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Defines access control for a CDS object.

Defines implicit access control when ABAP SQL is used to access the CDS object.

If the annotation is not specified, the value `#NOT_REQUIRED` is used.

Like `#CHECK`, but there is no syntax check warning.

When no access control exists, all users have full access to the entity. When an access control exist, it is evaluated.

No access control shall exist. When an access control exists, it is ignored at runtime. Use this for technical entities where access control would be harmful. This value does not prevent the creation of access controls, however a warning will be emitted that the access control is not applied at runtime.

An access control must exist. When no access control has been created for the entity, a runtime error will occur when the entity is accessed in ABAP SQL. Use this for entities where access control is critical and accidental removal of the access control must not remain unnoticed.

If ABAP SQL is used to access the view, access control is performed implicitly if a CDS role is assigned to the view.

The runtime behavior is identical to #NOT\_REQUIRED, however there is a syntax warning in the CDS object when no access control exists yet.

This special value is only evaluated by dedicated frameworks (SADL). For ABAP SQL, the actual behavior is like #CHECK. Customers shall not use this value unless explicitly requested by documentation.

-   The value `#NOT_REQUIRED` is recommended for CDS objects that do not require [access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) in the beginning, but that might later on be enhanced with roles.
-   [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) does not work for client-independent access. For CDS objects that are subject to client-independent access, it is recommended that the annotation `AccessControl.authorizationCheck:#NOT_ALLOWED` is used.
-   There are some restrictions for CDS hierarchies that are described under [DCL Restrictions for CDS Hierarchies](ABENCDS_F1_DCL_HIERARCHIES.html).
-   In the context of the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html), additional rules for using this annotation apply. They are described in the topic [RAP - CDS-Based Authorization](ABENBDL_CDS_BASED_AUTH.html).
-   The value `#NOT_ALLOWED` disables implicit access control when the CDS view entity is accessed in ABAP SQL. To disable access control for views not annotated with this annotation, the addition [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) can be used in the [`FROM`](ABAPFROM_CLAUSE.html) clause.
-   During update sessions the authorization check must be disabled with the annotation or with the ABAP SQL addition `WITH PRIVILEGED ACCESS`. If not, a [runtime error](ABENRUNTIME_ERROR_GLOSRY.html) occurs.
-   [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) does not work for client-independent access. This is why in ABAP SQL, the addition `USING` can only be used when accessing CDS entities where access control is disabled. It is recommended that the annotation `AccessControl.authorizationCheck:#NOT_ALLOWED` is only specified for CDS objects that are subject to client-independent access.
-   The obsolete addition `CLIENT SPECIFIED` can also only be used when accessing CDS objects where access control is disabled.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `AccessControl.authorizationCheck`\\ **Scope** `#EXTERNAL_ENTITY`, `#HIERARCHY`, `#TABLE_ENTITY`, `#TABLE_FUNCTION`, `#VIEW`\\ **Type** `String(20)`\\ **Enums** `#CHECK, #MANDATORY, #NOT_ALLOWED, #NOT_REQUIRED, #PRIVILEGED_ONLY`\\ **Default** `#NOT_REQUIRED`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`