---
title: "ABAPGET_BADI"
description: |
  ABAPGET_BADI - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGET_BADI.htm"
abapFile: "ABAPGET_BADI.html"
keywords: ["select", "do", "if", "case", "catch", "method", "class", "data", "internal-table", "ABAPGET", "BADI"]
---

[Short Reference](ABAPGET_BADI_SHORTREF.html)

`GET BADI \{ badi [FILTERS f1 = x1 f2 = x2 ...]\ \}`\\ 
       `|\ \{ badi TYPE (name)`\\ 
              `[\ \{FILTERS f1 = x1 f2 = x2 ...\}`\\ 
              `|\ \{FILTER-TABLE ftab\}]\ \}`\\ 
              `[CONTEXT con].`

[1. `... FILTERS f1 = x1 f2 = x2 ...`](#ABAP_ADDITION_1@3@)

[2. `... FILTER-TABLE ftab`](#ABAP_ADDITION_2@3@)

[3. `... CONTEXT con`](#ABAP_ADDITION_3@3@)

This statement creates a new [BAdI object](ABENBADI_OBJECT_GLOSRY.html) and sets the [BAdI reference](ABENBADI_REFERENCE_GLOSRY.html) to the object in a [BAdI reference variable](ABENBADI_REFERENCE_VARIABLE_GLOSRY.html)\\ `badi`. This statement has a static and a dynamic variant.

To specify values for the filters of the BAdI, the addition `FILTERS` can be specified in the static variant, or the addition `FILTER-TABLE` in the dynamic variant.

In the case of a context-free BAdI, the addition `CONTEXT` cannot be specified. In the case of a context-dependent BAdI, however, it must be specified.

After instantiation, the system searches for [BAdI implementation classes](ABENBADI_IMPLEMENT_CLASS_GLOSRY.html) for the BAdI as follows:

If the resulting hit list matches the definition of the BAdI which means:

references to [object plug-ins](ABENOBJECT_PLUGIN_GLOSRY.html) of the found BAdI implementations are stored in the BAdI object. [Object plug-ins](ABENOBJECT_PLUGIN_GLOSRY.html) that do not yet exist are created for this purpose. Whether an existing object plug-in is reused or whether a new object plug-in is created depends on whether the BAdI is context-free or context-dependent, and also depends on the addition `CONTEXT`. The precise semantics are described in the addition.

If the hit list contains no or multiple BAdI implementations although the BAdI is defined for single use, an exception occurs. If the BAdI reference variable `badi` contained a valid BAdI reference before the statement in an exception case, this is retained, otherwise it is initialized.

After the addition `FILTERS`, the elementary data objects `x1`, `x2`, ... must be specified for all `f1`, `f2`, ... filters of the BAdI. If a filter in the BAdI has the property *Constant Filter Value at Call*, only [literals](ABENABAP_LITERAL_GLOSRY.html) and [constants](ABENCONSTANT_GLOSRY.html) can be specified. The data objects must be compatible with the data type of the filters. `FILTERS` cannot be specified for a BAdI without filters.

Using the special internal table `ftab`, this addition assigns values to the filters of a dynamically specified BAdI. The internal table must have table type `BADI_FILTER_BINDINGS` from the ABAP Dictionary. When the statement `GET BADI` is executed, the table must contain exactly one line for each of the filters of the BAdI. The table columns are:

The column `NAME` is the unique key of the sorted table `ftab`.

Using the addition `CONTEXT`, an [object reference variable](ABENOBJECT_REFER_VARIABLE_GLOSRY.html)\\ `con` must be specified for context-dependent BAdIs, whose static type is or includes the [tag interface](ABENTAG_INTERFACE_GLOSRY.html)\\ `IF_BADI_CONTEXT`, and which contains a reference to a [BAdI context object](ABENBADI_CONTEXT_OBJECT_GLOSRY.html). If `con` is initial, an exception is raised. The addition `CONTEXT` cannot be entered for context-free BAdIs.

The addition `CONTEXT` controls how the object plug-ins are created as follows:

If a BAdI implementation class implements multiple [BAdI interfaces](ABENBADI_INTERFACE_GLOSRY.html) and `GET BADI` is executed within an internal session for multiple of these BAdIs, multiple BAdI objects can point to the same object plug-in. This enables the sharing of data between different BAdIs. For context-free BAdIs, this is only the case for reuse. For context-dependent BAdIs, multiple BAdI objects from the same context can point to the same object plug-ins.

`CX_BADI_CONTEXT_ERROR`

`CX_BADI_FILTER_ERROR`

`CX_BADI_INITIAL_CONTEXT`

`CX_BADI_MULTIPLY_IMPLEMENTED`

`CX_BADI_NOT_IMPLEMENTED`

`CX_BADI_UNKNOWN_ERROR`

-   In the case of the static variant, the addition `TYPE` is not specified. The static type of the reference variable `badi` must be a [BAdI](ABENBADI_GLOSRY.html) and determines which BAdI is used.
-   In the case of the dynamic variant, a character-like data object `name` is specified for the addition `TYPE`. When the statement is executed, this object must contain the name of a BAdI. The static type of the reference variable `badi` must be the superclass `CL_BADI_BASE` of all BAdI classes.

-   For a BAdI defined for single use, the hit list must contain exactly one BAdI implementation class,
-   For a BAdI defined for multiple use, the hit list may contain multiple or no BAdI implementation classes,

-   It is not possible to access BAdI objects directly using BAdI references. The references are only used to call the [BAdI methods](ABENBADI_METHOD_GLOSRY.html) in the referenced object plug-ins with the statement [`CALL BADI`](ABAPCALL_BADI.html). Otherwise, BAdI reference variables can be used in the same operand positions as regular [object reference variables](ABENOBJECT_REFER_VARIABLE_GLOSRY.html). In particular, this means that assignments and comparisons are possible.
-   The method `NUMBER_OF_IMPLEMENTATIONS` of the class `CL_BADI_QUERY` returns the number of BAdI implementations that are stored in a BAdI object.
-   To prevent the exception for BAdIs that are defined for single use in systems in which no corresponding enhancement is made, it is recommended that a fallback BAdI implementation class is specified for these BAdIs. The fallback BAdI implementation class is part of the BAdI and is independent of enhancements.
-   To access object plug-ins directly requires the corresponding references. These can be returned, for example, by BAdI methods.
-   The BAdI reference cannot be used to handle any instance events of a BAdI. Instead, when the [event handler](ABENEVENT_HANDLER_GLOSRY.html) is registered, either the addition `FOR ALL INSTANCES` must be specified using [`SET HANDLER`](ABAPSET_HANDLER.html), or a reference to an object plug-in must be specified directly.
-   The statement `GET BADI` prepares an [enhancement spot element call](ABENENHANCEMENT_SPOT_INVOC_GLOSRY.html) and can therefore be seen as part of an explicit [enhancement option](ABENENHANCEMENT_POINT_GLOSRY.html) in the terminology of the [ABAP Enhancement Framework](ABENENHANCEMENT_FRAMEWORK_GLOSRY.html).

-   `NAME` of type `c` and length 30
-   for the name of the filter in uppercase letters. Declaring a nonexistent filter raises an uncatchable exception.
-   `VALUE` of the type `REF TO data`
-   As a pointer to a matching data object. The value of the data object to which the reference variable in `VALUE` refers is assigned to the filter specified in `NAME`.

-   Without the addition `CONTEXT`, that is, for context-free BAdIs, the way the object plug-ins are created is based on the setting of the BAdI. Either new plug-ins are created every time the statement `GET BADI` is executed, or an object plug-in that has already been created in the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html) is reused, if it is required again. An object plug-in of this type is a singleton in terms of its BAdI implementation class.
-   Using the addition `CONTEXT`, that is, for context-dependent BAdIs, the same object plug-ins are always used for the same content of `con`. These object plug-ins are singletons in terms of their BAdI implementation class and a BAdI context object.

-   The fact that object plug-ins can either be newly generated or reused can also be expressed in terms of an object plug-in being stateful or stateless with reference to a BAdI or a context.
-   The tag interface `IF_BADI_CONTEXT` can be implemented by any class. Possible applications range from the implementation in a local class without other components that have the sole purpose of enabling internal program context administration for BAdIs, to the implementation in a global application class in which the objects are specifically enhanced.

-   *Cause:* A context error has occurred in the dynamic variant of the statement.

-   *Cause:* Incorrect information was specified for the filters of the BAdI in the dynamic variant of the statement.

-   *Cause:* The reference variable specified after `CONTEXT` is initial.

-   *Cause:* Multiple BAdI implementation classes were found, although the BAdI is defined for single use. Subclass of `CX_BADI_NOT_SINGLE_USE`.

-   *Cause:* No BAdI implementation class was found, although the BAdI is defined for single use. Subclass of `CX_BADI_NOT_SINGLE_USE`.

-   *Cause:* The BAdI specified in the dynamic variant of the statement does not exist.

1.  Only BAdI implementation classes are selected that are assigned to a [BAdI implementation](ABENBADI_IMPLEMENTATION_GLOSRY.html) that is in the state *active*.
2.  Only BAdI implementation classes are selected that are assigned to a BAdI implementation, that is, to an [enhancement](ABENENHANCEMENT_GLOSRY.html) whose [switch](ABENSWITCH_GLOSRY.html) is in the state *on*. If no switch is assigned to a BAdI implementation, it is handled in the same way as an implementation with a switch in the state *on*.
3.  All BAdI implementation classes are selected that satisfy the above requirements and for which the filter condition of the BAdI implementation matches the values specified after `FILTERS` or in `ftab`. If no BAdI implementations are found with the filter specifications, the system searches for BAdI implementations that are marked as standard implementations. If non are found, the fallback BAdI implementation class of the BAdI is used (if available).
4.  If multiple BAdI implementation classes with matching filter conditions were found for a BAdI defined for single use, [conflict resolution](ABENCONFLICT_RESOLUTION_GLOSRY.html) is performed. A successful conflict resolution produces exactly one priority [conflict-resolving enhancement implementation](ABENCONFLICT_RESOL_IMPL_GLOSRY.html) and only its BAdI implementation class is selected. If multiple conflict-solving enhancement implementations have the same priority or if there are no conflict-solving enhancement implementations at all, then a correct conflict solution is not possible and multiple BAdI implementation classes will remain in the hit list.

abenabap.html abenabap\_reference.html abenenhancement\_framework.html abenbadi\_enhancement.html