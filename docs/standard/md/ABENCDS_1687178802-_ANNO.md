---
title: "ABENCDS_1687178802-_ANNO"
description: |
  ABENCDS_1687178802-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1687178802-_ANNO.htm"
abapFile: "ABENCDS_1687178802-_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "1687178802", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

It is advisable to use the annotation `AbapCatalog.compiler.compareFilter` with the value `true`. ADT suggests this when a new CDS view is created.

Example for the annotation `AbapCatalog.compiler.compareFilter`.

The following image shows the SQL statement that is generated on the database when the annotation `AbapCatalog.compiler.compareFilter` is set to `true`. Only one join expression is generated:

The following image shows the SQL statement that is generated on the database when the annotation `AbapCatalog.compiler.compareFilter` is set to `false`. Two join expressions are generated:

Technical settings of a CDS entity.

Influences the compilation of a CDS object.

Defines the evaluation of filter conditions in path expressions of a CDS view.

`true`: The filter conditions of CDS associations occurring more than once in path expressions are compared and, if they match, the associated join expression is created only once.

`false`: For each CDS association with a filter condition, a separate join expression is created and evaluated.

If the annotation is not specified, the value `false` is used.

@AbapCatalog.sqlViewName: 'DEMO\_COMP\_FILTER'\\n\\n// false = 2 joins; true = 1 join\\n@AbapCatalog.compiler.compareFilter: true\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view, compare filter annotation'\\ndefine view DEMO\_CDS\_COMPARE\_FILTER\_V1\\n as select from sflight as main\\n association to scarr as \_assoc1 \\n on main.carrid = \_assoc1.carrid\\n\\{\\n key carrid,\\n key connid,\\n key fldate,\\n \_assoc1 \[ carrid = 'LH'\].url,\\n \_assoc1 \[ carrid = 'LH'\]. carrname\\n\\}\\n **Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `AbapCatalog.compiler.compareFilter`\\ **Scope** `#VIEW`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_abapcatalog\_a.html