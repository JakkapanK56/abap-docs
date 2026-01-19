---
title: "ABAPAPI_CLASSIFICATION"
description: |
  ABAPAPI_CLASSIFICATION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPAPI_CLASSIFICATION.htm"
abapFile: "ABAPAPI_CLASSIFICATION.html"
keywords: ["select", "do", "if", "method", "class", "data", "types", "ABAPAPI", "CLASSIFICATION"]
---

[Released APIs](ABENRELEASED_API_GLOSRY.html) can contain classifications to ensure transactional consistency within the [SAP LUW](ABENSAP_LUW_GLOSRY.html). In the context of the [controlled SAP LUW](ABENCONTROLLED_SAP_LUW_GLOSRY.html), the classifications are used to control that functionality encapsulated by the APIs is only used in [transactional phases](ABENTR_PHASE_GLOSRY.html) where allowed.

This affects both a consumer and a provider of such an API. A consumer is not allowed to use [classified APIs](ABENCLASSIFIED_API_GLOSRY.html) in certain contexts. Likewise, a provider is not allowed to use certain operations in its implementations. Violations of the transactional consistency are either logged or result in a runtime error.

The classifications are typically included as type definitions in interfaces, classes (in a local class include for all public and protected methods) and function modules (in the top include of the function group).

The [structured type](ABENSTRUCTURED_TYPE_GLOSRY.html)\\ `tx_contract` contains components whose names are the names of those methods that are to be classified. `tx_contract` is a predefined name. The individual components are typed with an [enumerated type](ABENENUMERATED_TYPE_GLOSRY.html) (`ty`) available in the `IF_ABAP_TX_*` interfaces. When used as shown below, the ABAP compiler interprets the methods as classified.

TYPES: BEGIN OF tx\_contract, \\n         method\_a TYPE if\_abap\_tx\_read=>ty, \\n         method\_b TYPE if\_abap\_tx\_modify=>ty, \\n         ... \\n       END OF tx\_contract.

The following table shows the classifications and what is allowed and what not:

The following code snippet demonstrates an interface that contains methods that are typed with classifications.

The example [`CL_ABAP_TX` and API Classifications](ABENCL_ABAP_TX_ABEXA.html) demonstrates classified APIs.

-   Violations of [transactional contracts](ABENTRANSACTIONAL_CONTRACT_GLOSRY.html) detected by the [controlled SAP LUW](ABENCONTROLLED_SAP_LUW_GLOSRY.html) are viewable in the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html) on the *Feed Reader* tab for each system. You can add the *ABAP Contract Check Violations* feed query. Configuration options are available for the feed, including filtering for objects you are responsible for

-   ABAP Concepts, topic [Controlled SAP LUW](https://help.sap.com/docs/ABAP_Cloud/f2961be2bd3d403585563277e65d108f/80fe04141e30456c80cc90c5cc838e94?version=sap_cross_product_abap)
-   [`CL_ABAP_TX`](ABAPRAP_CL_ABAP_TX.html)
-   [RAP Implementation Rules](ABAPRAP_IMPL_RULES.html)
-   [Restrictions in RAP Handler and Saver Methods](ABAPINVALID_STMTS_IN_RAP_METHODS.html)

INTERFACE if\_some\_interface \\n PUBLIC. \\n\\ \\n TYPES: BEGIN OF tx\_contract, \\n meth\_complete TYPE if\_abap\_tx\_complete=>ty, \\n meth\_read TYPE if\_abap\_tx\_read=>ty, \\n meth\_functional TYPE if\_abap\_tx\_functional=>ty, \\n meth\_modify TYPE if\_abap\_tx\_modify=>ty, \\n meth\_save TYPE if\_abap\_tx\_save=>ty, \\n meth\_surface TYPE if\_abap\_tx\_surface=>ty, \\n END OF tx\_contract. \\n\\ \\n METHODS: \\n meth\_complete ..., \\n meth\_functional ..., \\n meth\_read ..., \\n meth\_modify ..., \\n meth\_save ..., \\n meth\_surface .... \\n\\ \\nENDINTERFACE. **Classification** **Notes** **Allowed** **Not Allowed**\\ `IF_ABAP_TX_FUNCTIONAL` Since such an API should have the character of a pure function, that is, it should only compute a mapping between its input and output parameters, the implementation scope for a provider of the API is very restricted. ABAP SQL [`SELECT`](ABAPSELECT.html), \\
calling APIs tagged with `IF_ABAP_TX_FUNCTIONAL`\\ ABAP EML requests, \\
[locks](ABENLOCK_GLOSRY.html), \\
[authorization checks](ABENAUTHORIZATION_CHECK_GLOSRY.html), \\
database modifying operations ([standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html)), \\
\\
[`COMMIT WORK`](ABAPCOMMIT.html), [`ROLLBACK WORK`](ABAPROLLBACK.html), [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html), [`ROLLBACK ENTITIES`](ABAPROLLBACK_ENTITIES.html), \\
implicit and explicit [database commits](ABENDATABASE_COMMIT_GLOSRY.html), \\
calling APIs tagged with `IF_ABAP_TX_SAVE`, `IF_ABAP_TX_MODIFY`, `IF_ABAP_TX_READ` and `IF_ABAP_TX_SURFACE`\\ `IF_ABAP_TX_READ` A consumer can call an API with this classification in the modify transactional phase. Permitted operations for a provider of the API include read requests. ABAP EML read and permission requests, \\
ABAP SQL [`SELECT`](ABAPSELECT.html), \\
implicit [database commits](ABENDATABASE_COMMIT_GLOSRY.html), \\
[authorization checks](ABENAUTHORIZATION_CHECK_GLOSRY.html), \\
calling APIs tagged with `IF_ABAP_TX_FUNCTIONAL` and `IF_ABAP_TX_READ`\\ ABAP EML modify requests, \\
ABAP EML requests [in local mode](ABAPIN_LOCAL_MODE.html), \\
ABAP EML [key conversion](ABAPCONVERT_KEY.html), \\
[locks](ABENLOCK_GLOSRY.html), \\
database modifying operations ([standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html)), \\
[`COMMIT WORK`](ABAPCOMMIT.html), [`ROLLBACK WORK`](ABAPROLLBACK.html), [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html), [`ROLLBACK ENTITIES`](ABAPROLLBACK_ENTITIES.html),\\
explicit [database commits](ABENDATABASE_COMMIT_GLOSRY.html), \\
calling APIs tagged with `IF_ABAP_TX_SAVE`, `IF_ABAP_TX_MODIFY` and `IF_ABAP_TX_SURFACE`\\ `IF_ABAP_TX_MODIFY` A consumer can only call an API with this classification in the modify transactional phase. A provider of the API must not perform illegal operations. ABAP EML read, modify, permission and lock requests, \\
ABAP SQL [`SELECT`](ABAPSELECT.html), [locks](ABENLOCK_GLOSRY.html), \\
[authorization checks](ABENAUTHORIZATION_CHECK_GLOSRY.html), \\
implicit [database commits](ABENDATABASE_COMMIT_GLOSRY.html), \\
calling APIs tagged with `IF_ABAP_TX_MODIFY`, `IF_ABAP_TX_FUNCTIONAL` and `IF_ABAP_TX_READ` ABAP EML requests [in local mode](ABAPIN_LOCAL_MODE.html), \\
ABAP EML [key conversion](ABAPCONVERT_KEY.html), \\
database modifying operations ([standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html)), \\
[`COMMIT WORK`](ABAPCOMMIT.html), [`ROLLBACK WORK`](ABAPROLLBACK.html), [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html), [`ROLLBACK ENTITIES`](ABAPROLLBACK_ENTITIES.html),\\
explicit [database commits](ABENDATABASE_COMMIT_GLOSRY.html), \\
calling APIs tagged with `IF_ABAP_TX_SAVE` and `IF_ABAP_TX_SURFACE`\\ `IF_ABAP_TX_SAVE` A consumer can only call an API with this classification in the save transactional phase. A provider of the API must not perform illegal operations. ABAP EML [`RAISE ENTITY EVENT`](ABAPRAISE_ENTITY_EVENT.html), \\
ABAP EML read requests, \\
ABAP EML [key conversion](ABAPCONVERT_KEY.html), \\
ABAP SQL [`SELECT`](ABAPSELECT.html), \\
[locks](ABENLOCK_GLOSRY.html), \\
database modifying operations ([standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html)), \\
calling APIs tagged with `IF_ABAP_TX_SAVE`, `IF_ABAP_TX_FUNCTIONAL` and `IF_ABAP_TX_READ` ABAP EML modify, permission and lock requests, \\
ABAP EML requests [in local mode](ABAPIN_LOCAL_MODE.html), \\
[authorization checks](ABENAUTHORIZATION_CHECK_GLOSRY.html), \\
[`COMMIT WORK`](ABAPCOMMIT.html), [`ROLLBACK WORK`](ABAPROLLBACK.html), [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html), [`ROLLBACK ENTITIES`](ABAPROLLBACK_ENTITIES.html), \\
implicit and explicit [database commits](ABENDATABASE_COMMIT_GLOSRY.html), \\
calling APIs tagged with `IF_ABAP_TX_SURFACE` and `IF_ABAP_TX_MODIFY`\\ `IF_ABAP_TX_SURFACE` A consumer cannot call an API with this classification from RAP BO implementations and from APIs with the other classifications. There are no restrictions for an API provider. Each of the following operations is allowed within the API, but not in [behavior implementations](ABENBEHAVIOR_IMPLEMENT_GLOSRY.html) \\
\\
ABAP EML requests, \\
ABAP SQL [`SELECT`](ABAPSELECT.html), \\
ABAP EML [`RAISE ENTITY EVENT`](ABAPRAISE_ENTITY_EVENT.html), \\
[locks](ABENLOCK_GLOSRY.html), \\
[authorization checks](ABENAUTHORIZATION_CHECK_GLOSRY.html), \\
Database modifying operations ([standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html)), \\
[`COMMIT WORK`](ABAPCOMMIT.html), [`ROLLBACK WORK`](ABAPROLLBACK.html), [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html), [`ROLLBACK ENTITIES`](ABAPROLLBACK_ENTITIES.html), \\
implicit and explicit [database commits](ABENDATABASE_COMMIT_GLOSRY.html), \\
calling APIs tagged with each of the tags available \\
ABAP EML requests [in local mode](ABAPIN_LOCAL_MODE.html), \\
\\
**Note:** Not to be called in [behavior implementations](ABENBEHAVIOR_IMPLEMENT_GLOSRY.html). `IF_ABAP_TX_COMPLETE` The call of the classified API is put under transactional control. When called, an API with this classification always starts in the `modify` transactional phase, as if the transactional phase had been explicitly set by calling `cl_abap_tx=>modify( )`. At any time during its execution, the API can enter the `save` transactional phase by calling `cl_abap_tx=>save( )`. From this point on, operations that violate the `SAVE` transactional contract are not allowed. When the API is exited, transactional control ends. An API with this classification must not be called from within a transactional contract, i.e. [ABAP behavior implementations](ABENBEHAVIOR_IMPLEMENT_GLOSRY.html), APIs classified with a transactional contract (including `IF_ABAP_TX_COMPLETE` itself) and a transactional phase that has been explicitly set (e.g. using `cl_abap_tx=>modify( )`). [Locks](ABENLOCK_GLOSRY.html), \\
ABAP SQL [`SELECT`](ABAPSELECT.html), \\
calling APIs tagged with `IF_ABAP_TX_FUNCTIONAL` \\
\\
**Allowed in the modify phase in the API implementation:** \\
ABAP EML read, permission, modify and lock requests, \\
[authorization checks](ABENAUTHORIZATION_CHECK_GLOSRY.html), \\
implicit [database commits](ABENDATABASE_COMMIT_GLOSRY.html), \\
calling APIs tagged with `IF_ABAP_TX_READ` and `IF_ABAP_TX_MODIFY` \\
\\
**Allowed in the save phase in the API implementation:** \\
[`RAISE ENTITY EVENT`](ABAPRAISE_ENTITY_EVENT.html), \\
ABAP EML [key conversion](ABAPCONVERT_KEY.html), \\
database modifying operations ([standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html)), \\
calling APIs tagged with `IF_ABAP_TX_SAVE` ABAP EML requests [in local mode](ABAPIN_LOCAL_MODE.html), \\
[`COMMIT WORK`](ABAPCOMMIT.html), [`ROLLBACK WORK`](ABAPROLLBACK.html), [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html), [`ROLLBACK ENTITIES`](ABAPROLLBACK_ENTITIES.html), \\
explicit [database commits](ABENDATABASE_COMMIT_GLOSRY.html), \\
calling APIs tagged with `IF_ABAP_TX_SURFACE` abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html abensap\_luw.html abencontrolling\_sap\_luw.html