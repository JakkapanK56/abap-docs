---
title: "ABAPCREATE_OBJECT_OLE2"
description: |
  ABAPCREATE_OBJECT_OLE2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCREATE_OBJECT_OLE2.htm"
abapFile: "ABAPCREATE_OBJECT_OLE2.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABAPCREATE", "OBJECT", "OLE2"]
---

[Short Reference](ABAPCREATE_OBJECT_OLE_SHORTREF.html)

`CREATE OBJECT ole class [NO FLUSH]\ [QUEUE-ONLY].`

[1. `... NO FLUSH`](#ABAP_ADDITION_1@3@)

[2. `... QUEUE-ONLY`](#ABAP_ADDITION_2@3@)

This statement creates the automation object `ole` of the automation class `class`. The object `ole` must be of type `ole2_object`, which is defined in the ABAP Dictionary in the [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `OLE2`. The automation class `class` expects a character-like data object that contains the name of the class.

The system automatically executes an authorization check if the column `AUTH_CHK` in the DDIC database table `TOLE` contains the value *X* for the class. The authorization status can be checked with the function module `AUTHORITY_CHECK_OLE`.

When using the addition `NO FLUSH`, requests are collected in the automation buffer until the function module `FLUSH`, which is provided for this purpose, is called and the `FREE OBJECT` statement is passed or, at the most, until a change of [screen layout](ABENSCREEN_GLOSRY.html). Only then are they passed to the automation server in the current presentation layer for asynchronous execution. Without this addition, the flush is executed, and the pass takes place as soon as a statement that does not belong to the automation command set is reached. In the ABAP Debugger, the return values of the individual automation statements are not available until after the pass to the presentation layer.

The addition `QUEUE-ONLY` has the effect that the new object is not written to the specified ABAP data object `rc` as a return value of methods called using `CALL METHOD OF` in a flush. In this case, the automation buffer can only contain the statements `CREATE OBJECT`, `CALL METHOD`, and `GET PROPERTY` using the addition `QUEUE-ONLY`. When executing the program in the ABAP Debugger, the return values are passed by default.

In this example, the automation object `app` is created, which has access to all methods and attributes of the class `APPLICATION` in the MS Excel Library. This class contains methods with which, for example, an Excel document can be opened or copied.

-   For the declaration of `ole`, exactly the type `ole2_object` must be specified. It is not sufficient to specify another type that was declared with a reference to `ole2_object`.
-   An automation object `ole` created using `CREATE OBJECT ole` must also always be released using `FREE OBJECT ole` to avoid memory bottle necks and terminations of the application to be controlled.
-   `CREATE OBJECT` for OLE must not be confused with the identically named statement in ABAP Objects.

DATA app TYPE ole2\_object. \\n\\ \\nCREATE OBJECT app 'Excel.Application' NO FLUSH. `sy-subrc` **Meaning** 0 Automation object was created. 1 Error in communication to the SAP GUI 2 Error in function call in the SAP GUI 3 Problems with memory allocation in the presentation layer. abenabap.html abenabap\_reference.html abenabap\_screens.html abenfrontend\_services.html abenole2.html