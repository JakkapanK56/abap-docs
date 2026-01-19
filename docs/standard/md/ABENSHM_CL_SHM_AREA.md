---
title: "ABENSHM_CL_SHM_AREA"
description: |
  ABENSHM_CL_SHM_AREA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSHM_CL_SHM_AREA.htm"
abapFile: "ABENSHM_CL_SHM_AREA.html"
keywords: ["update", "delete", "do", "if", "case", "catch", "method", "class", "data", "internal-table", "ABENSHM", "SHM", "AREA"]
---

The class `CL_SHM_AREA` is a subclass of [`CL_ABAP_MEMORY_AREA`](ABENSHM_CL_ABAP_MEMORY_AREA.html) and the superclass of all area classes that are generated when an area is created using transaction `SHMA`. This class contains general attributes and methods for the corresponding [area handles](ABENAREA_HANDLE_GLOSRY.html).

Structure of type `SHM_PROPERTIES` with the property `READ-ONLY`. The components of the structure contain area properties that are generally set using transaction `SHMA`. The components of the structure are as follows:

Text field of type `SHM_INST_NAME` with the property `READ-ONLY`. This attribute contains the name of the current area instance and it is set when an area instance is created using the method `ATTACH_FOR_WRITE` of the [area class](ABENSHM_AREA_CLASS.html).

Text field of type `MANDT` with the property `READ-ONLY`. In client-dependent areas (the component `CLIENT_DEPENDENT` of the structure `PROPERTIES` has the value `abap_true`), this attribute contains the [current client](ABENCURRENT_CLIENT_GLOSRY.html) ID of the area instance. This attribute is initial in a client-independent area.

Enables read locks, write locks, or update locks to be set at the same time on multiple area instances of one or more areas. The method `MULTI_ATTACH` is the only way to have write access to multiple area instances at the same time or, in other words, to set multiple change locks at once.

In the case of change locks with a wait time that are set using *MULTI\_ATTACH*, the same mutual exclusions apply as to the methods *ATTACH\_FOR\_WRITE* and *ATTACH\_FOR\_UPDATE* of the area class, which may prevent locks from being set. For example, if a *MULTI\_ATTACH* with a wait time is executed in parallel in two programs, where program 1 first sets a change lock A and then a change lock B, program 2 does this in reverse order, and then lock A is successfully set in program 1 and lock B is set in program 2, at least one second lock cannot be set. If there is a lock request for the second lock (lock B in program 1 and lock A in program 2), each program must wait for the wait time of the other program to have expired.

Releases all locks of the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html) on any area instance versions of any areas, and thus deactivates all of the area handles of the internal session. If a write lock or update lock is released, any changes that were made to area instance versions are discarded until then.

The method *DETACH\_ALL\_AREAS* does not require any input parameters for the client ID, since it accesses both client-dependent and client-independent area instances independently of the client. To delete all locks in a special client, the corresponding area handles must be accessed individually. These can be managed in an internal table.

Releases the read lock on the current area handle. The area handle is then inactive.

Releases a change lock (write lock or update lock) on the current area handle and confirms the changes that were made. The area handle is then inactive. The prerequisite is that the current area instance version contains an instance of the area root class ( [root object](ABENROOT_OBJECT_GLOSRY.html)) and that there are no references from the area instance version to a different area instance of the shared objects memory or to the [internal session](ABENINTERNAL_SESSION_GLOSRY.html).

If an exception is raised when the method is executed, the change lock is not released correctly. It remains the same but cannot be released a second time using the method `DETACH_COMMIT`. The `DETACH_ROLLBACK` can be used instead.

In the case of non-transactional areas (component `TRANSACTIONAL` of the structure `PROPERTIES` has the value `abap_false`), any changes to the current area instance version are active immediately after the method `DETACH_COMMIT` is executed. In the case of transactional areas (component `TRANSACTIONAL` of the structure `PROPERTIES` has the value `abap_true`), the changes that are completed when the method `DETACH_COMMIT` is executed are not active until the next database commit. The following rules apply in the time between the completion of the method `DETACH_COMMIT` and the next database commit:

When the method `DETACH_COMMIT` is called, the event `SHM_COMMIT_EVENT` of the generated area class is raised automatically before it is executed

`CX_SHM_COMPLETION_ERROR` and `CX_SHM_SECONDARY_COMMIT` are subclasses of `CX_SHM_DETACH_ERROR`.

Releases a change lock (write lock or update lock) on the current area handle and discards the changes that were made. The area handle is then inactive.

For areas without versioning, there is no longer active version of the area after the method has been executed. The previous version is still available for areas with versioning. In the case of transactional areas, a new change lock can be set on the relevant area instance before the next database commit after the method `DETACH_ROLLBACK` has been executed.

When the method `DETACH_ROLLBACK` is called, the event `SHM_ROLLBACK_EVENT` is raised automatically before it is executed.

`CX_SHM_EVENT_EXECUTION_FAILED` is a subclass of `CX_SHM_COMPLETION_ERROR`, which is a subclass of `CX_SHM_DETACH_ERROR`.

Returns the type of the current lock for an area handle.

Returns a reference to the [root object](ABENROOT_OBJECT_GLOSRY.html) (instance of the area root class) for an area handle. This method is intended for the unlikely case where multiple handles need to be handled for different areas with different area root classes. Otherwise the attribute `ROOT` of the [area class](ABENSHM_AREA_CLASS.html) can be accessed directly.

This event is raised by the area handle automatically when the method `DETACH_COMMIT` is called.

This event is raised by the area handle automatically when the method `DETACH_ROLLBACK` is called.

-   `AUTO_BUILD`
-   If the value is `abap_true`, the area instance versions of the area can be built automatically. The prerequisite for the value `abap_true` is that the component `AUTO_BUILD_CLASS` is not initial. If the value is `abap_false`, the area instance versions of an area cannot be built automatically.
-   `AUTO_BUILD_CLASS`
-   Contains the name of the [area constructor class](ABENSHM_AREA_CONSTRUCTOR_CLASS.html) that implements the constructor `BUILD` using the interface [`IF_SHM_BUILD_INSTANCE`](ABENSHM_IF_SHM_BUILD_INSTANCE.html) to rebuild area instance versions automatically. This component is only filled if the area handle is bound by a change lock to an area instance version and is otherwise initial.
-   `BUILD_KIND`
-   Controls when area instance versions of the area are to be built automatically using the area constructor in the [area constructor class](ABENSHM_AREA_CONSTRUCTOR_CLASS.html). If the value is `CL_SHM_AREA=>BUILD_KIND_NONE`, area instance versions are not built automatically. This is always the case if the component `AUTO_BUILD` has the value `abap_false`. If the component `AUTO_BUILD` has the value `abap_true`, the component `BUILD_KIND` can have the values `CL_SHM_AREA=>BUILD_KIND_DUE_TO_READ_REQUEST` or `CL_SHM_AREA=>BUILD_KIND_DUE_TO_INVALIDATION`. If the component has the value `CL_SHM_AREA=>BUILD_KIND_DUE_TO_READ_REQUEST` and no active area instance versions exist, the area constructor is called automatically during a read access. If it has the value `CL_SHM_AREA=>BUILD_KIND_DUE_TO_INVALIDATION`, the area constructor is called in the same way as with value `CL_SHM_AREA=>BUILD_KIND_DUE_TO_READ_REQUEST`. Furthermore, the constructor is called in transitions from an active version to an obsolete or expired version, without creating an active area instance version.
-   `CLIENT_DEPENDENT`
-   If the value is `abap_true`, the area is client-dependent. Area instance versions of the same area are distinguished by the [current client](ABENCURRENT_CLIENT_GLOSRY.html) ID in the attribute `CLIENT` and using their names. If the component has the value `abap_false` (default setting), the area is client-independent and `CLIENT` is initial.
-   `DISPLACE_KIND`
-   Controls whether area instance versions of the area can be displaced. If the value is `CL_SHM_AREA=>DISPLACE_KIND_NONE`, they cannot be displaced (default setting). If the value is `CL_SHM_AREA=>DISPLACE_KIND_SERIALIZABLE`, they can be displaced. Before displacements, the content is serialized, saved persistently and is reloaded into the shared memory during a read or update on the area instance version. The prerequisite for this is that each class instantiated in the area instance has to implement the interface `IF_SERIALIZABLE_OBJECT`. If the component has the value `CL_SHM_AREA=>DISPLACE_KIND_DISPLACABLE`, the area instance versions can be displaced. Here, the content is lost if there is a displacement (full displacement). Displacements only take place if no area handle is bound to an area instance version of the displaceable area instance at the same time.
-   `HAS_VERSIONS`
-   If the value is `abap_true`, the area supports versioning. If the value is `abap_false`, there is a maximum of one single area instance version.
-   `IDLE_TIME`
-   Determines how many minutes an area instance version remains in the shared memory after a change lock or read lock has been released before it is deleted automatically. If the value is 0 (default setting), the area instance version is not deleted automatically. Values other than 0 are only possible if the components `INVALIDATE_TIME` and `REFRESH_TIME` both have the value 0. In the case of transactional areas, time measurement starts with the first database commit after a lock is released using the method `DETACH_COMMIT`.
-   `INVALIDATE_TIME`
-   Determines after how many minutes an area instance version becomes obsolete after an change lock is released. If the value is 0 (default setting), an area instance version never becomes obsolete. Values other than 0 are only possible if the components `IDLE_TIME` and `REFRESH_TIME` both have the value 0. In the case of transactional areas, time measurement starts with the first database commit after a lock is released using the method `DETACH_COMMIT`.
-   `LIFE_CONTEXT`
-   Determines the visibility and lifetime of the area instance versions of the area. If it has the value `CL_SHM_AREA=>LIFE_CONTEXT_APPSERVER`, the area instance versions exist until the AS instance is shut down (default value). If it has the value `CL_SHM_AREA=>LIFE_CONTEXT_SESSION`, the area instances exist until the last [ABAP session](ABENABAP_SESSION_GLOSRY.html) of the current user ends. If it has the value `CL_SHM_AREA=>LIFE_CONTEXT_MODE`, the area instances exist for as long as the current ABAP session. If it has the value `CL_SHM_AREA=>LIFE_CONTEXT_MEMORY`, the area instances exist for as long as the data exists in the ABAP memory in the current call sequence.
-   `MAX_AREA_SIZE`
-   Specifies the maximum allowed size of an area in KB, where the size of an area matches the total memory requirement of all area instance versions of the area. The default value is currently 0 and does not restrict the size.
-   `MAX_VERSION_SIZE`
-   Specifies the maximum allowed size of an area in KB, where the size of an area matches the total memory requirement of all area instance versions of the area. The default value is currently 0 and does not restrict the size.
-   `MAX_VERSIONS`
-   Specifies the maximum number of area instance versions for an area instance of an area. Obsolete areas are not counted. The default value is 0 and does not restrict the size. If the component `HAS_VERSIONS` has the value `abap_false`, `MAX_VERSIONS` is always 1. Otherwise, `MAX_VERSIONS` can be any non-negative integer other than 1.
-   `REFRESH_TIME`
-   Specifies after how many minutes an area instance version is rebuilt by an automatic call of the area constructor. If the value is 0 (default setting), an area instance version is never rebuilt automatically. Values other than 0 are only possible if the components `IDLE_TIME` and `INVALIDATE_TIME` both have the value 0. In the case of transactional areas, time measurement starts with the first database commit after a lock is released using the method `DETACH_COMMIT`. The prerequisite is that an active version of the area instance version exists at the start of the build. If the method `DETACH_COMMIT` was not successful, the previous area instance version is preserved for an area with versioning and the automatic rebuild raises appropriate exceptions. The area constructor can catch the exceptions `CATCH CX_SHM_ERROR` and `CX_SHM_FAILURE` itself and, for example, call the method `INVALIDATE_INSTANCE` of the area class to explicitly delete a preceding area instance version. If an automatic area build fails due to the failure of the method `DETACH_COMMIT`, no automatic rebuilds take place until the method is executed successfully.
-   `TRANSACTIONAL`
-   If the value is `abap_true`, the area is transactional (default setting). Any changes to the area instance versions of the area only become active after the next database commit after the method `DETACH_COMMIT` is executed. If the value is `abap_false`, the area is not transactional, and changes become active immediately after the method `DETACH_COMMIT` is executed.

-   `ATTACH_TAB` of type `SHM_ATTACH_TAB`
-   Internal table whose lines contain information about the individually requested locks. The components of the lines are as follows:

-   `AREA_NAME` of type `SHM_AREA_NAME`
-   Area name
-   `INST_NAME` of type `SHM_INST_NAME`
-   Name of the area instance. If the area instance is to be accessed using the default name, the value `CL_SHM_AREA=>DEFAULT_INSTANCE` must be passed.
-   `CLIENT` of type `MANDT`
-   Client ID for client-dependent areas. If the area instance is to be accessed using the [current client](ABENCURRENT_CLIENT_GLOSRY.html) ID, the current client must also be passed. The component must be initial in the case of client-independent areas.
-   `LOCK_KIND` of type `SHM_LOCK_KIND`
-   Access type. Possible values are `CL_SHM_AREA=>LOCK_KIND_READ`, `CL_SHM_AREA=>LOCK_KIND_WRITE`, or `CL_SHM_AREA=>LOCK_KIND_UPDATE`.
-   `ATTACH_MODE` of type `SHM_ATTACH_MODE`
-   Behavior for change access. Possible values are `CL_SHM_AREA=>ATTACH_MODE_DEFAULT`, `CL_SHM_AREA=>ATTACH_MODE_DETACH_READER`, or `CL_SHM_AREA=>ATTACH_MODE_WAIT`.
-   `LEVEL` of type `i`
-   Order in which the locks are set. Table lines with smaller values in the column are evaluated before table lines with larger values. If the values are equal, the order of the lines in the table is used as the deciding factor.
-   `HANDLE` of type `REF TO cl_shm_area`
-   If successful, this column returns a reference to an area handle for the area instance version for which the lock was requested. If an exception is raised, the value of the column is initial for all or for only the affected lines, depending on the value of the input parameter `IGNORE_ERRORS`.
-   `EXCEPTION` of type `REF TO cx_root`
-   If an exception is raised, this column returns a reference to the exception object for either one line or all affected lines, depending on the value of `IGNORE_ERRORS`. In addition to the exceptions of `ATTACH` methods for settings individual locks in the area class, the exception `CX_SHM_MULTI_ATTACH_ERROR` can also be raised in the following cases: a write lock and an update lock are requested at the same time on an area instance version (exception text: `DUPLICATE_CHANGE_LOCK`), a lock for a client other than the current client is requested on an area instance version with automatic area building (exception text: `ILLEGAL_AUTO_BUILD_CLIENT`), a client ID is specified for a client-independent area (exception text: `ILLEGAL_CLIENT_FOR_AREA`). If this is successful, the column is initial.

-   For more information about the individual components, see also the description of the parameters of the `ATTACH` methods for setting individual locks in the [area class](ABENSHM_AREA_CLASS.html).

-   `IGNORE_ERRORS` of type `abap_bool`
-   Controls error handling of methods. Possible values are `abap_true` and `abap_false`.

-   If `abap_true` is passed, the system attempts to set the remaining locks after an exception when setting a lock. In the lines of the `ATTACH_TAB` parameter where an error occurred, the reference to the area handle in the `HANDLE` column is initialized and the reference in the `EXCEPTION` column is set to the associated exception object.
-   If `abap_false` is passed, the method is terminated after an exception when setting a lock. The column `HANDLE` is initialized in all lines of the parameter `ATTACH_TAB`. The reference is set to the corresponding exception object in the column `EXCEPTION` in the line where the error occurred.

-   All area instances for which an error occurs in the method `MULTI_ATTACH` have the same state after the method ends as before the method was called, that is, the previous locks and the statuses remain the same.
-   `WAIT_TIME` of the type `i`
-   Specifies the wait time in milliseconds for all lines of the parameter `ATTACH_TAB` for which the value `CL_SHM_AREA=>ATTACH_MODE_WAIT` is specified in the column `ATTACH_MODE`. The wait time must be greater than or equal to 0 and is distributed to the corresponding lock requests. If multiple change locks are to be set and the first lock can be set during the wait time, the remaining wait time can be used by the other locks. The time available for the remaining lines is therefore reduced by the time used each time such a line is evaluated.

-   `ERROR_FLAG` of type `abap_bool`
-   Indicates whether one or more exceptions were raised during the method. If `ERROR_FLAG` has the value `abap_false`, all locks were set successfully. If `ERROR_FLAG` has the value `abap_true`, not all locks could be set and, depending on the value of the input parameter `IGNORE_ERRORS`, one or more lines of the column `EXCEPTION` of the parameter `ATTACH_TAB` contain references to the exception object or objects.

-   `RC` of type `SHM_RC`
-   Possible values:

-   `CL_SHM_AREA=>RC_DONE` if all locks were released.
-   `CL_SHM_AREA=>RC_NOTHING_TO_BE_DONE` if no locks were released because no locks existed in the first place.

-   `CX_SHM_WRONG_HANDLE`
-   An change lock was active and not a read lock (exception text: `READ_HANDLE_REQUIRED`)
-   `CX_SHM_ALREADY_DETACHED`
-   No read lock was active.

-   In the case of transactional areas with versioning, all requested read locks access the previous version.
-   No reads are possible for transactional areas without versioning.
-   It is not possible to set a new change lock for areas with or without versioning.

-   `CX_SHM_WRONG_HANDLE`
-   A read lock was active instead of a change lock (exception text: `WRITE_HANDLE_REQUIRED`)
-   `CX_SHM_ALREADY_DETACHED`
-   No change lock was active.
-   `CX_SHM_COMPLETION_ERROR`
-   Subclasses:

-   `CX_SHM_ROOT_OBJECT_INITIAL`
-   No root object was assigned to the area instance version.
-   `CX_SHM_EXTERNAL_REFERENCE`
-   There are still references from the current area instance version to a different area instance of the shared objects memory or to the internal session.
-   `CX_SHM_EVENT_EXECUTION_FAILED`
-   An exception was raised when an event handler was executed for `SHM_COMMIT_EVENT`. The exception raised can be read using the attribute `PREVIOUS`.

-   `CX_SHM_SECONDARY_COMMIT`
-   An attempt was made to release a change lock again that had failed previously using `DETACH_COMMIT` instead of `DETACH_ROLLBACK`.

-   `CX_SHM_WRONG_HANDLE`
-   A read lock was active instead of a change lock (the exception text here is `WRITE_HANDLE_REQUIRED`).
-   `CX_SHM_ALREADY_DETACHED`
-   No change lock was active.
-   `CX_SHM_EVENT_EXECUTION_FAILED`
-   An exception was raised when an event handler was executed for `SHM_ROLLBACK_EVENT`. The exception raised can be read using the attribute `PREVIOUS`.

-   `LOCK_KIND` of type `SHM_LOCK_KIND`
-   Possible values:

-   `CL_SHM_AREA=>LOCK_KIND_READ` if the area handle holds a read lock.
-   `CL_SHM_AREA=>LOCK_KIND_WRITE` if the area handle holds a write lock.
-   `CL_SHM_AREA=>LOCK_KIND_UPDATE` if the area handle holds an update lock.
-   `CL_SHM_AREA=>LOCK_KIND_COMPLETION_ERROR` if the area handle holds a change lock after the method `DETACH_COMMIT` ended with an exception.
-   `CL_SHM_AREA=>LOCK_KIND_DETACHED`, if the area handle does not hold any locks or is not bound to an area instance version.

-   `ROOT` of type `REF TO object`

-   `CX_SHM_ALREADY_DETACHED`
-   The area handle is not bound to an area instance version.

abenabap.html abenabap\_reference.html abencreate\_objects.html abenabap\_shared\_objects.html abenshm\_classes.html abenshm\_cl\_abap\_memory\_area.html