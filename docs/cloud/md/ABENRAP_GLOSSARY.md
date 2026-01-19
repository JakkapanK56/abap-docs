---
title: "ABENRAP_GLOSSARY"
description: |
  ABENRAP_GLOSSARY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENRAP_GLOSSARY.htm"
abapFile: "ABENRAP_GLOSSARY.html"
keywords: ["select", "insert", "update", "delete", "do", "while", "if", "case", "method", "class", "data", "types", "internal-table", "ABENRAP", "GLOSSARY"]
---

RAP stands for the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html). In the following, terms of the [ABAP Glossary](ABENABAP_GLOSSARY.html) are listed, that are relevant for RAP.

**ABAP behavior pool**

ABP for short. A special [class pool](ABENCLASS_POOL_GLOSRY.html) for an [ABAP behavior implementation](ABENBEHAVIOR_IMPLEMENT_GLOSRY.html). A behavior pool is based on a [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). The name of the [global class](ABENGLOBAL_CLASS_GLOSRY.html) of a behavior pool is usually prefixed with `BP_` but does not implement the behavior itself. The [behavior implementation](ABENBEHAVIOR_IMPLEMENT_GLOSRY.html) is coded in local [ABP handler classes](ABENABP_HANDLER_CLASS_GLOSRY.html) and [ABP saver classes](ABENABP_SAVER_CLASS_GLOSRY.html) in the [CCIMP include](ABENCCIMP_GLOSRY.html) of the behavior pool. These classes implement the [unmanaged RAP BO provider](ABENUNMANAGED_RAP_BO_PROV_GLOSRY.html) that is called by the [RAP runtime engine](ABENRAP_RUNTIME_ENGINE_GLOSRY.html) when the [RAP BO](ABENRAP_BO_GLOSRY.html) is accessed.

**ABAP contract checks**

ABAP contract checks summarize the following checks:

**ABAP EML**

*\->*\\ [ABAP Entity Manipulation Language](ABENAEML_GLOSRY.html)

**ABAP Entity Manipulation Language**

ABAP EML or EML for short. Subset of ABAP that allows access to [RAP business objects](ABENRAP_BO_GLOSRY.html) in an [ABAP program](ABENABAP_PROGRAM_GLOSRY.html). When EML statements are executed for a RAP BO, [RAP BO operations](ABENRAP_BO_OPERATION_GLOSRY.html) are called to access the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) of the BO. The communication between EML and the RAP BO consists of sending and receiving internal tables of special [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html). ABAP EML can be used in any program to access RAP BOs and especially in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) in order to access the transactional buffer of the RAP BO.

**ABAP RAP**

*\->*\\ [ABAP RESTful Application Programming Model (RAP)](ABENARAP_GLOSRY.html)

**ABAP RESTful Application Programming Model**

Also ABAP RESTful Programming Model, ABAP RAP, or RAP for short. ABAP programming model that is [RESTful](ABENRESTFUL_GLOSRY.html) or that meets the requirements of a [REST](ABENREST_GLOSRY.html) architecture. In ABAP RAP, [AS ABAP](ABENAS_ABAP_GLOSRY.html) plays the role of a stateless Web server. [OData](ABENODATA_GLOSRY.html) serves as the RESTful protocol for requests from Web clients and the state of a session can be saved to the [standard database](ABENSTANDARD_DB_GLOSRY.html). The modeling is based on [CDS entities](ABENCDS_ENTITY_GLOSRY.html) and [RAP behavior definitions](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html).

For queries, CDS entities can be directly exposed by [business services](ABENBUSINESS_SERVICE_GLOSRY.html) and all data can be retrieved by the [RAP query engine](ABENRAP_QUERY_ENGINE_GLOSRY.html). For transactional access to data, the model offers [RAP business objects](ABENRAP_BO_GLOSRY.html), whose behavior is provided by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html), or is implemented in [ABAP behavior implementations](ABENBEHAVIOR_IMPLEMENT_GLOSRY.html).

RAP is the transactional programming model for [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html).

**ABP auxiliary class**

A [global class](ABENGLOBAL_CLASS_GLOSRY.html) that refers to a [RAP BO](ABENRAP_BO_GLOSRY.html) and has extended access rights to the referenced RAP BO. Its primary purpose is to support implementation in an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). This is accomplished by providing reusable methods and allowing developers to concurrently implement [RAP behavior](ABENRAP_BEHAVIOR_GLOSRY.html).

**abstract BDEF extension**

A development object that extends a [RAP abstract behavior definition](ABENCDS_ABSTRACT_BDEF_GLOSRY.html) using the statement [`extension for abstract`](ABENBDL_EXTENSIBILITY_ABSTRACT.html).

**ancestor association**

An [intra-BO association](ABENCDS_INTRA_BO_ASSOC_GLOSRY.html) whose [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is a [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) between the current node and the [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html). The association target must be higher in the hierarchical structure of the RAP composition tree, so it cannot be a sibling node or the [CDS parent entity](ABENPARENT_ENTITY_GLOSRY.html) of the current node. An ancestor association is defined using the keyword [`ancestor`](ABENBDL_ANCESTOR_EXT.html). The purpose of ancestor associations is to make it possible to implicitly derive the path to a RAP BO's [authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html), [lock master entity](ABENRAP_LOCK_MA_ENT_GLOSRY.html), and [ETag master entity](ABENRAP_ETAG_MA_ENT_GLOSRY.html), so the respective entities need not be defined explicitly.

**association implementation type**

Defines the [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) that implements the [operations for associations](ABENRAP_OPERATION_ASSOC_GLOSRY.html). The association implementation types available are `managed` and `unmanaged`.

**base BDEF**

Synonym for projected BDEF. [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) that serves as a basis for projections. It can be of [BDEF implementation type](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html)\\ [managed](ABENMANAGED_RAP_BO_GLOSRY.html) or [unmanaged](ABENUNMANAGED_RAP_BO_GLOSRY.html).

**base BDEF extension**

A development object that extends a [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) of type [`managed`](ABENMANAGED_RAP_BO_GLOSRY.html) or [`unmanaged`](ABENUNMANAGED_RAP_BO_GLOSRY.html) using the statement [`extension`](ABENBDL_EXTENSION_SYNTAX.html).

**BDEF alternative key**

A user-defined BDEF key. User-defined BDEF keys exist in addition to the [primary key](ABENPRIMARY_KEY_GLOSRY.html) of the underlying CDS data model and to the predefined [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html) for [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html). There are two types of BDEF alternative keys:

BDEF alternative keys are used, for example, to define the signature of a [RAP key function](ABENRAP_KEY_FUNCTION_GLOSRY.html).

**BDEF derived type**

The type of an internal table or structure that is derived by the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html) from the [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). Such internal tables and structures are used for the communication between [RAP BO consumers](ABENRAP_BO_CONSUMER_GLOSRY.html) and [RAP BO providers](ABENRAP_BO_PROVIDER_GLOSRY.html). For that, the parameters of a method that implements [RAP BO behavior](ABENRAP_BO_BEHAVIOR_GLOSRY.html) are typed with BDEF derived types. In [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html), BDEF derived types can be used to declare internal tables or structures to be passed to parameters of [RAP handler](ABENABP_HANDLER_CLASS_GLOSRY.html) and [saver classes](ABENABP_SAVER_METHOD_GLOSRY.html).

**BDEF extension**

A [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that extends a [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html).

There are the following types of BDEF extensions:

It is possible to extend a BDEF extension with further BDEF extensions. This is referred to as [extension layering](ABENRAP_EXT_LAYERING_GLOSRY.html).

**BDEF extension header**

The part of a [BDEF extension](ABENRAP_EXTENSION_GLOSRY.html) that includes the first one to three lines of [BDL source code](ABENBDL_SOURCE_CODE_GLOSRY.html). It starts with  [`extension`](ABENBDL_EXTENSIBILITY_MANAGED_UNM.html) and may additionally define an implementation class and enable BDEF privileged mode.

**BDEF friend**

A BDEF friend is a [BDEF extension](ABENRAP_EXTENSION_GLOSRY.html) whose implementation has unrestricted access to all components of the original [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). For example, a BDEF friend can call [internal RAP BO operations](ABENRAP_INTERNAL_OPERATION_GLOSRY.html) and read or modify RAP BO entities [`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html). A BDEF friend is declared using the optional addition [`with friends`](ABENBDL_WITH_FRIENDS.html). BDEF friends can be used for modularization purposes.

**BDEF implementation type**

Type of [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). There are five different implementation types of behavior definitions:

The differences are, for example, the type of underlying [CDS entity](ABENCDS_VIEW_ENTITY.html) and the degree of standardized vs. customized behavior implementation.

**BDEF privileged mode**

With BDEF privileged mode, [RAP BO consumers](ABENRAP_BO_CONSUMER_GLOSRY.html) can circumvent [authorization checks](ABENAUTHORIZATION_CHECK_GLOSRY.html), such as  [RAP authorization control](ABENRAP_AUTH_CONTROL_GLOSRY.html). BDEF privileged mode is prerequisite to use the addition [`PRIVILEGED`](ABAPEML_PRIVILEGED.html) in [EML](ABENEML_GLOSRY.html) when consuming the [RAP BO](ABENRAP_BO_GLOSRY.html).  

**BDEF projection extension**

A development object that extends a [RAP projection behavior definition](ABENCDS_PROJ_BDEF_GLOSRY.html) using the statement [`extension for projection`](ABENBDL_EXTENSIBILITY_PROJECTION.html).

**BDEF projection extension header**

The part of a [BDEF projection extension](ABENRAP_PROJEC_BDEF_EXT_GLOSRY.html) that starts with  [`extension for projection`](ABENBDL_EXTENSION_FOR_PROJECTION.html).

**BDEF pure key**

A [BDEF alternative key](ABENRAP_ALTERNATIVE_KEY_GLOSRY.html) defined using [`define pure key`](ABENBDL_DEFINE_KEY.html).

**BDEF secondary key**

A [BDEF alternative key](ABENRAP_ALTERNATIVE_KEY_GLOSRY.html) defined using [`define secondary key`](ABENBDL_DEFINE_KEY.html).

**BDEF strict mode**

BDEF strict mode applies additional syntax checks to [RAP behavior definitions](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). It ensures, for example, that no outdated syntax is used, implicitly available operations are declared explicitly, and that a RAP BO complies to best practices. BDEF strict mode is continually enhanced with stricter versions that apply additional checks.

**BDL source code**

The source code for [RAP behavior definitions](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) in [RAP BDL](ABENCDS_BDL_GLOSRY.html).

**BOPF-based RAP business object**

BOPF-based RAP BO for short. A BOPF-based RAP BO is the result of the migration of a [CDS-based BOPF business object](ABENCDS_BOPF_BO_GLOSRY.html) to a RAP business object. Special syntax statements for BOPF-based RAP BOs are `managed by BOPF` and `with BOPF draft`. The [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) of a BOPF-based RAP BO is provided by the [BOPF-managed RAP BO provider](ABENBOPF_MAN_RAP_BO_PROV_GLOSRY.html). BOPF-based RAP BOs that are [draft-enabled](ABENDRAFT_RAP_BO_GLOSRY.html) are handled by the [BOPF-managed RAP draft provider](ABENBOPF_MAN_RAP_DRA_PROV_GLOSRY.html).

**BOPF-managed RAP BO provider**

The part of the [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) that provides the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) for [BOPF-based RAP BOs](ABENRAP_BOPF_BO_GLOSRY.html).

**BOPF-managed RAP draft provider**

The draft provider of [BOPF-based RAP BOs](ABENRAP_BOPF_BO_GLOSRY.html) with BOPF-managed draft. The [draft handling](ABENRAP_DRAFT_HANDLING_GLOSRY.html) is managed by the [Business Object Processing Framework](ABENBO_PROCESSING_FW_GLOSRY.html) (BOPF).

**CCIMP include**

An [include program](ABENINCLUDE_PROGRAM_GLOSRY.html) of a [class pool](ABENCLASS_POOL_GLOSRY.html) that is included behind the [declaration part](ABENDECLARATION_PART_GLOSRY.html) and in front of the [implementation part](ABENIMPLEMENTATION_PART_GLOSRY.html) of the [global class](ABENGLOBAL_CLASS_GLOSRY.html). It can be edited in the Class Builder by navigating to *Local Definitions/Implementations* and in [ADT](ABENADT_GLOSRY.html) by navigating to *Local Types*. The internal name of the include program ends with `CCIMP`. See also [CCDEF include](ABENCCDEF_GLOSRY.html).

**CDS parent entity**

A [CDS entity](ABENCDS_ENTITY_GLOSRY.html) of a [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) that uses a [to-child association](ABENTO_CHILD_ASSOCIATION_GLOSRY.html) to define a [child entity](ABENCHILD_ENTITY_GLOSRY.html). A parent entity can have multiple child entities. Each child entity must define and expose a [to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) to its parent entity.

**CDS root entity**

The top [CDS entity](ABENCDS_ENTITY_GLOSRY.html) of a [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html). The addition `ROOT` must be specified in the definition of a root entity with [CDS DDL](ABENCDS_DDL_GLOSRY.html). A root entity can be part of exactly one [RAP BO](ABENRAP_BO_GLOSRY.html). A CDS root entity is typically a [CDS parent entity](ABENPARENT_ENTITY_GLOSRY.html) and it is typically used as a [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html) in the context of the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html).

**CDS SDL**

The Service Definition Language of [ABAP CDS](ABENABAP_CDS_GLOSRY.html). CDS SDL contains language elements for [CDS service definitions](ABENCDS_SERVICE_DEFINITION_GLOSRY.html) in [`SDL` source code](ABENSDL_SOURCE_CODE_GLOSRY.html).

**CDS service definition extension**

A transportable extension of a [CDS service definition](ABENCDS_SERVICE_DEFINITION_GLOSRY.html) using the [CDS SDL](ABENCDS_SDL_GLOSRY.html) statement [`EXTEND SERVICE`](ABENSRVD_EXTEND_SERVICE.html). A CDS service definition extension can add further entities to an existing CDS service definition without modifying the original service definition.

**CDS virtual element**

An element in the element list of a [projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html) which is not included in the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html). Virtual elements are not persistent on the database, but calculated during runtime, usually in [ABAP classes](ABENCLASS_GLOSRY.html). In order to fill and analyze the virtual elements of a projection view, special frameworks like the [RAP query engine](ABENRAP_QUERY_ENGINE_GLOSRY.html) have to be involved.

**CDS-based BOPF business object**

CDS-based BOPF BO for short. A [business object](ABENBUSINESS_OBJECT_GLOSRY.html) in the context of the [Business Object Processing Framework](ABENBO_PROCESSING_FW_GLOSRY.html) (BOPF). Built with the [ABAP programming model for SAP Fiori](ABENABAP_PM_FOR_FIORI_GLOSRY.html).

**change document object**

A part of the [SAP Change Document Solution](https://help.sap.com/docs/btp/sap-business-technology-platform/change-document-solution?version=Cloud). A change document object is a [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) responsible for managing the creation of documents for the database tables assigned to it. A change document object supports the logging of changes made to specific database tables that represent a business object in the system.

In a [RAP business object](ABENRAP_BO_GLOSRY.html), a change document object is used to log changes to persisted BO data using [RAP change documents](ABENRAP_CHANGE_DOCUMENTS_GLOSRY.html).

**change documents-enabled RAP BO entity**

A [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) that supports change logging with [RAP change documents](ABENRAP_CHANGE_DOCUMENTS_GLOSRY.html). A change documents-enabled RAP BO entity can be either a [change documents master entity](ABENRAP_CHANGE_DOC_MASTER_GLOSRY.html) or a [change documents dependent entity](ABENRAP_CHANGE_DOC_DPNDNT_GLOSRY.html)

**controlled SAP LUW**

An extension of the [SAP LUW](ABENSAP_LUW_GLOSRY.html) concept. The controlled SAP LUW introduces a checking mechanism to detect transactional consistency violations. The controlled SAP LUW is automatically and implicitly supported by newer ABAP concepts such as [RAP](ABENRAP_GLOSRY.html). In non-RAP transactions, the controlled SAP LUW can be used by explicitly setting transactional phases using the static methods of the [`CL_ABAP_TX`](ABAPRAP_CL_ABAP_TX.html) class. In addition, [released APIs](ABENRELEASED_API_GLOSRY.html) can have special classifications (starting with [`IF_ABAP_TX...`](ABAPAPI_CLASSIFICATION.html)) that enable specific transactional contracts that are checked in the [transactional phases](ABENTR_PHASE_GLOSRY.html).

**cross-BO association**

An [association](ABENCDS_ASSOCIATION_GLOSRY.html) that is not part of a [RAP business object's](ABENRAP_BO_GLOSRY.html)\\ [composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html), but has an [association target](ABENASSOCIATION_TARGET_GLOSRY.html) that is part of a foreign business object. The opposite of a cross-BO association is an [intra BO association](ABENCDS_INTRA_BO_ASSOC_GLOSRY.html).

**CRUD operations**

An acronym for Create, Read, Update, and Delete, which are the four basic operations for persistent data storage.

**CUD operations**

An acronym for Create, Update, and Delete operations, which are part of the four basic [CRUD](ABENCRUD_GLOSRY.html) operations for persistent data storage.

**draft-enabled RAP business object**

A [RAP BO](ABENRAP_BO_GLOSRY.html) that supports [RAP draft handling](ABENRAP_DRAFT_HANDLING_GLOSRY.html). A RAP BO is draft-enabled with the RAP BDL syntax addition [`with draft`](ABENBDL_WITH_DRAFT.html) or [`with collaborative draft`](ABENBDL_WITH_COLL_DRAFT.html).

**EML**

*\->*\\ [ABAP Entity Manipulation Language](ABENAEML_GLOSRY.html)

**entity behavior body**

A part of an [entity behavior definition](ABENCDS_ENTITY_BDEF_GLOSRY.html) that is defined within curly brackets. The entity behavior body can include [RAP BO operations](ABENRAP_BO_OPERATION_GLOSRY.html), [validations](ABENRAP_VALIDATION_GLOSRY.html), [determinations](ABENRAP_DETERMINATION_GLOSRY.html), and other elements.

**entity behavior characteristics**

A part of an [entity behavior definition](ABENCDS_ENTITY_BDEF_GLOSRY.html) that stand after `define behavior for` and before the curly brackets. The entity behavior characteristics define additional properties of a behavior definition on entity level.

**entity behavior definition**

A component of a [CDS behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) (BDEF). A BDEF consists of a [header part](ABENCDS_BDEF_HEADER_GLOSRY.html) and at least one entity behavior definition, referring to a [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html). Further entity behavior definitions referring to [child entities](ABENCHILD_ENTITY_GLOSRY.html) are optional.

**foreign key association**

*\->*\\ [source-resolved association](ABENSOURCE_RESOLVED_ASSOC_GLOSRY.html)

**instance RAP BO operation**

A [RAP BO operation](ABENRAP_BO_OPERATION_GLOSRY.html) that is bound to a [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html).

**internal RAP BO operation**

A [RAP BO operation](ABENRAP_BO_OPERATION_GLOSRY.html) that can only be executed by the [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) of the same [BO](ABENRAP_BO_GLOSRY.html).

**intra-BO association**

A [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) that is part of a [RAP business object's](ABENRAP_BO_GLOSRY.html)\\ [composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) and has an [association target](ABENASSOCIATION_TARGET_GLOSRY.html) from the same RAP BO. The opposite of an intra-BO association is a [cross-BO association](ABENCDS_CROSS_BO_ASSOC_GLOSRY.html).

**leaf entity**

A [CDS entity](ABENCDS_ENTITY_GLOSRY.html) of a [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) of a [RAP business object](ABENRAP_BO_GLOSRY.html) that does not have any [child entities](ABENCHILD_ENTITY_GLOSRY.html). The [root entity](ABENROOT_ENTITY_GLOSRY.html) can also be a leaf entity.

**managed RAP BO provider**

A part of the [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) that provides [managed transactional buffers](ABENMANAGED_TRANS_BUFF_GLOSRY.html) and managed behavior of [managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html) based on their [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html).

**managed RAP business object**

Managed RAP BO for short. A provisioning type of the [business object behavior](ABENRAP_BO_BEHAVIOR_GLOSRY.html) of a [RAP BO](ABENRAP_BO_GLOSRY.html). The [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) of a managed RAP BO is provided by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html). The implementation can partly be provided by an [unmanaged RAP BO provider](ABENUNMANAGED_RAP_BO_PROV_GLOSRY.html) in an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).

**managed transactional buffer**

The [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) of a [managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html) that is provided by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html). A managed transactional buffer can be accessed in [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html) by [ABAP EML](ABENABAP_EML_GLOSRY.html) only.

**mandatory RAP BO field**

A [field](ABENRAP_BO_FIELD_GLOSRY.html) in a [RAP BO](ABENRAP_BO_GLOSRY.html) that is defined as mandatory in the [behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). A non-initial value must be passed to this field in every create request and it cannot be initialized in a [modify operation](ABENRAP_MODIFY_OPERATION_GLOSRY.html).

**optimistic concurrency control**

Optimistic [concurrency control](ABENRAP_CONC_CONTROL_GLOSRY.html) enables transactional access to data by multiple users while avoiding inconsistencies by unintentional changes of already modified data. In [RAP](ABENRAP_GLOSRY.html) this is ensured by using an [ETag field](ABENBDL_ETAG.html) in the [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html).

**payload**

In communications technology, *payload* is the term used to describe the data that is transported in a data packet during communication between two partners that does not contain any control or protocol information. Payload data includes voice, text, characters, images, and sounds.

In the context of [RAP business events](ABENRAP_ENTITY_EVENT_GLOSRY.html), the payload is the data that is passed from the sender to the event consumers. The payload of a RAP business event is defined using an [output parameter](ABENOUTPUT_PARAMETER_GLOSRY.html).

**pessimistic concurrency control**

Pessimistic [concurrency control](ABENRAP_CONC_CONTROL_GLOSRY.html) prevents simultaneous modification access to data on the database by more than one user. In [RAP](ABENRAP_GLOSRY.html) this is ensured by the [RAP locking mechanism](ABENRAP_LOCKING_GLOSRY.html).

**prefix extension**

A prefix that is used in the context of [RAP BO extensions](ABENRAP_BO_EXTENSION_GLOSRY.html) to refer to an element or [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) from a RAP BO extension. Examples: extension behavior, extension node, extension field.

**RAP**

*\->*\\ [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html)

**RAP abstract behavior definition**

RAP abstract BDEF or abstract BDEF for short. A RAP abstract behavior definition is a [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) of [implementation type](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html) abstract. It is based on a [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) and it mainly serves as typing mechanism for deep action or function parameters.

**RAP action**

A [RAP BO non-standard operation](ABENRAP_NSTANDARD_OPERATION_GLOSRY.html) that modifies the state of a [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html).

There are different types or RAP actions:

**RAP active instance**

A [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html) in a [draft-enabled RAP business object](ABENDRAFT_RAP_BO_GLOSRY.html) for which a commit triggers the saving to the [persistent table](ABENRAP_PERSISTENT_TABLE_GLOSRY.html). The [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) of such an instance has the [draft indicator](ABENRAP_DRAFT_INDICATOR_GLOSRY.html) set to *false*. An active instance can be produced by a [create operation](ABENRAP_CREATE_OPERATION_GLOSRY.html) or by the [draft action](ABENRAP_BO_DRAFT_ACTION_GLOSRY.html)\\ `Activate` in draft scenarios.

**RAP additional save**

The save logic which can be added to [managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html) to enhance the default [save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html). It can be applied to the complete [BO](ABENRAP_BO_GLOSRY.html) by defining it in the [behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html), or for an individual entity by defining it in the [behavior entity characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html). It is implemented in the redefined [saver method](ABENABP_SAVER_METHOD_GLOSRY.html)\\ `save_modified`.

**RAP authorization context**

A container for [authorization objects](ABENAUTHORIZATION_OBJECT_GLOSRY.html) that lists one or more authorization objects. There are different types of authorization contexts:

Optional component of a [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html).

**RAP authorization context for disable**

A [RAP authorization context](ABENCDS_AUTH_CON_GLOSRY.html) that lists [authorization objects](ABENAUTHORIZATION_OBJECT_GLOSRY.html) which can be skipped if the authorization context for disable in question is activated.

**RAP authorization control**

An access restriction that protects a [RAP BO](ABENRAP_BO_GLOSRY.html) against unauthorized access to data. It limits access to data or the permission to perform [operations](ABENRAP_BO_OPERATION_GLOSRY.html). Authorization control can be global or instance or both.

**RAP authorization dependent entity**

A [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) that uses the [authorization control](ABENRAP_AUTH_CONTROL_GLOSRY.html) that is defined on its [authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html). It delegates authorization requests to the implementation of the [authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html). 

**RAP authorization master entity**

A [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) that has its own authorization implementation. The implementation is used when requesting access to the authorization master entity or to any of its [authorization dependent entities](ABENRAP_AUTH_DEP_ENT_GLOSRY.html).

**RAP base BO**

A [RAP business object](ABENRAP_BO_GLOSRY.html) that is used as a basis of a [RAP projection BO](ABENRAP_PROJECTION_BO_GLOSRY.html). It can be of [BDEF implementation type](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html)\\ [managed](ABENMANAGED_RAP_BO_GLOSRY.html) or [unmanaged](ABENUNMANAGED_RAP_BO_GLOSRY.html).

**RAP BDL**

Behavior Definition Language in ABAP RAP. The RAP BDL contains language elements for [RAP behavior definitions](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) in [BDL source code](ABENBDL_SOURCE_CODE_GLOSRY.html).

**RAP behavior**

The part of a [RAP BO](ABENRAP_BO_GLOSRY.html) that describes the abilities of the RAP BO in question. It is defined in a [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) and implemented in the [RAP behavior implementation](ABENBEHAVIOR_IMPLEMENT_GLOSRY.html).

**RAP behavior definition**

RAP BDEF or BDEF for short. A RAP behavior definition describes a [RAP business object (RAP BO)](ABENRAP_BO_GLOSRY.html) by defining its behavior for all its [BO entities](ABENRAP_BO_ENTITY_GLOSRY.html). A BDEF is written in [BDL source code](ABENBDL_SOURCE_CODE_GLOSRY.html) using language elements in [RAP BDL](ABENCDS_BDL_GLOSRY.html).

**RAP behavior definition header**

BDEF header short. A BDEF header is the part of a [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) that defines the [implementation type](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html) and some global attributes that apply to the complete [business object](ABENBUSINESS_OBJECT_GLOSRY.html). It is the topmost part and includes all statements that are listed before the [entity behavior definition](ABENCDS_ENTITY_BDEF_GLOSRY.html), `define behavior for`.

**RAP Behavior Definition Language**

*\->*\\ [RAP BDL](ABENCDS_BDL_GLOSRY.html)

**RAP behavior extension body**

A part of an [entity behavior extension](ABENRAP_BEHAVIOR_EXTENSION_GLOSRY.html) that is defined within curly brackets after the statement [`extend behavior for`](ABENBDL_EXTEND_BEH.html). The entity behavior extension body can define [new extension elements](ABENBDL_NEW_ELEM_EXT.html), such as extension determinations, extension validations, and extension actions. It may also [extend existing elements](ABENBDL_EXT_ELEM_EXT.html), such as RAP type mapping, and determine actions.

**RAP behavior implementation**

A RAP behavior implementation implements the [unmanaged RAP BO provider](ABENUNMANAGED_RAP_BO_PROV_GLOSRY.html). The implementation takes place in local classes of an [ABAP behavior pool (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html).

**RAP BO augmentation**

A [RAP BO operation](ABENRAP_BO_OPERATION_GLOSRY.html) addition that must be implemented by an [ABP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html). Augmentation is defined in the [projection behavior definition](ABENCDS_PROJ_BDEF_GLOSRY.html) for [RAP standard operations](ABENRAP_STANDARD_OPERATION_GLOSRY.html).

The implementation is called when a [modify request](ABENRAP_MODIFY_OPERATION_GLOSRY.html) reaches the [business object projection](ABENRAP_PROJECTION_BO_GLOSRY.html) to add data to the request before it is passed to the corresponding handler of the [projected business object](ABENRAP_PROJECTED_BO_GLOSRY.html).

**RAP BO consumer**

A piece of software that consumes the implementation of a [RAP BO](ABENRAP_BO_GLOSRY.html). A RAP BO consumer is either the [RAP transactional engine](ABENRAP_TRANSAC_ENGINE_GLOSRY.html) that handles requests from outside the [AS ABAP](ABENAS_ABAP_GLOSRY.html) or an [ABAP program](ABENABAP_PROGRAM_GLOSRY.html) using [ABAP EML](ABENABAP_EML_GLOSRY.html).

**RAP BO contract**

A set of rules for the [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) and [consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) implementation to ensure consistency and reliability.

**RAP BO determine action**

A [RAP action](ABENRAP_ACTION_GLOSRY.html) that executes [determinations](ABENRAP_DETERMINATION_GLOSRY.html) and [validations](ABENRAP_VALIDATION_GLOSRY.html) on request. The implementation is provided by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html).

**RAP BO draft action**

A [RAP action](ABENRAP_ACTION_GLOSRY.html) that is invoked during the lifecycle of a [draft-enabled RAP BO](ABENDRAFT_RAP_BO_GLOSRY.html) to manage the state of [draft](ABENRAP_DRAFT_INSTANCE_GLOSRY.html) and [active instances](ABENRAP_ACTIVE_INSTANCE_GLOSRY.html). The implementation is provided by the [RAP managed draft provider](ABENRAP_MAN_DRAFT_PROVIDER_GLOSRY.html).

**RAP BO entity**

Also RAP BO node. A [CDS entity](ABENCDS_ENTITY_GLOSRY.html) for which behavior is defined in a [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) of a [RAP BO](ABENRAP_BO_GLOSRY.html).

**RAP BO entity instance**

Also RAP BO node instance. A specific data set of a [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) that is identified by a key. During a [RAP transaction](ABENRAP_LUW_GLOSRY.html), a RAP BO entity instance is processed in the [RAP transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) during the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html). Then it is saved to the database table during the [save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html).

**RAP BO extension**

A [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that extends a [RAP BO](ABENRAP_BO_GLOSRY.html). The following types of RAP BO extensions exist:

**RAP BO field**

An element of a [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html).

**RAP BO instance**

A specific data set of a [BO composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html). A BO instance at least consists of one [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html) instance. Furthermore, it includes all [entity instances](ABENRAP_BO_ENTITY_INST_GLOSRY.html) with a compositional relationship to the root entity instance.

**RAP BO instance key component group**

A [component group](ABENCOMPONENT_GROUP_GLOSRY.html) in [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html) that contains primary key fields of a [RAP BO instance](ABENRAP_BO_INSTANCE_GLOSRY.html): [`%key`](ABAPDERIVED_TYPES_KEY.html), [`%tky`](ABAPDERIVED_TYPES_TKY.html), [`%pky`](ABAPDERIVED_TYPES_PKY.html).

**RAP BO interface**

A [RAP business object](ABENRAP_BO_GLOSRY.html) that serves as interface for stable consumption. A RAP BO interface consists of a [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html) and a [RAP interface behavior definition](ABENCDS_INTERFACE_BDEF_GLOSRY.html). A RAP BO interface does not have a runtime handler and cannot specify an implementation class for [ABAP behavior implementation](ABENBEHAVIOR_IMPLEMENT_GLOSRY.html). A RAP BO interface can only project behavior from the underlying RAP BO.

**RAP BO interface entity**

A component of a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html). It describes the part of the [RAP data model](ABENRAP_DATA_MODEL_GLOSRY.html) that is included in the interface. A RAP BO interface entity is represented by a [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html) with the provider contract [`TRANSACTIONAL_INTERFACE`](ABENCDS_PV_PROVIDER_CONTRACT.html).

**RAP BO non-standard operation**

A [RAP BO operation](ABENRAP_BO_OPERATION_GLOSRY.html) that does not provide canonical transactional behavior for a [RAP BO](ABENRAP_BO_GLOSRY.html), for example [actions](ABENRAP_ACTION_GLOSRY.html) and [functions](ABENRAP_FUNCTION_GLOSRY.html). Most non-standard operations must be implemented in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).

**RAP BO operation**

An operation of a [RAP BO](ABENRAP_BO_GLOSRY.html). RAP BO operations are [CRUD](ABENCRUD_GLOSRY.html) operations, [non-standard operations](ABENRAP_NSTANDARD_OPERATION_GLOSRY.html), the [lock operation](ABENLOCK_OPERATION_GLOSRY.html), and [operations for associations](ABENRAP_OPERATION_ASSOC_GLOSRY.html). The implementation of a RAP BO operation implements the [RAP BO behavior](ABENRAP_BO_BEHAVIOR_GLOSRY.html) by accessing the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html). A RAP BO can be accessed by using RAP operations. The parameters of a RAP BO method are mainly typed with special [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html).

**RAP BO precheck**

A [RAP BO operation](ABENRAP_BO_OPERATION_GLOSRY.html) addition that must be implemented by a [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html). A precheck is defined for operations in the [behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) of a base business object or in the [projection business object](ABENRAP_PROJECTION_BO_GLOSRY.html).

The implementation method is called before a modify request is executed on the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) to prevent unwanted changes from reaching the transactional buffer.

**RAP BO provider**

A piece of software that provides the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) and the implementation of a [RAP BO](ABENRAP_BO_GLOSRY.html) based on its [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html).

**RAP BO root entity**

A [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) that defines the behavior of a [CDS root entity](ABENROOT_ENTITY_GLOSRY.html). The RAP BO root entity is the top-most entity of the hierarchical structure of a [RAP business object](ABENRAP_BO_GLOSRY.html) and it represents the RAP business object.

**RAP BO service projection**

A RAP BO projection for a [RAP business service](ABENBUSINESS_SERVICE_GLOSRY.html). A service projection consists of a [CDS transactional query](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html) and a [RAP projection behavior definition](ABENCDS_PROJ_BDEF_GLOSRY.html).

**RAP BO service projection entity**

A component of a [RAP BO service projection](ABENRAP_BO_SERVICE_PROJ_GLOSRY.html). It describes the [RAP data model](ABENRAP_DATA_MODEL_GLOSRY.html) that is included in the service projection. The RAP BO service projection entity is represented by a [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html) with the provider contract [`TRANSACTIONAL_QUERY`](ABENCDS_PV_PROVIDER_CONTRACT.html).

**RAP BO standard operation**

A [RAP BO operation](ABENRAP_BO_OPERATION_GLOSRY.html) that provides canonical transactional behavior for a [RAP BO](ABENRAP_BO_GLOSRY.html). In a [managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html), standard operations can be provided by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html).

[Create](ABENRAP_CREATE_OPERATION_GLOSRY.html), [read](ABENRAP_READ_OPERATION_GLOSRY.html), [update](ABENRAP_UPDATE_OPERATION_GLOSRY.html), [delete](ABENRAP_DELETE_OPERATION_GLOSRY.html) ([CRUD](ABENCRUD_GLOSRY.html)) and [lock](ABENLOCK_OPERATION_GLOSRY.html) are standard operations. [Actions](ABENRAP_ACTION_GLOSRY.html) and [functions](ABENRAP_FUNCTION_GLOSRY.html), in contrast, are [non-standard operations](ABENRAP_NSTANDARD_OPERATION_GLOSRY.html). That means they are application-specific and user-implemented.

**RAP buffer data**

Data on the [RAP transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) that is either in an active or a draft state.

**RAP business event**

A RAP business event is a business event that usually represents a piece of information about the outcome of a [CUD operation](ABENCUD_GLOSRY.html) in the context of a [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html). For example, the creation of a [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html) raises a RAP business event. Then, an interested party that has subscribed to this event can consume and process it. The information that is passed (i. e. the [payload](ABENPAYLOAD_GLOSRY.html) of the event) always includes the instance key and, if need be, further information like the action (CUD).

[RAP derived events](ABENRAP_DERIVED_EVENT_GLOSRY.html) and [RAP business events for side effects](ABENRAP_SIDE_EFFCT_EVENT_GLOSRY.html) are special types of RAP business events.

**RAP business event for side effects**

A [RAP business event](ABENRAP_ENTITY_EVENT_GLOSRY.html) that is defined with the syntax addition [`for side effects`](ABENBDL_EVENT_SIDE_EFFECT.html). A RAP business event for side effects is defined to be used exclusively as a trigger for an [event-driven side effect](ABENRAP_EVENT_SIDEEF_GLOSRY.html).

**RAP business object**

RAP BO for short. A [business object](ABENBUSINESS_OBJECT_GLOSRY.html) in the context of [ABAP RAP](ABENABAP_RAP_GLOSRY.html). A RAP BO is mainly described by a [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) that defines the [RAP business object behavior](ABENRAP_BO_BEHAVIOR_GLOSRY.html) for a set of special hierarchical [CDS entities](ABENCDS_ENTITY_GLOSRY.html) in form of RAP behavior operations and behavior characteristics. A RAP BO has [RAP BO operations](ABENRAP_BO_OPERATION_GLOSRY.html) to handle its data that is available in a [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html). There are two kinds of RAP BOs:

A RAP BO can be exposed as a [RAP business service](ABENBUSINESS_SERVICE_GLOSRY.html) for access from outside [AS ABAP](ABENAS_ABAP_GLOSRY.html) and is consumed by the [RAP transactional engine](ABENRAP_TRANSAC_ENGINE_GLOSRY.html) then. For access to RAP BOs from inside AS ABAP, ABAP contains a subset called [ABAP Entity Manipulation Language (EML)](ABENAEML_GLOSRY.html).

**RAP business object behavior**

The transactional behavior of a [RAP business object](ABENRAP_BO_GLOSRY.html) that is defined in a [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html).

It includes [entity behavior characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html), [RAP BO operations](ABENRAP_BO_OPERATION_GLOSRY.html), [validations](ABENRAP_VALIDATION_GLOSRY.html), and [determinations](ABENRAP_DETERMINATION_GLOSRY.html) all of which are either provided by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html) or implemented in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) ([unmanaged RAP BO provider](ABENUNMANAGED_RAP_BO_PROV_GLOSRY.html)).

**RAP business service**

RAP BS for short. A RAP business service is a [RESTful](ABENRESTFUL_GLOSRY.html)\\ [business service](ABENBS_GLOSRY.html) for the consumption of [RAP business objects](ABENRAP_BO_GLOSRY.html). A RAP business service is published with an OData protocol.

**RAP change documents**

An optional part of an [entity behavior definition](ABENCDS_ENTITY_BDEF_GLOSRY.html) that enables change logging of persisted RAP BO data for a [change documents-enabled RAP BO entity](ABENRAP_CHANGE_DOC_ENABLED_GLOSRY.html). When enabled, changes are written to a [change document object](ABENCHANGE_DOCUMENT_OBJ_GLOSRY.html). RAP change documents are a [RAP reuse service](ABENRAP_REUSE_SERVICE_GLOSRY.html).

**RAP change documents dependent entity**

A [change documents-enabled RAP BO entity](ABENRAP_CHANGE_DOC_ENABLED_GLOSRY.html) that uses the [change document object](ABENCHANGE_DOCUMENT_OBJ_GLOSRY.html) that is defined in its [change documents master entity](ABENRAP_CHANGE_DOC_MASTER_GLOSRY.html) to log changes to persisted data.

**RAP change documents master entity**

A [change documents-enabled RAP BO entity](ABENRAP_CHANGE_DOC_ENABLED_GLOSRY.html) that has its own [change document object](ABENCHANGE_DOCUMENT_OBJ_GLOSRY.html) for logging changes to persisted data.

**RAP cleanup phase**

The final phase of the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html) in which the [`cleanup`](ABENSAVER_METHOD_CLEANUP.html)\\ [RAP saver method](ABENABP_SAVER_METHOD_GLOSRY.html) is called.

**RAP collaborative draft**

A type of [RAP draft handling](ABENRAP_DRAFT_HANDLING_GLOSRY.html) that allows multiple users to work concurrently on the same [draft instance](ABENRAP_DRAFT_INSTANCE_GLOSRY.html). All authorized users that have been invited with the [draft action](ABENBDL_DRAFT_ACTION.html)\\ `Share` can make changes, view updates in real time, and work together on the draft without locking each other out. The creator of the draft instance and all other authorized users are allowed to modify, activate, or discard the draft instance.

**RAP concurrency control**

A concept in [RAP](ABENRAP_GLOSRY.html) that ensures correct results for concurrent operations.

See also:

**RAP consumer hint**

A RAP BO field or behavior characteristic that is propagated to the [consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) via the chosen protocol. It can be used to optimize usability of the [business service](ABENBUSINESS_SERVICE_GLOSRY.html), for example if fields are marked as [*mandatory*](ABENMANDATORY_RAP_BO_FIELD_GLOSRY.html) on a UI.

**RAP content identifier**

A [RAP input identifier](ABENRAP_INPUT_IDENTIFIER_GLOSRY.html) that uniquely identifies an operation on one [instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html). The content identifier is reflected in the [derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) component `%cid`. It identifies an instance during the consumption of [static operations](ABENRAP_STATIC_OPERATION_GLOSRY.html) before the instance is identified by an [instance identifier](ABENRAP_INST_IDENTIFIER_GLOSRY.html).

**RAP copy action**

A [RAP hierarchy action](ABENRAP_HIERARCHY_ACTION_GLOSRY.html) that determines how a hierarchy node can be duplicated in an editable [treeview](ABENRAP_TREEVIEW_GLOSRY.html) scenario. It is useful for creating new hierarchy nodes based on an existing one in an editable treeview scenario. Copy actions are [factory actions](ABENRAP_FACTORY_ACTION_GLOSRY.html), i.e. they offer [`%cid`](ABAPDERIVED_TYPES_CID.html) handling for the result instance. Copy actions are user-implemented.

**RAP create operation**

A [RAP modify operation](ABENRAP_MODIFY_OPERATION_GLOSRY.html) that creates new [instances](ABENRAP_BO_ENTITY_INST_GLOSRY.html) of a [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html).

**RAP create-by-association operation**

A [RAP modify operation](ABENRAP_MODIFY_OPERATION_GLOSRY.html) that creates new [instances](ABENRAP_BO_ENTITY_INST_GLOSRY.html) of an associated [business object entity](ABENRAP_BO_ENTITY_GLOSRY.html).

**RAP data model**

A part of a [RAP BO](ABENRAP_BO_GLOSRY.html) that defines the data that is used in the RAP BO. It consists of [RAP BO entities](ABENRAP_BO_ENTITY_GLOSRY.html) that are related by a [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html).

**RAP data model extension**

An extension of the data model of a [RAP BO](ABENRAP_BO_GLOSRY.html). May consist of [DDIC extensions](ABENDDIC_EXTENSION_GLOSRY.html) and [CDS entity extensions](ABENCDS_ENTITY_EXTEND_GLOSRY.html).

**RAP default values function**

A [RAP BO operation addition](ABENBDL_OPERATIONS_ADDITIONS.html) that defaults field values or input parameters for [RAP BO operations](ABENRAP_BO_OPERATION_GLOSRY.html) on the user interface. A RAP default values function must be implemented by an [ABP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html).

**RAP delete operation**

A [RAP modify operation](ABENRAP_MODIFY_OPERATION_GLOSRY.html) that deletes [RAP BO entity instances](ABENRAP_BO_ENTITY_INST_GLOSRY.html).

**RAP derived event**

A RAP derived event redefines the [payload](ABENPAYLOAD_GLOSRY.html) of an existing [RAP business event](ABENRAP_ENTITY_EVENT_GLOSRY.html). A RAP derived event is defined with reference to an already implemented event and allows the definition of a payload that deviates from the payload of the referenced event. A derived event is automatically raised when the referenced event is raised. No implementation in an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is required.

**RAP determination**

An optional part of the [RAP BO behavior](ABENRAP_BO_BEHAVIOR_GLOSRY.html) that modifies [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) based on trigger conditions. 

**RAP draft handling**

A concept in RAP that allows the content of the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) to be stored in intermediate storages ([draft tables](ABENDRAFT_TABLE_GLOSRY.html)) in order to allow transactions to expand over different [ABAP sessions](ABENABAP_SESSION_GLOSRY.html). Introduced by the keyword [`with draft`](ABENBDL_WITH_DRAFT.html) or [`with collaborative draft`](ABENBDL_WITH_COLL_DRAFT.html) in the [behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html) of a [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html).

**RAP draft indicator**

A [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) component that is used to indicate whether a [RAP BO instance](ABENRAP_BO_INSTANCE_GLOSRY.html) is a [draft instance](ABENRAP_DRAFT_INSTANCE_GLOSRY.html) or an [active instance](ABENRAP_ACTIVE_INSTANCE_GLOSRY.html). It is contained in the component group [`%tky`](ABAPDERIVED_TYPES_TKY.html) as [`%is_draft`](ABAPDERIVED_TYPES_IS_DRAFT.html).

**RAP draft instance**

A [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html) in a [draft-enabled RAP business object](ABENDRAFT_RAP_BO_GLOSRY.html) for which a commit triggers the saving to the [RAP draft table](ABENDRAFT_TABLE_GLOSRY.html). The [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) of such an instance has the [draft indicator](ABENRAP_DRAFT_INDICATOR_GLOSRY.html) set to *true*. A draft instance can be produced by a [create operation](ABENRAP_CREATE_OPERATION_GLOSRY.html) ( [new-draft instances](ABENRAP_NEW_DRAFT_INST_GLOSRY.html)) or by the [draft action](ABENRAP_BO_DRAFT_ACTION_GLOSRY.html)\\ `Edit` ([edit-draft instances](ABENRAP_EDIT_DRAFT_INST_GLOSRY.html)) in draft scenarios. There are [exclusive draft](ABENRAP_EXCLUSIVE_DRAFT_GLOSRY.html) instances, where only a single user is allowed to edit a draft, and [collaborative draft](ABENRAP_COLLABORATIVE_DRAFT_GLOSRY.html) instances, where multiple users can work concurrently on the same draft.

**RAP draft query view**

A [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) or [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) that selects from the [RAP draft table](ABENDRAFT_TABLE_GLOSRY.html) and contains all fields from the draft table including the administrative fields. It can be specified in a [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) using the syntax addition  [query](ABENBDL_DRAFT_QUERY_VIEW.html). A draft query view allows developers to define read access limitations for the draft data of a [draft-enabled RAP business object](ABENDRAFT_RAP_BO_GLOSRY.html) using the CDS data control language [CDS DCL](ABENCDS_DCL_GLOSRY.html).

**RAP draft table**

A [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) that is generated for a [draft-enabled RAP business object](ABENDRAFT_RAP_BO_GLOSRY.html). It contains draft administrative data that is used for [RAP draft handling](ABENRAP_DRAFT_HANDLING_GLOSRY.html). A draft table should be accessed by the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html) only.

**RAP dynamic field characteristic**

A [field characteristic](ABENRAP_FIELD_CHAR_GLOSRY.html) that defines usage restrictions for a [RAP BO field](ABENRAP_BO_FIELD_GLOSRY.html) depending on the state of a [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html). For example, a field can be dynamically defined as [read-only](ABENREAD_ONLY_RAP_BO_FIELD_GLOSRY.html), [mandatory](ABENMANDATORY_RAP_BO_FIELD_GLOSRY.html), or without restrictions.

**RAP early numbering**

A [numbering](ABENRAP_NUMBERING_GLOSRY.html) concept in which key values are assigned during the [interaction phase](ABENRAP_INT_PHASE_GLOSRY.html).

**RAP early save phase**

The early phase of the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html) that covers the [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html)\\ [`finalize`](ABENSAVER_FINALIZE.html), [`check_before_save`](ABENSAVER_CHECK_BEFORE_SAVE.html) and [`cleanup_finalize`](ABAPSAVER_CLASS_CLEANUP_FINALIZE.html) methods.

**RAP edit draft instance**

A [draft instance](ABENRAP_DRAFT_INSTANCE_GLOSRY.html) that is produced by the [draft action](ABENRAP_BO_DRAFT_ACTION_GLOSRY.html)\\ `Edit`. For an edit draft instance, there exists a corresponding active instance in parallel.

See also: [RAP new draft instance](ABENRAP_NEW_DRAFT_INST_GLOSRY.html)

**RAP entity behavior extension**

Short behavior extension. A component of a [BDEF extension](ABENRAP_EXTENSION_GLOSRY.html) that extends the behavior of an existing RAP BO entity. An entity behavior extension is defined using [`extend behavior for EntityName`](ABENBDL_EXTEND_BEH.html).

**RAP entity projection extension**

Projection extension for short. A component of a [BDEF projection extension](ABENRAP_PROJEC_BDEF_EXT_GLOSRY.html) that extends the behavior of an existing RAP BO entity in a [RAP projection behavior definition](ABENCDS_PROJ_BDEF_GLOSRY.html). An entity projection extension is defined using [`extend behavior for EntityName`](ABENBDL_EXTEND_BEH_PROJ.html).

**RAP ETag**

ETag is short for entity tag. A RAP ETag field is a field of a [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) that is used to describe the state of the instance as an entity tag for [optimistic concurrency control](ABENOPTIMISTIC_CONC_CONTROL_GLOSRY.html). It is updated on every change of the [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html).

**RAP ETag dependent entity**

A [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) that uses the [ETag](ABENRAP_ETAG_GLOSRY.html) field of another entity for [optimistic concurrency control](ABENOPTIMISTIC_CONC_CONTROL_GLOSRY.html). Defined using the keyword [`etag dependent by _Assoc`](ABENBDL_ETAG.html).

**RAP ETag master entity**

A [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) that has its own [ETag](ABENRAP_ETAG_GLOSRY.html) field defined using the keyword [`etag master MasterField`](ABENBDL_ETAG.html).

**RAP event handler class**

The [class pool](ABENCLASS_POOL_GLOSRY.html) that is used to implement [RAP event handler methods](ABENRAP_EVENT_HANDLER_METH_GLOSRY.html).

**RAP event handler method**

A method that is declared and implemented in the [CCIMP include](ABENCCIMP_GLOSRY.html) of a [RAP event handler class](ABENRAP_EVENT_HANDLER_CLASS_GLOSRY.html). It is used to process logic that is implemented in this method when [RAP business events](ABENRAP_ENTITY_EVENT_GLOSRY.html) are raised and consumed locally in the system in which they are raised.

RAP event handler methods are called asynchronously.

**RAP event-driven side effect**

A [RAP side effect](ABENRAP_SIDE_EFFECTS_GLOSRY.html) that is triggered by a [business event for side effects](ABENRAP_SIDE_EFFCT_EVENT_GLOSRY.html). The business event in question is defined to be used exclusively for a side effect with the syntax [`event MyEvent for side effects`](ABENBDL_EVENT.html).

**RAP exclusive draft**

A type of [RAP draft handling](ABENRAP_DRAFT_HANDLING_GLOSRY.html) where [draft instances](ABENRAP_DRAFT_INSTANCE_GLOSRY.html) are exclusively locked or reserved for a single user. When a user creates a draft instance, they have exclusive modify access to it, preventing other users from editing the same draft concurrently. The creator of the draft instance is the sole draft instance owner. Only the draft instance owner is allowed to modify, activate, or discard the draft instance.

**RAP extensibility**

Extending a [RAP business object](ABENRAP_BO_GLOSRY.html) with the respective [RAP BO extensions](ABENRAP_BO_EXTENSION_GLOSRY.html). Before a RAP BO can be extended, extensions must be technically enabled by means of [RAP extensibility enablement](ABENRAP_EXT_ENABLEMENT_GLOSRY.html). Extensibility use cases include field extensibility, behavior extensibility, and node extensibility.

RAP extensibility is used as part of [developer extensibility](ABENDEV_EXTENSIBILITY_GLOSRY.html), available in on-premise and cloud environments. In the context of [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html), RAP extensibility relies on the [C0 (extend) contract](ABENC0_CONTRACT_GLOSRY.html) to ensure stability at the dedicated extension points.

**RAP extensibility enablement**

Preparing a [RAP business object](ABENRAP_BO_GLOSRY.html) to fulfill all technical requirements for [RAP extensibility](ABENRAP_EXTENSIBILITY_GLOSRY.html). This may include preparing the RAP data model for extensibility by means of extensibility annotations and preparing the [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) for extensibility by defining dedicated extension points.

**RAP extension entity behavior**

Node extension for short. A component of a [BDEF extension](ABENRAP_EXTENSION_GLOSRY.html) that defines the behavior for an extension node. Extension entity behavior is defined using [`define behavior for`](ABENBDL_DEFINE_BEH_EXTEND.html). The extension node must be added to the current RAP BO's data model via [RAP data model extensions](ABENRAP_DATA_MODEL_EXT_GLOSRY.html).

**RAP extension layering**

It is possible to extend a [BDEF extension](ABENRAP_EXTENSION_GLOSRY.html) with further BDEF extensions. This is referred to as extension layering. Before a BDEF extension can be extended, extensions must be technically enabled by means of [RAP extensibility enablement](ABENRAP_EXT_ENABLEMENT_GLOSRY.html). Technically, a BDEF extension that extends another extension is a regular extension and the rules for BDEF extensions apply.

**RAP external numbering**

A [numbering concept](ABENRAP_NUMBERING_GLOSRY.html) in which key values are provided by the [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html).

**RAP factory action**

A [RAP action](ABENRAP_ACTION_GLOSRY.html) that creates new [RAP BO entity instances](ABENRAP_BO_ENTITY_INST_GLOSRY.html) where you can add functionality to the create process, for example, retrieving BO-specific default values. In contrast to a [non-factory action](ABENRAP_NON_FAC_ACTION_GLOSRY.html), the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) of a factory action contains a [`%cid`](ABAPDERIVED_TYPES_CID.html) component.

**RAP feature control**

An access restriction that enables or disables [RAP BO operations](ABENRAP_BO_OPERATION_GLOSRY.html) or defines field attributes dynamically for [RAP BO consumers](ABENRAP_BO_CONSUMER_GLOSRY.html). Feature control can be static or dynamic, [instance-based](ABENRAP_INS_FEATURE_CONTROL_GLOSRY.html) or [global](ABENRAP_GLO_FEATURE_CONTROL_GLOSRY.html).

**RAP field characteristic**

A property of a [RAP BO field](ABENRAP_BO_FIELD_GLOSRY.html) that restricts access to the field in question. Field characteristics can be [static](ABENRAP_STATIC_FIELD_CHAR_GLOSRY.html) or [dynamic](ABENRAP_DYN_FIELD_CHAR_GLOSRY.html).

**RAP foreign entity**

A [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) which is not part of the [BO composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) for which it is defined. Defining a foreign entity in the [behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) enables cross-BO message mapping between the two [BOs](ABENRAP_BO_GLOSRY.html).

**RAP framework**

The framework for the [ABAP RESTful Application Programming Model (RAP)](ABENRAP_GLOSRY.html) on [AS ABAP](ABENAS_ABAP_GLOSRY.html). It consists of the [RAP runtime engine](ABENRAP_RUNTIME_ENGINE_GLOSRY.html) and the RAP development environment.

**RAP full authorization context**

A [RAP authorization context](ABENCDS_AUTH_CON_GLOSRY.html) that serves as a container for [authorization objects](ABENAUTHORIZATION_OBJECT_GLOSRY.html). Specified using the syntax [`define own authorization context`](ABENBDL_DEF_OWN_AUTH_CONTEXT.html). A full authorization context documents the authorization objects used in the implementation of the RAP BO in question.

**RAP function**

A [non-standard RAP BO operation](ABENRAP_NSTANDARD_OPERATION_GLOSRY.html) that returns information without modifying [RAP BO entity instances](ABENRAP_BO_ENTITY_INST_GLOSRY.html).

**RAP global feature control**

A kind of [feature control](ABENRAP_FEATURE_CONTROL_GLOSRY.html) that defines access restrictions independently of the state of a [BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html). Global feature control can be defined for [operations](ABENRAP_BO_OPERATION_GLOSRY.html) only.

**RAP handler class**

A [local class](ABENLOCAL_CLASS_GLOSRY.html) in a [CCIMP include](ABENCCIMP_GLOSRY.html) of an [ABAP behavior pool (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html) for implementing [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) that is executed during the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html).

**RAP handler method**

A method in a [RAP handler class](ABENABP_HANDLER_CLASS_GLOSRY.html) of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) that is called during the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html). The names of handler methods can be freely chosen except for [draft actions](ABENRAP_BO_DRAFT_ACTION_GLOSRY.html) and [augmentation](ABENRAP_BO_AUGMENTATION_GLOSRY.html).

**RAP hierarchy action**

A [RAP action](ABENRAP_ACTION_GLOSRY.html) that can be used in the context of editable [treeviews](ABENRAP_TREEVIEW_GLOSRY.html) for performing operations on hierarchical data.

The following types of RAP hierarchy actions are available:

**RAP input derived type**

A [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) that is used for importing parameters in methods in the [ABP](ABENBEHAVIOR_POOL_GLOSRY.html).

**RAP input identifier**

A [structure](ABENSTRUCTURE_GLOSRY.html) that is imported into implementation methods in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). It consists of all components that are relevant to identify one [instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html) for the current method.

An input identifier can either be the [instance identifier](ABENRAP_INST_IDENTIFIER_GLOSRY.html) or the [content identifier](ABENRAP_CONT_IDENTIFIER_GLOSRY.html), or both.

**RAP instance feature control**

A kind of [feature control](ABENRAP_FEATURE_CONTROL_GLOSRY.html) that defines access restrictions for a [field](ABENRAP_BO_FIELD_GLOSRY.html) or an [operation](ABENRAP_BO_OPERATION_GLOSRY.html). It can be static or dynamic.

**RAP instance identifier**

A [structure](ABENSTRUCTURE_GLOSRY.html) that uniquely identifies a [RAP BO instance](ABENRAP_BO_INSTANCE_GLOSRY.html). It consists of the primary key fields and all relevant [derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) components, for example `%is_draft`, `%pid`. The instance identifier is represented by the component groups `%tky` or `%pky`.

See also: [RAP input identifier](ABENRAP_INPUT_IDENTIFIER_GLOSRY.html).

**RAP instance transition message**

A [transition message](ABENRAP_TRANS_MES_GLOSRY.html) that refers to an [instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html) of a business object entity and contains a key reference.

**RAP interaction phase**

A part of the [RAP BO](ABENRAP_BO_GLOSRY.html) runtime during which data is modified on the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html).

**RAP interface behavior definition**

Interface BDEF for short. A component of a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html). It defines the behavior that is included in the interface. A RAP BO interface behavior definition is represented by a [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) with the [BDEF implementation type](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html)\\ `interface`.

**RAP internal numbering**

A [numbering concept](ABENRAP_NUMBERING_GLOSRY.html) in which key values are assigned by the [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html).

**RAP inverse function**

A [RAP non-standard operation for associations](ABENRAP_STANDARD_OP_ASSOC_GLOSRY.html) that receives the values of the [foreign key fields](ABENFOREIGN_KEY_FIELD_GLOSRY.html) of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) instances as input and provides the corresponding [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) instances as result. It can be used, for example, to enable [read-by-association operations](ABENRAP_RBA_OPERATION_GLOSRY.html) in a [cross-BO](ABENCDS_CROSS_BO_ASSOC_GLOSRY.html) scenario.

**RAP key function**

A predefined [RAP function](ABENRAP_FUNCTION_GLOSRY.html) that is defined for a [BDEF alternative key](ABENRAP_ALTERNATIVE_KEY_GLOSRY.html). It receives the values of an alternative key as input and returns the [entity instances](ABENRAP_BO_ENTITY_INST_GLOSRY.html) with matching values. Key functions are used, for example, to enable [read-by-association](ABENRAP_RBA_OPERATION_GLOSRY.html) operations in RAP BOs with [cross-BO associations](ABENCDS_CROSS_BO_ASSOC_GLOSRY.html) involving RAP reuse objects.

**RAP late numbering**

A [numbering concept](ABENRAP_NUMBERING_GLOSRY.html) in which key values are assigned during the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html).

The final key value is only assigned in the [RAP saver method](ABENABP_SAVER_METHOD_GLOSRY.html)\\ [`adjust_numbers`](ABENSAVER_ADJUST_NUMBERS.html). 

**RAP late save phase**

The phase of the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html) that covers the [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html)\\ [`adjust_numbers`](ABENSAVER_ADJUST_NUMBERS.html) and [`save`](ABENSAVER_METHOD_SAVE.html) (or [`save_modified`](ABAPRAP_SAVER_METH_SAVE_MODIFIED.html) respectively). The [`cleanup`](ABENSAVER_METHOD_CLEANUP.html) method is called following a successful save.

**RAP link action**

A [RAP non-standard operation for associations](ABENRAP_NONST_OP_ASSOC_GLOSRY.html) that associates a [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html) to another RAP BO entity instance by setting the [foreign key](ABENFOREIGN_KEY_GLOSRY.html). The link action can be defined for [intra-BO associations](ABENCDS_INTRA_BO_ASSOC_GLOSRY.html) and for [cross-BO associations](ABENCDS_CROSS_BO_ASSOC_GLOSRY.html).

See also: [RAP unlink action](ABENRAP_UNLINK_ACTION_GLOSRY.html)

**RAP lock dependent entity**

A [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) whose locking requests are delegated to the [lock master entity](ABENRAP_LOCK_MA_ENT_GLOSRY.html). Defined using the keyword [`lock dependent by _Assoc`](ABENBDL_LOCKING.html).

**RAP lock master entity**

A [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) that is locked on each locking request of one of its [lock dependent entities](ABENRAP_LOCK_DEP_ENT_GLOSRY.html). On each locking request the lock master and all its lock dependent entities are locked.

**RAP lock operation**

A [RAP BO operation](ABENRAP_BO_OPERATION_GLOSRY.html) that locks [RAP BO entity instances](ABENRAP_BO_ENTITY_INST_GLOSRY.html) on the [persistent table](ABENRAP_PERSISTENT_TABLE_GLOSRY.html) during a [RAP transaction](ABENRAP_LUW_GLOSRY.html).

**RAP locking**

A locking mechanism that is based on the SAP lock concept. It uses lock function modules for [pessimistic concurrency control](ABENPESSIMIST_CONC_CONTROL_GLOSRY.html).

**RAP managed draft provider**

A part of the [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) that manages draft data on the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) during the [interaction phase](ABENRAP_INT_PHASE_GLOSRY.html) and provides [draft actions](ABENRAP_BO_DRAFT_ACTION_GLOSRY.html) and the total ETag handling in draft-enabled [RAP BOs](ABENRAP_BO_GLOSRY.html).

**RAP message**

A message that is represented by an instance of a class that implements the interface `IF_ABAP_BEHV_MESSAGE` and is used in [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) implementations.

Each application can create its own classes. For convenience, each [behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) contains a predefined local [exception class](ABENEXCEPTION_CLASS_GLOSRY.html)\\ `CL_ABAP_BEHV_MSG` inherited from `CX_NO_CHECK` that implements `IF_ABAP_BEHV_MESSAGE` in a minimalistic way. It can be used for RAP messages as well as for raising [exceptions](ABENEXCEPTION_GLOSRY.html) where appropriate.

**RAP modify operation**

A synonym for [CUD operations](ABENCUD_GLOSRY.html). [RAP BO operation](ABENRAP_BO_OPERATION_GLOSRY.html) that changes data of a [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html). [Create](ABENRAP_CREATE_OPERATION_GLOSRY.html), [update](ABENRAP_UPDATE_OPERATION_GLOSRY.html), and [delete](ABENRAP_DELETE_OPERATION_GLOSRY.html) are RAP modify operations.

**RAP new draft instance**

A [draft instance](ABENRAP_DRAFT_INSTANCE_GLOSRY.html) that is produced by a [create operation](ABENRAP_CREATE_OPERATION_GLOSRY.html) with the [draft indicator](ABENRAP_DRAFT_INDICATOR_GLOSRY.html) set to *true*. The data of new draft instances is not yet persisted on the active database table and there is no corresponding active instance available.

See also: [RAP edit draft instance](ABENRAP_EDIT_DRAFT_INST_GLOSRY.html)

**RAP non-factory action**

A [RAP action](ABENRAP_ACTION_GLOSRY.html) that is not a factory action. In contrast to factory actions, the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) of a non-factory action does not contain a [`%cid`](ABAPDERIVED_TYPES_CID.html) component.

**RAP nonstandard operation for associations**

An [operation for associations](ABENRAP_OPERATION_ASSOC_GLOSRY.html) that provides noncanonical behavior along an [association path](ABENCDS_ASSOCIATION_PATH_GLOSRY.html) from an [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) to an [association target](ABENASSOCIATION_TARGET_GLOSRY.html). For example, the [link action](ABENRAP_LINK_ACTION_GLOSRY.html), the [unlink action](ABENRAP_UNLINK_ACTION_GLOSRY.html), the [reorder action](ABENRAP_REORDER_ACTION_GLOSRY.html), and the [inverse function](ABENRAP_INVERSE_FUNCTION_GLOSRY.html) are predefined nonstandard operations for associations.

**RAP numbering**

A concept that deals with setting values for primary key fields of [RAP BO entity instances](ABENRAP_BO_ENTITY_INST_GLOSRY.html).

The following numbering concepts are available:

**RAP operation for associations**

A [RAP BO operation](ABENRAP_BO_OPERATION_GLOSRY.html) that operates along an [association path](ABENCDS_ASSOCIATION_PATH_GLOSRY.html) and affects the [association target](ABENASSOCIATION_TARGET_GLOSRY.html). They are defined in the [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) for the association. There are [standard operations for associations](ABENRAP_STANDARD_OP_ASSOC_GLOSRY.html) and [non-standard operations for associations](ABENRAP_NONST_OP_ASSOC_GLOSRY.html).

**RAP output derived type**

A [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) that is used for changing parameters in methods in the [ABP](ABENBEHAVIOR_POOL_GLOSRY.html).

**RAP persistent data**

Data on the [RAP persistent table](ABENRAP_PERSISTENT_TABLE_GLOSRY.html).

**RAP persistent state**

The state of a [business object](ABENRAP_BO_GLOSRY.html) or its [instances](ABENRAP_BO_INSTANCE_GLOSRY.html) as it is on the [persistent database table](ABENRAP_PERSISTENT_TABLE_GLOSRY.html).

**RAP persistent table**

The [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) a [RAP BO](ABENRAP_BO_GLOSRY.html) is based on. For transactional changes of RAP persistent table data, the data is loaded into the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html). At the end of a [RAP transaction](ABENRAP_LUW_GLOSRY.html), changes in the transactional buffer are either written back to the persistent table (commit) or discarded (rollback).

**RAP projection behavior definition**

RAP projection BDEF or projection BDEF for short. A RAP projection behavior definition is a [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) of [implementation type](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html)\\ `projection`. It is based on a [CDS transactional query](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html) and it projects a [base BDEF](ABENRAP_BASE_BDEF_GLOSRY.html).

**RAP projection business object**

A [RAP business object](ABENRAP_BO_GLOSRY.html) that is defined in a [RAP projection behavior definition](ABENCDS_PROJ_BDEF_GLOSRY.html). It has a [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html) as [root view](ABENCDS_DEFINE_VIEW_AS_PROJECTION.html).

**RAP projection extension entity**

Defines the node extension in the projection layer. A component of a [BDEF projection extension](ABENRAP_PROJEC_BDEF_EXT_GLOSRY.html) that defines the behavior for an extension node in the projection layer. Projection extension entity behavior is defined using [`define behavior for`](ABENBDL_PROJ_EXT_ENTITY.html) in the context of a [BDEF projection extension](ABENRAP_PROJEC_BDEF_EXT_GLOSRY.html). The extension node must be added to the current RAP BO's data model via [RAP data model extensions](ABENRAP_DATA_MODEL_EXT_GLOSRY.html).

**RAP query**

A consumption option in RAP that provides read-only consumption of data defined in [CDS entities](ABENCDS_ENTITY_GLOSRY.html). A RAP query is executed by the [RAP query engine](ABENRAP_QUERY_ENGINE_GLOSRY.html).

**RAP query engine**

A part of the [RAP runtime engine](ABENRAP_RUNTIME_ENGINE_GLOSRY.html) that handles the non-transactional consumption of [RAP BOs](ABENRAP_BO_GLOSRY.html). The RAP query engine is provided by the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html) but can be adapted by implementing an [unmanaged query](ABENRAP_UNMANGED_QUERY_GLOSRY.html).

**RAP read operation**

[RAP BO operation](ABENRAP_BO_OPERATION_GLOSRY.html) that retrieves data of a [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html) from the [RAP transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) or from the database table if the instance in not available in the transactional buffer.

See also: [CRUD operations](ABENCRUD_GLOSRY.html)

**RAP read-by-association operation**

[RAP read operation](ABENRAP_READ_OPERATION_GLOSRY.html) that retrieves data of an [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of a [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html).

**RAP reorder action**

A [RAP hierarchy action](ABENRAP_HIERARCHY_ACTION_GLOSRY.html) that moves a [hierarchy node](ABENHIERARCHY_NODE_GLOSRY.html) to a dedicated position among its siblings in editable [treeview scenarios](ABENRAP_TREEVIEW_GLOSRY.html) by recalculating the hierarchy index fields of all sibling instances. The reorder action can be managed or unmanaged.

**RAP repeatable operation**

[RAP action](ABENRAP_ACTION_GLOSRY.html) or [RAP function](ABENRAP_FUNCTION_GLOSRY.html) that can be executed multiple times on the same [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html) within the same [ABAP EML](ABENABAP_EML_GLOSRY.html) or [OData](ABENODATA_GLOSRY.html) request. The [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) of a repeatable operation contains a [`%cid`](ABAPDERIVED_TYPES_CID.html) component and the [RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html) are filled for each execution individually.

**RAP response**

Information a [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) is provided with by a [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) via the [RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html)\\ `mapped`, `failed` and `reported` of individual [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) and [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html).

Depending on the availability of these response parameters in the said methods, the information that is provided can comprise the following:

**RAP response parameter**

Implicit changing parameters of [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) and [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html) (implicitly) typed with the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html)\\ [`... TYPE RESPONSE FOR ...`](ABAPTYPE_RESPONSE_FOR.html). Depending on the RAP handler or saver method, the signatures of the individual methods can include all of the following three formal parameters `mapped`, `failed` and `reported`, a subset or none of them. The names of the parameters are predefined. They are used to provide a [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) with information by a [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html).

Parameters:

**RAP reuse service**

A RAP reuse service is a [reuse service](ABENREUSE_SERVICE_GLOSRY.html) that is natively integrated in [RAP](ABENRAP_GLOSRY.html). For example, [RAP change documents](ABENRAP_CHANGE_DOCUMENTS_GLOSRY.html) are a RAP reuse service.

**RAP runtime engine**

Processor that handles the consumption of [RAP queries](ABENRAP_QUERY_GLOSRY.html) and [RAP BOs](ABENRAP_BO_GLOSRY.html). There is the [RAP query engine](ABENRAP_QUERY_ENGINE_GLOSRY.html) for non-transactional consumption and the [RAP transactional engine](ABENRAP_TRANSAC_ENGINE_GLOSRY.html) for transactional consumption.

**RAP runtime framework**

Part of the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html) that is provided by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) for consuming [RAP business objects](ABENRAP_BO_GLOSRY.html) from outside [AS ABAP](ABENAS_ABAP_GLOSRY.html) or from [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html). In order to handle open protocols such as [OData](ABENODATA_GLOSRY.html) when a RAP BO is exposed as a [business service](ABENBUSINESS_SERVICE_GLOSRY.html), the RAP runtime framework involves components of [SAP Gateway](ABENSAP_GATEWAY_GLOSRY.html). In order to control the runtime behavior of a RAP business object, the RAP runtime framework uses [SADL](ABENSADL_GLOSRY.html) as an orchestration framework. [ABAP EML](ABENABAP_EML_GLOSRY.html) statements that are used to access RAP BOs from inside an ABAP program, also trigger processes in the RAP runtime framework.

**RAP save action**

[RAP action](ABENRAP_ACTION_GLOSRY.html) that can only be executed during the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html). Any attempt to execute a RAP save action during the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html) results in a [short dump](ABENSHORT_DUMP_GLOSRY.html).

**RAP save sequence**

The RAP save sequence is part of the [RAP BO](ABENRAP_BO_GLOSRY.html) runtime and is triggered after at least one successful modification was performed during the [interaction phase](ABENRAP_INT_PHASE_GLOSRY.html). It saves data from the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) on the database.

The RAP save sequence is divided into three phases that are entered in this order:

**RAP saver class**

[Local class](ABENLOCAL_CLASS_GLOSRY.html) in a [CCIMP include](ABENCCIMP_GLOSRY.html) of an [ABAP behavior pool (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html) for implementing [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html) that are called during the [save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html).

**RAP saver method**

Special method in a [RAP saver class](ABENABP_SAVER_CLASS_GLOSRY.html) of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) that is called during the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html). The names of saver methods are predefined and cannot be changed. 

**RAP side effect**

An optional part of a [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) that defines interdependencies among BO properties that trigger a reload of the affected properties on the user interface. Introduced by the keyword [`side effects`](ABENBDL_SIDE_EFFECTS.html) in the [entity behavior body](ABENCDS_ENTITY_BODY_GLOSRY.html) of a RAP behavior definition.

**RAP standard operation for associations**

[Operation for associations](ABENRAP_OPERATION_ASSOC_GLOSRY.html) that provides canonical behavior along an [association path](ABENCDS_ASSOCIATION_PATH_GLOSRY.html) from an [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) to an [association target](ABENASSOCIATION_TARGET_GLOSRY.html). [Create-by-association](ABENRAP_CBA_OPERATION_GLOSRY.html) and [read-by-association](ABENRAP_RBA_OPERATION_GLOSRY.html) are standard operations for associations.

**RAP state message**

A [message](ABENRAP_MESSAGE_GLOSRY.html) in the [`reported`](ABAPEML_RESPONSE.html)\\ [RAP response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html) of a [RAP business object](ABENRAP_BO_GLOSRY.html) that refers to the state of an [entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html). A state message is defined with the parameter [`%state_area`](ABAPDERIVED_TYPES_STATE_AREA.html), which assigns it to the corresponding state area. A state message is persisted with the instance it refers to in [draft-enabled BOs](ABENDRAFT_RAP_BO_GLOSRY.html).

RAP state messages are relevant in the following contexts:

**RAP static field characteristic**

[Field characteristic](ABENRAP_FIELD_CHAR_GLOSRY.html) that defines usage restrictions for a [RAP BO field](ABENRAP_BO_FIELD_GLOSRY.html) independently of the state of a [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html). For example, [read-only](ABENREAD_ONLY_RAP_BO_FIELD_GLOSRY.html) and [mandatory](ABENMANDATORY_RAP_BO_FIELD_GLOSRY.html) are static field characteristics.

**RAP static transition message**

A [transition message](ABENRAP_TRANS_MES_GLOSRY.html) that refers to a [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html), but not to a specific [instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html). Unlike a [RAP instance transition message](ABENINSTANCE_RAP_TRANS_MES_GLOSRY.html), it does not contain a key reference.

**RAP total ETag**

A field of a [draft-enabled RAP BO](ABENDRAFT_RAP_BO_GLOSRY.html) that enables [optimistic concurrency checks](ABENOPTIMISTIC_CONC_CONTROL_GLOSRY.html) during the transition form draft to [persistent data](ABENRAP_PERSISTENT_DATA_GLOSRY.html).

**RAP transaction**

A RAP transaction ...

**RAP transactional buffer**

Storage where the data that is used during one [RAP transaction](ABENRAP_LUW_GLOSRY.html) is kept. It includes the [RAP BO instance](ABENRAP_BO_INSTANCE_GLOSRY.html) that are being worked on.

A distinction is drawn between the following kinds of transactional buffer:

**RAP transactional engine**

Part of the [RAP runtime engine](ABENRAP_RUNTIME_ENGINE_GLOSRY.html) that handles the transactional consumption of [RAP BOs](ABENRAP_BO_GLOSRY.html).

**RAP transactional framework**

Part of the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html) that consists of the [RAP transactional engine](ABENRAP_TRANSAC_ENGINE_GLOSRY.html) and the development environment for [RAP business objects](ABENRAP_BO_GLOSRY.html).

**RAP transactional phase**

The [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html) and [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html) are RAP transactional phases.

**RAP transition message**

A message in the [`reported`](ABAPEML_RESPONSE.html)\\ [RAP response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html) that is semantically related to the current ABAP EML `MODIFY` request and independent of the state of the [entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html). Unlike [RAP state messages](ABENRAP_STATE_MES_GLOSRY.html), transition messages are [RAP messages](ABENRAP_MESSAGE_GLOSRY.html) that do not have a state area assigned ([`%state_area`](ABAPDERIVED_TYPES_STATE_AREA.html)) and are not persisted with the state. Therefore, these messages cannot be accessed at a later point in time.

There are [instance transition messages](ABENINSTANCE_RAP_TRANS_MES_GLOSRY.html) and [static transition messages](ABENSTATIC_RAP_TRANS_MES_GLOSRY.html).

**RAP type mapping**

Mapping between data types of the data model that is defined in CDS for a [RAP business object](ABENRAP_BO_GLOSRY.html) to other data types that do not match a [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) component pattern.

For example, it is used in the behavior definition to map database field names to CDS element names.

**RAP unlink action**

A [RAP non-standard operation for associations](ABENRAP_NONST_OP_ASSOC_GLOSRY.html) that disconnects two associated [RAP BO entity instances](ABENRAP_BO_ENTITY_INST_GLOSRY.html) by removing the value of the [foreign key](ABENFOREIGN_KEY_GLOSRY.html) field. The unlink action can be defined for [intra-BO associations](ABENCDS_INTRA_BO_ASSOC_GLOSRY.html) and for [cross-BO associations](ABENCDS_CROSS_BO_ASSOC_GLOSRY.html).

See also: [RAP link action](ABENRAP_LINK_ACTION_GLOSRY.html)

**RAP unmanaged draft provider**

Draft [provider](ABENRAP_BO_PROVIDER_GLOSRY.html) of [BOs](ABENRAP_BO_GLOSRY.html) with unmanaged draft. The [draft handling](ABENRAP_DRAFT_HANDLING_GLOSRY.html) is implemented in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).

**RAP unmanaged query**

An implementation type of the RAP query for which parts of the [RAP query engine](ABENRAP_QUERY_ENGINE_GLOSRY.html) must be implemented in an [ABAP class](ABENCLASS_GLOSRY.html) that is referenced in a [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html).

**RAP unmanaged save**

Save logic which replaces the default save method in [managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html). It can be applied to the complete [BO](ABENRAP_BO_GLOSRY.html) by defining it in the [behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html), or for an individual entity by defining it in the [behavior entity characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html). It is implemented in the redefined [saver method](ABENABP_SAVER_METHOD_GLOSRY.html)\\ `save_modified`.

**RAP update operation**

A [RAP modify operation](ABENRAP_MODIFY_OPERATION_GLOSRY.html) that changes [field](ABENRAP_BO_FIELD_GLOSRY.html) values of existing [RAP BO entity instances](ABENRAP_BO_ENTITY_INST_GLOSRY.html).

**RAP validation**

An optional part of the [RAP BO behavior](ABENRAP_BO_BEHAVIOR_GLOSRY.html) that checks the consistency of [RAP BO instance](ABENRAP_BO_INSTANCE_GLOSRY.html) based on trigger conditions.

**read-only RAP BO field**

A [field](ABENRAP_BO_FIELD_GLOSRY.html) in a [RAP BO](ABENRAP_BO_GLOSRY.html) that is defined as read-only in the [behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). Changes to this field are only allowed by the [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) in local mode.

**REST**

Short for Representational State Transfer. An architecture concept for Web services. One of the essential conditions for a [RESTful](ABENRESTFUL_GLOSRY.html) programming model is a stateless Web server. No client-dependent information can be saved on a Web server between the Web client requests made to the server. The status of a session is managed by the Web client and all necessary information is transferred to the Web server with requests. However, a Web server can also be a client of a persistence layer such as a [database system](ABENDATABASE_SYSTEM_GLOSRY.html), in which the status of a session is saved persistently for its duration. ABAP supports REST in [ABAP RAP](ABENABAP_RAP_GLOSRY.html).

[**\-> More about**](https://en.wikipedia.org/wiki/Representational_state_transfer)

**RESTful**

Programming models and their services, APIs, and protocols are called RESTful if they meet the [REST](ABENREST_GLOSRY.html) principles. See also [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html).

**reverse foreign key association**

*\->*\\ [target-resolved association](ABENTARGET_RESOLVED_ASSOC_GLOSRY.html)

**SADL**

Short for Service Adaptation Definition Language. Infrastructure for model-based reading and processing of data. The [RAP runtime framework](ABENRAP_RUNT_FRAMEWORK_GLOSRY.html) uses SADL internally for its [query engine](ABENRAP_QUERY_ENGINE_GLOSRY.html) and its orchestration framework, which controls the runtime behavior of [RAP business objects](ABENRAP_BO_GLOSRY.html).

**source-resolved association**

Also known as [foreign key association](ABENFOREIGN_KEY_ASSOC_GLOSRY.html). An [association](ABENCDS_ASSOCIATION_GLOSRY.html) relationship in which the [foreign key](ABENFOREIGN_KEY_GLOSRY.html) is stored in the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) entity.

**static RAP BO operation**

A [RAP BO operation](ABENRAP_BO_OPERATION_GLOSRY.html) that is not bound to any [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html) but relates to the complete [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html). Defined using the optional addition [`static`](ABENBDL_STATIC.html).

**target-resolved association**

Also known as [reverse foreign key association](ABENREVERSE_FK_ASSOC_GLOSRY.html). An [association](ABENCDS_ASSOCIATION_GLOSRY.html) relationship in which the [foreign key](ABENFOREIGN_KEY_GLOSRY.html) is stored in the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) entity.

**transactional phase**

Specifies the concrete phase of a transaction. It is either the modify or the save transactional phase. They are set either implicitly, as in the case of, for example, [RAP handler](ABENABP_HANDLER_METHOD_GLOSRY.html) and [saver](ABENABP_SAVER_METHOD_GLOSRY.html) methods, or explicitly using the static methods of class [`CL_ABAP_TX`](ABAPRAP_CL_ABAP_TX.html).

In a [RAP transaction](ABENRAP_LUW_GLOSRY.html), the transactional phases are as follows:

**treeview**

In the context of the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html), a treeview visualizes data modeled by a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html) e.g. by using a SAP Fiori Elements treetable. A treeview can be read-only or editable.

**unmanaged RAP BO provider**

Part of the [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) that must be implemented in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).

**unmanaged RAP business object**

Unmanaged RAP BO for short. Provisioning type of the [business object behavior](ABENRAP_BO_BEHAVIOR_GLOSRY.html) of a [RAP BO](ABENRAP_BO_GLOSRY.html). The [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) of an unmanaged RAP BO is provided by an [ABAP behavior implementation](ABENBEHAVIOR_IMPLEMENT_GLOSRY.html). The implementation of an unmanaged RAP BO is fully provided by the [unmanaged RAP BO provider](ABENUNMANAGED_RAP_BO_PROV_GLOSRY.html) in an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).

**unmanaged transactional buffer**

[Transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) of an [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html) that is provided and accessed by the [unmanaged RAP BO provider](ABENUNMANAGED_RAP_BO_PROV_GLOSRY.html).

**web API**

[OData](ABENODATA_GLOSRY.html) consumer of a [RAP business service](ABENBUSINESS_SERVICE_GLOSRY.html) that serves as an API without UI-specific metadata.

-   [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html) checks: Check for violations of [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) and [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) implementations.
-   [Transactional contract](ABENTRANSACTIONAL_CONTRACT_GLOSRY.html) checks: Are implemented in the [controlled SAP LUW](ABENCONTROLLED_SAP_LUW_GLOSRY.html) concept. Check for transactional consistency violations in a [transactional phase](ABENTR_PHASE_GLOSRY.html).

-   [BDEF pure key](ABENRAP_PURE_KEY_GLOSRY.html)
-   [BDEF secondary key](ABENRAP_SECONDARY_KEY_GLOSRY.html)

-   [base BDEF extensions](ABENRAP_BASE_BDEF_EXT_GLOSRY.html)
-   [BDEF projection extensions](ABENRAP_PROJEC_BDEF_EXT_GLOSRY.html)
-   [abstract BDEF extensions](ABENRAP_ABS_BDEF_EXT_GLOSRY.html)

-   [managed](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [unmanaged](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   [interface](ABENCDS_INTERFACE_BDEF_GLOSRY.html)
-   [projection](ABENRAP_PROJECTION_BO_GLOSRY.html)
-   [abstract](ABENCDS_ABSTRACT_BDEF_GLOSRY.html)

-   In [SQL](ABENSQL_GLOSRY.html), the four operations are implemented by;

-   [DQL](ABENDQL_GLOSRY.html) statements `SELECT`, `WITH`, `OPEN CURSOR` and `FETCH`.
-   [DML](ABENDML_GLOSRY.html) statements `INSERT`, `UPDATE`, and `DELETE`.

-   In the [ABAP RESTful Application Programming Model (RAP)](ABENARAP_GLOSRY.html), the four operations can be specified in a [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) using the [RAP BDL](ABENCDS_BDL_GLOSRY.html) syntax elements `create`, `read`, `update`, and `delete`.

-   In [SQL](ABENSQL_GLOSRY.html), the three operations are implemented by the [DML](ABENDML_GLOSRY.html) statements `INSERT`, `UPDATE`, and `DELETE`.
-   In the [ABAP RESTful Application Programming Model (RAP)](ABENARAP_GLOSRY.html), the three operations are represented by the [RAP modify operations](ABENRAP_MODIFY_OPERATION_GLOSRY.html)\\ [Create](ABENRAP_CREATE_OPERATION_GLOSRY.html), [update](ABENRAP_UPDATE_OPERATION_GLOSRY.html), and [delete](ABENRAP_DELETE_OPERATION_GLOSRY.html) in [RAP BOs](ABENRAP_BO_GLOSRY.html).

-   [RAP factory actions](ABENRAP_FACTORY_ACTION_GLOSRY.html)
-   [RAP non-factory actions](ABENRAP_NON_FAC_ACTION_GLOSRY.html)

-   [Full authorization context](ABENCDS_OWN_AC_GLOSRY.html)
-   [Authorization context for disable](ABENCDS_AUTH_CONTEXT_GLOSRY.html)

-   Global authorization is independent of individual [instances](ABENRAP_BO_INSTANCE_GLOSRY.html).
-   Instance authorization is dependent on the state of an [entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html).

-   [DDIC extensions](ABENDDIC_EXTENSION_GLOSRY.html) defined in [DDIC DDL](ABENDDIC_DCL_GLOSRY.html)
-   [CDS entity extension](ABENCDS_ENTITY_EXTEND_GLOSRY.html) in [CDS DDL](ABENCDS_DDL_GLOSRY.html).
-   [BDEF extensions](ABENRAP_EXTENSION_GLOSRY.html) in [RAP BDL](ABENCDS_BDL_GLOSRY.html).
-   [Service definition extensions](ABENCDS_SERVICE_DEF_EXT_GLOSRY.html) in [CDS SDL](ABENCDS_SDL_GLOSRY.html).

-   A [managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html) is provided fully or partly by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html).
-   An [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html) is fully provided by the [unmanaged RAP BO provider](ABENUNMANAGED_RAP_BO_PROV_GLOSRY.html).
-   The draft data of a [draft-enabled RAP business object](ABENDRAFT_RAP_BO_GLOSRY.html) is provided by the [managed](ABENRAP_MAN_DRAFT_PROVIDER_GLOSRY.html) or [unmanaged draft provider](ABENRAP_UN_DRAFT_PROVIDER_GLOSRY.html).
-   A [BOPF-based RAP BO](ABENRAP_BOPF_BO_GLOSRY.html) is provided by the [BOPF-managed RAP BO provider](ABENBOPF_MAN_RAP_BO_PROV_GLOSRY.html).

-   [Managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html) that are fully or partly provided by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html)
-   [Unmanaged RAP BOs](ABENUNMANAGED_RAP_BO_GLOSRY.html) that are provided by the [unmanaged RAP BO provider](ABENUNMANAGED_RAP_BO_PROV_GLOSRY.html) that is implemented in an [ABAP behavior implementation](ABENBEHAVIOR_IMPLEMENT_GLOSRY.html).
-   [BOPF-based RAP business objects](ABENRAP_BOPF_BO_GLOSRY.html) that are provided by the [BOPF-managed RAP BO provider](ABENBOPF_MAN_RAP_BO_PROV_GLOSRY.html).

-   [optimistic concurrency control](ABENOPTIMISTIC_CONC_CONTROL_GLOSRY.html)
-   [pessimistic concurrency control](ABENPESSIMIST_CONC_CONTROL_GLOSRY.html)

-   [RAP copy action](ABENRAP_COPY_ACTION_GLOSRY.html)
-   [RAP reorder action](ABENRAP_REORDER_ACTION_GLOSRY.html)

-   [early numbering](ABENRAP_EARLY_NUMBERING_GLOSRY.html)
-   [external numbering](ABENRAP_EXT_NUMBERING_GLOSRY.html)
-   [internal numbering](ABENRAP_INT_NUMBERING_GLOSRY.html)
-   [late numbering](ABENRAP_LATE_NUMBERING_GLOSRY.html)

-   `mapped`: Used to provided mapping information on [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html), for example, which key values were created for given content IDs ([`%cid`](ABAPDERIVED_TYPES_CID.html)).
-   `failed`: Information for identifying the data set for which an error occurred in a RAP operation.
-   `reported`: Used to exchange error messages for each entity defined in the BDEF and [not related to a specific entity](ABAPDERIVED_TYPES_OTHER.html).

-   `failed`: Information for identifying the data set for which an error occurred in a RAP operation
-   `reported`: Used to exchange messages (for example, error messages) for each entity defined in the BDEF and [not related to a specific entity](ABAPDERIVED_TYPES_OTHER.html).
-   `mapped`: Used to provide mapping information on [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html), for example, which key values were created for given content IDs ([`%cid`](ABAPDERIVED_TYPES_CID.html)).

-   [RAP early save phase](ABENEARLY_RAP_SAVE_PHASE_GLOSRY.html)
-   [RAP late save phase](ABENLATE_RAP_SAVE_PHASE_GLOSRY.html)
-   [RAP cleanup phase](ABENRAP_CLEANUP_PHASE_GLOSRY.html)

-   Draft-enabled RAP BOs
-   The [`cleanup_finalize`](ABAPSAVER_CLASS_CLEANUP_FINALIZE.html) and [`check_before_save`](ABENSAVER_CHECK_BEFORE_SAVE.html)\\ [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html) in [unmanaged RAP BOs](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   [Determinations](ABENRAP_DETERMINATION_GLOSRY.html) and [validations](ABENRAP_VALIDATION_GLOSRY.html) in [managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html)

-   is the sum of all operations and workflows that are used to transfer data from one consistent state to another.
-   begins with creating new data on the [RAP transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) or by retrieving data from the database to the transactional buffer.
-   is terminated with [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html) or [`ROLLBACK ENTITIES`](ABAPROLLBACK_ENTITIES.html).

-   [managed transactional buffer](ABENMANAGED_TRANS_BUFF_GLOSRY.html) for [managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html).
-   [unmanaged transactional buffer](ABENUNMANAGED_TRANS_BUFF_GLOSRY.html) for [unmanaged RAP BOs](ABENUNMANAGED_RAP_BO_GLOSRY.html).

-   Modify: Includes the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html) and the [early save phase](ABENEARLY_RAP_SAVE_PHASE_GLOSRY.html) of the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html).
-   Save: Includes the [RAP late save phase](ABENLATE_RAP_SAVE_PHASE_GLOSRY.html).

abenabap.html abenabap\_rap.html