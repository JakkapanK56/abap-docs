---
title: "Class References and Interface References - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_ref_interf_ref_guidl.htm"
abapFile: "abenclass_ref_interf_ref_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Architecture](ABENARCHITECTURE_GUIDL.md) →  [Object-Oriented Programming](ABENOBJ_ORIENTED_GUIDL.md) → 

Class References and Interface References

Background

Interface components in objects can be addressed using a class reference variable or an interface reference variable. If you use a class reference variable, the interface component is addressed using the name of the interface and the interface component selector (~). If you use a suitable interface reference variable, the component is addressed directly using its name.

Rule

Address interface components using interface reference variables

From outside a class, only access its interface components using a relevant interface reference variable; do not use the interface component selector (~).

Details

Accessing interface components externally using an interface reference variable makes code easier to understand because it is clear that the user of the class is interested in exactly the aspect provided by the interface. Accessing interface components using a class reference variable, on the other hand, suggests that components are used that are not provided by an interface. As a rule, only use the interface component selector within classes and interfaces, to address the interfaces included there. If you want to provide an interface component of an included interface as a separate component, you can declare an alias name by using ALIASES.

Bad Example

The following source code shows an interface method call using a class reference variable and the interface component selector (~); this is not recommended, as mentioned in the rule above.

CLASS cl\_class DEFINITION PUBLIC.
  PUBLIC SECTION.
    INTERFACES if\_intf.
  ...
ENDCLASS.
...
    DATA cref TYPE REF TO cl\_class.
    ...
    cref->if\_intf~meth( ).
    ...

Good Example

The following source code shows the method call from the above example, but using an interface reference variable. Instead of cref->if\_intf~meth, iref->meth is used to express that components of a class are accessed that are on the same hierarchy level as all public components, but in another part of the public interface.

CLASS cl\_class DEFINITION PUBLIC.
  PUBLIC SECTION.
    INTERFACES if\_intf.
     ...
ENDCLASS.
...
     DATA iref TYPE REF TO if\_intf.
     ...
     iref->meth( ).
     ...
