---
title: "ABAPCALL_FUNCTION_BACKGROUND_TASK"
description: |
  ABAPCALL_FUNCTION_BACKGROUND_TASK - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_FUNCTION_BACKGROUND_TASK.htm"
abapFile: "ABAPCALL_FUNCTION_BACKGROUND_TASK.html"
keywords: ["delete", "do", "if", "try", "data", "ABAPCALL", "FUNCTION", "BACKGROUND", "TASK"]
---

[Short Reference](ABAPCALL_FUNCTION_SHORTREF.html)

`CALL FUNCTION func IN BACKGROUND TASK`\\ 
                   `[AS SEPARATE UNIT]`\\ 
                   `[DESTINATION dest]`\\ 
                   `[parameter_list](ABAPCALL_FUNCTION_BACKGROUND_PARA.html)`.

[`... AS SEPARATE UNIT`](#ABAP_ONE_ADD@1@)

Transactional call (tRFC) of a [remote-enabled function module](ABENREMOTE_ENABLED_FM_GLOSRY.html) specified in `func` using the [RFC interface](ABENRFC_INTERFACE_GLOSRY.html). The addition `DESTINATION` can be used to specify a unique [destination](ABENRFC_DESTINATION.html) in `dest`. If the destination is not specified, the destination *NONE* is used implicitly. `func` and `dest` expect character-like data objects.

The transactional call registers the name of the called function, together with the destination and the actual parameters passed in [`parameter_list`](ABAPCALL_FUNCTION_BACKGROUND_PARA.html) for the current [SAP LUW](ABENSAP_LUW_GLOSRY.html) in the DDIC database tables `ARFCSSTATE` and `ARFCSDATA` of the current [AS ABAP](ABENAS_ABAP_GLOSRY.html) under a unique transaction ID, which is abbreviated as `TID`, stored in a structure of type `ARFCTID` from the ABAP Dictionary, viewed using transaction `SM58`. After registration, the calling program is continued after the statement `CALL FUNCTION`.

When the [`COMMIT WORK`](ABAPCOMMIT.html) statement is executed, the function modules registered for the current SAP LUW are started in the order in which they were registered. The statement [`ROLLBACK WORK`](ABAPROLLBACK.html) deletes all previous registrations for the current SAP LUW.

If the specified destination is not available when `COMMIT WORK` is executed, an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) called `RSARFCSE` is started in [background processing](ABENBACKROUND_PROCESSING_GLOSRY.html). By default, this tries to start the function modules registered for an SAP LUW in their destination every 15 minutes and up to 30 times. These parameters can be changed using transaction `SM59`. If the destination does not become available within the specified time, it is recorded in the DDIC database table `ARFCSDATA` as the entry `CPICERR`. By default, this entry in database table `ARFCSSTATE` is deleted after eight days.

[background RFC (bgRFC)](ABENBG_REMOTE_FUNCTION_GLOSRY.html) executed with the statement [`CALL FUNCTION IN BACKGROUND UNIT`](ABAPCALL_FUNCTION_BACKGROUND_UNIT.html) is the enhanced successor technology of transactional RFC (tRFC) and makes this technology obsolete. It is strongly recommended that bgRFC is used instead of tRFC.

**More Information**

For more information about tRFC, see the [RFC](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/4888068AD9134076E10000000A42189D) documentation in the SAP Help Portal.

When using the addition `AS SEPARATE UNIT`, the affected function module is executed in a separate [RFC session](ABENRFC_SESSION_GLOSRY.html), in which the global data of the function pool is not affected by previous calls. Each function module that is registered with the addition `AS SEPARATE UNIT` is given its own transaction ID. Without the addition `AS SEPARATE UNIT`, the usual [description](ABENRFC_CONTEXT.html) applies to the [RFC session](ABENRFC_SESSION_GLOSRY.html) of the called function modules. This means that, when using the same [RFC destination](ABENRFC_DEST_GLOSRY.html) for multiple calls of function modules of to the same function pool, the global data of this function pool is accessed collectively.

-   The function module `ID_OF_BACKGROUNDTASK` can be used after a transactional RFC to determine the transaction ID (`TID`) of the current [SAP LUW](ABENSAP_LUW_GLOSRY.html).
-   The transactional RFC (tRFC) is suitable for implementing LUWs in distributed environments (a typical application is ALE). It should be noted that, although the execution of the function modules within a transaction ID is specified, the order of the [LUWs](ABENLUW_GLOSRY.html) on the RFC servers is not necessarily the same as the order of the SAP LUWs on the RFC client. To achieve the same serialization on RFC servers as well, the tRFC can be extended to [queued RFC (qRFC)](ABENQRFC_GLOSRY.html). For this, the function module `TRFC_SET_QUEUE_NAME` can be called before a transactional RFC. For more information about qRFC, see the [RFC](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/4888068AD9134076E10000000A42189D) documentation in the SAP Help Portal.
-   If [tRFC](ABENTRFC_2_GLOSRY.html) or [qRFC](ABENQRFC_GLOSRY.html) are registered in a [dialog module](ABENDIALOG_MODULE_OBJECT_GLOSRY.html) and not started with `COMMIT WORK`, they are not executed by the `COMMIT WORK` of the caller either.
-   The new variant [`CALL FUNCTION IN BACKGROUND UNIT`](ABAPCALL_FUNCTION_BACKGROUND_UNIT.html) ([bgRFC](ABENBGRFC_GLOSRY.html)) includes and enhances the existing tRFC and qRFC variants. For this reason, it is strongly recommended that bgRFC is used instead of tRFC.
-   The statements [`COMMIT WORK`](ABAPCOMMIT.html) and [`ROLLBACK WORK`](ABAPROLLBACK.html) must not be executed within a LUW. In addition, no implicit [database commit](ABENDATABASE_COMMIT_GLOSRY.html) can be triggered there.
-   When handling the registration entries in the DDIC database tables `ARFCSSTATE` and `ARFCSDATA`, it should be noted that they are subject to the regular administration rules for a [database LUW](ABENDATABASE_LUW_GLOSRY.html). For example, the database LUW is ended by a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html), all registration entries of the current database LUW are deleted.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenextern\_obsolete.html abenrfc\_obsolete.html