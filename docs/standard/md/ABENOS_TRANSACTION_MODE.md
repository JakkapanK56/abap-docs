---
title: "ABENOS_TRANSACTION_MODE"
description: |
  ABENOS_TRANSACTION_MODE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENOS_TRANSACTION_MODE.htm"
abapFile: "ABENOS_TRANSACTION_MODE.html"
keywords: ["select", "update", "delete", "do", "while", "if", "try", "catch", "method", "class", "data", "ABENOS", "TRANSACTION", "MODE"]
---

The transaction service in Object Services is integrated into classic transaction processing or is itself part of the SAP LUWs, which means a program must be able to determine whether it is working with classic or object-oriented transactions. This requires the term *transaction mode* to be introduced, which can be specified once for each program.

Each program working with persistent objects has a transaction mode that is defined either explicitly or implicitly when the Object Services are initialized. Each program also has a top level transaction (a transaction object whose reference can be obtained using the method `IF_OS_TRANSACTION_MANAGER~GET_TOP_TRANSACTION`) while it is working with persistent objects. The top level transaction is responsible for updating the persistent objects. The transaction mode of the program is also the transaction mode of the top level transaction and can be queried using the method `IF_OS_TRANSACTION~GET_MODES` in the parameter `E_EXTERNAL_COMMIT`.

There are two transaction modes:

The transaction mode can be defined, and the top level transaction created as follows:

At the end of a top level transaction (using `COMMIT WORK` in compatibility mode or the method `IF_OS_TRANSACTION~END` in object-oriented mode), the transaction service updates the changes to persistent objects in the database. Internal update function modules are called implicitly at this time.

The way that the update function modules are executed is specified by the initialization of the Object Services using the method `CL_OS_SYSTEM=>INIT_AND_SET_MODES` or after starting the top level transaction (one-off specification) using the method `IF_OS_TRANSACTION~SET_MODE_UPDATE`. Since `CL_OS_SYSTEM=>INIT_AND_SET_MODES` can only be called once for each program, `IF_OS_TRANSACTION~SET_MODE_UPDATE` makes it possible to change an update mode that was set implicitly.

The input parameter `I_UPDATE_MODE` with the type `OS_DMODE` can be used for both methods to set the update mode. Possible values are:

`OSCON_DMODE_LOCAL` and `OSCON_DMODE_UPDATE_TASK_SYNC` cannot be specified in compatibility mode, since there they can be set by the ABAP statements `COMMIT WORK AND WAIT` and `SET UPDATE TASK LOCAL`.

When an object-oriented transaction is created in the ABAP Workbench, the initial update mode of the top level transaction is defined through selection of the relevant radio button.

The following example assumes that the program is running in object-oriented transaction mode. This requires either the transaction to be flagged as an object transaction in transaction maintenance, for which the *`OO` transaction model* is marked, or the method `INIT_AND_SET_MODES` to be called before a persistent object is accessed. The parameter `I_EXTERNAL_COMMIT` is set to `OSCON_FALSE`. Only then does the method `END` trigger an update. If the above does not apply, the program is in compatibility mode, where the statement `COMMIT WORK` must be specified explicitly after a transaction ends.

data TM type ref to IF\_OS\_TRANSACTION\_MANAGER.\\ 
data T  type ref to IF\_OS\_TRANSACTION.\\ 
...\\ 
TM = CL\_OS\_SYSTEM=>GET\_TRANSACTION\_MANAGER( ).\\ 
T  = TM->CREATE\_TRANSACTION( ).\\ 
...\\ 
TRY.\\ 
    T->START( ).\\ 
      ... "Change persistent Objects\\ 
    T->END( ).\\ 
  CATCH CX\_OS\_ERROR.\\ 
    ...\\ 
ENDTRY.

-   Compatibility mode
-   Compatibility mode (`E_EXTERNAL_COMMIT` is `OSCON_TRUE`) makes it possible to use persistent objects within classic SAP LUWs. The statement `COMMIT WORK` must be defined explicitly in the program to commit changes. When executed, implicit methods of the persistence service are called implicitly to commit the changes made to persistent objects.
-   When using the persistence service in compatibility mode, the system always implicitly starts one update process, which also deletes any locks in the update task.
-   Object-oriented transaction mode
-   The object-oriented transaction mode (`E_EXTERNAL_COMMIT` is `OSCON_FALSE`) is used to write new fully object-oriented applications without having to worry about the statement `COMMIT WORK`. In object-oriented transaction mode, `COMMIT WORK` is triggered when the method `END` is called for a top level transaction. The statement `COMMIT WORK` is not allowed within object-oriented transactions.

-   If the method `CL_OS_SYSTEM=>INIT_AND_SET_MODES` was not executed in a program before the first access to the persistence service, the service starts it with the default values that set the transaction mode to compatibility mode and the update mode to asynchronous. A top level transaction is implicitly created and started at the same time to handle the persistent objects of the program. All other transactions that are started in the program with `IF_OS_TRANSACTION~START` are subtransactions of the top level transaction that is running in compatibility mode. This makes it possible to work in classic ABAP programs with persistent objects without having to explicitly worry about the transaction mode. An example can be found under Creating a Persistent Object.
-   If the method `CL_OS_SYSTEM=>INIT_AND_SET_MODES` is executed before the persistence service is accessed in a program for the first time, the transaction mode can be set explicitly to compatibility mode or object-oriented mode by passing the values `OSCON_TRUE` or `OSCON_FALSE` to the parameter `I_EXTERNAL_COMMIT`. Since the static constructors of the persistence service are usually executed at the beginning of a processing block, the event `LOAD-OF-PROGRAM` or the constructor of an application class can be used, for example, to call `CL_OS_SYSTEM=>INIT_AND_SET_MODES`. A program that was not started as an [object transaction](ABENOO_TRANSACTION_GLOSRY.html) can thus be executed as an object-oriented transaction. In object-oriented transaction mode, the first transaction that is started in the program with `IF_OS_TRANSACTION~START` is a top level transaction, whereas in compatibility mode, the top level transaction is always created implicitly.
-   If the *OO transaction model* field is selected when an object transaction is created in the ABAP Workbench, the transaction mode of the corresponding program is automatically set to object-oriented (`CL_OS_SYSTEM=>INIT_AND_SET_MODES` is executed implicitly with the relevant parameters) when the transaction is called. The first transaction that is started in the program with `IF_OS_TRANSACTION~START` is a top level transaction.

-   `OSCON_DMODE_DEFAULT`, `OSCON_DMODE_UPDATE_TASK` for asynchronous updates
-   `OSCON_DMODE_UPDATE_TASK_SYNC` for synchronous updates
-   `OSCON_DMODE_LOCAL` for local updates
-   `OSCON_DMODE_DIRECT` for saving directly

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_object\_services.html abenabap\_object\_services\_transact.html