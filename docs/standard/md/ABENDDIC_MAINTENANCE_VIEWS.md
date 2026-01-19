---
title: "ABENDDIC_MAINTENANCE_VIEWS"
description: |
  ABENDDIC_MAINTENANCE_VIEWS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_MAINTENANCE_VIEWS.htm"
abapFile: "ABENDDIC_MAINTENANCE_VIEWS.html"
keywords: ["select", "insert", "delete", "do", "if", "class", "data", "ABENDDIC", "MAINTENANCE", "VIEWS"]
---

A DDIC maintenance view is a DDIC table view intended for performing writes on multiple DDIC database tables using extended table maintenance. A single maintenance view can be used to modify the content of multiple related database tables consistently.

A DDIC maintenance view is not created on the database. The structure type defined by a maintenance view can be referenced in ABAP programs using `TYPE`. A maintenance view cannot, however, be accessed using ABAP SQL. Instead, the transaction `SE54` can be used to create dialogs called *maintenance dialogs* for maintenance views, which can themselves be used to edit the content of the tables of the maintenance views jointly in Table View Maintenance (transactions `SM30` and `SM31`).

When data records are inserted using DDIC maintenance views, all tables fields not in the view are given the type-specific initial values of the field. This is done regardless of whether the field is defined as [`NOT NULL`](ABENDDIC_DATABASE_TABLES_INIT.html) on the database.

All DDIC database tables grouped in a DDIC maintenance view must be joined using [foreign key dependencies](ABENDDIC_DATABASE_TABLES_FORKEYREL.html), which means that the join conditions of maintenance views are always derived from a foreign key. The first table included in the maintenance view is known as the primary table of the maintenance view. The tables added to this primary table using foreign keys are known as secondary tables. The following restrictions apply when selecting the secondary tables of a maintenance view:

A maintenance view implements an inner join. All key fields of the primary table must be included in its maintenance view. All key fields of secondary tables that are not part of the foreign key (that is, they are not joined with a key field already in the view using a join condition) must also be included in the view. This makes sure that the records inserted using a maintenance view can be written correctly to the tables in the view.

If a DDIC database table is joined with its [text table](ABENTEXT_TABLE_GLOSRY.html) in a DDIC maintenance view, the logon language is selected automatically.

In maintenance views, the key can be divided into a non-time-dependent area and a time-dependent area. The time-dependent area can, for example, contain date fields and time fields. The rows of views with time-dependent keys depend on dates and times.

When changing a time-dependent view, it is possible to restrict the new entries inserted to those that are only missing time information.

The `Access` setting in the maintenance status of a maintenance view can have the following values:

Like a DDIC database table, the maintenance status of a DDIC maintenance view has a [Display and Maintenance](ABENDDIC_DATABASE_TABLES_MAINT.html) setting alongside the `Access` setting. The setting must match the `Access` setting. The setting `Display/maintenance not allowed` is not possible here.

Alongside the maintenance status of the view, characteristics called maintenance characteristics can be defined for each view field:

A DDIC maintenance view also has a [delivery class](ABENDDIC_DATABASE_TABLES_DELIVERY.html). The delivery class of a maintenance view is analyzed in the extended table maintenance.

The delivery class of the basis tables of a maintenance view is not affected by this. The basis tables of a maintenance views have their own [delivery class](ABENDDIC_DATABASE_TABLES_DELIVERY.html). This delivery class is used for upgrades and transports between customer systems

-   The secondary tables must have an `N:1` dependency on the primary table or on the transitively preceding secondary table. This makes sure that no more than one dependent data record exists in each of the secondary tables for a specific data record in the primary table. An `N:1` dependency exists if the secondary table is the [check table](ABENCHECK_TABLE_GLOSRY.html) of the [foreign key](ABENFOREIGN_KEY_GLOSRY.html) in question.
-   If the secondary table is the [foreign key table](ABENFOREIGN_KEY_TABLE_GLOSRY.html), the foreign key fields must be key fields of a table or the foreign key must have the [cardinality](ABENCARDINALITY_GLOSRY.html)\\ `N:1` or `N:C`.

-   **Read only**
-   The maintenance view can only be used to read data.
-   **Read, change, delete, and insert**
-   The maintenance view can be used to change, delete, and insert data.
-   **Read and change**
-   The maintenance view can be used to read and change data, but not delete or insert it.
-   **Read and change (time-dependent views)**
-   The maintenance view can be used to insert only entries whose non-time-dependent part of the key does not differ from existing entries.

-   **Standard**
-   There are no restrictions on the view field.
-   **Read-only**
-   The DDIC maintenance view cannot be used to perform writes on the view field.
-   **Subset**
-   A field of this type is used to construct subsets when data is edited in extended table maintenance. Only a subset of the data is displayed. This subset is defined by entering an appropriate value in this field.
-   **Hidden**
-   A field of this type is not displayed in extended table maintenance and cannot be edited there. The content is initialized implicitly.

-   If the view is assigned one of the delivery classes `G` or `E`, the customer namespace for the entries of the view must be defined in the DDIC database table `TRESC`.
-   The transport interface of extended table maintenance must match the delivery class.

abenabap.html abenabap\_dictionary.html abenddic\_views.html abenddic\_table\_views.html