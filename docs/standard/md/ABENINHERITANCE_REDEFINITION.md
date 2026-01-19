---
title: "ABENINHERITANCE_REDEFINITION"
description: |
  ABENINHERITANCE_REDEFINITION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENINHERITANCE_REDEFINITION.htm"
abapFile: "ABENINHERITANCE_REDEFINITION.html"
keywords: ["if", "method", "class", "ABENINHERITANCE", "REDEFINITION"]
---

Each subclass contains the components of all classes that are located between this class and the root node in the inheritance tree. The visibility of a component is always the same and cannot be changed. However, it is possible to redefine the public and protected instance methods of all preceding superclasses using the addition [`REDEFINITION`](ABAPMETHODS_REDEFINITION.html) of the statement [`METHODS`](ABAPMETHODS.html), to adapt them to the required level of specialization. The interface of a redefined method cannot be changed. The method is merely reimplemented with the same name. Constructors cannot be redefined and [special rules](ABENINHERITANCE_CONSTRUCTORS.html) apply.

The method declaration remains in the superclass, and its previous implementation is also retained there. The implementation of the redefinition is also generated for the subclass and hides the implementation of the superclass. A redefined method works with the private attributes of the subclass and not with any private superclass attributes with the same name.

Each reference that points to a subclass object uses the redefined method, even if it was typed with reference to a superclass. In particular, this also applies to the [self-reference](ABENSELF_REFERENCE_GLOSRY.html)\\ `me`. For example, if a superclass method `m1` contains a call `[me->]m2( )` and if `m2` is redefined in a subclass, the call of `m1` in an instance of the superclass causes the original method `m2` to be executed and the call of `m1` in an instance of the subclass causes the redefined method `m2` to be executed.

Within a redefined method, [`super->meth`](ABAPCALL_METHOD_METH_SUPER.html) can be used to access the hidden method, for example, to adapt and supplement its functions.

abenabap.html abenabap\_reference.html abenabap\_objects.html abeninheritance.html