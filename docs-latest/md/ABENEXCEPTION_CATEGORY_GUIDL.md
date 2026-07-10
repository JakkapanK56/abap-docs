---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENEXCEPTION_CATEGORY_GUIDL.html"
abapFile: "ABENEXCEPTION_CATEGORY_GUIDL.html"
type: "abap-reference"
---

## Background

Each class-based exception belongs to one of three different exception categories, each of which define whether the exceptions need to be declared in procedure interfaces. The assignment of an exception to an exception class is realized (technically) using inheritance. All exception classes are subclasses of the following abstract global classes, which themselves inherit from `CX_ROOT`:

-   `CX_STATIC_CHECK`
-   Exceptions of this category must be declared explicitly in the interface of a procedure, if they are to be propagated from this interface. The syntax check makes a static check to determine whether all exceptions raised in the procedure with `RAISE EXCEPTION` or declared in the interfaces of called procedures are either handled with `CATCH` or explicitly declared in the interface.
-   `CX_DYNAMIC_CHECK`
-   Exceptions of this category must also be declared explicitly in the interface of a procedure to enable them to be propagated. This is not subject to a static syntax check, however, and is checked dynamically at runtime instead.
-   `CX_NO_CHECK`
-   Exceptions of this category do not have to be declared explicitly in the interface of the procedure, since the class `CX_NO_CHECK` and its subclasses are always declared implicitly. Both to support the category change of an existing exception and to document the possible occurrence of exceptions of this category, exceptions of category `CX_NO_CHECK` may also be declared explicitly in procedure interfaces.

## Rule

**Use a suitable exception category**

When creating and raising class-based exceptions, always use an exception category suitable for the current error situation:

-   `CX_STATIC_CHECK` for the static protection of the exception handler
-   `CX_DYNAMIC_CHECK` for error situations that can be prevented by preconditions
-   `CX_NO_CHECK` for situations that cannot be handled immediately

## Details

The exception categories are designed for the following error situations:

-   As a rule, exceptions that are raised in a procedure should be handled there or declared in the interface for the procedure to declare to the caller which exceptions are to be expected. A syntax check to verify this is run on exceptions from the `CX_STATIC_CHECK` category. This category is therefore always warranted if a procedure ([method](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md)) is to be forced to handle an exception or to at least forward it explicitly. However, if an exception can be prevented by prior checks, exceptions of the `CX_DYNAMIC_CHECK` category are preferable.
-   If the program logic can eliminate potential error situations, the corresponding exceptions do not have to be handled or declared in the interface. This is the case if prior to a division, for example, there is an explicit precondition for the denominator not to equal zero. In this case, exceptions from the `CX_DYNAMIC_CHECK` category can and should be used. These exceptions only need to be handled and declared if their occurrence cannot be otherwise prevented. In well modeled applications, exceptions are generally prevented by incorporating appropriate conditions in program code and `CX_DYNAMIC_CHECK` category should then be the most frequently used exception category.
-   For exception situations that can occur at any time and that cannot be handled directly, the `CX_NO_CHECK` category can be used. Otherwise, all exceptions that can be raised due to resource bottlenecks would have to be caught or declared. These exceptions would then have to be specified in practically every interface, which would result in more complex programs lacking in clarity.

The resumability of a class-based exception is not an attribute of the exception class; it is defined instead by the `RESUMABLE` addition of the `RAISE EXCEPTION` statement when the exception is raised. This attribute can be lost for exceptions of the categories `CX_STATIC_CHECK` and `CX_DYNAMIC_CHECK` during propagation, if the exceptions are not also declared there using `RESUMABLE`. `CX_NO_CHECK` always preserves its resumability implicitly.
