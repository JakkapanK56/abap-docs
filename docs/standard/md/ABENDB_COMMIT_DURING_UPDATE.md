---
title: "ABENDB_COMMIT_DURING_UPDATE"
description: |
  ABENDB_COMMIT_DURING_UPDATE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDB_COMMIT_DURING_UPDATE.htm"
abapFile: "ABENDB_COMMIT_DURING_UPDATE.html"
keywords: ["select", "update", "do", "if", "data", "types", "ABENDB", "COMMIT", "DURING", "UPDATE"]
---

In [updates](ABENUPDATE_GLOSRY.html), that is, when an [update function module](ABENUPDATE_FUNCTION_MODULE_GLOSRY.html) triggered using [`COMMIT WORK`](ABAPCOMMIT.html) is being processed, the following applies:

If a database commit or database rollback occurs during an update, it terminates with a runtime error. Any statements that disrupt the update controller can produce undefined behavior.

Any statements that would produce a database commit or database rollback or would disrupt update control are therefore forbidden and produce a runtime error as soon as they are called and before the runtime error can occur in another place. These are the following statements:

-   There can be no [database commits](ABENDATABASE_COMMIT_GLOSRY.html) or [database rollbacks](ABENDATABASE_ROLLBACK_GLOSRY.html).
-   The update controller must not be modified.

-   The statements

-   [`COMMIT WORK`](ABAPCOMMIT.html)
-   [`ROLLBACK WORK`](ABAPROLLBACK.html)
-   [`COMMIT|ROLLBACK CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html) on the [standard database](ABENSTANDARD_DB_GLOSRY.html).

-   produce a database commit or database rollback explicitly and hence produce the runtime errors `COMMIT_IN_POSTING` or `ROLLBACK_IN_POSTING` directly during the update.
-   The statements

-   [`CALL DIALOG`](ABAPCALL_DIALOG.html)
-   [`CALL SCREEN`](ABAPCALL_SCREEN.html)
-   [`CALL SELECTION-SCREEN`](ABAPCALL_SELECTION_SCREEN.html)
-   [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html)
-   [`LEAVE LIST-PROCESSING`](ABAPLEAVE_LIST-PROCESSING.html)
-   [`LEAVE PROGRAM`](ABAPLEAVE_PROGRAM.html)
-   [`LEAVE SCREEN`](ABAPLEAVE_SCREEN.html)
-   [`LEAVE TO LIST-PROCESSING`](ABAPLEAVE_TO_LIST-PROCESSING.html)
-   [`LEAVE TO TRANSACTION`](ABAPLEAVE_TO_TRANSACTION.html)
-   [`SET SCREEN`](ABAPSET_SCREEN.html)
-   [`SUBMIT`](ABAPSUBMIT.html)

-   produce either an implicit database commit or disrupt the update controller and hence produce the runtime error `POSTING_ILLEGAL_STATEMENT` directly during the update.
-   Executing the [Native SQL](ABENNATIVE_SQL_GLOSRY.html) statements `COMMIT WORK` and `ROLLBACK WORK` produces the runtime error `POSTING_ILLEGAL_STATEMENT` during the update.
-   Type *A* messages caught using the predefined exception [`error_message`](ABAPCALL_FUNCTION_PARAMETER.html) in function module calls execute the statement `ROLLBACK WORK` implicitly and produce the runtime message `MESSAGE_ROLLBACK_IN_POSTING` in updates.

-   The runtime errors occur directly in those statements that would produce incorrect behavior during the update, which makes any errors easier to find than if, for example, the exception waited for an implicit database commit to occur.
-   Using the statement [`MESSAGE`](ABAPMESSAGE.html) to send [messages](ABENMESSAGE_GLOSRY.html) for the message types *I*, *W*, *E*, and *A* produces an implicit database rollback, but no direct runtime error can be raised here for reasons of downward compatibility. The behavior of [messages in updates](ABENABAP_MESSAGE_UPDATE.html) applies instead.
-   [Synchronous](ABENSYNCHRONOUS_RFC_GLOSRY.html) or [asynchronous remote function calls](ABENASYNCHRONOUS_RFC_GLOSRY.html) that generally produce a database commit, do not do so during update processing. During update processing, sRFC and aRFC can be used without producing a runtime error.
-   See also [Authorization Checks in Updates](ABENAUTHORITY_DURING_UPDATE.html).

abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html abensap\_luw.html