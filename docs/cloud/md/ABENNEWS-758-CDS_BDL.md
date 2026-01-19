---
title: "ABENNEWS-758-CDS_BDL"
description: |
  ABENNEWS-758-CDS_BDL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-758-CDS_BDL.htm"
abapFile: "ABENNEWS-758-CDS_BDL.html"
keywords: ["update", "do", "if", "method", "data", "types", "ABENNEWS", "758", "CDS", "BDL"]
---

[1\. Interface BDEF, New Field Characteristics](#ABAP_MODIFICATION_1@4@)

[2. Interface BDEF, `use event`](#ABAP_MODIFICATION_2@4@)

[3\. Managed and Unmanaged RAP BO, New Field Characteristic](#ABAP_MODIFICATION_3@4@)

[4\. Static Default Factory Actions](#ABAP_MODIFICATION_4@4@)

[5\. RAP Derived Events](#ABAP_MODIFICATION_5@4@)

[6\. RAP Change Documents](#ABAP_MODIFICATION_6@4@)

[7\. RAP Side Effects](#ABAP_MODIFICATION_7@4@)

[8\. Draft Action Activate Optimized](#ABAP_MODIFICATION_8@4@)

[9\. Authorization Control on Action Level](#ABAP_MODIFICATION_9@4@)

[10. `with managed instance filter`](#ABAP_MODIFICATION_10@4@)

[11\. Abstract BDEF Extensions](#ABAP_MODIFICATION_11@4@)

[12. Abstract BDEF, `mandatory:execute` for Associations](#ABAP_MODIFICATION_12@4@) 

[13\. Redefined Parameters, Projection or Interface BDEF](#ABAP_MODIFICATION_13@4@)

[14\. BDEF Extension Layering](#ABAP_MODIFICATION_14@4@)

[15. Draft Action `AdditionalSave`](#ABAP_MODIFICATION_15@4@)

[16\. Authorization Context for Disable, New Options](#ABAP_MODIFICATION_16@4@)

In [RAP interface behavior definitions](ABENCDS_INTERFACE_BDEF_GLOSRY.html), the following [RAP field characteristics](ABENRAP_FIELD_CHAR_GLOSRY.html) are now available:

In [RAP interface behavior definitions](ABENCDS_INTERFACE_BDEF_GLOSRY.html), [RAP business events](ABENRAP_ENTITY_EVENT_GLOSRY.html) can be reused using the syntax [`use event`](ABENBDL_USE_PROJECTION.html).

A new [RAP field characteristic](ABENRAP_FIELD_CHAR_GLOSRY.html) is available for managed and unmanaged RAP BOs: [`notrigger[:warn]`](ABENBDL_FIELD_CHAR.html). Fields with this attribute must not be used in a trigger condition of a [RAP validation](ABENRAP_VALIDATION_GLOSRY.html) or a [RAP determination](ABENRAP_DETERMINATION_GLOSRY.html).

The syntax addition [`default`](ABENBDL_ACTION_DEFAULT_FACTORY.html) is available for static factory actions in managed, unmanaged, and projection BDEFs. Exactly one static factory action per [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) can be defined as default static factory action. The addition `default` is evaluated by consuming frameworks, such as OData.

[RAP derived events](ABENRAP_DERIVED_EVENT_GLOSRY.html) allow the reuse of existing [RAP business events](ABENRAP_ENTITY_EVENT_GLOSRY.html) with a custom payload. RAP derived events are available in managed and unmanaged RAP BOs and in [base BDEF extensions](ABENRAP_BASE_BDEF_EXT_GLOSRY.html). They are defined using the syntax [`managed event`](ABENBDL_MANAGED_EVENT.html).

[RAP change documents](ABENRAP_CHANGE_DOCUMENTS_GLOSRY.html) are now available. They can be used to log changes of persisted RAP BO data in a [change document object](ABENCHANGE_DOCUMENT_OBJ_GLOSRY.html).

[RAP side effects](ABENRAP_SIDE_EFFECTS_GLOSRY.html) define interdependencies among RAP BO properties that trigger a reload of the affected properties on the user interface. Side effects are translated into annotations in the OData metadata of a RAP service. The syntax for defining RAP side effects is [`side effects`](ABENBDL_SIDE_EFFECTS.html).

The optional addition [`optimized`](ABENBDL_DRAFT_ACTION.html) is now available for the [draft action `Activate`](ABENBDL_DRAFT_ACTION.html). SAP recommends always using this addition, since it speeds up the activation of draft instances.

Two new [RAP BO operation additions](ABENBDL_OPERATIONS_ADDITIONS.html) are available for [actions](ABENRAP_ACTION_GLOSRY.html) and [determine actions](ABENRAP_BO_DET_ACTION_GLOSRY.html):

Both of these additions are specified on the action level and they replace the [authorization control](ABENBDL_AUTHORIZATION.html) that is specified in the [authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html).

In managed, unmanaged, and projection BDEFs, these additions are optional. In [base BDEF extensions](ABENRAP_BASE_BDEF_EXT_GLOSRY.html), authorization control on the action level is mandatory.

The optional addition [`with managed instance filter`](ABENBDL_MNGD_INSTANCE_CHECK_PROJ.html) is available for [projection BDEFs](ABENCDS_PROJ_BDEF_GLOSRY.html) and [interface BDEFs](ABENCDS_INTERFACE_BDEF_GLOSRY.html). If specified, the [`WHERE`](ABENCDS_PROJ_VIEW_COND_EXPR.html) condition of the underlying [CDS transactional query](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html) or [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html) is evaluated when the BDEF is accessed with [ABAP EML](ABENABAP_EML_GLOSRY.html) or [OData](ABENODATA_GLOSRY.html) requests from Web clients.

The new statement [`extension for abstract`](ABENBDL_EXTENSION_FOR_ABSTRACT.html) of the RAP BDL makes it possible to add [abstract BDEF extensions](ABENRAP_ABS_BDEF_EXT_GLOSRY.html) to [abstract behavior definitions](ABENCDS_ABSTRACT_BDEF_GLOSRY.html). Abstract BDEFs are mainly used as parameters for RAP actions, RAP functions, and RAP business events. An abstract BDEF extension allows you to extend these parameters.

The optional addition [`mandatory:execute`](ABENBDL_ASSOCIATION_ABSTRACT.html) is now available for associations in [abstract BDEFs](ABENCDS_ABSTRACT_BDEF_GLOSRY.html). It declares the association in question as mandatory, that is, whenever the abstract BDEF is used as an [input parameter](ABENBDL_ACTION_INPUT_PARAM.html) for a [RAP action](ABENRAP_ACTION_GLOSRY.html) or a [RAP function](ABENRAP_FUNCTION_GLOSRY.html), the [`%control`](ABAPDERIVED_TYPES_CONTROL.html) flag must be set for this association.

The input or output parameter of a [RAP action](ABENRAP_ACTION_GLOSRY.html), [RAP function](ABENRAP_FUNCTION_GLOSRY.html), or a [RAP business event](ABENRAP_ENTITY_EVENT_GLOSRY.html) that is [reused](ABENBDL_USE_PROJECTION.html) in a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html) or an [interface BDEF](ABENCDS_INTERFACE_BDEF_GLOSRY.html) can optionally be replaced with a dedicated projection-specific structure using the syntax additions [`deep parameter`](ABENBDL_REDEFINE_PARAM.html) or [`deep result`](ABENBDL_REDEFINE_PARAM.html).

It is now possible to extend a [BDEF extension](ABENRAP_EXTENSION_GLOSRY.html) with further BDEF extensions. This is referred to as [extension layering](ABENRAP_EXT_LAYERING_GLOSRY.html). As a prerequisite, the BDEF extension in question must be explicitly enabled for extensibility. The rules are described in the topic [RAP - Extensibility Enabling for BDEF Extensions](ABENBDL_EXTENSIBILITY_ENABLING_EXT.html). Technically, the BDEF extension that extends another extension is a regular extension and the respective rules apply.

A new [draft action](ABENRAP_BO_DRAFT_ACTION_GLOSRY.html) is available, [`draft action AdditionalSave`](ABENBDL_DRAFT_ACTION.html). This draft action allows users to define a custom saving strategy for draft instances. It is intended in particular for draft actions with a user-defined implementation, defined using the addition [`with additional implementation`](ABENBDL_DRAFT_ACTION.html).

There are further options available for the [authorization context for disable](ABENCDS_AUTH_CONTEXT_GLOSRY.html) after the addition [`for disable`](ABENBDL_DEF_AUTH_CONTEXT.html):

-   [`readonly`](ABENBDL_FIELD_INTERFACE.html)
-   [`mandatory:create`](ABENBDL_FIELD_INTERFACE.html)
-   [`readonly:update`](ABENBDL_FIELD_INTERFACE.html)

-   [`authorization:global`](ABENBDL_ACTIONS_AUTH_GLOBAL.html)
-   [`authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html)

-   [`save:early`](ABENBDL_DEF_AUTH_CONTEXT.html): Skips the authorization checks defined in the respective authorization context in the [early save phases](ABENEARLY_RAP_SAVE_PHASE_GLOSRY.html)\\ [`finalize`](ABENSAVER_FINALIZE.html) and [`check_before_save`](ABENSAVER_CHECK_BEFORE_SAVE.html).
-   [`save:late`](ABENBDL_DEF_AUTH_CONTEXT.html): Skips the authorization checks defined in the respective authorization context in the [late save phases](ABENLATE_RAP_SAVE_PHASE_GLOSRY.html)\\ [`adjust_numbers`](ABENSAVER_ADJUST_NUMBERS.html), [`save`](ABENSAVER_METHOD_SAVE.html), and [`save_modified`](ABAPRAP_SAVER_METH_SAVE_MODIFIED.html).

abenabap.html abennews.html abennews-75.html abennews-758.html abennews-758-restful.html