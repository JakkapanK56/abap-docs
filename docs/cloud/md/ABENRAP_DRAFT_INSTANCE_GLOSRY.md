---
title: "ABENRAP_DRAFT_INSTANCE_GLOSRY"
description: |
  ABENRAP_DRAFT_INSTANCE_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENRAP_DRAFT_INSTANCE_GLOSRY.htm"
abapFile: "ABENRAP_DRAFT_INSTANCE_GLOSRY.html"
keywords: ["ABENRAP", "DRAFT", "INSTANCE", "GLOSRY"]
---

A [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html) in a [draft-enabled RAP business object](ABENDRAFT_RAP_BO_GLOSRY.html) for which a commit triggers the saving to the [RAP draft table](ABENDRAFT_TABLE_GLOSRY.html). The [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) of such an instance has the [draft indicator](ABENRAP_DRAFT_INDICATOR_GLOSRY.html) set to *true*. A draft instance can be produced by a [create operation](ABENRAP_CREATE_OPERATION_GLOSRY.html) ( [new-draft instances](ABENRAP_NEW_DRAFT_INST_GLOSRY.html)) or by the [draft action](ABENRAP_BO_DRAFT_ACTION_GLOSRY.html)\\ `Edit` ([edit-draft instances](ABENRAP_EDIT_DRAFT_INST_GLOSRY.html)) in draft scenarios. There are [exclusive draft](ABENRAP_EXCLUSIVE_DRAFT_GLOSRY.html) instances, where only a single user is allowed to edit a draft, and [collaborative draft](ABENRAP_COLLABORATIVE_DRAFT_GLOSRY.html) instances, where multiple users can work concurrently on the same draft.

ABENRAP\_GLOSSARY.html