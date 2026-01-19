---
title: "ABENCDS_PV_TRANSACTIONAL_INTERFACE"
description: |
  ABENCDS_PV_TRANSACTIONAL_INTERFACE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_PV_TRANSACTIONAL_INTERFACE.htm"
abapFile: "ABENCDS_PV_TRANSACTIONAL_INTERFACE.html"
keywords: ["do", "data", "ABENCDS", "TRANSACTIONAL", "INTERFACE"]
---

A [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html) is a [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html) that is intended to serve as stable public interface. A CDS transactional interface should be released internally in the system under the [C1 contract](ABENC1_CONTRACT_GLOSRY.html), and it can be released additionally under the [C0 contract](ABENC0_CONTRACT_GLOSRY.html) for extensions. A CDS transactional interface is typically used in the context of the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html) to provide the basis for a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html). The feature set is restricted to projecting elements from the underlying [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html). No new associations, [virtual elements](ABENCDS_VIRTUAL_ELEMENT_GLOSRY.html), or fields can be defined.

As a global data type, a CDS projection view of type transactional interface represents a structured type with the elements of the CDS projection view as components. Usage:

-   CDS transactional interfaces can be used as data source for CDS transactional queries. They cannot be used as data source for any other CDS entity.
-   They can be used in ABAP programs as a data type for definitions and in ABAP SQL read statements.

-   Development guide for the ABAP RESTful Application Programming Model, topic [Business Object Interface](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/7caa146ddc4b4f24a58efd33f0f789b4?version=sap_cross_product_abap).
-   ABAP Data Models guide, section about [CDS transactional interfaces](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/c947d462983e4738a641a6f3a792ac0e?version=sap_cross_product_abap).

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html