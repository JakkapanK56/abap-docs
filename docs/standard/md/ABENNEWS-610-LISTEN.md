---
title: "ABENNEWS-610-LISTEN"
description: |
  ABENNEWS-610-LISTEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-610-LISTEN.htm"
abapFile: "ABENNEWS-610-LISTEN.html"
keywords: ["select", "do", "if", "ABENNEWS", "610", "LISTEN"]
---

[1\. Standard Spool Dialog Box Simplified](#ABAP_MODIFICATION_1@4@)

[2. New Addition `FRAMES OFF` of the Statement `FORMAT`](#ABAP_MODIFICATION_2@4@)

[3\. Extended Options for Configuration of the Spool Dialog Box](#ABAP_MODIFICATION_3@4@)

The spool dialog box has been reduced to the most important spool parameters. Further parameters can be selected on the following *Spool Request Attributes* screen. The user can apply options from this screen to the initial screen by double-clicking a parameter. Further spool options are available for printers with an active list driver on the *Printed Page* tab.

The addition [`FRAMES OFF`](ABAPFORMAT.html) prevents the minus (-) and vertical bar (|) characters from being transformed to parts of frames, if adjacent. In archiving, this addition also ensures that a line consisting of minus signs is saved unchanged and in ASCII format.

The program `RSPRIPARADMIN` can be used to make spool settings that apply to all users.

abenabap.html abennews.html abennews-6.html abennews-610.html