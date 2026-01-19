---
title: "No KTD found"
description: |
  Specifies whether a placeholder ? or a literal value is passed to the database in an ABAP SQL condition when the client field is compared with a host variable. `true`: The literal value of the host variable is passed. `false`: A placeholder ? is passed. If the annotation is not specified, the value
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_837403882-_ANNO.htm"
abapFile: "ABENCDS_837403882-_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "837403882", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

The annotation `Environment.sql.passValueForClient` is available in [CDS hierarchies](ABENCDS_HIERARCHY_GLOSRY.html), [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), and in [CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html). It is not available in any other CDS entity.

Controls value passing to parameters.

No KTD found

Specifies whether a placeholder ? or a literal value is passed to the database in an ABAP SQL condition when the client field is compared with a host variable.

`true`: The literal value of the host variable is passed.

`false`: A placeholder ? is passed.

If the annotation is not specified, the value `false` is used.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `Environment.sql.passValueForClient`\\ **Scope** `#ENTITY`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `NOT_RELEASED` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_environment\_a.html