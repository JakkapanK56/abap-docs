---
title: "ABENSHM_OBJECTS"
description: |
  ABENSHM_OBJECTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSHM_OBJECTS.htm"
abapFile: "ABENSHM_OBJECTS.html"
keywords: ["if", "class", "data", "ABENSHM", "OBJECTS"]
---

Objects in the [shared objects memory](ABENSHARED_OBJECTS_MEMORY_GLOSRY.html), that is, the actual shared objects, are instances of shared-memory-enabled classes or anonymous data objects addressed using references.

A shared-memory-enabled class is declared with the addition [`SHARED MEMORY ENABLED`](ABAPCLASS_OPTIONS.html) of the statement `CLASS` or has the property *Shared memory enabled* activated in the Class Builder. Only instances of shared-memory-enabled classes can be stored in the shared objects memory. The static attributes of a shared-memory-enabled class, on the other hand, are stored in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) of a program and not in the shared memory. If different programs access the same shared objects, the static attributes of the associated classes exist multiple times and independently of each other in the programs.

Since area instances without existing area locks are self-contained, a [root object](ABENROOT_OBJECT_GLOSRY.html) of a shared-memory-enabled class is required for initial reads.

-   [References to shared objects](ABENSHM_OBJECTS_REFERENCES.html)
-   [Root object](ABENSHM_OBJECTS_ROOT_OBJECT.html)
-   [Object creation](ABENSHM_OBJECTS_CREATE_OBJECT.html)
-   [Memory bottlenecks](ABENSHM_OBJECTS_OUT_OF_MEMORY.html)

abenabap.html abenabap\_reference.html abencreate\_objects.html abenabap\_shared\_objects.html