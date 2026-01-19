---
title: "ABENCDS_SERIES_GENERATORS"
description: |
  ABENCDS_SERIES_GENERATORS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_SERIES_GENERATORS.htm"
abapFile: "ABENCDS_SERIES_GENERATORS.html"
keywords: ["select", "if", "class", "data", "types", "ABENCDS", "SERIES", "GENERATORS"]
---

Series generators are a set of [CDS system table functions](ABENCDS_SYSTEM_TABFUNC_GLOSRY.html) that create a series table. This table contains a series of numbers, dates, times, or time stamps.

In ABAP SQL, usage of an series generator enforces [strict mode from ABAP release 7.84](ABENABAP_SQL_STRICTMODE_784.html).

All series generators have the following mandatory parameters:

The generated result tables have the following fields:

The CDS table function `SERIES_GENERATE_DATE` creates a table with a series of dates. The following types are used:

The following source code demonstrates the creation of a series of dates using the CDS system entity `SERIES_GENERATE_DATE`.

The following CDS view entity demonstrates the creation of a series of dates using the CDS system entity `SERIES_GENERATE_DATE`.

The class `CL_DEMO_CDS_SERIES_GNRTR_DATE` accesses the CDS view entity with a simple `SELECT *` statement and generates a screen output of the result.

The CDS system entity `SERIES_GENERATE_INTEGER` creates a table with a series of numbers. The following types are used:

The following source code demonstrates the creation of a series of numbers using the CDS system entity `SERIES_GENERATE_INTEGER`.

The following CDS view entity demonstrates the creation of a series of numbers using the CDS system entity `SERIES_GENERATE_INTEGER`.

The class `CL_DEMO_CDS_SERIES_GENERATOR` accesses the CDS view entity with a simple `SELECT *` statement and generates a screen output of the result.

The CDS system entity `SERIES_GENERATE_TIME` creates a table with a series of times. The following types are used:

The following source code demonstrates the creation of a series of times using the CDS system entity `SERIES_GENERATE_TIME`.

The following CDS view entity demonstrates the creation of a series of times using the CDS system entity `SERIES_GENERATE_TIME`.

The class `CL_DEMO_CDS_SERIES_GNRTR_TIME` accesses the CDS view entity with a simple `SELECT *` statement and generates a screen output of the result.

The CDS table function `SERIES_GENERATE_TIMESTAMP` creates a table with a series of [UTC time stamps](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html). The following types are used:

The following source code demonstrates the creation of a series of time stamps using the CDS system entity `SERIES_GENERATE_TIMESTAMP`.

The following CDS view entity demonstrates the creation of a series of UTC time stamps using the CDS system entity `SERIES_GENERATE_TIMESTAMP`.

The class `CL_DEMO_CDS_SERIES_GNRTR_TS` accesses the CDS view entity with a simple `SELECT *` statement and generates a screen output of the result.

`CX_SY_OPEN_SQL_DB`

-   Parameters:

-   `step`: [`INT4`](ABENDDIC_BUILTIN_TYPES.html)
-   `from_value`: [`DATN`](ABENDDIC_BUILTIN_TYPES.html)
-   `to_value`: [`DATN`](ABENDDIC_BUILTIN_TYPES.html)

-   The table is of type `SERIES_GENERATE_DATE` and has the following fields:

-   `generated_period_start`: [`DATN`](ABENDDIC_BUILTIN_TYPES.html)
-   `generated_period_end`: [`DATN`](ABENDDIC_BUILTIN_TYPES.html)
-   `element_number`: [`INT8`](ABENDDIC_BUILTIN_TYPES.html)
-   `fraction_of_min_max_range`: [`FLTP`](ABENDDIC_BUILTIN_TYPES.html)

-   Parameters:

-   `step`: [`INT4`](ABENDDIC_BUILTIN_TYPES.html)
-   `from_value`: [`INT4`](ABENDDIC_BUILTIN_TYPES.html)
-   `to_value`: [`INT4`](ABENDDIC_BUILTIN_TYPES.html)

-   The table is of type `SERIES_GENERATE_INTEGER` and has the following fields:

-   `generated_period_start`:[`INT4`](ABENDDIC_BUILTIN_TYPES.html)
-   `generated_period_end`: [`INT4`](ABENDDIC_BUILTIN_TYPES.html)
-   `element_number`: [`INT8`](ABENDDIC_BUILTIN_TYPES.html)
-   `fraction_of_min_max_range`: [`FLTP`](ABENDDIC_BUILTIN_TYPES.html)

-   Parameters:

-   `step`: [`INT4`](ABENDDIC_BUILTIN_TYPES.html)
-   `from_value`: [`TIMN`](ABENDDIC_BUILTIN_TYPES.html)
-   `to_value`: [`TIMN`](ABENDDIC_BUILTIN_TYPES.html)

-   The table is of type `SERIES_GENERATE_TIME` and has the following fields:

-   `generated_period_start`: [`TIMN`](ABENDDIC_BUILTIN_TYPES.html)
-   `generated_period_end`: [`TIMN`](ABENDDIC_BUILTIN_TYPES.html)
-   `element_number`: [`INT8`](ABENDDIC_BUILTIN_TYPES.html)
-   `fraction_of_min_max_range`: [`FLTP`](ABENDDIC_BUILTIN_TYPES.html)

-   Parameters:

-   `step`: [`INT4`](ABENDDIC_BUILTIN_TYPES.html)
-   `from_value`: [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html)
-   `to_value`: [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html)

-   The table is of type `SERIES_GENERATE_TIMESTAMP` and has the following fields:

-   `generated_period_start`: [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html)
-   `generated_period_end`: [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html)
-   `element_number`: [`INT8`](ABENDDIC_BUILTIN_TYPES.html)
-   `fraction_of_min_max_range`: [`FLTP`](ABENDDIC_BUILTIN_TYPES.html)

-   *Cause:* Increment value must be a positive value.
    *Runtime error:*\\ `DBSQL_SQL_ERROR`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(current\_date) = cl\_demo\_date\_time=>get\_user\_date( ). \\nFINAL(one\_year\_later) = current\_date + 365. \\n\\ \\nSELECT \* FROM series\_generate\_date( step = 30, \\n from\_value = @current\_date, \\n to\_value = @one\_year\_later ) \\n ORDER BY element\_number \\n INTO TABLE @FINAL(date\_series\_gen). \\n\\ \\nout->write( date\_series\_gen ). \\n\\ \\nout->display( ). @EndUserText.label: 'CDS view entity, generate date'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_SERIES\_GENERATOR\_DATE \\n as select from series\_generate\_date(\\n step: 30, \\n from\_value: abap.datn'20200101', \\n to\_value: abap.datn'20220102')\\n \\{\\n generated\_period\_start,\\n generated\_period\_end,\\n element\_number,\\n fraction\_of\_min\_max\_range \\n\\}\\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* FROM series\_generate\_integer( step = 14, \\n from\_value = 1, \\n to\_value = 100 ) \\n ORDER BY element\_number \\n INTO TABLE @FINAL(integer\_series\_gen). \\n\\ \\nout->write( integer\_series\_gen ). \\n\\ \\nout->display( ). @EndUserText.label: 'CDS view entity, generate integer'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_SERIES\_GENERATOR \\n as select from series\_generate\_integer( \\n step : 14, from\_value : 1, to\_value: 100) \\n \\{\\n generated\_period\_start,\\n generated\_period\_end,\\n element\_number,\\n fraction\_of\_min\_max\_range \\n\\}\\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(time) = cl\_demo\_date\_time=>get\_user\_time( ). \\nFINAL(seconds\_added) = time + 20. \\n\\ \\nSELECT \* FROM series\_generate\_time( step = 2, \\n from\_value = @time, \\n to\_value = @seconds\_added ) \\n ORDER BY element\_number \\n INTO TABLE @FINAL(time\_series\_gen). \\n\\ \\nout->write( time\_series\_gen ). \\n\\ \\nout->display( ). @EndUserText.label: 'CDS view entity, generate time'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_SERIES\_GENERATOR\_TIME \\n as select from series\_generate\_time(\\n step: 2, \\n from\_value: abap.timn'131002', \\n to\_value: abap.timn'230102' )\\n \\{\\n generated\_period\_start,\\n generated\_period\_end,\\n element\_number,\\n fraction\_of\_min\_max\_range \\n\\}\\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(ts\_from) = utclong\_current( ). \\nFINAL(ts\_to) = utclong\_add( val = ts\_from seconds = 10 ). \\n\\ \\nSELECT \* FROM series\_generate\_timestamp( step = 2, \\n from\_value = @ts\_from, \\n to\_value = @ts\_to ) \\n ORDER BY element\_number \\n INTO TABLE @FINAL(timestamp\_series\_gen). \\n\\ \\nout->write( timestamp\_series\_gen ). \\n\\ \\nout->display( ). @EndUserText.label: 'CDS view entity, generate time stamp'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_SERIES\_GENERATOR\_TS\\n as select from series\_generate\_timestamp(\\n step : 2,\\n from\_value : abap.utcl'2020-07-20 12:23:01.1234567',\\n to\_value: abap.utcl'2020-07-20 12:23:11.1234567' )\\n \\{\\n generated\_period\_start,\\n generated\_period\_end,\\n element\_number,\\n fraction\_of\_min\_max\_range\\n\\}\\n **Parameter** **Details**\\ `step` Number that defines the increment value for the series to be generated, for example, numbers, seconds or days depending on the table function used. \\
\\
`step` is of type [`INT4`](ABENDDIC_BUILTIN_TYPES.html). It must be greater than 0. If `step` is greater than the difference of the parameters `to_value` and `from_value`, the result is an initial table. `from_value` Start value of the series. The type depends on the series generator used. `to_value` Final value of the series. The value is not included as value in the `generated_period_end` field in the generated table since the series ends with the step before the `to_value` is reached. The data type of `to_value` depends on the table function used. **Field** **Details**\\ `generated_period_start` Start value of a generated period of the series. The value of `generated_period_end` becomes the new value for `generated_period_start` of the next period. `generated_period_end` Final value of a generated period of the series. The defined parameter `to_value` is not included in the table. `element_number` Number of the period. It is consecutively numbered, starting with 1, in integer steps. `fraction_of_min_max_range` The calculated value of ( `generated_period_end` - `generated_period_start` ) / ( `to_value` - `from_value` ). abenabap.html abencds.html abencds\_system\_entities.html abencds\_system\_table\_functions.html