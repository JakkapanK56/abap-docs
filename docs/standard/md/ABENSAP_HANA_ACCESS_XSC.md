---
title: "ABENSAP_HANA_ACCESS_XSC"
description: |
  ABENSAP_HANA_ACCESS_XSC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSAP_HANA_ACCESS_XSC.htm"
abapFile: "ABENSAP_HANA_ACCESS_XSC.html"
keywords: ["if", "method", "class", "data", "ABENSAP", "HANA", "ACCESS", "XSC"]
---

[SAP HANA XSC](ABENXSC_GLOSRY.html) (SAP HANA extended application services, classic model) is the predecessor version of [SAP HANA XSA](ABENXSA_GLOSRY.html). SAP HANA XSC is not supported by a [SAP HANA Cloud database](ABENSAP_HANA_CLOUD_DB_GLOSRY.html).

The development and administration perspective of the Eclipse-based tool [SAP HANA Studio](ABENHANA_STUDIO_GLOSRY.html) are used to develop and manage the HANA objects in XSC. The development objects are stored in the [SAP HANA Repository](ABENSAP_HANA_REPOSITORY_GLOSRY.html). Objects from the SAP HANA Repository are transported (deployed) using special transport tools.

ABAP provides special access methods for the following XSC objects in the SAP HANA Repository:

These access methods are not suitable for objects in [SAP HANA XSA](ABENXSA_GLOSRY.html) and they have been declared obsolete. Alternative methods such as [AMDP](ABENAMDP_GLOSRY.html) or [ADBC](ABENADBC_GLOSRY.html) are used instead.

-   [DDIC external views for SAP HANA views in SAP HANA Repository](ABENEXTERNAL_VIEWS.html) (obsolete)
-   [Database procedure proxies for SQLScript Procedures in the SAP HANA Repository](ABENSQL_SCRIPT.html) (obsolete)

-   Instead of calling [SQLScript procedures](ABENSQL_SCRIPT_PROCEDURE_GLOSRY.html) using [database procedure proxies](ABENSQL_SCRIPT.html), [ABAP Managed Database Procedures (AMDP)](ABENAMDP.html) are recommended. AMDP can be used to create and manage custom database procedures and also [database functions](ABENDATABASE_FUNCTION_GLOSRY.html). Existing database procedures can be called from AMDP. Database procedure proxies are required only if a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) is used to access an SAP HANA database that is not the [standard database](ABENSTANDARD_DB_GLOSRY.html) of the current AS ABAP (side-by-side scenario). For AMDP, only [service connections](ABENSERVICE_CONNECTION_GLOSRY.html) to the standard database of the current AS ABAP can be used.
-   [DDIC external Views](ABENEXTERNAL_VIEWS.html) and [Database procedure proxies](ABENSQL_SCRIPT.html) are not possible when working with a [SAP HANA Cloud database](ABENSAP_HANA_CLOUD_DB_GLOSRY.html).
-   [DDIC external views](ABENEXTERNAL_VIEW_GLOSRY.html) and [Database procedure proxies](ABENDATABASE_PROC_PROXY_GLOSRY.html) are obsolete. See SAP Note [3116165](https://launchpad.support.sap.com/#/notes/3116165).

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abenhana\_xsc\_obsolete.html