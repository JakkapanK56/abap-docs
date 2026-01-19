---
title: "ABENBDL_SIDE_EFFECTS"
description: |
  ABENBDL_SIDE_EFFECTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_SIDE_EFFECTS.htm"
abapFile: "ABENBDL_SIDE_EFFECTS.html"
keywords: ["update", "delete", "do", "if", "case", "class", "data", "ABENBDL", "SIDE", "EFFECTS"]
---

``side effects \{ field MyField affects [`Targets`](ABENBDL_SIDE_EFFECTS_TARGET.html); \}             | \{ $self affects [`Targets`](ABENBDL_SIDE_EFFECTS_TARGET.html); \}             | \{ action MyAction affects [`Targets`](ABENBDL_SIDE_EFFECTS_TARGET.html); \}             | \{ determine action MyDetermineAction                 executed on Sources                 affects [`Targets`](ABENBDL_SIDE_EFFECTS_TARGET.html); \}             | \{ event MyEvent affects [`Targets`](ABENBDL_SIDE_EFFECTS_TARGET.html); \}``

[1. `... field MyField affects Targets`](#ABAP_VARIANT_1@1@)

[2. `... $self affects Targets`](#ABAP_VARIANT_2@1@)

[3. `... action MyAction affects Targets`](#ABAP_VARIANT_3@1@)

[4. `... determine action MyDetermineAction ...`](#ABAP_VARIANT_4@1@)

[5. ``... event `MyEvent` affects Targets``](#ABAP_VARIANT_5@1@)

Defines [RAP side effects](ABENRAP_SIDE_EFFECTS_GLOSRY.html) in the [entity behavior body](ABENCDS_ENTITY_BODY_GLOSRY.html) of a RAP BO. RAP side effects are an optional part of a RAP behavior definition that define interdependencies among BO properties that trigger a reload of the affected properties on the user interface. Side effects are translated into annotations in the OData metadata of a RAP service. An implementation in an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is not required.

The following trigger properties are possible:

The RAP BO properties that can be specified as target [`Targets`](ABENBDL_SIDE_EFFECTS_TARGET.html) of a side effect are described in the topic [RAP - `side effect`, `Targets`](ABENBDL_SIDE_EFFECTS_TARGET.html).

The syntax `side effects` can be specified exactly once for each RAP BO entity in the [entity behavior definition](ABENCDS_ENTITY_BDEF_GLOSRY.html). Multiple side effects can be summarized within curly brackets, separated by a semicolon (`;`), if required.

[Static](ABENRAP_STATIC_OPERATION_GLOSRY.html) actions defined using the addition [`static`](ABENBDL_ACTION.html) must not be used as a side effect trigger, nor as a side effect target.

RAP side effects are useful in UI scenarios based on draft-enabled RAP BOs to make a Fiori Elements UI aware that data changes of defined fields require the recalculation of other data values, permissions, or messages. In these cases, side effects contribute to data consistency on the UI.

Development guide for the ABAP RESTful Application Programming Model, section [*Side Effects*](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/b30b48c58ed94ff786980ab9aa18882f?version=sap_cross_product_abap).

The following example shows a managed BDEF that defines five different side effects with different trigger properties and targets. They are summarized in curly brackets after the statement `side effects`.

Defines a side effect for the field `MyField`. Whenever the field `MyField` is changed on the user interface, the side effect is triggered and the defined targets [`Targets`](ABENBDL_SIDE_EFFECTS_TARGET.html) are reloaded. Exactly one field must be specified as trigger property. Multiple properties `Targets` can be specified after the syntax `affects`.

Defines a side effect for the current RAP BO entity. Whenever the current RAP BO entity is modified using a CUD operation, the side effect is triggered and the defined targets [`Targets`](ABENBDL_SIDE_EFFECTS_TARGET.html) are reloaded. Multiple properties `Targets` can be specified after the syntax `affects`.

**Limitation:** In case of the trigger property `$self`, the following limitations apply to the targets that can be specified:

Defines a side effect for the action `MyAction`. Whenever the action `MyAction` is executed on the user interface, the side effect is triggered and the defined targets [`Targets`](ABENBDL_SIDE_EFFECTS_TARGET.html) are reloaded. Exactly one action must be specified as trigger property. Multiple properties `Targets` can be specified after the syntax `affects`.

Defines a side effect that triggers the determine action `MyDetermineAction`. Whenever one of the defined sources `Sources` is changed, the determine action is executed and the defined targets [`Targets`](ABENBDL_SIDE_EFFECTS_TARGET.html) are reloaded.

One or more sources `Sources` can be specified after the syntax `executed on`. The following BO properties can be used as sources `Sources`:

It is possible to group multiple sources `Sources` using parentheses. For example, the following groupings are possible:

Multiple properties `Targets` can be specified after the syntax `affects`.

Defines a [business event for side effects](ABENRAP_SIDE_EFFCT_EVENT_GLOSRY.html) event `MyEvent` for a [event-driven side effect](ABENRAP_EVENT_SIDEEF_GLOSRY.html). Whenever the defined event `MyEvent` is raised by the application server, a side effect is triggered and the defined targets [`Targets`](ABENBDL_SIDE_EFFECTS_TARGET.html) are reloaded. Exactly one event must be specified as trigger property. Multiple properties `Targets` can be specified after the syntax `affects`. For more information on event-driven side effect, see the development guide for the ABAP RESTful Application Programming Model, section [Event-Driven Side Effect](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/35e99dd3b0694d1ebbac3c865dd72d3a?version=sap_cross_product_abap).

-   Field `field MyField` as trigger
-   Whenever a defined field is changed on the user interface, the side effect is triggered and the defined targets [`Targets`](ABENBDL_SIDE_EFFECTS_TARGET.html) are reloaded.
-   `$self`
-   Whenever the current [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) is modified using a [CUD operation](ABENCUD_GLOSRY.html), the side effect is triggered and the defined targets [`Targets`](ABENBDL_SIDE_EFFECTS_TARGET.html) are reloaded.
-   Action `action MyAction` as trigger
-   Whenever the action is executed on the user interface, the side effect is triggered and the defined targets [`Targets`](ABENBDL_SIDE_EFFECTS_TARGET.html) are reloaded.
-   Side effect that triggers a determine action `determine action MyDetermineAction`
-   Whenever the defined source `Sources` is changed, the determine action is triggered and the defined targets[](ABENBDL_SIDE_EFFECTS_TARGET.html)
-   Event `event MyEvent` as trigger
-   Whenever a defined event is changed on the user interface, the side effect is triggered and the defined targets [`Targets`](ABENBDL_SIDE_EFFECTS_TARGET.html) are reloaded.

-   [Managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BOs](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   [Projection BDEFs](ABENCDS_PROJ_BDEF_GLOSRY.html)
-   In a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html) and in a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html), side effects from the [base BO](ABENRAP_PROJECTED_BO_GLOSRY.html) can be reused. For details on reuse, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).
-   **Note** In projection BDEFs, RAP side effects from the base BDEF can be reused or new side effects can be defined. In an interface BDEF, on the other hand, only reuse is possible.

-   No fields of the current entity `$self` can be specified. However, fields from associated entities can be defined using path expressions.
-   The current entity `$self` cannot be specified as target.

-   `field MyField`:

-   The determine action is triggered whenever the field `MyField` is changed. You can specify one or more fields as the trigger for a determine action.
-   **Note** By using more than one field as source for the determine action side effect, the fields are implicitly considered as a field group. The side effect is only triggered if the cursor is set outside of the group of source fields after changing at least one of them.
-   You can also use fields from other entity instances as sources. They must be defined via an association path: `_assoc.MyField`.

-   `$self`:

-   The determine action is triggered whenever anything on its own entity instance is changed (such as fields, create child, delete child).

-   `entity _Assoc`:

-   The determine action is triggered whenever anything on the specified entity `_Assoc` is changed (fields, create, delete).

-   `... executed on field(Field1, Field2) ...`
-   `... executed on field _Assoc.(Field1, Field2) ...`
-   `... executed on entity (_Assoc1, _Assoc2) ...`
-   `... executed on entity _Assoc1.(_ItemAssoc1, _ItemAssoc2) ...`

managed implementation in class bp\_demo\_rap\_side\_effects unique;\\nstrict ( 2 );\\nwith draft;\\n\\ndefine behavior for DEMO\_RAP\_SIDE\_EFFECTS alias Root\\npersistent table demo\_dbtab\_root\\ndraft table demo\_dbtab\_dr1\\nlock master\\ntotal etag lchg\_date\_time\\nauthorization master ( global )\\n\\{\\n create;\\n update;\\n delete;\\n\\n field ( readonly : update ) key\_field;\\n field ( readonly ) lchg\_date\_time;\\n field(features:instance) crea\_date\_time;\\n\\n action(features:instance) MyActionFC;\\n\\n action MyAction;\\n\\n determine action someDetermineAction;\\n\\n draft action ( features : instance ) Edit;\\n draft action Activate optimized;\\n draft action Discard;\\n draft action Resume;\\n draft determine action Prepare;\\n\\n side effects \\{\\n\\n // Side effect with single source property\\n field char\_field affects field char\_field\_2;\\n\\n // Side effect with multiple source properties and trigger action\\n determine action someDetermineAction\\n // trigger field group\\n executed on field dec\_field,\\n field char\_field,\\n field \_Assoc.data\_field\\n affects field data\_field;\\n\\n // Side effect that triggers the reload of feature control\\n field data\_field affects permissions(field crea\_date\_time);\\n\\n // Side effect on an action with operation control and messages\\n action MyActionFC affects field \*,\\n permissions(action MyActionFC),\\n messages;\\n\\n // Side effect for refreshing data of an entity\\n action MyAction affects field char\_field, entity \_Assoc;\\n\\n \\}\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html