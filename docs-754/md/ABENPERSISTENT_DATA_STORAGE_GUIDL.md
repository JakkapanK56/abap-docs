---
title: "Persistent Data Storage - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpersistent_data_storage_guidl.htm"
abapFile: "abenpersistent_data_storage_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Architecture](ABENARCHITECTURE_GUIDL.md) →  [Data Storage](ABENDATA_STORAGE_GUIDL.md) → 

Persistent Data Storage

Background

ABAP programs can have both read and write access to data in the following persistent storage media:

-   Relational database tables in databases

-   Data clusters in special database tables

-   Binary files or text files on the [host computer](ABENHOST_COMPUTER_GLOSRY.md "Glossary Entry") of the current AS Instance

-   Binary files or text files on the front-end computer when SAP GUI is used

According to the [SoC principle](ABENSEPERATION_CONCERNS_GUIDL.md "Guideline"), such accesses are wrapped in service classes of the persistency layer of an application.

Rule

Plan persistent data storage carefully

Select with care the persistent storage media that are used by the application as well as the possible data transport routes between these media. Here is a general rule of thumb:

-   Database tables for the general storage of raw data

-   Data clusters for the storage of formatted data

-   Files for data exchange with external systems

Details

When you plan persistent data storage, you should follow these steps:

1.  On an AS ABAP, storing in relational database tables is always the first choice. ABAP supports this with the ABAP SQL that is integrated into the language. An object-oriented access is possible using Object Services. The majority of the data is stored in the [standard database](ABENSTANDARD_DB_GLOSRY.md "Glossary Entry") of AS ABAP. [Secondary connections](ABENSECONDARY_DB_CONNECTION_GLOSRY.md "Glossary Entry") (managed using [DBA Cockpit](ABENDBA_COCKPIT_GLOSRY.md "Glossary Entry")) can be used to access further databases.
2.  The following data can be stored in data clusters when using the EXPORT and IMPORT statements:
    \- Formatted data as the result of comprehensive analyses
    \- Data that is not suitable for relational databases because it does not exist in the first normal form (such as nested internal tables)
    \- Object networks after a serialization to XML
3.  The persistent storage of data in files of the [host computer](ABENHOST_COMPUTER_GLOSRY.md "Glossary Entry") of a AS Instance or of the presentation server is usually the least suitable for AS ABAP application programs because it is generally platform-dependent (code pages, byte order). In addition, data like this is then only available in specific AS Instancess, which can cause problems in load distribution scenarios with automated server selection. Such files may be required for the data exchange with external systems, however.

Under no circumstances should you use existing database tables (or files) to store data that are not provided for this purpose. Follow the convention of restricting reads and writes to database tables to specific packages. A database table must always be considered a semantic entity that is only allowed to contain the corresponding data. This even applies if a table with the required structure already exists. If in doubt, you should create a specific database table.

You must also be careful when using seemingly cross-system resources, such as the predefined INDX database table, to store data clusters. Such a resource must only be used to store temporary data for the short term, if at all. You should create specific database tables, for example, [export/import tables](ABENEXPORT_IMPORT_TABLE_GLOSRY.md "Glossary Entry"), for application-specific and longer-lasting data.
