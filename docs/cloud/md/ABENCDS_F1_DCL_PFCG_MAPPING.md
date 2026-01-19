---
title: "ABENCDS_F1_DCL_PFCG_MAPPING"
description: |
  ABENCDS_F1_DCL_PFCG_MAPPING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_DCL_PFCG_MAPPING.htm"
abapFile: "ABENCDS_F1_DCL_PFCG_MAPPING.html"
keywords: ["if", "data", "types", "ABENCDS", "DCL", "PFCG", "MAPPING"]
---

Elements of CDS entities are linked with an [authorization object](ABENAUTHORIZATION_OBJECT_GLOSRY.html) in [PFCG conditions](ABENCDS_F1_COND_PFCG.html) in the [CDS DCL](ABENCDS_DCL_GLOSRY.html). The [access condition](ABENACCESS_CONDITION_GLOSRY.html) itself is generated from [authorizations](ABENAUTHORIZATION_GLOSRY.html) of the current user for the authorization object. Here, the value of [CDS elements](ABENCDS_ELEMENT_GLOSRY.html) is supplied with field values of the authorizations. The following points should be noted.

The field values of authorizations are saved as text fields with length 40. For the assignment, they must be convertible to the [data type](ABENCDS_F1_DCL_COND_DATA_TYPES.html) of the CDS elements:

If a field value cannot be converted, the field value is ignored.

If a field value contains a wildcard character (`*`) as its final character, it is used to create a `LIKE` condition in which the wildcard character `*` is replaced by the SQL wildcard character `%`.

If the field value contains the SQL wildcard characters `%` and `_`, the escape character `#` is assigned to them implicitly. This means that CDS access control checks the characters `%` and `_` in field values like regular characters.

The field value `"10%*"` produces the condition `LIKE '10#%%' ESCAPE '#'`.

-   The rules for [lossless assignments](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html) must be followed. If this is not possible, the field value is ignored.
-   If an authorization requests a pattern comparison using a wildcard character (`*`), the data type of the CDS element must be character-like.

-   Field values that are ignored are, for example, field values that are longer than the CDS element or field values with a non-numeric content for a numeric CDS element.
-   If field values are ignored, CDS access control may block access completely.
-   Ignored field values are not logged, which means that they cannot be known to the system administrator or to the user.

abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_role.html abencds\_dcl\_role\_conditions.html abencds\_f1\_cond\_pfcg.html