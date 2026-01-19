---
title: "Runtime"
description: |
  Specifies the size of the data volume that must be searched to return the result. This usually corresponds to the largest underlying table. A CDS object can be assigned to one size category, specified by an Enum value. If the annotation is not specified, the value `#S` is used. The expected size of
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1163152301_ANNO.htm"
abapFile: "ABENCDS_1163152301_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "1163152301", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

ObjectModel annotations provide definitions of text-related aspects of the CDS-based data model.

Defines properties of the data delivered by CDS object.

Runtime

Specifies the size of the data volume that must be searched to return the result. This usually corresponds to the largest underlying table.

A CDS object can be assigned to one size category, specified by an Enum value.

If the annotation is not specified, the value `#S` is used.

The expected size of the data volume that needs to be searched is less than 1000.

The expected size of the data volume that needs to be searched is less than 100,000.

The expected size of the data volume that needs to be searched is less than 10,000,000.

The expected size of the data volume that needs to be searched is less than 100,000,000.

The expected size of the data volume that needs to be searched is 100,000,000 or greater.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `ObjectModel.usageType.sizeCategory`\\ **Scope** `#ENTITY`, `#TABLE_FUNCTION`\\ **Type** `String(3)`\\ **Enums** `#L, #M, #S, #XL, #XXL`\\ **Default** `#S`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`