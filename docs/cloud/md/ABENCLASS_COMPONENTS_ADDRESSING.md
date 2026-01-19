---
title: "ABENCLASS_COMPONENTS_ADDRESSING"
description: |
  ABENCLASS_COMPONENTS_ADDRESSING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCLASS_COMPONENTS_ADDRESSING.htm"
abapFile: "ABENCLASS_COMPONENTS_ADDRESSING.html"
keywords: ["select", "do", "if", "case", "method", "class", "internal-table", "field-symbol", "ABENCLASS", "COMPONENTS", "ADDRESSING"]
---

When accessing class components, there is a difference between access from inside and outside of the same class. In internal access, that is, within a method of the same class, the name of the component is sufficient. In external access, the object, in the case of instance components, and the class, in the case of static components, must be specified using an [object component selector](ABENOBJECT_COMPONENT_SELECT_GLOSRY.html) or [class component selector](ABENCLASS_COMPONENT_SELECT_GLOSRY.html). Here, a distinction can be made between static and dynamic variants.

For static access, object reference variables can only be used to access components that are known to the reference variable. These are the components that are available in the static type of the reference variable (class or interface). Class reference variables that are typed with reference to a superclass but point to subclasses know only the superclass components and the interface references know only interface components.

With dynamic access, the dynamic type is used to determine the component for class reference variables. This is the type of the object to which the reference refers, and not the type used for typing the reference. For interface reference variables the static type is also used for dynamic access, that is, the type that was used to type the reference.

This means that in dynamic access, reference variables that are typed with reference to a superclass and that point to subclasses can be used to access any component of the subclass for which dynamic access is possible. In particular, reference variables of the type `REF TO OBJECT` can be used to access components dynamically. Dynamic access does not allow interface reference variables to be used to access class-specific components and only the corresponding interface components can be accessed. It is not possible to access class-specific components using interface reference variables because the prefix `intf~` is always used implicitly when interface reference variables are used.

The following syntax applies (`oref` is an object reference variable):

In addition to reference variables, the class name can be used to access [static components](ABENSTATIC_COMPONENT_GLOSRY.html) :

In this context, it is important to note that the properties of instance attributes behave like static components. Therefore, in a `LIKE` addition, the class component selector or reference variables can be used to refer to the visible attributes of a class, without first creating an object.

Apart from specifying the name directly, the self-reference `me` can also be used within a class to access its components:

Within a redefined method of a subclass, the [pseudo reference](ABENPSEUDO_REFERENCE_GLOSRY.html)\\ `super` can be used to access the hidden method in one of the superclasses:

As a special method for accessing attributes, the [attributes for key access](ABENCLASS_ATTRIBUTES_AS_KEY.html) to internal tables can be used if they contain reference variables.

Dynamic access to class components is possible for attributes (dynamic access) and for [method calls](ABAPCALL_METHOD_DYNAMIC.html) (dynamic invoke).

Dynamic access to attributes is possible using [dynamic `ASSIGN`](ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS.html) statements on field symbols.

The following variants can be used (`oref` is an object reference variable):

The content of the fields `f, f1` and `f2` is interpreted as descriptors of attributes. In a completely dynamic case, `f` can, for example, have the content '`oref->attr`'. In the case of the partly dynamic specification for instance attributes, `f` only describes the attribute (which itself can in turn describe another attribute). `f1` and `f2` can be class names and static attributes.

The following syntax applies (`oref` is an object reference variable):

`f` and `c` are fields that contain the name of the method `meth` or class `class`.

In the case of a dynamic method call, the actual parameter can be passed dynamically to [specific internal tables](ABAPCALL_METHOD_PARAMETER_TABLES.html), similarly to calling function modules.

-   Access to an instance attribute `attr`: `oref->attr`
-   Call of an instance method `meth`: `oref->meth( ... )`

-   Access to a static attribute `attr`: `class=>attr`
-   Call of a static method `meth`: `class=>meth( ... )`

-   Access to personal attributes `attr` within the class: `me->attr`
-   Call of a personal method `meth` within the same class: `me->meth( ... )`
-   The self-reference allows an object to pass a reference to itself to other objects. In addition, attributes within an object which are hidden by the local attributes of the method can be accessed using methods.

-   Call of an hidden method `meth`: `super->meth( ... )`
-   Within the instance constructor of a subclass, the pseudo reference `super` must be used to call the instance constructor of the direct superclass:
-   Call of the constructor of the direct superclass:
-   `super->constructor( ... )`

-   Completely dynamic specification:
-   `ASSIGN (f) TO <fs>.`
-   Partly dynamic specification for instance attributes:
-   `ASSIGN oref->(f) TO <fs>.`
-   Partly dynamic specification for static attributes:
-   `ASSIGN (f1)=>(f2) TO <fs>.`

-   Call of an instance method `meth`:
-   `CALL METHOD oref->(f)`
-   Call of a static method `meth`:
-   `CALL METHOD class=>(f)`
-   `CALL METHOD (c)=>meth`
-   `CALL METHOD (c)=>(f)`
-   Call of a method `meth` within the same class:
-   `CALL METHOD (f)`
-   `CALL METHOD me->(f)`

abenabap.html abenabap\_reference.html abenabap\_objects.html abenobject.html