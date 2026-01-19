---
title: "ABENBDL_MANAGED_EVENT"
description: |
  ABENBDL_MANAGED_EVENT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_MANAGED_EVENT.htm"
abapFile: "ABENBDL_MANAGED_EVENT.html"
keywords: ["select", "update", "delete", "do", "if", "case", "class", "data", "ABENBDL", "MANAGED", "EVENT"]
---

`managed event DerivedEventName on RefEvent parameter ViewEntityName;`

Defines a [RAP derived event](ABENRAP_DERIVED_EVENT_GLOSRY.html)\\ `DerivedEventName` in a [managed](ABENMANAGED_RAP_BO_GLOSRY.html) or [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html). A derived event is defined with reference to an already implemented event `RefEvent` and allows the definition of a [payload](ABENPAYLOAD_GLOSRY.html) that deviates from the payload of the referenced event. When the referenced event is raised, the derived event is raised as well with its custom payload. No implementation in an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is required for the derived event.

The payload of a managed event is defined using a CDS view entity. By default, the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html) accesses this view entity with [`PRIVILEGED`](ABAPEML_PRIVILEGED.html) access rights. This means that no authorization checks are performed when reading the payload data.

Development guide for the ABAP RESTful Application Programming Model, section about [Derived Events](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/c081abb9243045d098197321213fde29?version=sap_cross_product_abap).

The following example shows an unmanaged BDEF based on the CDS root view entity `DEMO_RAP_DERIVED_EVENT`. It defines the event `MyEvent`.

The following CDS view entity is used as an input parameter of the derived event. Its key fields match the key fields of the root view entity `DEMO_RAP_DERIVED_EVENT`.

The following BDEF extension redefines the event `MyEvent` from the base BDEF. The derived event has the name `MyDerivedEvent`.

-   The name `DerivedEventName` defines the name of the derived event. It must comply with the naming rules for CDS BDL that are described in the topic [RAP BDL - General Syntax Rules](ABENBDL_GENERAL_SYNTAX_RULES.html).
-   After the keyword `ON`, the referenced event `RefEvent` is specified. The referenced event must be an event from the current behavior definition. In case of an extension, the referenced event must be specified in the original BDEF that is currently being extended.
-   An [input parameter](ABENINPUT_PARAMETER_GLOSRY.html)\\ `ViewEntityName` must be defined. It redefines the payload of the event `RefEvent`. The following rules apply:

-   The input parameter `ViewEntityName` must be a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) without any associations.
-   The key fields of the view entity used as the input parameter `ViewEntityName` must match the key fields of the entity the referenced event is defined for.

-   **Note** The input parameter of a derived event is always flat. Deep structures or view entities with associations are not supported.

-   RAP derived events can be defined in [managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html) and in [unmanaged RAP BOs](ABENUNMANAGED_RAP_BO_GLOSRY.html).

unmanaged implementation in class bp\_demo\_rap\_derived\_event unique;\\nstrict ( 2 );\\nextensible;\\n\\ndefine behavior for DEMO\_RAP\_DERIVED\_EVENT\\n\\nlock master\\nauthorization master ( instance, global )\\nextensible\\n\\{\\n create;\\n update;\\n delete;\\n\\n field(readonly:update) keyfield;\\n\\n event MyEvent;\\n\\} @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, demo for derived event'\\ndefine root view entity DEMO\_RAP\_DERIVED\_EVENT\_PARAM\\n as select from demo\_dbtab\_root\\n\\{\\n key key\_field as KeyField,\\n data\_field as DataField\\n\\}\\n extension using interface DEMO\_RAP\_DERIVED\_EVENT\_PV;\\n\\nextend behavior for RootInterface\\n\\{\\n\\n managed event MyDerivedEvent on MyEvent\\n parameter DEMO\_RAP\_DERIVED\_EVENT\_PARAM;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_event\_overview.html