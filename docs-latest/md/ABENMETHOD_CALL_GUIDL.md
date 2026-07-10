---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMETHOD_CALL_GUIDL.html"
abapFile: "ABENMETHOD_CALL_GUIDL.html"
type: "abap-reference"
---

## Background

Static calls of methods can be formulated in two different ways. The [obsolete long form](ABAPCALL_METHOD_STATIC.md)

CALL METHOD meth EXPORTING ...

is based on the notation of the function module call. Alternatively, a [short form](ABAPCALL_METHOD_STATIC_SHORT.md) can be used:

meth( ... ).

This form uses a parenthesis notation instead of the initiating ABAP words [`CALL METHOD`](ABAPCALL_METHOD_STATIC.md). A combination of CALL METHOD and parentheses is also possible.

## Rule

**Formulate** **static method calls without** `CALL METHOD`

Use the long form of the method call using `CALL METHOD` only for dynamic method calls.

## Details

The short form of the static method call is clearer. The redundant ABAP words `CALL METHOD` provide no additional information to the reader. Using the short form, self-contained method calls have the same appearance as functional method calls on operand positions. For dynamic method calls, the long form with `CALL METHOD` is required by the syntax. If it is only used there, the different notations provide the reader with another distinguishing feature between the static and dynamic method call.

## Bad Example

The following source code shows the long form of a static method call using `CALL METHOD`, which is no longer recommended.

```
... 
CALL METHOD cl_class=>do_something 
  EXPORTING 
    some_input = value1 
  IMPORTING 
    some_output = value2 
  CHANGING 
    some_change = value3. 
...
```

The following source code shows the same static method call as above, but with parentheses inserted. In this form, which also has correct syntax, either `CALL METHOD` or the parentheses are superfluous.

```
... 
CALL METHOD cl_class=>do_something( 
  EXPORTING 
    some_input = value1 
  IMPORTING 
    some_output = value2 
  CHANGING 
    some_change = value3 ). 
...
```

## Good Example

The following source code shows the same method call as above, but as recommended, without `CALL METHOD`. If a method has only importing parameters, `IMPORTING` and `CHANGING` can be omitted, and also the `EXPORTING` addition. If it is a single importing parameter, its name can also be omitted.

```
... 
cl_class=>do_something( 
  EXPORTING 
    some_input = value1 
  IMPORTING 
    some_output = value2 
  CHANGING 
    some_change = value3 ). 
...
```
