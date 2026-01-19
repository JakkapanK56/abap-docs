---
title: "ABENBDL_RAP_BO_INTERFACE"
description: |
  ABENBDL_RAP_BO_INTERFACE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_RAP_BO_INTERFACE.htm"
abapFile: "ABENBDL_RAP_BO_INTERFACE.html"
keywords: ["do", "if", "class", "data", "ABENBDL", "RAP", "INTERFACE"]
---

A [RAP interface behavior definition](ABENCDS_INTERFACE_BDEF_GLOSRY.html) is created using the behavior definition language [RAP BDL](ABENCDS_DDL_GLOSRY.html) in [BDL source code](ABENBDL_SOURCE_CODE_GLOSRY.html).

A [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html) is a RAP business object that serves as interface for stable consumption. It is typically released as [released API](ABENRELEASED_API_GLOSRY.html) under the [C1 contract](ABENC1_CONTRACT_GLOSRY.html). It might also be released under the [C0 contract](ABENC0_CONTRACT_GLOSRY.html) for extensibility. A RAP BO interface consists of a [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html) and a RAP interface behavior definition. It does not have a runtime handler and cannot specify an implementation class for [ABAP behavior implementation](ABENBEHAVIOR_IMPLEMENT_GLOSRY.html). Instead, it reuses or inherits the behavior and characteristics of the underlying base BO. Each RAP BO can have multiple interfaces.

RAP BO interfaces can only be consumed with [ABAP EML](ABENABAP_EML_GLOSRY.html). It is not possible to expose a RAP BO interface directly as [RAP business service](ABENBUSINESS_SERVICE_GLOSRY.html).

The following image shows the role of RAP interface behavior definitions in a CDS data model.

A RAP interface behavior definition must always be based on a [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html) and it defines the behavior that is included in the interface. Another projection layer ([CDS transactional query](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html) and [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html)) can be built on top of a RAP BO interface.

Development guide for the ABAP RESTful Application Programming Model, topic [Business Object Interface](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/7caa146ddc4b4f24a58efd33f0f789b4?version=sap_cross_product_abap).

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html