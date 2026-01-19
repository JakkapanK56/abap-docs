---
title: "ABENINHERITANCE_ABSTRACT_FINAL"
description: |
  ABENINHERITANCE_ABSTRACT_FINAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENINHERITANCE_ABSTRACT_FINAL.htm"
abapFile: "ABENINHERITANCE_ABSTRACT_FINAL.html"
keywords: ["if", "method", "class", "ABENINHERITANCE", "ABSTRACT", "FINAL"]
---

Abstract and final methods or classes can be defined using the additions **`ABSTRACT`** and **`FINAL`** of the statements [`METHODS`](ABAPMETHODS.html) and [`CLASS`](ABAPCLASS.html).

Abstract methods are declared in abstract classes and cannot be implemented in the same class, only in a subclass of the inheritance tree. Abstract classes cannot, therefore, be instantiated. A non-abstract method is a concrete method. With the exception of the instance constructor, concrete instance methods of a class can also call their abstract methods.

Final methods can no longer be redefined in subclasses. They cannot have any additional subclasses and close an inheritance tree definitively.

-   In classes that are both abstract and final, only the static components can be used. Although instance components can be declared, they cannot be used. Specifying `ABSTRACT` and `FINAL` together is therefore only useful for [static classes](ABENSTATIC_CLASS_GLOSRY.html).
-   Private methods cannot be redefined and therefore cannot be abstract.

abenabap.html abenabap\_reference.html abenabap\_objects.html abeninheritance.html