---
title: "No KTD found"
description: |
  An initial load of data from ABAP CDS views using the SQL Service is possible without any additional settings. The main purpose of the DataIntegration annotation is to notify the system that a CDS view should be enabled for delta replication. The system could determine this information using the CDS
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1249954665_ANNO.htm"
abapFile: "ABENCDS_1249954665_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "1249954665", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

No KTD found

An initial load of data from ABAP CDS views using the SQL Service is possible without any additional settings. The main purpose of the DataIntegration annotation is to notify the system that a CDS view should be enabled for delta replication. The system could determine this information using the CDS view metadata, but accessing metadata such as catalogue services takes a considerable amount of time.

A CDS view can be enabled for delta replication if it is based on a single table, the so-called main table, plus additional tables joined via LEFT OUTER TO ONE JOIN. Inner joins can be used, but only if the set of key fields of the joined table is a subset of the set of key fields of the main table. The key field of the CDS view and the key field of the main table must match.

Some views join transactional data with customizing data. Both transactional and customizing data are stored in database tables. The annotation DataIntegration.deltaReplication.ignoredDataSources removes the specified tables from delta calculation.

The annotation DataIntegration.deltaReplication.ignoredDataSources can only be used if the annotation DataIntegration.deltaReplication.intended is set to true. The specified tables must be part of the definition of the CDS view or underlying CDS views.

In the following example, the annotation is used to ignore a customizing table that not relevant for the replication of delta data.

@DataIntegration. deltaReplication:\\n\\{ intended: true,\\n ignoredDataSources: \[ 'TCURC' \]\\n\\}\\n@EndUserText.label: 'Carrier with currency ISO code'\\ndefine view entity zsb\_carrid as select from scarr\\n left outer to one join tcurc on tcurc.waers = scarr.currcode\\n\\{\\n key scarr.carrid as Carrid,\\n scarr.carrname as Carrname,\\n scarr.currcode as Currcode,\\n tcurc.isocd as CurrISOCode,\\n scarr.url as Url\\n\\} **Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `DataIntegration.deltaReplication.ignoredDataSources[]`\\ **Scope** `#ENTITY`\\ **Type** `String(30)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_dataintegration\_f.html