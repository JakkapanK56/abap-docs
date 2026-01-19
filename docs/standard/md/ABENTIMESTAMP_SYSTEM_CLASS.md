---
title: "ABENTIMESTAMP_SYSTEM_CLASS"
description: |
  ABENTIMESTAMP_SYSTEM_CLASS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTIMESTAMP_SYSTEM_CLASS.htm"
abapFile: "ABENTIMESTAMP_SYSTEM_CLASS.html"
keywords: ["if", "try", "catch", "method", "class", "data", "ABENTIMESTAMP", "SYSTEM", "CLASS"]
---

The Class Library contains the following system class for handling UTC time stamps in [time stamp fields](ABENTIMESTAMP_FIELD_GLOSRY.html):

This class provides the following methods:

The attributes `MIN` and `MAX` contain the minimum and maximum values of the [time stamp type](ABENTIMESTAMP_TYPE_GLOSRY.html)\\ `utclong`.

An initial time stamp passed to the method `DIFF` is handled here like the smallest possible value of a time stamp.

Comparison of the method `DIFF` with the built-in function [`utclong_diff`](ABENUTCLONG_DIFF.html).

A current UTC time stamp is converted into an ISO-8601 format where the offset of the local time zone is shown as a suffix. Some decimals are cut. Then, the character representation is converted back into time stamp type `utclong` again.

[Read Time Stamp from String](ABENCL_UTCLONG_READ_ABEXA.html)

-   `CL_ABAP_UTCLONG`

-   `DIFF` for calculating time differences.
-   `READ` for reading an UTC time stamp from a string.
-   `WRITE_ISO_FORMAT_WITH_OFFSET` for writing an UTC time stamp to a string in ISO-8601 format, where the time zone offset is expressed by a suffix.
-   `READ_ISO_FORMAT` for reading an UTC time stamp from a string that contains a value in n ISO-8601 format, where the time zone offset can be expressed by a suffix.
-   `TO_SYSTEM_TIMESTAMP` converts an UTC time stamp into [system date](ABENSYSTEM_DATE_GLOSRY.html) and [system time](ABENSYSTEM_TIME_GLOSRY.html) in the [system time zone](ABENSYSTEM_TIME_ZONE_GLOSRY.html).
-   `FROM_SYSTEM_TIMESTAMP` converts a [system date](ABENSYSTEM_DATE_GLOSRY.html) and [system time](ABENSYSTEM_TIME_GLOSRY.html) in the [system time zone](ABENSYSTEM_TIME_ZONE_GLOSRY.html) into an UTC time stamp.

FINAL(ts\_low) = utclong\_current( ). \\nFINAL(ts\_high) = utclong\_add( val = ts\_low \\n seconds = 100000 ). \\n\\ \\nFINAL(diff) = utclong\_diff( high = ts\_high \\n low = ts\_low ). \\n\\ \\ncl\_abap\_utclong=>diff( EXPORTING high = ts\_high \\n low = ts\_low \\n IMPORTING days = FINAL(days) \\n hours = FINAL(hours) \\n minutes = FINAL(minutes) \\n seconds = FINAL(seconds) ). \\n\\ \\nASSERT diff = 100000. \\nASSERT diff = 86400 \* days + 3600 \* hours + 60 \* minutes + seconds. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(ts\_utc) = utclong\_current( ). \\nout->write\_data( ts\_utc ). \\n\\ \\nTRY. \\n FINAL(ts\_iso) = \\n cl\_abap\_utclong=>write\_iso\_format\_with\_offset( \\n EXPORTING utclong = ts\_utc \\n decimals = 4 \\n timezone = cl\_demo\_date\_time=>get\_user\_time\_zone( ) ). \\n out->write\_data( ts\_iso ). \\n CATCH cx\_abap\_utclong\_invalid INTO FINAL(exc2). \\n out->display( exc2->get\_text( ) ). \\n RETURN. \\nENDTRY. \\n\\ \\nTRY. \\n cl\_abap\_utclong=>read\_iso\_format( \\n EXPORTING string = ts\_iso \\n IMPORTING value = FINAL(ts\_utc\_from\_iso) ). \\n out->write( ts\_utc\_from\_iso ). \\n CATCH cx\_abap\_utclong\_invalid INTO FINAL(exc1). \\n out->display( exc1->get\_text( ) ). \\n RETURN. \\nENDTRY. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html abentime\_stamps.html abenutclong.html