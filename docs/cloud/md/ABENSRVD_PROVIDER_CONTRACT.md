---
title: "ABENSRVD_PROVIDER_CONTRACT"
description: |
  ABENSRVD_PROVIDER_CONTRACT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSRVD_PROVIDER_CONTRACT.htm"
abapFile: "ABENSRVD_PROVIDER_CONTRACT.html"
keywords: ["do", "if", "case", "data", "types", "ABENSRVD", "PROVIDER", "CONTRACT"]
---

`... PROVIDER CONTRACTS INA                       | ODATA_V2_UI                       | ODATA_V4_UI                       | ODATA_V2_WEBAPI                       | ODATA_V4_WEBAPI                       | SQL ...`

[1. `... PROVIDER CONTRACTS INA ...`](#ABAP_VARIANT_1@1@)

[2. `... PROVIDER CONTRACTS ODATA ...`](#ABAP_VARIANT_2@1@)

[3. `... PROVIDER CONTRACTS SQL ...`](#ABAP_VARIANT_3@1@)

A [CDS provider contract](ABENCDS_PROVIDER_CONTRACT_GLOSRY.html) can optionally be specified in a [CDS service definition](ABENCDS_SERVICE_DEFINITION_GLOSRY.html) using the statement `PROVIDER CONTRACTS`. It defines the scenario for which the service definition in question is intended. The effect is that stricter syntax checks are applied. Each type of provider contract has a dedicated set of rules that it must follow.

Exactly one provider contract can be specified in a CDS service definition. Changing the value defined after `PROVIDER CONTRACTS` is possible, even after activation and transport of the respective service definition, as long as the corresponding service binding is not affected.

A provider contract is a prerequisite for releasing a CDS service definition under the [C0 contract, extend](ABENC0_CONTRACT_GLOSRY.html). It enforces strict rules that match the rules of a type of [service binding](ABENSERVICE_BINDING_GLOSRY.html). This ensures stability of [business services](ABENBUSINESS_SERVICE_GLOSRY.html) and prevents service definition extensions from causing errors in the associated service bindings.

The provider contract specified in a CDS service definition and the service binding which is defined for the CDS service definition in question must match. Otherwise, an error occurs.

The following service definition specifies the provider contract `INA` and meets all corresponding requirements.

Switches on syntax checks that are needed if the service definition is published with the [Information Access (InA) protocol](ABENINA_PROTOCOL_GLOSRY.html). When this provider contract is specified, the following additional rules apply:

Switches on syntax checks that are needed if the service definition is bound to the OData protocol. The following provider contracts are related to the OData protocol:

Switches on syntax checks that are needed if the service definition is published with the [SQL services](ABENABAP_SQL_SERVICES_GLOSRY.html) protocol. The same checks are performed as for [service bindings](ABENSERVICE_BINDING_GLOSRY.html) of type SQL. The checks are documented on SAP Help Portal in the Developer Extensibility Guide, topic [Constraints](https://help.sap.com/docs/SAP_S4HANA_CLOUD/6aa39f1ac05441e5a23f484f31e477e7/e5e007357a794a3dad1925ef6acfb6f1).

-   Further details on the different types of service binding protocols are described in the development guide for the ABAP RESTful Application Programming Model, section [*Service Binding*](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/b58a3c27df4e406f9335d4b346f6be04?version=sap_cross_product_abap).

-   The CDS entities exposed must be analytical queries. Two kinds of analytical query are acceptable:

-   Analytical queries with the annotation `@Analytics.query` set to `true`
-   [CDS projection views with the provider contract `analytical_query`](ABENCDS_ANALYTICAL_PV_GLOSRY.html).

-   If the exposed CDS entity is an analytical query with the annotation `@Analytics.query: true`, exactly one entity must be exposed. Otherwise, a syntax check error occurs.
-   If the exposed CDS entity is a CDS projection view with the provider contract `analytical_query`, then multiple entities can be exposed.

-   `ODATA_V2_UI`
-   `ODATA_V4_UI`
-   `ODATA_V2_WEBAPI`
-   `ODATA_V4_WEBAPI`

@EndUserText.label: 'SD with provider contract'\\n@AbapCatalog.extensibility.extensible: true\\ndefine service DEMO\_CDS\_SD\_PROVIDER\_CONTRACT\\n provider contracts ina \\{\\n expose DEMO\_CDS\_ANALYTIC\_CASE;\\n expose DEMO\_CDS\_ANALYTIC\_PARAMETER;\\n\\} abenabap.html abencds.html abencds\_service\_definitions.html abencds\_f1\_sdl\_syntax.html abensrvd\_define\_service.html