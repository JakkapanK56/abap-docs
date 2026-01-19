---
title: "ABENDDIC_VIEWS"
description: |
  ABENDDIC_VIEWS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_VIEWS.htm"
abapFile: "ABENDDIC_VIEWS.html"
keywords: ["select", "do", "if", "method", "data", "types", "ABENDDIC", "VIEWS"]
---

A [DDIC view](ABENDDIC_VIEW_GLOSRY.html) is a grouping of columns of one or more DDIC database tables, resulting in an application-specific view. In AS ABAP, views are defined in ABAP Dictionary and can be referenced as data types in the same way as DDIC structures. Views can be used like DDIC database tables in reading ABAP SQL statements and, with some limitations, also in writing ABAP SQL statements. For this reason, the ABAP DDIC views are in the same namespace as all types of the ABAP Dictionary and hence in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP.

The name of a view must follow the [naming rules for DDIC views](ABENDDIC_VIEW_NAMES.html).

The data in a view is not saved physically. It is read from the database from the involved DDIC database tables.

The views in ABAP Dictionary are usually platform-independent. With some exceptions, the views in ABAP Dictionary are, when activated, transformed into platform-dependent [SQL views](ABENSQL_VIEW_GLOSRY.html) in the current [standard AS ABAP database](ABENSTANDARD_DB_GLOSRY.html) in the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html). This is done using the [DDL](ABENDDL_GLOSRY.html) statement `CREATE VIEW` with the addition `AS SELECT`, which formulates the corresponding `SELECT` statement. The definition of a view in the database can be displayed in transaction `SE11` by choosing *Utilities -> Database Object*.

ABAP Dictionary manages the following categories of views:

When a view is accessed using the ABAP SQL statement [`SELECT`](ABAPSELECT.html), the database `SELECT` statement defined in the DDL statement is executed and the result set is returned as if a `SELECT` were executed on a DDIC database table whose structure matches the structure defined by the view.

-   Views can be used to restrict data access for a DDIC database table. Access to fields is restricted with projections and access to specific rows is restricted with selections.
-   Views that select from multiple DDIC database tables use joins or subqueries to join these tables and to read the required fields and rows.

-   [DDIC table views](ABENDDIC_TABLE_VIEWS.html)
-   In DDIC table views the platform-dependent DDL statement is created from the definition of the view in the form-based ABAP Dictionary [tool](ABENDDIC_TOOLS.html).
-   [DDIC external views](ABENDDIC_EXTERNAL_VIEWS.html) (obsolete)
-   A DDIC external view makes an [SAP HANA view](ABENHANA_VIEW_GLOSRY.html) known in ABAP programs and makes it usable like a DDIC table view.
-   **Note**\\ [SAP HANA XSA](ABENXSA_GLOSRY.html) replaces [SAP HANA XSC](ABENXSC_GLOSRY.html). The access methods designed specifically for XSC objects are not suitable for XSA objects and have become obsolete. [DDIC external views](ABENEXTERNAL_VIEW_GLOSRY.html) represent one such access method and have been declared obsolete. See [SAP Note 3116165](https://launchpad.support.sap.com/#/notes/3116165) and [SAP Note 2465027](https://launchpad.support.sap.com/#/notes/2465027).

-   Defining views is usually not the job of an ABAP application programmer, but is part of the implementation of data models in ABAP Dictionary. Once created, views are used in ABAP programs using ABAP SQL statements and must be stable enough to allow this.
-   The DDIC database tables a view is based on should have suitable [indexes](ABENDDIC_DATABASE_TABLES_INDEX.html). This is important for selections using views.
-   [ABAP Core Data Services (CDS)](ABENCDS.html) offers [CDS views](ABENCDS_VIEW_GLOSRY.html) and other [CDS entities](ABENCDS_ENTITY_GLOSRY.html) for the implementation of data models and replaces data modeling with DDIC views. CDS entities are defined in a (mostly) platform-independent [CDS DDL](ABENCDS_DDL_GLOSRY.html) in [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html). CDS entities offer advanced modeling capabilities compared to DDIC views.

abenabap.html abenabap\_dictionary.html