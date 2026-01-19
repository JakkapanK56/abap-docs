---
title: "ABENRANDOM_NUMBER_CLASS"
description: |
  ABENRANDOM_NUMBER_CLASS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRANDOM_NUMBER_CLASS.htm"
abapFile: "ABENRANDOM_NUMBER_CLASS.html"
keywords: ["do", "if", "case", "class", "data", "types", "ABENRANDOM", "NUMBER", "CLASS"]
---

The class `CL_ABAP_RANDOM` calls the pseudo random number generator *Mersenne Twister* for different numeric types.

For the one-dimensional case, the following special classes generate random numbers for the different numeric types:

Creation of a pseudo random number of the type `i` between 1 and 100, initialized by the UTC time.

-   `CL_ABAP_RANDOM_INT` for type `i`
-   `CL_ABAP_RANDOM_INT8` for type `int8`
-   `CL_ABAP_RANDOM_FLOAT` for type `f`
-   `CL_ABAP_RANDOM_PACKED` for type `p`
-   `CL_ABAP_RANDOM_PACKED_DEC1` to `CL_ABAP_RANDOM_PACKED_DEC14` for type `p` with 1 to 14 decimal places.
-   `CL_ABAP_RANDOM_DECFLOAT16` for type `decfloat16`
-   `CL_ABAP_RANDOM_DECFLOAT34` for type `decfloat34`

FINAL(time) = cl\_demo\_date\_time=>get\_utc\_time( ). \\nFINAL(r) = cl\_abap\_random\_int=>create( seed = CONV i( time ) \\n min = 1 \\n max = 100 ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abencl\_abap\_math.html