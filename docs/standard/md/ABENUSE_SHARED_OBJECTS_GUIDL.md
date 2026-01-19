---
title: "ABENUSE_SHARED_OBJECTS_GUIDL"
description: |
  ABENUSE_SHARED_OBJECTS_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENUSE_SHARED_OBJECTS_GUIDL.htm"
abapFile: "ABENUSE_SHARED_OBJECTS_GUIDL.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABENUSE", "SHARED", "OBJECTS", "GUIDL"]
---

Access to [shared objects](ABENABAP_SHARED_OBJECTS.html) is regulated by lock mechanisms. The individual locks are stored as administrative information with the area instances in the shared memory and are set and evaluated when they are accessed using area handles.

**Shared buffer and exclusive buffer are suitable application scenarios for shared objects.**

The access to shared objects should be wrapped in loader and broker classes.

How locks work depends on how shared objects are used as follows:

General shared memory programming is not possible. The current lock logic does not enable you to set specific locks for the following requirements:

Although the lock logic makes the first two points technically possible, they are not practical because most accesses would be rejected.

It is recommended that application programs do not access the shared objects memory directly. Instead reads on the shared objects should be wrapped in a wrapping class, whose methods are accessed by the individual programs. The [area constructor class](ABENSHM_AREA_CONSTRUCTOR_CLASS.html) can be used as the wrapping class, for example.

Wrapping has the following advantages:

-   Scenario 1 - Use as a shared buffer
-   A shared buffer is a data store that is rarely changed (once a day up to a maximum of once an hour), usually by a single consumer only. The amount of data can be very large. In general, many consumers can perform reads on a shared buffer at the same time. A typical use of a shared buffer is to store a catalog.
-   Scenario 2 - Use as an exclusive buffer
-   An exclusive buffer is a data store where only one consumer performs reads or writes or, in rare cases, where one consumer performs writes and another performs reads. The data stored in an exclusive buffer should be available as long term data, that is longer than the lifetime of a program. A typical use of an exclusive buffer is to store a shopping basket that is filled initially by the shopper and then read by the salesperson later.

-   Many parallel reads and writes
-   Frequent writes
-   Split into modifiable and non-modifiable areas

-   Central administration of an area in the shared memory
-   An application program does not need to worry about area handles and locks.
-   Central administration of locks
-   Option to implement central authorization checks

abenabap.html abenabap\_reference.html abenabap\_pgl.html abenarchitecture\_gdl.html abendata\_storage\_gdl.html