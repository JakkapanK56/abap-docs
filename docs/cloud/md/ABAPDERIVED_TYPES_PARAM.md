---
title: "ABAPDERIVED_TYPES_PARAM"
description: |
  ABAPDERIVED_TYPES_PARAM - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPDERIVED_TYPES_PARAM.htm"
abapFile: "ABAPDERIVED_TYPES_PARAM.html"
keywords: ["select", "if", "case", "data", "types", "ABAPDERIVED", "TYPES", "PARAM"]
---

`%param` is a structured component in [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html).

It is used for the [`result`](ABAPEML_RESULT.html) parameter in the context of [action](ABENBDL_ACTION.html) and [function](ABENBDL_FUNCTION.html) implementations. `%param` must be filled by the action or function implementation if a result is defined. For actions or functions with a selective result, only those fields that are requested with the `REQUEST` addition must be filled.

In the context of the draft action [`edit`](ABENBDL_DRAFT_ACTION.html), `%param` contains the component `preserve_changes`. It is a Boolean value and if it is set to true, the draft action request is rejected if a draft already exists. If it is set to false, which is the default setting, the edit is executed, i. e. the active instance is copied to the draft database table and the existing draft is overwritten with the values of the active data. In that case, current changes on the existing draft instance are lost.

**Type**

**Where used**

This component can occur in the following type declarations of [`TYPE TABLE FOR ...`](ABAPTYPE_TABLE_FOR.html) and [`TYPE STRUCTURE FOR ...`](ABAPTYPE_STRUCTURE_FOR.html):

The following source code section taken from `CL_DEMO_RAP_DRVD_TYPES_TKY` demonstrates the component `%param` in the context of the draft action `edit`.

The example [Using `%tky`](ABENDERIVED_TYPES_TKY_ABEXA.html) focuses on the use of [`%tky`](ABAPDERIVED_TYPES_TKY.html) with a managed RAP BO in a draft and non-draft scenario. In the code snippet, the [draft action](ABENBDL_DRAFT_ACTION.html)\\ `edit` includes the specification of `%param-preserve_changes`.

-   Depending on the specification of the parameter in the BDEF, `%param` can be a structure whose components are comprised of `%data` and `%key`/`%tky`/`%pky` plus, if relevant, other `%` components like `%pid`. `%param` can also be of the DDIC type that is specified in the BDEF for static actions or functions.
-   In the context of the draft action `edit`, `%param` is of type `ABP_BEHV_PAR_EDIT`.
-   In the context of [RAP key functions](ABENRAP_KEY_FUNCTION_GLOSRY.html) when using BDEF derived types of type `FUNCTION IMPORT`, `%param` contains [`%skey`](ABAPDERIVED_TYPES_SKEY.html).

-   `ACTION IMPORT`
-   `ACTION RESULT`
-   `FUNCTION IMPORT`
-   `FUNCTION RESULT`

MODIFY ENTITY demo\_managed\_draft\_root \\n EXECUTE Edit FROM \\n VALUE #( ( %key-key\_field = 4 \\n %param-preserve\_changes = abap\_false ) \\n ( %key-key\_field = 5 \\n %param-preserve\_changes = abap\_false ) \\n ( %key-key\_field = 6 \\n %param-preserve\_changes = abap\_false ) ) \\n MAPPED FINAL(mapped) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_misc.html