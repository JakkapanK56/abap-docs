---
title: "ABAPSET_LOCKS"
description: |
  ABAPSET_LOCKS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_LOCKS.htm"
abapFile: "ABAPSET_LOCKS.html"
keywords: ["select", "loop", "do", "if", "method", "data", "types", "ABAPSET", "LOCKS"]
---

1\. ``SET LOCKS ENTITY entity FROM inst [[`response_param`](ABAPEML_RESPONSE.html)].``

2\. `SET LOCKS OF bdef`\\
`ENTITY entity1 FROM inst1`\\
`[ENTITY entity2 FROM inst2]`\\
`[...]`\\
``[[`response_param`](ABAPEML_RESPONSE.html)].``

3\. ``SET LOCKS lock_tab [[`response_param`](ABAPEML_RESPONSE.html)].``

Used to set [enqueue locks](ABENSAP_LOCK.html) for [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) to prevent the concurrent modification of instances. The [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html) automatically locks instances for subsequent modifications. However, if the [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) requires an exclusive lock so that no other user can modify the same instance in parallel, the statements can be used. The lock remains active until the end of a [RAP transaction](ABENRAP_LUW_GLOSRY.html).

In the BDEF, the [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html) must always be specified with `lock master`. All child entities are always `lock dependent`. Consequently, when child entities are requested to be locked, their corresponding instance of the root entity is locked. See more details on the BDEF prerequisites in the RAP BDL documentation for [locking](ABENBDL_LOCKING.html).

The addition [`response_param`](ABAPEML_RESPONSE.html) is optional. If an instance is already locked in parallel, information with the failure cause `IF_ABAP_BHEV-LOCKED` (see types contained in the interface `IF_ABAP_BEHV`) is returned in the `FAILED` response parameter.

The following variants of the statement `SET LOCKS` enable the exclusive locking of instances:

When implementing RAP operations, ensure that you comply with [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html). Follow the implementation guidelines in the development guide for the ABAP RESTful Application Programming Model, section [RAP Business Object Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

You can find a selected set of guidelines in [here](ABAPRAP_IMPL_RULES.html).

[`SET LOCKS ENTITY`, Short Form](ABAPSET_LOCKS_ENTITY.html)

[`SET LOCKS OF`, Long Form](ABAPSET_LOCKS_OF.html)

[`SET LOCKS lock_tab`, Dynamic Form](ABAPSET_LOCKS_DYN.html)

-   [`SET LOCKS ENTITY`, Short Form](ABAPSET_LOCKS_ENTITY.html)
-   The short form of the `SET LOCKS` statement allows instances of a single entity to be locked.
-   [`SET LOCKS OF`, Long Form](ABAPSET_LOCKS_OF.html)
-   The long form of the `SET LOCKS` statement allows instances of multiple entities to be locked.
-   [`SET LOCKS lock_tab`, Dynamic Form](ABAPSET_LOCKS_DYN.html)
-   The dynamic form of the `SET LOCKS` statement allows multiple instances to be collected and locked in multiple entities in one `SET LOCKS` statement.

-   `SET LOCKS` statements are only allowed in the [`FOR LOCK`](ABAPHANDLER_METH_LOCK.html) and [`FOR MODIFY`](ABAPHANDLER_METH_MODIFY.html) handler methods.
-   ABAP EML statements should not be used in loops. Using them can have a performance impact because it can result in multiple single database accesses. There should be only one ABAP EML statement to read the necessary data, and then the data should be modified with an ABAP EML modify request.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html