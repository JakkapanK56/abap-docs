---
title: "ABENCDS_1925198989-_ANNO"
description: |
  ABENCDS_1925198989-_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1925198989-_ANNO.htm"
abapFile: "ABENCDS_1925198989-_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "1925198989", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

`AbapCatalog.extensibility.allowNewdataSources` must be set to `false` in CDS view entities. The value `true` is only allowed in CDS projection views.

Technical settings of a CDS entity.

Extensibility settings for CDS objects.

Defines whether a CDS object extension is allowed to use new data sources. More precisely, if a CDS object extension specifies an association, this annotation defines whether the newly defined local association is allowed to be used in path expressions.

`true`: New data sources in extensions allowed.

`false`: New data sources in extensions not allowed.

If the annotation is not specified, the value `false` is used.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `AbapCatalog.extensibility.allowNewDatasources`\\ **Scope** `#VIEW`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_SAP_CLOUD_PLATFORM`