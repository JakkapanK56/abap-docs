---
title: "ABENCDS_PV_TRANSACTIONAL_QUERY"
description: |
  ABENCDS_PV_TRANSACTIONAL_QUERY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_PV_TRANSACTIONAL_QUERY.htm"
abapFile: "ABENCDS_PV_TRANSACTIONAL_QUERY.html"
keywords: ["do", "while", "if", "data", "ABENCDS", "TRANSACTIONAL", "QUERY"]
---

[CDS transactional queries](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html) are intended for modelling the projection layer of a [RAP business object](ABENRAP_BO_GLOSRY.html). A transactional projection view must always be part of a business object. That means it must either be a [root entity](ABENROOT_ENTITY_GLOSRY.html) itself, or it must be part of a composition tree that contains a root entity. The feature set focuses on specializing the [RAP BO operations](ABENRAP_BO_OPERATION_GLOSRY.html) of the underlying business object. The runtime for transactional queries is mainly the [RAP query engine](ABENRAP_QUERY_ENGINE_GLOSRY.html), but also the [RAP transactional engine](ABENRAP_TRANSAC_ENGINE_GLOSRY.html).

As a global data type, a CDS transactional query represents a structured type with the [elements of the CDS projection view](ABENCDS_PROJ_VIEW_ELEMENT_LIST.html) as components. Usage:

Transactional projection views have evolved from and will in the future replace [consumption views](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/82a882a0d1de41fa949ea7cd186f15c0). Both serve the same purpose, namely, to simplify the access to business objects. While consumption views were used for data modelling in the obsolete [ABAP Programming Model for SAP Fiori](ABENABAP_PM_FOR_FIORI_GLOSRY.html), projection views take over this role in its successor [RAP](ABENARAP_GLOSRY.html).

-   Unlike other CDS entities, CDS transactional queries currently **cannot** be used as data source of other CDS entities.
-   They can be used in ABAP programs as a data type for definitions and in ABAP SQL read statements.

-   Development guide for the ABAP RESTful Application Programming Model, topic [CDS Projection View](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/448c144391764977aefea5e1984ced38?version=sap_cross_product_abap).
-   ABAP Data Models guide, section about [CDS Transactional Queries](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/1c37dbd17b484bf39cbc3fff145539c9?version=sap_cross_product_abap)

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html