---
title: "ABAPASSERT"
description: |
  ABAPASSERT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPASSERT.htm"
abapFile: "ABAPASSERT.html"
keywords: ["update", "if", "case", "try", "catch", "method", "data", "types", "internal-table", "ABAPASSERT"]
---

[Short Reference](ABAPASSERT_SHORTREF.html)

``ASSERT [\ [ID group [SUBKEY sub]]\           [FIELDS val1 val2 ...]\           CONDITION ]\ [`log_exp`](ABENLOGEXP.html).``

[1. `... ID group`](#ABAP_ADDITION_1@3@)

[2. `... SUBKEY sub`](#ABAP_ADDITION_2@3@)

[3. `... FIELDS val1 val2 ...`](#ABAP_ADDITION_3@3@)

[4. `... CONDITION`](#ABAP_ADDITION_4@3@)

This statement defines an [assertion](ABENASSERTION_GLOSRY.html). Any [logical expression](ABENLOGICAL_EXPRESSION_GLOSRY.html) can be specified for [`log_exp`](ABENLOGEXP.html). An assertion is either active or inactive.

When the program reaches an active assertion, the logical expression is evaluated, and the program execution continues with the statement after `ASSERT` only if the result of `log_exp` is true. After an inactive assertion, the logical expression `log_exp` is not evaluated and the program execution continues with the statement following `ASSERT`.

[Using Assertions](ABENASSERTIONS_GUIDL.html)

Before a dynpro is called, the statement `ASSERT` ensures that a SAP GUI exists. If this is not the case, the program terminates with the runtime error `ASSERTION_FAILED`.

The addition `ID` defines that the activation of the statement `ASSERT` is controlled from outside of the program using the [checkpoint group](ABENCHECKPOINT_GROUP_GLOSRY.html)\\ `group`. If the addition `ID` is specified, the addition `CONDITION` must be specified before the `log_exp` logical expression.

The name of the checkpoint group must be specified directly, and the group must exist in the [repository](ABENREPOSITORY_GLOSRY.html). A checkpoint group is managed using the transaction `SAAB`. For a checkpoint group, activation settings can be specified for the assigned checkpoints either directly or using [activation variants](ABENACTIVATION_VARIANT_GLOSRY.html).

All checkpoint statements linked with the checkpoint group (`ASSERT`, `BREAK-POINT`, `LOG-POINT`) can be activated or deactivated using the checkpoint group. An activation setting consists of three components:

If the checkpoint statements are activated using the compilation unit, then the association with a specific checkpoint group no longer has any meaning.

Like the previous example, but here the behavior of the statement `ASSERT` is controlled using the checkpoint group `DEMO_CHECKPOINT_GROUP`.

The addition `SUBKEY` only has an effect if the statement `ASSERT` writes entries to a log. If `SUBKEY` is specified, the content of `sub` is stored in the log as a subkey. Any existing log entries of the same `ASSERT` statement are overwritten only if the subkey has the same content. If `SUBKEY` is not specified, the subkey is initial.

`sub` is a [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html) of which the first 200 characters are evaluated. An expression or function specified here is evaluated only if the assertion is active and the logical expression is false.

After the addition `FIELDS`, a list `val1 val2 ...` of any values, except for reference variables, can be specified. If the statement `ASSERT` writes entries to a log, the specified values `val1 val2 ...` are also included in the log. If an uncatchable exception is raised, the content of the first eight specified data objects is displayed in the associated [short dump](ABENSHORT_DUMP_GLOSRY.html). The addition `FIELDS` is ignored when a branch to the ABAP Debugger is performed.

`val1 val2 ...` are [functional operand positions](ABENFUNCTIONAL_POSITION_GLOSRY.html) in which data objects or functional methods can be specified. The methods are executed only if the assertion is active and the logical expression is false.

If the addition `FIELDS` is specified, the addition `CONDITION` must be specified before the `log_exp` logical expression.

Like the previous example, but here logs are provided with additional information.

The addition `CONDITION` introduces the logical expression. It must be specified in front of `log_exp` if one of the other additions is specified; otherwise, it can be omitted.

Like the first example above, but here the optional `CONDITION` addition is specified.

-   Without the addition `ID`, the assertion is always active.
-   When using the addition `ID`, the activation and the behavior of the statement are controlled from outside the program by a [checkpoint group](ABENCHECKPOINT_GROUP_GLOSRY.html).

-   If the result of `log_exp` is false, an uncatchable exception is raised for an assertion that is always active, if the addition `ID` is not specified, and the program terminates with the runtime error `ASSERTION_FAILED`.
-   For an assertion activated externally, if the addition `ID` is specified, the operation mode specified for a [checkpoint group](ABENCHECKPOINT_GROUP_GLOSRY.html) or the current [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html) determines how the program execution is continued.

-   If [functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html) are specified as operands of a [relational expression](ABENRELATIONAL_EXPRESSION_GLOSRY.html) in the logical expression `log_exp`, they must not have any side effects. This must especially apply to assertions that can be activated externally, since the program behavior otherwise depends on the activation.
-   Assertions help verify certain assumptions about the state of a program in a particular location and ensure that these assumptions are met. Compared with the implementation with a conditional expression with [`THROW SHORTDUMP`](ABENCONDITIONAL_EXPRESSION_RESULT.html), the `ASSERT` statement is shorter, its meaning is immediately recognizable, and it can be activated externally.
-   This is also true in comparison with an `IF` statement and a [`RAISE SHORTDUMP`](ABAPRAISE_SHORTDUMP.html) statement.

-   Validity area - Checkpoints specified in the checkpoint group or [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html)
-   Context - User and/or AS instance specified
-   Operation mode - System behavior of the different checkpoint types (assertions, breakpoints, or logpoints)
-   The following settings are possible:

-   *Inactive*
-   The assertion is inactive.
-   *Log*
-   Creates an entry in a special log and continues program execution with the statement following `ASSERT`. The log entries are collected in the shared memory and are written to a DDIC database table by a periodical background job. By default, any existing entries of the same `ASSERT` statement are overwritten. Each time an entry is written, a counter for the entry is increased. The log can be evaluated using transaction `SAAB`.
-   *stop / log* or *stop / cancel*
-   Branch to the ABAP Debugger. In [dialog processing](ABENDIALOG_PROCESSING_GLOSRY.html), the statement `ASSERT` behaves like the statement [`BREAK-POINT`](ABAPBREAK-POINT.html). The specified alternative setting is used for the cases in which the statement `BREAK-POINT` writes an entry to the system log, namely for [background sessions](ABENBATCH_SESSION_GLOSRY.html), [update sessions](ABENUPDATE_SESSION_GLOSRY.html), [ICF](ABENICF_SESSION_GLOSRY.html) sessions, and [APC](ABENAPC_SESSION_GLOSRY.html) sessions without external debugging.
-   *Cancel*
-   Raising of an uncatchable exception and terminating the program with the runtime error `ASSERTION_FAILED`.

-   If the checkpoint statements are activated using the compilation unit, a checkpoint group must still be specified, since a checkpoint statement without the addition `ID` is always active.
-   The validity period of activation settings with active operation modes is limited.
-   The statement [`LOG-POINT`](ABAPLOG-POINT.html) can be used to define a [logpoint](ABENLOGPOINT_GLOSRY.html) if entries are to be written to a log. The statement `ASSERT` should not be used for this purpose.

-   If functional methods are specified after `SUBKEY` and `FIELDS`, code for formatting log entries can be executed only after an assertion is violated.
-   The size of each data object stored in the log with the `FIELDS` addition is restricted by the [profile parameter](ABENPROFILE_PARAMETER_GLOSRY.html)\\ `abap/aab_log_field_size_limit`. The value of the profile parameter specifies the size in bytes. The default value is 1,024. The value 0 means there is no restriction. When a log entry is created, the content of each data object is truncated when this limit is reached, and complete lines are removed from internal tables.
-   The assertion log can be read in transaction `SAAB`.
-   The log to which assertions write is not the system log to which [breakpoints](ABAPBREAK-POINT.html) write during [background processing](ABENBACKROUND_PROCESSING_GLOSRY.html).

DATA gui\_flag TYPE abap\_boolean. \\nCALL FUNCTION 'GUI\_IS\_AVAILABLE' \\n IMPORTING \\n return = gui\_flag. \\n\\ \\nASSERT gui\_flag = abap\_true. \\n\\ \\nCALL SCREEN 100. DATA gui\_flag TYPE abap\_boolean. \\nCALL FUNCTION 'GUI\_IS\_AVAILABLE' \\n IMPORTING \\n return = gui\_flag. \\n\\ \\nASSERT ID demo\_checkpoint\_group \\n CONDITION gui\_flag = abap\_true. \\n\\ \\nCALL SCREEN 100. DATA gui\_flag TYPE abap\_boolean. \\nCALL FUNCTION 'GUI\_IS\_AVAILABLE' \\n IMPORTING \\n return = gui\_flag. \\n\\ \\nASSERT ID demo\_checkpoint\_group \\n SUBKEY sy-uname \\n FIELDS 'Missing GUI' sy-binpt \\n CONDITION gui\_flag = abap\_true. \\n\\ \\nCALL SCREEN 100. DATA gui\_flag TYPE abap\_boolean. \\nCALL FUNCTION 'GUI\_IS\_AVAILABLE' \\n IMPORTING \\n return = gui\_flag. \\n\\ \\nASSERT CONDITION gui\_flag = abap\_true. \\n\\ \\nCALL SCREEN 100. abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_tests.html abencheckpoints.html