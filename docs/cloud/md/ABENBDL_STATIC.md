---
title: "ABENBDL_STATIC"
description: |
  ABENBDL_STATIC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_STATIC.htm"
abapFile: "ABENBDL_STATIC.html"
keywords: ["ABENBDL", "STATIC"]
---

`... static ...`

Defines a [RAP BO non-standard operation](ABENRAP_NSTANDARD_OPERATION_GLOSRY.html) as [static](ABENRAP_STATIC_OPERATION_GLOSRY.html). Static RAP BO operations are not bound to any [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html) and relate to the complete [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) instead.

The following non-standard operations can be static:

Static operations support [global feature control](ABENRAP_GLO_FEATURE_CONTROL_GLOSRY.html) ([`features:global`](ABENBDL_ACTIONS_FC.html)) and global [authorization control](ABENRAP_AUTH_CONTROL_GLOSRY.html) ([`authorization:global`](ABENBDL_ACTIONS_AUTH_GLOBAL.html)).

-   [Non-factory actions](ABENRAP_NON_FAC_ACTION_GLOSRY.html)
-   [Factory actions](ABENRAP_FACTORY_ACTION_GLOSRY.html)
-   [Save actions](ABENRAP_SAVE_ACTION_GLOSRY.html)
-   \\ [Functions](ABENRAP_FUNCTION_GLOSRY.html)

-   [Repeatable operations](ABENRAP_REPEATABLE_ACTION_GLOSRY.html) defined using the addition [`repeatable`](ABENBDL_ACTION_REPEATABLE.html) cannot be static.
-   An [instance feature control](ABENRAP_INS_FEATURE_CONTROL_GLOSRY.html) defined using [`features:instance`](ABENBDL_ACTIONS_FC.html) is not supported for static operations, because static operations are not bound to any entity instance.
-   An instance [authorization control](ABENRAP_AUTH_CONTROL_GLOSRY.html) defined using [`authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html) is not supported for static operations, because static operations are not bound to any entity instance.

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_operations\_additions.html