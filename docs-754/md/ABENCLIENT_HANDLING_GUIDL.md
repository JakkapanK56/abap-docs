---
title: "Client Handling - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_handling_guidl.htm"
abapFile: "abenclient_handling_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Architecture](ABENARCHITECTURE_GUIDL.md) →  [Data Storage](ABENDATA_STORAGE_GUIDL.md) → 

Client Handling

Background

A client indicates a data area in an AS ABAP database that contains independent application data. The application data of different clients use the same database tables, but are flagged with a three-figure client ID within these tables.

When logging on to AS ABAP, this client ID must be entered. This selects the client whose data is processed by the user session. The current client is entered in the system field sy-mandt.

-   [ABAP SQL](ABENOPEN_SQL_GLOSRY.md "Glossary Entry") statements work with implicit client handling, where the data of the current client is accessed by default. This is specified by passing an implicit condition for the current client to WHERE conditions, and ignoring clients specified in modifying statements in work areas. Implicit client handling in ABAP SQL can be switched to one more different clients by using the addition [USING](ABAPSELECT_CLIENT.md) in queries or the additions [USING](ABAPIUMD_CLIENT.md) or [CLIENT SPECIFIED](ABAPIUMD_CLIENT.md) in write statements.

-   [Native SQL](ABENNATIVE_SQL_GLOSRY.md "Glossary Entry") and [ADBC](ABENAMDP_GLOSRY.md "Glossary Entry") do not apply implicit client handling. The client in question does not need to be selected explicitly when Native SQL or AMDP is used to access client-specific database tables or views.

Rule

Do not access the data of other clients

In the persistency services of business applications, access the data of the current client only.

Details

Each client within the AS ABAP is to be viewed as a self-contained unit. The additions USING CLIENT and CLIENT SPECIFIED should not be used in ABAP SQL statements of business applications. When Native SQL or AMDP is used, only the current client should be selected.

The system field sy-mandt does not generally need to be evaluated, unless Native SQL or AMDP is used to access client-specific database tables or views. The client ID is then needed to select the data of the current client explicitly.

Notes

-   Cross-client database tables (tables without client ID) are usually system tables. This means that cross-client access to these tables is also reserved for system programs.

-   The addition CLIENT SPECIFIED is fully [obsolete](ABAPSELECT_CLIENT_OBSOLETE.md) in queries and partially [obsolete](ABAPUD_CLIENT_OBSOLETE.md) in write statements.

Bad Example

The following source code demonstrates ABAP SQL access on application data where implicit client handling is switched to a different client.

SELECT SINGLE ...
       FROM scarr USING '...'
       WHERE ...             ...
       INTO ...

Good Example

The following source code demonstrates the recommended use of ABAP SQL where implicit client handling accesses the current client by default.

SELECT SINGLE ...
       FROM scarr
       WHERE ...
       INTO ...
