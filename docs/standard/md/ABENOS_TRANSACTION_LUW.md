---
title: "ABENOS_TRANSACTION_LUW"
description: |
  ABENOS_TRANSACTION_LUW - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENOS_TRANSACTION_LUW.htm"
abapFile: "ABENOS_TRANSACTION_LUW.html"
keywords: ["update", "do", "if", "method", "class", "data", "ABENOS", "TRANSACTION", "LUW"]
---

ABAP objects and the Object Services are part of a hybrid world in which object-oriented and classic applications as well as mixed forms containing both programming styles can exist side by side. The interaction between classic and object-oriented update techniques is discussed below.

In a classic application, statements that change the database normally are programmed in update modules. These updates are registered when programs are executed, and the update is triggered using the statement `COMMIT WORK`.

If the services of the Object Services are accessed in a classic application, that is, if a persistent object is used or an object-oriented transaction started, an implicit top level transaction is automatically created and started in compatibility mode the first time the services are accessed. All explicit accesses to the Persistence and Transaction Service are embedded in this implicit top level transaction.

If `COMMIT WORK` is executed in a classic application, the top level transaction is ended at the same time and the Transaction Service starts updating all the persistent objects that were changed up to this point. The persistent objects are updated as in classic applications. Accordingly, all changes to persistent objects within the top level transaction are canceled by a classic `ROLLBACK WORK`.

In particular, the changes that were confirmed in object-oriented subtransactions with method `END` are updated, whereas changes that were canceled with `UNDO` are ignored. It can therefore be advisable to work with object-oriented (sub) transactions also in classic applications to have access to an easy-to-use `COMMIT`/`ROLLBACK` mechanism.

Object-oriented transaction mode is set for object-oriented transactions. The top level transaction is the first transaction to be started explicitly.

Within a program in object-oriented mode, classic components that use and register classic update modules might be called. This is possible as long as none of the classic components execute the statement `COMMIT WORK`, since this would produce a runtime error in an object-oriented transaction.

The update of the classic update modules is triggered by the implicit `COMMIT WORK` at the end of the object-oriented top level transaction. If another object-oriented transaction is started in a called classic component, it is automatically the subtransaction of the top level transaction and is also updated when it ends, before the persistent objects.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_object\_services.html abenabap\_object\_services\_transact.html