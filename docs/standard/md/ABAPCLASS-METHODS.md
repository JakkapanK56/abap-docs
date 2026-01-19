---
title: "ABAPCLASS-METHODS"
description: |
  ABAPCLASS-METHODS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCLASS-METHODS.htm"
abapFile: "ABAPCLASS-METHODS.html"
keywords: ["select", "do", "if", "method", "class", "types", "ABAPCLASS", "METHODS"]
---

[Short Reference](ABAPCLASS-METHODS_SHORTREF.html)

1\. `CLASS-METHODS meth [[DEFAULT IGNORE|FAIL](ABAPMETHODS_DEFAULT.html)]`\\
`[IMPORTING [parameters](ABAPMETHODS_PARAMETERS.html)\ [PREFERRED PARAMETER p]]`\\
`[EXPORTING [parameters](ABAPMETHODS_PARAMETERS.html)]`\\
`[CHANGING [parameters](ABAPMETHODS_PARAMETERS.html)]`\\
`[\{RAISING exc1|RESUMABLE(exc1) exc2|RESUMABLE(exc2) ...\}`\\
`|\{EXCEPTIONS exc1 exc2 ...\}].`\\

2\. `CLASS-METHODS meth [[DEFAULT IGNORE|FAIL](ABAPMETHODS_DEFAULT.html)]`\\
`[IMPORTING [parameters](ABAPMETHODS_PARAMETERS.html)\ [PREFERRED PARAMETER p]]`\\
`[EXPORTING [parameters](ABAPMETHODS_PARAMETERS.html)]`\\
`[CHANGING [parameters](ABAPMETHODS_PARAMETERS.html)]`\\
`RETURNING VALUE(r) typing`\\
`[\{RAISING exc1|RESUMABLE(exc1) exc2|RESUMABLE(exc2) ...\}`\\
`|\{EXCEPTIONS exc1 exc2 ...\}].`

3\. `CLASS-METHODS class_constructor.`\\

4\. `CLASS-METHODS meth [[DEFAULT IGNORE|FAIL](ABAPMETHODS_DEFAULT.html)]`\\
`FOR EVENT evt OF \{class|intf\}`\\
`[IMPORTING p1 p2 ... [sender]].`\\

5\. `CLASS-METHODS meth [[DEFAULT IGNORE|FAIL](ABAPMETHODS_DEFAULT.html)]`\\
`[[AMDP OPTIONS [READ-ONLY]](ABAPMETHODS_AMDP_OPTIONS.html)\ [[CDS SESSION CLIENT DEPENDENT|CURRENT|clnt]](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html)\ |\ [[CLIENT INDEPENDENT]](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html)]`\\
`[IMPORTING [parameters](ABAPMETHODS_PARAMETERS.html)\ [PREFERRED PARAMETER p]]`\\
`[EXPORTING [parameters](ABAPMETHODS_PARAMETERS.html)]`\\
`[CHANGING [parameters](ABAPMETHODS_PARAMETERS.html)]`\\
`[RETURNING VALUE(r) typing]`\\
`[\{RAISING exc1|RESUMABLE(exc1) exc2|RESUMABLE(exc2) ...\}]`

6\. `CLASS-METHODS meth FOR TABLE FUNCTION cds_tabfunc.`

The statement `CLASS-METHODS` declares a [static method](ABENSTATIC_METHOD_GLOSRY.html)\\ `meth`. The [naming conventions](ABENNAMING_CONVENTIONS.html) apply to the name `meth`.

Using the class component selector (`=>`), static methods can be used independently of objects. In static methods, the static components of the personal class or their superclasses can be accessed only if the component selector is not used.

The variants of the statement `CLASS-METHODS` distinguish the following types of method declaration:

[General Static Methods](ABAPCLASS-METHODS_GENERAL.html)

[Functional Static Methods](ABAPCLASS-METHODS_FUNCTIONAL.html)

[Static Constructors](ABAPCLASS-METHODS_CONSTRUCTOR.html) (Only in Classes)

[Event Handlers](ABAPCLASS-METHODS_EVENT_HANDLER.html)

[AMDP - Methods](ABAPMETHODS_AMDP_OPTIONS.html)

[AMDP Function Implementations for CDS Table Functions](ABAPCLASS-METHODS_FOR_TABFUNC.html) (Only in Classes)

-   [General static methods](ABAPCLASS-METHODS_GENERAL.html)
-   The most general form of the statement `CLASS-METHODS` allows static methods in classes and interfaces to be declared with any number of input and output parameters.
-   [Functional Static Methods](ABAPCLASS-METHODS_FUNCTIONAL.html)
-   [Functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html) of classes and interfaces have exactly one return value and any other formal parameters.
-   [Static constructors](ABAPCLASS-METHODS_CONSTRUCTOR.html)
-   Static constructors of classes are methods with the predefined name `class_constructor` that are called automatically before their class is first used. Static constructors do not have a parameter interface and cannot be declared in interfaces.
-   [Static event handlers](ABAPCLASS-METHODS_EVENT_HANDLER.html)
-   Static [event handlers](ABENEVENT_HANDLER_GLOSRY.html) are static methods of classes and interfaces that are called by an event of a class or an interface. The only possible formal parameters of an event handler are input parameters that were defined as output parameters of the event.
-   [Static AMDP methods](ABAPMETHODS_AMDP_OPTIONS.html)
-   In general, the same rules apply to declarations of static [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) for [AMDP procedure implementations](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html) and [AMDP function implementations](ABENAMDP_FUNCTION_METHOD_GLOSRY.html) that do not implement [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) as to all static methods. There is, however, one special optional addition, [`AMDP OPTIONS`](ABAPMETHODS_AMDP_OPTIONS.html), and no non-class-based exceptions can be declared using `EXCEPTIONS`.
-   [AMDP function implementations](ABAPCLASS-METHODS_FOR_TABFUNC.html)
-   [AMDP function implementations](ABENAMDP_FUNCTION_METHOD_GLOSRY.html) declared using the addition `FOR TABLE FUNCTION` implement a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html) in an [AMDP class](ABENAMDP_CLASS_GLOSRY.html). The formal parameters are determined using the CDS table function. An AMDP function implementation cannot be declared in an interface.

-   Like all [static components in the inheritance](ABENINHERITANCE_STATICAL.html), the static methods of a superclass exist in all subclasses. A static method is always executed in the class in which it was declared. A static method that is visible externally can be called using the class component selector and all names of classes in which it exists. However, the class in which it was declared is always the one that is addressed, which affects the execution of the [static constructor](ABENSTATIC_CONSTRUCTOR_GLOSRY.html) or the [event handlers](ABENEVENT_HANDLER_GLOSRY.html).
-   In the methods of a class, a method of the class [hides](ABENBUILT_IN_FUNCTIONS_SYNTAX.html) a [built-in function](ABENBUILTIN_FUNCTION_GLOSRY.html) with the same name. This hiding is independent of the type and number of method parameters and the type and number of parameters of the function. This means that a method should not have the same name as a built-in function.

abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abenclass\_ifac\_components.html abenmethods.html