---
title: "No KTD found"
description: |
  This annotation represents some mandatory attributes of the data product ORD definition. Defines the type of a data product in the context of S/4HANA. Data product supports the replication API, i.e. the definition of the corresponding service has the 'replication' support. Data product do not provid
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1407986582-_ANNO.htm"
abapFile: "ABENCDS_1407986582-_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "1407986582", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

No KTD found

This annotation represents some mandatory attributes of the data product ORD definition.

Defines the type of a data product in the context of S/4HANA.

Data product supports the replication API, i.e. the definition of the corresponding service has the "replication" support.

Data product do not provide support for data replication. It can offer federation, metadata and additional query APIs.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `DataIntegration.dataProduct.type`\\ **Scope** `#SERVICE`\\ **Type** `String(20)`\\ **Enums** `#BASE, #DERIVED`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`