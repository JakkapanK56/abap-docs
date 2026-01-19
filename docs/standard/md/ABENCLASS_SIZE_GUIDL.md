---
title: "ABENCLASS_SIZE_GUIDL"
description: |
  ABENCLASS_SIZE_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCLASS_SIZE_GUIDL.htm"
abapFile: "ABENCLASS_SIZE_GUIDL.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABENCLASS", "SIZE", "GUIDL"]
---

The class size is the number of components (attributes, methods, events) of a class. ABAP Compiler predefines a maximum number of 65,536 components. The total memory consumption by static attributes, instance attributes, and constants is restricted to 500KB in each case. With respect to deep data objects (tables, strings, and data references), only the fixed size of the reference is important and not the variable size of the referenced data object.

**Maintain reasonable class sizes**

Ensure that classes and interfaces do not contain an excessively high number of attributes, methods and events. The components contained must be class-specific and should not handle tasks that are extremely different from each other. The same applies to function pools.

Complexity is not only important on the level of procedure implementations. The number of procedures to be considered and the data processed by these procedures are also very important when it comes to understanding the source code.

A class, interface or function pool should not be mistaken as a container that can be used for any functions. Function pools play the same role here as abstract final classes for which no instances can be created. The function modules correspond to static public methods, and the global data corresponds to private static attributes. The situation should be viewed more as an abstraction of a certain subject or an object from real life. This modularization of a complex problem in objects of a manageable size makes it easier to understand the code. Therefore, the classes and interfaces must be designed appropriately and each class or interface must cover a manageable function that is easy to understand.

This is obviously not the case, if a class or an interface contains a large number of attributes and methods. The same applies to the number of function modules of a function pool (with respect to the use of [function pools](ABENABAP_OBJ_PROGR_MODEL_GUIDL.html)). Large classes, interfaces, and function pools either provide functions that are too heterogeneous or, conversely, are highly specialized, which restricts their reusability.

Besides the high degree of complexity, which makes it more difficult to maintain voluminous classes and function pools, you must consider another technical aspect: Even if you use just a few of the provided functions, the entire class or function pool is loaded into the session memory, which negatively impacts the memory usage.

It is [preferable](ABENPROC_VOLUME_GUIDL.html) to use multiple procedures, which are not too large and have clearly defined tasks, instead of a small number of large procedures. On the other hand, classes should not contain too many methods. However, these two rules are not contradictory, provided that the procedures do not become too small and are appropriately grouped into different classes with a clearly defined task field. In this process, very specialized classes can be created that do not require global visibility.

Functionality that is only required in a global class, function pool or any other program should therefore be encapsulated in local classes. (All functions of function pools, subroutine pools, and executable programs [should](ABENABAP_OBJ_PROGR_MODEL_GUIDL.html) be implemented in local classes anyway). An example of such self-contained functionality is the display logic for [classic dynpros](ABENENCAP_CLASS_INTERF_GUIDL.html) within a function pool. A meaningful reuse of classes that call the dynpros of the function pool is not possible outside the function pool. Therefore, local classes are the preferred elements for this task.

This type of procedure is also useful for global classes. By moving highly specialized functions to smaller, local classes, you reduce the number of methods of the global class, which results in a clearer overview and makes the class easier to maintain. When you use local classes within global classes, make sure you position them appropriately to [avoid](ABENLOCAL_TYPE_GLOB_CLASS_GUIDL.html) unnecessary dependencies.

abenabap.html abenabap\_reference.html abenabap\_pgl.html abenstructure\_style\_gdl.html abencomplexity\_gdl.html