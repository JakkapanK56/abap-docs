---
title: "ABENNEWS-46-TYPE-IDENTIFICATION"
description: |
  ABENNEWS-46-TYPE-IDENTIFICATION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-46-TYPE-IDENTIFICATION.htm"
abapFile: "ABENNEWS-46-TYPE-IDENTIFICATION.html"
keywords: ["if", "method", "class", "data", "types", "ABENNEWS", "TYPE", "IDENTIFICATION"]
---

From Release 4.6A, types can be described dynamically.

Previously, the statement [`DESCRIBE`](ABAPDESCRIBE_FIELD.html) could only describe some of the [`ABAP types`](ABENTYPES_AND_OBJECTS.html). With the introduction of ABAP Objects, an [`RTTI concept`](ABENRTTI.html) based on system classes was implemented that enhances the description to include any data types and object types at runtime.

**Example for the description of a field**

tdescr =  cl\_abap\_typedescr=>describe\_by\_data( f ).

**Example for the description of a data reference**

tdescr ?= cl\_abap\_typedescr=>describe\_by\_data\_ref( dref ).

**Example for the description of an object reference**

tdescr ?= cl\_abap\_typedescr=>describe\_by\_object\_ref( oref ).

**Examples for descriptions using type names**

tdescr = cl\_abap\_typedescr=>describe\_by\_name( name ).

The type description classes contain all of the attributes and methods that can be assigned to the properties of the different types.

abenabap.html abennews.html abennews-4.html abennews-46a.html