---
title: "CDS or DDIC source code was not found"
description: |
  The class `CL_DEMO_CDS_AUTH_PFCG_MAPPING` accesses the view `DEMO_CDS_AUTH_PFCG_MAPPING` and an SQL trace demonstrates how the PFCG mapping works. -   The element list of the left side is a comma-separated list of one or more directly specified CDS elements(ABENCDS_ELEMENT_GLOSRY.html) of the CDS
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_COND_PFCG_MAPPING.htm"
abapFile: "ABENCDS_F1_COND_PFCG_MAPPING.html"
keywords: ["if", "class", "data", "types", "ABENCDS", "COND", "PFCG", "MAPPING"]
---

`... ( ... \{ element1[, element2 ...] \} ... )          =|?= ASPECT pfcg_auth                 ( ... PFCG_MAPPING = pfcg_mapping ...  ) ...`

Assigns an element list specified in curly brackets `\{ element1[, element2 ...] \}` to a [PFCG mapping](ABENCDS_PFCG_MAPPING_GLOSRY.html)\\ `pfcg_mapping` in the definition of a [PFCG condition](ABENCDS_F1_COND_PFCG.html).

When the PFCG condition is transformed into specific conditions, the PFCG mappings are handled as follows by CDS access control:

The other conditions of the [PFCG condition](ABENCDS_F1_COND_PFCG.html) are created as described there. The PFCG condition is true if the conditions for the individually specified CDS elements and the PFCG mapping are met. If multiple authorizations exist for a single authorization field and there are individually specified CDS elements alongside the PFCG mapping, the PFCG mapping is resolved for each individual authorization.

The following role uses the PFCG mapping `demo_cds_pfcg_mapping` defined in the example for [`DEFINE PFCG_MAPPING`](ABENCDS_F1_DEFINE_PFCG_MAPPING.html) in a [PFCG condition](ABENPFCG_CONDITION_GLOSRY.html):

CDS or DDIC source code was not found

The class `CL_DEMO_CDS_AUTH_PFCG_MAPPING` accesses the view `DEMO_CDS_AUTH_PFCG_MAPPING` and an SQL trace demonstrates how the PFCG mapping works.

-   The element list of the left side is a comma-separated list of one or more directly specified [CDS elements](ABENCDS_ELEMENT_GLOSRY.html) of the CDS entity for which the access condition is defined. An element `element` can also be specified using a path expression [`path_expr`](ABENSQL_PATH_EXPRESSION_GLOSRY.html) and must have one of the valid [data types](ABENCDS_F1_DCL_COND_DATA_TYPES.html).
-   After `PFCG_MAPPING =`, the right side must specify a PFCG mapping `pfcg_mapping` defined using [`DEFINE PFCG_MAPPING`](ABENCDS_F1_DEFINE_PFCG_MAPPING.html) as part of a [CDS access policy](ABENCDS_ACCESS_POLICY_GLOSRY.html).

-   The authorization fields specified in the comma-separated list of the definition of the [PFCG mapping](ABENCDS_F1_DEFINE_PFCG_MAPPING.html) are used as input fields of the mapping `pfcg_mapping`.
-   The output fields of the [PFCG mapping](ABENCDS_F1_DEFINE_PFCG_MAPPING.html) are compared with the CDS elements of the element list assigned to the PFCG mapping in the PFCG condition.

-   PFCG mappings enable those entries in a CDS entity allowed for a particular user to be specified using high-order structural characteristics.
-   Using PFCG mappings can negatively affect performance, particularly if individual CDS elements are specified simultaneously and if multiple authorizations exist for a single authorization field.
-   If the PFCG condition has the addition [`IN SCENARIO`](ABENCDS_F1_COND_PFCG.html), the PFCG mapping used in this place must also have this addition and name the same scenario.
-   Optional elements with `DEFAULT TRUE` are removed from the element list of the PFCG mapping. If this applies to all elements, a PFCG mapping with empty element list emerges (such cannot be created literally in an access control yet). The runtime result will be an SQL `EXISTS` on the mapping entity which is supplied from the PFCG role data, but without relation to the protected entity.

abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_role.html abencds\_dcl\_role\_conditions.html abencds\_f1\_cond\_pfcg.html