---
title: "ABENHANA_DATA_AGING"
description: |
  ABENHANA_DATA_AGING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENHANA_DATA_AGING.htm"
abapFile: "ABENHANA_DATA_AGING.html"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "ABENHANA", "DATA", "AGING"]
---

The data aging concept makes it possible to distinguish between current (*HOT*) data and outdated (*COLD*) data within [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) tables. Application programming defines which data is current or outdated in a special [temperature column](ABENTEMPERATURE_COLUMN_GLOSRY.html) in the database table with the prescribed name `_DATAAGING`. The entries in this column partition the data in the database table and make it possible to archive outdated data in a transparent way for application programming. Only the data from the current partition is held in the working memory of the SAP HANA database. Partitions with outdated data, on the other hand, remain in persistent memory. This partitioning is performed in tasks called data aging runs.

By default, AS ABAP respects data aging by ensuring that the database interface only implicitly reads current and not outdated data when a database table on the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) is accessed. This also applies to access using AMDP. The way data aging is handled can be modified as follows:

If tables are not accessed using the AS ABAP database interface, that is, using [non-ABAP-managed Native SQL](ABENABAP_MANAGED_DB_OBJECTS_NSQL.html), data aging is not respected.

If database tables have a `_DATAAGING` column and are therefore subject to the data aging concept and data is accessed that does not have the current temperature, it is usually the case that all partitions must first be loaded into the main memory of the SAP HANA database. This can have a negative effect on performance. [Dependency rules](ABENHANA_DATA_AGING_DRULS.html) can be used to optimize access in such a way that only the required partitions are loaded.

The database table `DAAG_SFLIGHT` has a `_DATAAGING` column, which means that the data aging concept applies on a SAP HANA database. A data aging run partitions the data and only data where the `_DATAAGING` column contains the value '00000000' is loaded into the working memory of the database. The database interface selects only this data by default. This is why the result set of the first `SELECT` statement is empty. The method `SET_TEMPERATURE` of the class `CL_ABAP_SESSION_TEMPERATURE` sets the temperature of the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html) so that data from the entire past year is respected. If data like this exists, the result set of the second `SELECT` statement is not empty. For this to happen, data from additional partitions must be loaded into the working memory.

This example is for demonstration purposes only. ABAP programs should never access the temperature column explicitly or read it.

-   The profile parameter `abap/data_aging` enables and disables data aging.
-   The enabling of data aging for [CDS views](ABENCDS_VIEW_GLOSRY.html) and [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) can be overridden for ABAP SQL access using the annotation `@DataAging.noAgingRestriction:true`. If a CDS entity with this annotation is accessed using ABAP SQL, all data is read.
-   The classes `CL_ABAP_SESSION_TEMPERATURE` and `CL_ABAP_STACK_TEMPERATURE` can be used to override the current temperature of specific contexts in the current ABAP program and the database interface then reads the data with this temperature if data aging is enabled.

-   Current and outdated data can be handled implicitly only on [SAP HANA databases](ABENHANA_DATABASE_GLOSRY.html). On other databases, the database interface always reads all data. The value *false* for the annotation `@DataAging.noAgingRestriction` of a CDS entity is ignored here.
-   From a technical perspective, the database interface appends the addition `WITH RANGE_RESTRICTION('CURRENT');` to every SQL statement, including calls of [AMDP procedures](ABENAMDP_PROCEDURE_GLOSRY.html) and [functions](ABENAMDP_FUNCTION_GLOSRY.html). For this reason, Native SQL statements should not be ended with a semicolon `;` when using [`EXEC SQL`](ABAPEXEC.html) or [ADBC](ABENADBC.html) for the SAP HANA database.
-   Generally speaking, only current data is of interest for transactional applications, whereas analytical applications require access to outdated data as well.

SELECT \* \\n FROM daag\_sflight \\n WHERE \_dataaging <> '00000000' \\n INTO TABLE @FINAL(result1). \\ncl\_demo\_output=>write( result1 ). \\n\\ \\nTRY. \\n cl\_abap\_session\_temperature=>get\_session\_control( \\n )->set\_temperature( im\_temperature = CONV d( sy-datlo - 363 ) ). \\n CATCH cx\_abap\_session\_temperature INTO FINAL(exc). \\n cl\_demo\_output=>display( exc->get\_text( ) ). \\n RETURN. \\nENDTRY. \\n\\ \\nSELECT \* \\n FROM daag\_sflight \\n WHERE \_dataaging <> '00000000' \\n INTO TABLE @FINAL(result2). \\ncl\_demo\_output=>display( result2 ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_hana.html