---
title: "ABENCDS_128703388_ANNO"
description: |
  ABENCDS_128703388_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_128703388_ANNO.htm"
abapFile: "ABENCDS_128703388_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "128703388", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

In the following CDS view, data aging is disabled for the database table `DAAG_SFLIGHT` using the annotation`@DataAging.noAgingRestriction:true`.

When this view is accessed using ABAP SQL, both old and current data is read.

To avoid loading all partitions, a filter dependency rule can be defined as follows. Here, the assumption is made that the temperature column `_DATAAGING` for outdated data has the same value as the column `FLDATE`.

The SAP HANA database then adds the following additional selection condition to the `WHERE` condition of the shown `SELECT` statement implicitly:

This does not modify the result set of the query.

Defines data aging for the CDS object.

Defines how data aging is respected on the SAP HANA database when the CDS object is accessed using ABAP SQL.

`true`: ABAP SQL reads all data

`false`: ABAP SQL reads current data only

If the annotation is not specified, the value `false` is used.

@DataAging.noAgingRestriction:true\\n@EndUserText.label: 'hallo'\\n\\ndefine view entity DEMO\_CDS\_DAAG\_SFLIGHT\\n as select from daag\_sflight\\n\\{\\n key carrid,\\n key connid,\\n key fldate,\\n planetype\\n\\}\\n SELECT \* \\n FROM demo\_cds\_daag\_sflight \\n WHERE fldate >= '20160101' \\n INTO TABLE @FINAL(result). DEFINE FILTER DEPENDENCY RULE demo\_daag\_sflight\_rule \\n ON daag\_sflight \\n IF \\{ daag\_sflight.fldate >= $1 \\} \\n THEN \\{ daag\_sflight.\_dataaging >= $1 OR \\n daag\_sflight.\_dataaging = '00000000' \\} AND daag\_sflight~\_dataaging >= '20160101' \\n OR daag\_sflight~\_dataaging = '00000000' **Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `DataAging.noAgingRestriction`\\ **Scope** `#TABLE_FUNCTION`, `#VIEW`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_dataaging\_a.html