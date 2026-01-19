---
title: "ABENNEWS-753-DDIC"
description: |
  ABENNEWS-753-DDIC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-753-DDIC.htm"
abapFile: "ABENNEWS-753-DDIC.html"
keywords: ["select", "if", "data", "ABENNEWS", "753", "DDIC"]
---

[1\. Expanded Limits](#ABAP_MODIFICATION_1@4@)

[2\. Dependency Rules](#ABAP_MODIFICATION_2@4@)

[3\. Pooled Tables and Cluster Tables Obsolete](#ABAP_MODIFICATION_3@4@)

The following limits now apply to the number of fields and the length of the structure of a [database table](ABENDATABASE_TABLE_GLOSRY.html), of a [database view](ABENDATABASE_VIEW_GLOSRY.html), and of a [CDS view](ABENCDS_VIEW_GLOSRY.html):

In ABAP Dictionary, the [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html) can be used to define [dependency rules](ABENDDIC_DEPENDENCY_RULES.html) in the SAP HANA database. A dependency rule makes it possible to derive additional selection conditions from existing conditions when a database table is accessed. In the [data aging](ABENDATA_AGING_GLOSRY.html) concept, for example, dependency rules are used in the [optimization of access to old data](ABENHANA_DATA_AGING_DRULS.html).

All support for [pooled tables](ABENPOOLED_TABLE_GLOSRY.html) and [cluster tables](ABENCLUSTER_TABLE_GLOSRY.html) has been dropped. Any existing pooled tables and cluster tables are transformed to [transparent tables](ABENTRANSPARENT_TABLE_GLOSRY.html). Any existing [table pools](ABENTABLE_POOL_GLOSRY.html) and [table clusters](ABENTABLE_CLUSTER_GLOSRY.html) are removed. All restrictions that applied when accessing pooled tables and cluster tables hence no longer apply.

-   Database tables

-   A database table that is not part of the software component `SAP_BASIS` can now contain 1000 fields for the storage type Row Store and 1500 fields for the storage type Column Store. The total of all field lengths is no longer checked in ABAP Dictionary with regard to database limits.
-   **Note** The size limit for [structures in ABAP](ABENDATA_OBJECTS_STRUCTURE.html) is still checked by ABAP Dictionary.
-   A database table that is part of the software component `SAP_BASIS` can contain a maximum of 749 fields (as before) and the total of the field lengths in ABAP Dictionary is still restricted to 4030.

-   Database views and CDS views

-   A view that is not part of the software component `SAP_BASIS` can contain 1500 view fields. The total of all field lengths is no longer checked in ABAP Dictionary.
-   A view that is part of the software component `SAP_BASIS` can contain a maximum of 749 fields (as before) and the total of the field lengths in ABAP Dictionary is still restricted to 4096.

abenabap.html abennews.html abennews-75.html abennews-753.html