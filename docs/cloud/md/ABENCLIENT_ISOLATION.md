---
title: "ABENCLIENT_ISOLATION"
description: |
  ABENCLIENT_ISOLATION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCLIENT_ISOLATION.htm"
abapFile: "ABENCLIENT_ISOLATION.html"
keywords: ["do", "if", "method", "class", "data", "ABENCLIENT", "ISOLATION"]
---

A [client](ABENCLIENT_GLOSRY.html) is an organizational unit of an [AS ABAP](ABENAS_ABAP_GLOSRY.html). Each [user session](ABENUSER_SESSION_GLOSRY.html) is governed by its [current client](ABENCURRENT_CLIENT_GLOSRY.html) whose [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) is set during [logon](ABENLOGON_GLOSRY.html).

Application data are stored in [application tables](ABENAPPLICATION_TABLE_GLOSRY.html) with a [client column](ABENCLIENT_COLUMN_GLOSRY.html). The client column contains client IDs. Each client ID uniquely assigns the data in the other columns to a client. [SQL data sources](ABENSQL_DATA_SOURCE_GLOSRY.html) that are based on tables with a client column are [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html). [System tables](ABENSYSTEM_TABLE_GLOSRY.html), on the other hand, do not have a client column and thus are [client-independent](ABENCLIENT_INDEPENDENT_GLOSRY.html).

As a rule, ABAP application programs executed in a user session should access only data of the current client and no data of other clients. This so-called [client isolation](ABENCLIENT_ISOLATION_GLOSRY.html) is enforced in ABAP Cloud as follows.

There are two ways how ABAP classes with ABAP language version [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html) can access [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html) data sources:

Other ways for accessing client-dependent data are not supported in ABAP for Cloud Development.

-   Directly with [ABAP SQL](ABENABAP_SQL_GLOSRY.html).
-   In ABAP SQL, implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) takes place that accesses data of the current client only. In ABAP for Cloud Development, it is not possible to change that behavior as it can be done in Standard ABAP.
-   Indirectly by calling [AMDP methods](ABENAMDP_METHOD_GLOSRY.html)
-   AMDP methods that have ABAP language version ABAP for Cloud Development and/or are released as APIs with a [C1 contract](ABENC1_CONTRACT_GLOSRY.html) or a [C4 contract](ABENC1_CONTRACT_GLOSRY.html) must be [client-safe](ABENCLIENT_SAFE_GLOSRY.html). Client-dependent AMDP methods that are client-safe set the HANA session variable `CDS_CLIENT` when called and can access only client-safe objects where the result is filtered by that session variable. In order to support that, [CDS entities](ABENCDS_ENTITY_GLOSRY.html) that are [released APIs](ABENRELEASED_API_GLOSRY.html) must also be [client-safe](ABENCLIENT_SAFE_GLOSRY.html).

abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html