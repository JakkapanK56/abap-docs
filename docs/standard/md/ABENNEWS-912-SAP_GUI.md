---
title: "ABENNEWS-912-SAP_GUI"
description: |
  ABENNEWS-912-SAP_GUI - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-912-SAP_GUI.htm"
abapFile: "ABENNEWS-912-SAP_GUI.html"
keywords: ["delete", "if", "data", "internal-table", "ABENNEWS", "912", "SAP", "GUI"]
---

[1. `EXCLUDING` Addition of `SET PF-STATUS`](#ABAP_MODIFICATION_1@4@)

[2\. Handling of the *!* Character in Input Fields](#ABAP_MODIFICATION_2@4@)

In order to prevent memory bottlenecks when handling the GUI status, duplicate entries are now removed from an internal table specified after the addition [`EXCLUDING`](ABAPSET_PF-STATUS_DYNPRO.html) of the statement [`SET PF-STATUS`](ABAPSET_PF-STATUS_DYNPRO.html).

The behavior of the character *!* in the initial position of an input field on a [dynpro](ABENDYNPRO_GLOSRY.html) screen can be controlled by the new profile parameter `dynp/disable_input_reset`:

-   The value *TRUE* disables the former standard behavior, where all characters in the field are deleted before the data transport.
-   The value *FALSE* (default) preserves that behavior.

abenabap.html abennews.html abennews-91.html abennews-912.html