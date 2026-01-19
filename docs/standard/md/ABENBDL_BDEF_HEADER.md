---
title: "The behavior definition header is followed by"
description: |
  The following example shows a managed BDEF based on the CDS root view entity `DEMO_RAP_FOREIGN_ENTITY`. The BDEF header consists of the following components: -   `managed  unmanaged`(ABENBDL_IMPL_TYPE.html): Specifies the BDEF implementation type(ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html). -   `Savin
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_BDEF_HEADER.htm"
abapFile: "ABENBDL_BDEF_HEADER.html"
keywords: ["update", "delete", "do", "if", "case", "class", "ABENBDL", "BDEF", "HEADER"]
---

``[`managed | unmanaged`](ABENBDL_IMPL_TYPE.html)\ [[`SavingOptions`](ABENBDL_SAVING.html)]\        \{[[`implementation in class ClassName unique`](ABENBDL_IN_CLASS_UNIQUE.html)]\};  [[`strict[(version)]`](ABENBDL_STRICT.html);]\  [[`auxiliary class ClassName1[, ClassName2]\ [, ...];`](ABENBDL_AUXILIARY_CLASS.html)]\  [[`extensible`](ABENBDL_EXTENSIBLE.html);]\  [[`with draft`](ABENBDL_WITH_DRAFT.html);]\  [[`with privileged mode disabling ContextName`](ABENBDL_PRIVILEGED_MODE.html);]\  [[`with cross associations`](ABENBDL_WITH_CROSS_ASSOC.html);]\  [[`foreign entity EntityName`](ABENBDL_FOREIGN.html);]\  \ [`EntityBehaviorDefinition1`](ABENBDL_DEFINE_BEH.html)[, [`EntityBehaviorDefinition2`](ABENBDL_DEFINE_BEH.html)][, ...]\  [[`AuthorizationContext1`](ABENBDL_AUTHORIZATION_CONTEXT.html)][, [`AuthorizationContext2`](ABENBDL_AUTHORIZATION_CONTEXT.html)][, ... ]\  ...``

Defines a RAP behavior definition in the [RAP BDL](ABENCDS_BDL_GLOSRY.html). A RAP behavior definition consists of a [RAP behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html) and one or more [entity behavior definitions](ABENCDS_ENTITY_BDEF_GLOSRY.html)\\ [`EntityBehaviorDefinition1`](ABENBDL_DEFINE_BEH.html), [`EntityBehaviorDefinition2`](ABENBDL_DEFINE_BEH.html), ... Optionally, one or more [RAP authorization contexts](ABENCDS_AUTH_CON_GLOSRY.html)\\ [`AuthorizationContext1`](ABENBDL_AUTHORIZATION_CONTEXT.html), [`AuthorizationContext2`](ABENBDL_AUTHORIZATION_CONTEXT.html), ... can be specified.

The header can define the following attributes for the entire business object. The implementation type is mandatory, all other attributes are optional.

The behavior definition header is followed by

The following example shows a managed BDEF based on the CDS root view entity `DEMO_RAP_FOREIGN_ENTITY`. The BDEF header consists of the following components:

-   [`managed | unmanaged`](ABENBDL_IMPL_TYPE.html): Specifies the [BDEF implementation type](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html).
-   [`SavingOptions`](ABENBDL_SAVING.html):

-   The default [save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html) can either be enhanced or switched off and overwritten with a user-defined saving strategy.
-   Can be defined either in the [BDEF header](ABENCDS_BDEF_HEADER_GLOSRY.html) and then applies to all entities of the business object. It is also possible to define saving options as an [entity behavior characteristic](ABENBDL_CHARACTER.html).
-   If specified, an implementation in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is required.
-   Only available for [managed implementation scenarios](ABENMANAGED_RAP_BO_GLOSRY.html). In unmanaged implementation scenarios, the save sequence is always user-implemented.

-   [`implementation in class ClassName unique`](ABENBDL_IN_CLASS_UNIQUE.html): Specifies one or more classes which allow the behavior implementation of a business object. In a managed scenario, this is optional and required only if unmanaged components are added to the managed implementation.
-   [`strict[(version)]`](ABENBDL_STRICT.html): Switches on [BDEF strict mode](ABENRAP_STRICT_MODE_GLOSRY.html). Handled by the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html).
-   [`auxiliary class ClassName1[, ClassName2]\ [, ...]`](ABENBDL_AUXILIARY_CLASS.html): Specifies one or more additional ABAP classes with enhanced access rights to the referenced RAP BO. The purpose of an [ABP auxiliary class](ABENABP_AUX_CLASS_GLOSRY.html) is to support the implementation in an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).
-   [`extensible`](ABENBDL_EXTENSIBLE.html): Enables [BDEF extensions](ABENBDL_EXTENSION.html). If this keyword is not specified, BDEF extensions are not allowed for the respective behavior definition.
-   [`with draft`](ABENBDL_WITH_DRAFT.html): Enables [RAP draft handling](ABENRAP_DRAFT_HANDLING_GLOSRY.html). This allows users to save their changes as draft and resume editing at a later point in time. Handled by the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html).
-   [`with privileged mode disabling ContextName`](ABENBDL_PRIVILEGED_MODE.html): Enables [BDEF privileged mode](ABENRAP_PRIVILEGED_MODE_GLOSRY.html). The effect is that the [authorization context](ABENCDS_AUTH_CONTEXT_GLOSRY.html)\\ `ContextName` is automatically disabled when a RAP BO consumer accesses the business object in question with a [privileged EML call](ABAPEML_PRIVILEGED.html).
-   [`with cross associations`](ABENBDL_WITH_CROSS_ASSOC.html): Enables RAP cross-BO transactional enablement. This keyword effects that the operations for associations in cross-BO scenarios are handled by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html).
-   [`foreign entity`](ABENBDL_FOREIGN.html): Defines an entity as [RAP foreign entity](ABENRAP_FOREIGN_ENTITY_GLOSRY.html). This means, an entity which is not part of the BO structure becomes a component for the response structures, thus enabling message mapping for other BOs.

-   one or more [entity behavior definitions](ABENBDL_DEFINE_BEH.html) that start with `define behavior for`
-   or by the definition of one or more [authorization contexts](ABENCDS_AUTH_CON_GLOSRY.html) that start with [`define [own] authorization context`](ABENBDL_AUTHORIZATION_CONTEXT.html).

-   the implementation type `managed`
-   BDEF strict mode version 2, defined using `strict(2)`
-   a RAP foreign entity, in this case `DEMO_SALES_CDS_SO_1`

managed implementation in class bp\_demo\_rap\_foreign\_entity unique;\\nstrict(2);\\n//enables MAP\_MESSAGES:\\nforeign entity DEMO\_SALES\_CDS\_SO\_1;\\n\\ndefine behavior for DEMO\_RAP\_FOREIGN\_ENTITY alias RootEntity\\npersistent table DEMO\_DBTAB\_ROOT\\nlock master\\nauthorization master (global)\\n\\{\\n create;\\n update;\\n delete;\\n\\n field(readonly:update) key\_field;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html