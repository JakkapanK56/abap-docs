---
title: "ABENDDIC_DATABASE_VIEWS"
description: |
  ABENDDIC_DATABASE_VIEWS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_DATABASE_VIEWS.htm"
abapFile: "ABENDDIC_DATABASE_VIEWS.html"
keywords: ["select", "insert", "delete", "do", "if", "case", "method", "data", "types", "ABENDDIC", "DATABASE", "VIEWS"]
---

A DDIC database view defines a view on one or more basis tables. If there are multiple basis tables, they are joined using an inner join. An [SQL view](ABENSQL_VIEW_GLOSRY.html) is created as a [database object](ABENDB_OBJECT_GLOSRY.html) on the database when the view is activated. The structure type defined using the view fields of the database view can be referenced in ABAP programs using `TYPE`. A database view can be accessed using [ABAP SQL](ABENABAP_SQL_GLOSRY.html), [AMDP](ABENAMDP_GLOSRY.html), [Native SQL](ABENNATIVE_SQL_GLOSRY.html), [CDS views](ABENCDS_VIEW_GLOSRY.html), and also from outside AS ABAP using the programming interface of the database. The latter method is, however, [not recommended](ABENDATABASE_ACCESS_RECOMM.html).

The basis tables of database views can be [transparent tables](ABENTRANSPARENT_TABLE_GLOSRY.html) and [global temporary tables](ABENGLOBAL_TEMPORARY_TABLE_GLOSRY.html).

The view fields of a DDIC database view can be one or more fields from the basis tables. An include mechanism can be used to add all fields from a basis table. When individual fields are used, a name other than the name in the basis tables can be defined for a view field. This name can have a maximum of 30 characters, must meet the naming conventions for component names of [DDIC structures](ABENDDIC_STRUCTURES.html), and cannot be a reserved name. The reserved names that cannot be used are specified in the database table `TRESE`. Fields with the type `CHAR` can have a maximum of 1333 characters. Fields with the type `LRAW` or `LCHR` must be at the end of the view. Only one such field is allowed per view. Furthermore, each field of type `LRAW` or `LCHR` must have a field with the type `INT2` or `INT4` directly in front of it. The value of this integer field specifies the maximum length of the `LRAW` or `LCHR` field.

To include all fields from a basis table in a DDIC view, the asterisk character (`*`) can be used instead of the field name. If the minus character (`-`) is used for individual fields of a basis table included using `*`, all fields except for the fields specified with `-` become view fields. If the structure of a DDIC database table whose fields were added with `*` is modified, the structure of the view is also modified.

The join conditions for an inner join that combines two basis tables can be formulated using equality operators between any two table fields in the basis tables. The inner join joins the rows of the basis tables in question. The result set contains all combinations of rows whose columns meet the join conditions. If there are no rows in the basis tables that meet the join conditions, the result set is empty. If there is a suitable [foreign key dependency](ABENDDIC_DATABASE_TABLES_FORKEYREL.html) (including generic and constant foreign keys) between two basis tables, this dependency can be used as a default for defining join conditions in ABAP Dictionary.

The `Access` setting in the maintenance status of a DDIC database view can have the following values:

A database view with multiple basis tables can only be read with ABAP SQL. If a database view is based on a single table, data can be inserted in this table using the view with the ABAP SQL statements [`INSERT`](ABAPINSERT_DBTAB.html) or [`MODIFY`](ABAPINSERT_DBTAB.html). Fields from the basis table that are not included in the DDIC view can be handled as follows:

Just like in DDIC database tables, it is possible to define for a database view whether the data in the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) is buffered. The same [buffering types](ABENDDIC_DATABASE_TABLES_BUFFER.html) can be defined and [table buffering in ABAP SQL](ABENSAP_PUFFERING.html) is handled in the same way for views and for DDIC database tables with the only difference being that, when data is modified in one of the basis tables, the entire buffer is invalidated when the [buffers are synchronized](ABENBUFFER_SYNCHRO.html), regardless of the buffering type. In client-dependent views, however, this only affects the content of the [current client](ABENCURRENT_CLIENT_GLOSRY.html). As for DDIC database tables, the settings for buffering are separate technical settings, that can be transported independently from the view.

The following prerequisites must be met before a DDIC database view can be buffered:

For an existing DDIC view that already has a buffer and allows ABAP SQL write access, no [replacement object](ABENDDIC_REPLACEMENT_OBJECTS.html) can be created.

The DDIC database view `DEMO_SCARR_SPFLI` contains fields of the tables `SCARR` and `SPFLI`. Other names are assigned to these fields in the view.

The associated database object looks as follows:

The view can be accessed as follows using ABAP SQL:

-   A DDIC database view can be activated in ABAP Dictionary without its basis tables being defined on the database. The view is also not created on the database in this case.
-   As in a [DDIC database table](ABENDDIC_DATABASE_TABLES_CLIENT.html), the client dependency of a database view is determined by a column with the built-in dictionary type `CLNT`. This column must be the first column of the view.
-   [DDIC append views](ABENDDIC_APPEND_VIEWS.html) are available for extending DDIC database views delivered by SAP without modifying the original object.
-   Suitable [CDS views](ABENCDS_VIEW_GLOSRY.html) can be defined as [replacement objects](ABENDDIC_REPLACEMENT_OBJECTS.html) for database views. In this case, reads in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) access the replacement objects rather than the database views.
-   Database views managed by ABAP Dictionary should not be accessed directly in the database (see [Access to ABAP-Managed Database Objects](ABENDATABASE_ACCESS_RECOMM.html)).

-   If a [foreign key field](ABENFOREIGN_KEY_FIELD_GLOSRY.html) is added as a view field, it keeps its foreign key attribute and all associated foreign key fields become the foreign key of the view.
-   For [CDS-managed DDIC views (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html)\\ [](ABENCDS_V1_VIEWS.html), the view fields shown as key fields are in no way related to the key fields defined using [`DEFINE VIEW`](ABENCDS_DEFINE_VIEW_V1.html) for the [CDS entity](ABENCDS_ENTITY_GLOSRY.html).
-   A DDIC database view in the software component `SAP_BASIS` can contain a maximum of 750 view fields and the total of the field lengths (the number of bytes in non-character-like fields plus the number of characters in flat character-like fields) must not exceed 4096. A database view in any other software component can contain a maximum of 1500 view fields and the total of the field lengths is not checked in ABAP Dictionary.

-   **Read only**
-   The database view can only be used to read data with ABAP SQL.
-   **Read, change, delete, and insert**
-   If the database view contains only a single basis table, data can be [changed](ABENABAP_SQL_WRITING.html) using ABAP SQL.

-   If the table field is defined with [`NOT NULL`](ABENDDIC_DATABASE_TABLES_INIT.html) on the database, the field is filled with the type-specific initial value.
-   If the table field is defined with [`NOT NULL`](ABENDDIC_DATABASE_TABLES_INIT.html) on the database, and there is no initial value, nothing can be inserted and a database error occurs with a corresponding exception.
-   If the table field is not defined with [`NOT NULL`](ABENDDIC_DATABASE_TABLES_INIT.html) on the database, the field is filled with the [null value](ABENNULL_VALUE_GLOSRY.html).

-   A DDIC database view should only be used to insert data in the basis table if the flag for initial values is set for all table fields that are not included in the DDIC view.
-   Modifying existing data records via a DDIC database view does not cause any issues as long as the database view contains all key fields of the table.
-   Like a DDIC database table, the maintenance status of a database view has a [`Display and Maintain`](ABENDDIC_DATABASE_TABLES_MAINT.html) setting alongside the `Access` setting. The `Display and Maintain` setting must match the `Access` setting. In database views containing multiple basis tables, only the setting `Display/maintenance not allowed` is possible.

-   A basis table can occur in no more than nine buffered database views.
-   If all fields of the database view are key fields, these fields must also be key fields of the basis tables.
-   A DDIC view that allows ABAP SQL write access must not have a [replacement object](ABENDDIC_REPLACEMENT_OBJECTS.html).

CREATE VIEW DEMO\_SCARR\_SPFLI \\n (CLIENT, \\n ID, \\n CARRIER, \\n FLIGHT, \\n DEPARTURE, \\n DESTINATION ) \\nAS SELECT \\n T1."MANDT", \\n T2."CARRID", \\n T1."CARRNAME", \\n T2."CONNID", \\n T2."CITYFROM", \\n T2."CITYTO" \\nFROM \\n "SCARR" T1, \\n "SPFLI" T2 \\nWHERE \\n T1."MANDT" = T2."MANDT" AND \\n T1."CARRID" = T2."CARRID" SELECT \* \\n FROM demo\_scarr\_spfli \\n ORDER BY id, carrier, flight \\n INTO TABLE @FINAL(result). \\n\\ \\ncl\_demo\_output=>display( result ). abenabap.html abenabap\_dictionary.html abenddic\_views.html abenddic\_table\_views.html