---
title: "ABAPINVALID_STMTS_IN_RAP_METHODS"
description: |
  ABAPINVALID_STMTS_IN_RAP_METHODS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINVALID_STMTS_IN_RAP_METHODS.htm"
abapFile: "ABAPINVALID_STMTS_IN_RAP_METHODS.html"
keywords: ["select", "update", "delete", "do", "if", "method", "class", "data", "ABAPINVALID", "STMTS", "RAP", "METHODS"]
---

The following restrictions apply to operations and/or statements in the [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) and [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html). **X** means it is allowed.

**RAP handler methods for ...**

**RAP saver methods**

**Footnotes:**

-   [`CL_ABAP_TX`](ABAPRAP_CL_ABAP_TX.html)
-   [API Classifications](ABAPAPI_CLASSIFICATION.html)
-   [Restrictions in Transactional Phases](ABAPINVALID_STMTS_IN_TX.html)
-   ABAP Concepts, topic [Controlled SAP LUW](https://help.sap.com/docs/ABAP_Cloud/f2961be2bd3d403585563277e65d108f/80fe04141e30456c80cc90c5cc838e94?version=sap_cross_product_abap)

1.  ABAP EML read requests are here only allowed in [managed RAP business objects](ABENMANAGED_RAP_BO_GLOSRY.html), i.e. read requests on the [managed transactional buffer](ABENMANAGED_TRANS_BUFF_GLOSRY.html). [`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html) must be specified, and it may not be a read operation by a function, only read and read-by-association operations. In general, operations that cause applications to terminate are not allowed.

**Operation** [Augmentation implementations](ABENBDL_AUGMENT_PROJECTION.html) \\ [Feature control](ABENRAP_FEATURE_CONTROL_GLOSRY.html) [Precheck](ABENRAP_BO_PRECHECK_GLOSRY.html) \\ [Authorization control](ABENRAP_AUTH_CONTROL_GLOSRY.html) \\ [Locking](ABENRAP_LOCKING_GLOSRY.html) \\ [Reading](ABENRAP_READ_OPERATION_GLOSRY.html) Create, update and delete Determinations `ON MODIFY` Determinations `ON SAVE` Validations `ON SAVE` Functions Actions ABAP EML requests raising events - - - - - - - - - - - - ABAP EML read requests X X X X X X X X X X X X ABAP EML `GET PERMISSIONS` X X X X X X X X X X X X ABAP EML modify requests X (but only with the addition `AUGMENTING`) - - - - - X X X - - X ABAP EML [key conversion](ABAPCONVERT_KEY.html) - - - - - - - - - - - - ABAP EML `SET LOCKS` - - - - X - X X X - - X Enqueue locks - X X X X X X X X X X X [Authorization checks](ABENAUTHORIZATION_CHECK_GLOSRY.html) X X X X X X X X - - X X Calling function modules for update task and background processing - - - - - - - - - - - - Database modifications using the standard connection - - - - - - - - - - - - ABAP SQL `SELECT` statements X X X X X X X X X X X X \\ `PERFORM ON [COMMIT | ROLLBACK]` - - - - - - - - - - - - `COMMIT [WORK | ENTITIES]`, `ROLLBACK [WORK | ENTITIES]` - - - - - - - - - - - - Explicit database commits - - - - - - - - - - - - Implicit database commits X X X X X X X X X X X X [classified APIs](ABENCLASSIFIED_API_GLOSRY.html) that are classified with `IF_ABAP_TX_SURFACE` - - - - - - - - - - - - APIs classified with `IF_ABAP_TX_FUNCTIONAL` X X X X X X X X X X X X APIs classified with `IF_ABAP_TX_READ` X X X X X X X X X X X X APIs classified with `IF_ABAP_TX_MODIFY` - - - - - - X X X - - X APIs classified with `IF_ABAP_TX_SAVE` - - - - - - - - - - - - **Operation** `FINALIZE` `CHECK_BEFORE_SAVE` \\ `CLEANUP` `CLEANUP_FINALIZE` `ADJUST_NUMBERS` `SAVE`/`SAVE_MODIFIED` `MAP_MESSAGES`\\ ABAP EML requests raising events - - - - X X - ABAP EML read requests X X X X -/X (1) -/X (1) X ABAP EML `GET PERMISSIONS` X X - X X - X ABAP EML modify requests X - - X - - - ABAP EML [key conversion](ABAPCONVERT_KEY.html) - - - - X X - ABAP EML `SET LOCKS` X - - - - - - Enqueue locks X X - - X X - [Authorization checks](ABENAUTHORIZATION_CHECK_GLOSRY.html) - - - - - - - Calling function modules for update task and background processing - - - - X X - Database modifications using the standard connection - - - - X X - ABAP SQL `SELECT` statements X X X X X X X \\ `PERFORM ON [COMMIT | ROLLBACK]` - - - - X X - `COMMIT [WORK | ENTITIES]`, `ROLLBACK [WORK | ENTITIES]` - - - - - - - Explicit database commits - - - - - - - Implicit database commits X X X X - - - APIs classified with `IF_ABAP_TX_SURFACE` - - - - - - - APIs classified with `IF_ABAP_TX_FUNCTIONAL` X X X X X X X APIs classified with `IF_ABAP_TX_READ` X X X X X X X APIs classified with `IF_ABAP_TX_MODIFY` X - - X - - - APIs classified with `IF_ABAP_TX_SAVE` - - - - X X - abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html