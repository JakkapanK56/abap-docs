---
title: "ABENDDIC_PROJECTION_VIEWS"
description: |
  ABENDDIC_PROJECTION_VIEWS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_PROJECTION_VIEWS.htm"
abapFile: "ABENDDIC_PROJECTION_VIEWS.html"
keywords: ["select", "insert", "delete", "do", "if", "data", "ABENDDIC", "PROJECTION", "VIEWS"]
---

A DDIC projection view is a DDIC table view that can be used to hide fields from a single basis table. No SQL view is created on the database. No selection conditions can be specified for a DDIC projection view.

The structure type defined by the view fields of the projection view can be referenced in ABAP programs using `TYPE`. A projection view can be accessed using ABAP SQL but not using CDS views, Native SQL, or AMDP. The database interface transforms an ABAP SQL statement that accesses a projection view to a platform-dependent SQL statement.

The `Access` setting in the maintenance status of a projection view can have the following values:

When rows are inserted via DDIC projection views, all fields from the basis table that are not part of the DDIC view are given the type-specific initial value. This is done regardless of whether the field is defined as [`NOT NULL`](ABENDDIC_DATABASE_TABLES_INIT.html) on the database.

The projection view `DEMO_SPFLI` contains fields of the tables `SPFLI`. The view can be accessed as follows using ABAP SQL:

-   **Read only**
-   The projection view can only be used to read data with ABAP SQL.
-   **Read, change, delete, and insert**
-   The projection view can be used to read or [change](ABENABAP_SQL_WRITING.html) data with ABAP SQL.

-   As in a [DDIC database table](ABENDDIC_DATABASE_TABLES_CLIENT.html), the client dependency of a DDIC projection view is determined by a column with the built-in dictionary type `CLNT`. This column must be the first column of the view.
-   Like a DDIC database table, the maintenance status of a projection view has a [Display and Maintain](ABENDDIC_DATABASE_TABLES_MAINT.html) setting alongside the `Access` setting. The setting must match the `Access` setting.
-   The basis table of a projection view can be a [transparent table](ABENTRANSPARENT_TABLE_GLOSRY.html) or a [global temporary table](ABENGLOBAL_TEMPORARY_TABLE_GLOSRY.html).

SELECT \* \\n FROM demo\_spfli \\n ORDER BY carrid, connid \\n INTO TABLE @FINAL(result). \\n\\ \\ncl\_demo\_output=>display( result ). abenabap.html abenabap\_dictionary.html abenddic\_views.html abenddic\_table\_views.html