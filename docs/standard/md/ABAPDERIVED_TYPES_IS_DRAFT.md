---
title: "ABAPDERIVED_TYPES_IS_DRAFT"
description: |
  ABAPDERIVED_TYPES_IS_DRAFT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDERIVED_TYPES_IS_DRAFT.htm"
abapFile: "ABAPDERIVED_TYPES_IS_DRAFT.html"
keywords: ["if", "types", "ABAPDERIVED", "TYPES", "DRAFT"]
---

The draft indicator `%is_draft` is a component of [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html). It is used to indicate if a [RAP BO](ABENRAP_BO_GLOSRY.html) instance is a [drafts](ABENBDL_WITH_DRAFT.html) instance or an active instance. To create a draft instance, `%is_draft` must be explicitly set in ABAP EML [`MODIFY`](ABAPMODIFY_ENTITY_ENTITIES.html) requests.

[Using Keys and Identifying RAP BO Instances in a Nutshell](ABAPDERIVED_TYPES_KEYS_IDENTIFIERS.html)

**Type**

The component has the following type: `ABP_BEHV_FLAG`

**Where used**

In ABAP EML [`MODIFY`](ABAPMODIFY_ENTITY_ENTITIES.html) requests, the component can be referred to directly or via the [component group](ABENCOMPONENT_GROUP_GLOSRY.html)\\ [`%tky`](ABAPDERIVED_TYPES_TKY.html) since `%is_draft` is a component of `%tky`.

The following source code section taken from `CL_DEMO_RAP_DRVD_TYPES_ISDRAFT` demonstrates the component `%is_draft`.

The example [Using `%is_draft`](ABENDERIVED_TYPES_ISDRAFT_ABEXA.html) demonstrates the use of `%is_draft` with an unmanaged RAP BO in a draft scenario.

MODIFY ENTITY demo\_unmanaged\_root\_draft \\n CREATE FIELDS ( field1 field2 field3 field4 ) \\n WITH VALUE #( \\n ( %cid = 'cid4' \\n %is\_draft = if\_abap\_behv=>mk-on \\n key\_field = 4 \\n field1 = 'ggg' \\n field2 = 'hhh' \\n field3 = 40 \\n field4 = 41 ) \\n ( %cid = 'cid5' \\n %is\_draft = if\_abap\_behv=>mk-on \\n key\_field = 5 \\n field1 = 'iii' \\n field2 = 'jjj' \\n field3 = 50 \\n field4 = 51 ) \\n ( %cid = 'cid6' \\n %is\_draft = if\_abap\_behv=>mk-on \\n key\_field = 6 \\n field1 = 'kkk' \\n field2 = 'lll' \\n field3 = 60 \\n field4 = 61 ) ) \\n MAPPED FINAL(mapped) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_keys\_id.html