---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENREF_TRANSF_GLOBAL_DATA_GUIDL.html"
abapFile: "ABENREF_TRANSF_GLOBAL_DATA_GUIDL.html"
type: "abap-reference"
---

## Background

In a local context you can normally directly access the [data objects](ABENDATA_TYPE_OBJ_GDL.md) of superordinate more global contexts. For example, it is possible in a method to perform writes on the attributes of its class and on any global data of the current program.

Therefore, if a more global data object is passed to a procedure by reference, access is granted there both through its name and the formal parameter.

## Rule

**Do not pass global data to local contexts using pass by reference**

Do not use global data as actual parameters for formal parameters of procedures if you can change them in the procedure in another way, and the parameter is passed by reference.

## Details

If a global data object that has also been passed by reference is changed in a procedure ([method](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md)), this also changes the formal parameter and vice versa. This behavior is not usually anticipated when writing the procedure.

Global data is only supposed to be passed to formal parameters for which [pass by value](ABENTYPE_TRANSF_FORMAL_PARA_GUIDL.md) is declared, or to procedures that are guaranteed not to have any unwanted consequences for this data.

## Bad Example

After the `do_something` method has been called in the `main` method in the following source code, the `attr` attribute contains the unexpected value `2.0`, because the first assignment to the `c_value` changing parameter, which has been passed by reference, also changes `attr`.

```
CLASS class DEFINITION. 
   PUBLIC SECTION. 
     METHODS 
       main. 
   PRIVATE SECTION. 
     DATA 
       attr TYPE p DECIMALS 2. 
     METHODS 
       do_something CHANGING c_value TYPE numeric. 
ENDCLASS. 
CLASS class IMPLEMENTATION. 
   METHOD main. 
     attr = '1.23'. 
     do_something( CHANGING c_value = attr ). 
   ENDMETHOD. 
   METHOD do_something. 
     ... 
     c_value = floor( attr ). 
     ... 
     c_value = c_value + attr. 
     ... 
   ENDMETHOD. 
ENDCLASS.
```

## Good Example

If the pass by reference method in the method declaration of `do_something` in the above example is converted into a pass by value method, as shown in the following source code, the `attr` attribute contains the expected value `2.23` after the method has been called.

```
... 
     METHODS 
       do_something CHANGING VALUE(c_value) TYPE numeric. 
...
```
