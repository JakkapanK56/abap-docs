---
title: "ABENINHERITANCE_INSTANTIATION"
description: |
  ABENINHERITANCE_INSTANTIATION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENINHERITANCE_INSTANTIATION.htm"
abapFile: "ABENINHERITANCE_INSTANTIATION.html"
keywords: ["if", "case", "class", "ABENINHERITANCE", "INSTANTIATION"]
---

When a subclass is instantiated, all superclasses are instantiated simultaneously, whereby the initialization of superclass attributes is ensured by calling the superclass constructors, as described in [Inheritance and Constructors](ABENINHERITANCE_CONSTRUCTORS.html).

In each individual class, the additions `CREATE PUBLIC|PROTECTED|PRIVATE` of the statement [`CLASS`](ABAPCLASS.html) control who can create an instance of the class or, in other words, can call its instance constructor.

This has the following consequences:

If a superclass was defined in a path of the inheritance tree using the addition CREATE PRIVATE, external users cannot instantiate a subclass, and a subclass cannot even instantiate itself because it has no access to the instance constructor of the superclass.

It would therefore be useful to assign the addition `FINAL` to a class that was defined using the addition `CREATE PRIVATE`, to prevent subclasses from being derived. Otherwise subclasses of these superclasses have an implicit addition `CREATE NONE`.

The only exception to this rule is if a superclass that can be privately instantiated offers its [friendship](ABENFRIENDS.html) to its subclasses. The direct path is rarely the case here because the superclass must know its subclasses for it to be possible. However, a superclass can also offer friendship to an interface which, in turn, can be implemented by its subclasses.

Conversely, objects of subclasses cannot be created in their superclass if these are declared using `CREATE PROTECTED` or `CREATE PRIVATE`, unless they are [friends](ABENFRIEND_GLOSRY.html) of its subclasses.

Subclasses can have any `CREATE` addition, regardless of whether they are a friend of the superclass. Without an addition, they inherit the property `CREATE PUBLIC`. The instance constructor of the superclass is visible to everyone. The subclass controls the visibility of its own instance constructor, independently of the superclass.

Subclasses can have any `CREATE` addition, regardless of whether they are a friend of the superclass. Without an addition, they inherit the attribute `CREATE PROTECTED`. The superclass allows its subclasses unlimited instantiation and therefore also allow its [protected](ABENPROTECTED_GLOSRY.html) instance constructor to be published.

The subclass has the implicit addition `CREATE NONE`. Nobody other than the superclass itself can call its instance constructor, which means that the subclass cannot be instantiated. None of the `CREATE` additions are allowed because this would definitely mean unauthorized publishing of the superclass constructor.

If the subclass has no addition, it inherits the attribute `CREATE PRIVATE`. However, all `CREATE` additions are allowed. As a friend, the subclass can publish the private constructor of the superclass in any form.

abenabap.html abenabap\_reference.html abenabap\_objects.html abeninheritance.html