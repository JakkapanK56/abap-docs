---
title: "ABENDDIC_EXTERNAL_VIEWS"
description: |
  ABENDDIC_EXTERNAL_VIEWS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_EXTERNAL_VIEWS.htm"
abapFile: "ABENDDIC_EXTERNAL_VIEWS.html"
keywords: ["select", "do", "if", "case", "catch", "method", "data", "types", "ABENDDIC", "EXTERNAL", "VIEWS"]
---

**Note**\\ [SAP HANA XSA](ABENXSA_GLOSRY.html) replaces [SAP HANA XSC](ABENXSC_GLOSRY.html). The [access methods](ABENSAP_HANA_ACCESS_XSC.html) designed specifically for XSC objects are not suitable for XSA objects. After all XSC objects have been migrated to XSA, the access methods designed for XSC became mostly obsolete. [DDIC external views](ABENEXTERNAL_VIEW_GLOSRY.html) represent one XSC access method and have become obsolete. More information can be found in SAP Notes [2465027](https://launchpad.support.sap.com/#/notes/2465027) and [3116165](https://launchpad.support.sap.com/#/notes/3116165).

A DDIC external view is a special [DDIC view](ABENDDIC_VIEW_GLOSRY.html) that makes an [SAP HANA view](ABENHANA_VIEW_GLOSRY.html) from [SAP HANA XSC](ABENXSC_GLOSRY.html) known in ABAP programs. The structure type defined using the view fields of an external view can be referenced in ABAP programs using `TYPE`. An external view can be specified as a source in [ABAP SQL read](ABENABAP_SQL_READING.html) statements

DDIC external views can only be created using the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html) and only if the current database is an [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html). The SAP HANA view must exist in the [SAP HANA Repository](ABENSAP_HANA_REPOSITORY_GLOSRY.html).

When a DDIC external view is activated, an alias with the name of the view is created on the SAP HANA database that points to the SAP HANA view. The names of the view fields of the external view can be defined differently from the names of the view fields of the SAP HANA view. The [DDIC runtime object](ABENDDIC_RUNTIME_OBJECT_GLOSRY.html) of the external view accesses the alias on the SAP HANA database and a mapping of HANA-specific data types to the [built-in types](ABENDDIC_BUILTIN_TYPES.html) in ABAP Dictionary takes place. The following table lists the currently supported HANA-specific data types and indicates which ABAP Dictionary types they are mapped to by default.

The mapping of HANA types `DATE`, `TIME`, and `TIMESTAMP` to dictionary types `DATN`, `TIMN`, and `UTCLONG` is not supported.

DDIC external views can be displayed in the ABAP Dictionary [tool](ABENDDIC_TOOLS.html) in the SAP GUI-based ABAP Workbench, but they cannot be maintained there.

A DDIC external view can only be read using ABAP SQL if an SAP HANA database is being accessed in which the associated SAP HANA view exists. If not, the uncatchable exception `DBSQL_TABLE_UNKNOWN` is raised. External views can exist actively and be used as data types in a system whose standard database is not an SAP HANA database. Views of this type cannot, however, be accessed through the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html) using ABAP SQL, only through a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) to an SAP HANA database. Conversely, when an SAP HANA view in an SAP HANA database is accessed through a secondary connection in the current system, only an identically named DDIC database table or a DDIC view with suitable structure can exist actively in ABAP Dictionary.

-   The following restrictions currently apply to the use of DDIC external views in ABAP programs:

-   The structure of analytic views does not allow them to be read using [`SELECT *`](ABAPSELECT_LIST.html). The same basic rules apply to the statement `SELECT` in ABAP SQL as when using the HANA SQL statement `SELECT`. Here, individual columns and the addition `GROUP BY` must be specified. If `SELECT *` is used, a runtime error occurs.
-   Parameterized calculation views can be accessed only if a default value is defined for each parameter. If not, reads are canceled and produce a runtime error.

-   DDIC external views should only be used in cases that are not covered by [ABAP CDS](ABENABAP_CDS_GLOSRY.html) or [AMDP](ABENAMDP_GLOSRY.html).
-   Access to SAP HANA views in [SAP HANA XS](ABENXS_GLOSRY.html):

-   SAP HANA views in [SAP HANA XSC](ABENXSC_GLOSRY.html) are stored in the SAP HANA Repository and DDIC external views can be used for access to these views from ABAP.
-   SAP HANA views in [SAP HANA XSA](ABENXSA_GLOSRY.html), the successor to [SAP HANA XSC](ABENXSC_GLOSRY.html), are usually [HDI objects](ABENHDI_OBJECT_GLOSRY.html) for which no DDIC external views can be created. For access from ABAP, other methods must be used such as [AMDP](ABENAMDP_GLOSRY.html) or [ADBC](ABENADBC_GLOSRY.html).

-   [SAP HANA XSC](ABENXSC_GLOSRY.html) is not supported by a [SAP HANA Cloud database](ABENSAP_HANA_CLOUD_DB_GLOSRY.html) and DDIC external views cannot be used there.

**HANA Type** **Meaning** **Type in ABAP Dictionary** `SMALLINT` 2-byte integer `INT2` `INTEGER` 4-byte integer `INT4` `BIGINT` 8-byte integer `INT8` `DECIMAL` Packed number `DEC` `SMALLDECIMAL` Packed number `DEC` `FLOAT` Binary floating point number `FLTP` `NVARCHAR` Unicode character string `CHAR` `VARBINARY` Byte string `RAW` `BLOB` Byte string `RAWSTRING` `NCLOB` Unicode character string `STRING` abenabap.html abenabap\_dictionary.html abenddic\_obsolete.html