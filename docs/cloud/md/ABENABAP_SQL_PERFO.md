---
title: "ABENABAP_SQL_PERFO"
description: |
  ABENABAP_SQL_PERFO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_SQL_PERFO.htm"
abapFile: "ABENABAP_SQL_PERFO.html"
keywords: ["select", "loop", "if", "case", "data", "ABENABAP", "SQL", "PERFO"]
---

The performance of a program is often determined by the efficiency of the database reads it contains. In a client/server environment, each database read places a load on both the database system and the connection between the database system and the AS ABAP. This load must be kept as low as possible if programs are to demonstrate a good level of performance.

Generally speaking, the following rules must be followed. The overall performance of a program can depend on the data being processed, any evaluations required, and the database system itself, which means that the application and prioritization of rules can vary from case to case.

-   **Keep the number of hits low**
-   The set of rows selected should be kept as small as possible by using specific conditions to restrict the set to those rows actually needed. Superfluous rows should never be transported from the database system to the AS ABAP and then evaluated there.
-   **Keep the data volume low**
-   The volume of data transported should always be restricted to the columns required. The columns can be specified explicitly, or an appropriate view can be used. Furthermore, [aggregate expressions](ABENAGGREGATE_EXPRESSION_GLOSRY.html) can be combined with corresponding groupings [SQL expressions](ABENSQL_EXPRESSION_GLOSRY.html) to reduce the volume of data transferred, since here the data is already aggregated before the transport in the database system.
-   **Keep the number of reads low**
-   To keep the number of database reads low, mass operations should always be used instead of single operations. More specifically, ABAP SQL statements should not be used within loops. Instead, joins, views, or subqueries can be used when reading multiple DDIC database tables.
-   **Use local buffers**
-   The same data should be not be read more than once. Storing database tables in the local buffer in [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) can produce significant time savings, since it takes much longer for the AS ABAP to read the database system than a locally buffered table. DDIC database tables should always be buffered if they are read frequently and modified rarely. If the same data is to be sorted multiple times in different orders, the data should be sorted in the ABAP program.
-   **Efficient search using indexes**
-   In all cases where [secondary indexes](ABENDDIC_DATABASE_TABLES_INDEX.html) of DDIC database tables improve selection performance, these indexes should be created and used.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html