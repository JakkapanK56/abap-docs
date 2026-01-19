---
title: "ABAPAT_PFNN"
description: |
  ABAPAT_PFNN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPAT_PFNN.htm"
abapFile: "ABAPAT_PFNN.html"
keywords: ["select", "ABAPAT", "PFNN"]
---

[Short Reference](ABAPAT_PF_SHORTREF.html)

`AT PFnn.`

Reacts to an obsolete [list event](ABENLIST_EVENT_GLOSRY.html). This obsolete statement defines an event block whose event is raised by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) when a list is displayed. This is provided the screen cursor is on a list line and a function is selected using the function code `PFnn`, where `nn` is a number between 01 and 24. In the [standard list status](ABENSTANDARD_LIST_STATUS_GLOSRY.html), these function codes are assigned to the function keys of the input device.

[`AT USER-COMMAND`](ABAPAT_USER-COMMAND.html) should always be used instead of `AT PFnn` and special function codes should be assigned to the required function keys.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abengui\_obsolete.html abenlists\_obsolete.html abenlist\_event\_obsolete.html