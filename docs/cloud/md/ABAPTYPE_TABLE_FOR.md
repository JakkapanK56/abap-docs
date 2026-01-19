---
title: "ABAPTYPE_TABLE_FOR"
description: |
  ABAPTYPE_TABLE_FOR - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPTYPE_TABLE_FOR.htm"
abapFile: "ABAPTYPE_TABLE_FOR.html"
keywords: ["insert", "update", "delete", "do", "if", "case", "method", "class", "data", "types", "internal-table", "ABAPTYPE", "TABLE", "FOR"]
---

`... TABLE FOR \{ ACTION IMPORT bdef~action \}\              |\ \{ ACTION RESULT bdef~action \}\              |\ \{\ [INSTANCE] AUTHORIZATION KEY bdef[~group]\ \}\              |\ \{\ [INSTANCE] AUTHORIZATION RESULT bdef[~group]\ \}\              |\ \{ CHANGE bdef \}\              |\ \{ CREATE bdef [\\_assoc]\ \}\              |\ \{ DELETE bdef \}\              |\ \{ DETERMINATION bdef~det \}\              |\ \{ EVENT bdef~evt \}\              |\ \{ FAILED [EARLY | LATE] bdef \}\              |\ \{ HIERARCHY bdef \}\              |\ \{\ [INSTANCE] FEATURES KEY bdef[~group]\ \}\              |\ \{\ [INSTANCE] FEATURES RESULT bdef[~group]\ \}\              |\ \{ FUNCTION IMPORT bdef~function \}\              |\ \{ FUNCTION RESULT bdef~function \}\              |\ \{ KEY OF bdef \}\              |\ \{ MAPPED [EARLY | LATE] bdef \}\              |\ \{ PERMISSIONS KEY bdef \}\              |\ \{ READ IMPORT bdef [\\_assoc]\ \}\              |\ \{ READ LINK bdef\\_assoc \}\              |\ \{ READ RESULT bdef [\\_assoc]\ \}\              |\ \{ REPORTED [EARLY | LATE] bdef \}\              |\ \{ UPDATE bdef \}\              |\ \{ VALIDATION bdef~valid \} ...`

Special ABAP type that is used for internal tables in the context of [RAP](ABENRAP_GLOSRY.html) to enable the communication between a [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) and a [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html). These internal tables hold [input parameters](ABENINPUT_PARAMETER_GLOSRY.html), or [output parameters](ABENOUTPUT_PARAMETER_GLOSRY.html) respectively, to enable mass processing of data by bundling ABAP EML `READ` or `MODIFY` requests in one method call.

For all operations defined in the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html), ABAP types can be derived and used with this special syntax. The use is dependent on the definition in the BDEF. For example, if the operation `create` is not specified in the BDEF, `TYPE TABLE FOR CREATE` cannot be used.

The internal tables contain various [special components](ABAPDERIVED_TYPES_COMP.html), also depending on the BDEF. Generally, the tables are [standard tables](ABENSTANDARD_TABLE_GLOSRY.html) with an empty [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html). However, most of the tables have predefined [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html). Find more information in the topic [Secondary Keys for BDEF Derived Types](ABAPDERIVED_TYPES_SECONDARY_KEYS.html).

Notes on the syntax:

**Overview**

The following table covers the variants including information on the BDEF prerequisites and the tables' components.

**Note** The components listed in the **Components** column of the following table might cover more than mentioned there. It depends on the context. For example, the draft indicator *%is\_draft* is available in case of drafts only. *%pid* is only available in [*late numbering*](ABENBDL_LATE_NUMBERING.html) scenarios.

For details on the components, see [Components of BDEF Derived Types](ABAPDERIVED_TYPES_COMP.html). For details on the BDEF specifications, see the subtopics in [RAP - BDL for Behavior Definitions](ABENBDL.html).

-   `bdef`: `bdef` means the full entity name of either a root or child entity, or an alias. An alias, however, only works within handler methods of a RAP BO provider. Aliases do not work for explicit declarations outside of implementation classes. The reference to a child entity can also be specified together with its root entity by writing the root entity name followed by `\\\\` and the child entity name: `root_entity\\\\\child_entity`. If this syntax is used, the child's alias name must be specified if specified in the BDEF: `root_entity\\\\\child_entity_alias`.
-   `bdef\\_assoc`: `_assoc` is the name of an association specified in the underlying CDS view of the RAP BO. The reference to the association is made using a backslash `\\`.
-   `bdef~action`: `action` is the name of an action specified in the BDEF. The reference to the action is made using a tilde (`~`).
-   `bdef~function`: `function` is the name of a function specified in the BDEF. The reference to the function is made using a tilde (`~`).
-   `bdef~group`: `group` is the name of a group specified in the BDEF. The reference to the group is made using a tilde (`~`).
-   `bdef~det`: `det` is the name of a determination specified in the BDEF. The reference to the determination is made using a tilde (`~`).
-   `bdef~valid`: `valid` is the name of a validation specified in the BDEF. The reference to the validation is made using a tilde (`~`).
-   `bdef~evt`: `evt` is the name of a [RAP business event](ABENRAP_ENTITY_EVENT_GLOSRY.html) specified in the BDEF. The reference to the event is made using a tilde (`~`).

-   Certain BDEF derived types can only be specified and used within implementation classes and [ABP auxiliary classes](ABENABP_AUX_CLASS_GLOSRY.html), not outside them. These types include the following: `FOR CHANGE`, `FOR DETERMINATION`, `FOR VALIDATION`, `FOR ... FEATURES`, `FOR ... AUTHORIZATION`
-   The components of BDEF derived types can be checked via the element information in [ADT](ABENADT_GLOSRY.html) by choosing F2 for the typed variable.

-   For a convenient handling and specification of the `%` components, the ADT code completion shows possible entries and simplifies inserting them without the need to remember the respective field names from the underlying CDS view.

-   The example Display BDEF Derived Type Components allows you to explore multiple BDEF derived type components and their availability in variables typed with `TYPE TABLE FOR ...` and [`TYPE STRUCTURE FOR ...`](ABAPTYPE_STRUCTURE_FOR.html). The program makes use of three different RAP scenarios: [RAP external numbering](ABENRAP_EXT_NUMBERING_GLOSRY.html), [`late numbering`](ABENBDL_LATE_NUMBERING.html) and [draft](ABENBDL_WITH_DRAFT.html).
-   The type `TYPE TABLE FOR CHANGE` is demonstrated in the following examples:

-   [ABAP EML - `TYPE REQUEST FOR` in a managed RAP BO with additional save](ABENRAP_ADDITIONAL_SAVE_ABEXA.html): Uses a managed RAP BO whose BDEF is specified with `with additional save`.
-   [ABAP EML -  `TYPE REQUEST FOR` in a managed RAP BO with unmanaged save](ABENRAP_MANAGED_UNM_SAVE_ABEXA.html): Uses a simple managed RAP BO whose BDEF is specified with `with unmanaged save`.

-   The type `TYPE TABLE FOR HIERARCHY` is demonstrated in the example [Using `TYPE TABLE`/`TYPE STRUCTURE FOR HIERARCHY`](ABENDERIVED_TYPE_HIERARCHY_ABEXA.html).

**`TYPE TABLE FOR ...`** **Purpose** **BDEF Prerequisites**\\ **Components**\\ `ACTION IMPORT`\\ Used to store the import parameters for [actions](ABENBDL_ACTION.html). The action is specified in the BDEF. See the details in the RAP BDL documentation for [action](ABENBDL_ACTION.html). **Note** The availability of the following components depends on the context and defined action in the BDEF, that is, only a subset of the below components can be expected to be available. For example, *%param* is only available if the action is defined with the notation *PARAMETER*. \\
\\
*%cid* \\
*%cid\_ref* \\
*%key* \\
*%param* \\
*%pky* \\
*%tky*\\ `ACTION RESULT`\\ Used to store the result for [actions](ABENBDL_ACTION.html). Only available if the action has a result parameter specified in the BDEF. See the details in the RAP BDL documentation for [action](ABENBDL_ACTION.html). **Note** The availability of the following components depends on the context and defined action in the BDEF, that is, only a subset of the below components might be expected to be available depending on how the action is defined in the BDEF. \\
\\
*%cid* \\
*%cid\_ref* \\
*%key* \\
*%param* \\
*%pky* \\
*%tky*\\ `AUTHORIZATION KEY` \\
`INSTANCE AUTHORIZATION KEY`\\ Used for retrieving [instance authorization](ABENBDL_AUTHORIZATION.html) information in the context of handler method implementations of ABAP EML [`GET PERMISSIONS`](ABAPGET_PERMISSIONS.html) statements. The keys of RAP BO instances, that have been specified, serve as import parameters for the corresponding handler methods. The keys specify for which RAP BO instance authorization information is to be requested. \\
\\
A specification with `AUTHORIZATION KEY` is the same as with `INSTANCE AUTHORIZATION KEY`. An authorization check must be specified in the BDEF: `authorization master` or `authorization dependent`. See the details in the RAP BDL documentation for [authorization](ABENBDL_AUTHORIZATION.html). \\ `%key` \\
`%pky` \\
`%tky`\\ `AUTHORIZATION RESULT` \\
`INSTANCE AUTHORIZATION RESULT`\\ Used for retrieving [instance authorization](ABENBDL_AUTHORIZATION.html) information in the context of handler method implementations of ABAP EML [`GET PERMISSIONS`](ABAPGET_PERMISSIONS.html) statements. The result contains the outcome of the permission information retrieval for authorizations based on the keys and request parameters. \\
\\
A specification with `AUTHORIZATION RESULT` is the same as with `INSTANCE AUTHORIZATION RESULT`. An authorization check must be specified in the BDEF: `authorization master` or `authorization dependent`. See the details in the RAP BDL documentation for [authorization](ABENBDL_AUTHORIZATION.html). \\ `%action` \\
`%assoc` \\
`%delete` \\
`%key` \\
`%op` \\
`%pky` \\
`%tky` \\
`%update`\\ `CHANGE`\\ Only used in the `save_modified` method that is part of a local saver class of an ABP that inherits from the base saver class `CL_ABAP_BEHAVIOR_SAVER`. It is only used in the context of managed implementations with additional save and unmanaged save. \\
\\
Internal tables that are typed with `TYPE TABLE FOR CHANGE` are available as nested tables of the `create` and `update` structures typed with [`TYPE REQUEST FOR CHANGE`](ABAPTYPE_REQUEST_FOR.html) in the `save_modified` method. See the topic [RAP - `SavingOptions`](ABENBDL_SAVING.html) for the BDEF prerequisites on managed implementations with additional save and unmanaged save. `%control` \\
`%data` \\
`%key` \\
\\
**Note:** The access is not allowed outside of the implementation class. `CREATE` Used for [`CREATE`](ABAPMODIFY_ENTITY_ENTITIES_OP.html) or create-by-association ([`CREATE BY`](ABAPMODIFY_ENTITY_ENTITIES_OP.html)) operations. \\ `CREATE bdef`: `create` must be defined in the root view's part of the BDEF. See the details in the RAP BDL documentation for [standard operations](ABENBDL_STANDARD_OPERATIONS.html).\\
\\
`CREATE bdef\\_assoc`: create-by-association operations are enabled by default for compositions even if not explicitly maintained. Yet, it is recommended that the `create` operation for the respective association is included in the root view's or child view's part of the BDEF. A create-by-association operation cannot be carried out for a child entity if it is not explicitly maintained using the `\{ create; \}` notation. For modifying external cross-BO associations that are not part of the composition, the `\{ create; \}` notation must be explicitly maintained in the BDEF for the association. As a prerequisite, the behavior for the association `_assoc` is maintained in another BDEF accordingly. See more details in the RAP BDL documentation for [Operations for Associations](ABENBDL_ASSOCIATION.html). \\ `CREATE bdef`: \\
`%cid` \\
`%control` \\
`%data` \\
`%key` \\
\\
`CREATE bdef\\assoc`: \\
`%cid_ref` \\
`%key` \\
`%pky` \\
`%target` \\
`%tky`\\ `DELETE`\\ Used for [`DELETE`](ABAPMODIFY_ENTITY_ENTITIES_OP.html) operations. \\ `delete` must be defined in the root view's part of the BDEF. See the details in the RAP BDL documentation for [Standard Operations](ABENBDL_STANDARD_OPERATIONS.html). `%cid_ref` \\
`%key` \\
`%pky` \\
`%tky`\\ `DETERMINATION`\\ Used to specify the keys of RAP BO instances as input parameters in the context of determinations and their handler method implementations. The keys specify which RAP BO instances are to be respected for determinations. The determination is specified in the BDEF. See the details in the RAP BDL documentation for [Determinations](ABENBDL_DETERMINATIONS.html). \\ `%key` \\
`%pky` \\
`%tky` \\
\\
**Note:** The access to determinations is not allowed outside of the implementation class. `EVENT` Used with [`RAISE ENTITY EVENT`](ABAPRAISE_ENTITY_EVENT.html) statements in the context of [RAP entity events](ABENRAP_ENTITY_EVENT_GLOSRY.html). The event `evt` must be defined in a BDEF or [BDEF extension](ABENRAP_EXTENSION_GLOSRY.html) with or without parameters. `%key` \\
\\
If the event is defined with parameters, `%param` is available, too. `FAILED` \\
`FAILED EARLY` \\
`FAILED LATE`\\ Used to specify [RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html). In this case, it is used for information for identifying the data set for which an error occurred in a RAP operation. \\
The addition `EARLY` or no addition is relevant in the context of the interaction phase. The addition `LATE` is relevant in the context of the save phase. In general, behavior must be defined for the entity in the BDEF. \\ **Note:** The availability of the following components depends on the BDEF, that is, only a subset of the below components might be expected to be available. \\
\\
*%action* \\
*%assoc* \\
*%cid* \\
*%create* \\
*%delete* \\
*%fail* \\
*%key* \\
*%op* \\
*%pky* \\
*%tky* \\
*%update* \\
\\
In case of *LATE*, the component *%cid* is not available. `FEATURES KEY` \\
`INSTANCE FEATURES KEY`\\ Used for retrieving [instance feature control](ABENBDL_ACTIONS_FC.html) information in the context of handler method implementations of ABAP EML [`GET PERMISSIONS`](ABAPGET_PERMISSIONS.html) statements. The keys of RAP BO instances that have been specified serve as import parameters of the corresponding handler methods. The keys specify for which RAP BO instances feature control information is to be requested. \\
\\
A specification with `FEATURES KEY` is the same as with `INSTANCE FEATURES KEY`. The property `features:instance` must be specified in the BDEF. See the subtopics in the RAP BDL documentation on the [Entity Behavior Body](ABENBDL_BODY.html) for those elements that can be specified with the property. \\ `%key` \\
`%pky` \\
`%tky`\\ `FEATURES RESULT` \\
`INSTANCE FEATURES RESULT`\\ Used for retrieving [instance feature control](ABENBDL_ACTIONS_FC.html) information in the context of handler method implementations of ABAP EML [`GET PERMISSIONS`](ABAPGET_PERMISSIONS.html) statements. The result contains the outcome of the permission information retrieval for instance features based on the keys and request parameters. \\
\\
A specification with `FEATURES RESULT` is the same as with `INSTANCE FEATURES RESULT`. The property `features:instance` must be specified in the BDEF. See the subtopics in the RAP BDL documentation on the [entity behavior body](ABENBDL_BODY.html) for those elements that can be specified with the property. \\ **Note:** The availability of the following components depends on the BDEF, that is, only a subset of the below components might be expected to be available. \\
\\
*%action* \\
*%assoc* \\
*%delete* \\
*%features* \\
*%field* \\
*%key* \\
*%pky* \\
*%tky* \\
*%update*\\ `FUNCTION IMPORT`\\ Used to store the import parameters for [functions](ABENBDL_FUNCTION.html). The function is specified in the BDEF. See the details in the RAP BDL documentation for [Function](ABENBDL_FUNCTION.html). \\ **Note**: The availability of the following components depends on the context and defined function in the BDEF, that is, only a subset of the below components might be expected to be available. \\
\\
`%cid` \\
`%key` \\
`%param` \\
`%pky` \\
`%tky`\\ `FUNCTION RESULT`\\ Used to store the result for [functions](ABENBDL_FUNCTION.html). Only available if the function has a result parameter specified in the BDEF. See the details in the RAP BDL documentation for [function](ABENBDL_FUNCTION.html). \\ **Note:** The availability of the following components depends on the context and defined function in the BDEF, that is, only a subset of the below components might be expected to be available. \\
\\
*%cid* \\
*%key* \\
*%param* \\
*%pky* \\
*%tky*\\ `HIERARCHY`\\ Used for [`deep` input parameters](ABENBDL_ACTION_INPUT_PARAM.html) and [`deep` output parameters](ABENBDL_ACTION_OUTPUT_PARA.html) in the context of deep [action](ABENRAP_ACTION_GLOSRY.html) or [function](ABENRAP_FUNCTION_GLOSRY.html) parameters. The type is only available for [abstract BDEFs](ABENCDS_ABSTRACT_BDEF_GLOSRY.html). Only available if behavior is defined for an abstract entity, i. e. the BDEF must be defined with [`with hierarchy;`](ABENBDL_BDEF_ABSTRACT_HEADER.html). Furthermore, deep actions or functions must be defined in the non-abstract BDEFs with the additions [`deep parameter`](ABENBDL_ACTION_INPUT_PARAM.html) (to interpret the input parameter as structure) or [`deep table parameter`](ABENBDL_ACTION_INPUT_PARAM.html) (to interpret the input parameter as table). The type comprises all entity fields plus, if available, a component for every [composition](ABENCDS_COMPOSITION_GLOSRY.html) that itself has subcomponents. All fields keep their original line type. \\
\\
If the BDEF for the abstract entity includes behavior definitions for the compositions, the derived type contains further components: For a composition with cardinality <= 1, this component is a structure; otherwise, the component is a table. If the behavior for an abstract entity is defined with the addition [`with control`](ABENBDL_DEFINE_BEH_ABSTRACT.html), the derived type also contains [`%control`](ABAPDERIVED_TYPES_COMP.html) as component. The components of `%control` itself are comprised of all fields of the abstract entity and, as above and if available, structures or internal tables for compositions. \\
\\
The subcomponents of the [`%param`](ABAPDERIVED_TYPES_PARAM.html) component in the context of deep action and function are typed with this BDEF derived type. `KEY OF`\\ Used, for example, to specify RAP BO instances that are to be locked in the context of the ABAP EML statement [`SET LOCKS`](ABAPSET_LOCKS.html). The nested tables of the structures that are typed with [`TYPE REQUEST FOR DELETE`](ABAPTYPE_REQUEST_FOR.html) in the context of managed RAP BOs [`with additional save`](ABENBDL_SAVING.html) and [`with unmanaged save`](ABENBDL_SAVING.html) also use this type. See the details in the RAP BDL documentation for [Locking](ABENBDL_LOCKING.html) and [`SavingOptions`](ABENBDL_SAVING.html). The keys (not `%key`). \\
\\
**Note:**\\ *%is\_draft* and *%pid* are not possible. `MAPPED` \\
`MAPPED EARLY` \\
`MAPPED LATE`\\ Used to specify [RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html). In this case, it is used to provide mapping information on [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html), for example, which key values were created for given content IDs ([`%cid`](ABAPDERIVED_TYPES_CID.html)). \\
The addition `EARLY` or no addition is relevant in the context of the interaction phase. The addition `LATE` is relevant in the context of the save phase. See more details in the documentation for [`response_param`](ABAPEML_RESPONSE.html). In general, behavior must be defined for the entity in the BDEF. The availability of the following components depends on the context and defined function in the BDEF, that is, only a subset of the below components might be expected to be available. \\
\\
Components of a table typed without an addition or with the addition `EARLY`: \\
`%cid` \\
`%key` \\
`%pid` \\
`%pky` \\
`%tky`\\
\\
Components of a table typed with the addition `LATE`: \\
`%key` \\
`%pid` \\
`%pre` \\
`%tmp`\\ `PERMISSIONS KEY`\\ Used for specifying the keys of RAP BO instances in the context of ABAP EML [`GET PERMISSIONS`](ABAPGET_PERMISSIONS.html) statements. The keys of RAP BO instances are specified to define for which RAP BO instances permission information is to be requested. The keys serve then as import parameters for the corresponding handler methods [`GET PERMISSIONS`](ABAPGET_PERMISSIONS.html) statements. \\ \\ `%key` \\
`%pky` \\
`%tky`\\ `READ IMPORT` Used to import RAP BO instances in [`READ`](ABAPREAD_ENTITY_ENTITIES_OP.html) and read-by-association ([`READ BY`](ABAPREAD_ENTITY_ENTITIES_OP.html)) operations. `READ bdef`: Read operations are enabled by default for compositions and cannot be deactivated. \\
\\
`READ bdef\\_assoc`: Read-by-association operations are enabled by default for compositions even if not explicitly maintained. Yet, it is recommended `association _assoc;` is used. Reading from cross-BO associations, which are not part of the composition tree, must be explicitly enabled in the BDEF using an `association` notation. `%control` \\
`%key` \\
`%pky` \\
`%tky`\\ `READ LINK`\\ Used to return the primary keys of root and associated entities within a composition tree in [`READ`](ABAPREAD_ENTITY_ENTITIES_OP.html) and read-by-association ([`READ BY`](ABAPREAD_ENTITY_ENTITIES_OP.html)) operations. \\ `READ bdef\\_assoc`: Read-by-association operations are enabled by default for compositions even if not explicitly maintained. Yet, it is recommended that `association _assoc;` s used. Reading from cross-BO associations, which are not part of the composition tree, must be explicitly enabled in the BDEF using an `association` notation. Structure `source` containing `%key`/`%pky`/`%tky` of the source entity, and structure `target` containing `%key`/`%pky`/`%tky` of the associated entity. `READ RESULT`\\ Used to return successfully read RAP BO instances in [`READ`](ABAPREAD_ENTITY_ENTITIES_OP.html) and read-by-association ([`READ BY`](ABAPREAD_ENTITY_ENTITIES_OP.html)) operations. \\ `READ bdef`: Read operations are enabled by default for compositions and cannot be deactivated. \\
\\
`READ bdef\\_assoc`: Read-by-association operations are enabled by default for compositions even if not explicitly maintained. Yet, it is recommended that `association _assoc;` is used. Reading from cross-BO associations that are not part of the composition tree must be explicitly enabled in the BDEF using an `association` notation. `%data` \\
`%key` \\
`%pky` \\
`%tky`\\ `REPORTED` \\
`REPORTED EARLY` \\
`REPORTED LATE`\\ Used to specify [RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html). In this case, it is used to exchange messages, for example, error messages, for each entity defined in the BDEF and not related to a specific entity. \\
The addition `EARLY` or no addition is relevant in the context of the interaction phase. The addition `LATE` is relevant in the context of the save phase. See more details in the documentation for [`response_param`](ABAPEML_RESPONSE.html). In general, behavior must be defined for the entity in the BDEF. \\ `%action` \\
`%cid` \\
`%create` \\
`%element` \\
`%delete` \\
`%global` \\
`%key` \\
`%msg` \\
`%op` \\
`%path` \\
`%pky` \\
`%state_area` \\
`%tky` \\
`%update` \\
\\
In case of `LATE`, the component `%cid` is not available. `UPDATE`\\ Used for [`UPDATE`](ABAPMODIFY_ENTITY_ENTITIES_OP.html) operations. \\ `update` must be defined in the root view's part of the BDEF. See the details in the RAP BDL documentation for [standard operations](ABENBDL_STANDARD_OPERATIONS.html). \\ `%cid_ref` \\
`%control` \\
`%data` \\
`%key` \\
`%pky` \\
`%tky`\\ `VALIDATION`\\ Used to specify the keys of RAP BO instances as input parameters in the context of validations and their handler method implementations. The keys specify which RAP BO instances are to be considered for validations. The validation is specified in the BDEF. See the details in the RAP BDL documentation for [Validations](ABENBDL_VALIDATIONS.html). \\ `%key` \\
`%pky` \\
`%tky` \\
\\
**Note:** The access to validations is not allowed outside of the implementation class. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html