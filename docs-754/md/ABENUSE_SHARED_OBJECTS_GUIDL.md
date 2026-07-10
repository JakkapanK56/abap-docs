---
title: "Using Shared Objects - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuse_shared_objects_guidl.htm"
abapFile: "abenuse_shared_objects_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Architecture](ABENARCHITECTURE_GUIDL.md) →  [Data Storage](ABENDATA_STORAGE_GUIDL.md) → 

Using Shared Objects

Background

Access to [shared objects](ABENABAP_SHARED_OBJECTS.md) is regulated by lock mechanisms. The individual locks are stored as administrative information with the area instances in the shared memory and are set and evaluated when they are accessed using area handles.

Rule

Shared buffer and exclusive buffer are suitable application scenarios for shared objects.

The access to shared objects should be wrapped in loader and broker classes.

Details

How locks work depends on how shared objects are used as follows:

-   Scenario 1 - Use as a shared buffer

A shared buffer is a data store that is rarely changed (once a day up to a maximum of once an hour), usually by a single consumer only. The amount of data can be very large. In general, many consumers can perform reads on a shared buffer at the same time. A typical use of a shared buffer is to store a catalog.

-   Scenario 2 - Use as an exclusive buffer

An exclusive buffer is a data store where only one consumer performs reads or writes or, in rare cases, where one consumer performs writes and another performs reads. The data stored in an exclusive buffer should be available longer term, that is, longer than a program’s lifetime. A typical use of an exclusive buffer is to store a shopping basket that is filled initially by the shopper and then read by the salesperson later.

General shared memory programming is not possible. The current lock logic does not enable you to set specific locks for the following requirements:

-   Many parallel reads and writes

-   Frequent writes

-   Split into modifiable and non-modifiable areas

Although the lock logic makes the first two points technically possible, they are not practical because most accesses would be rejected.

Wrapping

It is recommended that application programs do not access the shared objects memory directly. Instead reads on the shared objects should be wrapped in a wrapping class, whose methods are accessed by the individual programs. The [area constructor class](ABENSHM_AREA_CONSTRUCTOR_CLASS.md) can be used as the wrapping class, for example.

Wrapping has the following advantages:

-   Central administration of an area in the shared memory

-   An application program does not need to worry about area handles and locks.

-   Central administration of locks

-   Option to implement central authorization checks
