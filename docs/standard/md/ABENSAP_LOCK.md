---
title: "ABENSAP_LOCK"
description: |
  ABENSAP_LOCK - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSAP_LOCK.htm"
abapFile: "ABENSAP_LOCK.html"
keywords: ["update", "do", "if", "try", "data", "ABENSAP", "LOCK"]
---

SAP locks must be maintained for the duration of [SAP LUWs](ABENSAP_LUW_GLOSRY.html). For this reason, different work processes and possibly changing [AS instances](ABENAS_INSTANCE_GLOSRY.html) must be able to handle these locks.

SAP locks are based on lock objects. These are [defined in the ABAP Dictionary](https://help.sap.com/docs/ABAP_PLATFORM_NEW/ec1c9c8191b74de98feb94001a95dd76/cf21ea0b446011d189700000e8322d00) and enable locks to be set on one or more rows in a single DDIC database table or locks to be set on rows in multiple DDIC database tables linked using [foreign key dependencies](ABENFOREIGN_KEY_DEPENDENCY_GLOSRY.html).

When a lock object is created, two lock function modules are generated whose names consist of the prefixes `ENQUEUE_` and `DEQUEUE_` and the name of the lock object.

For more details, see [SAP Lock Concept](https://help.sap.com/docs/ABAP_PLATFORM_NEW/6568469cf5a1460a8d85c58b83d21ec2/47df116e6abf296fe10000000a42189b) in the SAP Help Portal.

When called, lock function modules set or remove SAP locks. These function modules access a central lock table in the memory of a special work process of the current AS instance. Every [AS ABAP](ABENAS_ABAP_GLOSRY.html) contains exactly one such table (administered by transaction `SM12`). An enqueue function module sets an SAP lock by writing a corresponding entry in the lock table. If a lock cannot be set because corresponding lock entries already exist in the lock table, the function module terminates with the exception `FOREIGN_LOCK`.

The most important input parameters of an enqueue function module are:

An SAP lock is checked by trying to set a corresponding lock and handling the exception `FOREIGN_LOCK` in the process.

SAP locks can be released by deleting the associated entry in the lock table.

When an SAP lock is set using the function module `ENQUEUE`, the value passed to the input parameter `_SCOPE` determines the lock duration. Depending on the formal parameter `_SCOPE`, an SAP lock can be released as follows:

If the function module `DEQUEUE` is used to release an SAP lock independently of the update, the formal parameter `_SCOPE` must be given a value that is greater than or equal to the value passed to the same parameter of the function module `ENQUEUE`.

Besides the `_SCOPE` parameter, the input parameters of a `DEQUEUE` function module correspond to those of the `ENQUEUE` function module. The additional parameter `_SYNCHRON` can then be used to specify whether the release of the lock should be delayed until program processing is resumed.

[SAP Locks, Set and Release](ABENENQUEUE_ABEXA.html)

-   If `_SCOPE` is set to 1, the lock is not linked with the current SAP LUW. The lock can be released either by calling the `DEQUEUE` function module if the value *1* or *3* is passed to the formal parameter `_SCOPE`, or by terminating the program.
-   If `_SCOPE` is set to 2, the lock is linked with the current SAP LUW. If [`CALL FUNCTION ... IN UPDATE TASK`](ABAPCALL_FUNCTION_UPDATE.html) registered at least one update function module, the statement [`COMMIT WORK`](ABAPCOMMIT.html) or [`ROLLBACK WORK`](ABAPROLLBACK.html) releases the lock when the SAP LUW is completed. When using `COMMIT WORK`, the update function releases the lock after processing the update function modules. This type of lock may persist beyond the end of a program until the update procedure has been completed.
-   If `_SCOPE` is set to 3, both the update function and the program must release the lock. Releasing the lock by update corresponds to `_SCOPE` having the value 2. Releasing the lock in the program corresponds to `_SCOPE` having the value 1. The entire lock release is defined by who releases the lock last.

Parameter Meaning `MODE_dbtab` Type of the lock for the DDIC database table `dbtab` of the lock object. Possible input values include *S* for a [shared lock](ABENSHARED_LOCK_GLOSRY.html), *E* for an [exclusive lock](ABENEXCLUSIVE_LOCK_GLOSRY.html), *X* for an expanded exclusive lock that can be requested only once, unlike a regular exclusive lock within a program, and *O* for an optimistic lock, which behaves like a shared lock at first, but can be transformed to an exclusive lock. `KEY_FIELDS` For all key fields of the lock object, values can be specified that define the rows to be locked. If no value is specified for a key field, all affected rows are locked. `_SCOPE` Definition of the lock duration with respect to an SAP LUW. Possible values include *1* for handling the lock in the same program, *2* for passing the lock to the [update](ABENUPDATE_GLOSRY.html), and *3* for handling the lock in the program and in the update. abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html