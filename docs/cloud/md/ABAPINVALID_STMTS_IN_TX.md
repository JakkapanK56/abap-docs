---
title: "ABAPINVALID_STMTS_IN_TX"
description: |
  ABAPINVALID_STMTS_IN_TX - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPINVALID_STMTS_IN_TX.htm"
abapFile: "ABAPINVALID_STMTS_IN_TX.html"
keywords: ["do", "if", "method", "class", "data", "ABAPINVALID", "STMTS"]
---

The following restrictions apply to operations and/or statements in the modify and save [transactional phases](ABENTR_PHASE_GLOSRY.html). *X* means it is allowed.

-   In a RAP transaction, the modify transactional phase includes the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html) and [RAP early save phase](ABENEARLY_RAP_SAVE_PHASE_GLOSRY.html). The save transactional phase includes the [RAP late save phase](ABENLATE_RAP_SAVE_PHASE_GLOSRY.html).
-   [ABAP contract checks](ABENCONTRACT_CHECKS_GLOSRY.html) violations are made visible in [unit tests](ABENUNIT_TEST_GLOSRY.html), i.e. the unit tests will fail if a contract check violation occurs.
-   Violations of [transactional contracts](ABENTRANSACTIONAL_CONTRACT_GLOSRY.html) detected by the [controlled SAP LUW](ABENCONTROLLED_SAP_LUW_GLOSRY.html) are viewable in the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html) on the *Feed Reader* tab for each system. You can add the *ABAP Contract Check Violations* feed query. Configuration options are available for the feed, including filtering for objects you are responsible for

-   For general information about data consistency and the SAP LUW, see [here](ABENDATA_CONSISTENCY.html).
-   An integral part of RAP transactions is [database locking](ABENDATABASE_LOCK_GLOSRY.html). Each RAP BO instance that is processed during a SAP LUW in RAP must be locked to avoid conflicts. See more information in the Development Guide for the ABAP RESTful Application Programming Model, section [Pessimistic Concurrency Control (Locking)](https://help.sap.com/docs/ABAP_PLATFORM_NEW/fc4c71aa50014fd1b43721701471913d/99d8162b8d7d4a83ae65320d2a03b8ab).
-   [RAP Save Sequence](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ab7459048c7e4ecda98d0b6f51b01e7b?version=sap_cross_product_abap) in the Development Guide for the ABAP RESTful Application Programming Model.
-   [Restrictions in RAP Handler and Saver Methods](ABAPINVALID_STMTS_IN_RAP_METHODS.html)
-   ABAP Concepts, topic [Controlled SAP LUW](https://help.sap.com/docs/ABAP_Cloud/f2961be2bd3d403585563277e65d108f/80fe04141e30456c80cc90c5cc838e94?version=sap_cross_product_abap)

**Operations/Statements** **modify phase** \\ **save phase** **Notes**\\ Database modifications - X Only allowed in the late save phase because the data being processed is always potentially inconsistent. Database changes in other phases would result in multiple database transactions instead of one transaction, which would disrupt the SAP LUW. Transaction control \\
\\
`COMMIT WORK`, `ROLLBACK WORK` X/- X/- When a [transactional phase](ABENTR_PHASE_GLOSRY.html) has been explicitly set by methods of the `CL_ABAP_TX` class, the [transaction owner](ABENTRANSACTION_OWNER_GLOSRY.html) is allowed to execute a commit or rollback statement. In the contexts of [RAP](ABENARAP_GLOSRY.html) (that is, where RAP is the transaction owner, for example, in [handler](ABENABP_HANDLER_METHOD_GLOSRY.html) and [saver methods](ABENABP_SAVER_METHOD_GLOSRY.html)), local consumption of [RAP business events](ABENRAP_ENTITY_EVENT_GLOSRY.html), [bgPF](ABENBGPF_GLOSRY.html), and [classified APIs](ABENCLASSIFIED_API_GLOSRY.html), commit or rollback statements are not allowed. Raising an exception using `RAISE EXCEPTION` - - It is not allowed to leave a transaction this way. Raising a [RAP business event](ABENRAP_ENTITY_EVENT_GLOSRY.html) using `RAISE ENTITY EVENT` - X The statements are recommended in the `save` and `save_modified`\\ [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html). abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html abensap\_luw.html abencontrolling\_sap\_luw.html