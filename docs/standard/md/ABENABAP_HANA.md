---
title: "ABENABAP_HANA"
description: |
  ABENABAP_HANA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_HANA.htm"
abapFile: "ABENABAP_HANA.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENABAP", "HANA"]
---

[SAP HANA](https://help.sap.com/docs/SAP_HANA_PLATFORM/de855a01ee2248dfb139088793f8802a/550f3966082c4cc4a495d001bc607a05) is a platform, independent from AS ABAP, used for high-performance analysis of large volumes of data. SAP HANA works with the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), which is based on in-memory technology.

To exploit the in-memory properties of the SAP HANA database in an optimal way, however, application logic must be passed in a suitable form from AS ABAP to the SAP HANA database. This can be done, for example, using suitably programmed [joins](ABENJOIN_GLOSRY.html) or using [SQL expressions](ABENSQL_EXPRESSION_GLOSRY.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) or in [ABAP CDS](ABENABAP_CDS_GLOSRY.html). If the anchor methods in ABAP SQL or ABAP CDS are not sufficient, parts of the application logic must be programmed separately under [SAP HANA XS](ABENXS_GLOSRY.html) in a tool such as [SAP Web IDE for SAP HANA](ABENSAP_WEB_IDE_FOR_SAP_HAN_GLOSRY.html). The following methods are available, with complexity increasing from top to bottom:

The [SAP HANA XS](ABENXS_GLOSRY.html) framework is available for development of HANA objects. Here, the current [SAP HANA XSA](ABENXSA_GLOSRY.html) must be distinguished from its predecessor, [SAP HANA XSC](ABENXSC_GLOSRY.html). The XSC objects are intended for migration to XSA.

The following sections show specific methods that can be used when accessing objects of the SAP HANA database from ABAP programs:

In addition to these methods, [Native SQL](ABENNATIVE_SQL_GLOSRY.html) methods can be used to access all accessible objects in the SAP HANA database.

SAP HANA views cannot be created using Native SQL, since the description language is XML-based, not SQL-based.

-   AS ABAP can access the SAP HANA database of a standalone SAP HANA appliance (combined hardware and software system) using a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) and, for example, [ADBC](ABENADBC_GLOSRY.html). Various tools and accelerators are available for replicating data from the database of an AS ABAP to the SAP HANA database to enable high-performance analyses.
-   Furthermore, an [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) can be used as the [standard AS ABAP database](ABENSTANDARD_DB_GLOSRY.html). The database tables and other AS ABAP objects managed by the ABAP Dictionary are then stored in the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html). Database tables of this type can be accessed using [ABAP SQL](ABENABAP_SQL_GLOSRY.html), [Native SQL](ABENNATIVE_SQL_GLOSRY.html) or [AMDP](ABENAMDP_GLOSRY.html). Compared with ABAP programs, the SAP HANA databases then behave in the same way as a regular relational database. All HANA-specific functions are wrapped by the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html) and access is optimized as far as possible. It also enables access to the special database objects [SAP HANA views](ABENHANA_VIEW_GLOSRY.html) and [database procedures](ABENDATABASE_PROCEDURE_GLOSRY.html) written in [SQLScript](ABENSQL_SCRIPT_GLOSRY.html).

-   Modeling of [SAP HANA views](ABENHANA_VIEW_GLOSRY.html) transformed internally to [HANA-specific SQL](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f) or [SQLScript](ABENSQL_SCRIPT_GLOSRY.html).

-   Attribute views - Selected columns of joins between tables. Attribute views are created in a graphical tool and transformed internally to SQL.
-   Analytic views - A combination of table data and aggregated data from one or more tables. Analytic views are created in a graphical tool and transformed internally to SQL.
-   Calculation views - A combination of table data or data from other views in which complex conditions and calculations are possible. Calculation views are either created in a graphical tool and transformed internally to SQLScript or can be programmed using SQLScript.

-   Programming of dedicated [database procedures](ABENDATABASE_PROCEDURE_GLOSRY.html) in [SQLScript](ABENSQL_SCRIPT_GLOSRY.html). This programming can be done as follows:

-   In [SAP Web IDE for SAP HANA](ABENSAP_WEB_IDE_FOR_SAP_HAN_GLOSRY.html)
-   As [ABAP Managed Database Procedures](ABENABAP_MANAGED_DB_PROC_GLOSRY.html) in special methods of ABAP classes
-   Using [Native SQL](ABENNATIVE_SQL_GLOSRY.html) methods (usually [ADBC](ABENADBC_GLOSRY.html))

-   Programming of dedicated [database procedures](ABENDATABASE_PROCEDURE_GLOSRY.html) in [L](ABENLLANG_GLOSRY.html). This programming is only allowed internally at SAP and not for customers and partners.

-   [ABAP-specific session variables in SAP HANA](ABENHANA_SESSION_VARIABLES.html)
-   [Cached views in SAP HANA](ABENHANA_CACHED_VIEWS.html)
-   [Logical schemas for SAP HANA](ABENLOGICAL_DATABASE_SCHEMAS.html)
-   [Settings transaction attributes for SAP HANA](ABENHANA_SET_TRANSACTION.html)
-   [Data aging in SAP HANA](ABENHANA_DATA_AGING.html)
-   [Access to objects in SAP HANA XS](ABENSAP_HANA_ACCESS.html)

abenabap.html abenabap\_reference.html abendb\_access.html