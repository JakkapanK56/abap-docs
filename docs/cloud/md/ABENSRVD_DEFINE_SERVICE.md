---
title: "ABENSRVD_DEFINE_SERVICE"
description: |
  ABENSRVD_DEFINE_SERVICE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSRVD_DEFINE_SERVICE.htm"
abapFile: "ABENSRVD_DEFINE_SERVICE.html"
keywords: ["select", "if", "method", "class", "ABENSRVD", "DEFINE", "SERVICE"]
---

``[[`@service_annot1`](ABENCDS_DEFINE_SERVICE_ANNOS.html)]\  [[`@service_annot2`](ABENCDS_DEFINE_SERVICE_ANNOS.html)]\    ...  [DEFINE] SERVICE service  [[`PROVIDER CONTRACTS contract`](ABENSRVD_PROVIDER_CONTRACT.html)]\  \{      EXPOSE cds_entity [AS alias];    | EXPOSE METHOD class_name=>method_name AS alias;     ...  \}``

The statement `DEFINE SERVICE` implements a [CDS service definition](ABENCDS_SERVICE_DEFINITION_GLOSRY.html) with the name `service` in [CDS SDL](ABENCDS_SDL_GLOSRY.html). The name `service` is in the same namespace as the [CDS entities](ABENCDS_ENTITY_GLOSRY.html) defined with [CDS DDL](ABENCDS_DDL_GLOSRY.html) and must satisfy the appropriate naming conventions.

The service definition can expose the following objects for a [business service](ABENBUSINESS_SERVICE_GLOSRY.html):

At least one object (CDS entity or AMDP procedure implementation) must be exposed within the curly brackets.

The optional annotations [`@service_annot1`](ABENCDS_DEFINE_SERVICE_ANNOS.html), [`@service_annot2`](ABENCDS_DEFINE_SERVICE_ANNOS.html), ... can be specified in front of the statement `DEFINE SERVICE`.

The optional addition `[PROVIDER CONTRACTS](ABENSRVD_PROVIDER_CONTRACT.html)` can be used to define a provider contract `contract` for the service definition in question. A provider contract defines the scenario for which the service definition in question is intended. It is a prerequisite for releasing the service definition in question under the [C0 release contract for extensibility](ABENC0_CONTRACT_GLOSRY.html).

The following service definition exposes CDS views that are related to each other under their own names by CDS associations.

The following service definition exposes a CDS view under an alias name.

See [Consuming Business Services](ABENCONSUME_BS_ABEXA.html).

-   One or more CDS entities `cds_entity`. Each CDS entity is exposed using its own statement `EXPOSE` within the curly brackets. Each statement must be closed by a semicolon `;`. Possible CDS entities are [CDS views](ABENCDS_VIEW_GLOSRY.html), [CDS abstract entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html), or [CDS custom entities](ABENCDS_CUSTOM_ENTITY_GLOSRY.html). For each CDS entity, the addition `AS` can be used to specify an optional alias name `alias`. The CDS entity is exposed under this alias name and it must be used when the business service is accessed.
-   One or more [AMDP procedure implementations](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html)\\ `method_name`. Each AMDP procedure implementation is exposed after the statement `EXPOSE METHOD`. First, the class name `class_name` is specified, followed by the [class component selector](ABENCLASS_COMPONENT_SELECT_GLOSRY.html)\\ `=>` and the name of the AMDP procedure implementation `method_name`. An alias name `alias` is mandatory. Each statement must be closed by a semicolon `;`.
-   The following prerequisites must be met to expose an AMDP procedure implementation:

-   The service definition must have the [provider contract](ABENCDS_PROVIDER_CONTRACT_GLOSRY.html)\\ [`SQL`](ABENSRVD_PROVIDER_CONTRACT.html).
-   The procedure to be exposed must be specified as [`FOR SQL SERVICE`](ABAPCLASS-METHODS_FOR_SQL_SERVICE.html) in the class declaration part.

-   If a service definition exposes multiple CDS entities, these entities should be related semantically. For example, if a CDS view with CDS associations is exposed in a service definition, it is recommended that the association targets of each CDS association are exposed as well. Together with the [root entity](ABENROOT_ENTITY_GLOSRY.html) of a [RAP business object](ABENRAP_BO_GLOSRY.html) all other CDS entities of the [composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) should also be exposed. However, there is no syntax check to verify the relationship between the exposed entities.
-   If a service definition is used in a business service, it must be linked with a [RESTful](ABENRESTFUL_GLOSRY.html) protocol using a [service binding](ABENSERVICE_BINDING_GLOSRY.html). The service definition itself, however, is independent of the protocol in question and can be used with different protocols in multiple service bindings.
-   Further restrictions apply to the CDS entities in question when using a service definition in a service binding. For example, the definition must have at least one key field or the cardinalities of the CDS associations must be defined correctly.
-   No service bindings can be defined for service definitions that expose CDS abstract entities.

define service demo\_sd\_assoc\_scarr\_spfli \\{\\n expose demo\_cds\_assoc\_scarr;\\n expose demo\_cds\_assoc\_spfli;\\n expose demo\_cds\_sflight;\\n expose demo\_cds\_sairport;\\n\\} @EndUserText.label: 'Expose demo\_cds\_cross\_join'\\ndefine service DEMO\_SD\_CROSS\_JOIN \\{\\n expose demo\_cds\_cross\_join as demo\_t000\_t100;\\n\\} abenabap.html abencds.html abencds\_service\_definitions.html abencds\_f1\_sdl\_syntax.html