---
title: "ABENABAP_MESSAGE_UPDATE"
description: |
  ABENABAP_MESSAGE_UPDATE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_MESSAGE_UPDATE.htm"
abapFile: "ABENABAP_MESSAGE_UPDATE.html"
keywords: ["update", "if", "case", "data", "types", "ABENABAP", "MESSAGE", "UPDATE"]
---

During [updates](ABENUPDATE_GLOSRY.html), the behavior of messages depends on the work process.

-   During [synchronous updates](ABENSYNCHRONOUS_UPDATE_GLOSRY.html) and [asynchronous updates](ABENASYNCHRONOUS_UPDATE_GLOSRY.html) in an update work process in an [update session](ABENUPDATE_SESSION_GLOSRY.html), all messages except type `S` cause the update to terminate without creating a runtime error. The update work process performs a database rollback, enters appropriate comments in the associated database tables `VB...`, and notifies the user whose program created the entries by SAPmail.
-   During [local updates](ABENLOCAL_UPDATE_GLOSRY.html), all messages apart from type `S` and *X* are converted to messages of type `A` and these behave in the same way as in [dialog processing](ABENABAP_MESSAGE_DIALOG.html), which means they lead to a termination and a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html). Messages of type `S` and *X* are also handled in the same way as in dialog processing.

-   In exceptional cases, an update work process may be connected to a dialog (for example, during debugging). Messages then behave as in local updates.
-   In updates, type *A* messages cannot be caught using the predefined exception [`error_message`](ABAPCALL_FUNCTION_PARAMETER.html) in function module calls, since here the statement [`ROLLBACK WORK`](ABAPROLLBACK.html) is executed implicitly, and this is not allowed in updates. Therefore, the runtime error `MESSAGE_ROLLBACK_IN_POSTING` is produced when type *A* messages are caught using `error_message`. Messages of types *I*, *W*, and *E*, on the other hand, can be caught.
-   For more information, see [Forbidden Statements in Updates](ABENDB_COMMIT_DURING_UPDATE.html).

abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html abenabap\_messages\_types.html