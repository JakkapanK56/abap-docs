---
title: "ABAPEML_RESPONSES_DYN"
description: |
  ABAPEML_RESPONSES_DYN - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPEML_RESPONSES_DYN.htm"
abapFile: "ABAPEML_RESPONSES_DYN.html"
keywords: ["do", "if", "data", "internal-table", "ABAPEML", "RESPONSES", "DYN"]
---

`... [FAILED failed_resp]\      [MAPPED mapped_resp]\      [REPORTED reported_resp] ...`

Used for [RAP responses](ABENRAP_RESPONSE_GLOSRY.html) in the context of dynamic forms of ABAP EML statements. The operands `failed_resp`, `mapped_resp` and `reported_resp` after the respective ABAP word must be internal tables typed with `ABP_BEHV_RESPONSE_TAB`. All variants can be used together where possible.

They can be specified for the following dynamic ABAP EML statements:

The internal table can be constructed inline using the declaration operators [`DATA`](ABENDATA_INLINE.html) and [`FINAL`](ABENFINAL_INLINE.html). It contains deep structures of type `ABP_BEHV_RESPONSE` for each entity for which entries are available in the response. These structures include the following components:

See further information and rules on response parameters in implementations of the [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) in the Development guide for the ABAP RESTful Application Programming Model, section [General RAP BO Implementation Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/1040b81372d44ed38b07a409fa0e1769?version=sap_cross_product_abap).

The example [ABAP EML - Responses (Dynamic Forms of ABAP EML Statements](ABENEML_RESPONSES_DYN_ABEXA.html) demonstrates the response parameters with the dynamic forms of read and modify operations in the context of a simple managed RAP BO.

-   [`MODIFY ENTITIES OPERATIONS`](ABAPMODIFY_ENTITIES_OPERATIONS_DYN.html)
-   [`READ ENTITIES OPERATIONS`](ABAPREAD_ENTITIES_OPERATIONS.html)
-   [`COMMIT ENTITIES RESPONSES OF`](ABAPEMLCOMMIT_ENTITIES_DYN.html)
-   [`GET PERMISSIONS OPERATIONS`](ABAPGET_PERMISSIONS_DYN.html)
-   [`SET LOCKS lock_tab`](ABAPSET_LOCKS_DYN.html)

**Component** **Details** **Type**\\ `root_name` Specifies the name of the [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html) of entity `entity_name` for which entries are available in the response. \\ `ABP_ROOT_ENTITY_NAME`\\ `entity_name` Specifies the entity's name for which entries are available in the response. This can be the root entity or associated and child entities of the root entity. \\ `ABP_ENTITY_NAME`\\ `entries` Internal table containing the entries for which information is available. `REF TO DATA` abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapcommon\_eml\_elements.html abapeml\_response.html