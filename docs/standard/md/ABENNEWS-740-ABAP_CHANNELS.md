---
title: "ABENNEWS-740-ABAP_CHANNELS"
description: |
  ABENNEWS-740-ABAP_CHANNELS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740-ABAP_CHANNELS.htm"
abapFile: "ABENNEWS-740-ABAP_CHANNELS.html"
keywords: ["if", "ABENNEWS", "740", "ABAP", "CHANNELS"]
---

In ABAP release 7.40, two new communication channels were introduced, which can also be connected to each other. ABAP push channels can be used only from [SP05](ABENNEWS-740_SP05-ABAP_CHANNELS.html).

[1\. ABAP Messaging Channels](#ABAP_MODIFICATION_1@4@)

[2. New Variants of `WAIT UNTIL`](#ABAP_MODIFICATION_2@4@)

From ABAP release 7.40, SP02, [ABAP Messaging Channels (AMC)](ABENAMC.html) enable a new type of communication between AS ABAP programs, which goes beyond the limits of an AS instance.

The new variant [`WAIT FOR MESSAGING CHANNELS`](ABAPWAIT_AMC.html) waits for AMC messages in [ABAP Messaging Channels (AMC)](ABENAMC.html). A further new variant, [`WAIT FOR ASYNCHRONOUS TASKS`](ABAPWAIT_ARFC.html), waits for the callback routines of an [aRFC](ABENARFC_GLOSRY.html) and replaces the previous statement [`WAIT UNTIL`](ABAPWAIT_OBSOLETE.html) (which now only exists in an obsolete short form).

abenabap.html abennews.html abennews-740.html abennews-740\_sp02.html