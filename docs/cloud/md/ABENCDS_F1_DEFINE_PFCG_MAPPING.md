---
title: "CDS or DDIC source code was not found"
description: |
  -   A comma-separated list after the name `pfcg_mapping` in which the output fields of the PFCG mapping are defined. These fields must be elements of the CDS entity `mapping_entity` specified after `BETWEEN`. The specified order is relevant. -   A CDS entity `mapping_entity` specified after the keyw
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_DEFINE_PFCG_MAPPING.htm"
abapFile: "ABENCDS_F1_DEFINE_PFCG_MAPPING.html"
keywords: ["select", "if", "class", "ABENCDS", "DEFINE", "PFCG", "MAPPING"]
---

``[[`pfcg_mapping_annot`](ABENCDS_F1_DCL_PM_ANNOTATIONS.html)]\  [DEFINE] PFCG_MAPPING pfcg_mapping(output1[, output2 ...])    BETWEEN mapping_entity AND auth_object [IN SCENARIO scenario_name]\    \{ input1 = auth_field1 [CONSTRAINT ID][,      input2 = auth_field2 [CONSTRAINT ID] ... ] \}``

[`... IN SCENARIO`](#ABAP_ONE_ADD@1@)

Defines a [PFCG mapping](ABENCDS_PFCG_MAPPING_GLOSRY.html)\\ `pfcg_mapping` as part of a [CDS access policy](ABENCDS_ACCESS_POLICY_GLOSRY.html) defined using [`DEFINE ACCESSPOLICY`](ABENCDS_F1_DEFINE_ACCESSPOLICY.html). The name of the PFCG mapping must match the name of the CDS access policy.

The definition of a PCFG mapping contains the following:

A PFCG mapping can be [used](ABENCDS_F1_COND_PFCG_MAPPING.html) in a [PFCG](ABENCDS_F1_COND_PFCG.html) condition of the same authorization object. It is transformed to specific access conditions as follows when the condition is evaluated:

In ABAP SQL access to a CDS entity assigned a role of this type, PFCG mappings are defined internally using a subquery after `EXISTS`.

The following example shows the definition of a PFCG mapping `demo_cds_auth_pfcg_mapping` based on the CDS entity `demo_cds_mapping_entity` below. The output fields of the PFCG mapping are the authorization fields `OBJECT`, `OBJ_NAME`, and `DEVCLASS` of the authorization object `S_DEVELOP`. The input fields of the PFCG mapping are the elements of the CDS entity to which the output fields are assigned. The [example](ABENCDS_F1_COND_PFCG_MAPPING.html) that demonstrates how a PFCG mapping is specified in a role shows how the mapping is used.

CDS or DDIC source code was not found

-   A comma-separated list after the name `pfcg_mapping` in which the output fields of the PFCG mapping are defined. These fields must be elements of the CDS entity `mapping_entity` specified after `BETWEEN`. The specified order is relevant.
-   A CDS entity `mapping_entity` specified after the keyword `BETWEEN` to define the fields used in the mapping. This definition specifies the input and output fields of the mapping.
-   An [authorization object](ABENAUTHORIZATION_OBJECT_GLOSRY.html)\\ `auth_object` specified after the keyword `AND`. The PFCG mapping can be [used](ABENCDS_F1_COND_PFCG_MAPPING.html) in exactly those [PFCG conditions](ABENCDS_F1_COND_PFCG.html) in which this authorization object is specified after `ASPECT pfcg_auth`.
-   A comma-separated unordered list in curly brackets that associates the input fields `input1`, `input2`, ... of the mapping with [authorization fields](ABENAUTHORIZATION_FIELD_GLOSRY.html)\\ `auth_field` of the authorization object `auth_object`.

-   The input fields on the left sides must be elements of the CDS entity `mapping_entity` specified after `BETWEEN`.
-   Authorization fields of the authorization object `auth_object` must be specified on the right sides.
-   Any number of optional assignments can be flagged using the addition `CONSTRAINT ID`.

-   The values of the current user for the authorization fields assigned to the input fields fill the input fields of the mapping.
-   The output fields of the mapping are assigned to the elements within the [curly brackets](ABENCDS_F1_COND_PFCG_MAPPING.html) of the PFCG condition in the specified order.
-   The following applies to the input fields flagged with `CONSTRAINT ID`:

-   Only those authorization fields of the authorization object can be assigned that contain a single value in a specific authorization. Multiple values or patterns are not allowed (with the exception of full authorization using the value *\**). Otherwise the PFCG mapping in the PFCG condition returns the value *false* for the authorization in question.
-   Full authorization can be assigned only when applied to all input fields of the PFCG mapping.

-   If full authorization exists for all input fields of the PFCG mapping (value *\**), the PFCG mapping in the PFCG condition returns the value *true* when evaluated. This makes it possible to read entries of the protected entity for which there are no output fields in the mapping.

-   **PFCG Mapping**

-   **CDS Entity**

define view entity demo\_cds\_mapping\_entity\\n as select from\\n tadir\\n \\{\\n devclass as map\_devclass,\\n object as map\_object,\\n obj\_name as map\_obj\_name\\n \\}\\n where\\n devclass = 'SABAPDEMOS'\\n and object = 'PROG'\\n and obj\_name like 'DEMO%'\\n abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_accesspolicy.html