---
title: "ABENCDS_DATE_TIME_FUNCTIONS_V2"
description: |
  ABENCDS_DATE_TIME_FUNCTIONS_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_DATE_TIME_FUNCTIONS_V2.htm"
abapFile: "ABENCDS_DATE_TIME_FUNCTIONS_V2.html"
keywords: ["select", "ABENCDS", "DATE", "TIME", "FUNCTIONS"]
---

[Date Functions and Time Functions](ABENDDIC_DATE_TIME_FUNCTIONS.html) in a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html):

-   [Date Functions](ABENCDS_DATE_FUNCTIONS_V2.html)
-   [Time Functions](ABENCDS_TIME_FUNCTIONS_V2.html)
-   [Time Stamp Functions](ABENCDS_TIMESTAMP_FUNCTIONS_V2.html)
-   [Time Zone Functions](ABENCDS_TIMEZONE_FUNCTIONS_V2.html)
-   [Date/Time Conversions](ABENCDS_DATE_TIME_CONVERSIONS_V2.html)

-   The session variable [`$session.system_date`](ABENCDS_SESSION_VARIABLE_V2.html) is used in a CDS view entity to provide direct access to the current system date.
-   There is not yet a session variable for the current system time and a CDS view entity can be given an appropriate [input parameter](ABENCDS_PARAMETER_LIST_V2.html) instead. The special annotation [`@Environment.systemField`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html) makes it possible to pass the value of the [ABAP system field](ABENSYSTEM_FIELD_GLOSRY.html)\\ `sy-uzeit` to a parameter of this type.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_expressions\_v2.html abencds\_builtin\_functions\_v2.html abencds\_special\_functions\_v2.html