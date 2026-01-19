---
title: "ABENBDL_NEW_ELEM_EXT"
description: |
  ABENBDL_NEW_ELEM_EXT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_NEW_ELEM_EXT.htm"
abapFile: "ABENBDL_NEW_ELEM_EXT.html"
keywords: ["insert", "update", "delete", "loop", "do", "while", "if", "method", "class", "data", "ABENBDL", "NEW", "ELEM", "EXT"]
---

``...    [[`determination`](ABENBDL_DETERMINATIONS.html)]\    [[`validation`](ABENBDL_VALIDATIONS.html)]\    [[`event`](ABENBDL_EVENT.html)]\    [[`managed event`](ABENBDL_MANAGED_EVENT.html)]\    [[`field characteristics`](ABENBDL_FIELD_CHAR.html)]\    [[`action`](ABENBDL_ACTION.html)]\    [[`function`](ABENBDL_FUNCTION.html)]\    [[`determine action`](ABENBDL_DETERMINE_ACTION.html)]\    [[`association`](ABENBDL_ASSOCIATION.html)]\    [[`define pure key`](ABENBDL_DEFINE_KEY.html)]\    [[`mapping for`](ABENBDL_TYPE_MAPPING.html)]\    ...``

[1. `... determination ...`](#ABAP_VARIANT_1@1@)

[2. `... validation ...`](#ABAP_VARIANT_2@1@)

[3. `... event ...`](#ABAP_VARIANT_3@1@)

[4. `... managed event ...`](#ABAP_VARIANT_4@1@)

[5. `... field characteristics ...`](#ABAP_VARIANT_5@1@)

[6. `... action ...`](#ABAP_VARIANT_6@1@)

[7. `... function ...`](#ABAP_VARIANT_7@1@)

[8. `... determine action ...`](#ABAP_VARIANT_8@1@)

[9. `... association ...`](#ABAP_VARIANT_9@1@)

[10. `... define pure key ...`](#ABAP_VARIANT_10@1@)

[11. `... mapping for...`](#ABAP_VARIANT_11@1@)

The elements listed in this topic can be added to the [body](ABENCDS_ENTITY_BODY_GLOSRY.html) of an existing RAP BO entity. All of them are optional, and multiple elements or all elements can be specified together.

The elements can be added in a [base BDEF extension](ABENRAP_BASE_BDEF_EXT_GLOSRY.html) with or without the addition [`using interface`](ABENBDL_USING_INTERFACE.html). In other words, these elements are possible in direct base extensions and also in extensions that make use of an interface layer.

Executable examples:

The execution order of determinations and validations is arbitrary, also between original and extension components.

The BDEF extension `DEMO_RAP_EXT_DET_VAL` extends the RAP behavior definition `DEMO_RAP_BASE_DET_VAL`. It adds a determination on save `setStatus`, which is triggered whenever a new entity instance is created.

Original BDEF: explicitly allows determinations on save in the BDEF extension header:

Extension BDEF: Defines a determination on save.

This determination is implemented in the extension ABP. It sets the field `char_field` automatically to status *A* whenever a new entity instance is created.

An executable example for a BDEF extension adding a new determination is provided in topic [RAP BDL - extend determine action](ABENBDL_DET_ACTION_EXT_ABEXA.html).

The execution order of determinations and validations is arbitrary, also between original and extension components.

The BDEF extension `DEMO_RAP_EXT_VALIDATION` extends the RAP behavior definition `DEMO_RAP_BASE_DET_VAL`. It adds a validation on save `Limit`, which is triggered when field `dec_field` is updated.

Original BDEF: explicitly allows validation on save in the BDEF extension header:

Extension BDEF: Defines a validation on save.

This validation is implemented in the extension ABP. It checks that the value inserted into field `dec_field` does not exceed 500. If it does, the validation fails and an error message is returned.

The development guide for the ABAP RESTful Application Programming Model provides an example for a RAP business event that is added by means of a BDEF extension. See *Creating RAP Business Events*.

The BDEF extension `DEMO_RAP_EVENT_EXT` extends the RAP behavior definition `DEMO_RAP_EXTENSIBLE`. It adds the RAP business event `MyEvent` to the [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html). It adds a [RAP additional save](ABENRAP_ADD_SAVE_GLOSRY.html), so the event can be raised in the extension ABP in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`save_modified`](ABAPRAP_SAVER_METH_SAVE_MODIFIED.html).

The development guide for the ABAP RESTful Application Programming Model provides an example for a RAP derived event that is added by means of a BDEF extension. See *Derived Business Events*.

The BDEF extension `DEMO_EXTENSION_RAP_BO` extends the RAP behavior definition `DEMO_RAP_FIELD_EXT`. It behavior-enables multiple extension fields.

The example above is described in detail in the topic [RAP - Field Extension](ABENBDL_FIELD_EXT_ABEXA.html).

The BDEF extension `DEMO_RAP_BEH_EXT_CH` extends the RAP behavior definition `DEMO_RAP_BEH_EXT`. It adds action `setValue` to the behavior definition body.

The example above is described in detail in the topic [RAP - Behavior Extension](ABENBDL__BEHAVIOR_EXT_ABEXA.html).

The BDEF extension `DEMO_RAP_EXTENSION_1` extends the RAP behavior definition `DEMO_RAP_EXTENSIBLE_ROOT`. The first section of this extension extends an existing node by behavior-enabling the association `_Children4Ext`. The association target is an extension node.

The example above is described in detail in the topic [RAP - Node Extension](ABENBDL_ASSOC_EXT_ABEXA.html).

[BDEF secondary keys](ABENRAP_SECONDARY_KEY_GLOSRY.html) are not allowed in BDEF extensions.

In a BDEF extension, it is possible to add a new RAP type mapping or to extend an existing type mapping from the original behavior definition using the syntax [`extend type mapping`](ABENBDL_TYPE_MAPPING_EXT.html). If the partner type is identical, both variants are equivalent. There is no difference between `mapping for PartnerType ...` and `extend mapping for PartnerType ...`

-   [Node extension](ABENBDL_ASSOC_EXT_ABEXA.html):

-   A RAP BO with four nodes is extended via a RAP BO interface with one further node on the level of the great-grandchild.
-   Ancestor associations are defined, while lock master and authorization master entities are not explicitly defined.
-   An ABAP EML call creates instances of all five nodes.

-   [Field extension](ABENBDL_FIELD_EXT_ABEXA.html)

-   The original BO consists of one root node.
-   The root node is extended via a RAP BO interface with extension fields. These extension fields are created on database level and added to the CDS data model via a CDS data model extension.
-   Field attributes are added to the extension fields.
-   Dynamic feature control for the extension fields is implemented in the extension ABP.

-   [Behavior extension](ABENBDL__BEHAVIOR_EXT_ABEXA.html):

-   The original BO consists of one root node.
-   One extension node is added to the original BO via a RAP BO interface.
-   The extended RAP BO implements authorization control, feature control, a validation, a determination and two actions. These implementations are distributed between original ABP and extension ABP.
-   An ABAP EML call performs multiple operations and logs the execution order of the handler methods.

-   Adds a [RAP determination](ABENRAP_DETERMINATION_GLOSRY.html) to the entity behavior body of an existing RAP BO entity via a BDEF extension.
-   As a prerequisite, the extended BDEF must explicitly allow the particular kind of determination (see the topic [RAP - Extensibility Enabling for Base BOs](ABENBDL_EXTENSIBILITY_ENABLING_M_U.html)).
-   Syntax: exactly the same as for RAP BOs, see the topic [RAP - `determination`](ABENBDL_DETERMINATIONS.html).
-   All fields (extension fields and original fields) can be used as trigger.
-   Implementation in the extension ABAP behavior pool must obey the rules for [extension ABPs](ABENBDL_IN_CLASS_UNIQUE_EXT.html).
-   **Limitation:** Currently not supported for BDEF extensions to unmanaged RAP BOs.

-   Adds a [RAP validation](ABENRAP_VALIDATION_GLOSRY.html) to the entity behavior body of an existing RAP BO entity via a BDEF extension.
-   As a prerequisite, the extended BDEF must explicitly allow the particular kind of validation (see the topic about [RAP - Extensibility Enabling for Base BOs](ABENBDL_EXTENSIBILITY_ENABLING_M_U.html)).
-   Syntax: exactly the same as for RAP BOs, see topic about [validations](ABENBDL_VALIDATIONS.html).
-   All fields (extension fields and original fields) can be used as trigger.
-   Implementation in the extension ABAP behavior pool must obey the rules for [extension ABPs](ABENBDL_IN_CLASS_UNIQUE_EXT.html).
-   **Limitation:** Currently not supported for BDEF extensions to unmanaged RAP BOs.

-   Adds a [RAP business event](ABENRAP_ENTITY_EVENT_GLOSRY.html) to the entity behavior body of an existing RAP BO entity via a BDEF extension.
-   RAP business events can only be defined in the root node of a RAP business object. As a consequence, they can only be defined in a BDEF extension to the root node.
-   Syntax: exactly the same as for RAP BOs, see the topic about [RAP - `event`](ABENBDL_EVENT.html).
-   An extension RAP business event must be raised in the extension ABAP behavior pool of the RAP BO in question with the [ABAP EML](ABENABAP_EML_GLOSRY.html) statement [`RAISE ENTITY EVENT`](ABAPRAISE_ENTITY_EVENT.html). The rules for [extension ABPs](ABENBDL_IN_CLASS_UNIQUE_EXT.html) must be obeyed.

-   Adds a [RAP derived event](ABENRAP_DERIVED_EVENT_GLOSRY.html) to the entity behavior body of an existing RAP BO entity via a BDEF extension.
-   RAP derived events can only be defined in the root node of a RAP business object. As a consequence, they can only be defined in a BDEF extension to the root node.
-   Syntax: exactly the same as for RAP BOs, see the topic [RAP - `managed event`](ABENBDL_MANAGED_EVENT.html).
-   An implementation in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is not required. Derived events are raised automatically when the referenced event is raised.

-   Adds [field attributes](ABENRAP_FIELD_CHAR_GLOSRY.html) to extension fields.
-   Field attributes can be added only for extension fields. Extension fields are fields which are not part of the original BO, but are added via [RAP data model extension](ABENRAP_DATA_MODEL_EXT_GLOSRY.html).
-   The following field attributes are available in BDEF extensions for extension fields:

-   `readonly`
-   `mandatory`
-   `suppress`
-   `readonly:update`
-   `features:instance`
-   **Note** When implementing [instance feature control](ABENRAP_INS_FEATURE_CONTROL_GLOSRY.html) for fields, the rules for [extension ABPs](ABENBDL_IN_CLASS_UNIQUE_EXT.html) apply.

-   These field attributes work as described in the topic [RAP - `FieldCharacteristics`](ABENBDL_FIELD_CHAR.html).
-   **Note**\\ [Internal field numbering](ABENBDL_FIELD_NUMBERING.html) is not available in BDEF extensions.
-   **Note** The field characteristic `mandatory:create` is not available in BDEF extensions.

-   Adds a [RAP action](ABENRAP_ACTION_GLOSRY.html) to the entity behavior body of an existing RAP BO entity.
-   Syntax: exactly the same as for RAP BOs, see the topic [RAP - `action`](ABENBDL_ACTION.html).
-   **Note** The following additional rule applies: Each extension action must define an authorization control at action level that replaces the authorization control specified in the [authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html) of the original RAP BO. That means that one of the following additions must be specified for each extension action:
-   [`authorization:none`](ABENBDL_ACTIONS_AUTH.html)
-   [`authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html)
-   [`authorization:global`](ABENBDL_ACTIONS_AUTH_GLOBAL.html)
-   [`authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html)
-   [`authorization:instance, authorization:global`](ABENBDL_ACTIONS_AUTH_INSTANCE.html)
-   [`authorization:global, authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html)
-   For details, see the topic [RAP - Authorization](ABENBDL_AUTHORIZATION.html).
-   **Note** The optional addition [`default`](ABENBDL_ACTION_DEFAULT_FACTORY.html) to define a factory action as default factory action is not available in BDEF extensions.
-   Implementation in the extension ABAP behavior pool must obey the rules for [extension ABPs](ABENBDL_IN_CLASS_UNIQUE_EXT.html).

-   Adds a [RAP function](ABENRAP_FUNCTION_GLOSRY.html) to the entity behavior body of an existing RAP BO entity.
-   Syntax: exactly the same as for RAP BOs, see the topic [RAP - `function`](ABENBDL_FUNCTION.html).
-   Implementation in the extension ABAP behavior pool must obey the rules for [extension ABPs](ABENBDL_IN_CLASS_UNIQUE_EXT.html).

-   Adds a [RAP BO determine action](ABENRAP_BO_DET_ACTION_GLOSRY.html) to the entity behavior body of an existing RAP BO entity.
-   Syntax exactly the same as for RAP BOs, see the topic [RAP - `determine action`](ABENBDL_DETERMINE_ACTION.html).
-   Only [determinations](ABENRAP_DETERMINATION_GLOSRY.html) and [validations](ABENRAP_VALIDATION_GLOSRY.html) from the same BDEF extension can be assigned. Determinations and validations from the original BDEF must not be assigned.
-   **Limitation:** Currently not supported for BDEF extensions to unmanaged RAP BOs.

-   Behavior-enables an association. The [association target](ABENASSOCIATION_TARGET_GLOSRY.html) must be an extension node of the same business object.
-   Syntax exactly the same as for RAP BOs, see the topic [RAP - Operations for Associations](ABENBDL_ASSOCIATION.html).
-   **Limitation:** Currently, only intra-BO association are fully supported in extensions. Defining cross-BO associations in extension BDEFs is not generally supported, except for the following scenarios:

-   Defining a source-resolved association to an early-numbered target for an extension of a non-draft managed core behavior definition.
-   Defining a source-resolved association to an early-numbered target for an extension of a draft-enabled managed core behavior definition.
-   Defining a source-resolved association to a late-numbered target for an extension of a managed non-draft core behavior definition.
-   Defining a source-resolved association to an early-numbered target for an extension of an unmanaged core behavior definition.

-   Adds a [BDEF pure key](ABENRAP_PURE_KEY_GLOSRY.html) to the entity behavior body of an existing RAP BO entity. This is allowed only in BDEF extensions declared as [BDEF friend](ABENRAP_BDEF_FRIEND_GLOSRY.html).
-   The syntax is exactly the same as for RAP BOs, see the topic [RAP - BDEF Alternative Key](ABENBDL_DEFINE_KEY.html).

-   Adds a [RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html) to the entity behavior body of an existing RAP BO entity. This type mapping can only contain extension fields. It must not contain any fields from the extended BDEF.
-   The syntax is exactly the same as for RAP BOs, see the topic [RAP - `TypeMapping`](ABENBDL_TYPE_MAPPING.html).

managed implementation in class bp\_demo\_rap\_base\_det\_val unique;\\nstrict ( 2 );\\nextensible\\n\\{ with determinations on modify;\\n with determinations on save;\\n with validations on save; \\}\\n\\ndefine behavior for DEMO\_RAP\_BASE\_DET\_VAL\\npersistent table demo\_dbtab\_root\\nlock master\\nauthorization master ( none )\\nextensible\\n\\{\\n create;\\n update;\\n delete;\\n field ( readonly : update ) key\_field;\\n\\} extension using interface DEMO\_RAP\_INT\_DET\_VAL\\n implementation in class bp\_demo\_rap\_ext\_det\_val unique;\\n\\nextend behavior for RootInterface\\n\\{\\n determination setStatus on save \\{ create; \\}\\n\\} METHOD setStatus. \\n MODIFY ENTITIES OF DEMO\_RAP\_INT\_DET\_VAL IN LOCAL MODE \\n ENTITY RootInterface \\n UPDATE \\n FIELDS ( char\_field ) WITH \\n VALUE #( FOR key IN keys ( %tky = key-%tky \\n char\_field = status-status\_a ) ) \\n REPORTED DATA(lt\_reported). \\n reported = CORRESPONDING #( DEEP lt\_reported ). \\nENDMETHOD. managed implementation in class bp\_demo\_rap\_base\_det\_val unique;\\nstrict ( 2 );\\nextensible\\n\\{ with determinations on modify;\\n with determinations on save;\\n with validations on save; \\}\\n\\ndefine behavior for DEMO\_RAP\_BASE\_DET\_VAL\\npersistent table demo\_dbtab\_root\\nlock master\\nauthorization master ( none )\\nextensible\\n\\{\\n create;\\n update;\\n delete;\\n field ( readonly : update ) key\_field;\\n\\} extension using interface DEMO\_RAP\_INT\_DET\_VAL\\nimplementation in class bp\_demo\_rap\_ext\_validation unique;\\n\\nextend behavior for RootInterface\\n\\{\\n validation Limit on save \\{ field dec\_field; \\}\\n\\} METHOD Limit. \\n\* The value of field dec\_field must not be > 500. \\n READ ENTITIES OF DEMO\_RAP\_INT\_DET\_VAL IN LOCAL MODE \\n ENTITY RootInterface \\n FIELDS ( dec\_field ) \\n WITH CORRESPONDING #( keys ) \\n RESULT DATA(result) \\n FAILED DATA(failed1). \\n\\ \\n LOOP AT result INTO DATA(lv\_limit). \\n APPEND VALUE #( %tky = lv\_limit-%tky \\n %state\_area = 'VALIDATE\_LIMIT' ) \\n TO reported-rootinterface. \\n IF lv\_limit-dec\_field > 500. \\n\\ \\n APPEND VALUE #( %tky = lv\_limit-%tky ) TO failed-rootinterface. \\n APPEND VALUE #( %tky = lv\_limit-%tky \\n %state\_area = 'VALIDATE\_LIMIT' \\n %msg = new\_message\_with\_text( \\n severity = if\_abap\_behv\_message=>severity-error \\n text = 'validation failed' ) \\n %element-dec\_field = if\_abap\_behv=>mk-on ) \\n TO reported-rootinterface. \\n ENDIF. \\n ENDLOOP. \\nENDMETHOD. extension\\nimplementation in class bp\_demo\_rap\_event\_ext unique;\\n\\nextend behavior for DEMO\_RAP\_EXTENSIBLE\\nwith additional save\\n\\{\\n event MyEvent;\\n\\} extension using interface DEMO\_RAP\_FIELD\_EXT\_INT\\n implementation in class bp\_demo\_extension\_rap\_bo unique;\\n\\nextend behavior for Root\\n\\{\\n\\n// field ( readonly ) DataFieldExt;\\n field ( mandatory ) IntFieldExt;\\n field ( suppress ) CharFieldExt;\\n field ( features : instance ) NumFieldExt;\\n\\n field ( readonly : update ) Int1FieldExt;\\n\\} extension using interface DEMO\_RAP\_BEH\_EXT\_INT\\nimplementation in class bp\_demo\_rap\_beh\_ext\_ch unique;\\n\\nextend behavior for RootInterface\\n\\{\\n\\n association \_child \\{ create; \\}\\n\\n action ( features : global, authorization : global ) setValue\\n result \[1\] $self;\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_BEH\_EXT\_CHILD alias ChildInterface\\nusing DEMO\_RAP\_BEH\_EXT\_INT\_CH\\npersistent table demo\_dbtab\_fi\_ch\\n( lock, authorization ) dependent\\n\\{\\n update;\\n delete;\\n field ( readonly ) key\_field;\\n field ( readonly ) key\_field\_child;\\n association \_parent;\\n determination myDet on modify \\{ field int\_field3; \\}\\n action ( authorization : global ) ActionExt;\\n\\} extension using interface demo\_rap\_ext\_using\_interface;\\nforeign entity demo\_rap\_factory\_ACTION;\\nextend behavior for GrandChildInterface\\n\\{\\n association \_Children4Ext \\{ create; with draft; \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_EXTENSIBLE\_EXT alias ExtNode\\n using DEMO\_RAP\_EXT\_USING\_INT\_EXT\\npersistent table demo\_ggchl\_ex\_ba\\ndraft table demo\_ggrch\_ext\\netag master Timestamp\\n( lock, authorization ) dependent\\n\\n\\{\\n update;\\n delete;\\n field ( readonly )\\n KeyField, KeyFieldchild, Keyfieldgrchld;\\n\\n field ( readonly : update ) Keyfieldggchld;\\n field ( readonly ) Timestamp;\\n\\n association \_parent \\{ with draft; \\}\\n association \_Sibling4 \\{ with draft; \\}\\n ancestor association \_GrandParent2 \\{ with draft; \\}\\n ancestor association \_GreatGrandParent1 \\{ with draft; \\}\\n\\n mapping for demo\_ggchl\_ex\_ba\\n \\{\\n Keyfield = key\_field;\\n Keyfieldchild = key\_field\_child;\\n Keyfieldgrchld = key\_field\_grchld;\\n Keyfieldggchld = key\_field\_ggchld;\\n Datafield = data\_field;\\n Charfield = char\_field;\\n Timestamp = timestamp;\\n \\}\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_managed\_unm.html abenbdl\_extension\_syntax.html abenbdl\_extend\_beh.html abenbdl\_entity\_beh\_extension.html