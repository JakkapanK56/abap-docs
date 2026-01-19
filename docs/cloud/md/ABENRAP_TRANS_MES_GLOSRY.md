---
title: "ABENRAP_TRANS_MES_GLOSRY"
description: |
  ABENRAP_TRANS_MES_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENRAP_TRANS_MES_GLOSRY.htm"
abapFile: "ABENRAP_TRANS_MES_GLOSRY.html"
keywords: ["do", "if", "types", "ABENRAP", "TRANS", "MES", "GLOSRY"]
---

A message in the [`reported`](ABAPEML_RESPONSE.html)\\ [RAP response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html) that is semantically related to the current ABAP EML `MODIFY` request and independent of the state of the [entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html). Unlike [RAP state messages](ABENRAP_STATE_MES_GLOSRY.html), transition messages are [RAP messages](ABENRAP_MESSAGE_GLOSRY.html) that do not have a state area assigned ([`%state_area`](ABAPDERIVED_TYPES_STATE_AREA.html)) and are not persisted with the state. Therefore, these messages cannot be accessed at a later point in time.

There are [instance transition messages](ABENINSTANCE_RAP_TRANS_MES_GLOSRY.html) and [static transition messages](ABENSTATIC_RAP_TRANS_MES_GLOSRY.html).

ABENRAP\_GLOSSARY.html