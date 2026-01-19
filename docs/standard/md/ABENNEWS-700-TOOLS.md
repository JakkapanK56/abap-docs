---
title: "ABENNEWS-700-TOOLS"
description: |
  ABENNEWS-700-TOOLS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-700-TOOLS.htm"
abapFile: "ABENNEWS-700-TOOLS.html"
keywords: ["insert", "update", "delete", "do", "if", "class", "data", "internal-table", "ABENNEWS", "700", "TOOLS"]
---

[1\. ABAP Debugger](#ABAP_MODIFICATION_1@4@)

[2\. Memory Inspector](#ABAP_MODIFICATION_2@4@)

[3\. ABAP Unit](#ABAP_MODIFICATION_3@4@)

[4\. Logpoints](#ABAP_MODIFICATION_4@4@)

The new two-process debugger has been further developed as follows:

From ABAP release 7.0, the default setting is the use of the two-process debugger. This setting can be changed in ABAP Editor by choosing *Utilities -> Settings -> ABAP Editor -> Debugging*.

The following improvements were made:

The following improvements were made:

The new [`LOG-POINT`](ABAPLOG-POINT.html) statement enables unconditional log entries to the log also used by [`ASSERT`](ABAPASSERT.html). Logpoints are [activatable checkpoints](ABENACTIVATABLE_CHECKPOINT_GLOSRY.html), whose activation must be controlled using [checkpoint groups](ABENCHECKPOINT_GROUP_GLOSRY.html) or [activation variants](ABENACTIVATION_VARIANT_GLOSRY.html). Logpoints replace the incorrect usage of `ASSERT` for logging-only purposes.

-   **Alignment to the functions of the previous debugger:**
-   Lines can be inserted and deleted in the display of internal tables.
    Watchpoints can be created.
    External programs (RFC, update function modules, `BSP`, ...) can be debugged.
    Integration of memory analysis and Memory Inspector.
-   **New tools:**
-   New Editor Control used for source code, which displays the content of variables as a tooltip. \\nDisplay of differences between complex data objects. \\nDisplay of data object graphs. \\nDisplay of global data objects of all loaded programs. \\nStructured display of the current screens and container controls.
-   **Enhancements:**
-   Variable fast display split into global and local data. Display of current parameter interface with local data. \\nComplete screen and ABAP stack in the stack display. \\nPausing of a running process at a particular point by setting a session breakpoint in a parallel [ABAP session](ABENABAP_SESSION_GLOSRY.html).

-   Memory Inspector can now be called in every transaction by choosing *System -> Utilities -> Memory Analysis -> Compare Memory Snapshots*.
-   Memory snapshots can now be created in every transaction by choosing *System -> Utilities -> Memory Analysis -> Create Memory Snapshot.*

-   The [pseudo comments](ABENPSEUDO_COMMENT_GLOSRY.html)
-   `"#AU Risk_Level ...`\\
    `"#AU Duration ...`\\
    can be used to define test properties when creating [test classes](ABENTEST_CLASS_GLOSRY.html) using the statement [`CLASS ... FOR TESTING`](ABAPCLASS_OPTIONS.html).
-   To enable the reuse of extensive test preparations, global [test classes](ABENTEST_CLASS_GLOSRY.html) can be defined in [Class Builder](ABENCLASS_BUILDER_GLOSRY.html). Global test classes should always be abstract, can only be used in local test classes, and, like these, are not generated in production systems.

abenabap.html abennews.html abennews-70\_ehps.html abennews-70.html