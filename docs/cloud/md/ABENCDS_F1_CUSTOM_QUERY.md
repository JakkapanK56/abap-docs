---
title: "ABENCDS_F1_CUSTOM_QUERY"
description: |
  ABENCDS_F1_CUSTOM_QUERY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_CUSTOM_QUERY.htm"
abapFile: "ABENCDS_F1_CUSTOM_QUERY.html"
keywords: ["do", "while", "if", "class", "data", "internal-table", "ABENCDS", "CUSTOM", "QUERY"]
---

``... [`@ObjectModel.query.implementedBy : 'ABAP:class_name'`](ABENCDS_F1_ENTITY_ANNOTATIONS.html) ...``

The annotation [`@ObjectModel.query.implementedBy`](ABENCDS_F1_ENTITY_ANNOTATIONS.html) binds an ABAP class `class_name` as a query provider class to a [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html). When a CDS custom query is accessed via a framework, such as the [RAP query engine](ABENRAP_QUERY_ENGINE_GLOSRY.html), the annotation is evaluated and the ABAP implementation is called to perform the query. The ABAP class must implement the predefined ABAP interface `IF_RAP_QUERY_PROVIDER` to connect it to the [RAP query engine](ABENRAP_QUERY_ENGINE_GLOSRY.html).

In the context of the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html), CDS custom queries are referred to as [RAP unmanaged queries](ABENRAP_UNMANGED_QUERY_GLOSRY.html).

For more information, see the ABAP RESTful Application Programming Model Developer guide, section [Implementing an Unmanaged Query](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/254f68c7d5374e94a88241b7ce3bd414?version=sap_cross_product_abap).

The annotation `ObjectModel.query.implementedBy` is mandatory for CDS custom entities when working in [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html).

While the annotation `ObjectModel.query.implementedBy` must be used for CDS custom entities in order to bind an ABAP class, it also can be used for other CDS entities. Then it overrides the original query of an CDS entity when accessed by a framework that evaluates the annotation.

The custom entity `DEMO_CDS_CUSTOM_ENTITY` is bound to ABAP class `CL_DEMO_CUSTOM_ENTITY_QUERY`. This ABAP class implements the interface `IF_RAP_QUERY_PROVIDER` and it generates an internal table with random UUID values.

The executable example [Implementing a custom query](ABENCDS_CUSTOM_QUERY_ABEXA.html) executes the query implementation class and returns data.

@EndUserText.label: 'CDS custom entity, query implementation'\\n@ObjectModel.query.implementedBy: 'ABAP:CL\_DEMO\_CUSTOM\_ENTITY\_QUERY'\\ndefine custom entity DEMO\_CDS\_CUSTOM\_ENTITY\\n with parameters\\n p\_number : int1\\n \\{\\n key id : int4;\\n uuid : abap.char(32);\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_custom\_entities.html abencds\_f1\_define\_custom\_entity.html