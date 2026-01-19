---
title: "ABAPCALL_BADI"
description: |
  ABAPCALL_BADI - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_BADI.htm"
abapFile: "ABAPCALL_BADI.html"
keywords: ["select", "do", "if", "case", "catch", "method", "class", "data", "ABAPCALL", "BADI"]
---

[Short Reference](ABAPCALL_BADI_SHORTREF.html)

``CALL BADI \{ badi->meth [`parameter_list`](ABAPCALL_METHOD_PARAMETERS.html)\ \}\          |\ \{ badi->(meth_name) \{[`parameter_list`](ABAPCALL_METHOD_PARAMETERS.html)\                                |[`parameter_tables`](ABAPCALL_METHOD_PARAMETER_TABLES.html)\}\ \}.``

Calls a [BAdI method](ABENBADI_METHOD_GLOSRY.html). The statement has a static and a dynamic variant. In both variants, a [BAdI reference variable](ABENBADI_REFERENCE_VARIABLE_GLOSRY.html) must be specified for `badi`.

With respect to the addressing of BAdI methods, the BAdI reference variable behaves statically as well as dynamically like an [interface reference variable](ABENINTERFACE_REF_VARIABLE_GLOSRY.html) with the static type of the affected [BAdI interface](ABENBADI_INTERFACE_GLOSRY.html). A BAdI method that is declared as a component of the corresponding BAdI interface is addressed directly using its name. BAdI methods declared in [component interfaces](ABENCOMPONENT_INTERFACE_GLOSRY.html) of the BAdI interface can be addressed using the [interface component selector](ABENINTERFACE_COMP_SELECTOR_GLOSRY.html) or any [alias names](ABENALIAS_GLOSRY.html).

The additions `[parameter_list](ABAPCALL_METHOD_PARAMETERS.html)` or `[parameter_tables](ABAPCALL_METHOD_PARAMETER_TABLES.html)` assign actual parameters to the formal parameters of the BAdI method or handle non-class-based exceptions exactly as described in the [method call](ABENMETHOD_CALLS.html). The exceptions that can occur in dynamic accesses are also the same as those of [`CALL METHOD`](ABAPCALL_METHOD_DYNAMIC.html).

The statement `CALL BADI` calls the specified method in all [object plug-ins](ABENOBJECT_PLUGIN_GLOSRY.html) to which the [BAdI object](ABENBADI_OBJECT_GLOSRY.html) referenced by the `badi` refers.

If a method is added to a BAdI afterwards, it may be missing in a BAdI implementation. In this case the call is executed as if the method existed with an empty implementation. Actual parameters that are bound to `EXPORTING` or `RETURNING` parameters passed by value are initialized. All other actual parameters remain unchanged.

With a regular method call, the system field `sy-subrc` is either set to 0 or, when handling non-class-based exceptions, it is set to the value specified after `EXCEPTIONS`.

`CX_BADI_INITIAL_REFERENCE`

`CX_SY_DYN_CALL_ILLEGAL_METHOD`

-   In the static variant, a [BAdI reference variable](ABENBADI_REFERENCE_VARIABLE_GLOSRY.html) of the static type of a concrete [BAdI class](ABENBADI_CLASS_GLOSRY.html) must be specified for `badi`, and for `meth` a BAdI method of the corresponding [BAdI](ABENBADI_GLOSRY.html) must be specified directly.
-   In the dynamic variant, a [BAdI reference variable](ABENBADI_REFERENCE_VARIABLE_GLOSRY.html) of the static type of the abstract superclass `CL_BADI_BASE` must be specified for `badi`. For `meth_name`, a character-like data object must be specified that must contain the name of a BAdI method in uppercase letters when the statement is executed.

-   If the BAdI is defined for single use, `badi` must contain a valid [BAdI reference](ABENBADI_REFERENCE_GLOSRY.html) for a static BAdI call. If `badi` is initial, a catchable exception is raised.
-   If the BAdI is defined for multiple use, `badi` must contain a valid [BAdI reference](ABENBADI_REFERENCE_GLOSRY.html) for a static BAdI call or can be initial. If the referenced BAdI object refers to multiple object plug-ins, the call order is the same for every `CALL BADI` statement. The exact call order can be determined in the definition of the associated [BAdI implementations](ABENBADI_IMPLEMENTATION_GLOSRY.html) if the predefined BAdI `BADI_SORTER` of the identically named enhancement spot was implemented for the current BAdI. If the referenced BAdI object does not reference object plug-ins, or the `badi` is initial, the statement has no effect.
-   In a dynamic BAdI call, a catchable exception is always raised if there is an invalid BAdI reference in `badi`.

-   BAdI objects and BAdI references can only be created using the statement [`GET BADI`](ABAPGET_BADI.html).
-   The call of a BAdI method of a BAdI defined for single use behaves like a method call with `meth( ...)`: the called method must exist. In contrast, calls of a BAdI method defined for multiple use are more like raising an event using `RAISE EVENT`: One or more methods can exist, or no methods at all.
-   The addition [`DEFAULT`](ABAPMETHODS_DEFAULT.html) can be used when defining a BAdI method in a BAdI interface to define the behavior for methods that are not implemented.
-   In the terminology of the [ABAP Enhancement Framework](ABENENHANCEMENT_FRAMEWORK_GLOSRY.html), the statement `CALL BADI` is known as an [enhancement spot element call](ABENENHANCEMENT_SPOT_INVOC_GLOSRY.html).

-   *Cause:* The reference variable `badi` is initial either for the static call, although the BAdI was defined for single use, or for the dynamic call.

-   *Cause:* Method does not exist at the dynamic call
    *Runtime error:*\\ `DYN_CALL_METH_NOT_FOUND`

abenabap.html abenabap\_reference.html abenenhancement\_framework.html abenbadi\_enhancement.html