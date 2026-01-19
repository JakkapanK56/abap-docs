---
title: "ABENDDIC_DATABASE_TABLES_FORKEY"
description: |
  ABENDDIC_DATABASE_TABLES_FORKEY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_DATABASE_TABLES_FORKEY.htm"
abapFile: "ABENDDIC_DATABASE_TABLES_FORKEY.html"
keywords: ["do", "if", "data", "ABENDDIC", "DATABASE", "TABLES", "FORKEY"]
---

A foreign key consists of one or more [foreign key fields](ABENFOREIGN_KEY_FIELD_GLOSRY.html) of a [foreign key table](ABENFOREIGN_KEY_TABLE_GLOSRY.html). The foreign key fields form the [primary key](ABENPRIMARY_KEY_GLOSRY.html) of a [check table](ABENCHECK_TABLE_GLOSRY.html). A DDIC database table can have multiple foreign keys. A [foreign key dependency](ABENFOREIGN_KEY_DEPENDENCY_GLOSRY.html) exists between a foreign key table and its check tables. A foreign key table usually only contains entries where the content of the foreign key also occurs exactly once as content of the primary key in the check table. The developer must consider this in [writes](ABENABAP_SQL_WRITING.html) made using ABAP SQL, since there is no automatic check.

Foreign keys can have the following properties:

-   **Input check**
-   In the definition of the foreign key, input checks for dynpros or Web Dynpros by means of foreign key dependencies can be switched on or off. Furthermore, the standard message can be replaced by a custom [message](ABENMESSAGE_GLOSRY.html). Any placeholders in the message are filled as follows when the message is sent: The first three placeholders are filled with the content of the foreign key fields that are assigned to the first three key fields of the check table after the client field. The fourth placeholder is filled with the name of the check table.
-   **Generic foreign key fields**
-   Foreign key fields can be flagged as *generic* in the definition of a foreign key. Generic foreign key fields are not checked against their check table in dynpro input checks.
-   **Constant values**
-   Foreign key fields can be given constant values in the definition of a foreign key. In dynpro input checks, the field of the check table assigned to a foreign key field with a constant value must have this constant value in the row determined by the remaining foreign key fields.
-   **Inheritance**
-   The fields of included include structures can be foreign key fields and are part of the foreign key of the DDIC database table. An inheritance relationship with the included structure exists by default and any changes to the definition of the foreign key in the included structure affect the foreign key of the including DDIC database table. This inheritance relationship can be removed. When removed, any changes to the definition of the foreign key in the included structure are not applied to the DDIC database table.
-   **Cardinality**
-   A [cardinality](ABENCARDINALITY_GLOSRY.html)\\ `n:m` can be defined for each foreign key. This cardinality mainly serves a documentation purpose, except in the definition of [DDIC maintenance views](ABENDDIC_MAINTENANCE_VIEWS.html) and [DDIC help views](ABENDDIC_HELP_VIEWS.html).
-   Possible values for `n`:

-   `1`
-   Precisely one row of the check table must exist for each record of the foreign key table.
-   `C`
-   No rows must exist in the check table for a record of the foreign key table.

-   Possible values for `m`:

-   `1`
-   Precisely one row in the foreign key table must exist for each row of the check table.
-   `C`
-   There can be no more than one assigned row in the foreign key table for each row of the check table.
-   `N`
-   There must be at least one row in the foreign key table for each row of the check table.
-   `CN`
-   There can be any number of rows in the foreign key table for each row of the check table.

-   Defining a generic foreign key turns the cardinalities `1:m` or `C:m` into `CN:m`. There can be multiple rows in the check table for each dependent row. This cardinality cannot, however, be specified explicitly.
-   **Type of the foreign key fields**
-   The type of the foreign key fields can be defined to describe the meaning of the foreign key fields in the foreign key table. The possible values are as follows, whereby the first two are only for documentation purposes:

-   `No key fields/key candidates`
-   The foreign key fields are neither primary key fields of the foreign key table nor do they identify a record of the foreign key table uniquely.
-   `Key fields/key candidates`
-   The foreign key fields are either primary key fields of the foreign key table or they identify a record of the foreign key table uniquely as a key candidate.
-   `Key fields of a text table`
-   If this type of foreign key field is defined, the foreign key table is handled as a text table of the check table. The primary key of the foreign key table must match the check table and it must have one additional language key field with the type `LANG`. There can be only one text table for each check table, otherwise an activation warning occurs. The texts in a text table are used, for example, to explain input helps on dynpros and Web Dynpros.

abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_database\_tables\_sema.html abenddic\_database\_tables\_semasspec.html abenddic\_database\_tables\_forkeyrel.html