---
title: "ABAPSET_PROPERTY"
description: |
  ABAPSET_PROPERTY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_PROPERTY.htm"
abapFile: "ABAPSET_PROPERTY.html"
keywords: ["do", "data", "ABAPSET", "PROPERTY"]
---

[Short Reference](ABAPSET_PROPERTY_SHORTREF.html)

`SET PROPERTY OF ole prop = dobj [NO FLUSH]`\\ 
                                `[EXPORTING p1 = f1 p2 = f2 ...].`

[1. `... NO FLUSH`](#ABAP_ADDITION_1@3@)

[2. `... EXPORTING p1 = f1 p2 = f2 ...`](#ABAP_ADDITION_2@3@)

The property `prop` of an automation object `ole` is set in accordance with the content of the data object `dobj`. The automation object must have been created using the special statement [`CREATE OBJECT`](ABAPCREATE_OBJECT_OLE2.html) for automation objects. The description of the statement `CREATE OBJECT` applies to the [typing](ABENTYPING_GLOSRY.html) of `ole`. The typing of the data object `dobj` depends on the properties of the automation property `prop`.

The meaning of the addition `NO FLUSH` is included in the description of the statement [`CREATE OBJECT`](ABAPCREATE_OBJECT_OLE2.html).

The addition `EXPORTING` can be used to assign the actual parameters `f1 f2 ...` to the parameters `p1 p2 ...` of the property, where the data type of the data objects `f1 f2 ...` depends on the requirements of the property.

Calls the Office application Excel and displays an empty Excel table by assigning the value 1 to the property *Visible*.

DATA app TYPE ole2\_object. \\n\\ \\nCREATE OBJECT app 'Excel.Application'. \\nSET PROPERTY OF app 'Visible' = 1. `sy-subrc` **Meaning** 0 Object properties passed successfully. 1 Error in communication with SAP GUI. 2 Error in function call in SAP GUI. 3 Error when setting a property. 4 Error when reading a property. abenabap.html abenabap\_reference.html abenabap\_screens.html abenfrontend\_services.html abenole2.html