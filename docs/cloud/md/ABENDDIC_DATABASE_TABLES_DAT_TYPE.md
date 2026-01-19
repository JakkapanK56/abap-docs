---
title: "ABENDDIC_DATABASE_TABLES_DAT_TYPE"
description: |
  ABENDDIC_DATABASE_TABLES_DAT_TYPE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_DATABASE_TABLES_DAT_TYPE.htm"
abapFile: "ABENDDIC_DATABASE_TABLES_DAT_TYPE.html"
keywords: ["do", "if", "try", "class", "data", "ABENDDIC", "DATABASE", "TABLES", "DAT", "TYPE"]
---

For the database platform Oracle, the data class determines the physical area (tablespace) of the database in which a DDIC database table is created. For other database platforms, the data class does not have any effect and is ignored. The most important data classes for application data are:

There are further data classes for system tables used internally by runtime frameworks, such as SDIC for ABAP Dictionary tables.

-   **APPL0 (master data)**
-   Data that is rarely changed. One example of master data is data in a table of addresses, such as names, postal addresses, and telephone numbers.
-   **APPL1 (transaction data)**
-   Data that is frequently changed. One example of transaction data is warehouse stock that changes each time an order is placed.
-   **APPL2 (organizational data)**
-   Customizing data specified when the system is configured and then changed only rarely. One example is the table `T005` that contains the country codes.
-   **USR and USR1 (customer data)**
-   DDIC database tables for customer developments in a separate tablespace.

abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_database\_tables\_tech.html abenddic\_database\_tables\_techspec.html