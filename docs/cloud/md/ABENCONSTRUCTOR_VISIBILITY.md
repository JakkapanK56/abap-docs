---
title: "ABENCONSTRUCTOR_VISIBILITY"
description: |
  ABENCONSTRUCTOR_VISIBILITY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCONSTRUCTOR_VISIBILITY.htm"
abapFile: "ABENCONSTRUCTOR_VISIBILITY.html"
keywords: ["if", "method", "class", "ABENCONSTRUCTOR", "VISIBILITY"]
---

For technical reasons, the instance constructor of a class is declared in a [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html) and is therefore theoretically visible to the corresponding consumers. However, an instance constructor is only executed when an object of this class is created using `CREATE OBJECT`. Therefore, the instance constructor is only visible to the users of a class that can also create objects of this class.

The additions `CREATE PUBLIC|PROTECTED|PRIVATE` of the statement [`CLASS`](ABAPCLASS.html) determine whether each user, only the heirs, or just the class itself can create objects of the class. This means that these additions define the actual visibility of the instance constructor implicitly. Therefore, the following applies:

This has the following important consequence:

If a class was defined using `CREATE PRIVATE`, only the class itself can instantiate itself. Subclasses of this class cannot even instantiate themselves, because they would have to call the superclass constructor using [`CALL super->constructor`](ABAPCALL_METHOD_METH_SUPER.html) (see also [Inheritance and Instance Creation](ABENINHERITANCE_INSTANTIATION.html)).

-   The instance constructor of a class defined using `CREATE PUBLIC` can be called by any user.
-   The instance constructor of a class defined using `CREATE PROTECTED` can only be called by the class itself and its subclasses.
-   The instance constructor of a class defined using `CREATE PRIVATE` can only be called by the class itself.

abenabap.html abenabap\_reference.html abenabap\_objects.html abenclasses.html abenclass\_components.html abenconstructor.html