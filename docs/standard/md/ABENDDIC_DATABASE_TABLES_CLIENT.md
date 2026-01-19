---
title: "ABENDDIC_DATABASE_TABLES_CLIENT"
description: |
  ABENDDIC_DATABASE_TABLES_CLIENT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_DATABASE_TABLES_CLIENT.htm"
abapFile: "ABENDDIC_DATABASE_TABLES_CLIENT.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "ABENDDIC", "DATABASE", "TABLES", "CLIENT"]
---

If the first column of a DDIC database table is a key field with the [built-in type](ABENDDIC_BUILTIN_TYPES.html)\\ `CLNT`, the table is client-dependent. In this case, the column contains the [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) evaluated in [client copies](https://help.sap.com/docs/ABAP_PLATFORM_NEW/4a368c163b08418890a406d413933ba7/4d8062ec095114afe10000000a42189c) and in [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html).

-   Generally, tables in the [delivery class](ABENDDIC_DATABASE_TABLES_DELIVERY.html)\\ *A* are client-dependent, whereas system tables in the delivery classes *E*, *S*, and *W* are client-independent.
-   The system table `T000`, which contains the [client IDs](ABENCLIENT_IDENTIFIER_GLOSRY.html) of an [AS ABAP](ABENAS_ABAP_GLOSRY.html), is an exception. The first column has the type `CLNT`, but the table is client-independent. If the table is accessed using ABAP SQL, the additions [`USING`](ABAPSELECT_CLIENT.html) and [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT.html) cannot be specified.

abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_database\_tables\_sema.html abenddic\_database\_tables\_semasspec.html