---
title: "ABAPLOG-POINT"
description: |
  ABAPLOG-POINT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPLOG-POINT.htm"
abapFile: "ABAPLOG-POINT.html"
keywords: ["if", "try", "method", "data", "internal-table", "ABAPLOG", "POINT"]
---

[Short Reference](ABAPLOG-POINT_SHORTREF.html)

`LOG-POINT ID group`\\ 
          `[SUBKEY sub]`\\ 
          `[FIELDS val1 val2 ...].`

[1. `... ID group`](#ABAP_ADDITION_1@3@)

[2. `... SUBKEY sub`](#ABAP_ADDITION_2@3@)

[3. `... FIELDS val1 val2 ...`](#ABAP_ADDITION_3@3@)

This statement defines a static [logpoint](ABENLOGPOINT_GLOSRY.html) whose activation is controlled by the addition `ID`.

Once the program reaches an active logpoint, an entry is created in the log that is also used by the statement [`ASSERT`](ABAPASSERT.html) and the program execution continues with the statement after `LOG-POINT`. During this process, any existing entry of the same `LOG-POINT` statement is overwritten by default. Each time an entry is written, a counter for the entry is increased. The log can be evaluated using transaction `SAAB`.

No log entry is written for an inactive logpoint and the program execution continues with the statement after `LOG-POINT`.

The addition `ID` controls the activation of the logpoint from outside the program using a [checkpoint group](ABENCHECKPOINT_GROUP_GLOSRY.html)\\ `group` or an [activation variant](ABENACTIVATION_VARIANT_GLOSRY.html). The same rules apply when specifying the checkpoint group as to the statement [`ASSERT`](ABAPASSERT.html). The possible operation modes for logpoints are *inactive* and *logging*.

If `SUBKEY` is specified, the content of `sub` is stored in the log as a subkey. Existing log entries of the same `LOG-POINT` statement are only overwritten if the subkeys have the same content. If `SUBKEY` is not specified, the subkey is initial.

`sub` is a [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html) of which the first 200 characters are evaluated. An expression or function specified here is executed only if the logpoint is active.

After the addition `FIELDS`, a list of values `val1 val2 ...`, except for reference variables, can be specified that are included in the log.

`val1 val2 ...` are [functional operand positions](ABENFUNCTIONAL_POSITION_GLOSRY.html) in which data objects or functional methods can be specified. The methods are executed only if the logpoint is active.

The size of each data object stored in the log with the `FIELDS` addition is restricted by the [profile parameter](ABENPROFILE_PARAMETER_GLOSRY.html)\\ `abap/aab_log_field_size_limit`. The value of the profile parameter specifies the size in bytes. The default value is 1,024. The value 0 means there is no restriction. When a log entry is created, the content of each data object is truncated when this limit is reached, and complete lines are removed from internal tables.

Static logpoint with all possible additions.

-   In addition to the static logpoints defined using `LOG-POINT`, dynamic logpoints can be defined using the transaction `SDLP` or in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html).
-   Logpoints are only intended to be used for test purposes using transaction `SAAB`. There is no API for importing the logged data, which means that logpoints are not suitable for general logging purposes.

LOG-POINT ID demo\_checkpoint\_group \\n SUBKEY sy-uname \\n FIELDS sy-batch sy-cprog. abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_tests.html abencheckpoints.html