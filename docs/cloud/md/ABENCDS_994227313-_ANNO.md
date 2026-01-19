---
title: "No KTD found"
description: |
  An initial load of data from ABAP CDS views using the SQL Service is possible without any additional settings. The main purpose of the DataIntegration annotation is to notify the system that a CDS view should be enabled for delta replication. The system could determine this information using the CDS
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_994227313-_ANNO.htm"
abapFile: "ABENCDS_994227313-_ANNO.html"
keywords: ["select", "do", "if", "try", "data", "ABENCDS", "994227313", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

No KTD found

An initial load of data from ABAP CDS views using the SQL Service is possible without any additional settings. The main purpose of the DataIntegration annotation is to notify the system that a CDS view should be enabled for delta replication. The system could determine this information using the CDS view metadata, but accessing metadata such as catalogue services takes a considerable amount of time.

A CDS view can be enabled for delta replication if it is based on a single table, the so-called main table, plus additional tables joined via LEFT OUTER TO ONE JOIN. Inner joins can be used, but only if the set of key fields of the joined table is a subset of the set of key fields of the main table. The key field of the CDS view and the key field of the main table must match.

The annotation DataIntegration.deltaReplication.intended enables delta replication of CDS views by means of SQL Service Definitions and SQL Service Bindings.

The annotation DataIntegration.deltaReplication.intended describes only the intention of the author of the CDS view. You need to ensure that the CDS view is suitable for delta replication.

Delta replication is supported if the CDS view selects data from one table and from additional fields of tables which are added using LEFT OUTER TO ONE JOIN or equivalent joins. The key of the CDS view must be identical to the key of the main table, thus fields may be renamed.

Delta replication is not supported if the CDS view contains the following features:

\- UNION

\- GROUP BY

\- ABAP Managed Database Procedures (AMBP)

\- Joins with non-key fields in right part of the ON condition

\- INNER JOIN if the join cannot be interpreted as composition relation, i.e., The ON condition of the join contains only key fields of both join partners

\- Complex WHERE conditions, because WHERE conditions typically convert a LEFT OUTER JOIN to an INNER JOIN

\- CDS views that cannot be enabled for delta replications, in the FROM clause (view on view)

The following is an example of a simple CDS view based on one table.

The following example outlines source code of a CDS view that is based on two tables that use the annotation. As a foreign key relationship exists between tables SCARR and SPFLI, the INNER JOIN will be accepted.

@DataIntegration.deltaReplication.intended: true\\n@EndUserText.label: 'Carrier'\\ndefine view entity zsb\_carrid as select from scarr\\n\\{\\n key carrid as Carrid,\\n carrname as Carrname,\\n currcode as Currcode,\\n url as Url\\n\\} @DataIntegration.deltaReplication.intended: true\\n@EndUserText.label: 'Connections'\\ndefine view entity zsb\_ConnID as select from spfli as co\\ninner join scarr as ca on ca.carrid = co.carrid\\n\\{\\n key co.carrid as Carrid,\\n key co.connid as Connid,\\n ca.carrname as Carrname,\\n ca.currcode as Currcode,\\n co.countryfr as Countryfr,\\n co.cityfrom as Cityfrom,\\n co.airpfrom as Airpfrom,\\n co.countryto as Countryto,\\n co.cityto as Cityto,\\n co.airpto as Airpto,\\n co.fltime as Fltime,\\n co.deptime as Deptime,\\n co.arrtime as Arrtime,\\n co.distance as Distance,\\n co.distid as Distid,\\n co.fltype as Fltype,\\n co.period as Period\\n\\} **Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `DataIntegration.deltaReplication.intended`\\ **Scope** `#VIEW`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`