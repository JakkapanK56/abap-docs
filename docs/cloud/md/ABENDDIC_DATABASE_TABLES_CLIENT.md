---
title: "ABENDDIC_DATABASE_TABLES_CLIENT"
description: |
  ABENDDIC_DATABASE_TABLES_CLIENT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_DATABASE_TABLES_CLIENT.htm"
abapFile: "ABENDDIC_DATABASE_TABLES_CLIENT.html"
keywords: ["do", "if", "case", "class", "data", "types", "ABENDDIC", "DATABASE", "TABLES", "CLIENT"]
---

If the first column of a DDIC database table is a key field with the [built-in type](ABENDDIC_BUILTIN_TYPES.html)\\ `CLNT`, the table is client-dependent. In this case, the column contains the [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) evaluated in [client copies](https://help.sap.com/docs/ABAP_PLATFORM_NEW/4a368c163b08418890a406d413933ba7/4d8062ec095114afe10000000a42189c) and in [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html).

-   Generally, tables in the [delivery class](ABENDDIC_DATABASE_TABLES_DELIVERY.html)\\ *A* are client-dependent, whereas system tables in the delivery classes *E*, *S*, and *W* are client-independent.

abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_database\_tables\_sema.html abenddic\_database\_tables\_semasspec.html