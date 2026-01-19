---
title: "ABENSHM_CL_ABAP_MEMORY_AREA"
description: |
  ABENSHM_CL_ABAP_MEMORY_AREA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSHM_CL_ABAP_MEMORY_AREA.htm"
abapFile: "ABENSHM_CL_ABAP_MEMORY_AREA.html"
keywords: ["if", "method", "class", "data", "field-symbol", "ABENSHM", "ABAP", "MEMORY", "AREA"]
---

The class `CL_ABAP_MEMORY_AREA` is the shared superclass of all area classes. It contains general methods for [area handles](ABENAREA_HANDLE_GLOSRY.html).

Gets the area handle for an instance of a class. The instance can be in the shared memory or in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html).

Gets the area handle for a data object. The data object can be in the shared memory or in the internal session.

Gets the area handle for a data object. The data object can be in the shared memory or in the internal session.

Checks whether the area handle represents an area instance version in the shared memory or the current internal session.

Checks whether the area handle can be used to access an area instance version in the shared memory or the current internal session.

Checks whether the area handle points to the active area instance version.

Checks whether the current dynamic properties of the area match the properties of the area instance version that is represented:

Determines the reason for an invalid area handle.

-   `OREF` of type `REF TO object`
-   Reference to the instance of a class.

-   `HANDLE` of type `REF TO cl_abap_memory_area`
-   Reference to the area handle of the corresponding area instance version. Typing means that essentially this reference is only suitable for creating objects.

-   `DREF` of type `REF TO data`
-   Reference to a data object in the shared memory.

-   `HANDLE` of type `REF TO cl_abap_memory_area`
-   Reference to the area handle of the corresponding area instance version. Its typing essentially means that this reference is only suitable for creating objects.

-   `DATAOBJECT` of type `any`
-   Data object in the shared memory. This can, for example, be specified as a field symbol that points to a dereferenced data object in the shared memory.

-   `HANDLE` of type `REF TO cl_abap_memory_area`
-   Reference to the area handle of the corresponding area instance version. Its typing essentially means that this reference is only suitable for creating objects.

-   `SHARED` of type `abap_bool`
-   `abap_true` if an area instance version is represented in the shared objects memory and `ABAP_FALSE` if the current internal session is represented.

-   `VALID` of type `abap_bool`
-   `abap_true` if the area handle can be used to access an area instance version or the current internal session, otherwise `ABAP_FALSE`.

-   `ACTIVE_VERSION` of type `abap_bool`
-   `abap_true` if the current area instance version or the internal session is represented. `ABAP_FALSE` if an obsolete area instance version is represented, the area handle was already released, or if it is a change handle.

-   `ACTIVE_PROPERTIES` of type `abap_bool`
-   `abap_true` if the dynamic attributes of the area have not been changed since the start of construction of the current area instance version or if the current internal session is represented. Otherwise, or if the area handle was already released, `ABAP_FALSE`.

-   `DETACH_INFO` of type `SHM_DETACH_INFO`
-   The return value can be compared to one of the following constants of the class `CL_ABAP_MEMORY_AREA`.

-   `DETACH_INFO_NOT_DETACHED`
-   The area handle is still valid. This value is also returned if a commit fails but no rollback has been performed yet. This value is also returned if the current internal session is represented.
-   `DETACH_INFO_HANDLE`
-   The read lock or change lock was released explicitly using one of the methods `DETACH_COMMIT` or `DETACH_ROLLBACK`.
-   `DETACH_INFO_AREA`
-   The read lock or change lock was released using one of the methods `DETACH_AREA` or `DETACH_ALL_AREAS`.
-   `DETACH_INFO_ATTACH`
-   The read lock was released using the method `ATTACH_FOR_WRITE` and the constant `CL_SHM_AREA=>ATTACH_MODE_DETACH_READER` was passed to the parameter `ATTACH_MODE`.
-   `DETACH_INFO_INVALIDATE`
-   The change lock was released using an `INVALIDATE_...` method and the constant `abap_true` was passed to the parameter `TERMINATE_CHANGER`.
-   `DETACH_INFO_PROPAGATE`
-   The change lock was released using a `PROPAGATE_...` method.
-   `DETACH_INFO_FREE`
-   The read lock or change lock was released using a `FREE_...` method.

abenabap.html abenabap\_reference.html abencreate\_objects.html abenabap\_shared\_objects.html abenshm\_classes.html