---
title: "ABENNEWS-620-CLASSES"
description: |
  ABENNEWS-620-CLASSES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-620-CLASSES.htm"
abapFile: "ABENNEWS-620-CLASSES.html"
keywords: ["if", "method", "class", "data", "ABENNEWS", "620", "CLASSES"]
---

[1\. Class for Calculating with Time Stamps](#ABAP_MODIFICATION_1@4@)

[2\. Class for Formatting Lists](#ABAP_MODIFICATION_2@4@)

[3\. Error Handling of Exceptions](#ABAP_MODIFICATION_3@4@)

[4\. Methods for Determining Type Properties](#ABAP_MODIFICATION_4@4@)

Class `CL_ABAP_TSTMP` has been introduced for calculating with [UTC time stamps](ABENUTC_TIMESTAMP_GLOSRY.html) in packed numbers.

Class `CL_ABAP_LIST_UTILITIES` has been introduced to calculate output lengths, convert values from the list buffer, and define field limits. With the return values for their methods, a correct column alignment for ABAP lists can be programmed (even when Eastern Asian scripts are displayed).

The objects in a list can be displayed in different output lengths by specifying the required length in the menu under *System -> List -> Unicode Display*. This is of particular use with screen lists where the output is cut off, which is displayed by the characters (`>` or `<`).

Interfaces `IF_MESSAGE` and `IF_SERIALIZABLE_OBJECT` have been added to class `CX_ROOT`, the global superclass for all exceptions. Texts from classes that implement these interfaces are edited as message texts. The method `GET_LONGTEXT` is used to provide the long text for an exception text.

Two new methods have been introduced in class `CL_ABAP_DATADESCR` for determining type properties at runtime ([RTTI](ABENRTTI.html)):

-   The method `IS_READ_ONLY` determines whether a reference data object is write-protected.
-   The method `APPLIES_TO_DATA_REF` executes a type check between the description and the data object. This makes it possible to determine the compatibility of data objects.

abenabap.html abennews.html abennews-6.html abennews-620.html