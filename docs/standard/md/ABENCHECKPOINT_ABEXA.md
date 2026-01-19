---
title: "ABENCHECKPOINT_ABEXA"
description: |
  ABENCHECKPOINT_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCHECKPOINT_ABEXA.htm"
abapFile: "ABENCHECKPOINT_ABEXA.html"
keywords: ["select", "if", "case", "try", "method", "class", "ABENCHECKPOINT", "ABEXA"]
---

This example demonstrates the various [checkpoints](ABENCHECKPOINT_GLOSRY.html) and their binding to a [checkpoint group](ABENCHECKPOINT_GROUP_GLOSRY.html).

The example includes the following:

All of these are linked with the [checkpoint group](ABENCHECKPOINT_GROUP_GLOSRY.html)\\ `DEMO_CHECKPOINT_GROUP`.

The *Activation* function in transaction `SAAB` can be used to individually set the activation functions of this checkpoint group for the three checkpoints.

For example, if the following settings are made:

and the default values for the parameters are applied,

If the activation settings are all *inactive*, all checkpoints are ignored.

-   A [logpoint](ABENLOGPOINT_GLOSRY.html)
-   A [breakpoint](ABENBREAKPOINT_GLOSRY.html)
-   An [assertion](ABENASSERTION_GLOSRY.html)

-   *Break* for breakpoints
-   *Log* for logpoints
-   *Abort* for assertions

-   the statement `LOG-POINT` writes an entry to a log that can be analyzed after the program is executed in transaction `SAAB`,
-   the program stops at the statement `BREAK-POINT` in the ABAP Debugger,
-   an `ASSERTION_FAILED` runtime error occurs for the statement `ASSERT` because `field2` is initial.

REPORT demo\_checkpoints.\\n\\nPARAMETERS: subkey TYPE c LENGTH 30 LOWER CASE DEFAULT sy-uname,\\n field1 TYPE c LENGTH 10 LOWER CASE DEFAULT 'Field1',\\n field2 TYPE i DEFAULT 0.\\n\\nCLASS demo DEFINITION.\\n PUBLIC SECTION.\\n CLASS-METHODS main.\\nENDCLASS.\\n\\nCLASS demo IMPLEMENTATION.\\n METHOD main.\\n\\n LOG-POINT ID demo\_checkpoint\_group\\n SUBKEY subkey\\n FIELDS field1 field2.\\n\\n BREAK-POINT ID demo\_checkpoint\_group.\\n\\n ASSERT ID demo\_checkpoint\_group\\n CONDITION field2 IS NOT INITIAL.\\n\\n ENDMETHOD.\\nENDCLASS.\\n\\nSTART-OF-SELECTION.\\n demo=>main( ).\\n abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_tests.html abencheckpoints.html