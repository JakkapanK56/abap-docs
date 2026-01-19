---
title: "ABENBDL_EXT_ENABL_EXT_BASE"
description: |
  ABENBDL_EXT_ENABL_EXT_BASE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_EXT_ENABL_EXT_BASE.htm"
abapFile: "ABENBDL_EXT_ENABL_EXT_BASE.html"
keywords: ["update", "delete", "do", "if", "class", "ABENBDL", "EXT", "ENABL", "BASE"]
---

``[`extension`](ABENBDL_EXTENSION_SYNTAX.html)\ [using interface];  [`extensible`](ABENBDL_EXTENSIBLE.html)\ [[`with friends BDEFExtension1 [, BDEFExtension2]\ [,...]]`](ABENBDL_WITH_FRIENDS.html)\ [\{    [with validations on save;]\    [with determinations on save;]\    [with determinations on modify;]\    [with additional save;]\  \}];  [...]\  [`extend behavior for EntityName`](ABENBDL_EXTEND_BEH.html)\    [...]\  \{    [...]\    [[`mapping for PartnerType corresponding extensible`](ABENBDL_TYPE_MAPPING.html)]\    [[`determine action Name extensible`](ABENBDL_DETERMINE_ACTION.html) \{ ... \}]\     ...  \}  \  [`define behavior for ExtNode`](ABENBDL_DEFINE_BEH_EXTEND.html)\    [`extensible`](ABENBDL_EXTENSIBLE.html)\    [...]\  \{    [...]\    [[`mapping for PartnerType corresponding extensible`](ABENBDL_TYPE_MAPPING.html)]\    [[`determine action Name extensible`](ABENBDL_DETERMINE_ACTION.html) \{ ... \}]\    [[`draft determine action Prepare extensible \{ ... \}`](ABENBDL_DRAFT_ACTION.html)]\    ...  \}  [...]\  ...``

To extend a [base BDEF extension](ABENRAP_BASE_BDEF_EXT_GLOSRY.html), the keyword `extensible` can be specified in the following places:

In the header declaration, the following optional additions are available:

In BDEF extensions to unmanaged RAP BOs, there are the following limitations:

The BDEF extension `DEMO_RAP_EXTEND2` extends the RAP behavior definition `DEMO_RAP_EXTENSIBLE`. It is declared as `extensible` and therefore allows for extension layering.

The BDEF extension `DEMO_RAP_BASE_EXT_LAYER` extends the BDEF extension `DEMO_RAP_EXTEND2`.

-   `extensible` in the BDEF header:
-   Prerequisite for extensibility. If it is not specified, extensions are not allowed. If specified, at least one component of the [RAP BO extension](ABENRAP_BO_EXTENSION_GLOSRY.html) must be declared as `extensible`.

-   [`with friends`](ABENBDL_WITH_FRIENDS.html): Can be used to declare one or more BDEF extensions `BDEFExtension1`, `BDEFExtension2`, ... as friends of the current BDEF extension. At least one BDEF extension must be specified. The friends of a BDEF have enhanced access rights to the behavior definition in question. Further details are described in the topic [RAP - `with friends`](ABENBDL_WITH_FRIENDS.html).
-   Within curly brackets, one or more of the following additions are possible:

-   `with validations on save`
-   `with determinations on save`
-   `with determinations on modify`
-   `with additional save`
-   These additions explicitly allow [validations](ABENBDL_VALIDATIONS.html), [determinations](ABENBDL_DETERMINATIONS.html), or a [RAP additional save](ABENRAP_ADD_SAVE_GLOSRY.html) in a [RAP entity behavior extension](ABENRAP_BEHAVIOR_EXTENSION_GLOSRY.html). If not declared explicitly, the respective type of determination, validation, or the additional save must not be defined in an extension to an existing RAP BO entity.
-   **Note** This declaration refers only to extensions of existing RAP BO entities ([`extend behavior for`](ABENBDL_EXTEND_BEH.html)). In extension nodes ([`define behavior for`](ABENBDL_DEFINE_BEH_EXTEND.html)), validations, determinations, and an additional save are always possible and no explicit permission is required.

-   `extensible` in the body of an [entity behavior extension](ABENRAP_BEHAVIOR_EXTENSION_GLOSRY.html):

-   [`mapping for PartnerType corresponding extensible`](ABENBDL_TYPE_MAPPING.html): a [RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html) can be extended with extension fields. `extensible` can only be used in combination with `corresponding`, so that components with the same name are automatically mapped to each other.
-   [`determine action Name extensible \{ ... \}`](ABENBDL_DETERMINE_ACTION.html): only allowed for [draft-enabled BOs](ABENDRAFT_RAP_BO_GLOSRY.html). Allows validations or determinations to be added to the [determine action](ABENRAP_BO_DET_ACTION_GLOSRY.html) in question.
-   `Internal` determine actions must not be declared as extensible.

-   `extensible` in the [entity behavior characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html) of an [extension entity behavior definition](ABENRAP_EXT_ENTITY_BEHAVIOR_GLOSRY.html) (extension node):
-   Mandatory for each individual extension node that allows extensions.
-   Allows the following behavior extensions to be added via a BDEF extension:

-   [RAP determinations](ABENRAP_DETERMINATION_GLOSRY.html) and [RAP validations](ABENRAP_VALIDATION_GLOSRY.html) can be defined for the RAP BO entity in question, under the precondition that the particular kind of determination and validation is allowed in the header definition.
-   [RAP field characteristics](ABENRAP_FIELD_CHAR_GLOSRY.html) can be added to [extension](ABENRAP_PREFIX_EXTENSION_GLOSRY.html) fields.
-   [RAP actions](ABENRAP_ACTION_GLOSRY.html) including [RAP feature control](ABENRAP_FEATURE_CONTROL_GLOSRY.html).
-   [RAP functions](ABENRAP_FUNCTION_GLOSRY.html).
-   [RAP BO determine actions](ABENRAP_BO_DET_ACTION_GLOSRY.html).
-   Behavior-enabling of [associations](ABENASSOCIATION_GLOSRY.html) that have an extension node as association target.
-   [RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html).
-   [RAP additional save](ABENRAP_ADD_SAVE_GLOSRY.html).

-   `extensible` can be specified in different places in the [entity behavior body](ABENCDS_ENTITY_BODY_GLOSRY.html) of an extension node:

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
-   Node extensibility is not available for unmanaged RAP BOs. Therefore, extension nodes cannot be specified as `extensible`.

extension implementation in class bp\_demo\_rap\_extend2 unique;\\nextensible \\{\\nwith determinations on save;\\nwith validations on save; \\}\\n\\nextend behavior for DEMO\_RAP\_EXTENSIBLE\\n\\{\\n association \_child \\{create; with draft;\\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_EXTENSIBLE\_CH\\nauthorization dependent\\nlock dependent\\npersistent table demo\_dbtab\_child\\ndraft table demo\_dbtab\_dr2\\nextensible\\n\\{\\nupdate;\\ndelete;\\naction(authorization:global) MyExtAction;\\n\\nassociation \_to\_parent\\{with draft;\\}\\n\\nfield(readonly:update) key\_field, key\_field\_child;\\n\\} extension implementation in class bp\_demo\_rap\_base\_ext\_layer unique;\\n\\nextend behavior for DEMO\_RAP\_EXTENSIBLE\\n\\{\\n\\n\\}\\n\\nextend behavior for DEMO\_RAP\_EXTENSIBLE\_CH\\n\\{\\n action(authorization:global) Action\_X;\\n validation Validation\_X on save \\{ create; \\}\\n determination Determination\_X on save \\{ create; \\}\\n determine action (authorization:none) DetAct\_X \\{\\n validation Validation\_X; determination Determination\_X;\\}\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_enabling.html abenbdl\_extensibility\_enabling\_ext.html