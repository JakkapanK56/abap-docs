---
title: "ABENABAP_MANAGED_DB_OBJECTS_ACCESS"
description: |
  ABENABAP_MANAGED_DB_OBJECTS_ACCESS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_MANAGED_DB_OBJECTS_ACCESS.htm"
abapFile: "ABENABAP_MANAGED_DB_OBJECTS_ACCESS.html"
keywords: ["if", "method", "data", "types", "ABENABAP", "MANAGED", "OBJECTS", "ACCESS"]
---

[ABAP-managed database objects](ABENABAP_MANAGED_DB_OBJECT_GLOSRY.html) can be accessed as follows:

These access methods each have their own properties and restrictions, which are described in the corresponding sections. The following table summarizes the most important aspects supported by each access method:

These access methods can be used separately from each other, but there are some mutual dependencies. One example are AS ABAP [database connections](ABENDB_CONNECTIONS.html) and their transaction contexts, which are shared by ABAP SQL, Native SQL, and AMDP.

-   Access from outside AS ABAP:

-   [SQL service for external access to ABAP managed Database Objects](ABENABAP_MANAGED_DB_OBJECTS_SQLSER.html)

-   Access from within AS ABAP:

-   [ABAP SQL Access to ABAP managed Database Objects](ABENABAP_MANAGED_DB_OBJECTS_ASQL.html)
-   [AMDP access to ABAP managed Database Objects](ABENABAP_MANAGED_DB_OBJECTS_AMDP.html)
-   [Native SQL access to ABAP managed Database Objects](ABENABAP_MANAGED_DB_OBJECTS_NSQL.html)

\- [Dependency Rules](ABENDEPENDENCY_RULE_GLOSRY.html) Respected [Data Aging](ABENDATA_AGING_GLOSRY.html) Respected Mapping Between ABAP Types and Database Types, \\
Existence of the Database Objects, \\
ABAP-Specific Environment Information, \\
Where-Used List ABAP-Managed Database Connections Field Order,\\
DDL Forbidden Client Handling,\\
Table Buffering,\\
Table Logging, ...,\\
CDS Entities [SQL service](ABENABAP_MANAGED_DB_OBJECTS_SQLSER.html) Yes Yes Yes Yes Yes Yes [ABAP SQL](ABENABAP_MANAGED_DB_OBJECTS_ASQL.html) Yes Yes Yes Yes Yes Yes [AMDP](ABENABAP_MANAGED_DB_OBJECTS_AMDP.html) Yes Yes Yes Restricted Yes No [ABAP-Managed Native SQL](ABENABAP_MANAGED_DB_OBJECTS_NSQL.html) Yes Yes Restricted Yes No No [Non-ABAP-Managed Native SQL](ABENABAP_MANAGED_DB_OBJECTS_NSQL.html) Yes No No No No No abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_managed\_db\_objects.html