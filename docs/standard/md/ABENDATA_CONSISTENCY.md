---
title: "ABENDATA_CONSISTENCY"
description: |
  ABENDATA_CONSISTENCY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDATA_CONSISTENCY.htm"
abapFile: "ABENDATA_CONSISTENCY.html"
keywords: ["do", "if", "data", "types", "ABENDATA", "CONSISTENCY"]
---

When data in database tables is modified by application programs, it must be ensured that the data is consistent after the changes have been made. This is particularly important when data is processed in the database. The time span in which a consistent data state is transferred to another consistent state is known as a Logical Unit of Work (LUW). If an error occurs in an LUW, it is possible to undo all changes made up to this point and restore the data to its original consistent state (rollback). When a new consistent state has been reached, this new state can be committed and a new LUW can be opened.

For an [AS ABAP](ABENAS_ABAP_GLOSRY.html) two types of LUWs play a role:

Accordingly, there are two lock types that are of significance:

The [authorizations](ABENBC_AUTHORITY_CHECK.html) of a user when accessing data are also relevant for data consistency. The statement [`AUTHORITY-CHECK`](ABAPAUTHORITY-CHECK.html) is used for explicit authorization checks in ABAP programs. [ABAP CDS](ABENABAP_CDS_GLOSRY.html) also offers its own [access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) based on implicit evaluations of [access conditions](ABENACCESS_CONDITION_GLOSRY.html).

-   [Database LUWs](ABENDB_TRANSACTION.html) realized by the database system
-   [SAP LUWs](ABENSAP_LUW.html) realized using special ABAP programming techniques

-   [Database locks](ABENDB_LOCK.html) set by the system
-   [SAP locks](ABENSAP_LOCK.html) set using special ABAP programming techniques
-   Only data of the [current client](ABENCURRENT_CLIENT_GLOSRY.html) should be accessed. The topic [Client Isolation](ABENCLIENT_ISOLATION.html) describes the respective concept that is based on the implicit client handling of [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [client-safe](ABENCLIENT_SAFE_GLOSRY.html) repository objects for [AMDP](ABENAMDP_GLOSRY.html).

abenabap.html abenabap\_reference.html abendb\_access.html