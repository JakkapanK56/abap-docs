---
title: "ABENRAP_STATE_MES_GLOSRY"
description: |
  ABENRAP_STATE_MES_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENRAP_STATE_MES_GLOSRY.htm"
abapFile: "ABENRAP_STATE_MES_GLOSRY.html"
keywords: ["method", "class", "types", "ABENRAP", "STATE", "MES", "GLOSRY"]
---

A [message](ABENRAP_MESSAGE_GLOSRY.html) in the [`reported`](ABAPEML_RESPONSE.html)\\ [RAP response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html) of a [RAP business object](ABENRAP_BO_GLOSRY.html) that refers to the state of an [entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html). A state message is defined with the parameter [`%state_area`](ABAPDERIVED_TYPES_STATE_AREA.html), which assigns it to the corresponding state area. A state message is persisted with the instance it refers to in [draft-enabled BOs](ABENDRAFT_RAP_BO_GLOSRY.html).

RAP state messages are relevant in the following contexts:

-   Draft-enabled RAP BOs
-   The [`cleanup_finalize`](ABAPSAVER_CLASS_CLEANUP_FINALIZE.html) and [`check_before_save`](ABENSAVER_CHECK_BEFORE_SAVE.html)\\ [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html) in [unmanaged RAP BOs](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   [Determinations](ABENRAP_DETERMINATION_GLOSRY.html) and [validations](ABENRAP_VALIDATION_GLOSRY.html) in [managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html)

ABENRAP\_GLOSSARY.html