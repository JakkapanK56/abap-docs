---
title: "ABENUTCLONG_CURRENT"
description: |
  ABENUTCLONG_CURRENT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENUTCLONG_CURRENT.htm"
abapFile: "ABENUTCLONG_CURRENT.html"
keywords: ["do", "if", "data", "types", "ABENUTCLONG", "CURRENT"]
---

`... utclong_current( ) ...`

This [built-in function](ABENBUILT_IN_FUNCTIONS.html) creates a [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) from the [system time](ABENSYSTEM_TIME_GLOSRY.html) and the [system date](ABENSYSTEM_DATE_GLOSRY.html) of an AS ABAP in accordance with [POSIX](ABENPOSIX_TIMESTAMP_GLOSRY.html). The return value has the data type [`utclong`](ABENBUILTIN_TYPES_DATE_TIME.html).

The precision of the decimal places of the created time stamp depends on the hardware (processor) of the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html). Resolutions in the one-digit or two-digit microsecond range are realistic.

Creation of a table of UTC time stamps. Unlike the example [`GET TIME STAMP`](ABAPGET_TIME-STAMP.html), the time stamps do not need to be formatted differently in the output to be recognizable as such.

DATA time\_stamps TYPE TABLE OF utclong WITH EMPTY KEY. \\n\\ \\ntime\_stamps = VALUE #( FOR i = 1 UNTIL i > 100 \\n ( utclong\_current( ) ) ). \\n\\ \\ncl\_demo\_output=>display( time\_stamps ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html abentime\_stamps.html abenutclong.html abentimestamp\_functions.html