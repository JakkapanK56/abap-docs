---
title: "ABENCONTROL_STRUCTURES"
description: |
  ABENCONTROL_STRUCTURES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONTROL_STRUCTURES.htm"
abapFile: "ABENCONTROL_STRUCTURES.html"
keywords: ["select", "loop", "do", "while", "if", "case", "exception-handling", "ABENCONTROL", "STRUCTURES"]
---

The statements in a [processing block](ABENPROCESSING_BLOCK_GLOSRY.html) are organized in control structures. These define statement blocks and control the progress of the program within a processing block. They determine the conditions for processing statement blocks and how often they are run. Control structures can be nested. Statement blocks in control structures can themselves contain control structures.

The following control structures exist:

There are also special control structures for [exception handling](ABENABAP_EXCEPTIONS.html).

One obsolete control structure is [`ON CHANGE OF`](ABAPON.html).

-   **Sequence**
-   A sequence consists of a statement block that is not defined explicitly by control statements. The statements it contains are processed exactly once without conditions. The execution of a sequence can be suspended for a certain time using a [`WAIT`](ABAPWAIT_UP_TO.html) statement.
-   **Branch (selection)**
-   A branch consists of one or more statement blocks that are defined by control statements such as [`IF`](ABAPIF.html) or [`CASE`](ABAPCASE.html), and that are executed depending on conditions.
-   **Loop (iteration)**
-   A loop consists of a statement block that is defined by control statements such as [`DO`](ABAPDO.html) or [`WHILE`](ABAPWHILE.html), and that can be executed multiple times.

abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html