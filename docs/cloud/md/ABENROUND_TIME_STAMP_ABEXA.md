---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENROUND_TIME_STAMP_ABEXA.htm"
abapFile: "ABENROUND_TIME_STAMP_ABEXA.html"
keywords: ["do", "while", "if", "method", "class", "data", "ABENROUND", "TIME", "STAMP", "ABEXA"]
---

This example demonstrates different rounding behaviors for UTC time stamps stored in packed numbers.

A short packed number UTC time stamp of type `TIMESTAMP`, a long packed number UTC time stamp of type `TIMESTAMPL` and an UTC time stamp in a time stamp field of type `utclong` are created at almost the same point in time.

The example shows the different rounding behaviors when time stamps with fractional seconds are converted to time stamps of type `TIMESTAMP` without fractional seconds:

Since only rounding down a long time stamp stored as a packed number gives the same result as the statement [`GET TIME STAMP`](ABAPGET_TIME-STAMP.html) and if that is the expected behavior, the methods with suffix `_TRUNC` from `CL_ABAP_TSTMP` or the built-in function [`round`](ABENDEC_FLOATING_POINT_FUNCTIONS.html) with an appropriate mode or [`trunc`](ABENNUMERICAL_FUNCTIONS.html) should be used instead of the other methods.

-   Using method `UTCLONG2TSTMP_SHORT` of class `CL_ABAP_TSTMP` to convert a time stamp field rounds down.
-   Using a simple assignment involving the conversion rule [from `p` to `p`](ABENCONVERSION_TYPE_P.html#@@ITOC@@ABENCONVERSION_TYPE_P_1) rounds half up (commercial rounding).
-   Using method `MOVE_TO_SHORT` of class `CL_ABAP_TSTMP` to convert a long time stamp stored as a packed number field rounds half up (commercial rounding).
-   Using method `MOVE_TO_SHORT_TRUNC` of class `CL_ABAP_TSTMP` to convert a long time stamp stored as a packed number field rounds down.
-   Using method `MOVE` of class `CL_ABAP_TSTMP` to convert a long time stamp stored as a packed number field rounds half up (commercial rounding).
-   Using method `MOVE_TRUNC` of class `CL_ABAP_TSTMP` to convert a long time stamp stored as a packed number field rounds down.
-   Using built-in function [`round`](ABENDEC_FLOATING_POINT_FUNCTIONS.html) without specifying `mode` for a long time stamp stored as a packed number field rounds half up (commercial rounding).
-   Using built-in function [`round`](ABENDEC_FLOATING_POINT_FUNCTIONS.html) and specifying the appropriate mode `mode` for a long time stamp stored as a packed number field rounds down.
-   Using built-in function [`trunc`](ABENNUMERICAL_FUNCTIONS.html) for a long time stamp stored as a packed number field rounds down.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_round\_time\_stamp DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_round\_time\_stamp IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA ts\_pack TYPE timestamp. \\n DATA ts\_packlong TYPE timestampl. \\n DATA ts\_utclong TYPE utclong. \\n\\ \\n DATA(frac) = 0. \\n WHILE frac < '0.5'. \\n GET TIME STAMP FIELD ts\_packlong. \\n GET TIME STAMP FIELD ts\_pack. \\n ts\_utclong = utclong\_current( ). \\n\\ \\n DATA utclong\_2\_short TYPE timestamp. \\n utclong\_2\_short = \\n cl\_abap\_tstmp=>utclong2tstmp\_short( ts\_utclong ). \\n\\ \\n DATA assigned\_to\_short TYPE timestamp. \\n assigned\_to\_short = ts\_packlong ##type. \\n\\ \\n DATA moved\_to\_short TYPE timestamp. \\n moved\_to\_short = cl\_abap\_tstmp=>move\_to\_short( ts\_packlong ). \\n\\ \\n DATA moved\_to\_short\_trunc TYPE timestamp. \\n moved\_to\_short\_trunc = cl\_abap\_tstmp=>move\_to\_short\_trunc( \\n ts\_packlong ). \\n\\ \\n DATA moved TYPE timestamp. \\n cl\_abap\_tstmp=>move( EXPORTING tstmp\_src = ts\_packlong \\n IMPORTING tstmp\_tgt = moved ). \\n\\ \\n DATA moved\_trunc TYPE timestamp. \\n cl\_abap\_tstmp=>move\_trunc( EXPORTING tstmp\_src = ts\_packlong \\n IMPORTING tstmp\_tgt = moved\_trunc ). \\n\\ \\n DATA ts\_pack\_round\_half\_up TYPE timestamp. \\n ts\_pack\_round\_half\_up = round( val = ts\_packlong dec = 0 ). \\n\\ \\n DATA ts\_pack\_round\_down TYPE timestamp. \\n ts\_pack\_round\_down = round( val = ts\_packlong dec = 0 \\n mode = cl\_abap\_math=>round\_down ). \\n\\ \\n DATA ts\_pack\_trunc TYPE timestamp. \\n ts\_pack\_trunc = trunc( ts\_packlong ). \\n\\ \\n frac = frac( ts\_packlong ). \\n ENDWHILE. \\n\\ \\n out->write( |Short packed time stamp: \\{ \\n ts\_pack TIMESTAMP = ISO \\}| \\n )->write( |Long packed time stamp: \\{ \\n ts\_packlong TIMESTAMP = ISO \\}| \\n )->write( |UTCLONG time stamp: \\{ \\n ts\_utclong TIMESTAMP = ISO \\}| \\n )->line( \\n )->write( |CL\_ABAP\_TSTMP=>UTCLONG2TSTMP\_SHORT: \\{ \\n utclong\_2\_short TIMESTAMP = ISO \\}| \\n )->write( |Assignment with conversion: \\{ \\n assigned\_to\_short TIMESTAMP = ISO \\}| \\n )->write( |CL\_ABAP\_TSTMP=>MOVE\_TO\_SHORT: \\{ \\n moved\_to\_short TIMESTAMP = ISO \\}| \\n )->write( |CL\_ABAP\_TSTMP=>MOVE\_TO\_SHORT\_TRUNC: \\{ \\n moved\_to\_short\_trunc TIMESTAMP = ISO \\}| \\n )->write( |CL\_ABAP\_TSTMP=>MOVE: \\{ \\n moved TIMESTAMP = ISO \\}| \\n )->write( |CL\_ABAP\_TSTMP=>MOVE\_TRUNC: \\{ \\n moved\_trunc TIMESTAMP = ISO \\}| \\n )->write( |ROUND half up: \\{ \\n ts\_pack\_round\_half\_up TIMESTAMP = ISO \\}| \\n )->write( |ROUND down: \\{ \\n ts\_pack\_round\_down TIMESTAMP = ISO \\}| \\n )->write( |TRUNC: \\{ \\n ts\_pack\_trunc TIMESTAMP = ISO \\}| ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_round\_time\_stamp DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_round\_time\_stamp IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA ts\_pack TYPE timestamp. \\n DATA ts\_packlong TYPE timestampl. \\n DATA ts\_utclong TYPE utclong. \\n\\ \\n DATA(frac) = 0. \\n WHILE frac < '0.5'. \\n GET TIME STAMP FIELD ts\_packlong. \\n GET TIME STAMP FIELD ts\_pack. \\n ts\_utclong = utclong\_current( ). \\n\\ \\n DATA utclong\_2\_short TYPE timestamp. \\n utclong\_2\_short = \\n cl\_abap\_tstmp=>utclong2tstmp\_short( ts\_utclong ). \\n\\ \\n DATA assigned\_to\_short TYPE timestamp. \\n assigned\_to\_short = ts\_packlong ##type. \\n\\ \\n DATA moved\_to\_short TYPE timestamp. \\n moved\_to\_short = cl\_abap\_tstmp=>move\_to\_short( ts\_packlong ). \\n\\ \\n DATA moved\_to\_short\_trunc TYPE timestamp. \\n moved\_to\_short\_trunc = cl\_abap\_tstmp=>move\_to\_short\_trunc( \\n ts\_packlong ). \\n\\ \\n DATA moved TYPE timestamp. \\n cl\_abap\_tstmp=>move( EXPORTING tstmp\_src = ts\_packlong \\n IMPORTING tstmp\_tgt = moved ). \\n\\ \\n DATA moved\_trunc TYPE timestamp. \\n cl\_abap\_tstmp=>move\_trunc( EXPORTING tstmp\_src = ts\_packlong \\n IMPORTING tstmp\_tgt = moved\_trunc ). \\n\\ \\n DATA ts\_pack\_round\_half\_up TYPE timestamp. \\n ts\_pack\_round\_half\_up = round( val = ts\_packlong dec = 0 ). \\n\\ \\n DATA ts\_pack\_round\_down TYPE timestamp. \\n ts\_pack\_round\_down = round( val = ts\_packlong dec = 0 \\n mode = cl\_abap\_math=>round\_down ). \\n\\ \\n DATA ts\_pack\_trunc TYPE timestamp. \\n ts\_pack\_trunc = trunc( ts\_packlong ). \\n\\ \\n frac = frac( ts\_packlong ). \\n ENDWHILE. \\n\\ \\n out->write( |Short packed time stamp: \\{ \\n ts\_pack TIMESTAMP = ISO \\}| \\n )->write( |Long packed time stamp: \\{ \\n ts\_packlong TIMESTAMP = ISO \\}| \\n )->write( |UTCLONG time stamp: \\{ \\n ts\_utclong TIMESTAMP = ISO \\}| \\n )->line( \\n )->write( |CL\_ABAP\_TSTMP=>UTCLONG2TSTMP\_SHORT: \\{ \\n utclong\_2\_short TIMESTAMP = ISO \\}| \\n )->write( |Assignment with conversion: \\{ \\n assigned\_to\_short TIMESTAMP = ISO \\}| \\n )->write( |CL\_ABAP\_TSTMP=>MOVE\_TO\_SHORT: \\{ \\n moved\_to\_short TIMESTAMP = ISO \\}| \\n )->write( |CL\_ABAP\_TSTMP=>MOVE\_TO\_SHORT\_TRUNC: \\{ \\n moved\_to\_short\_trunc TIMESTAMP = ISO \\}| \\n )->write( |CL\_ABAP\_TSTMP=>MOVE: \\{ \\n moved TIMESTAMP = ISO \\}| \\n )->write( |CL\_ABAP\_TSTMP=>MOVE\_TRUNC: \\{ \\n moved\_trunc TIMESTAMP = ISO \\}| \\n )->write( |ROUND half up: \\{ \\n ts\_pack\_round\_half\_up TIMESTAMP = ISO \\}| \\n )->write( |ROUND down: \\{ \\n ts\_pack\_round\_down TIMESTAMP = ISO \\}| \\n )->write( |TRUNC: \\{ \\n ts\_pack\_trunc TIMESTAMP = ISO \\}| ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html abentime\_stamps.html abentime\_stamps\_packed.html