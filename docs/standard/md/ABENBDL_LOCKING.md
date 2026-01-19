---
title: "ABENBDL_LOCKING"
description: |
  ABENBDL_LOCKING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_LOCKING.htm"
abapFile: "ABENBDL_LOCKING.html"
keywords: ["update", "delete", "loop", "do", "if", "case", "try", "catch", "method", "class", "data", "ABENBDL", "LOCKING"]
---

`... lock master [unmanaged]\    | lock dependent by _Assoc`

Specifies the [RAP locking](ABENRAP_LOCKING_GLOSRY.html) mechanism for a [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html). The RAP locking mechanism is based on the [SAP lock](ABENSAP_LOCK_GLOSRY.html) concept. . It prevents simultaneous modification access to data on the database by more than one user. This is also known as [pessimistic concurrency control](ABENPESSIMIST_CONC_CONTROL_GLOSRY.html). Whenever a lock is requested for a specific entity instance, its [lock master](ABENRAP_LOCK_MA_ENT_GLOSRY.html) and all [lock-dependent](ABENRAP_LOCK_DEP_ENT_GLOSRY.html) entity instance are locked for editing by a different user, in other words, as soon as one node receives a locking request, the whole BO instance is locked. Lock master entities are locked on each locking request of one of their lock-dependent entities.

The following rules apply:

In a managed RAP BO, the locking mechanism is handled by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html), so that no implementation in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is required. If the optional addition `unmanaged` is used, the lock mechanism must be implemented manually in the method [`FOR LOCK`](ABAPHANDLER_METH_LOCK.html) of the behavior pool, just like in the unmanaged scenario. It is then invoked at runtime.

In an unmanaged RAP BO, the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR LOCK`](ABAPHANDLER_METH_LOCK.html) must be implemented for lock master entities.

If a lock is defined for a RAP BO entity, the entity instances in question are implicitly locked during the runtime of the following [modify operations](ABENRAP_MODIFY_OPERATION_GLOSRY.html):

Development guide for the ABAP RESTful Application Programming Model, section [Pessimistic Concurrency Control (Locking)](https://help.sap.com/docs/ABAP_PLATFORM_NEW/fc4c71aa50014fd1b43721701471913d/99d8162b8d7d4a83ae65320d2a03b8ab).

The following example shows a managed BDEF based on the CDS root view entity `DEMO_SALES_CDS_BUPA_2`. The root entity is defined as lock master entity and the child entity is defined as lock dependent entity. The association `association _Address \{ \}` is defined in the entity behavior body of the child entity, thereby ensuring that locking requests on the child entity are delegated to the lock master entity.

**Note** This example does not fully meet the requirements of the [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html). It is intentionally kept short and simple and serves demonstration purposes only. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

The class `CL_DEMO_SALES_RAP_LOCK` accesses the business object using [EML](ABENEML_GLOSRY.html) and creates two BO instances.

Code snippet:

The following image shows the global lock table (transaction `SM12`) during the transaction, before the `COMMIT ENTITIES` statement is executed. The key values of both newly created entities are listed there as part of the uniqueness check. After the [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html) statement is executed, both entries are deleted automatically.

The following example shows an unmanaged BDEF based on the CDS root view entity `DEMO_RAP_UNMANAGED_LOCKING`. The root entity is defined as lock master entity.

The `lock` method is implemented in the ABAP behavior pool as shown below. The lock object `ERAPLOCK` is used to control access to the RAP BO's persistent database table.

The class `CL_DEMO_RAP_UNMANAGED_LOCK` accesses the business object using [EML](ABENEML_GLOSRY.html) and carries out the following steps:

During the [`UPDATE ENTITIES`](ABAPMODIFY_ENTITY_ENTITIES_OP.html) and [`DELETE ENTITIES`](ABAPMODIFY_ENTITY_ENTITIES_OP.html) operations, the two entity instances are locked in the global lock table. During the [`CREATE ENTITIES`](ABAPMODIFY_ENTITY_ENTITIES_OP.html) operation, this is not the case, since no key values are available yet.

The following example shows an unmanaged, draft-enabled BDEF based on the CDS root view entity `DEMO_RAP_UNMANAGED_DRAFT_ROOT`.

The class `CL_DEMO_RAP_UNMANAGED_DRFT_LCK` accesses the business object using [EML](ABENEML_GLOSRY.html) and performs the following steps:

The following image shows the global lock table (transaction `SM12`) during the creation of the new draft instances, before the `COMMIT ENTITIES` statement is executed. The active instances are locked. This lock is removed after the draft action `Activate` has been completed.

-   The root node must be declared as `lock master` entity.
-   Each child entity must be declared as lock-dependent entity using the syntax `lock dependent by _Assoc`. Locking requests of lock-dependent entity instances are delegated to the lock master entity.
-   Each RAP BO entity must be defined as `lock master` or `lock dependent` entity.
-   The association `_Assoc` from the lock-dependent entity to the lock master entity must be explicitly defined in the entity behavior definition using the syntax `association _AssocToLockMaster \{ \}`. The association must also be defined in the underlying CDS data model.

-   [`update`](ABENBDL_STANDARD_OPERATIONS.html)
-   [`delete`](ABENBDL_STANDARD_OPERATIONS.html)
-   [`create by association`](ABENBDL_ASSOCIATION.html)
-   [`action`](ABENBDL_ACTION.html)
-   **Note** The optional addition [`lock:none`](ABENBDL_LOCK_NONE.html) is available for actions. It can be used to prevent the locking mechanism for the entity instance for which an action is executed.
-   **Note** [`create`](ABENBDL_STANDARD_OPERATIONS.html): In a managed RAP BO, the newly created key values (if available) of instances are written into the global lock table during the create operation. This is part of a uniqueness check, which is automatically and implicitly carried out by the RAP framework. In an unmanaged RAP BO, there is no automatic uniqueness check and no key values are written into the global lock table. For further details, see the development guide for the ABAP RESTful Application Programming Model, section [Uniqueness Check](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/cc4064be45ff46d6a6b8828d3aaa9bb9?version=sap_cross_product_abap).

-   [Managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   [Draft-enabled RAP business object](ABENDRAFT_RAP_BO_GLOSRY.html)
-   If a BO is [draft-enabled](ABENBDL_WITH_DRAFT.html), locking must also be considered. As soon as a draft instance is created for an existing active instance, the active instance is given an [exclusive lock](ABENEXCLUSIVE_LOCK_GLOSRY.html) and cannot be modified by another user. This exclusive lock remains for a determined time, even if the [ABAP session](ABENABAP_SESSION_GLOSRY.html) terminates. The duration time of the exclusive lock can be configured. Once the exclusive lock expires after the duration time, the [optimistic lock phase](ABENBDL_ETAG.html) begins. During the optimistic lock phase, a draft can be resumed as long as the active instance does not change, but there is no longer an exclusive lock.
-   [Projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html)
-   In a [projection business object](ABENRAP_PROJECTION_BO_GLOSRY.html), the RAP locking mechanism that is defined and implemented for the [base BO](ABENRAP_PROJECTED_BO_GLOSRY.html) is automatically reused and does not need to be explicitly defined. For details, see topic [RAP - `EntityBehaviorCharacteristics`, Projection BDEF](ABENBDL_CHARACTER_PROJECTION.html).

-   The [draft action `Resume`](ABENBDL_DRAFT_ACTION.html) recreates a lock for an entity instance on the [persistent database table](ABENRAP_PERSISTENT_TABLE_GLOSRY.html) when a draft instance is resumed after the lock has expired.
-   The EML statement [`SET LOCKS`](ABAPSET_LOCKS.html) can be used to explicitly lock [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html).
-   Locks are managed in a global lock table.
-   The following syntax short form is available to summarize lock dependent, ETag dependent, and authorization dependent:
-   `([lock][, authorization][, etag]) dependent by _assoc`
-   For details, see topic [RAP - `SyntaxShortForm`](ABENBDL_SHORT_SYNTAX.html).
-   The lock table is administered by the transaction `SM12`

-   it creates two entity instances
-   it updates one of the instances
-   it deletes both instances

-   It creates two new draft instances of the parent entity.
-   It activates the draft entities using the draft action `Activate`.

managed\\nimplementation in class BP\_DEMO\_SALES\_CDS\_BUPA\_2 unique;\\nstrict(2);\\ndefine behavior for DEMO\_SALES\_CDS\_BUPA\_2\\npersistent table demo\_sales\_bupa\\nlock master\\nauthorization master(global)\\n\\{\\n create;\\n update;\\n delete;\\n field (readonly:update) id;\\n association \_BuPa \\{create; \\}\\n\\}\\n\\ndefine behavior for DEMO\_SALES\_CDS\_BUPA\_ADDRESS\\npersistent table demo\_sales\_bupa1\\nlock dependent by \_Address\\nauthorization dependent by \_Address\\n\\{\\n\\n field ( readonly:update ) Id, child\_key;\\n\\n update;\\n delete;\\n\\n association \_Address \\{ \\}\\n\\} DELETE FROM demo\_sales\_bupa. \\nMODIFY ENTITIES OF demo\_sales\_cds\_bupa\_2 \\n ENTITY demo\_sales\_cds\_bupa\_2 \\n CREATE FIELDS ( id gender ) WITH VALUE #( \\n ( %cid = '1' id = \`AAA\` gender = 'f' ) \\n ( %cid = '2' id = \`BBB\` gender = 'm' ) ) \\n\\ \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). \\nCOMMIT ENTITIES. unmanaged implementation in class bp\_demo\_rap\_unmanaged\_locking unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_RAP\_UNMANAGED\_LOCKING\\nlock master\\nauthorization master (global)\\n\\{\\n create;\\n update;\\n delete;\\n field ( readonly:update ) KeyFieldRoot;\\n\\} METHOD lock. \\nTRY. \\n DATA(lo\_lock) = cl\_abap\_lock\_object\_factory=>get\_instance( \\n iv\_name = 'ERAPLOCK' ). \\n LOOP AT keys REFERENCE INTO DATA(lr\_key). \\n TRY. \\n lo\_lock->enqueue( it\_parameter = VALUE #( \\n ( name = 'KEY\_FIELD' value = REF #( \\n lr\_key->KeyFieldRoot ) ) ) ). \\n CATCH cx\_abap\_foreign\_lock. \\n APPEND VALUE #( %key = CORRESPONDING #( lr\_key->\* ) \\n %fail-cause = if\_abap\_behv=>cause-locked ) \\n TO failed-demo\_rap\_unmanaged\_locking. \\n CATCH cx\_abap\_lock\_failure. \\n APPEND VALUE #( %key = CORRESPONDING #( lr\_key->\* ) \\n %fail-cause = if\_abap\_behv=>cause-unspecific ) \\n TO failed-demo\_rap\_unmanaged\_locking. \\n ENDTRY. \\n ENDLOOP. \\n CATCH cx\_abap\_lock\_failure. \\n APPEND VALUE #( %fail-cause = if\_abap\_behv=>cause-unspecific ) \\n TO failed-demo\_rap\_unmanaged\_locking. \\n ENDTRY. \\nENDMETHOD. unmanaged implementation in class bp\_demo\_rap\_unmanaged\_draft\_ro unique;\\nstrict(2);\\nwith draft;\\n\\n\\ndefine behavior for DEMO\_RAP\_UNMANAGED\_DRAFT\_ROOT alias ParentEntity\\ndraft table demo\_dbtab\_draft\\nlock master\\ntotal etag Timestamp\\netag master LastChangedAt\\nauthorization master ( global, instance )\\n\\{\\n create;\\n update;\\n delete;\\n field ( readonly:update ) KeyFieldRoot;\\n field ( readonly ) Timestamp, LastChangedAt;\\n\\n draft action Activate optimized;\\n draft action Discard;\\n draft action Edit;\\n draft action Resume;\\n draft determine action Prepare;\\n\\n association \_child \\{ create; with draft; \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_UNMANAGED\_DRAFT\_CHILD alias ChildEntity\\ndraft table demo\_draft\_ch5\\n(lock, authorization, etag) dependent by \_parent\\n\\{\\n update;\\n delete;\\n\\n association \_parent \\{ with draft; \\}\\n\\n field ( readonly:update ) keyfield, KeyFieldChild;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_character.html