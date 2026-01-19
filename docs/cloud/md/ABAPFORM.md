---
title: "ABAPFORM"
description: |
  ABAPFORM - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPFORM.htm"
abapFile: "ABAPFORM.html"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "ABAPFORM"]
---

`FORM subr [TABLES [table_parameters](ABAPFORM_TABLES.html)]`\\ 
          `[USING [parameters](ABAPFORM_PARAMETERS.html)]`\\ 
          `[CHANGING [parameters](ABAPFORM_PARAMETERS.html)]`\\ 
          `[RAISING exc1|RESUMABLE(exc1) exc2|RESUMABLE(exc2) ...].`\\ 
  `...`\\ 
`ENDFORM.`

[1. `... TABLES table_parameters`](#ABAP_ADDITION_1@3@)

[2. `... USING parameters`](#ABAP_ADDITION_2@3@)

[3. `... CHANGING parameters`](#ABAP_ADDITION_3@3@)

[4. `... RAISING exc1|RESUMABLE(exc1) exc2|RESUMABLE(exc2) ...`](#ABAP_ADDITION_4@3@)

***This syntax is only supported temporarily in the current ABAP language version and must be replaced with valid syntax for that version.***\\ \\n\\n

The statement `FORM` defines a [subroutine](ABENSUBROUTINE_GLOSRY.html)\\ `subr` and its interface. [Naming conventions](ABENNAMING_CONVENTIONS.html) apply to the `subr` name. The functions of the subroutine `subr` are implemented between the statements `FORM` and `ENDFORM`. The additions define the formal parameters of the subroutine and declare the propagation of the [class-based exceptions](ABENCLASS_BASED_EXCEPTION_GLOSRY.html) to the caller.

Local data types and data objects can be declared within the subroutine. Furthermore, the formal parameters of the subroutine as well as the global data types and data objects of the current [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html) can be accessed.

Subroutines are called using the statement [`PERFORM`](ABAPPERFORM.html).

Subroutines are obsolete. In new programs, methods should be created instead.

`TABLES` is used to declare table parameters [`table_parameters`](ABAPFORM_TABLES.html). Table parameters are obsolete formal parameters that are typed as internal [standard tables](ABENSTANDARD_TABLE_GLOSRY.html) with [header lines](ABENHEADER_LINE_GLOSRY.html). The addition `TABLES` can be specified only before `USING` or `CHANGING`.

If an internal table without header line or a [table body](ABENTABLE_BODY_GLOSRY.html) is passed as an actual parameter to this type of formal parameter, an empty local header line is generated in the subroutine. If an internal table with header line is used as the actual parameter, both the table body and the header line are passed to the subroutine. Pass by value is not possible in formal parameters defined using `TABLES`.

These additions define formal parameters [`parameters`](ABAPFORM_PARAMETERS.html). Formal parameters can be used in the subroutine as data objects in all operand positions that match their [typing](ABENTYPING_GLOSRY.html) and their modifiability defined by `USING` or `CHANGING`.

When the formal parameters [`parameter`](ABAPFORM_PARAMETERS.html) are defined, either pass by reference or pass by value can be defined. The effect of this definition for formal parameters defined with `USING` and `CHANGING` is as follows:

The addition `RAISING` can be used to declare class-based exceptions `exc1 exc2 ...`, which are raised in or propagated to the subroutine by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) or using the statement `RAISE EXCEPTION` or the addition [`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html) in a [conditional expression](ABENCONDITIONAL_EXPRESSIONS.html), but are not handled in a [`TRY`](ABAPTRY.html) block. Subclasses of `CX_STATIC_CHECK` and `CX_DYNAMIC_CHECK` can be declared explicitly. Subclasses of `CX_NO_CHECK` are always declared implicitly with the addition `RESUMABLE` but can also be declared explicitly.

For `exc1 exc2 ...`, all exception classes that are visible at this point can be specified. The exception classes must be specified in ascending order with respect to their inheritance hierarchy. Each exception class may only be specified once.

If an exception for this superclass is raised that cannot be handled and cannot be passed on, this produces either a syntax error or an exception `CX_SY_NO_HANDLER` that must be handled by the caller.

The addition `RESUMABLE` declares an exception that can be propagated as a [resumable exception](ABENRESUMABLE_EXCEPTION_GLOSRY.html). This means:

If a superclass is declared as resumable, any subclasses must also be declared as resumable.

-   Formal parameters defined using `TABLES` can be replaced by formal parameters defined using `USING` or `CHANGING`. A local work area can also be created for the internal table in the subroutine using the addition `LIKE LINE OF itab` of the statement `DATA`.
-   If `TABLES` is specified after `USING` or `CHANGING`, a formal parameter called `TABLES` is created.

-   **Pass by reference for `USING` parameters**
-   The formal parameters `p1 p2 ...` are handled exactly like those parameters defined for pass by reference using `CHANGING`.
-   **Pass by reference for `CHANGING` parameters**
-   For the formal parameters `p1 p2 ...`, no local data object is created in the subroutine. Instead, when it is called, a reference is passed to the specified actual parameter. A change to the formal parameter in the subroutine also changes the value of the actual parameter.
-   **Pass by value for `USING` parameters**
-   For each formal parameter `p1 p2 ...`, a local data object with the same data type as the associated actual parameter is created in the subroutine and filled with its values. A change to the formal parameter in the subroutine does not change the value of the actual parameter. The actual parameter also retains its original value even after the subroutine has ended.
-   **Pass by value for `CHANGING` parameters**
-   For each formal parameter `p1 p2 ...`, a local data object with the same data type as the associated actual parameter is created in the subroutine and filled with its values. A change to the formal parameter in the subroutine does not directly change the value of the actual parameter. If the subroutine is ended using `ENDFORM`, `RETURN`, `CHECK`, or `EXIT` however, the content of the formal parameter is assigned to the actual parameter. If the subroutine is ended by a [message](ABENMESSAGE_GLOSRY.html) or an exception, the actual parameter remains unchanged.

-   Formal parameters defined for pass by reference with `USING` should not be changed in subroutines. In this case, `CHANGING` can be used instead. Write access to `USING` parameters produces syntax check warnings if `CHANGING` parameters are specified at the same time.
-   The addition `CHANGING` should be used for precisely those formal parameters whose value is changed in the subroutine.
-   The order of `USING` and `CHANGING` is not arbitrary. Specifying `USING` after `CHANGING` creates a formal parameter named `using`.
-   Since from the [caller's](ABAPPERFORM.html) point of view there is no syntactical difference between passing an actual parameter to a `USING` parameter defined for [pass by value](ABENPASS_BY_VALUE_GLOSRY.html) or to a `USING` parameter defined for [pass by reference](ABENPASS_BY_REFERENCE_GLOSRY.html), the value returned by the subroutine should not depend on the kind of parameter passing.

-   A resumable exception is therefore propagated as such
-   The addition has no effect on a non-resumable exception.
-   If a resumable exception is propagated in `RAISING` and the addition `RESUMABLE` is not specified, it thus becomes non-resumable.

-   Exceptions that are based on the subclasses of `CX_STATIC_CHECK` and `CX_DYNAMIC_CHECK` must be handled either in the subroutine or declared explicitly using the `RAISING` addition. For `CX_STATIC_CHECK`, this is checked during the syntax check; for `CX_DYNAMIC_CHECK`, the check is not performed until runtime. For exceptions of the category `CX_NO_CHECK` no check is performed.
-   Exceptions of the category `CX_NO_CHECK` can be declared explicitly with or without the addition `RESUMABLE`. The addition `RESUMABLE` is always added implicitly. An explicit declaration of an exception of the category `CX_NO_CHECK` has no effect but documents for the user of a subroutine, that this exception is to be expected. Furthermore, it allows the category of existing exceptions to be changed to `CX_NO_CHECK` without producing a syntax error.
-   An exception that is raised as a resumable exception in the subroutine using [`RAISE RESUMABLE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) should also be declared as resumable in the interface, since the exception would otherwise lose this property when the method is exited.
-   See also [Class-Based Exceptions in Procedures](ABENEXCEPTIONS_PROCEDURES.html).

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_modularization.html abenabap\_subroutines.html