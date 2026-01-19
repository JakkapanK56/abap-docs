---
title: "ABENNEWS-46C-SE30"
description: |
  ABENNEWS-46C-SE30 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-46C-SE30.htm"
abapFile: "ABENNEWS-46C-SE30.html"
keywords: ["if", "method", "class", "data", "ABENNEWS", "46C", "SE30"]
---

In ABAP release 4.6C, the runtime analysis transaction was enhanced to include the following functions:

[1\. Bar Color on the Evaluation Overview Screen](#ABAP_MODIFICATION_1@4@)

[2\. Object-Centered Hit Lists](#ABAP_MODIFICATION_2@4@)

[3\. Measurement Restrictions](#ABAP_MODIFICATION_3@4@)

[4\. Sets of Statistics](#ABAP_MODIFICATION_4@4@)

When ABAP statements or system statements are analyzed, the system shows a green bar to indicate that 50 percent of the total execution time was required for the execution of the relevant statements. A red bar indicates that more than 50 percent of the total execution time was used. When database operations are analyzed, a red bar indicates that 25 percent of the total execution time has been used.

For ABAP programs that work with classes and instances, the appropriate hit lists are now created. It is also possible filter the display of methods and events belonging to this class or instance.

From now on, the system uses the variant of a measurement restriction that was created or edited most recently. The default variant is set to **None** in [AS ABAP](ABENAS_ABAP_GLOSRY.html). In all other systems, it is set to **Full**.

Sets of statistics are no longer produced when performance data is aggregated.

abenabap.html abennews.html abennews-4.html abennews-46c.html