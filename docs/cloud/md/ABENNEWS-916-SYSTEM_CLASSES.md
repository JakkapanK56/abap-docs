---
title: "ABENNEWS-916-SYSTEM_CLASSES"
description: |
  ABENNEWS-916-SYSTEM_CLASSES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-916-SYSTEM_CLASSES.htm"
abapFile: "ABENNEWS-916-SYSTEM_CLASSES.html"
keywords: ["do", "if", "class", "data", "types", "ABENNEWS", "916", "SYSTEM", "CLASSES"]
---

[1\. System Classes for Probability Distribution](#ABAP_MODIFICATION_1@4@)

[2\. Mathematical Constants](#ABAP_MODIFICATION_2@4@)

Two new system classes for probability distribution are available:

Both classes allow the generation of random numbers and calculation of quantile, probabilities, and other aspects. The first release includes the following distributions: normal, log-normal, gamma, exponential, and uniform `int`/`int8` distributions. Discrete and continuous distributions are supported.

The following constants for minimum and maximum values are now available as part of class `CL_ABAP_MATH`:

In addition, the following common mathematical constants are available in class `CL_ABAP_MATH`:

These constants are available as floating point numbers (`f`) and as `decfloat34` numbers.

-   \\ `CL_ABAP_PROB_DISTRIBUTION` defines probability distributions in ABAP for probabilities of a [floating point](ABENFLOATING_POINT_NUMBER_GLOSRY.html) data type.
-   \\ `CL_ABAP_PROB_DISTRIBUTION_DF34` defines probability distributions in ABAP for probabilities of the built-in data type [`decfloat34`](ABENBUILTIN_TYPES_NUMERIC.html).

-   Minimal positive and not subnormal value for type `decfloat34` and `decfloat16`
-   Maximal value for type `decfloat34` and `decfloat16`
-   Smallest floating point number > 0
-   Difference between smallest floating point number > 1 and 1

-   Euler's constant e
-   pi
-   pi squared
-   pi / 2
-   pi / 4
-   Square root of 2, 3, and pi
-   Decimal logarithm (log10) and binary logarithm (log2) of e
-   Decimal logarithm of the numbers 2 and 10

abenabap.html abennews.html abennews-91.html abennews-916.html