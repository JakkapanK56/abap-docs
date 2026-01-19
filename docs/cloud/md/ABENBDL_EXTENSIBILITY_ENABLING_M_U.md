---
title: "ABENBDL_EXTENSIBILITY_ENABLING_M_U"
description: |
  ABENBDL_EXTENSIBILITY_ENABLING_M_U - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_EXTENSIBILITY_ENABLING_M_U.htm"
abapFile: "ABENBDL_EXTENSIBILITY_ENABLING_M_U.html"
keywords: ["if", "ABENBDL", "EXTENSIBILITY", "ENABLING"]
---

``[`managed`](ABENBDL_IMPL_TYPE.html)\ |\ [`unmanaged`](ABENBDL_IMPL_TYPE.html)\  [`strict[(version)]`](ABENBDL_STRICT.html);  [`extensible`](ABENBDL_EXTENSIBLE.html)\  [[`with friends BDEFExtension1 [, BDEFExtension2]\ [,...]`](ABENBDL_WITH_FRIENDS.html)\ ]\  [\{    [with validations on save;]\    [with determinations on save;]\    [with determinations on modify;]\    [with additional save;]\  \}];  [...]\  [`define behavior for RootEntity`](ABENBDL_DEFINE_BEH.html)\    [`extensible`](ABENBDL_EXTENSIBLE.html)\    [...]\  \{    [...]\    [[`mapping for PartnerType corresponding extensible`](ABENBDL_TYPE_MAPPING.html)]\    [[`determine action Name extensible`](ABENBDL_DETERMINE_ACTION.html) \{ ... \}]\    [[`draft determine action Prepare extensible \{ ... \}`](ABENBDL_DRAFT_ACTION.html)]\    ...  \}  ...``

To allow [BDEF extensions](ABENRAP_EXTENSION_GLOSRY.html) to a managed or unmanaged RAP behavior definition, [BDEF strict mode](ABENRAP_STRICT_MODE_GLOSRY.html) must be switched on using the keyword [`strict[(version)]`](ABENBDL_STRICT.html).

The keyword `extensible` can be specified at different places to allow for extensions:

In the header declaration, the following optional additions are available:

In unmanaged RAP BOs, there are the following limitations:

-   `extensible` in the [RAP behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html)
-   Prerequisite for extensibility. If it is not specified, extensions are not allowed. If specified, at least one [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) must be declared as extensible in the [entity behavior characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html).
-   Allows the following components to be added to a RAP BO via a BDEF extensions:

-   [RAP foreign entity](ABENRAP_FOREIGN_ENTITY_GLOSRY.html)
-   Adding a new [RAP authorization context for disable](ABENCDS_AUTH_CONTEXT_GLOSRY.html) and extending an existing [full authorization context](ABENCDS_OWN_AC_GLOSRY.html) from the extended entity.
-   Defining behavior for an extension node by means of a [RAP extension entity behavior](ABENRAP_EXT_ENTITY_BEHAVIOR_GLOSRY.html).

-   [`with friends`](ABENBDL_WITH_FRIENDS.html): Can be used to declare one or more BDEF extensions `BDEFExtension1`, `BDEFExtension2`, ... as friends of the current behavior definition `RootEntity`. At least one BDEF extension must be specified. The friends of a BDEF have enhanced access rights to the behavior definition in question. Further details are described in the topic [RAP - `with friends`](ABENBDL_WITH_FRIENDS.html).
-   Within curly brackets, one or more of the following additions are possible:

-   `with validations on save`
-   `with determinations on save`
-   `with determinations on modify`
-   `with additional save`
-   These additions explicitly allow [validations](ABENBDL_VALIDATIONS.html), [determinations](ABENBDL_DETERMINATIONS.html), or a [RAP additional save](ABENRAP_ADD_SAVE_GLOSRY.html) in a [RAP entity behavior extension](ABENRAP_BEHAVIOR_EXTENSION_GLOSRY.html). If not declared explicitly, the respective type of determination, validation, or the additional save must not be defined in an extension to an existing RAP BO entity.
-   **Note** This declaration refers only to extensions of existing RAP BO entities ([`extend behavior for`](ABENBDL_EXTEND_BEH.html)). In extension nodes ([`define behavior for`](ABENBDL_DEFINE_BEH_EXTEND.html)), validations, determinations, and an additional save are always possible and no explicit permission is required.

-   `extensible` in the [entity behavior characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html)
-   Mandatory for each individual [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) that allows extensions.
-   Allows the following behavior extensions to be added via a BDEF extension for the RAP BO entity in question:

-   [RAP determinations](ABENRAP_DETERMINATION_GLOSRY.html) and [RAP validations](ABENRAP_VALIDATION_GLOSRY.html) can be defined for the RAP BO entity in question, under the precondition that the particular kind of determination and validation is allowed in the header definition.
-   [RAP field characteristics](ABENRAP_FIELD_CHAR_GLOSRY.html) can be added to [extension](ABENRAP_PREFIX_EXTENSION_GLOSRY.html) fields.
-   [RAP actions](ABENRAP_ACTION_GLOSRY.html) including [RAP feature control](ABENRAP_FEATURE_CONTROL_GLOSRY.html).
-   [RAP functions](ABENRAP_FUNCTION_GLOSRY.html).
-   [RAP BO determine actions](ABENRAP_BO_DET_ACTION_GLOSRY.html).
-   Behavior-enabling of [associations](ABENASSOCIATION_GLOSRY.html) that have an extension node as association target.
-   [RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html).
-   [RAP foreign entities](ABENRAP_FOREIGN_ENTITY_GLOSRY.html).
-   [RAP additional save](ABENRAP_ADD_SAVE_GLOSRY.html).

-   `extensible` can be specified in different places in the [entity behavior body](ABENCDS_ENTITY_BODY_GLOSRY.html):

-   [`mapping for PartnerType corresponding extensible`](ABENBDL_TYPE_MAPPING.html): a [RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html) defined in the extended RAP business object can be extended with extension fields. `extensible` can only be used in combination with `corresponding`, so that components with the same name are automatically mapped to each other.
-   [`determine action Name extensible \{ ... \}`](ABENBDL_DETERMINE_ACTION.html): only allowed for [draft-enabled BOs](ABENDRAFT_RAP_BO_GLOSRY.html). Allows validations or determinations to be added to the [determine action](ABENRAP_BO_DET_ACTION_GLOSRY.html) in question.
-   `Internal` determine actions must not be declared as extensible.
-   [`draft determine action Prepare extensible \{ ... \}`](ABENBDL_DRAFT_ACTION.html): only allowed for draft-enabled BOs. Allows validations or determinations to be added to the [draft determine action Prepare](ABENRAP_BO_DRAFT_ACTION_GLOSRY.html) in question.
-   `Internal` draft determine actions must not be declared as extensible.

-   Determinations and validations cannot be specified in BDEF extensions to unmanaged RAP BOs. Therefore, the following additions are not available:
-   `with validations on save;`
-   `with determinations on modify;`
-   `with determinations on save;`
-   A RAP additional save is not available in BDEF extensions to unmanaged RAP BOs. Therefore, the addition `with additional save;` is not available.
-   Determine actions and the draft determine action `Prepare` are not available in BDEF extensions to unmanaged RAP BOs. Therefore, determine actions and the draft determine action `Prepare` cannot be specified as `extensible`.
-   Node extensibility is not available for unmanaged RAP BOs.

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_enabling.html