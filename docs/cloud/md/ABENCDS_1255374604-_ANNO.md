---
title: "Runtime"
description: |
  Specifies the quality of the service with respect to the performance that can be expected by the consumer of the CDS view entity. A CDS object can be assigned to one quality category, specified by an Enum value. If the annotation is not specified, the value `#X` is used. There are 6 levels of servic
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1255374604-_ANNO.htm"
abapFile: "ABENCDS_1255374604-_ANNO.html"
keywords: ["select", "do", "if", "case", "class", "data", "ABENCDS", "1255374604", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

ObjectModel annotations provide definitions of text-related aspects of the CDS-based data model.

Defines properties of the data delivered by CDS object.

Runtime

Specifies the quality of the service with respect to the performance that can be expected by the consumer of the CDS view entity.

A CDS object can be assigned to one quality category, specified by an Enum value.

If the annotation is not specified, the value `#X` is used.

There are 6 levels of service quality: 'A', 'B', 'C' and 'D' corresponding to decreasing KPIs. 'A' has the highest requirements and 'D' the lowest. There is one additional level 'X' where no KPIs are specified. This level is used as the default. serviceQuality 'P' is reserved for views that are used to structure the view hierarchy and that don't have any consumer outside of the hierarchy.

The CDS object can be used for high volume transactions or for background transactions.

The CDS object can be used for transactions or for background transactions.

The CDS object can be used to query individual objects in transactions.

The CDS object can be used for analytical queries.

The CDS object is designed for special application cases, such as data migration.

The CDS object is used to structure hierarchies of CDS entities and must not be used outside of such a hierarchy.

-   Generally, a CDS object in an application should not access more than 100 DDIC database tables and should have a quality category between A and D.
-   With the above subannotations of `ObjectModel` it can be documented for a object for which kind of application it is intended and which kind of data are to expected. This information is especially important in regards of performance that can be expected by the consumer of the object. For the quality categories annotated with `ObjectModel.usageType.serviceQuality`, the following rules apply:

-   A CDS object with the quality category A should access no more than three DDIC database tables, must not call any functions, must not aggregate a large number of table rows for direct access, and must not access DDIC database tables with mixed data categories. If the underlying tables are buffered, the CDS object should be buffered too. The runtime for reading a single line with a fully specified key must be less than 1 ms for selecting fields from a field list or 2 ms for selecting all fields with `*`.
-   A CDS object with the quality category B should access no more than five DDIC database tables, must not call any functions, must not aggregate a large number of table rows for direct access, and must not access DDIC database tables with mixed data categories. If the underlying tables are buffered, the CDS object should be buffered too. The runtime for reading a single line with a fully specified key must be less than 2 ms for fields from a field list or 5 ms for selecting all fields with `*`.
-   A CDS object with the quality category C should access no more than 15 DDIC database tables, must not aggregate a large number of table rows for direct access, and must not access DDIC database tables with mixed data categories. The runtime for reading a single line with a fully specified key must be less than 10 ms for fields from a field list or 20 ms for selecting all fields with `*`.
-   A CDS object with the quality category D should access no more than 100 DDIC database tables. The performance should be checked and monitored with realistic data by a test framework.
-   A CDS object with the quality category X can access more than 100 database tables. The performance must be checked and monitored with realistic data by a test framework.
-   A CDS object with the quality category P is not intended for usage in business applications. Performance checks by a test framework are not required.
-   For all quality categories, the subannotations `sizeCategory` and `dataClass` should be specified. Only for quality category P, they do not need to be specified.

-   These rules can be checked in the [ABAP Test Cockpit (ATC)](ABENATC_GLOSRY.html) by tests delivered by SAP.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `ObjectModel.usageType.serviceQuality`\\ **Scope** `#ENTITY`, `#TABLE_FUNCTION`\\ **Type** `String(30)`\\ **Enums** `#A, #B, #C, #D, #P, #X`\\ **Default** `#X`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`