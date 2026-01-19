---
title: "Runtime"
description: |
  To support the decision on cache strategies for higher layers and to enable client-side statement routing using these caches, the data class is used. The different data classes correspond to different life time cycles. The annotation dataClass has the following values: The view contains data which i
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1091668137-_ANNO.htm"
abapFile: "ABENCDS_1091668137-_ANNO.html"
keywords: ["do", "if", "class", "data", "ABENCDS", "1091668137", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

ObjectModel annotations provide definitions of text-related aspects of the CDS-based data model.

Defines properties of the data delivered by CDS object.

Runtime

To support the decision on cache strategies for higher layers and to enable client-side statement routing using these caches, the data class is used. The different data classes correspond to different life time cycles. The annotation dataClass has the following values:

The view contains data which is written or changed in high volume transactions (also for background processing). Examples are header and items for Sales Order processing or Financial Postings.

Master data is read but not written or changed in high volume transactions (also for background processing). It typically drives the business process decisions when business logic is executed. It is also shown to the user as context information and to enable user decisions when these transactions are executed manually. Examples are material, business partner or account.

The data describes the organizational structure of a company and its business processes. It can be seen as a special type of master data. This data is only written or changed when organization changes are implemented at the customer. Examples are sales unit, distribution channel and cost center.

The data describes how a concrete business process is executed at the customer. It consists typically of content delivered by SAP enriched and extended by the customer. This data is typically even less common changed. Examples are countries, unit of measures, currency.

Meta data specifies how the system is configured or describes the technical structure of entities. Typically this is part of shipped content. Changes are done in fixes or upgrades. Examples are DDIC structures, field control, authorization objects.

This option is chosen if the CDS view contains data of multiple data classes.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `ObjectModel.usageType.dataClass`\\ **Scope** `#ENTITY`, `#TABLE_FUNCTION`\\ **Type** `String(30)`\\ **Enums** `#CUSTOMIZING, #MASTER, #META, #MIXED, #ORGANIZATIONAL, #TRANSACTIONAL`\\ **Default** `#MIXED`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`