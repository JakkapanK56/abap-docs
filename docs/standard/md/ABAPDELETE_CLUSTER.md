---
title: "ABAPDELETE_CLUSTER"
description: |
  ABAPDELETE_CLUSTER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDELETE_CLUSTER.htm"
abapFile: "ABAPDELETE_CLUSTER.html"
keywords: ["delete", "if", "case", "class", "data", "ABAPDELETE", "CLUSTER"]
---

[Short Reference](ABAPDELETE_FROM_SHORTREF.html)

`DELETE FROM \{\ \{MEMORY ID id\}\              |\ \{DATABASE      dbtab(ar) [CLIENT cl] ID id\}\              |\ \{SHARED MEMORY dbtab(ar) [CLIENT cl] ID id\}\              |\ \{SHARED BUFFER dbtab(ar) [CLIENT cl] ID id\}\ \}.`

This statement deletes a [data cluster](ABENDATA_CLUSTER_GLOSRY.html) stored in the [ABAP memory](ABENABAP_MEMORY_GLOSRY.html), in a database table, or in a [cross-transaction application buffer](ABENCROSSTRANS_APP_BUFFER_GLOSRY.html) of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html) using the statement [`EXPORT`](ABAPEXPORT_DATA_CLUSTER.html). The data cluster is identified by its ID `id` and, except in the case of the ABAP memory, by the name of a database table `dbtab`, a range `ar`, and an optional client `cl`. The same rules apply to `dbtab`, `ar`, `cl`, and `id` as to accessing the appropriate repository with the [`IMPORT`](ABAPIMPORT_MEDIUM.html) statement.

In this example, two fields are written to a data cluster in an application buffer of the current AS instance, extracted, and then deleted. Accessing the same data cluster again sets `sy-subrc` to 4.

`CX_SY_EXPIMP_DB_SQL_ERROR`

-   See also [Classes for Data Clusters](ABENCL_ABAP_EXPIMP.html).
-   Since each client represents a self-contained unit, the addition `CLIENT` should not be used in application programs.

-   *Cause:* SQL error in deletion from the database. \\n*Runtime error:*\\ [`DBIF_...`](ABENABAP_SQL_EXCEPTIONS.html)

-   *Cause:* Error when deleting in cross-transaction application buffer
    *Runtime error:*\\ `DELETE_BUFFER_FAILED`\\
    *Runtime error:*\\ `DELETE_BUFFER_EXTERNAL_ERROR`\\
    *Runtime error:*\\ `DELETE_BUFFER_INTERNAL_ERROR`\\
    *Runtime error:*\\ `DELETE_BUFFER_KEY_NOT_FOUND`

DATA: id TYPE c LENGTH 4 VALUE 'TEXT', \\n text1 TYPE string VALUE 'Tina', \\n text2 TYPE string VALUE 'Ike'. \\n\\ \\nEXPORT p1 = text1 \\n p2 = text2 TO SHARED BUFFER demo\_indx\_blob(XY) ID id. \\n\\ \\nIMPORT p1 = text2 \\n p2 = text1 FROM SHARED BUFFER demo\_indx\_blob(XY) ID id. \\nASSERT sy-subrc = 0. \\n\\ \\nDELETE FROM SHARED BUFFER demo\_indx\_blob(XY) ID id. \\n\\ \\nIMPORT p1 = text2 \\n p2 = text1 FROM SHARED BUFFER demo\_indx\_blob(XY) ID id. \\nASSERT sy-subrc = 4. `**sy-subrc**` **Meaning** 0 The specified data cluster was found and deleted. 4 The specified data cluster was not found. abenabap.html abenabap\_reference.html abendata\_cluster.html