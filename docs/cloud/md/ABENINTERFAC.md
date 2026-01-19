---
title: "Using the class reference variable (not recommended)"
description: |
  Using the interface reference variable (recommended): In the case of static components(ABENSTATIC_COMPONENT_GLOSRY.html) of interfaces, the name of the interface can only be used to access constants. All other static components of an interface, apart from object references, can be accessed using c
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENINTERFAC.htm"
abapFile: "ABENINTERFAC.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABENINTERFAC"]
---

The components of a class use their [visibility sections](ABENCLASS_VISIBILITY.html) to define the class-specific [interfaces](ABENINTF_GEN_GLOSRY.html) of the class to the outside. For example, the public components form the public interface of the class, since all of its attributes and method parameters can be addressed by all users. The protected components form an interface between the class and its subclasses during inheritance.

[Interfaces](ABENOO_INTF_GLOSRY.html) of ABAP Objects are independent constructs that enable the class-specific [interfaces](ABENINTF_GEN_GLOSRY.html) to be enhanced by implementing them in classes. Different classes that implement the same interface can all be addressed using identical interfaces. In addition to [inheritance](ABENINHERITANCE.html), Interfaces are a basis for the [polymorphism](ABENPOLYMORPHISM_GLOSRY.html) of classes, since a method of an interface can behave differently in different classes. [Interface reference variables](ABENINTERFACE_REF_VARIABLE_GLOSRY.html) allow users to address different classes in the same way. Interfaces can also be [nested](ABENINTERFACE_COMPOSITION.html).

Like classes, interfaces can be [defined](ABENCLASS_INTERFACE_DEFINITION.html) either [globally](ABENGLOBAL_INTERFACE_GLOSRY.html) in the [repository](ABENREPOSITORY_GLOSRY.html) or [locally](ABENLOCAL_INTERFACE_GLOSRY.html) in an ABAP program.

Exactly the same [components](ABENCLASS_COMPONENTS.html) can be defined in an interface as in a class.

Unlike classes, interfaces do not have instances. Instead, they are implemented by classes. The statement [`INTERFACES`](ABAPINTERFACES.html) in the declaration part of a class is used to implement these interfaces in a class. This statement may only be specified in the public visibility section of the class, that is, after `PUBLIC SECTION`. Here, some interface components can be adapted to the requirements of the class. For example, methods can be flagged as abstract or final, or [initial values](ABENSTART_VALUE_GLOSRY.html) can be assigned to attributes.

When an interface is implemented in a class, the components of this interface are added to the other components of the public visibility section. A component `comp` of an implemented interface `intf` becomes a fully-fledged component of the class and is addressed with the name `intf~comp`. For use outside and inside the classes, [`ALIASES`](ABAPALIASES.html) can be used to define alias names for these components.

The class must implement the methods of all implemented interfaces in it. The implementation part of the class must therefore contain a method implementation for each non-abstract and non-optional interface method `meth`:

[`METHOD intf~meth.`](ABAPMETHOD.html)\\ 
  ...\\ 
[`ENDMETHOD.`](ABAPENDMETHOD.html)

Interface methods defined as optional using the addition [`DEFAULT`](ABAPMETHODS_DEFAULT.html) do not need to be implemented explicitly and react with default behavior when they are called.

Interfaces can be implemented by different classes. Each of these classes is extended by the same set of components. However, the methods of the interface can be implemented differently in each class.

Interfaces enable different classes to be used in a uniform way using [interface reference variables](ABENINTERFACE_REF_VARIABLE_GLOSRY.html) (known as polymorphism). Interfaces that are implemented in different classes expand the public interfaces of each class by the same set of components. If a class does not have any class-specific public components, the interfaces define the entire public interface of the class.

Object references are used in object reference variables to address [objects](ABENOBJECT.html). Instead of creating object reference variables with reference to a [class](ABENCLASSES.html), they can also be created with reference to an interface. This kind of reference variable can contain references to objects of classes that implement the corresponding interface. A reference variable `obj` with reference to an interface `intf` is declared using the statement [`DATA obj TYPE REF TO intf`](ABAPDATA_REFERENCES.html). This reference variable allows programs access to exactly those components defined in the interface, that is, the components of an object that are added to the class-specific components by implementing the interface.

To create an object of a class `class` that implements an interface `intf` to which an interface reference variable `iref` points initially, the name of the class must be specified:

FINAL(iref) = NEW class(  ).

or

CREATE OBJECT iref TYPE class.

Also, a reference variable `cref` with reference to the class `class` that points to an object of the class can be used. A class reference variable `cref` of a class that implements an interface `intf` can be assigned to the interface reference variable `iref`:

iref = cref.

The reference in `iref` now points to the same object as the reference in `cref`.

If the interface `intf` contains an instance attribute `attr` and an instance method `meth`, the interface components can be addressed as follows:

Using the class reference variable (not recommended)

Using the interface reference variable (recommended):

In the case of [static components](ABENSTATIC_COMPONENT_GLOSRY.html) of interfaces, the name of the interface can only be used to access constants.

All other static components of an interface, apart from object references, can be accessed using classes `class` that implement the interface.

[Interfaces](ABENINTERFACE_ABEXA.html)

-   Access to an attribute `attr`: `cref->intf~attr`
-   Call of a method `meth`: `cref->intf~meth`

-   Access to an attribute `attr`: `iref->attr`
-   Call of a method `meth`: `iref->meth( )`

-   Accessing a constant `const`: `intf=>const`

-   Access to a static attribute `attr`:`class=>intf~attr`
-   Call of a static method `meth`: `class=>intf~meth( )`

abenabap.html abenabap\_reference.html abenabap\_objects.html