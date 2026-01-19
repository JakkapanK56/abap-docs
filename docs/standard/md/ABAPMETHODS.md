---
title: "ABAPMETHODS"
description: |
  ABAPMETHODS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMETHODS.htm"
abapFile: "ABAPMETHODS.html"
keywords: ["select", "if", "method", "class", "ABAPMETHODS"]
---

[Short Reference](ABAPMETHODS_SHORTREF.html)

1\. `METHODS meth [[ABSTRACT|FINAL](ABAPMETHODS_ABSTRACT_FINAL.html)]\ |[[DEFAULT IGNORE|FAIL](ABAPMETHODS_DEFAULT.html)]`\\
`[IMPORTING [parameters](ABAPMETHODS_PARAMETERS.html)\ [PREFERRED PARAMETER p]]`\\
`[EXPORTING [parameters](ABAPMETHODS_PARAMETERS.html)]`\\
`[CHANGING [parameters](ABAPMETHODS_PARAMETERS.html)]`\\
`[\{RAISING exc1|RESUMABLE(exc1) exc2|RESUMABLE(exc2) ...\}`\\
`|\{EXCEPTIONS exc1 exc2 ...\}].`

2\. `METHODS meth [[ABSTRACT|FINAL](ABAPMETHODS_ABSTRACT_FINAL.html)]\ |[[DEFAULT IGNORE|FAIL](ABAPMETHODS_DEFAULT.html)]`\\
`[IMPORTING [parameters](ABAPMETHODS_PARAMETERS.html)\ [PREFERRED PARAMETER p]]`\\
`[EXPORTING [parameters](ABAPMETHODS_PARAMETERS.html)]`\\
`[CHANGING [parameters](ABAPMETHODS_PARAMETERS.html)]`\\
`RETURNING VALUE(r) typing`\\
`[\{RAISING exc1|RESUMABLE(exc1) exc2|RESUMABLE(exc2) ...\}`\\
`|\{EXCEPTIONS exc1 exc2 ...\}].`\\

3\. `METHODS constructor [[FINAL](ABAPMETHODS_ABSTRACT_FINAL.html)]`\\
`[IMPORTING [parameters](ABAPMETHODS_PARAMETERS.html)\ [PREFERRED PARAMETER p]]`\\
`[\{RAISING exc1|RESUMABLE(exc1) exc2|RESUMABLE(exc2) ...\}`\\
`|\{EXCEPTIONS exc1 exc2 ...\}].`

4\. `METHODS meth [[ABSTRACT|FINAL](ABAPMETHODS_ABSTRACT_FINAL.html)]\ |[[DEFAULT IGNORE|FAIL](ABAPMETHODS_DEFAULT.html)]`\\
`FOR EVENT evt OF \{class|intf\}`\\
`[IMPORTING p1 p2 ... [sender]].`

5\. `METHODS meth [[FINAL](ABAPMETHODS_ABSTRACT_FINAL.html)] REDEFINITION.`

6\. `METHODS meth [[ABSTRACT|FINAL](ABAPMETHODS_ABSTRACT_FINAL.html)]\ |[[DEFAULT IGNORE|FAIL](ABAPMETHODS_DEFAULT.html)]`\\
`[[AMDP OPTIONS [READ-ONLY]](ABAPMETHODS_AMDP_OPTIONS.html)\ [[CDS SESSION CLIENT DEPENDENT|CURRENT|clnt]](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html)\ |\ [[CLIENT INDEPENDENT]](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html)]`\\
`[IMPORTING [parameters](ABAPMETHODS_PARAMETERS.html)\ [PREFERRED PARAMETER p]]`\\
`[EXPORTING [parameters](ABAPMETHODS_PARAMETERS.html)]`\\
`[CHANGING [parameters](ABAPMETHODS_PARAMETERS.html)]`\\
`[RETURNING VALUE(r) typing]`\\
`[\{RAISING exc1|RESUMABLE(exc1) exc2|RESUMABLE(exc2) ...\}]`

7\. `METHODS meth [[ABSTRACT|FINAL](ABAPMETHODS_ABSTRACT_FINAL.html)]`\\
`[[AMDP OPTIONS [READ-ONLY]](ABAPMETHODS_AMDP_OPTIONS.html)\ [[CDS SESSION CLIENT DEPENDENT|CURRENT|clnt]](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html)\ |\ [[CLIENT INDEPENDENT]](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html)]`\\
`FOR TESTING`\\
`[\{RAISING exc1|RESUMABLE(exc1) exc2|RESUMABLE(exc2) ...\}].`

8\. `METHODS meth [[FINAL](ABAPMETHODS_ABSTRACT_FINAL.html)]`\\
`FOR rap_behv ...`

The statement `METHODS` declares or redefines an instance method `meth`. The [naming conventions](ABENNAMING_CONVENTIONS.html) apply to the name `meth`.

Instance methods are bound to objects. To use instance methods, an object of the class must first be created. In instance methods, all components of the same class can be accessed without a component selector.

The variants of the statement `METHODS` are used to distinguish between the following kinds of method declarations:

[General instance methods](ABAPMETHODS_GENERAL.html)\\ 
The most general form of the METHODS statement allows instance methods to be defined with any input and output parameters.

In the methods of a class, one method of the class [hides](ABENBUILT_IN_FUNCTIONS_SYNTAX.html) a [built-in function](ABENBUILTIN_FUNCTION_GLOSRY.html) with the same name. This hiding is independent of the type and number of method parameters and the type and number of parameters of the function. This means that a method should not have the same name as a built-in function.

[General Instance Methods](ABAPMETHODS_GENERAL.html)

[Functional Instance Methods](ABAPMETHODS_FUNCTIONAL.html)

[Instance Constructors](ABAPMETHODS_CONSTRUCTOR.html) (Only in Classes)

[Event Handlers](ABAPMETHODS_EVENT_HANDLER.html)

[Redefinition of Instance Methods](ABAPMETHODS_REDEFINITION.html) (Only in Subclasses)

[AMDP Methods](ABENAMDP_METHODS.html)

[Test Methods](ABAPMETHODS_TESTING.html) (Only in Test Classes)

[ABP Handler Methods](ABAPMETHODS_FOR_RAP_BEHV.html) (Only in Handler Classes of ABAP Behavior Pools)

-   [Functional instance methods](ABAPMETHODS_FUNCTIONAL.html)
-   [Functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html) have exactly one return value and any number of formal parameters.
-   [Instance constructors](ABAPMETHODS_CONSTRUCTOR.html)
-   Instance constructors are methods with the given name `constructor`, which are called automatically when their class is instantiated. Constructors have any number of input parameters and no output parameters. They cannot be declared in interfaces.
-   [Event handlers](ABAPMETHODS_EVENT_HANDLER.html)
-   Event handlers are methods that can be called directly using or in [statements](ABENMETHOD_CALLS.html), but are mainly called when an event of a class or an interface is raised. The only possible formal parameters of an event handler are input parameters defined as the output parameters of the event.
-   [Redefinition of Instance Methods](ABAPMETHODS_REDEFINITION.html)
-   A method declared in a superclass can be redefined in a subclass as long as it is not flagged as final in the superclass. In a [redefinition](ABENREDEFINITION_GLOSRY.html), the interface of the method is not changed.
-   [AMDP Methods](ABAPMETHODS_AMDP_OPTIONS.html)
-   In general, the same rules apply to declaring [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) as to all instance methods. There is, however, one special optional addition, [`AMDP OPTIONS`](ABAPMETHODS_AMDP_OPTIONS.html), and no non-class-based exceptions can be declared using `EXCEPTIONS`.
-   [Definition of a test method](ABAPMETHODS_TESTING.html)
-   Test methods can be declared in test classes. They have no interface parameters and are called during [ABAP Unit](ABENABAP_UNIT_GLOSRY.html) tests by the ABAP runtime framework. They cannot be declared in interfaces.
-   [ABP Handler Methods](ABAPMETHODS_FOR_RAP_BEHV.html)
-   ABP methods can be declared in the [handler classes](ABENABP_HANDLER_CLASS_GLOSRY.html) of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). They implement the CRUD operations of a [RAP business object](ABENRAP_BO_GLOSRY.html).

abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abenclass\_ifac\_components.html abenmethods.html