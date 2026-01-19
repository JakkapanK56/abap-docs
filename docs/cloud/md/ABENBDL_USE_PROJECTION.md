---
title: "ABENBDL_USE_PROJECTION"
description: |
  ABENBDL_USE_PROJECTION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_USE_PROJECTION.htm"
abapFile: "ABENBDL_USE_PROJECTION.html"
keywords: ["update", "delete", "do", "if", "class", "data", "internal-table", "ABENBDL", "USE", "PROJECTION"]
---

``... use create [([`augment`](ABENBDL_AUGMENT_PROJECTION.html)[, [`precheck`](ABENBDL_PRECHECK.html)])]\    | use update [([`augment`](ABENBDL_AUGMENT_PROJECTION.html)[, [`precheck`](ABENBDL_PRECHECK.html)])]\    | use delete [([`precheck`](ABENBDL_PRECHECK.html))]\    | use association _Assoc \{ create [([`augment`](ABENBDL_AUGMENT_PROJECTION.html)[, [`precheck`](ABENBDL_PRECHECK.html)])];                              [[`with draft`](ABENBDL_ASSOCIATION.html);]\}    | use action [([`precheck`](ABENBDL_PRECHECK.html))] ActionName                 [[`RedefinedParameter`](ABENBDL_REDEFINE_PARAM.html)]\                 [result entity ProjResultEntity]\                 [as ProjAction]\                 [[`external`](ABENBDL_EXTERNAL.html) 'ExtName']\                 [result [`external`](ABENBDL_EXTERNAL.html) 'ExtResultName']\    | use function FunctionName                 [[`RedefinedParameter`](ABENBDL_REDEFINE_PARAM.html)]\                 [result entity ProjResultEntity]\                 [as AliasName]\                 [[`external`](ABENBDL_EXTERNAL.html) ExtName]\                 [result external ExtResultName]\    | use draft    | use collaborative draft    | use etag    | use event EventName [[`RedefinedParameter`](ABENBDL_REDEFINE_PARAM.html)]\ [as AliasName]\    | use side effects    | use key KeyName [as AliasName]\    |\ [`use DefaultValuesFunction`](ABENBDL_USE_DEFAULT_FUNCTION.html) ...``

[1. `... use create ...`](#ABAP_VARIANT_1@1@)

[2. `... use update ...`](#ABAP_VARIANT_2@1@)

[3. `... use delete ...`](#ABAP_VARIANT_3@1@)

[4. `... use association ...`](#ABAP_VARIANT_4@1@)

[5. `... use action ...`](#ABAP_VARIANT_5@1@)

[6. `... use function ...`](#ABAP_VARIANT_6@1@)

[7. `... use draft ...`](#ABAP_VARIANT_7@1@)

[8. `... use collaborative draft ...`](#ABAP_VARIANT_8@1@)

[9. `... use etag ...`](#ABAP_VARIANT_9@1@)

[10. `... use event ...`](#ABAP_VARIANT_10@1@)

[11. `... use side effects ...`](#ABAP_VARIANT_11@1@)

[12. `... use key ...`](#ABAP_VARIANT_12@1@)

[13. `... use DefaultValuesFunction ...`](#ABAP_VARIANT_13@1@)

The keyword `use` allows the reuse of [entity behavior characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html), [draft handling](ABENRAP_DRAFT_HANDLING_GLOSRY.html), [RAP business events](ABENRAP_ENTITY_EVENT_GLOSRY.html), [RAP side effects](ABENRAP_SIDE_EFFECTS_GLOSRY.html), [RAP alternative keys](ABENRAP_ALTERNATIVE_KEY_GLOSRY.html), [RAP default values functions](ABENRAP_BO_DEFAULTING_GLOSRY.html), and [RAP BO operations](ABENRAP_BO_OPERATION_GLOSRY.html) from the base BDEF in a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html) or [interface BDEF](ABENCDS_INTERFACE_BDEF_GLOSRY.html).

The following operations and characteristics can be reused:

A prerequisite for reuse is that the respective elements were defined in the underlying behavior definition. The behavior is realized by mapping it to the underlying behavior; no implementation in an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is required.

Reused behavior can be enhanced. The following optional additions are available for the reused behavior: `precheck` and `augment`. Both of them require an implementation in the ABAP behavior pool. They are available only in projection BDEFs, not in interface BDEFs. These additions are documented in the following topics:

For the operations and characteristics listed in this topic, no automatic inheritance takes place. They must be explicitly specified in the projection or interface BDEF. Otherwise, the respective feature is not available in the projection or interface.

The following example shows a projection BDEF that reuses standard operations and operations for associations from its underlying base BDEF. The base BDEF is `DEMO_SALES_CDS_BUPA_2`.

The ABAP class `CL_DEMO_RAP_PROJECTION_CRUD` uses [EML](ABENEML_GLOSRY.html) to access a [RAP business object](ABENRAP_BO_GLOSRY.html). It creates, updates, and deletes BO instances.

The [standard operation `create`](ABENBDL_STANDARD_OPERATIONS.html) can be reused in a projection or interface BDEF.

In a projection BDEF, the following additions can be added. Both of them require an implementation in an ABAP behavior pool.

Example: see above, projection BDEF `DEMO_RAP_PROJECTION_CRUD`.

The [standard operation `update`](ABENBDL_STANDARD_OPERATIONS.html) can be reused in a projection or interface BDEF.

In a projection BDEF, the following additions can be added. Both of them require an implementation in an ABAP behavior pool.

Example: see above, projection BDEF `DEMO_RAP_PROJECTION_CRUD`.

The [standard operation `delete`](ABENBDL_STANDARD_OPERATIONS.html) can be reused in a projection or interface BDEF.

In a projection BDEF, the following addition can be added. It requires an implementation in an ABAP behavior pool.

Example: see above, projection BDEF `DEMO_RAP_PROJECTION_CRUD`.

The transactional enabling of associations can be reused in a projection or interface BDEF.

If [RAP draft handling](ABENRAP_DRAFT_HANDLING_GLOSRY.html) is enabled in the projection or interface BDEF, associations must be draft enabled using the syntax addition `with draft`.

Example: `use association _assoc \{ create; with draft; \}`

For details on the [read-by-association](ABENRAP_RBA_OPERATION_GLOSRY.html) and [create-by-association operations](ABENRAP_CBA_OPERATION_GLOSRY.html) as well as draft-enabling of associations, see topic [RAP - Operations for Associations](ABENBDL_ASSOCIATION.html).

In projection BDEFs, the following additions can be added. Both of them require an implementation in an ABAP behavior pool.

Example: see above, projection BDEF `DEMO_RAP_PROJECTION_CRUD`.

The syntax element `use action` can be used in a projection or interface BDEF to project [actions](ABENBDL_ACTION.html), [draft actions](ABENBDL_DRAFT_ACTION.html), [determine actions](ABENBDL_DETERMINE_ACTION.html), [copy actions](ABENBDL_COPY_ACTION.html), and [reorder actions](ABENBDL_REORDER_ACTION.html) from the underlying base BDEF. As a prerequisite for reuse, the respective actions, draft actions, and determine actions must be defined in the underlying behavior definition. If an [authorization concept](ABENBDL_AUTHORIZATION.html) or [feature control](ABENBDL_ACTIONS_FC.html) is specified for an action, this is automatically passed on to the projection or interface.

Additions:

The following example shows a projection BDEF that reuses the two actions `Approve_Order` and `Reject_Order` from the underlying base BDEF. The underlying base BDEF is `DEMO_CDS_PURCH_DOC_M`.

For a detailed description of the definition and implementation of the base BO, see topic [RAP - Action](ABENBDL_ACTION1_ABEXA.html).

The ABAP class `CL_DEMO_RAP_PROJ_ACTION` uses [EML](ABENEML_GLOSRY.html) to access a RAP business object. It performs the action `Reject` on one entity instance.

Result: column `Status` of the respective instance is filled with `R` for `Rejected`.

An example for reusing draft actions is shown under Variant 7, `use draft`.

The syntax element `use function` can be used in a projection or interface BDEF to reuse [functions](ABENBDL_FUNCTION.html) from the underlying base BDEF. As a prerequisite for reuse, the respective functions must be specified in the underlying behavior definition.

Additions:

The following special rules apply to [RAP key functions](ABENRAP_KEY_FUNCTION_GLOSRY.html):

The following example shows a projection BDEF that reuses the functions `getDetails`, `calculateTotal`, and `calculateDiscount` from the underlying base BDEF. The underlying base BDEF is `DEMO_RAP_PROJ_FUNCTION`.

For a detailed description of the definition and implementation of the base BO, see topic [RAP - `function`](ABENBDL_FUNCTION_ABEXA.html).

The ABAP class `CL_DEMO_RAP_PROJ_FUNCTION` uses [EML](ABENEML_GLOSRY.html) to access a RAP business object. It executes all three functions and displays the content of their result structures. No [modify operations](ABENRAP_MODIFY_OPERATION_GLOSRY.html) are carried out, the functions merely deliver information in their result structure without changing database entries.

Result:

[RAP draft handling](ABENRAP_DRAFT_HANDLING_GLOSRY.html) can be reused with the syntax element `use draft`. As a prerequisite, the underlying RAP BO must be draft-enabled. The [draft tables](ABENDRAFT_TABLE_GLOSRY.html), [draft query views](ABENDRAFT_QUERY_VIEW_GLOSRY.html) (if specified), and the [total ETag](ABENRAP_TOTAL_ETAG_GLOSRY.html) field are implementation details that are automatically reused and do not have to be explicitly specified in projection BDEFs and interface BDEFs. For details on RAP draft handling, see topic [RAP BDL - with draft](ABENBDL_WITH_DRAFT.html).

If RAP draft handling is reused, it is mandatory to explicitly reuse the draft actions using the syntax `use action` in projections BDEFs and RAP BO interfaces.

Reused associations should be explicitly draft-enabled using the syntax element `with draft`.

Example: `use association _assoc \{ create; with draft; \}`

For further details on draft-enabled associations, see the topic [RAP BDL - operations for associations](ABENBDL_ASSOCIATION.html).

The following example shows a projection BDEF that is based on the unmanaged, draft-enabled BDEF `DEMO_RAP_UNMANAGED_DRAFT_ROOT`. It reuses the RAP draft handling.

For a detailed description of the definition and implementation of the base BO, see the topic [RAP BDL - with draft](ABENBDL_WITH_DRAFT.html).

The implementation is automatically reused from the base BO.

The ABAP class `CL_DEMO_RAP_PROJECTION_DRAFT` accesses the business object using [EML](ABENEML_GLOSRY.html) and performs the following steps:

[RAP draft handling](ABENRAP_DRAFT_HANDLING_GLOSRY.html) can be reused with the syntax element `use collaborative draft`. As a prerequisite, the underlying RAP BO must be enabled with [collaborative draft](ABENRAP_COLLABORATIVE_DRAFT_GLOSRY.html) capabilities. The [draft tables](ABENDRAFT_TABLE_GLOSRY.html), and the [total ETag](ABENRAP_TOTAL_ETAG_GLOSRY.html) field are implementation details that are automatically reused and do not have to be explicitly specified in projection BDEFs and interface BDEFs. For details on RAP collaborative draft handling, see topic [RAP - with collaborative draft](ABENBDL_WITH_COLL_DRAFT.html).

If RAP draft handling is reused, it is mandatory to explicitly reuse the draft actions using the syntax `use action` including the collaborative draft specific [draft action](ABENBDL_DRAFT_ACTION.html)\\ `Share` in projection BDEFs and RAP BO interfaces.

Reused associations should be explicitly draft-enabled using the syntax element `with draft`.

Example: `use association _assoc \{ create; with draft; \}`

For further details on draft-enabled associations, see the topic [RAP BDL - operations for associations](ABENBDL_ASSOCIATION.html).

Development guide for the ABAP RESTful Application Programming Model, section [Collaborative Draft Handling](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/18d41e2a7be24ff99b43c4c88711e86c?version=sap_cross_product_abap).

If the base BO specifies [RAP ETag](ABENRAP_ETAG_GLOSRY.html) fields, these fields can be reused. The keyword `use etag` must be specified for each entity in the projection or interface BDEF individually. If it is not specified explicitly in the projection or interface BDEF, the [optimistic concurrency control](ABENOPTIMISTIC_CONC_CONTROL_GLOSRY.html) functionality is lost.

Even in projection BDEFs without the syntax `use etag`, the value of the ETag field is updated during each modify operation. However, the syntax `use etag` enables an optimistic lock phase in an OData service. During the optimistic lock phase, on each modify request, the value of the ETag field is checked and if an OData client detects any changes in the ETag value, no data changes are possible. Any attempt to save data fails.

Development guide for the ABAP RESTful Application Programming Model, section [Optimistic Concurrency Control](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41d72e9f31964082a7e7189f832010c3?version=sap_cross_product_abap).

[RAP business events](ABENRAP_ENTITY_EVENT_GLOSRY.html) can be reused in an interface BDEF.

**Caution** Reuse is possible in interface BDEFs only. It is not possible to reuse a business event in a projection BDEF.

Additions:

[RAP business events for side effects](ABENRAP_SIDE_EFFCT_EVENT_GLOSRY.html) that are defined using the keyword [`for side effect`](ABENBDL_EVENT_SIDE_EFFECT.html) in the base BDEF can be reused in interface BDEFs and in projection BDEFs using the statement `use event EventName`. The optional addition `as` can be used, but no other addition.

[RAP side effects](ABENRAP_SIDE_EFFECTS_GLOSRY.html) can be reused in a projection BDEF and in an interface BDEF.

The syntax `use side effects` is specified in the [behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html) and all side effects from all RAP BO entities of the underlying RAP BO are reused. However, if side effects are defined for BO properties, such as fields or actions, that do not appear in the projection at all, these side effects are filtered out and do not have any effect in the projection.

**Note** If a base BO is defined as [*extensible*](ABENBDL_EXTENSIBLE.html), the syntax *use side effects*\\ *must* be specified in the behavior definition header of an interface BDEF or of a projection BDEF to ensure that side effects are reused, even if they are specified in an extension. Otherwise, a syntax check warning occurs.

The following example shows an interface BDEF that reuses the side effects from its underlying base BDEF. The base BDEF is `DEMO_RAP_SIDE_EFFECTS`.

[BDEF alternative keys](ABENRAP_ALTERNATIVE_KEY_GLOSRY.html) can be reused in a projection or interface BDEF. Optionally, an alias name `AliasName` can be specified using the addition `as`. The reused alternative key can then be used to define a new [key function](ABENRAP_KEY_FUNCTION_GLOSRY.html) in a projection BDEF or for accessing an internal table using this alternative key.

[Default values functions](ABENRAP_BO_DEFAULTING_GLOSRY.html) can be reused in a projection BDEF or in an interface BDEF. Both the operation in question and the default values function must be reused separately. For details, see the topic [RAP - `use DefaultValuesFunction`](ABENBDL_USE_DEFAULT_FUNCTION.html).

-   [standard operations](ABENBDL_STANDARD_OPERATIONS.html)
-   [operations for associations](ABENBDL_ASSOCIATION.html)
-   [actions](ABENBDL_ACTION.html)
-   [functions](ABENBDL_FUNCTION.html)
-   [ETag](ABENBDL_ETAG.html)
-   [draft handling](ABENBDL_WITH_DRAFT.html), including [draft actions](ABENBDL_DRAFT_ACTION.html)
-   [events](ABENBDL_EVENT.html)
-   [side effects](ABENBDL_SIDE_EFFECTS.html)
-   [BDEF alternative keys](ABENBDL_DEFINE_KEY.html)
-   [default values functions](ABENBDL_DEFAULT_FUNCTION.html)

-   [`precheck`](ABENBDL_PRECHECK.html)
-   [`augment`](ABENBDL_AUGMENT_PROJECTION.html)

-   Development guide for the ABAP RESTful Application Programming Model, section [Projection Behavior Definition](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/75a43d0b332a45d2a90371290488a26a?version=sap_cross_product_abap)

-   [`augment`](ABENBDL_AUGMENT_PROJECTION.html)
-   [`precheck`](ABENBDL_PRECHECK.html)

-   [`augment`](ABENBDL_AUGMENT_PROJECTION.html)
-   [`precheck`](ABENBDL_PRECHECK.html)

-   [`precheck`](ABENBDL_PRECHECK.html)

-   [`augment`](ABENBDL_AUGMENT_PROJECTION.html)
-   [`precheck`](ABENBDL_PRECHECK.html)

-   [`precheck`](ABENBDL_PRECHECK.html): A precheck can newly be added in the projection layer. An implementation in an ABAP behavior pool is required.
-   [`RedefinedParameter`](ABENBDL_REDEFINE_PARAM.html): The input or the output parameter of an action can be redefined in a projection or interface BDEF. For details, see [RAP - `RedefinedParameter`](ABENBDL_REDEFINE_PARAM.html).
-   `result entity`: If the base BDEF specifies an output parameter entity [`OutputParameter`](ABENBDL_ACTION_OUTPUT_PARA.html) using the keyword `result entity`, the projection BDEF must specify the projection of the result entity with the syntax `result entity ProjResultEntity`. Otherwise, it may happen that the action is no longer exposed if the result entity is not included in the service.
-   `as`: An action can be given a new [alias name](ABENALIAS_GLOSRY.html) in the projection layer using the keyword `as`.
-   [`external`](ABENBDL_EXTERNAL.html): A new alias name for external usage in OData can be provided in the projection layer. This external name can be much longer than the alias name in ABAP and needs to be used when defining the corresponding UI annotations.
-   `result external`: A new alias name for the result entity can be provided in the projection layer. This new name is exposed in the OData metadata.

-   [`RedefinedParameter`](ABENBDL_REDEFINE_PARAM.html): The input or the output parameter of a function can be redefined in a projection or interface BDEF. For details, see [RAP - `RedefinedParameter`](ABENBDL_REDEFINE_PARAM.html).
-   `result entity`: If the base BDEF specifies an output parameter entity [`OutputParameter`](ABENBDL_ACTION_OUTPUT_PARA.html) using the keyword `result entity`, the projection BDEF must specify the projection of the result entity with the syntax `result entity ProjResultEntity`. Otherwise, it may happen that the function is no longer exposed if the result entity is not included in the service.
-   `as`: A function can be given a new [alias name](ABENALIAS_GLOSRY.html) in the projection layer using the keyword `as`.
-   [`external`](ABENBDL_EXTERNAL.html): A new alias name for external usage in OData can be provided in the projection layer. This external name can be much longer than the alias name in ABAP and needs to be used when defining the corresponding UI annotations.
-   `result external`: A new alias name for the result entity can be provided in the projection layer. This new name is exposed in the OData metadata.

-   Reuse is possible in interface and projection BDEFs.
-   As a prerequisite for reusing a key function, the [alternative key](ABENRAP_ALTERNATIVE_KEY_GLOSRY.html) it refers to must be reused using the syntax `use key KeyName`.
-   Key functions are reused using the syntax `use function Name`. An alias name can be defined using `as` and an external name can be defined using `external`. No other additions are possible.

-   It creates two new draft instances of the parent entity and two new draft instances of the child entity and displays the content of the draft tables.
-   Then it activates the draft entities using the draft action `Activate`. The content of the draft tables is written to the [persistent tables](ABENRAP_PERSISTENT_TABLE_GLOSRY.html) and the draft tables are emptied.

-   [`RedefinedParameter`](ABENBDL_REDEFINE_PARAM.html): The input parameter of an event can be redefined in the interface BDEF. For details, see [RAP - `RedefinedParameter`](ABENBDL_REDEFINE_PARAM.html).
-   The optional addition `as` can be used to assign an [alias name](ABENALIAS_GLOSRY.html) to the business event in question.

projection;\\nstrict(2);\\n\\ndefine behavior for DEMO\_RAP\_PROJECTION\_CRUD\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\n use association \_BuPa \\{ create; \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_PROJ\_CRUD\_CHILD\\n\\{\\n use update;\\n use delete;\\n\\n use association \_Address;\\n\\} projection;\\nstrict(2);\\n\\ndefine behavior for DEMO\_RAP\_PROJ\_ACTION\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\n use action Approve\_Order as Approve;\\n\\n use action Reject\_Order as Reject;\\n\\} projection;\\nstrict(2);\\n\\ndefine behavior for DEMO\_RAP\_PROJ\_FUNCTION\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\n use function getDetails;\\n use function calculateTotal;\\n use function calculateDiscount;\\n\\} projection;\\nstrict(2);\\nuse draft;\\n\\ndefine behavior for DEMO\_RAP\_PROJECTION\_DRAFT\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\n use association \_child \\{ create; with draft; \\}\\n\\n use action Edit;\\n use action Activate;\\n use action Discard;\\n use action Prepare;\\n use action Resume;\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_PROJECTION\_DRAFT\_CHIL\\n\\{\\n use update;\\n\\n use association \_parent \\{ with draft; \\}\\n\\} interface;\\nuse draft;\\nuse side effects;\\n\\ndefine behavior for DEMO\_RAP\_SIDE\_EFFECTS\_I alias Root\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\n use action MyActionFC;\\n use action MyAction;\\n use action someDetermineAction;\\n\\n use action Edit;\\n use action Activate;\\n use action Discard;\\n use action Resume;\\n use action Prepare;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_projection\_bo.html abenbdl\_define\_beh\_projection.html abenbdl\_body\_projection.html