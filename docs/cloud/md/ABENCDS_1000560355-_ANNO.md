---
title: "No KTD found"
description: |
  Specifies whether a placeholder ? or a literal value is passed to the database in an ABAP SQL condition when a CDS element or parameter is compared with a host variable. `true`: The literal value of the host variable is passed. `false`: A placeholder ? is passed. If the annotation is not specified,
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1000560355-_ANNO.htm"
abapFile: "ABENCDS_1000560355-_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "1000560355", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Controls value passing to parameters.

No KTD found

Specifies whether a placeholder ? or a literal value is passed to the database in an ABAP SQL condition when a CDS element or parameter is compared with a host variable.

`true`: The literal value of the host variable is passed.

`false`: A placeholder ? is passed.

If the annotation is not specified, the value `false` is used.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `Environment.sql.passValue`\\ **Scope** `#ELEMENT`, `#PARAMETER`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_SAP_CLOUD_PLATFORM`