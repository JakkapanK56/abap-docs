---
title: "ABENADBC"
description: |
  ABENADBC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENADBC.htm"
abapFile: "ABENADBC.html"
keywords: ["do", "while", "if", "method", "class", "data", "internal-table", "ABENADBC"]
---

ADBC is an API for the [Native SQL interface](ABENNATIVE_SQL_INTERFACE_GLOSRY.html) of the AS ABAP that is based on classes in ABAP Objects. The ADBC methods can be used to pass [Native SQL](ABENNATIVE_SQL_GLOSRY.html) statements to the database interface. They make it possible to

The ADBC classes all begin with the prefix `CL_SQL_` or `CX_SQL_` and are documented. The following paragraphs briefly introduce the most important classes.

[Using ABAP SQL](ABENDATABASE_ACCESS_GUIDL.html)

The program `ADBC_DEMO` and further programs with the prefix `ADBC_DEMO_` demonstrate the most important methods of ADBC. Executable examples from the ABAP example library can be found under [ADBC Examples](ABENADBC_ABEXAS.html). These examples generally work on SAP's own [HANA database](ABENHANA_DATABASE_GLOSRY.html). They might not work on other database platforms.

-   send database specific SQL statements to a database system and process the result
-   to establish and manage database connections.

-   [ADBC - `CL_SQL_STATEMENT`](ABENCL_SQL_STATEMENT.html)
-   [ADBC - `CL_SQL_PREPARED_STATEMENT`](ABENCL_SQL_PREPARED_STATEMENT.html)
-   [ADBC - `CL_SQL_CONNECTION`](ABENCL_SQL_CONNECTION.html)
-   [ADBC - Examples](ABENADBC_ABEXAS.html)

-   ADBC can always be used when access to a database using the Native SQL interface instead of the ABAP SQL interface is necessary.
-   ADBC does not support [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html). The [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) of a database table must be specified explicitly. It should be noted that application programs should only use data from the [current client](ABENCURRENT_CLIENT_GLOSRY.html). See also the associated [security note](ABENCLIENT_DEPENDENT_SCRTY.html) and the [programming guideline](ABENCLIENT_HANDLING_GUIDL.html).
-   When the database object of a client-dependent [CDS entity](ABENCDS_ENTITY_GLOSRY.html) is accessed using Native SQL and the client handling algorithm of the entity is governed by the HANA session variable [`CDS_CLIENT`](ABENHANA_SESSION_VARIABLES.html), this variable must have an appropriate value.
-   Apart from ADBC, it is also possible to [embed](ABENNATIVESQL.html) Native SQL statically between [`EXEC SQL`](ABAPEXEC.html) and [`ENDEXEC`](ABAPENDEXEC.html) in ABAP programs. The recommendation, however, is to use ADBC.

-   While the [static embedding](ABENNATIVESQL.html) of Native SQL offers exclusively static access to the Native SQL interface, ADBC makes modern object-oriented and dynamic access possible.
-   New developments and improvements, such as optimized performance using bulk access across internal tables, are now made only for ADBC.

-   The existing static embedding of Native SQL statements is still supported but should no longer be used in new programs.

-   If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class `CL_ABAP_DYN_PRG` or the built-in function [`escape`](ABENESCAPE_FUNCTIONS.html).
-   To avoid [SQL injections](ABENSQL_INJECTION_GLOSRY.html) in ADBC reliably, no parts of an SQL statement that is not an operand position can come from outside of the program. Variable parts in operand positions can only be implemented using `?` placeholders and the associated `SET_PARAM` methods, which in ADBC are not just possible in prepared statements, unlike in JDBC.
-   See also [SQL Injections Using ADBC](ABENSQL_INJ_ADBC_SCRTY.html)

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abennative\_sql\_obsolete.html