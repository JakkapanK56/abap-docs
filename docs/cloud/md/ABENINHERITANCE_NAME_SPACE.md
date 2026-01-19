---
title: "ABENINHERITANCE_NAME_SPACE"
description: |
  ABENINHERITANCE_NAME_SPACE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENINHERITANCE_NAME_SPACE.htm"
abapFile: "ABENINHERITANCE_NAME_SPACE.html"
keywords: ["do", "method", "class", "ABENINHERITANCE", "NAME", "SPACE"]
---

A subclass contains all components of all its superclasses. Only the public and the protected components are visible. This is why all public and protected components of a path of an inheritance tree are located in a single namespace and must have unique names. Private components, on the other hand, must have unique names within a class.

When methods are [redefined](ABENINHERITANCE_REDEFINITION.html), the newly implemented method hides the identically named method of the superclass. As soon as the method is redefined, it replaces the old method to ensure that the name remains unique. The [pseudo reference](ABENPSEUDO_REFERENCE_GLOSRY.html)\\ [`super->`](ABAPCALL_METHOD_METH_SUPER.html) can be used in subclasses to access a method of the direct superclass hidden by a redefinition.

abenabap.html abenabap\_reference.html abenabap\_objects.html abeninheritance.html