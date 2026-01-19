---
title: "ABENSET_REFERENCES"
description: |
  ABENSET_REFERENCES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSET_REFERENCES.htm"
abapFile: "ABENSET_REFERENCES.html"
keywords: ["do", "if", "data", "ABENSET", "REFERENCES"]
---

Special rules apply when setting the reference or pointer of a reference variable:

A reference is always set as an [upcast](ABENUP_CAST_GLOSRY.html) or as a [downcast](ABENDOWN_CAST_GLOSRY.html). When a reference variable is assigned to another reference variable, two different assignment operators are used, as well as a constructor operator.

References in data reference variables can point to existing data objects. There is a statement and a constructor operator for this.

Like all data objects, reference variables are initialized using the statement [`CLEAR`](ABAPCLEAR.html). The content of an initial reference variable is the [null reference](ABENNULL_REFERENCE_GLOSRY.html), which does not point to an object and can be assigned to every reference variable.　

-   [Assignment Rules for Reference Variables](ABENCONVERSION_REFERENCES.html)

-   [`=`, `?=` - Upcast and Downcast](ABAPMOVE_CAST.html)
-   [`CAST` - Casting Operator](ABENCONSTRUCTOR_EXPRESSION_CAST.html)

-   [`GET REFERENCE`](ABAPGET_REFERENCE.html)
-   [`REF` - Reference Operator](ABENCONSTRUCTOR_EXPRESSION_REF.html)

-   The same rules apply to references set when [objects are created](ABENCREATE_OBJECTS.html) as to assignments.
-   When a reference variable containing a [heap reference](ABENHEAP_REFERENCE_GLOSRY.html) is initialized, this affects [Garbage Collector](ABENGARBAGE_COLLECTOR_GLOSRY.html).

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenreference\_assignments.html