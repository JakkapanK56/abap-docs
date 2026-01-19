---
title: "ABENNEWS-71-ABAP-OBJECTS"
description: |
  ABENNEWS-71-ABAP-OBJECTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-71-ABAP-OBJECTS.htm"
abapFile: "ABENNEWS-71-ABAP-OBJECTS.html"
keywords: ["if", "method", "class", "ABENNEWS", "ABAP", "OBJECTS"]
---

[1\. Declaring Instance Constructors](#ABAP_MODIFICATION_1@4@)

[2\. C Destructor](#ABAP_MODIFICATION_2@4@)

[3\. Constants in Class Pools](#ABAP_MODIFICATION_3@4@)

From ABAP release 7.0, EhP2, the statement [`METHODS`](ABAPMETHODS_CONSTRUCTOR.html) can be used to declare an [instance constructor](ABENINSTANCE_CONSTRUCTOR_GLOSRY.html) in all [visibility sections](ABENVISIBILITY_SECTION_GLOSRY.html), whose instantiability is more general than or equal to that specified in the addition [`CREATE`](ABAPCLASS_OPTIONS.html) of the statement [`CLASS DEFINITION`](ABAPCLASS_DEFINITION.html). Until now, this was only possible with the public visibility section (this modification was also transported to ABAP release 7.0).

From ABAP release 7.0, EhP2, more than one attribute can be passed in the [C destructor](ABENC_DESTRUCTOR.html) when `SYSTEM-CALL` is used.

From ABAP release 7.0, EhP2, local program constants can be declared in a class pool. The private components and methods of the global class can access these constants.

abenabap.html abennews.html abennews-70\_ehps.html abennews-71.html