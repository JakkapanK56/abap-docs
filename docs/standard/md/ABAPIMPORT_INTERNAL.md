---
title: "ABAPIMPORT_INTERNAL"
description: |
  ABAPIMPORT_INTERNAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPIMPORT_INTERNAL.htm"
abapFile: "ABAPIMPORT_INTERNAL.html"
keywords: ["select", "update", "do", "if", "data", "internal-table", "ABAPIMPORT", "INTERNAL"]
---

**These additions are for internal use only. \\nDo not use them in application programs.**

[1. `... FROM LOGFILE ID key`](#ABAP_ADDITION_1@3@)

[2. `... USING subr[(prog)]`](#ABAP_ADDITION_2@3@)

Imports data objects from update data records. `key` expects the update key that was assigned by the system, with the sequential request number. If the specified update key does not exist in the database table `VBDATA`, the runtime error `IMPORT_UNEXPECTED_END_OF_DATA` occurs.

This addition can be specified for [`IMPORT FROM DATABASE`](ABAPIMPORT_MEDIUM.html) if a table work area `dbtab` is declared for the relevant database table using [`TABLES`](ABAPTABLES.html). The addition `TO wa` is not allowed. The data is not imported from the database table. Instead, the subroutine `subr` is called. In the subroutine, the first row of a data cluster must be provided in the table work area `dbtab` as it would be read from the database. The subroutine is then called automatically as often as required until a complete data cluster has been imported. The table work area `dbtab` must be filled accordingly in every call. If no correct data cluster is provided, the behavior is undefined, and exceptions may be raised. If the addition `USING subr` is used, the return code `sy-subrc` is set to the value 0 or 4. It is set to the value 4 if it has a value other than 0 when the subroutine is exited.

The subroutine must either be defined in the same program or in a program, `prog`, specified explicitly. Its name must be prefixed with the name of the database table *dbtab*. The subroutine must have a `USING` parameter of type `any`, which is currently not supplied.

Export of a data cluster to an internal table instead of to a database table. After that, import from the internal table

-   `TO INTERNAL TABLE` is intended to be specified for external use instead of `FROM DATABASE ... USING`.
-   Specifying an external program `prog` is the same as the obsolete variant of [`PERFORM`](ABAPPERFORM_OBSOLETE.html).

TABLES demo\_indx\_table. \\n\\ \\nDATA demo\_indx\_tab TYPE TABLE OF demo\_indx\_table. \\n\\ \\nSELECT \* \\n FROM sflight \\n INTO TABLE @DATA(sflight\_tab). \\n\\ \\nEXPORT sflight\_tab TO DATABASE demo\_indx\_table(fl) ID 'FLIGHTS' \\n USING demo\_indx\_table\_export. \\n\\ \\n... \\n\\ \\ndemo\_indx\_table-srtf2 = 0. \\nIMPORT sflight\_tab FROM DATABASE demo\_indx\_table(fl) ID 'FLIGHTS' \\n USING demo\_indx\_table\_import. \\n\\ \\n... \\n\\ \\nFORM demo\_indx\_table\_export USING foo. \\n APPEND demo\_indx\_table TO demo\_indx\_tab. \\nENDFORM. \\n\\ \\nFORM demo\_indx\_table\_import USING foo. \\n demo\_indx\_table = demo\_indx\_tab\[ srtf2 = demo\_indx\_table-srtf2 \]. \\n demo\_indx\_table-srtf2 += 1. \\nENDFORM. abenabap.html abenabap\_reference.html abendata\_cluster.html abapimport\_data\_cluster.html