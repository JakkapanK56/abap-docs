---
title: "ABENBDL_BODY"
description: |
  ABENBDL_BODY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_BODY.htm"
abapFile: "ABENBDL_BODY.html"
keywords: ["do", "if", "class", "data", "ABENBDL", "BODY"]
---

``\  ... \{[[`FieldCharacteristics`](ABENBDL_FIELD_CHAR.html)]\       [[`FieldNumbering`](ABENBDL_FIELD_NUMBERING.html)]\       [[`RAP BO Operations`](ABENBDL_OPERATIONS.html)]\       [[`validation`](ABENBDL_VALIDATIONS.html)]\       [[`determination`](ABENBDL_DETERMINATIONS.html)]\       [[`Events`](ABENBDL_EVENT_OVERVIEW.html)]\       [[`side effects`](ABENBDL_SIDE_EFFECTS.html)]\       [[`changedocuments, Options`](ABENBDL_CHANGEDOCS_OPTIONS.html)]\       [[`instance hierarchy`](ABENBDL_INSTANCE_HIERARCHY.html)]\       [[`BDEF alternative key`](ABENBDL_DEFINE_KEY.html)]\       [[`TypeMapping`](ABENBDL_TYPE_MAPPING.html)]\}\       [[`group`](ABENBDL_GROUPING.html)]\  ...``

The [entity behavior body](ABENCDS_ENTITY_BODY_GLOSRY.html) can consist of the following elements:

-   [`FieldCharacteristics`](ABENBDL_FIELD_CHAR.html): [RAP field characteristics](ABENRAP_FIELD_CHAR_GLOSRY.html) define properties for RAP BO fields that restrict access to the fields in question. For example, a field can be defined as mandatory read-only.
-   [`FieldNumbering`](ABENBDL_FIELD_NUMBERING.html): Defines managed [internal numbering](ABENRAP_INT_NUMBERING_GLOSRY.html) for key fields.
-   [RAP BO operations](ABENBDL_OPERATIONS.html): [RAP BO operations](ABENRAP_BO_OPERATION_GLOSRY.html) implement the [RAP BO behavior](ABENRAP_BO_BEHAVIOR_GLOSRY.html).
-   [`validation`](ABENBDL_VALIDATIONS.html): [Validations](ABENRAP_VALIDATION_GLOSRY.html) check the consistency of a RAP business object instance.
-   [`determination`](ABENBDL_DETERMINATIONS.html): [Determinations](ABENRAP_DETERMINATION_GLOSRY.html) calculate or determine field values at runtime.
-   [`Events`](ABENBDL_EVENT_OVERVIEW.html): [RAP business events](ABENRAP_ENTITY_EVENT_GLOSRY.html) are events that can be used for asynchronous communication.
-   [`side effects`](ABENBDL_SIDE_EFFECTS.html): [RAP side effects](ABENRAP_SIDE_EFFECTS_GLOSRY.html) define interdependencies among BO properties that trigger a reload of the affected properties on the user interface.
-   [`changedocuments, Options`](ABENBDL_CHANGEDOCS_OPTIONS.html): If the RAP BO entity in question is enabled for [change documents](ABENRAP_CHANGE_DOCUMENTS_GLOSRY.html), logging options can be defined in the entity behavior body.
-   [`instance hierarchy`](ABENBDL_INSTANCE_HIERARCHY.html): Enables the editable [treeview](ABENRAP_TREEVIEW_GLOSRY.html) scenario.
-   [BDEF alternative key](ABENBDL_DEFINE_KEY.html): A [BDEF alternative key](ABENRAP_ALTERNATIVE_KEY_GLOSRY.html) defines a user-defined BDEF key. There are [pure keys](ABENRAP_PURE_KEY_GLOSRY.html) and [secondary keys](ABENRAP_SECONDARY_KEY_GLOSRY.html) and they are used, for example, in [RAP key functions](ABENBDL_KEYFUNCTION.html).
-   [`TypeMapping`](ABENBDL_TYPE_MAPPING.html): A [RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html) is required if the field names from database tables differ from field names of the CDS data model.
-   [`group`](ABENBDL_IN_CLASS_UNIQUE.html): Implementation grouping makes it possible to divide the implementation-relevant parts of a business object's business logic into multiple groups for behavior implementation, each with its own [implementation class](ABENBDL_IN_CLASS_UNIQUE.html).

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html