---
title: "ABENCL_ABAP_CONV"
description: |
  ABENCL_ABAP_CONV - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCL_ABAP_CONV.htm"
abapFile: "ABENCL_ABAP_CONV.html"
keywords: ["do", "if", "method", "class", "data", "ABENCL", "ABAP", "CONV"]
---

The system classes listed below enable the conversion of text data between different [code pages](ABENCODEPAGE_GLOSRY.html) and of numeric data between different number representations.

Data that is not in ABAP format, that is, text data that is not in the system code page format, or numeric data that is not in the [byte order](ABENBYTE_ORDER_GLOSRY.html) used on the current [host computer](ABENHOST_COMPUTER_GLOSRY.html), can be stored in binary form in an `x` field or in an `xstring`.

This is done using the following classes:

-   When converting to ABAP format from a non-ABAP format, data is read from an ABAP data object and written as a byte sequence.
-   When converting from ABAP format to a non-ABAP format, data is read from an ABAP data object and written as a byte sequence.

-   `CL_ABAP_CONV_IN_CE`
-   Importing non-ABAP formats into ABAP data objects (reads a binary input stream).
-   `CL_ABAP_CONV_OUT_CE`
-   Exporting ABAP data objects to a non-ABAP format (writes to a binary output stream).
-   `CL_ABAP_CONV_X2X_CE`
-   Importing data of any format and exporting data to any other format (reads from a binary input stream and writes to a binary output stream).

-   The interfaces `IF_ABAP_CONV_IN` and `IF_ABAP_CONV_OUT` of objects that were created using the class `CL_ABAP_CONV_CODEPAGE` wrap the classes above for easier handling of code pages in character and byte string processing.
-   The methods `UTCLONG2TSTMP`, `UTCLONG2TSTMP_SHORT`, and `TSTMP2UTCLONG` of the class [`CL_ABAP_TSTMP`](ABENCL_ABAP_TSTMP.html) convert the content of [time stamp fields](ABENTIMESTAMP_FIELD_GLOSRY.html) to representation in packed numbers and vice versa.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenconversion\_rules.html