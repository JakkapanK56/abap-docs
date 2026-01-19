---
title: "ABENSQL_SCRIPT"
description: |
  ABENSQL_SCRIPT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_SCRIPT.htm"
abapFile: "ABENSQL_SCRIPT.html"
keywords: ["if", "method", "data", "types", "ABENSQL", "SCRIPT"]
---

**Note**\\ [SAP HANA XSA](ABENXSA_GLOSRY.html) replaces [SAP HANA XSC](ABENXSC_GLOSRY.html). The [access methods](ABENSAP_HANA_ACCESS_XSC.html) designed specifically for XSC objects are not suitable for XSA objects. After all XSC objects have been migrated to XSA, the access methods designed for XSC became mostly obsolete. Database procedure proxies represent one such access method and have become obsolete. More information can be found in SAP Notes [2465027](https://launchpad.support.sap.com/#/notes/2465027) and [3116165](https://launchpad.support.sap.com/#/notes/3116165).

When calling [SQLScript procedures](ABENSQL_SCRIPT_PROCEDURE_GLOSRY.html) in the [SAP HANA Repository](ABENSAP_HANA_REPOSITORY_GLOSRY.html), the [Native SQL](ABENNATIVE_SQL_GLOSRY.html) and [AMDP](ABENAMDP.html) methods exist alongside the special statement [`CALL DATABASE PROCEDURE`](ABAPCALL_DATABASE_PROCEDURE.html), which can be used to access the database procedure using a [database procedure proxy](ABENDATABASE_PROC_PROXY_GLOSRY.html) stored in the ABAP Dictionary. The database procedure proxy maps the database types of the interface parameters of the database procedures to ABAP data types. A [database procedure interface](ABENDATABASE_PROC_INTF_GLOSRY.html) is generated for these data types. The calling ABAP program can reference the types of this global interface.

-   [Database procedure proxy](ABENDATABASE_PROCEDURE_PROXY.html)
-   [`CALL DATABASE PROCEDURE`](ABAPCALL_DATABASE_PROCEDURE.html)

-   [ABAP Managed Database Procedures](ABENAMDP.html) (AMDP) offers an alternative way of managing and calling database procedures in ABAP. It is far easier to handle database procedures using AMDP than with the calls using database procedure proxies described here, which is why AMDP is recommended whenever the [standard database](ABENSTANDARD_DB_GLOSRY.html) of the current AS ABAP is an SAP HANA database and no [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) to another SAP HANA database is needed.
-   Calling SQLScript procedures in [SAP HANA XS](ABENXS_GLOSRY.html):

-   SQLScript procedures in [SAP HANA XSC](ABENXSC_GLOSRY.html) are stored in the SAP HANA Repository and database procedure proxies can be used to call them from ABAP.
-   SQLScript procedures in [SAP HANA XSA](ABENXSA_GLOSRY.html), the successor to [SAP HANA XSC](ABENXSC_GLOSRY.html), are usually [HDI objects](ABENHDI_OBJECT_GLOSRY.html) for which no database procedure proxies can be created. Alternative methods such as [AMDP](ABENAMDP_GLOSRY.html) or [ADBC](ABENADBC_GLOSRY.html) must be used for these calls instead.

-   [SAP HANA XSC](ABENXSC_GLOSRY.html) is not supported by a [SAP HANA Cloud database](ABENSAP_HANA_CLOUD_DB_GLOSRY.html) and database procedure proxies cannot be used there.
-   [Database procedure proxies](ABENDATABASE_PROC_PROXY_GLOSRY.html) are obsolete, see SAP Note [3116165](https://launchpad.support.sap.com/#/notes/3116165).

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abenhana\_xsc\_obsolete.html abensap\_hana\_access\_xsc.html