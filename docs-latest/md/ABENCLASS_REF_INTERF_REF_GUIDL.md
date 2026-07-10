---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCLASS_REF_INTERF_REF_GUIDL.html"
abapFile: "ABENCLASS_REF_INTERF_REF_GUIDL.html"
type: "abap-reference"
---

## Background

Interface components in objects can be addressed using a class reference variable or an interface reference variable. If you use a class reference variable, the interface component is addressed using the name of the interface and the interface component selector (`~`). If you use a suitable interface reference variable, the component is addressed directly using its name.

## Rule

**Address interface components using interface reference variables**

From outside a class, only access its interface components using a relevant interface reference variable; do not use the interface component selector (`~`).

## Details

Accessing interface components externally using an interface reference variable makes code easier to understand because it is clear that the user of the class is interested in exactly the aspect provided by the interface. Accessing interface components using a class reference variable, on the other hand, suggests that components are used that are not provided by an interface. As a rule, only use the interface component selector within classes and interfaces, to address the interfaces included there. If you want to provide an interface component of an included interface as a separate component, you can declare an alias name by using `ALIASES`.

## Bad Example

The following source code shows an interface method call using a class reference variable and the interface component selector (~); this is not recommended, as mentioned in the rule above.

```
CLASS cl_class DEFINITION PUBLIC. 
  PUBLIC SECTION. 
    INTERFACES if_intf. 
  ... 
ENDCLASS. 
... 
    DATA cref TYPE REF TO cl_class. 
    ... 
    cref->if_intf~meth( ). 
    ...
```

## Good Example

The following source code shows the method call from the above example, but using an interface reference variable. Instead of `cref->if_intf~meth`, `iref->meth` is used to express that components of a class are accessed that are on the same hierarchy level as all public components, but in another part of the public interface.

```
CLASS cl_class DEFINITION PUBLIC. 
  PUBLIC SECTION. 
    INTERFACES if_intf. 
     ... 
ENDCLASS. 
... 
     DATA iref TYPE REF TO if_intf. 
     ... 
     iref->meth( ). 
     ...
```
