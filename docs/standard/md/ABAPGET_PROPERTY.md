---
title: "ABAPGET_PROPERTY"
description: |
  ABAPGET_PROPERTY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGET_PROPERTY.htm"
abapFile: "ABAPGET_PROPERTY.html"
keywords: ["do", "if", "data", "ABAPGET", "PROPERTY"]
---

[Short Reference](ABAPGET_PROPERTY_SHORTREF.html)

 `GET PROPERTY OF ole prop = dobj [NO FLUSH]\ [QUEUE-ONLY]`\\ 
\\ `                                [EXPORTING p1 = f1 p2 = f2 ...].`

[1. `... NO FLUSH`](#ABAP_ADDITION_1@3@)

[2. `... QUEUE-ONLY`](#ABAP_ADDITION_2@3@)

[3. `... EXPORTING p1 = f1 p2 = f2 ...`](#ABAP_ADDITION_3@3@)

Assigns the content of the property `prop` of an automation object `ole` to the data object `dobj`. The automation object must have been created using the special statement [`CREATE OBJECT`](ABAPCREATE_OBJECT_OLE2.html) for automation objects. The description of the statement `CREATE OBJECT` applies to the [typing](ABENTYPING_GLOSRY.html) of `ole`. The typing of the data object `dobj` depends on the properties of the automation property `prop`.

The description of the statement [`CREATE OBJECT`](ABAPCREATE_OBJECT_OLE2.html) applies to the meaning of the `NO FLUSH` and `QUEUE-ONLY` additions.

The addition `EXPORTING` can be used to assign the actual parameters `f1 f2 ...` to the parameters `p1 p2 ...` of the automation object, where the data type of the data objects `f1 f2 ...` depends on the requirements of the property.

This example reads the `Visible` property of an Excel table that was created at runtime. This property specifies whether the table processing is visible or runs in the background. The variable `vis` is typed as an integer because Excel passes an integer value.

DATA: vis TYPE i, \\n app TYPE ole2\_object. \\n\\ \\nCREATE OBJECT app 'Excel.Application'. \\nGET PROPERTY OF app 'Visible' = vis. `sy-subrc` **Meaning** 0 Object properties passed successfully. 1 Error in communication with SAP GUI. 2 Error in function call in SAP GUI. 3 Error when setting a property. 4 Error when reading a property. abenabap.html abenabap\_reference.html abenabap\_screens.html abenfrontend\_services.html abenole2.html