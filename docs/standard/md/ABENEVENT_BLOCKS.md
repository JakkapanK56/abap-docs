---
title: "ABENEVENT_BLOCKS"
description: |
  ABENEVENT_BLOCKS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENEVENT_BLOCKS.htm"
abapFile: "ABENEVENT_BLOCKS.html"
keywords: ["select", "if", "method", "class", "data", "types", "ABENEVENT", "BLOCKS"]
---

Event blocks are used to handle events in the ABAP runtime framework. They are introduced by an event key word and ended by the next processing block. Since there is no closing statement, it is recommended that the end of an event block is indicated with a comment line.

Within an event block, no local data types or data objects can be declared. All declarative statements in event blocks are part of the global data declarations of the ABAP program, and are visible in all subsequent processing blocks. An event block works with the global data types and data objects of the [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html), and therefore should not contain any separate declarations. **Exception:** The event blocks `AT SELECTION-SCREEN ...` and `GET ...`, which are implemented internally as procedures and can contain local data.

For reasons of data encapsulation, it is recommended that only very few functions are implemented in event blocks, and to call methods instead.

The following are the possible events:

[No implementations in dialog modules and event blocks](ABENDIAL_MOD_EVENT_BLOCK_GUIDL.html)

-   [Program constructor event](ABENPROGRAM_CONSTRUCTOR.html)
-   This event occurs in all [program types](ABENPROGRAM_TYPE_GLOSRY.html), except for class pools and interface pools.
-   [Reporting events](ABENABAP_PROCESSING_BLOCKS.html)
-   These events only occur in [executable programs](ABENEXECUTABLE_PROGRAM_GLOSRY.html).
-   [Selection screen and list events](ABENABAP_SCREEN_EVENTS.html) occur during [selection screen processing](ABENEXECUTABLE_PROGRAM_GLOSRY.html) or [list processing](ABENLIST_PROCESSING_GLOSRY.html).

-   At the end of each event block execution, the statement [`NEW-LINE`](ABAPNEW-LINE.html) is executed implicitly.
-   With the exception of `AT SELECTION-SCREEN ...` and `GET ...`, event blocks can be specified multiple times in a program. The event block [`START-OF-SELECTION`](ABAPSTART-OF-SELECTION.html) can also implicitly exist more than once. When an event occurs, all associated event blocks are executed in the order of their occurrence. Event blocks that are explicitly specified multiple times produce a warning from the extended program check.

abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_language\_modularization.html