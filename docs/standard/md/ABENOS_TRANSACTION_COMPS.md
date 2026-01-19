---
title: "ABENOS_TRANSACTION_COMPS"
description: |
  ABENOS_TRANSACTION_COMPS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENOS_TRANSACTION_COMPS.htm"
abapFile: "ABENOS_TRANSACTION_COMPS.html"
keywords: ["update", "do", "if", "method", "class", "data", "ABENOS", "TRANSACTION", "COMPS"]
---

An object-oriented transaction is represented by a transaction object that is managed by a transaction manger, which is also an object. The transaction manager represents the transaction service with respect to the ABAP program.

To create a transaction manager, the static method `GET_TRANSACTION_MANAGER` of the general system service class `CL_OS_SYSTEM` is required. The [transaction mode](ABENOS_TRANSACTION_MODE.html) is also set with the method `INIT_AND_SET_MODES` of this class.

An ABAP program does not work with the Transaction Manager and the transaction using class reference variables. Instead the program accesses the Transaction Manager and the transaction using the interfaces `IF_OS_TRANSACTION_MANAGER` and `IF_OS_TRANSACTION`.

Most components of the system service class `CL_OS_SYSTEM` are used internally by the Object Services. Two methods must be used in an application program to be able to work explicitly with object-oriented transactions.

The transaction manager manages the object-oriented transactions of the ABAP program and is executed using the interface `IF_OS_TRANSACTION_MANAGER`.

Transactions are controlled using interface `IF_OS_TRANSACTION`.

-   `INIT_AND_SET_MODES`
-   This static method initializes the entire Object Services and creates the necessary service objects. `INIT_AND_SET_MODES` is executed no more than once for each ABAP program. Every additional call causes an exception.
-   `INIT_AND_SET_MODES` is used together with the transaction service to set the [transaction mode](ABENOS_TRANSACTION_MODE.html) of the top level transaction. To do this, the constant `OSCON_TRUE` or `OSCON_FALSE` of type pool `OSCON` must be passed to the input parameter `I_EXTERNAL_COMMIT`. `OSCON_TRUE` sets the compatibility mode for which `COMMIT WORK` must be defined explicitly in the program, whereas `OSCON_FALSE` sets object-oriented transaction mode, for which an explicit `COMMIT WORK` is not allowed. Once the compatibility mode has been set, a top level transaction is implicitly created and started. All other transactions of the program are nested in this transaction.
-   Update mode is controlled with the other input parameter `I_UPDATE_MODE` of type `OS_DMODE`. Possible input parameters are: `OSCON_DMODE_DEFAULT` or `OSCON_DMODE_UPDATE_TASK` for asynchronous updates, `OSCON_DMODE_UPDATE_TASK_SYNC` for synchronous updates, `OSCON_DMODE_LOCAL` for local updates, and `OSCON_DMODE_DIRECT` for direct saves when using `COMMIT WORK`. The constants `OSCON_DMODE_LOCAL` and`OSCON_DMODE_UPDATE_TASK_SYNC` cannot be specified in compatibility mode. If local or direct updates are chosen, the statement `SET UPDATE TASK LOCAL` is executed implicitly when the transaction is started.
-   `INIT_AND_SET_MODES` is executed implicitly the first time an Object Services class is accessed with the default value compatibility mode and asynchronous updates. If `INIT_AND_SET_MODES` is to be executed explicitly, this must be done before an implicit call for it to take effect (the implicit call does not take place).
-   `GET_TRANSACTION_MANAGER`
-   This static method returns a reference to the transaction manager in the return value `RESULT` of type `IF_OS_QUERY_MANAGER`. The transaction manager is created when Object Services are initialized.

-   `IF_OS_TRANSACTION_MANAGER~CREATE_TRANSACTION`
-   Creates a transaction and returns a reference to the transaction in the return value `RESULT` of type `IF_OS_TRANSACTION`.
-   `IF_OS_TRANSACTION_MANAGER~GET_CURRENT_TRANSACTION`
-   Returns a reference to the current transaction in the return value `RESULT` of type `IF_OS_TRANSACTION`.
-   `IF_OS_TRANSACTION_MANAGER~GET_TOP_TRANSACTION`
-   Returns a reference to the top level transaction in the return value `RESULT` of type `IF_OS_TRANSACTION`.

-   `IF_OS_TRANSACTION~START`
-   Starts the transaction. If an implicit top level transaction does not yet exist, it becomes the top level transaction. Otherwise it becomes a subtransaction. A transaction must have status `OSCON_TSTATUS_NEW` so that it can be started. Each transaction thus can only be started once per program. A transaction cannot be started again using `START` if it was ended using `END`, since this would invalidate the transaction object in the program. A new transaction must be created, but the same reference variable can be used again.
-   The `COMMIT WORK` statement is not allowed between the `START` and `END` methods.
-   `IF_OS_TRANSACTION~END`
-   Ends the transaction. Changes to persistent objects are stored until the `COMMIT WORK` or `ROLLBACK WORK` of the top level transaction. If the transaction is a top level transaction, `COMMIT WORK` is raised implicitly when `END` is encountered. This starts the update and invalidates the persistent objects. If a persistent object is accessed again, it is loaded from the database.
-   `IF_OS_TRANSACTION~UNDO`
-   Ends the transaction. The changes made to persistent objects in the transaction are canceled and the objects are returned to the state they had prior to the transaction. If the transaction is an object-oriented top level transaction, `ROLLBACK WORK` is raised implicitly when an `UNDO` is performed.
-   `IF_OS_TRANSACTION~END_AND_CHAIN`
-   Ends the transaction and immediately starts a new one. If the transaction is an object-oriented top level transaction, changed persistent objects are written to the database but are not invalidated. Returns a reference to the current transaction in return value `RESULT` of type `IF_OS_TRANSACTION`.
-   `IF_OS_TRANSACTION~UNDO_AND_CHAIN`
-   Cancels the changes made to persistent objects in the transaction and starts a new transaction. Returns a reference to the current transaction in return value `RESULT` of type `IF_OS_TRANSACTION`.
-   `IF_OS_TRANSACTION~REGISTER_CHECK_AGENT`
-   Registers an object as a checking agent, which is called by the transaction for checking purposes before the transaction ends. An interface reference to this type of object is passed to the input parameter `I_CHECK_AGENT` of type `IF_OS_CHECK`.
-   `IF_OS_TRANSACTION~GET_STATUS`
-   Returns the transaction status in the `RESULT` return value of type `OS_STATUS`. The following values (constants of type pool `OSCON`) are possible:

-   `OSCON_TSTATUS_NEW`
-   The transaction has not been started. Only transactions in this status can be started using `START`.
-   `OSCON_TSTATUS_RUNNING`
-   The transaction has been started and is active.
-   `OSCON_TSTATUS_END_REQ`
-   The transaction was ended using `IF_OS_TRANSACTION~END` and is just starting a checking agent or is waiting for an event handler.
-   `OSCON_TSTATUS_FIN_SUCCESS`
-   The transaction ended successfully using `IF_OS_TRANSACTION~END`.
-   `OSCON_TSTATUS_FIN_UNDO`
-   The transaction was ended using `IF_OS_TRANSACTION~UNDO` and the persistent objects were returned to their initial state.
-   `OSCON_TSTATUS_FIN_ABORT`
-   The transaction was ended using `IF_OS_TRANSACTION~UNDO` but the persistent objects were not returned to their initial state.

-   `IF_OS_TRANSACTION~SET_MODE_UNDO_RELEVANT`
-   Can be used to deactivate the `UNDO` mechanism before a transaction is started, for example, to improve performance. This is done by passing the value `OSCON_FALSE` to the optional input parameter `I_UNDO_RELEVANT` of the type `OS_BOOLEAN`. The default value is `OSCON_TRUE`. This removes the need to keep the initial status of persistent objects before a change. In compatibility mode, the `UNDO` mechanism is deactivated in the top level transaction. Otherwise, the `UNDO` mechanism is active, unless it was explicitly deactivated using this method. If `IF_OS_TRANSACTION~UNDO` is called in a transaction with a deactivated `UNDO` mechanism, the status of the transaction is `OSCON_TSTATUS_FIN_ABORT`.
-   `IF_OS_TRANSACTION~SET_MODE_UPDATE`
-   Can be used exactly once for the top level transaction before persistent objects are accessed to set the update mode. This is only necessary in compatibility mode, where the update mode is normally set to asynchronous updates implicitly the first time a persistent object is accessed. This method is not necessary for object-oriented transactions because the update mode of the top level transaction is set explicitly with `CL_OS_SYSTEM=>INIT_AND_SET_MODES` or when an object transaction is created in the ABAP Workbench.
-   The following values can be passed to the input parameter `I_UPDATE_MODE` of type `OS_DMODE`: `OSCON_DMODE_DEFAULT` or `OSCON_DMODE_UPDATE_TASK` for asynchronous updates, `OSCON_DMODE_UPDATE_TASK_SYNC` for synchronous updates, `OSCON_DMODE_LOCAL` for local updates, and `OSCON_DMODE_DIRECT` for direct saving. `OSCON_DMODE_LOCAL` and `OSCON_DMODE_UPDATE_TASK_SYNC` are allowed only in the object-oriented transaction mode.
-   If local or direct updates are chosen, the statement `SET UPDATE TASK LOCAL` is executed implicitly when the transaction is started.
-   `IF_OS_TRANSACTION~GET_MODES`
-   Returns the attributes of the current transaction in the output parameters: `E_UNDO_RELEVANT` of type `OS_BOOLEAN`, `E_CHAINED` of type `OS_BOOLEAN`, `E_UPDATE_MODE_TYPE` of type `OS_DMODE` and `E_EXTERNAL_COMMIT` of type `OS_BOOLEAN`.

-   `IF_OS_TRANSACTION~SAVE_REQUESTED`
-   The event is raised when a top level transaction is ended using `END` before the class agents of the changed persistent objects commit the changes. For class agents that implicitly use update modules, the event is raised before the update modules are registered using `CALL FUNCTION IN UPDATE TASK`. The event defines the time at which the changes to persistent objects should be made for class agents with self-programmed change methods.
-   `IF_OS_TRANSACTION~SAVE_PREPARED`
-   The event is raised when a top level transaction is ended using `END` after the class agents of the changed persistent objects have committed the changes. For class agents that use update modules implicitly, the event is raised after the update modules have been registered using `CALL FUNCTION IN UPDATE TASK`. The event defines the time at which the changes to database tables in the objects should be made for class agents with self-programmed change methods.
-   `IF_OS_TRANSACTION~FINISHED`
-   The event is raised at the actual end of a transaction, regardless of whether it was ended using `END` or `UNDO`. An output parameter of type `OS_STATUS` indicates how the transaction was ended.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_object\_services.html abenabap\_object\_services\_transact.html