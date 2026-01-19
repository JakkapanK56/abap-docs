---
title: "ABENNEWS-753-DDIC"
description: |
  ABENNEWS-753-DDIC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-753-DDIC.htm"
abapFile: "ABENNEWS-753-DDIC.html"
keywords: ["if", "data", "ABENNEWS", "753", "DDIC"]
---

[1\. Expanded Limits](#ABAP_MODIFICATION_1@4@)

The following limits now apply to the number of fields and the length of the structure of a [database table](ABENDATABASE_TABLE_GLOSRY.html), of a [database view](ABENDATABASE_VIEW_GLOSRY.html), and of a [CDS view](ABENCDS_VIEW_GLOSRY.html):

-   Database tables

-   A database table that is not part of the software component `SAP_BASIS` can now contain 1000 fields for the storage type Row Store and 1500 fields for the storage type Column Store. The total of all field lengths is no longer checked in ABAP Dictionary with regard to database limits.
-   **Note** The size limit for [structures in ABAP](ABENDATA_OBJECTS_STRUCTURE.html) is still checked by ABAP Dictionary.
-   A database table that is part of the software component `SAP_BASIS` can contain a maximum of 749 fields (as before) and the total of the field lengths in ABAP Dictionary is still restricted to 4030.

-   Database views and CDS views

-   A view that is not part of the software component `SAP_BASIS` can contain 1500 view fields. The total of all field lengths is no longer checked in ABAP Dictionary.
-   A view that is part of the software component `SAP_BASIS` can contain a maximum of 749 fields (as before) and the total of the field lengths in ABAP Dictionary is still restricted to 4096.

abenabap.html abennews.html abennews-75.html abennews-753.html