---
title: "ABENCLASS_TYPES_CONSTANTS"
description: |
  ABENCLASS_TYPES_CONSTANTS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCLASS_TYPES_CONSTANTS.htm"
abapFile: "ABENCLASS_TYPES_CONSTANTS.html"
keywords: ["select", "if", "class", "data", "types", "ABENCLASS", "TYPES", "CONSTANTS"]
---

The [`TYPES`](ABAPTYPES.html) statement can be used to declare any number of user-defined ABAP data types within a class. Types are instance-independent and only exist once for all the objects of a class.

[Bound data types](ABENBOUND_DATA_TYPE_GLOSRY.html) that occur as properties of instance or static attributes also belong to the static properties of a class. After a `LIKE` addition, the class name can be used to access the properties of instance attributes (exceptions to this rule are the statements `ASSIGN ... CASTING` and `SELECT-OPTIONS ... FOR`). In addition, a reference variable can be used with an object component selector without first creating the object.

Constants are special [static attributes](ABENSTATIC_ATTRIBUTE_GLOSRY.html), whose values are specified when they are declared, and which cannot be changed. Constants are declared using the statement [`CONSTANTS`](ABAPCONSTANTS.html). Constants are instance-independent and exist only once for all the objects of a class.

abenabap.html abenabap\_reference.html abenabap\_objects.html abenclasses.html abenclass\_components.html