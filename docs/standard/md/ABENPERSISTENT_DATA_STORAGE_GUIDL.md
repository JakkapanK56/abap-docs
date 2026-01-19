---
title: "ABENPERSISTENT_DATA_STORAGE_GUIDL"
description: |
  ABENPERSISTENT_DATA_STORAGE_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPERSISTENT_DATA_STORAGE_GUIDL.htm"
abapFile: "ABENPERSISTENT_DATA_STORAGE_GUIDL.html"
keywords: ["select", "do", "if", "class", "data", "internal-table", "ABENPERSISTENT", "DATA", "STORAGE", "GUIDL"]
---

ABAP programs can have both read and write access to data in the following persistent storage media:

According to the [SoC principle](ABENSEPARATION_CONCERNS_GUIDL.html), such accesses are wrapped in service classes of the persistency layer of an application.

**Plan persistent data storage carefully**

Select with care the persistent storage media that are used by the application as well as the possible data transport routes between these media. Here is a general rule of thumb:

When you plan persistent data storage, you should follow these steps:

Under no circumstances should you use existing database tables (or files) to store data that are not provided for this purpose. Follow the convention of restricting reads and writes to database tables to specific packages. A database table must always be considered a semantic entity that is only allowed to contain the corresponding data. This even applies if a table with the required structure already exists. If in doubt, you should create a specific database table.

You must also be careful when using seemingly cross-system resources, such as the predefined `INDX` database table, to store data clusters. Such a resource must only be used to store temporary data for the short term, if at all. You should create specific database tables, for example, [export/import tables](ABENEXPORT_IMPORT_TABLE_GLOSRY.html), for application-specific and longer-lasting data.

-   Relational database tables in databases
-   Data clusters in special database tables
-   Binary files or text files on the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the current AS instance
-   Binary files or text files on the front-end computer when SAP GUI is used

-   Database tables for the general storage of raw data
-   Data clusters for the storage of formatted data
-   Files for data exchange with external systems

1.  On an AS ABAP, storing in relational database tables is always the first choice. ABAP supports this with the ABAP SQL that is integrated into the language. An object-oriented access is possible using Object Services. The majority of the data is stored in the [standard database](ABENSTANDARD_DB_GLOSRY.html) of AS ABAP. [Secondary connections](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) (managed using [DBA Cockpit](ABENDBA_COCKPIT_GLOSRY.html)) can be used to access further databases.
2.  The following data can be stored in data clusters when using the `EXPORT` and `IMPORT` statements:
3.  \- Formatted data as the result of comprehensive analyses
4.  \- Data that is not suitable for relational databases because it does not exist in the first normal form (such as nested internal tables)
5.  \- Object networks after a serialization to XML
6.  The persistent storage of data in files of the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of a AS instance or of the presentation server is usually the least suitable for AS ABAP application programs because it is generally platform-dependent (code pages, byte order). In addition, data like this is then only available in specific AS instances, which can cause problems in load distribution scenarios with automated server selection. Such files may be required for the data exchange with external systems, however.

abenabap.html abenabap\_reference.html abenabap\_pgl.html abenarchitecture\_gdl.html abendata\_storage\_gdl.html