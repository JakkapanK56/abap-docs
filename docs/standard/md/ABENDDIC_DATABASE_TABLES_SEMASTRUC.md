---
title: "ABENDDIC_DATABASE_TABLES_SEMASTRUC"
description: |
  ABENDDIC_DATABASE_TABLES_SEMASTRUC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_DATABASE_TABLES_SEMASTRUC.htm"
abapFile: "ABENDDIC_DATABASE_TABLES_SEMASTRUC.html"
keywords: ["delete", "do", "if", "case", "data", "types", "ABENDDIC", "DATABASE", "TABLES", "SEMASTRUC"]
---

The following semantic properties are the same as those of a [DDIC structure](ABENDDIC_STRUCTURES_SEMA.html):

-   Short text
-   Documentation
-   Short text of table fields
-   Output style of table fields
-   Reference field for components of the [built-in data types](ABENDDIC_BUILTIN_TYPES.html)\\ `CURR` and `QUAN`. If a field in a DDIC database table is used as a reference field in a different table, the field cannot be deleted.
-   Search help

-   The semantic properties apply mainly to the DDIC database table in question and they are not use-case specific. Due to the principle of [separation of concerns](ABENSEPARATION_CONCERNS_GUIDL.html), the description of a table field must not necessarily be suitable for displaying a help text of an application that is processing the table.
-   Like regular structure components, [search helps](ABENSEARCH_HELP_GLOSRY.html) can be assigned to table fields or the whole table. If a table field is not to be used directly for input fields on dynpros or Web Dynpros, due to [separation of concerns](ABENSEPARATION_CONCERNS_GUIDL.html), it is not recommended that search helps are assigned.

abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_database\_tables\_sema.html