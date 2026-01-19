---
title: "ABENNEWS-45-SE30"
description: |
  ABENNEWS-45-SE30 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-45-SE30.htm"
abapFile: "ABENNEWS-45-SE30.html"
keywords: ["if", "data", "ABENNEWS", "SE30"]
---

[1\. Data Compression](#ABAP_MODIFICATION_1@4@)

[2\. Setting Measurement Accuracy](#ABAP_MODIFICATION_2@4@)

[3\. Information About the Measurement Interval](#ABAP_MODIFICATION_3@4@)

[4\. Statistics](#ABAP_MODIFICATION_4@4@)

[5\. Short Measurement Description](#ABAP_MODIFICATION_5@4@)

[6\. Interface Changes](#ABAP_MODIFICATION_6@4@)

During measurement, the compressed data is written to a file in blocks. It is thus possible to save multiple comprehensive measurements. During the evaluation the compressed data is read and then decompressed.

Before the measurement, the [`measurement accuracy`](ABAPSET_RUN_TIME_CLOCK_RESOLUTION.html) can be set between high and low.

In the initial screen, choose Utilities\\ *\->*\\ Measurement interval... to see the size of the maximum [`measurement interval`](ABAPGET_RUN_TIME.html) of the machine in question depending on the measurement accuracy set.

When the statistics are called up, the following information is provided about the loaded programs:

The statistics can be sorted by a column by clicking the title of the column once.

An overview of the procedures can be displayed by clicking the number of defined or used procedures once. In this overview, click a procedure to go to the position of the procedure call or definition.

To distinguish between measurements of the same object, a short description can be specified for each measurement.

The following changes were made:

-   Load size in bytes
-   Size of the global data in bytes
-   Number of [procedures](ABENPROCEDURE_GLOSRY.html) defined or used

-   Initial screen: Settings\\ *\->*\\ Measurement Accuracy...(see [`SET RUN TIME CLOCK RESOLUTION HIGH/LOW`](ABAPSET_RUN_TIME_CLOCK_RESOLUTION.html)).
-   Initial screen: Utilities\\ *\->*\\ Measurement Interval ...
-   Overview screen: Goto\\ *\->*\\ Statistics

abenabap.html abennews.html abennews-4.html abennews-40-other-45a.html