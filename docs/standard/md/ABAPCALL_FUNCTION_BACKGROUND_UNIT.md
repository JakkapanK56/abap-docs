---
title: "ABAPCALL_FUNCTION_BACKGROUND_UNIT"
description: |
  ABAPCALL_FUNCTION_BACKGROUND_UNIT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_FUNCTION_BACKGROUND_UNIT.htm"
abapFile: "ABAPCALL_FUNCTION_BACKGROUND_UNIT.html"
keywords: ["update", "delete", "do", "if", "method", "class", "data", "ABAPCALL", "FUNCTION", "BACKGROUND", "UNIT"]
---

[Short Reference](ABAPCALL_FUNCTION_SHORTREF.html)

`CALL FUNCTION func IN BACKGROUND UNIT oref`\\ 
              ``[`parameter_list`](ABAPCALL_FUNCTION_BACKGROUND_PARA.html).``

Background Remote Function Call (bgRFC) of a [remote-enabled function module](ABENREMOTE_ENABLED_FM_GLOSRY.html) specified in `func` using the [RFC interface](ABENRFC_INTERFACE_GLOSRY.html). Here, `oref` is an [object reference variable](ABENOBJECT_REFER_VARIABLE_GLOSRY.html) that must point to an object whose class implements the interface `IF_BGRFC_UNIT`.

The object contains all the information required for the Remote Function Call, including the destination, whether to execute a transactional or queued call and, if required, the quantity of queues. If the same object is used for multiple calls, all called function modules are executed in one unit. Conversely, multiple objects of this type can be used in parallel in one [internal session](ABENINTERNAL_SESSION_GLOSRY.html), which enables parallel processing.

Parallel processing is executed if queues or destinations in the used objects have different names. If, in consecutive calls, different objects are used for which the same queues and destinations are specified, they are executed in the same queue one after the other.

[Background](ABENBG_REMOTE_FUNCTION_GLOSRY.html) RFC (bgRFC) is the enhanced successor technology of [transactional RFC (tRFC)](ABAPCALL_FUNCTION_BACKGROUND_TASK.html) and makes this technology [obsolete](ABENRFC_OBSOLETE.html). It is strongly recommended that bgRFC is used instead of tRFC. The [background Processing Framework](ABENBACKROUND_PROCESSING_FW_GLOSRY.html) (bgPF) encapsulates bgRFC to execute time-consuming methods asynchronously.

**More Information**

For more information about bgRFC, see the documentation [RFC](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/4888068AD9134076E10000000A42189D) in SAP Help Portal.

`CX_BGRFC_INVALID_UNIT`

-   Before the introduction of bgRFC, the parallel processing of multiple function modules was only possible using the addition `AS SEPARATE UNIT` of the statement [`CALL FUNCTION IN BACKGROUND TASK`](ABAPCALL_FUNCTION_BACKGROUND_TASK.html). This same functionality is provided by the parallel use of multiple objects, which means this addition is no longer necessary.
-   If, within the same SAP LUW, bgRFC units and [updates](ABENUPDATE_GLOSRY.html) are executed, the bgRFC units are dependent on the update. Only after the update has been processed can the associated bgRFC be started. When an incorrect update record is deleted, the bgRFC units linked to it are also deleted. The bgRFC can be decoupled from the update using the interface method `IF_BGRFC_UNIT~SEPARATE_FROM_UPDATE_TASK` of the bgRFC object.
-   [bgRFCs](ABENBGRFC_GLOSRY.html) registered in a [dialog module](ABENDIALOG_MODULE_OBJECT_GLOSRY.html) that are not started there with `COMMIT WORK` are not started by a `COMMIT WORK` statement executed by the caller of the dialog module either.
-   The statements [`COMMIT WORK`](ABAPCOMMIT.html) and [`ROLLBACK WORK`](ABAPROLLBACK.html) must not be executed within a unit. In addition, no implicit [database commit](ABENDATABASE_COMMIT_GLOSRY.html) can be triggered there.

-   *Cause:*\\ `oref` points to an invalid object.

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_destination-.html