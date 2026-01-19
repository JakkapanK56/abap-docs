---
title: "ABENDATABASE_PROCEDURE_PROXY"
description: |
  ABENDATABASE_PROCEDURE_PROXY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDATABASE_PROCEDURE_PROXY.htm"
abapFile: "ABENDATABASE_PROCEDURE_PROXY.html"
keywords: ["delete", "do", "if", "case", "method", "class", "data", "types", "ABENDATABASE", "PROCEDURE", "PROXY"]
---

For each standalone [SQLScript procedure](ABENSQL_SCRIPT_PROCEDURE_GLOSRY.html) in the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), database procedure proxies can be created as [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html). This makes it possible to address the database procedure in the statement [`CALL DATABASE PROCEDURE`](ABAPCALL_DATABASE_PROCEDURE.html). A database procedure proxy can be created as follows:

The database procedure proxy defines the mapping between the database types of the parameter interface of the SQLScript procedure and ABAP data types. The following table lists the currently supported HANA-specific data types and indicates which ABAP Dictionary types they are mapped to by default.

The mapping of HANA types `DATE`, `TIME`, and `TIMESTAMP` to dictionary types `DATN`, `TIMN`, and `UTCLONG` is not supported.

The default mapping can be overwritten, but this can also modify the parameter names. A [database procedure interface](ABENDATABASE_PROC_INTF_GLOSRY.html) is generated for each database procedure proxy. Appropriate ABAP types are declared in this interface.

The example [Database Procedure Call](ABENCALL_DB_PROCEDURE_ABEXA.html) uses a database procedure proxy created by the program to call a database procedure from the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) created using [ADBC](ABENADBC_GLOSRY.html).

-   Using a tool in the ABAP perspective of the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html). The SQLScript procedure must exist in the [SAP HANA Repository](ABENSAP_HANA_REPOSITORY_GLOSRY.html).
-   Using an API in the database procedure proxy library. This makes it possible to create and delete database procedure proxies for SQLScript procedures from any [database schemas](ABENDATABASE_SCHEMA_GLOSRY.html). The API is based on objects from the class `CL_DBPROC_PROXY`, accessed using the interface `IF_DBPROC_PROXY_PUBLIC_API`. A API of this type is created using the factory method `GET_PROXY_PUBLIC_API` from the factory class `CL_DBPROC_PROXY_FACTORY`. A further factory method `GET_PROXY_QUERY_API` makes it possible to create another API, which is used to get information about SQLScript procedures and database procedure proxies.

-   More specifically, database procedure proxies can be created for [SAP HANA XSC](ABENXSC_GLOSRY.html) SQLScript procedures in the SAP HANA Repository. No database procedure proxies can be used, on the other hand, for SQLScript procedures in [SAP HANA XSA](ABENXSA_GLOSRY.html). Alternative methods such as [AMDP](ABENAMDP.html) or [ADBC](ABENADBC_GLOSRY.html) must be used instead.
-   [SAP HANA XSC](ABENXSC_GLOSRY.html) is not supported by a [SAP HANA Cloud database](ABENSAP_HANA_CLOUD_DB_GLOSRY.html) and database procedure proxies cannot be used here.
-   In exceptional cases, the API of the database procedure proxy library can be used to access SQLScript procedures that are not managed in the SAP HANA Repository. The interfaces and classes from the database procedure proxy library are documented in the Class Builder. They are accessed most easily from the factory class `CL_DBPROC_PROXY_FACTORY`.
-   If, when mapping parameter types between database types and ABAP types, a reference is made for the latter to data types of the ABAP Dictionary and such a dictionary type is modified at a later time, the database procedure proxy cannot be generated automatically. This can cause database inconsistencies. In cases like this, the database procedure proxy must be regenerated explicitly.
-   [ABAP Managed Database Procedures](ABENAMDP.html) (AMDP) do not need any database procedure proxies and can be used whenever SQLScript procedures are created only for calls from ABAP and the [standard database](ABENSTANDARD_DB_GLOSRY.html) of the current AS ABAP is an SAP HANA database. Any SQLScript procedure can be called from AMDP, which means they can replace database procedure proxies, except when a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) is needed to access an SAP HANA database.
-   It is possible to create database procedure proxies for database procedures managed by [AMDP](ABENAMDP.html), but this is not a good idea.

**HANA Type** **Meaning** **Type in ABAP Dictionary** `SMALLINT` 2-byte integer `INT2` `INTEGER` 4-byte integer `INT4` `BIGINT` 8-byte integer `INT8` `DECIMAL` Packed number `DEC` `SMALLDECIMAL` Packed number `DEC` `FLOAT` Binary floating point number `FLTP` `NVARCHAR` Unicode character string `CHAR` `VARBINARY` Byte string `RAW` `BLOB` Byte string `RAWSTRING` `NCLOB` Unicode character string `STRING` abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abenhana\_xsc\_obsolete.html abensap\_hana\_access\_xsc.html abensql\_script.html