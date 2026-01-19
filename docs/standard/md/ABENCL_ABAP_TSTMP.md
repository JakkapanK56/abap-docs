---
title: "ABENCL_ABAP_TSTMP"
description: |
  ABENCL_ABAP_TSTMP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCL_ABAP_TSTMP.htm"
abapFile: "ABENCL_ABAP_TSTMP.html"
keywords: ["do", "if", "method", "class", "data", "ABENCL", "ABAP", "TSTMP"]
---

The class `CL_ABAP_TSTMP` is used to calculate and convert UTC [time stamps in packed numbers](ABENTIME_STAMPS_PACKED.html). Important methods include:

Creation of a one hour earlier UTC time stamp by subtracting 3600 seconds.

Conversion of a time stamp field to time stamps in packed numbers. In formatting using string templates, the formatting option [`TIMESTAMP`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) must be specified for the packed numbers to define a representation as time stamps.

-   The methods `ADD`, `SUBTRACTSECS`, `ADD_TO_SHORT`, `ADD_TO_SHORT_TRUNC`, `SUBTRACTSECS_TO_SHORT` and `SUBTRACTSECS_TO_SHORT_TRUNC` add or subtract seconds from UTC time stamps and avoid invalid values. `ADD_TO_SHORT` and `ADD_TO_SHORT_TRUNC` round commercially. `SUBTRACTSECS_TO_SHORT` and `SUBTRACTSECS_TO_SHORT_TRUNC` round down.
-   The method `TD_SUBTRACT` calculates the difference between two UTC time stamps.
-   The methods `MOVE_TO_SHORT` and `MOVE_TO_SHORT_TRUNC` convert the long form of UTC time stamps to the short form, avoiding invalid values. `MOVE_TO_SHORT` rounds commercially. `MOVE_TO_SHORT_TRUNC` rounds down.
-   The methods `MOVE` and `MOVE_TRUNC` convert the long form of UTC time stamps to the short form and vice versa, avoiding invalid values. `MOVE` rounds commercially. `MOVE_TRUNC` rounds down.
-   The method `NORMALIZE` normalizes UTC time stamps. Invalid time stamps are converted into valid UTC time stamps according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html).
-   The methods `UTCLONG2TSTMP`, `UTCLONG2TSTMP_SHORT`, and `TSTMP2UTCLONG` convert the content of time stamp fields to representation in packed numbers and vice versa.

-   Conversions between time stamp fields and packed numbers are necessary if time stamp fields are used in new programs, but existing repositories or interfaces need to be accessed at the same time.
-   The methods `MOVE`, `MOVE_TO_SHORT`, `ADD_TO_SHORT` and `SUBTRACTSECS_TO_SHORT` can be used for converting long time stamps to short time stamps. These methods avoid invalid values but round the fractional seconds of long time stamps commercially. That might be unexpected. In order to preserve the integer part of a long time stamp it must be rounded down. For that the methods `MOVE_TRUNC`, `MOVE_TO_SHORT_TRUNC`, `ADD_TO_SHORT_TRUNC` and `SUBTRACTSECS_TO_SHORT_TRUNC` can be used. See also executable example [Rounding Time Stamps in Packed Numbers](ABENROUND_TIME_STAMP_ABEXA.html).

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nGET TIME STAMP FIELD FINAL(ts1). \\n\\ \\nFINAL(ts2) = cl\_abap\_tstmp=>subtractsecs( tstmp = ts1 \\n secs = 3600 ). \\n\\ \\nout->write( |\\{ ts1 TIMESTAMP = ISO \\n \\}\\\\n\\{ ts2 TIMESTAMP = ISO \\}| ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(ts) = utclong\_current( ). \\n\\ \\nout->write( \\n |\\{ ts \\}\\\\n\\{ \\n cl\_abap\_tstmp=>utclong2tstmp( ts ) TIMESTAMP = ISO \\}\\\\n\\{ \\n cl\_abap\_tstmp=>utclong2tstmp\_short( ts ) TIMESTAMP = ISO \\}| ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html abentime\_stamps.html abentime\_stamps\_packed.html