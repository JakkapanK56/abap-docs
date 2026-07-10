---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENREF_TYPES_OBJECTS_GUIDL.html"
abapFile: "ABENREF_TYPES_OBJECTS_GUIDL.html"
type: "abap-reference"
---

## Background

As well as [using data types](ABENUSING_TYPES_GUIDL.md) for declarations and typings with the addition `TYPE`, the alternative addition `LIKE` of the corresponding statements can be used to reference the data type of one of the data objects visible at this position directly. This includes references to data objects of the same program, interface parameters of the current procedure, attributes of global classes and interfaces, and constants in type pools.

## Rule

**Declare dependent data objects with reference to other data objects**

If a data object directly depends on another data object, refer to it directly using `LIKE` for the declaration. In all other cases, use `TYPE` to refer to a standalone data type.

## Details

For example, if a helper variable of the type of an input parameter is required within a procedure ([method](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md)), it should not be declared with reference to the type of the parameter using `TYPE` but with reference to the parameter itself using `LIKE`. It is also possible to declare work areas using `LIKE LINE OF` if the parameter is an internal table. In the case of typing with `LIKE`, the type of the parameter can be changed retroactively without always having to adapt the procedure implementation.

However, if no close reference to another data object exists, it is usually more useful to declare data objects with reference to a [standalone data type](ABENBOUND_INDEPENDENT_DTYPE_GUIDL.md) by using `TYPE`.

## Hint

Obsolete references to flat structures or database tables or views of the ABAP Dictionary using `LIKE` should never be implemented.

## Bad Example

The following source code shows the declaration of a helper variable in a method that is supposed to be of the same data type as an interface parameter. The `TYPE` reference to the data type requires a manual implementation of any type changes.

```
CLASS some_class DEFINITION ... 
   PUBLIC SECTION. 
     METHODS some_method 
       CHANGING some_parameter TYPE some_type. 
     ... 
ENDCLASS. 
CLASS some_class IMPLEMENTATION. 
   METHOD some_method. 
     DATA save_parameter TYPE some_type. 
     save_parameter = some_parameter. 
     ... 
   ENDMETHOD. 
   ... 
ENDCLASS.
```

## Good Example

The following source code shows the improved declaration of the helper variable that now directly refers to the interface parameter with `LIKE`, so that possible type changes are automatically accepted.

```
   ... 
    METHOD some_method. 
      DATA save_parameter LIKE some_parameter. 
      save_parameter = some_parameter. 
      ... 
    ENDMETHOD. 
...
```
