---
title: "ABENNEWS-46-SE30"
description: |
  ABENNEWS-46-SE30 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-46-SE30.htm"
abapFile: "ABENNEWS-46-SE30.html"
keywords: ["delete", "loop", "do", "if", "method", "class", "data", "internal-table", "ABENNEWS", "SE30"]
---

[1\. Measurement in Parallel Session](#ABAP_MODIFICATION_1@4@)

[2\. Measurement Restrictions](#ABAP_MODIFICATION_2@4@)

[3\. Aggregation](#ABAP_MODIFICATION_3@4@)

[4\. Measurement Variants](#ABAP_MODIFICATION_4@4@)

[5\. Unique Identification of Internal Tables](#ABAP_MODIFICATION_5@4@)

[6\. Measurement for Particular Statements](#ABAP_MODIFICATION_6@4@)

[7\. Hit Lists](#ABAP_MODIFICATION_7@4@)

[8\. Use of New Tools](#ABAP_MODIFICATION_8@4@)

[9\. Changes to the User Interface](#ABAP_MODIFICATION_9@4@)

Runtime analysis can be activated for ten simultaneous [ABAP sessions](ABENABAP_SESSION_GLOSRY.html) (work processes). This makes it possible to switch to a long-running job from outside. It is possible to switch in and out of the work processes that are measured using a screen similar to transaction `SM50`.

It is possible to restrict the duration of a measurement, the size of the performance data file, and also the objects that are measured.

Aggregations can be full aggregations and aggregations by call point. In full aggregation, all performance data for a particular type of event is summarized in a single performance record. In aggregations by call point, all performance data from a particular event onwards is summarized.

This makes it possible to use aggregation as the first step in a runtime analysis to identify the most time-consuming calls. The second, more detailed analysis can then be restricted to these objects.

Certain information does not exist when aggregations are used: There is no hierarchy. Furthermore, it is not possible to branch to the call point from a full aggregation. The effect of the display filter is that the events are displayed without their net times being recalculated.

The default variant is stored under the name `DEFAULT`. If this variant is changed, the changed data is assigned temporarily under the name `USER_DEFAULT`. If the same restrictions are used frequently, it is best to create a variant. A variant exists only in the system in which it is created, and it can be used, changed, or deleted by any user.

The name of an internal table is the internally unique `ID`. This makes it possible to distinguish between identically named internal tables from different [procedures](ABENPROCEDURE_GLOSRY.html). The actual name of the internal table can be identified by navigating to the editor.

The total runtime of all loop passes is determined in `LOOP AT itab`. `CREATE OBJECT` is only measured if the method `CONSTRUCTOR` is overwritten.

In the hit list of the database tables, the buffering is empty if buffering is switched off or not allowed. As well as the database hit list, there are object-based hit lists for classes, instances, and internal tables. For classes and instances, there is a further division between methods and events.

The various hit lists are created using `ABAP List Viewer`. All regular ALV functions are available within the hit list, although full navigation from the list is not possible.

`ABAP List Viewer` is also used to display the performance statistics. They are calculated using method calls, and the load time and net runtime of the program are added to them.

The user interface of the runtime analysis tool has been fully revised. The new features are represented by four main areas, which can be branched to from the initial screen, namely:

-   The duration of the measurement is specified in minutes. The measurement ends after this time. The maximum duration is approximately 72 minutes.
-   The size of the performance data file is specified in kilobytes. Once this size is reached, the measurement ends.
-   It is possible to restrict the measurement to specific objects:

-   Programs and function pools
-   Global and local classes
-   Methods, subroutines, or function modules
-   Particular statements

-   Executing the runtime analysis
-   Switching on an ABAP session
-   Setting the measurement restrictions
-   Analyzing the measurement results

abenabap.html abennews.html abennews-4.html abennews-46a.html