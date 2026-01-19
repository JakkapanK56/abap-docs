---
title: "ABENCDS_DATE_TIME_FUNCTIONS_V1"
description: |
  ABENCDS_DATE_TIME_FUNCTIONS_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_DATE_TIME_FUNCTIONS_V1.htm"
abapFile: "ABENCDS_DATE_TIME_FUNCTIONS_V1.html"
keywords: ["select", "ABENCDS", "DATE", "TIME", "FUNCTIONS"]
---

[Date Functions and Time Functions](ABENDDIC_DATE_TIME_FUNCTIONS.html) in a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html):

-   [Date Functions](ABENCDS_DATE_FUNCTIONS_V1.html)
-   [Time Functions](ABENCDS_TIME_FUNCTIONS_V1.html)
-   [Time Stamp Functions](ABENCDS_TIMESTAMP_FUNCTIONS_V1.html)
-   [Time Zone Functions](ABENCDS_TIMEZONE_FUNCTIONS_V1.html)
-   [Date/Time Conversions](ABENCDS_DATE_TIME_CONVERSIONS_V1.html)

-   The session variable [`$session.system_date`](ABENCDS_SESSION_VARIABLE_V1.html) is used in a CDS view to provide direct access to the current system date.
-   There is not yet a session variable for the current system time and a CDS view can be given an appropriate [input parameter](ABENCDS_PARAMETER_LIST_V1.html) instead. The special annotation [`@Environment.systemField`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html) makes it possible to pass the value of the [ABAP system field](ABENSYSTEM_FIELD_GLOSRY.html)\\ `sy-uzeit` to a parameter of this type.

abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_expressions\_v1.html abencds\_builtin\_functions\_v1.html abencds\_special\_functions\_v1.html