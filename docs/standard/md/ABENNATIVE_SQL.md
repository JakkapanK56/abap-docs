---
title: "ABENNATIVE_SQL"
description: |
  ABENNATIVE_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNATIVE_SQL.htm"
abapFile: "ABENNATIVE_SQL.html"
keywords: ["select", "do", "if", "method", "class", "data", "types", "internal-table", "ABENNATIVE", "SQL"]
---

The term [Native SQL](ABENNATIVE_SQL_GLOSRY.html) refers to all platform-dependent statements and calls that can be passed to the [Native SQL interface](ABENNATIVE_SQL_INTERFACE_GLOSRY.html) of the database interface. By default, the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html) is used to access the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) of the [standard AS ABAP database](ABENSTANDARD_DB_GLOSRY.html).

Native SQL can be passed to the database interface as follows:

ADBC is recommended. New developments and improvements, such as support for new SQL statements or optimized performance using bulk access across internal tables, are now made only for ADBC. The existing static embedding of Native SQL statements between [`EXEC SQL`](ABAPEXEC.html) and [`ENDEXEC`](ABAPENDEXEC.html) is still supported but should no longer be used in new programs.

[Use ABAP SQL for general database accesses where possible.](ABENDATABASE_ACCESS_GUIDL.html)

-   In strings passed to objects of [ADBC](ABENADBC.html) classes.
-   As statically [embedded Native SQL statements](ABENNATIVESQL.html).

-   When using Native SQL, the order of the columns in database tables defined in the ABAP Dictionary in the database system does not have to match the order of the structure definition in the ABAP Dictionary. When using [ABAP SQL](ABENABAP_SQL_GLOSRY.html), this is respected accordingly in the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html) and the order in the ABAP Dictionary can always be assumed. When using Native SQL, the order of the columns in the database system must be respected explicitly.
-   Special care must be taken when using Native SQL to pass data from ABAP to the database system and vice versa. This applies both when using ABAP data objects as host variables or bound parameters in Native SQL statements and when binding ABAP data object to the parameter interface of stored procedures or database procedures. Not all built-in ABAP types have matching types in the type system of the database system used. Although types from the ABAP Dictionary can be mapped to ABAP types and the appropriate conversions can be executed from the ABAP SQL interface when using ABAP SQL, when using Native SQL only matching data types should be [mapped](ABENNATIVE_SQL_TYPE_MAPPING.html) and conversions should be avoided. This is particularly relevant for the ABAP types `n`, `d`, and `t` and decimal floating point numbers.
-   Native SQL does not support [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html). When accessing client-dependent database tables or views, the required client ID must be selected explicitly. In application programs, only the [current client](ABENCURRENT_CLIENT_GLOSRY.html) should be used to do this.
-   [Table buffering](ABENTABLE_BUFFERING_GLOSRY.html) is bypassed when using Native SQL.
-   When the database object of a client-dependent [CDS entity](ABENCDS_ENTITY_GLOSRY.html) is accessed using Native SQL and the client handling algorithm of the entity is governed by the HANA session variable [`CDS_CLIENT`](ABENHANA_SESSION_VARIABLES.html), this variable must have an appropriate value.
-   Apart from their differences in syntax, Native SQL statements can behave in different ways on different platforms, particularly when compared with ABAP SQL. This mainly affects the following:

-   Handling of blanks in strings
-   Calculation rules and roundings in arithmetic calculations
-   Overflow behavior

-   For more information about the exact behavior, see the documentation of the vendor-specific Native SQL.
-   Special care should be taken when using the Native SQL statements `SET TRANSACTION` to set the transaction behavior of the current [database connection](ABENDATABASE_CONNECTION_GLOSRY.html). The default behavior must be reset before the end of the current [database LUW](ABENDATABASE_LUW_GLOSRY.html) to avoid unwanted or critical behavior. When the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) is accessed, [special methods](ABENHANA_SET_TRANSACTION.html) must be used that reset automatically instead of these Native SQL statements.
-   The examples shown for Native SQL generally work on SAP's own [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html). They might not work on other database platforms. The documentation about Native SQL in the SAP HANA database can be found under [SAP HANA SQL and System Views References](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f).

abenabap.html abenabap\_reference.html abendb\_access.html