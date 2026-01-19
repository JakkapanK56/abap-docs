---
title: "ABENNEWS-816-EML"
description: |
  ABENNEWS-816-EML - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-816-EML.htm"
abapFile: "ABENNEWS-816-EML.html"
keywords: ["if", "method", "class", "types", "ABENNEWS", "816", "EML"]
---

[1\. RAP Handler Methods for RAP Default Values Functions](#ABAP_MODIFICATION_1@4@)

[2. C1 Release of Class `CL_ABAP_BEHAVIOR_SAVER_FAILED`](#ABAP_MODIFICATION_2@4@)

[3\. ABP Auxiliary Class](#ABAP_MODIFICATION_3@4@)

[4\. Commits in the Context of RAP Projections](#ABAP_MODIFICATION_4@4@)

[5\. Unit Tests and Contract Check Violations](#ABAP_MODIFICATION_5@4@)

[6. `FORWARDING PRIVILEGED` Addition](#ABAP_MODIFICATION_6@4@) 

[7\. ABAP EML Read Operations Not Allowed in Late Save Phase](#ABAP_MODIFICATION_7@4@)

[8\. Runtime Type Service Method for BDEF Derived Types](#ABAP_MODIFICATION_8@4@)

[9\. Using Custom Secondary Table Keys in BDEF Derived Types](#ABAP_MODIFICATION_9@4@)

[10\. New Contract Checks](#ABAP_MODIFICATION_10@4@)

[RAP default values functions](ABENRAP_BO_DEFAULTING_GLOSRY.html) require an implementation in an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) in a specific way. See the topic [Handler Methods for RAP Default Values Functions](ABAPRAP_HANDLER_DEFAULT_VAL_FUNC.html).

The [RAP saver class](ABENABP_SAVER_CLASS_GLOSRY.html)\\ [`CL_ABAP_BEHAVIOR_SAVER_FAILED`](ABENABP_CL_ABAP_BEH_SAVER_FAILED.html) has been released with the [C1 release contract](ABENC1_CONTRACT_GLOSRY.html) for the ABAP language version [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html). See the blog post [*Using BAPIs in RAP*](https://blogs.sap.com/2022/11/30/using-bapis-in-rap/) for further details.

[ABP auxiliary classes](ABENABP_AUX_CLASS_GLOSRY.html), which enable extended access rights to a referenced RAP BO, are possible now. Find more information [here](ABAPRAP_AUXILIARY_CLASS.html).

Regarding commits in the context of RAP projections behavior definitions (or RAP interface behavior definitions): RAP BO instances that fail to be committed in the RAP save sequence for the base RAP BO are returned to the RAP BO consumer. The messages in the `failed` RAP response parameter are automatically mapped to projections.

[ABAP contract checks](ABENCONTRACT_CHECKS_GLOSRY.html) violations are made visible in [unit tests](ABENUNIT_TEST_GLOSRY.html), i.e. the unit tests will fail if a contract check violation occurs.

Using the [`FORWARDING PRIVILEGED`](ABAPEML_PRIVILEGED.html) addition in `READ`, `MODIFY`, and `GET PERMISSIONS` statements, you can pass on the privileged context in subsequent ABAP EML requests.

ABAP EML [read operations](ABAPREAD_ENTITY_ENTITIES.html) are not allowed in the [RAP late save phase](ABENLATE_RAP_SAVE_PHASE_GLOSRY.html).

[Runtime Type Services](ABENRUN_TIME_TYPE_SERVICES_GLOSRY.html) now include a method to create BDEF derived types dynamically and type-safe. See the topic [here](ABAPDERIVED_TYPES_DYNAMIC.html).

It is possible to create your own secondary table keys for BDEF derived types, and use them in ABAP statements. Find more information [here](ABAPDERIVED_TYPES_SECONDARY_KEYS.html).

The following [contract checks](ABAPRAP_IMPL_RULES.html) have been added:

Violations result in the runtime error `BEHAVIOR_BAD_HANDLER_RESPONSE`.

-   Disallowed entries in the `failed` response parameter
-   Entries with wrong fail causes in the `failed` response parameter
-   Entries with non-initial `%state_area` components in the `reported` response in various contexts

abenabap.html abennews.html abennews-81.html abennews-816.html abennews-816-restful.html