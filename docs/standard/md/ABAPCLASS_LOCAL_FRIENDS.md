---
title: "ABAPCLASS_LOCAL_FRIENDS"
description: |
  ABAPCLASS_LOCAL_FRIENDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCLASS_LOCAL_FRIENDS.htm"
abapFile: "ABAPCLASS_LOCAL_FRIENDS.html"
keywords: ["select", "do", "if", "method", "class", "ABAPCLASS", "LOCAL", "FRIENDS"]
---

`CLASS class DEFINITION              LOCAL FRIENDS class1 class2 ...                            intf1  intf2  ...`

This statement makes the local classes and interfaces `class1 class2 ...` and `intf1 intf2 ...` of a [class pool](ABENCLASS_POOL_GLOSRY.html)\\ [friends](ABENFRIEND_GLOSRY.html) of its global class `class`. At least one class or one interface must be specified.

This statement does not introduce a declaration part and must not be closed using the `ENDCLASS` statement.

In the `CL_DEMO_AMDP_MESH` class, the `cl_test_selects` class from the [test include](ABENTEST_INCLUDE_GLOSRY.html) is declared in the [CCDEF include](ABENCCDEF_GLOSRY.html) as a local friend of the global class, so that its private methods can be tested.

-   The declaration of local classes of a class pool as friends of the global class is particularly necessary for local [test classes](ABENTEST_CLASS_GLOSRY.html) that test the private components of the global class.
-   This variant of the statement `CLASS` can also only be listed in the context described under [`CLASS`](ABAPCLASS.html).
-   If the local classes and interfaces `class1 class2 ...` and `intf1 intf2 ...` are to have access to all components of the global class `class` in their declaration part, the statement must first be specified in the class pool, for which the local classes and interfaces must first be registered using [`CLASS -`](ABAPCLASS_DEFERRED.html) or [`INTERFACE - DEFERRED`](ABAPINTERFACE_DEFERRED.html).

CLASS cl\_test\_selects DEFINITION DEFERRED. \\nCLASS cl\_demo\_amdp\_mesh DEFINITION LOCAL FRIENDS cl\_test\_selects. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abapclass.html