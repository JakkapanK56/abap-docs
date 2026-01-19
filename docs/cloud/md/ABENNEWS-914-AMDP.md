---
title: "ABENNEWS-914-AMDP"
description: |
  ABENNEWS-914-AMDP - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-914-AMDP.htm"
abapFile: "ABENNEWS-914-AMDP.html"
keywords: ["if", "method", "class", "data", "ABENNEWS", "914", "AMDP"]
---

[1\. Client Safety of AMDP Methods](#ABAP_MODIFICATION_1@4@)

[2. `FOR SQL SERVICE`](#ABAP_MODIFICATION_2@4@)

In [client-safe](ABENAMDP_CLIENT_SAFETY.html) AMDP methods, also client-dependent or client-independent [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) can be accessed. Client isolation is achieved by filtering a generated intermediate database view for the client that is contained in the HANA session variable `CDS_CLIENT`.

In [client-safe](ABENAMDP_CLIENT_SAFETY.html) AMDP methods, only objects of the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) can be accessed that can be controlled by the `USING` list.

The new addition [`FOR SQL SERVICE`](ABAPCLASS-METHODS_FOR_SQL_SERVICE.html) to the statement `CLASS-METHODS` specifies that an [AMDP procedure implementation](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html) is intended to be exposed for external SQL access using an [SQL service](ABENABAP_SQL_SERVICES_GLOSRY.html).

abenabap.html abennews.html abennews-91.html abennews-914.html