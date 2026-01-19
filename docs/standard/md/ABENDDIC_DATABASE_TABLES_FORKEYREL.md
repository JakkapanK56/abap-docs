---
title: "ABENDDIC_DATABASE_TABLES_FORKEYREL"
description: |
  ABENDDIC_DATABASE_TABLES_FORKEYREL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_DATABASE_TABLES_FORKEYREL.htm"
abapFile: "ABENDDIC_DATABASE_TABLES_FORKEYREL.html"
keywords: ["do", "data", "ABENDDIC", "DATABASE", "TABLES", "FORKEYREL"]
---

A foreign key dependency is a semantic dependency between two DDIC database tables, namely a [foreign key table](ABENFOREIGN_KEY_TABLE_GLOSRY.html) and a [check table](ABENCHECK_TABLE_GLOSRY.html).

The definition of a foreign key dependency is done in the foreign key table. By assigning check tables to table fields, the table fields become [foreign keys](ABENFOREIGN_KEY_GLOSRY.html).

Foreign key dependencies are evaluated during input checks, for input help on dynpros and in Web Dynpros, when creating [views](ABENDDIC_VIEWS.html), and in [lock objects](ABENLOCK_OBJECT_GLOSRY.html). In the ABAP programming language or in ABAP SQL, foreign keys are not evaluated.

In a check table, [obsolete data can be flagged as obsolete](ABENDDIC_DEPRECATION.html). This has an effect on the input check and input help on dynpros or Web Dynpros.

-   [Check table](ABENDDIC_DATABASE_TABLES_CHECKTAB.html)
-   [Foreign Key](ABENDDIC_DATABASE_TABLES_FORKEY.html)

abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_database\_tables\_sema.html abenddic\_database\_tables\_semasspec.html