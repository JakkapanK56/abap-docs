---
title: "ABENOS_PERSISTENCE_STATE"
description: |
  ABENOS_PERSISTENCE_STATE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENOS_PERSISTENCE_STATE.htm"
abapFile: "ABENOS_PERSISTENCE_STATE.html"
keywords: ["delete", "while", "if", "method", "class", "data", "ABENOS", "PERSISTENCE", "STATE"]
---

An object of a persistent class managed by the persistence service can have one of seven different management states. The state of the object affects what methods of the persistence service can be performed on it. The methods of the interface `IF_OS_CA_INSTANCE` provide information about the state of managed objects.

The following constants of the type pool `OSCON` return the state of the object:

The states 0 to 4 describe persistent objects with a connection to the database. An object in state 10 is managed by the persistence service but has no connection to the database.

An object in state 12 is in transition to the state `OSCON_OSTATUS_LOADED`. This state can be observed only in the method `INIT` of the interface `IF_OS_STATE`, which means it is no longer listed in the following tables.

The table below indicates the methods of the persistence service that can be performed on objects in different states, and how they affect the state of the managed object. The last row shows the effect of the statement `COMMIT WORK`.

All methods except `GET_attribute` and `SET_attribute` are methods of the class agent. For simplicity, the class methods and interface methods are summarized using their typical names. `GET_attribute` and `SET_attribute` are methods of the persistent class.

The numbers reflect the management states. For example, the method `DELETE_PERSISTENT` shifts a persistent object from the state 0, 2, 3, or 4 to the state 4.

The dash (-) indicates that an object of a persistent class is available but cannot be managed. A situation like this may occur, for example, if the system deletes a persistent object by passing a reference to the method `DELETE_PERSISTENT`. The statement `COMMIT WORK` deletes the object from the database and it is no longer managed. However, it is persisted in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) until all references to it are also deleted.

As can be seen in the table, the methods `DELETE_PERSISTENT`, `GET_PERSISTENT`, and `REFRESH_PERSISTENT` can work only with persistent objects in a state from 0 to 4, while `GET_TRANSIENT` can work only with transient objects in the state 10.

Any attempt to apply a method to a management state inappropriately raises an exception, `exc`.

**Constant** **Value** **State**\\ `OSCON_OSTATUS_NOT_LOADED` 0 Representative object for a persistent object, data not yet loaded from the database. `OSCON_OSTATUS_NEW` 1 The object is persistent and is new. `OSCON_OSTATUS_LOADED` 2 The object is persistent and has been loaded completely. `OSCON_OSTATUS_CHANGED` 3 The object is persistent and has been changed. `OSCON_OSTATUS_DELETED` 4 The object is persistent and has been deleted. `OSCON_OSTATUS_TRANSIENT` 10 The object is transient. `OSCON_OSTATUS_LOADING` 12 The object is currently being loaded. **Method** - **0** **1** **2** **3** **4** **10**\\ `CREATE_PERSISTENT` 1 1 `exc` `exc` `exc` 3 `exc`\\ `DELETE_PERSISTENT` - 4 0 4 4 4 `exc`\\ `GET_PERSISTENT` 2 2 1 2 3 `exc` `exc`\\ `GET_attribute` `exc` 2 1 2 3 `exc` 10 `SET_attribute` `exc` 3 1 3 3 `exc` 10 `REFRESH_PERSISTENT` `exc` 0 `exc` 0 `exc` `exc` `exc`\\ `RELEASE` `exc` - `exc` - `exc` `exc` `exc`\\ `CREATE_TRANSIENT` 10 `exc` `exc` `exc` `exc` `exc` `exc`\\ `GET_TRANSIENT` `exc` `exc` `exc` `exc` `exc` `exc` 10 `COMMIT WORK` - 0 0 0 0 - 10 abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_object\_services.html abenabap\_object\_services\_persist.html