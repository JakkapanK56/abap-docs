---
title: "ABAPBREAK-POINT"
description: |
  ABAPBREAK-POINT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPBREAK-POINT.htm"
abapFile: "ABAPBREAK-POINT.html"
keywords: ["select", "insert", "update", "loop", "do", "if", "case", "try", "data", "types", "ABAPBREAK", "POINT"]
---

[Short Reference](ABAPBREAK-POINT_SHORTREF.html)

`BREAK-POINT \{\ [ID group]`\\ 
            `|\ [log_text]\ \}.`

[1. `... ID group`](#ABAP_ADDITION_1@3@)

[2. `... log_text`](#ABAP_ADDITION_2@3@)

This statement defines a [breakpoint](ABENBREAKPOINT_GLOSRY.html). The addition `ID` controls the activation. Without the addition `ID`, the breakpoint is always active.

**Breakpoints in Dialog Processing**

If the program reaches an active breakpoint in [dialog processing](ABENDIALOG_PROCESSING_GLOSRY.html), the program execution is interrupted and the system branches to the ABAP Debugger. An inactive breakpoint is ignored and the program execution continues with the statement after `BREAK-POINT`.

**Breakpoints in Background Processing**

During [background processing](ABENBACKROUND_PROCESSING_GLOSRY.html), program execution is not interrupted. When the program reaches a permanently active breakpoint (the addition `ID` is not used), the entry *Breakpoint reached* is written to the system log along with the program name and the location of the breakpoint in the program. Activatable breakpoints (where the addition `ID` is used) are ignored. The program execution continues in both cases with the statement following `BREAK-POINT`.

**Breakpoints in Updates**

During [synchronous](ABENSYNCHRONOUS_UPDATE_GLOSRY.html) and [asynchronous updates](ABENASYNCHRONOUS_UPDATE_GLOSRY.html) in an [update session](ABENUPDATE_SESSION_GLOSRY.html), the behavior depends on the setting of the ABAP Debugger:

In [local updates](ABENLOCAL_UPDATE_GLOSRY.html), a breakpoint behaves as in dialog processing.

**Breakpoints in RFC Processing**

In [RFC processing](ABENRFC_PROCESSING_GLOSRY.html), the system stops at an active breakpoint and branches to the ABAP Debugger of the SAP GUI whenever an [`RFC` dialog interaction](ABENRFC_DIALOG.html) is possible. The ABAP Debugger in the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html) can also be displayed if no dialog interaction is possible.

**Breakpoints in ICF and APC Processing**

In [ICF processing](ABENICF_PROCESSING_GLOSRY.html) and [APC processing](ABENAPC_PROCESSING_GLOSRY.html), the system stops at an active breakpoint and branches to the ABAP Debugger of the SAP GUI only when external debugging is enabled. When programs or procedures are called in ICF processing and APC processing, they are executed in the context of the service context and their breakpoints behave accordingly.

External debugging can be switched on for a limited time period (by default two hours) using transaction `SICF` or by setting an external breakpoint in the ABAP Editor. If external debugging is not switched on, the breakpoints behave as in background processing. The ABAP Debugger in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html) can also be displayed if external debugging is not enabled.

**Breakpoints in ABAP daemon Processing**

In [ABAP daemon processing](ABENABAP_DAEMON_PROCESSING_GLOSRY.html), the system stops at an active breakpoint and branches to the ABAP Debugger of the SAP GUI only when external debugging is enabled. This also applies to non-dialog users and in callback routines.

**Breakpoints in System Programs**

In system programs, system modules, system subroutines, and system function modules whose name begins with %\_, the statement `BREAK-POINT` is only respected if *system debugging* is switched on in the ABAP Debugger (using the *Settings* menu or by entering */hs* in the command field of the [system toolbar](ABENSTANDARD_TOOLBAR_GLOSRY.html)). Otherwise, breakpoints are ignored.

Breakpoint between two program sections.

The following applies when using the addition `ID`:

Specification of a breakpoint whose behavior is specified by the [checkpoint group](ABENCHECKPOINT_GROUP_GLOSRY.html)\\ `DEMO_CHECKPOINT_GROUP`.

A supplementary text can be entered for the system log in `log_text`. `log_text` is ignored in dialog processing. In background processing and during the [update task](ABENUPDATE_GLOSRY.html), the content of `log_text` in the system log is inserted between the words *Breakpoint* and *reached*. `log_text` expects a [flat](ABENFLAT_GLOSRY.html) character-like data object with a length of 40 characters. If a data object of type `string` is specified, it is ignored.

Breakpoint with a text specified for the system log.

-   If ABAP Debugger is not set to *update debugging*, a breakpoint behaves as in background processing.
-   If ABAP Debugger is set to *update debugging*, a breakpoint behaves as in dialog processing. The update is executed in a dialog work process of the current AS instance.

-   A breakpoint in [`SELECT`](ABAPSELECT.html) loops can raise an exception due to the loss of the [database cursor](ABENDATABASE_CURSOR_GLOSRY.html). This is because a [database commit](ABENDATABASE_COMMIT_GLOSRY.html) may be triggered during debugging.
-   Breakpoints that are always active are used exclusively for test purposes and are not allowed in production programs. The statement `BREAK-POINT` without the addition `ID` therefore causes an error in the extended program check.
-   `BREAK` followed by a user name is not a statement, but a predefined [macro](ABENMACRO_GLOSRY.html).
-   The statement `BREAK-POINT` defines a [checkpoint](ABENCHECKPOINT_GLOSRY.html) that is part of an ABAP program. In the ABAP Editor and the ABAP Debugger, the following breakpoints can be set and managed without changing the source code:

-   Session breakpoints
-   are set in the ABAP Editor. Session breakpoints are valid in all [ABAP sessions](ABENABAP_SESSION_GLOSRY.html) of the current user session.
-   External breakpoints
-   are set in the ABAP Editor or in transaction `SICF`. External breakpoints have the same validity as session breakpoints but remain valid for other user sessions when the current session is ended. This makes them particularly well suited for debugging [RFC](ABENRFC_PROCESSING_GLOSRY.html), [ICF](ABENICF_PROCESSING_GLOSRY.html), and [APC](ABENAPC_PROCESSING_GLOSRY.html) processing.
-   Debugger breakpoints
-   are set in the ABAP Debugger window. They are valid for the current debugging session and for all [internal sessions](ABENINTERNAL_SESSION_GLOSRY.html) and [ABAP sessions](ABENABAP_SESSION_GLOSRY.html) of the debuggee. Debugger breakpoints can be saved as external breakpoints.

-   In dialog processing, activation from outside the program is controlled by a [checkpoint group](ABENCHECKPOINT_GROUP_GLOSRY.html)\\ `group` or an [activation variant](ABENACTIVATION_VARIANT_GLOSRY.html). The rules that apply to the statement [`ASSERT`](ABAPASSERT.html) also apply when the checkpoint group is specified. However, only *inactive* or *break* can be chosen as operation mode.
-   In [background](ABENBATCH_SESSION_GLOSRY.html), [update](ABENUPDATE_SESSION_GLOSRY.html), [ICF](ABENICF_SESSION_GLOSRY.html), and [APC](ABENAPC_SESSION_GLOSRY.html) sessions without external debugging, the breakpoint is always inactive if the addition `ID` is used.

\*Program section \\n... \\n\\ \\nBREAK-POINT. \\n\\ \\n\*Program section \\n... BREAK-POINT ID demo\_checkpoint\_group. TYPES log\_text TYPE c LENGTH 40. \\n\\ \\nFINAL(log\_text) = CONV log\_text( |in program \\{ sy-repid \\}| ). \\nBREAK-POINT log\_text. abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_tests.html abencheckpoints.html