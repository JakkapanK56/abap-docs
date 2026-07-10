---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENUSE_SHARED_OBJECTS_GUIDL.html"
abapFile: "ABENUSE_SHARED_OBJECTS_GUIDL.html"
type: "abap-reference"
---

## Wrapping

It is recommended that application programs do not access the shared objects memory directly. Instead reads on the shared objects should be wrapped in a wrapping class, whose methods are accessed by the individual programs. The [area constructor class](ABENSHM_AREA_CONSTRUCTOR_CLASS.md) can be used as the wrapping class, for example.

Wrapping has the following advantages:

-   Central administration of an area in the shared memory
-   An application program does not need to worry about area handles and locks.
-   Central administration of locks
-   Option to implement central authorization checks
