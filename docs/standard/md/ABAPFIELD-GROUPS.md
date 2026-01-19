---
title: "ABAPFIELD-GROUPS"
description: |
  ABAPFIELD-GROUPS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFIELD-GROUPS.htm"
abapFile: "ABAPFIELD-GROUPS.html"
keywords: ["insert", "if", "method", "class", "data", "ABAPFIELD", "GROUPS"]
---

[Short Reference](ABAPFIELD-GROUPS_SHORTREF.html)

`FIELD-GROUPS \{ header | field_group \}.`

Declares a field group for the [extract dataset](ABENEXTRACT_DATASET_GLOSRY.html) of the program. Each field group represents the name of a row structure of the extract dataset. Any number of field groups can be created in a program. The actual components of a field group are defined using the statement [`INSERT`](ABAPINSERT_FG.html).

The name of a field group is either the predefined name `header` or any name `field_group`. If a field group `header` is declared, it automatically becomes the initial part of all remaining field groups of the program and its components form the standard sort key of the extract dataset for the statement [`SORT`](ABAPSORT_EXTRACT.html).

The statement `FIELD-GROUPS` is possible in the global declaration part of an executable program, a function pool, a module pool, or a subroutine pool, as well as in the subroutines and function modules. Field groups that are declared in [procedures](ABENPROCEDURE_GLOSRY.html) are only visible there.

See [`INSERT`](ABAPINSERT_FG.html).

-   Since global data objects can only be defined as components of field groups using the statement `INSERT`, it is best to declare field groups only in the global declaration part of a program.
-   The `FIELD-GROUPS` statement is forbidden in class pools or interface pools and in the methods of local classes of other programs.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenabap\_extracts\_extended.html