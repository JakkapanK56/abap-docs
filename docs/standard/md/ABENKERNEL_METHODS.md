---
title: "Value with length specified"
description: |
  EXCEPTION_SET_C_UC EXCEPTION_SET_INT Value with null termination The ABAP program `RSKMETH` is used as a browser for the registration of kernel modules. It can be used to determine which C functions are registered for which kernel methods and which arguments/exceptions are registered for them
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENKERNEL_METHODS.htm"
abapFile: "ABENKERNEL_METHODS.html"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "ABENKERNEL", "METHODS"]
---

For **internal use**, kernel methods can be implemented in the [ABAP kernel](ABENKERNEL_GLOSRY.html) instead of in the ABAP language.

Kernel methods provide the option of directly calling the ABAP kernel functions implemented in C or C++. Kernel methods replace the previous concepts of [C calls](ABAPCALL-.html) and system calls. The introduction of new C calls and system calls should be avoided.

Kernel methods offer the same checks and security features as regular ABAP methods. Except for the [constructors](ABENCONSTRUCTOR.html) and the [C destructor](ABENC_DESTRUCTOR.html), all ABAP methods can be implemented as kernel methods. An ABAP method can furthermore be redefined as a kernel method and a kernel method can still be redefined as an ABAP method within a path of the inheritance hierarchy.

For C developers who want to implement a kernel method, an API is available that enables simple, high-performance, and secure access to arguments. [Class-based exceptions](ABENEXCEPTIONS.html) also continue to be supported.

A kernel method is declared like a regular ABAP method, either in the [Class Builder](ABENCLASS_BUILDER_GLOSRY.html) or in the declaration part of a local class. Whether a method is implemented as a kernel method is completely irrelevant for the declaration. In ABAP, this means that a kernel method can be used just like a regular ABAP method.

The determination of a method as a kernel method is made in the implementation part of the class using the optional addition [`BY KERNEL MODULE kmod1 kmod2 ...`](ABAPMETHOD_KERNEL_MODULE_INTERNAL.html) of the statement [`METHOD`](ABAPMETHOD.html). `kmod1`, `kmod2`, ... are the names of kernel modules that implement the method. The ABAP implementation of a kernel method must be empty, which means that there must be no ABAP statements between `METHOD` and `ENDMETHOD`:

METHOD meth BY KERNEL MODULE kmod1 kmod2 ...\\ 
ENDMETHOD.

[Constructors](ABENCONSTRUCTOR.html) and the [C destructor](ABENC_DESTRUCTOR.html) cannot be implemented as kernel methods. There is a separate mechanism for the C Destructor.

After `KERNEL MODULE`, a list of kernel modules `kmod1`, `kmod2`, ... can be specified. Currently, only C functions of the kernel can be specified for `kmod1`, `kmod2`, ....The list after `KERNEL MODULE` is evaluated by the compiler from left to right. The first kernel module in the list that is registered in the kernel (see below) is used during generation.

If no valid kernel module is found in the list, a syntax error occurs. There are also two standard C functions that can appear at the end of the list: `FAIL` and `IGNORE`. If one of these functions is specified at the end of the list, a syntax error is avoided if no valid module is found in the previous list. `IGNORE` is used to ignore the call of a kernel method of this type (behavior as in an empty ABAP implementation); for `FAIL`, a catchable exception of the class `CX_SY_DYN_CALL_ILLEGAL_METHOD` is raised.

The following code snippets show how the kernel is searched:

First, the kernel is searched for `xx_impl_630`. Then the kernel is searched for `xx_impl_620`, and finally for `xx_impl_610`. If none of these functions are found, a syntax error occurs.

First, the kernel is searched for `xx_impl_630`. Then the kernel is searched for `xx_impl_620`. If neither of these functions are found, a syntax error is not raised, but a catchable exception of the class `CX_SY_DYN_CALL_ILLEGAL_METHOD` is raised when the method is called.

First, the kernel is searched for `xx_impl_620`. Then the kernel is searched for `xx_impl_620`. If none of the functions are found, a syntax error is not raised, but the empty ABAP implementation is called instead, when the method is called.

Currently, only C functions can be used as kernel modules of kernel methods. The C functions can have any position in the kernel. No special includes of the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) are required for implementing the C function. The C functions must have a specific interface. The interface itself is wrapped by a [macro](ABENMACRO_GLOSRY.html) called `ARGUMENTS`. All required definitions and prototypes are in the include `//src/include/abkmeth.h`. This is the only include needed for defining C functions for kernel methods.

Since C functions can be defined in C and C++, you must use `externC` in C++:

#include "abkmeth.h" \\n... \\nexternC void name\_of\_cmodule( ARGUMENTS ) \\n\\{ \\n... \\n\\}

A C function that implements a kernel method must be registered for the kernel method. If, after `METHOD meth BY KERNEL MODULE`, the name of a C function is specified that was not registered for the kernel method, the syntax error mentioned above occurs. Multiple C functions can be registered for a kernel method. The sequence of the kernel modules `kmod1`, `kmod2`, ... specified in the list after `METHOD meth BY KERNEL MODULE` defines which of the registered C functions is used. This allows further downward-compatible development of kernel methods.

To make changes to the registration active, the target `lib` of the project `krn/runt` must be recompiled and the kernel relinked.

C functions are registered in the signature file `//src/krn/runt/abkmeth.sig` using the following syntax for kernel methods where all ABAP IDs must be specified in uppercase letters:

KERNEL\_METHOD("CLASS","METH", cfunc,argcnt)

This definition registers the C function `cfunc` for the kernel method `meth` of a global class `class`. The C function expects a number of `argcnt` arguments.

Kernel methods of local classes in class pools or other ABAP programs are registered using the following macros:

KERNEL\_METHOD\_CLASS\_LOCAL("GCLASS","CLASS","METH",cmodule,argcnt)

KERNEL\_METHOD\_PROGRAM\_LOCAL("PROG","CLASS","METH",cmodule,argcnt)

The effect is the same as with `KERNEL_METHOD`, except that the global class `gclass` must be specified for local classes in class pools and the program `prog` for program-local classes.

All ABAP data objects, such as parameters, attributes, or global data, which are to be accessed in C functions for kernel methods, are handled as arguments of the C function.

The argument list of a C function for a kernel method is not limited to the interface parameters of the ABAP method and does not have to contain these completely. Before arguments can be accessed within C functions for kernel methods, they must also be registered.

The `argcnt` arguments must be registered immediately after the C function is registered using `KERNEL_METHOD`. A single argument is defined (registered) using one of the following macros:

ARGUMENT\_basetype(index,"name",type\_kind,"type",read\_write)

ARGUMENT\_\[C|N|X\](index,"name",type\_kind,"type",read\_write,length)

ARGUMENT\_P(index,"name",type\_kind,"type",read\_write,length,decimals)

ARGUMENT\_STRUCT(index,"name",type\_kind,"type",read\_write,ctype)

These [macros](ABENMACRO_GLOSRY.html) define an argument with the name `name` and an index `index`.

`basetype` must be used to assign the actual type of the ABAP data object according to the following table. If the `basetype` is `C`, `N`, *X*, `P`, or `STRUCT`, more parameters must be specified than for the other types.

The macro parameters have the following meanings:

After registering the arguments, the following macros can be used to access them within the C function. Except for direct access to the data control block, the access macros do not require any includes from the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html).

ARGUMENT\_basetype\_READ(index,"name");

This [macro](ABENMACRO_GLOSRY.html) returns the read address of an argument with the type `const ctype`, where `ctype` is defined by `basetype` according to the table above. The index and name of the argument must be passed. Additional parameters must be specified for the generic types (see below). Only the index is needed to access the argument. However, to make the C function more legible to execute additional consistency checks, the name must also be specified. If the kernel is compiled in debugging mode, the system performs a consistency check between the index and name; the specified C type and the ABAP type of the argument are still checked. In the case of an error, an appropriate ABAP runtime error is raised (`KMETH_INVALID_ARGUMENT_ID`, `KMETH_INVALID_ARGUMENT_NAME`, or `KMETH_INVALID_CTYPE_LENG`). No checks are performed in the optimized kernel.

ARGUMENT\_basetype\_WRITE(index,"name");

This macro has the same semantics as `ARGUMENT_basetype_READ`. However, the system returns the write address. The system also checks whether the argument was defined as a write argument. Write access to a read-only argument (for example, a constant), this raises the ABAP runtime error `KMETH_ARGUMENT_READ_ONLY`.

ARGUMENT\_\[C|N\]\_READ(index,"name",lengthU);\\ 
ARGUMENT\_\[C|N\]\_WRITE(index,"name",lengthU);\\ 
ARGUMENT\_X\_READ(index,"name",lengthR);\\ 
ARGUMENT\_X\_WRITE(index,"name",lengthR);

If these macros are used, the expected length in bytes `lengthR` or in characters `lengthU` must be specified for the generic types `c`, `x`, and `n`.

ARGUMENT\_P\_READ(index,"name",lengthR,decimals);\\ 
ARGUMENT\_P\_WRITE(index,"name",lengthR,decimals);

If these macros are used, the expected length must be specified in bytes (`lengthR`) and the number of decimal places (`decimals`) for the generic type `p`.

ARGUMENT\_\[C\_GENERIC|N\_GENERIC|CLIKE\]\_READ(index,"name",size\_tU);\\ 
ARGUMENT\_\[C\_GENERIC|N\_GENERIC|CLIKE\]\_WRITE(index,"name",size\_tU);\\ 
ARGUMENT\_X\_GENRIC\_READ(index,"name",size\_tR);\\ 
ARGUMENT\_X\_GENERIC\_WRITE(index,"name",size\_tR);

If these macros are used, a variable of the type `size_tU` or `size_tR` containing the length in bytes or characters must be specified for the types `C_GENERIC`, `X_GENERIC`, `N_GENERIC`, and `CLIKE`.

ARGUMENT\_P\_GENERIC\_READ(index,"name",size\_tR,decimals);\\ 
ARGUMENT\_P\_GENERIC\_WRITE(index,"name",size\_tR,decimals);

If these macros are used, a variable `decimals` for the [decimal places](ABENFRACT_DIGIT_GLOSRY.html), as well as the length `size_tR` must be specified for the type `P_GENERIC`.

ARGUMENT\_STRUCT\_READ(index,"name",ctype);\\ 
ARGUMENT\_STRUCT\_READ(index,"name",ctype);

With these macros, a suitable C type `ctype` must be specified for all structured types `STRUCT`.

ARGUMENT\_C\_POINTER(index,"name");

This [macro](ABENMACRO_GLOSRY.html) is used specifically for the type `%_c_pointer`. This type is a special internal ABAP type that has exactly the byte length of a C pointer (4, 8, or 16 bytes, depending on platform). The type is always mapped to the built-in ABAP type `x`. The macros for the type *X* or `X_GENERIC` are not used due to the variable length and platform-dependency.

ARGUMENT\_IS\_SUPPLIED(index,"name");

This macro has the same semantics as the [predicate expression](ABENPREDICATE_EXPRESSION_GLOSRY.html)\\ `IS SUPPLIED` in ABAP. The same consistency checks are executed as for `ARGUMENT_READ`.

ARGUMENT\_DATA(index,"name",ctype);

This macro returns the data control block with the C type `const DATA *`. The same consistency checks are executed as for `ARGUMENT_READ`. The macro is only active if the include `//src/include/abdata.h` of the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) was included.

C functions that implement kernel methods can raise [class-based exceptions](ABENEXCEPTIONS.html).

The prerequisite is that the relevant **global** exception classes must be registered with an extension of `//src/include/abexcpc.h`. Local exception classes cannot be registered.

The exception class is declared in `//src/include/abexcpc.h` and any text IDs are defined:

//src/include/abexcpc.h \\n... \\nCX\_ABSTR (CX\_..., "CX\_...") \\nCX\_TXTID (CX\_...\_bar, CX\_..., "BAR")  /\* special text for class \*/ \\n...

Classes can also be declared with their standard text only:

//src/include/abexcpc.h \\n... \\nCX\_CLASS (CX\_..., "CX\_...")           /\* class with standard text \*/ \\n...

The exact documentation is in the file `//src/include/abexcpc.h`.

The file `//src/include/abexcpa.h` must be extended so that any attributes of an exception class in a C function can be populated, whereby the name, internal type according to `//src/include/abtypes.h)` and the byte length below must be specified:

//src/include/abexcpa.h \\n... \\nCX\_ATTR (CX\_...\_attr1, CX\_..., "ATTR1", TYPCSTRING, sizeofR(StrRef)) \\nCX\_ATTR (CX\_...\_attr2, CX\_..., "ATTR2", TYPC, LEN\_UC2RAW(30)) \\n...

Finally, exceptions should be registered as well as arguments in the file `//src/krn/runt/abkmeth.sig`. This is not enforced but, during the syntax check, only registered exceptions are checked for their existence:

//src/krn/runt/abkmeth.sig \\n... \\nEXCEPTION(CX\_...) \\n...

A C function can raise an exception by calling the following macros consecutively:

EXCEPTION\_CREATE(CX\_...\_bar);\\ 
EXCEPTION\_SET\_CSTRING(CX\_...\_attr1, value, valueLength);\\ 
EXCEPTION\_SET\_C      (CX\_...\_attr2, value, valueLength);\\ 
EXCEPTION\_RAISE();

Within the macros `EXCEPTION_CREATE` or `EXCEPTION_RAISE`, there is always a long jump to Extri, which means that the C function that implements the kernel method is exited in a long jump and the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) takes control. Therefore, the C function should release its temporary memory before raising an exception! If the exception is caught in ABAP using [`CATCH`](ABAPCATCH_TRY.html) without the addition `INTO`, the long jump takes place in `EXCEPTION_CREATE`. If the exception is caught using the addition `INTO` (the exception object is used) or not caught at all, the long jump takes place in `EXCEPTION_RAISE`.

The exceptions are processed in the runtime framework, as if they were raised in ABAP and the same dynamic checks are executed.

Currently, the following [macros](ABENMACRO_GLOSRY.html), which can be expanded if necessary, are available for setting exception attributes. Strings, integer and C fields are supported. See the above sequence for use.

EXCEPTION\_SET\_CSTRING\_UC\\ 
EXCEPTION\_SET\_C

Value with length specified

EXCEPTION\_SET\_C\_UC\\ 
EXCEPTION\_SET\_INT

Value with null termination

The ABAP program `RSKMETH` is used as a browser for the registration of kernel modules. It can be used to determine which C functions are registered for which kernel methods and which arguments/exceptions are registered for them. This is helpful when analyzing syntax errors, since kernel methods process information that is only visible in the kernel modules.

The following example is a simplified calculation class for floating decimal place numbers. The class has an instance attribute in which always the last result of each calculation is stored. A method executes a division and is implemented as a kernel method. If the divisor is zero, the method raises a class-based exception.

CLASS cl\_my\_calculation DEFINITION ... \\n... \\n  DATA last\_result TYPE decfloat16. \\n... \\n  METHODS div \\n    IMPORTING p\_dividend TYPE decfloat16 p\_divisor TYPE decfloat16 \\n    RETURNING VALUE(p\_result) TYPE decfloat16. \\n... \\nENDCLASS.

... \\nKERNEL\_METHOD(CL\_MY\_CALCULATION, DIV, xx\_myDiv,4) \\n  ARGUMENT\_F(1, "P\_DIVIDEND",     TYPE, "F", READ) \\n  ARGUMENT\_F(2, "P\_DIVISOR",      TYPE, "F", READ) \\n  ARGUMENT\_F(3, "P\_RESULT",       TYPE, "F", WRITE) \\n  ARGUMENT\_F(4, "ME->LAST\_RESULT",TYPE, "F", WRITE) \\n  EXCEPTION("CX\_MY\_DIV\_BY\_ZERO") \\n...

#include "abkmeth.h" \\n... \\nexternC void xx\_myDiv( ARGUMENTS )\\{ \\n\\ \\n  const SAP\_DOUBLE \*const dividend = ARGUMENT\_F\_READ(1,"P\_DIVIDEND"); \\n  const SAP\_DOUBLE \*const divisor  = ARGUMENT\_F\_READ(2,"P\_DIVISOR"); \\n  SAP\_DOUBLE \*result               = ARGUMENT\_F\_WRITE(3,"P\_RESULT"); \\n  SAP\_DOUBLE \*last\_result          = ARGUMENT\_F\_WRITE(4,"ME->LAST\_RESULT"); \\n\\ \\n  if( 0 == \*divisor ) \\n  \\{ \\n    EXCEPTION\_CREATE(CX\_MY\_DIV\_BY\_ZERO); \\n    EXCEPTION\_RAISE(); \\n  \\} \\n\\ \\n  \*result = \*dividend / \*divisor; \\n  \*last\_result = \*result; \\n\\ \\n\\}

CLASS cl\_my\_calculation IMPLEMENTATION. \\n... \\nMETHOD div BY KERNEL MODULE xx\_myDiv. \\nENDMETHOD. \\n... \\nENDCLASS.

-   `name` is the identification of any ABAP data object in uppercase letters that could also be used in an ABAP implementation of the kernel method. In particular, the identifier can contain relationships specified using component selectors, for example `me->attr` or `struc-comp`.
-   `index` is a sequential number from 1 to `argcnt`. The arguments are accessed using this index.
-   For `type_kind` you can specify either `TYPE` or `TYPE_REF_TO`.
-   `type` is the identifier of any ABAP data type in uppercase letters that could also be used in an ABAP implementation of the kernel method. `type_kind` and `type` are used to check the interface of the kernel method in ABAP.
-   For `read_write`, either `READ` or `WRITE` can be specified. This determines whether there is read or write access to the argument and is evaluated in the access macros.
-   In the case of `ARGUMENT_[C|N|X|P]`, `length` must be used to specify the length of all ABAP data types with a generic length. For `c` and `n` in characters and in bytes for `x` and `p`.
-   When using `ARGUMENT_P`, `decimals` must be used to specify the number of [decimal places](ABENFRACT_DIGIT_GLOSRY.html).
-   For `ARGUMENT_STRUCT`, `ctype` must be used to specify a suitable C type. This type should be generated from an ABAP type definition using `saphfile`.

METHOD meth BY KERNEL MODULE xx\_impl\_630 xx\_impl\_620 xx\_impl\_610. METHOD meth BY KERNEL MODULE xx\_impl\_630 xx\_impl\_620 FAIL. METHOD meth BY KERNEL MODULE xx\_impl\_620 xx\_impl\_610 IGNORE. **`basetype`** **ABAP Data Type** **Type in C** `C` `c` with specified length `SAP_CHAR (*) [Length]` `C_GENERIC` `c` without specified length `SAP_CHAR*` *X* `x` with specified length `SAP_RAW (*) [Length]` `X_GENERIC` `x` without specified length `SAP_RAW*` `N` `n` with specified length `SAP_CHAR (*) [Length]` `N_GENERIC` `n` without specified length `SAP_CHAR*` `P` `p` with specified length and decimals `SAP_BCD (*) [Length]` `P_GENERIC` `p` without specified length and decimals `SAP_BCD*` `D` `d` `SAP_DATE*` `T` `t` `SAP_TIME*` `UTCLONG` `utclong` `SAP_LLONG*` *I* `i` `SAP_INT*` `INT1` `b` `SAP_INT1*` `INT2` `s` `SAP_SHORT*` `INT8` `int8` `SAP_LLONG*` `F` `f` `SAP_DOUBLE*` `DECFLOAT16` `decfloat16` `DecFloat16` `DECFLOAT34` `decfloat34` `DecFloat34` `STRING` `string` `StrRef*` `XSTRING` `xstring` `StrRef*` `TABLE` All table types `TABH_REF*` `OBJ_REF` All object references `ObjRef*` `DATA_REF` All data references `FldRef*` `STRUCT` All structure types Registered type `ctype*` `ANY` `any` `void*` `DATA` `data` `void*` `SIMPLE` `simple` `void*` `CSEQUENCE` `csequence` `void*` `XSEQUENCE` `xsequence` `void*` `NUMERIC` `numeric` `void*` `CLIKE` `clike` `SAP_CHAR*` `C_POINTER` `%_c_pointer` `void**` abenabap.html abenabap\_reference.html abenabap\_objects.html abenclasses.html abenclass\_components.html abenclass\_methods.html