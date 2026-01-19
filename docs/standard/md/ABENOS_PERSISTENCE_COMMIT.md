---
title: "ABENOS_PERSISTENCE_COMMIT"
description: |
  ABENOS_PERSISTENCE_COMMIT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENOS_PERSISTENCE_COMMIT.htm"
abapFile: "ABENOS_PERSISTENCE_COMMIT.html"
keywords: ["update", "if", "method", "class", "data", "ABENOS", "PERSISTENCE", "COMMIT"]
---

The ABAP statement `COMMIT WORK` must be executed to apply any changes to the instances of persistent classes to the actual persistent objects in the database. If an object-oriented transaction from the transaction service is not used explicitly, the statement `COMMIT WORK` must be specified explicitly. If not, it is encapsulated in the transaction service. Specifying the statement `COMMIT WORK` explicitly means, in the transaction service, that the top level transaction runs in compatibility mode.

The classic statement `COMMIT WORK` has additional functions when used in conjunction with object services. Before the statement closes the SAP LUW and triggers an update, it calls methods of the persistence service internally. These methods collect the changes made to managed objects of the persistence service and pass them to a special update function module using `CALL FUNCTION ... IN UPDATE TASK`. This means that the persistence service works with traditional update methods. The update module is usually registered after any update modules that have already been registered. The update is then triggered, and the update task executes the update modules in the order in which they were registered.

After the statement `COMMIT WORK`, the attributes of a persistent object in the ABAP program are initial (the method `IF_OS_STATE~INVALIDATE` was called).

If the changes are to be made to managed objects directly rather than using the update module, the update mode of the implicitly used transaction service must be changed by executing the following statements before the statement `COMMIT WORK`:

DATA TM type ref to IF\_OS\_TRANSACTION\_MANAGER. \\nDATA T type ref to IF\_OS\_TRANSACTION. \\n... \\nTM = CL\_OS\_SYSTEM=>GET\_TRANSACTION\_MANAGER( ). \\nT  = TM->GET\_CURRENT\_TRANSACTION( ). \\nT->SET\_MODE\_UPDATE( OSCON\_DMODE\_DIRECT ). \\nCOMMIT WORK.

Persistent objects can be also used within the update modules during updates. The update task changes the persistent objects in update modules as the last step after processing all the registered update modules in the database.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_object\_services.html abenabap\_object\_services\_persist.html