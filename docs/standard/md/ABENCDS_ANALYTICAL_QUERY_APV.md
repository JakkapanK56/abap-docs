---
title: "ABENCDS_ANALYTICAL_QUERY_APV"
description: |
  ABENCDS_ANALYTICAL_QUERY_APV - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_ANALYTICAL_QUERY_APV.htm"
abapFile: "ABENCDS_ANALYTICAL_QUERY_APV.html"
keywords: ["do", "data", "ABENCDS", "ANALYTICAL", "QUERY", "APV"]
---

[CDS analytical projection views](ABENCDS_ANALYTICAL_PV_GLOSRY.html) are intended for modeling analytical queries within a CDS data model. The [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html) must be an [analytical cube view](ABENCDS_ANALYTICAL_CUBE_GLOSRY.html) or an [analytical dimension view](ABENCDS_ANAL_DIM_VIEW_GLOSRY.html). The feature set is restricted to the capabilities of the runtime of the analytical engine. The runtime for analytical queries are analytical engines, such as [ABAP Analytical Engine](ABENABAP_AE_GLOSRY.html). The protocol for CDS analytical queries is the [Information Access protocol](ABENINA_PROTOCOL_GLOSRY.html) (InA). InA is available as [service binding](ABENCDS_SERVICE_BINDINGS.html) type.

Analytical projection views are [CDS transient entities](ABENCDS_NON_SQL_ENTITY_GLOSRY.html) defined with the keyword [`DEFINE TRANSIENT VIEW ENTITY AS PROJECTION ON`](ABENCDS_DEFINE_VIEW_AS_ANALYTICAL.html). That means that only a runtime object on the ABAP server is generated. No [SQL view](ABENSQL_VIEW_GLOSRY.html) is created on the database. Therefore, an analytical query can be used only by the analytical runtime. An analytical query cannot be used as data source of other CDS entities. Access with [ABAP SQL](ABENABAP_SQL_GLOSRY.html) is not possible.

CDS analytical projection views improve on the previous version of CDS Analytical Queries. They offer advantages such as avoiding the generation of an SQL artefact, reducing the need for annotations, and an improved syntax check. Moreover, they use the new features of CDS view entities, such as [typed literals](ABENCDS_TYPED_LITERAL_V2.html) and [improved amount and quantity handling](ABENCDS_CALC_QUAN.html).

-   Development guide for [ABAP Analytics](https://help.sap.com/docs/ABAP_Cloud/67127c83ae1a4917b6b65ec222416894/4ae5db4d9bfd472ba70613b358dbb16b?version=sap_cross_product_abap).
-   ABAP Data Models guide, section about [CDS analytical queries](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/f7d36ce7db234c69934d40afa3e5b32c?version=sap_cross_product_abap).

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html