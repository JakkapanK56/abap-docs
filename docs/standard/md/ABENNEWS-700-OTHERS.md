---
title: "ABENNEWS-700-OTHERS"
description: |
  ABENNEWS-700-OTHERS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-700-OTHERS.htm"
abapFile: "ABENNEWS-700-OTHERS.html"
keywords: ["select", "if", "catch", "method", "class", "data", "exception-handling", "ABENNEWS", "700", "OTHERS"]
---

[1\. Class for System States](#ABAP_MODIFICATION_1@4@)

[2\. Number of ABAP Sessions per User Session](#ABAP_MODIFICATION_2@4@)

[3\. Storage of Interface Constants](#ABAP_MODIFICATION_3@4@)

[4\. Exception Handling for Data Clusters](#ABAP_MODIFICATION_4@4@)

[5\. Authorization Check for Users](#ABAP_MODIFICATION_5@4@)

[6\. Strings on Selection Screens](#ABAP_MODIFICATION_6@4@)

[7\. Format of Lists when Sending](#ABAP_MODIFICATION_7@4@)

The static methods of the class `CL_ABAP_SYST` return important system states and replace the evaluation of the corresponding [system fields](ABENSYSTEM_FIELD_GLOSRY.html) if it is necessary to ensure that a system field was not incorrectly overwritten in a program.

From ABAP release 7.0, up to 16 [ABAP sessions](ABENABAP_SESSION_GLOSRY.html) can be opened per user session, compared to the previous maximum of 6. The actual number is controlled by the system parameter `rdisp/max_alt_modes`. The default value for this parameter is 6 as before.

To enable more than single-digit numbers in the [system field](ABENSYSTEM_FIELD_GLOSRY.html)\\ `sy-modno`, its data type has been changed (incompatibly ) from `c` of length 1 to `i`.

From ABAP release 7.0, an interface constant is created exactly once in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) and `GET REFERENCE` returns the same reference regardless of the name. Before ABAP release 7.0, a new interface constant was created for each implementation and different formulations like `i1=>const`, `c1=>i1~const`, or `c2=>i1~const` produced different references for a constant `const` with `GET REFERENCE`.

In `IMPORT`, the exception `IMPORT_FORMAT_ERROR` has been made catchable by assigning it to the new class `CX_SY_IMPORT_FORMAT_ERROR`. The exception `CONNE_IMPORT_CONVERSION_ERROR` has been made catchable by assigning it to the existing class `CX_SY_CONVERSION_CODEPAGE` (change was also transported back to ABAP release 6.40)

The addition [`IGNORING CONVERSION ERRORS`](ABAPIMPORT_CONVERSION.html) now also suppresses the exception raised by the fact that the number of bytes of an imported character-like component increases when it is converted to another code page, and therefore no longer fits into the target object. Up to now, only superfluous blanks were cut off without raising an exception (change was also transported back to ABAP release 6.40).

From ABAP release 7.0, the statement [`AUTHORITY-CHECK`](ABAPAUTHORITY-CHECK.html) now has the addition `FOR USER`, which can be used to check the authorizations of any user.

In the statement [`PARAMETERS`](ABAPPARAMETERS.html), it is now also possible to specify the data type `string` after the addition [`TYPE`](ABAPPARAMETERS_TYPE.html).

The internal format into which an ABAP list is packed when the *send* function is called, has been changed. The previous format can still be read. From ABAP release 7.0, to send lists to systems with older releases, the new format must be converted to the previous format using the function module `LIST_CONVERT_NEW_TO_OLD_FORMAT`.

abenabap.html abennews.html abennews-70\_ehps.html abennews-70.html