---
title: "ABENDDIC_DATABASE_TABLES_MAINT"
description: |
  ABENDDIC_DATABASE_TABLES_MAINT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_DATABASE_TABLES_MAINT.htm"
abapFile: "ABENDDIC_DATABASE_TABLES_MAINT.html"
keywords: ["data", "ABENDDIC", "DATABASE", "TABLES", "MAINT"]
---

It is possible to define whether DDIC database tables can be displayed or maintained using certain tools such as [Data Browser](ABENDATA_BROWSER_GLOSRY.html) (transaction `SE16` ) and Table View Maintenance (transactions `SM30` and `SM31`) or Data Preview in [ADT](ABENADT_GLOSRY.html).

The following settings are possible:

The current user must have all required authorizations to use these tools.

-   **Display/maintenance not allowed**

-   Tables cannot be displayed or maintained using Data Browser (transaction `SE16`) or using Data Preview in ADT.
-   No maintenance dialogs can be created using transaction `SE54`, which means that transactions `SM30` and `SM31` cannot be used.

-   **Display/maintenance allowed with restrictions**

-   Tables can be displayed but not maintained using Data Browser (transaction `SE16`) or using Data Preview in ADT.
-   Maintenance dialogs can be created using transaction `SE54`.
-   Tables cannot be displayed and maintained with transactions `SM30` and `SM31`. Maintenance dialogs can, however, be used in View Cluster Maintenance (transaction `SM34`).

-   **Display/maintenance allowed**

-   Tables can be displayed and maintained using Data Browser (transaction `SE16`) or using Data Preview in ADT.
-   Maintenance dialogs can be created using transaction `SE54`.
-   Tables can be displayed and maintained using transactions `SM30` and `SM31`. Maintenance dialogs can be used in View Cluster Maintenance (transaction `SM34`).

-   **Only display allowed**

-   Tables can be displayed but not maintained using Data Browser (transaction `SE16`) or using Data Preview in ADT.
-   Maintenance dialogs can be created using transaction `SE54` but cannot be used in View Cluster Maintenance (transaction `SM34`).
-   Tables cannot be displayed and maintained with transactions `SM30` and `SM31`.

abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_database\_tables\_sema.html abenddic\_database\_tables\_semasspec.html