---
title: "ABENSHM_AREA_CLASS"
description: |
  ABENSHM_AREA_CLASS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSHM_AREA_CLASS.htm"
abapFile: "ABENSHM_AREA_CLASS.html"
keywords: ["update", "delete", "do", "while", "if", "case", "method", "class", "data", "internal-table", "ABENSHM", "AREA", "CLASS"]
---

An area class is generated as a subclass of the class [`CL_SHM_AREA`](ABENSHM_CL_SHM_AREA.html) when an area is created using transaction `SHMA`. Its instances serve as [area handles](ABENAREA_HANDLE_GLOSRY.html) for the [area instance versions](ABENAREA_INSTANCE_VERSION_GLOSRY.html) of this area. The name of an area class is the same as the name of the area, which should therefore start with `CL_`.

Area classes can be displayed in the Class Builder, but cannot be changed there. The structure of an area class depends on the definition of the area in transaction `SHMA`. After the properties of an area have been changed, the area class is regenerated if necessary.

If a component specified here is missing in an existing area class, it may be a release-specific enhancement. All components should be available once the class is generated again in transaction `SHMA`.

Constant of the type `SHM_AREA_NAME`: Contains the name of the current class or area.

Reference variable of the type `REF TO area_root_class`, where `area_root_class` is the [area root class](ABENROOT_DATA_CLASS_GLOSRY.html) of the area. This attribute has the `READ-ONLY` property and is used for direct reads of the [root object](ABENROOT_OBJECT_GLOSRY.html) of an area instance version. Access using the `GET_ROOT` method is necessary in exceptional cases only, such as when using generic programming.

Creates an area handle with a read lock for an area instance version and returns a reference to the area handle.

The first four exception classes are subclasses of `CX_SHM_ATTACH_ERROR`.

Creates an area handle with a write lock for an area instance version and returns a reference to the area handle.

The first four exception classes are subclasses of `CX_SHM_ATTACH_ERROR`.

Creates an area handle with an update lock for an area instance version and returns a reference to the area handle.

Since an active area instance version is required for setting an update lock, an area constructor called automatically is started when the *ATTACH\_FOR\_UPDATE* method is called. The following applies when using the parameter *WAIT\_TIME*: If the area constructor can be started, there is a wait period. If the area constructor is ended before the end of the wait time, the update lock is set. If the area constructor ends without being able to construct an active version, the wait is terminated before the end of the wait time. If the area constructor does not end within the wait time, the exception *CX\_SHM\_NO\_ACTIVE\_VERSION* is raised (exception text: *BUILD\_NOT\_FINISHED*).

The first six exception classes are subclasses of `CX_SHM_ATTACH_ERROR`.

Releases all locks of the current internal session on the area instances versions of the associated area and deactivates all of the area handles in the current internal session. If a write lock or an update lock is released, any changes that were made to the area instance versions are discarded until then.

For non-transactional areas, this method immediately sets the state of the active area instance version of the area instance of transferred name to obsolete and for transactional areas with the next database commit. No new locks can be set on this area instance version afterwards. Any existing read locks are not released. How existing change locks are handled depends on the input parameter `TERMINATE_CHANGER`.

**Caution** Once this method is executed and *abap\_true* is passed to *TERMINATE\_CHANGER*, all programs in which there is still a write lock for the invalidated area instance are terminated with the runtime error *SYSTEM\_SHM\_AREA\_OBSOLETE*.

In non-transactional areas, this method immediately sets the state of all active area instance versions of the area in the current internal session to obsolete and for transactional areas with the next database commit. No new locks can be set on these area instance versions afterwards. Any read locks are not released. How existing change locks are handled depends on the input parameter `TERMINATE_CHANGER`.

Once this method is executed and *abap\_true* is passed to *TERMINATE\_CHANGER*, all programs in which there are still change locks for the invalidated area instance versions are terminated with the runtime error *SYSTEM\_SHM\_AREA\_OBSOLETE*.

This method sets the state of all (active and obsolete) area instance versions of the area instance for the passed name to expired, and all read locks are released. No new read locks and update locks can be set on this area instance version afterwards. How existing change locks are handled depends on the input parameter `TERMINATE_CHANGER`. In non-transactional areas, the state of the area instance version is changed immediately; in transactional areas, the state changes after the next database commit.

After this method has been executed, all programs in which area handles still exist for the released area instance versions are terminated with the runtime error *SYSTEM\_SHM\_AREA\_OBSOLETE*.

This method sets the state of all (active and obsolete) area instance versions of the area to expired, and all read locks are released. No new locks can be set on these area instance versions afterwards. How existing change locks are handled depends on the input parameter `TERMINATE_CHANGER`. In non-transactional areas, the change takes place immediately; in transactional areas, the change takes place after the next database commit.

After this method has been executed, all programs in which area handles still exist for the released area instance versions are terminated with the runtime error *SYSTEM\_SHM\_AREA\_OBSOLETE*.

Returns the names of all active or obsolete instances of the area on the current AS instance that are under construction.

Calls the [area constructor](ABENSHM_AREA_CONSTRUCTOR_CLASS.html) explicitly. The area constructor is executed in the current internal session. If the areas are client-dependent, the area of the [current client](ABENCURRENT_CLIENT_GLOSRY.html) is built.

This method is only available if the area is transactional. It has the same effect as executing the `INVALIDATE_INSTANCE` method and passing the value of `abap_true` to the input parameter `TERMINATE_CHANGER` on all AS instances in the current AS ABAP. This propagation takes place with the next database commit.

This method should no longer be used. Instead, the parameter *AFFECT\_SERVER* of the *FREE\_AREA*, *FREE\_INSTANCE*, *INVALIDATE\_AREA*, and *INVALIDATE\_INSTANCE* methods are available.

This method is only available if the area is transactional. It has the same effect as executing the `INVALIDATE_AREA` method and passing the value of `abap_true` to the input parameter `TERMINATE_CHANGER` on all AS instances in the current AS ABAP. This propagation takes place with the next database commit.

This method should no longer be used. Instead, the parameter *AFFECT\_SERVER* of the *FREE\_AREA*, *FREE\_INSTANCE*, *INVALIDATE\_AREA*, and *INVALIDATE\_INSTANCE* methods are available.

This method defines the [root object](ABENROOT_OBJECT_GLOSRY.html) (instance of the area root class) of the area instance version. Before a change lock can be released using the `DETACH_COMMIT` method, the root object must be reset at least once using `SET_ROOT`. Updates are possible. The `SET_ROOT` method can only be called in area handles with change locks.

-   `INST_NAME` of the type `SHM_INST_NAME`
-   Name of the area instance version. Specifying the name is optional. The default value is `CL_SHM_AREA=>DEFAULT_INSTANCE`.
-   `CLIENT` of the type `SHM_CLIENT`
-   Client ID if the area is client-dependent. Specifying the client ID is optional. The default value is the ID of the [current client](ABENCURRENT_CLIENT_GLOSRY.html).

-   `HANDLE` of the type `REF TO area_class`.
-   Reference to the created area handle, where `area_class` is the current area class.

-   `CX_SHM_INCONSISTENT`
-   The type of an object saved in the area instance does not match the definition of the object with the same name in the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html). If the time stamp for the type of the shared objects is newer than the time stamp in the internal session, the application should be restarted, to ensure the internal session also uses the current version of the type. If the time stamp of the type in the internal session is newer than the time stamp of the shared object, a new area instance version should be constructed, so that the current type is used there.
-   `CX_SHM_NO_ACTIVE_VERSION`
-   This exception is raised in the following cases:

-   The area instance version does not exist, and an automatic build is not possible because there is no area constructor or displaced version (exception text: `NEITHER_BUILD_NOR_LOAD`).
-   The area instance version does not exist, and the area constructor was called (exception text: `BUILD_STARTED`). The system does not wait for the automatic area build to be terminated when the exception is caught. If this exception is raised twice in succession with this exception text, the area constructor was not ended correctly.
-   The area instance version does not exist but the area constructor is already being executed (exception text: `BUILD_NOT_FINISHED`).
-   The area instance version does not exist, and the loading of a displaced version was started (exception text: `LOAD_STARTED`).
-   The area instance version does not exist, but a displaced version is already being loaded (exception text: `LOAD_NOT_FINISHED`).

-   `CX_SHM_READ_LOCK_ACTIVE`
-   The area instance version is already locked for reading in the same internal session.
-   `CX_SHM_EXCLUSIVE_LOCK_ACTIVE`
-   This exception is raised in the following cases:

-   The area instance does not support versioning and is already locked for changes (exception text: `LOCKED_BY_ACTIVE_CHANGER`).
-   The area instance does not support versioning and a user is waiting for a change lock (exception text: `LOCKED_BY_PENDING_CHANGER`).
-   The area instance is transactional, does not support versioning, and a change lock was released, but the database commit has not yet taken place (exception text: `WAITING_FOR_DB_COMMIT`).

-   `CX_SHM_PARAMETER_ERROR`
-   The value of `CL_SHM_AREA=>ALL_CLIENTS` was specified for the input parameter `CLIENT`.

-   `INST_NAME` of the type `SHM_INST_NAME`
-   Name of the area instance version. Specifying the name is optional. The default value is `CL_SHM_AREA=>DEFAULT_INSTANCE`.
-   `CLIENT` of the type `SHM_CLIENT`
-   Client ID if the area is client-dependent. Specifying the client ID is optional. The default value is the ID of the [current client](ABENCURRENT_CLIENT_GLOSRY.html). In [tenant-isolation](ABENTENANT_ISOLATION_GLOSRY.html) systems, the `CLIENT` parameter must not be passed in [application clients](ABENAPPLICATION_CLIENT_GLOSRY.html).
-   `ATTACH_MODE` of the type `SHM_ATTACH_MODE`
-   Controls the lock mode. This specification is optional. The default value is `CL_SHM_AREA=>ATTACH_MODE_DEFAULT`. Possible values are:

-   `CL_SHM_AREA=>ATTACH_MODE_DEFAULT`
-   If there are read locks on the area instance of the specified name, they are not released. For areas with versioning, the system attempts to create a new version, whereas in areas without versioning, the exception `CX_SHM_VERSION_LIMIT_EXCEEDED` is raised.
-   `CL_SHM_AREA=>ATTACH_MODE_DETACH_READER`
-   For areas with versioning, if there are read locks on all area instance versions of the specified name, the read locks on the oldest version are released, which deactivates them so that a new version can be created. All read locks are released for areas without versioning.
-   `CL_SHM_AREA=>ATTACH_MODE_WAIT`
-   If the write lock cannot be set, the program waits for the time specified in the `WAIT_TIME` parameter and tries to set the lock again before the exception `CX_SHM_VERSION_LIMIT_EXCEEDED` is raised. For an area without versioning, no further read locks can be set on the area instance during the wait time. It is still possible to set read locks for an area with versioning.

-   `WAIT_TIME` of the type `i`
-   Wait time in milliseconds, if the value `CL_SHM_AREA=>ATTACH_MODE_WAIT` is passed for `ATTACH_MODE`. If a value not equal to 0 is passed for `WAIT_TIME`, if the value `CL_SHM_AREA=>ATTACH_MODE_WAIT` is not passed to `ATTACH_MODE`, or if a negative value is specified for `WAIT_TIME`, the exception `CX_SHM_PARAMETER_ERROR` is raised.
-   An attempt is made to set a write lock again in the wait time. Only one program with the parameter `WAIT_TIME` can wait for an area instance at any one time. If another program tries to set another change lock with the parameter `WAIT_TIME`, the exception `CX_SHM_EXCLUSIVE_LOCK_ACTIVE` is raised directly (exception text `LOCKED_BY_PENDING_CHANGER`).
-   If the write lock can be set successfully within the wait time, the program flow continues. Note that there may be a delay until the waiting program can be restarted. During this delay, no other program can set a change lock. This guarantees that the waiting program is given the write lock next.
-   If the write lock cannot be set within the wait time, the exception `CX_SHM_EXCLUSIVE_LOCK_ACTIVE` is raised after the wait time (exception text:. `LOCKED_BY_ACTIVE_CHANGER`) or `CX_SHM_VERSION_LIMIT_EXCEEDED`.

-   `HANDLE` of the type `REF TO area_class`.
-   Reference to the new area handle, where `area_class` is the current area class.

-   `CX_SHM_VERSION_LIMIT_EXCEEDED`
-   The write lock could not be set since there was already a read lock on the area instance version and no new version could be created because this would exceed the maximum number of possible versions.
-   `CX_SHM_CHANGE_LOCK_ACTIVE`
-   An arbitrary area instance version is already locked for changing in the same internal session. If a previous change lock was released in a transactional area, but there has been no database commit yet, this raises the exception with the exception text `WAITING_FOR_DB_COMMIT`.
-   `CX_SHM_EXCLUSIVE_LOCK_ACTIVE`
-   This exception is raised in the following cases:

-   The area instance is already locked for changes in a different internal session (exception text: `LOCKED_BY_ACTIVE_CHANGER`).
-   A user in a different internal session is waiting for a change lock (exception text: `LOCKED_BY_PENDING_CHANGER`).
-   The area instance is transactional, and a change lock was released in a different internal session, but the database commit has not yet taken place (exception text: `WAITING_FOR_DB_COMMIT`).

-   `CX_SHM_PENDING_LOCK_REMOVED`
-   This exception is raised if the value `CL_SHM_AREA=>ATTACH_MODE_WAIT` is passed for `ATTACH_MODE`, but the lock was deleted in transaction `SHMM` during the wait.
-   `CX_SHM_PARAMETER_ERROR`
-   This exception is raised in the following cases:

-   An invalid value was passed for the input parameter `ATTACH_MODE`.
-   A negative number was passed for the input parameter `WAIT_TIME`.
-   The value of `CL_SHM_AREA=>ALL_CLIENTS` was specified for the input parameter `CLIENT`.

-   `INST_NAME` of the type `SHM_INST_NAME`
-   Name of the area instance version. Specifying the name is optional. The default value is `CL_SHM_AREA=>DEFAULT_INSTANCE`.
-   `CLIENT` of the type `SHM_CLIENT`
-   Client ID if the area is client-dependent. Specifying the client ID is optional. The default value is the ID of the [current client](ABENCURRENT_CLIENT_GLOSRY.html). In [tenant-isolation](ABENTENANT_ISOLATION_GLOSRY.html) systems, the `CLIENT` parameter must not be passed in [application clients](ABENAPPLICATION_CLIENT_GLOSRY.html).
-   `ATTACH_MODE` of the type `SHM_ATTACH_MODE`
-   Controls the lock mode. This specification is optional. The default value is `CL_SHM_AREA=>ATTACH_MODE_DEFAULT`. Possible values are:

-   `CL_SHM_AREA=>ATTACH_MODE_DEFAULT`
-   If there are read locks on the area instance of the specified name, they are not released, whereas in areas with versioning, the system attempts to create a new version. In the case of areas without versioning, the exception `CX_SHM_VERSION_LIMIT_EXCEEDED` is raised.
-   `CL_SHM_AREA=>ATTACH_MODE_DETACH_READER`
-   For areas with versioning, if there are read locks on all area instance versions of the specified name, the read locks on the oldest version are released. This deactivates them so that a new version can be created. All read locks are released for areas without versioning.
-   `CL_SHM_AREA=>ATTACH_MODE_WAIT`
-   If the update lock cannot be set, the program waits for the time specified in the `WAIT_TIME` parameter and tries to set the lock again before the exception `CX_SHM_VERSION_LIMIT_EXCEEDED` is raised. For an area without versioning, no further shared locks can be set on the area instance during the wait time. It is still possible to set read locks for an area with versioning.

-   `WAIT_TIME` of the type `i`
-   Wait time in milliseconds, if the value `CL_SHM_AREA=>ATTACH_MODE_WAIT` is passed for `ATTACH_MODE`. If a value not equal to 0 is passed for `WAIT_TIME`, if the value `CL_SHM_AREA=>ATTACH_MODE_WAIT` is not passed to `ATTACH_MODE`, or if a negative value is specified for `WAIT_TIME`, the exception `CX_SHM_PARAMETER_ERROR` is raised.
-   An attempt is made to set an update lock again during the wait time. Only one program with the parameter `WAIT_TIME` can wait for an area instance at any one time. If a different program tries to set another change lock with the parameter `WAIT_TIME`, the exception `CX_SHM_EXCLUSIVE_LOCK_ACTIVE` is raised directly (exception text `LOCKED_BY_PENDING_CHANGER`).
-   If the update lock can be set within the wait time, the program flow continues. Note that there may be a delay until the waiting program can be restarted. During this delay, no other program can set a change lock. This guarantees that the waiting program receives the update lock next.
-   If the update lock cannot be set within the wait time, the exception `CX_SHM_EXCLUSIVE_LOCK_ACTIVE` is raised after the wait time (exception text: `LOCKED_BY_ACTIVE_CHANGER`).

-   `HANDLE` of the type `REF TO area_class`.
-   Reference to the created area handle, where `area_class` is the current area class.

-   `CX_SHM_INCONSISTENT`
-   The type of an object saved in the area instance does not match the definition of the object with the same name in the current program.
-   `CX_SHM_NO_ACTIVE_VERSION`
-   This exception is raised in the following cases:

-   The area instance version does not exist, and an automatic build is not possible because an area constructor or a displaced version does not exist (exception text: `NEITHER_BUILD_NOR_LOAD`).
-   The area instance version does not exist, and the area constructor was called (exception text: `BUILD_STARTED`).
-   The area instance version does not exist but the area constructor is already being executed (exception text: `BUILD_NOT_FINISHED`).
-   The area instance version does not exist and a displaced version was started (exception text: `LOAD_STARTED`).
-   The area instance version does not exist, but the loading of a displaced version has already started (exception text: `LOAD_NOT_FINISHED`).

-   `CX_SHM_VERSION_LIMIT_EXCEEDED`
-   The update lock could not be set since there was already a read lock on the area instance version and no new version could be created because this would exceed the maximum number of possible versions.
-   `CX_SHM_CHANGE_LOCK_ACTIVE`
-   An arbitrary area instance version is already locked for changing in the same internal session. If a previous change lock was released in a transactional area, but there has been no database commit yet, this raises the exception with the exception text `WAITING_FOR_DB_COMMIT`.
-   `CX_SHM_EXCLUSIVE_LOCK_ACTIVE`
-   This exception is raised in the following cases:

-   The area instance is already locked for changes in a different internal session (exception text: `LOCKED_BY_ACTIVE_CHANGER`).
-   A user in a different internal session is waiting for a change lock (exception text: `LOCKED_BY_PENDING_CHANGER`).
-   The area instance is transactional, and a change lock was released in a different internal session, but the database commit has not yet taken place (exception text: `WAITING_FOR_DB_COMMIT`).

-   `CX_SHM_PENDING_LOCK_REMOVED`
-   This exception is raised if the value `CL_SHM_AREA=>ATTACH_MODE_WAIT` is passed for `ATTACH_MODE`, but the lock was deleted in transaction `SHMM` during the wait.
-   `CX_SHM_PARAMETER_ERROR`
-   This exception is raised in the following cases:

-   An invalid value was passed for the input parameter `ATTACH_MODE`.
-   A negative number was passed for the input parameter `WAIT_TIME`.
-   The value of `CL_SHM_AREA=>ALL_CLIENTS` was specified for the input parameter `CLIENT`.

-   `CLIENT` of the type `SHM_CLIENT`
-   Optional client ID if the area is client-dependent. The default value is the ID of the [current client](ABENCURRENT_CLIENT_GLOSRY.html). In [tenant-isolation](ABENTENANT_ISOLATION_GLOSRY.html) systems, the `CLIENT` parameter must not be passed in [application clients](ABENAPPLICATION_CLIENT_GLOSRY.html).

-   `RC` of the type `SHM_RC`
-   Possible values:

-   `CL_SHM_AREA=>RC_DONE` if all locks were released.
-   `CL_SHM_AREA=>RC_NOTHING_TO_BE_DONE` if no locks were released because no locks existed in the current session.

-   `INST_NAME` of the type `SHM_INST_NAME`
-   Name of the area instance version. Specifying the name is optional. The default value is the value of constant `CL_SHM_AREA=>DEFAULT_INSTANCE`.
-   `CLIENT` of the type `SHM_CLIENT`
-   Client ID if the area is client-dependent. The default value is the ID of the [current client](ABENCURRENT_CLIENT_GLOSRY.html). In [tenant-isolation](ABENTENANT_ISOLATION_GLOSRY.html) systems, the `CLIENT` parameter must not be passed in [application clients](ABENAPPLICATION_CLIENT_GLOSRY.html).
-   `TERMINATE_CHANGER` of the type `abap_bool`
-   Controls how change locks are handled. Possible values are:

-   `abap_true` existing change locks are released (default setting).
-   `abap_false` existing change locks are not released.

-   `AFFECT_SERVER` of the type `SHM_AFFECT_SERVER` (only in areas with the *Application Server* area binding)
-   Controls cross-server invalidation. Possible values are:

-   `CL_SHM_AREA=>AFFECT_LOCAL_SERVER`, only the area instance versions of the current AS instance are invalidated (default setting).
-   `CL_SHM_AREA=>AFFECT_ALL_SERVERS`, the area instance versions of all AS instances are invalidated.
-   `CL_SHM_AREA=>AFFECT_ALL_SERVERS_BUT_LOCAL` the area instance versions of all AS instances are invalidated, apart from the current AS instance. This enables changes to be made to areas of the current AS instance directly, without the database having to create the entire area again.

-   `RC` of the type `SHM_RC`
-   Possible values in non-transactional areas:

-   `CL_SHM_AREA=>RC_DONE` if the active area instance version was set to obsolete. If the value `abap_true` was passed to `TERMINATE_CHANGER` even if a change lock was released.
-   `CL_SHM_AREA=>RC_NOTHING_TO_BE_DONE` if no active area instance version is available and if the value `abap_true` was passed to `TERMINATE_CHANGER`, if no change lock exists.
-   `CL_SHM_AREA=>RC_INSTANCE_NAME_NOT_FOUND` if no area instance of the specified name exists.

-   In transactional areas, `RC` always has the value `CL_SHM_AREA=>RC_NOTHING_TO_BE_DONE`.

-   `CX_SHM_PARAMETER_ERROR`
-   An invalid value was passed for the input parameter `TERMINATE_CHANGER`.

-   `CLIENT` of the type `SHM_CLIENT`
-   Client ID if the area is client-dependent. The default value is the ID of the [current client](ABENCURRENT_CLIENT_GLOSRY.html). In [tenant-isolation](ABENTENANT_ISOLATION_GLOSRY.html) systems, the `CLIENT` parameter must not be passed in [application clients](ABENAPPLICATION_CLIENT_GLOSRY.html).
-   `TERMINATE_CHANGER` of the type `abap_bool`
-   Controls how change locks are handled. Possible values are:

-   `abap_true` existing change locks are released (default setting).
-   `abap_false` existing change locks are not released.

-   `AFFECT_SERVER` of the type `SHM_AFFECT_SERVER` (only in areas with the *Application Server* area binding)
-   Controls cross-server invalidation. Possible values are:

-   `CL_SHM_AREA=>AFFECT_LOCAL_SERVER`, only the area instance versions of the current AS instance are invalidated (default setting).
-   `CL_SHM_AREA=>AFFECT_ALL_SERVERS`, the area instance versions of all AS instances are invalidated.
-   `CL_SHM_AREA=>AFFECT_ALL_SERVERS_BUT_LOCAL`, the area instance versions of all AS instances are invalidated, apart from the current AS instance. This enables changes to be made to areas of the current AS instance directly, without the database having to create the entire area again.

-   `RC` of the type `SHM_RC`
-   Possible values in non-transactional areas:

-   `CL_SHM_AREA=>RC_DONE` if at least one active area instance version was set to obsolete. If the value `abap_true` was passed to `TERMINATE_CHANGER`, even if one or more change locks were released.
-   `CL_SHM_AREA=>RC_NOTHING_TO_BE_DONE` if no active area instance version exists and if the value `abap_true` was passed to `TERMINATE_CHANGER`, if no change lock exists.

-   In transactional areas, `RC` always has the value `CL_SHM_AREA=>RC_NOTHING_TO_BE_DONE`.

-   `CX_SHM_PARAMETER_ERROR`
-   An invalid value was passed for the input parameter `TERMINATE_CHANGER`.

-   `INST_NAME` of the type `SHM_INST_NAME`
-   Name of the area instance version. Specifying the name is optional. The default value is the value of constant `CL_SHM_AREA=>DEFAULT_INSTANCE`.
-   `CLIENT` of the type `SHM_CLIENT`
-   Client ID if the area is client-dependent. The default value is the ID of the [current client](ABENCURRENT_CLIENT_GLOSRY.html). In [tenant-isolation](ABENTENANT_ISOLATION_GLOSRY.html) systems, the `CLIENT` parameter must not be passed in [application clients](ABENAPPLICATION_CLIENT_GLOSRY.html).
-   `TERMINATE_CHANGER` of the type `abap_bool`
-   Controls how change locks are handled. Possible values are:

-   `abap_true` existing change locks are released (default setting).
-   `abap_false` existing change locks are not released.

-   `AFFECT_SERVER` of the type `SHM_AFFECT_SERVER`, only in areas with the *Application Server* area binding
-   Specifies cross-server invalidation. Possible values are:

-   `CL_SHM_AREA=>AFFECT_LOCAL_SERVER`, only the area instance versions of the current AS instance are invalidated (default setting).
-   `CL_SHM_AREA=>AFFECT_ALL_SERVERS`, the area instance versions of all AS instances are invalidated.
-   `CL_SHM_AREA=>AFFECT_ALL_SERVERS_BUT_LOCAL`, the area instance versions of all AS instances are invalidated, apart from the current AS instance. This enables changes to be made to areas of the current AS instance directly, without the database having to create the entire area again.

-   `RC` of the type `SHM_RC`
-   Possible values in non-transactional areas:

-   `CL_SHM_AREA=>RC_DONE` if an active or an obsolete area instance version was set to expired. If the value `abap_true` was passed to `TERMINATE_CHANGER`, even if a change lock was released.
-   `CL_SHM_AREA=>RC_NOTHING_TO_BE_DONE`, if no active or obsolete area instance versions exist and if the value `abap_true` was passed to `TERMINATE_CHANGER`, if no change lock exists.
-   `CL_SHM_AREA=>RC_INSTANCE_NAME_NOT_FOUND` if no area instance of the specified name exists.

-   In transactional areas, `RC` always has the value `CL_SHM_AREA=>RC_NOTHING_TO_BE_DONE`.

-   `CX_SHM_PARAMETER_ERROR`
-   An invalid value was passed for the input parameter `TERMINATE_CHANGER`.

-   `CLIENT` of the type `SHM_CLIENT`
-   Client ID if the area is client-dependent. The default value is the ID of the [current client](ABENCURRENT_CLIENT_GLOSRY.html). In [tenant-isolation](ABENTENANT_ISOLATION_GLOSRY.html) systems, the `CLIENT` parameter must not be passed in [application clients](ABENAPPLICATION_CLIENT_GLOSRY.html).
-   `TERMINATE_CHANGER` of the type `abap_bool`
-   Controls how change locks are handled. Possible values are:

-   `abap_true` existing change locks are released (default setting).
-   `abap_false` existing change locks are not released.

-   `AFFECT_SERVER` of the type `SHM_AFFECT_SERVER`, only in areas with the *Application Server* area binding
-   Specifies cross-server invalidation. Possible values are:

-   `CL_SHM_AREA=>AFFECT_LOCAL_SERVER`, only the area instance versions of the current AS instance are invalidated (default setting).
-   `CL_SHM_AREA=>AFFECT_ALL_SERVERS`, the area instance versions of all AS instances are invalidated.
-   `CL_SHM_AREA=>AFFECT_ALL_SERVERS_BUT_LOCAL`, the area instance versions of all AS instances are invalidated, apart from the current AS instance. This enables changes to be made to areas of the current AS instance directly, without the database having to create the entire area again.

-   `RC` of the type `SHM_RC`
-   Possible values in non-transactional areas:

-   `CL_SHM_AREA=>RC_DONE` if at least one active or obsolete area instance version was set to expired. If the value `abap_true` was passed to `TERMINATE_CHANGER`, even if one or more change locks were released.
-   `CL_SHM_AREA=>RC_NOTHING_TO_BE_DONE` if no active or obsolete area instance versions exist and if the value `abap_true` was passed to `TERMINATE_CHANGER`, if no change lock exists.

-   In transactional areas, `RC` always has the value `CL_SHM_AREA=>RC_NOTHING_TO_BE_DONE`.

-   `CX_SHM_PARAMETER_ERROR`
-   An invalid value was passed for the input parameter `TERMINATE_CHANGER`.

-   `CLIENT` of the type `SHM_CLIENT`
-   Client ID if the area is client-dependent. The default value is the ID of the [current client](ABENCURRENT_CLIENT_GLOSRY.html). In [tenant-isolation](ABENTENANT_ISOLATION_GLOSRY.html) systems, the `CLIENT` parameter must not be passed in [application clients](ABENAPPLICATION_CLIENT_GLOSRY.html).

-   `INFOS` of the type `SHM_INST_INFOS`
-   `SHM_INST_INFOS` is an internal table of line type `SHM_INST_INFO` with the following components:

-   `CLIENT` of the type `MANDT`. The client ID in client-dependent areas. Initial if areas are client-independent.
-   `NAME` of the type `SHM_INST_NAME`, area name. This name is `CL_SHM_AREA=>DEFAULT_INSTANCE` for areas with the default name.
-   `VERSIONS_IN_BUILD` of the type `SHM_VERS_CNT`. The number of area instance versions that are currently being built. Possible values are 0 or 1.
-   `VERSIONS_ACTIVE` of the type `SHM_VERS_CNT`. The number of currently active area instance versions. Possible values are 0 or 1.
-   `VERSIONS_OBSOLETE` of the type `SHM_VERS_CNT`. The number of obsolete area instance versions. Possible values range from 0 to the maximum number of area instance versions (component `MAX_VERSIONS` of the `PROPERTIES` attribute of the class `CL_SHM_AREA`).

-   An empty table is returned if there are no area instances for the area. The number of expired area instance versions is ignored.

-   `INST_NAME` of the type `SHM_INST_NAME`
-   Name of the area instance version. Specifying the name is optional. The default value is the value of constant `CL_SHM_AREA=>DEFAULT_INSTANCE`.

-   `CX_SHM_BUILD_FAILED`
-   An error occurred when the area constructor was executed.
-   `CX_SHMA_NOT_CONFIGURED`
-   No area constructor class is bound to the area class.
-   `CX_SHMA_INCONSISTENT`
-   The area class must be regenerated.

-   `INST_NAME` of the type `SHM_INST_NAME`
-   Name of the area instance version. Specifying the name is optional. The default value is the value of constant `CL_SHM_AREA=>DEFAULT_INSTANCE`.
-   `CLIENT` of the type `SHM_CLIENT`
-   Client ID if the area is client-dependent. The default value is the ID of the [current client](ABENCURRENT_CLIENT_GLOSRY.html). In [tenant-isolation](ABENTENANT_ISOLATION_GLOSRY.html) systems, the `CLIENT` parameter cannot be passed in [application clients](ABENAPPLICATION_CLIENT_GLOSRY.html).
-   `AFFECTING_LOCAL_SERVER` of the type `abap_bool`
-   Controls whether the status change is also performed on the current AS instance. Possible values are:

-   `abap_true`. The active area instance version is set to obsolete on the current AS instance. This setting can be used if the content of the area instance is to be changed using the area constructor, after the database content has been changed.
-   `abap_false`. The active area instance version is not set to obsolete on the current AS instance (default setting). This means that a new version created on an AS instance can be retained while only the active versions on other servers are invalidated.

-   `CX_SHM_PARAMETER_ERROR`
-   An invalid value was passed for the input parameter `AFFECTING_LOCAL_SERVER`.

-   `CLIENT` of the type `SHM_CLIENT`
-   Client ID if the area is client-dependent. The default value is the ID of the [current client](ABENCURRENT_CLIENT_GLOSRY.html). In [tenant-isolation](ABENTENANT_ISOLATION_GLOSRY.html) systems, the `CLIENT` parameter must not be passed in [application clients](ABENAPPLICATION_CLIENT_GLOSRY.html).
-   `AFFECTING_LOCAL_SERVER` of the type `abap_bool`
-   Controls whether the status change is also performed on the current AS instance. Possible values are:

-   `abap_true`. The active area instance versions are set to obsolete on the current AS instance.
-   `abap_false`. The active area instance versions are not set to obsolete on the current AS instance (default setting).

-   `CX_SHM_PARAMETER_ERROR`
-   An invalid value was passed for the input parameter `AFFECTING_LOCAL_SERVER`.

-   `ROOT` of the type `REF TO area_root_class`, where [`area_root_class`](ABENROOT_DATA_CLASS_GLOSRY.html) is the area root class of the area.

-   `CX_SHM_WRONG_HANDLE`
-   The method was called using an area handle with a read lock or an area handle in which the `DETACH_COMMIT` method failed.
-   `CX_SHM_INITIAL_REFERENCE`
-   The reference variable passed to `ROOT` is initial.

abenabap.html abenabap\_reference.html abencreate\_objects.html abenabap\_shared\_objects.html abenshm\_classes.html abenshm\_cl\_abap\_memory\_area.html abenshm\_cl\_shm\_area.html