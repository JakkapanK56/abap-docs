---
title: "ABAPEXPORT_INTERNAL"
description: |
  ABAPEXPORT_INTERNAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXPORT_INTERNAL.htm"
abapFile: "ABAPEXPORT_INTERNAL.html"
keywords: ["do", "if", "data", "internal-table", "ABAPEXPORT", "INTERNAL"]
---

**These additions are for internal use only. \\nDo not use them in application programs.**

[1. `... CODE PAGE HINT cp`](#ABAP_ADDITION_1@3@)

[2. `... USING subr[(prog)]`](#ABAP_ADDITION_2@3@)

In `cp`, a [code page](ABENCODEPAGE_GLOSRY.html) from database table `TCP00` can be specified that overwrites the automatically stored ID.

This addition can be specified for [`EXPORT TO DATABASE`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) if a table work area `dbtab` is declared for the relevant database table using [`TABLES`](ABAPTABLES.html). The addition `FROM wa` is not allowed. The data is not exported to the database table. Instead, the subroutine `subr` is called for each row that would be written to the database without this addition. In the subroutine, the data can be accessed that would otherwise be written to the database table in the table work area `dbtab`.

The subroutine must either be defined in the same program or in a program, `prog`, specified explicitly. Its name must be prefixed with the name of the database table (*dbtab*). The subroutine must have a `USING` parameter of type `any`, but this is currently not supplied.

See [`IMPORT` - Internal Additions](ABAPIMPORT_INTERNAL.html)

-   For external use, `TO INTERNAL TABLE` is provided instead of `TO DATABASE ... USING`.
-   Specifying an external program `prog` is the same as the obsolete variant of [`PERFORM`](ABAPPERFORM_OBSOLETE.html).
-   The tables used as the [export/import tables](ABENEXPORT_DATA_CLUSTER_INDX.html) must have structures for data clusters in multiple rows, since `TABLES` cannot be used for deep structures.

abenabap.html abenabap\_reference.html abendata\_cluster.html abapexport\_data\_cluster.html