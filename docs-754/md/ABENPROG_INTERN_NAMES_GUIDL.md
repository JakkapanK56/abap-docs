---
title: "Program-Internal Names - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprog_intern_names_guidl.htm"
abapFile: "abenprog_intern_names_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Structure and Style](ABENSTRUCTURE_STYLE_GUIDL.md) →  [Naming](ABENNAMING_GUIDL.md) → 

Program-Internal Names

Background

Program-internal names describe entities that are declared in the program and are called within the program or called by other programs. Typical examples include identifiers for data types and data objects as well as methods and method interface parameters.

Program-internal declarations can be configured in different contexts that all span a separate namespace. These contexts are arranged in the order from local to global:

1.  Local declarations in a procedure ([Method](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md "Guideline"))
2.  Declarations of instance components and static components in a class
3.  Global declarations in the declaration part of a program

Here local declarations always obscure the more global declarations of higher contexts. Different types of declarations each span a separate namespace in their context, except the class components, which are all located in one single namespace, regardless of their type.

The identifiers used in ABAP programs are must comply with the syntactic requirements for classes (in accordance with the rule [Use ABAP Objects](ABENABAP_OBJ_PROGR_MODEL_GUIDL.md "Guideline") and the rule [Applying Default Settings to Program Attributes](ABENPROGRAM_ATTRIBUTE_GUIDL.md "Guideline")). In other words, the identifiers must begin with a letter, which is followed other letters and numbers that can be separated by underscores.

Rule

Prevent program-internal names from being confused or obscured

Choose program-internal names that cannot be confused with ABAP words or other declarations. In addition, a local name must not obscure a more global name. Global entities and interface parameters of procedures should have a prefix for identification purposes.

Details

Besides using the general rule of assigning [meaningful names](ABENTELLING_NAMES_GUIDL.md "Guideline"), it is also important for program-internal declarations that you stick to the above rule of eliminating human error (avoiding name confusion). Unlike a human reader, the compiler usually knows exactly what an identifier is referring to. Use the following prefixes to avoid the danger of unwanted obscuring and name confusion:

-   g\_ for global data objects

-   l\_ for local data objects that obscure static attributes

-   i\_ for IMPORTING parameters

-   e\_ for EXPORTING parameters

-   c\_ for CHANGING parameters

-   r\_ for RETURNING parameters

You can also use compound identifiers and component selectors.

The following sections discuss the different aspects of program-internal names in detail and with a systematic approach.

Confusion with ABAP Words

A basic rule in almost all naming specifications is that language statements must not be used as names in the source code (assuming that this is permitted by the syntax). The aim of this measure is to improve readability by preventing confusion between statements and names. In ABAP, however, it is difficult to strictly adhere to this rule, because the vocabulary of the programming language is very extensive and is continuously growing. In most cases, developers will not have memorized all the ABAP words that occur in all the statements and statement additions. Also, they cannot possibly know which words will be added in future.

For this reason, it is not logical or feasible to completely prohibit the use of ABAP words (ABAP keywords or additions) as names. Thanks to the color highlighting in ABAP Editor and the different capitalization rules in operands and ABAP words ([Pretty Printer](ABENUSE_PRETTY_PRINTER_GUIDL.md "Guideline")), there is no risk of confusion. If in doubt, you can always use the (!) character directly in front of a name, to distinguish it from an ABAP word with the same name in a statement.

A single ABAP word, however, usually does not represent a descriptive name. Therefore, we recommend that you only use ABAP words as part of combined names with underscores (\_), for instance, account\_class instead of class. Because the underscore is not used in most ABAP words, it is usually a good idea to distinguish between ABAP words and [names](ABENTELLING_NAMES_GUIDL.md "Guideline"). In some very rare cases, the compiler cannot distinguish an ABAP word from a name that is identical to the word. In these cases, the escape character (!) must be specified.

Confusion between different declarations

In classes, all components are in the same namespace. Therefore, it is not possible to have data types and attributes with the same name within a class to avoid confusion. In the other contexts, that is, within procedures ([Methods](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md "Guideline")), or for global declarations of an ABAP program, different declarations generate different namespaces. Here it is possible to have data objects and data types with the same name. Object types (local classes and interfaces) are in the same namespace as data types.

To avoid confusion, we recommend that you use different names for different entities, and that you do not use the same names for data types and data objects. Exceptions to this rule are cases where the meaning of a name is absolutely clear, for example, the declaration of a helper variable:

DATA i TYPE i.

However, it should never be the case that a data object has the name of a data type that is not the type of the object:

DATA i     TYPE f.
DATA tadir TYPE trdir.

This is both confusing and dangerous!

Obscuring of More Global Declarations

The names in local contexts obscure declarations with the same name in contexts that are more global. In a method, for example, a data type declared with TYPES obscures an identically named data type of the class. This data type then obscures the identically named data type of the program, which in turn obscures an identically named data type from ABAP Dictionary.

Developers must ensure that a more global object (that should be used in the current context) is not obscured. Conversely, a global object must not be accidentally used instead of a local object. The reader of the source code should always know what a name refers to. This means that, when names are given, local names should not obscure any names that are more global.

Following the [KISS principle](ABENKISS_PRINCIPLE_GUIDL.md "Guideline"), it is recommended that local names are different from global names, because they do not follow their conventions. This mainly refers to the names in global declarations of the current program or in the repository. For example, a local class should never start with the cl\_ prefix, a local interface should never start with if\_ prefix, and a local data object should never start with the g\_ prefix.

-   Within methods

In a method (in new function modules and subroutines, there should be [no local declarations](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md "Guideline")), there is the danger that local names (including method parameters) can be confused with more global names. Declarations within the implementation can also be confused with method parameters. It should also be noted that methods in the same class always obscure any built-in functions with the same name.

To prevent local data objects in a method from being confused with components of their own class, you can explicitly address class components using the name of the class and the class component selector (=>), or using the object reference variable me and the instance component selector (->) .

If there is a danger that identically named built-in functions can be confused, the functional methods of the same class should be addressed only by using one of the selectors when using functional method calls. However, excessive use of selectors can make the source code difficult to read. Therefore, each case should be assessed separately. This danger of confusion is only relevant for short method names, however. For methods with names consisting of multiple words or names that start with the prefixes set\_, get\_, or is\_, there is usually no risk of confusion. Methods should always have a [manageable size](ABENPROC_VOLUME_GUIDL.md "Guideline"), and all declarations are therefore always visible for the reader. Therefore, this simple rule should be sufficient to make the method easy to read.

If the declaration of the method’s parameter interface is not visible in the method implementation (as in local classes), it is useful to make an additional distinction between local data and the method parameters. It has become customary to use the prefixes mentioned earlier to achieve this. An alternative prefix component l could also be considered here for local data, but it ultimately represents redundant information.

-   Within classes

If you use class components, you can always avoid confusion by addressing the class components using the name of the class and the class component selector (\=>) or an object reference variable and the instance component selector (\->). The implementation of a corresponding naming convention would lead to redundant information, which would not improve readability and would be contradictory to the basic [KISS principle](ABENKISS_PRINCIPLE_GUIDL.md "Guideline"). This applies in particular to the methods of the class. Although these methods obscure any identically named built-in functions, it would be very unusual to implement a prefix that indicates a method as a method of a class. Instead, methods should not be given the names of built-in functions.

-   In programs (general)

In the global declaration part of a program, you can create local classes and interfaces, as well as global data types and data objects.

-   The names of local classes and interfaces do not follow the naming conventions for global classes and interfaces. In other words, they cannot start with cl\_ or if\_, to ensure that no global declarations are obscured. With respect to local data, you can consider the naming convention lcl\_ or lif\_, but this would be redundant and not necessarily required, because a class/interface without a prefix is always known as a local class/local interface. The use of lif\_ may be useful for distinguishing a local interface from a local class.

-   Data types should no longer occur in the [global declaration part](ABENDECLARATION_VARIABLES_GUIDL.md "Guideline") of a program. Global data objects are only required for communication between ABAP and dynpro if [classic dynpros](ABENENCAP_CLASS_INTERF_GUIDL.md "Guideline") are used. Since these objects cannot names cannot be prefixed with a program name, as with class attributes (absolute names are only possible for data types and only in dynamic specifications), you must use the g\_ prefix for global data objects, to prevent confusion with local data objects or class attributes in method implementations. Global data objects can only exist in executable programs, module pools, and function groups. Global classes and interfaces cannot contain any global data objects. Therefore, a g\_ prefix for class components or interface components is definitely the wrong choice.

Note

Naming conventions are frequently established for names within the source code that define specifications for naming, including potential prefixes and suffixes. These specifications often get bogged down in excessive formal strictness. Names created this way contain redundant information, are difficult to maintain and often do not achieve the main aim of readability and self-documenting sources. Therefore, we limited our discussion to the naming-related aspects that we consider essential and universal. Further specifications are only useful at the level of development groups/organizations.

If prefixes and/or suffixes are used, it is common practice to store the technical attributes of the described object in these prefixes/suffixes. Apart from the fact that we do not consider it necessary to specify technical information in names, there are so many technical attributes of an object in ABAP that they cannot be mapped using simple rules for short prefixes/suffixes. Or combinations of different technical additions often cannot be interpreted uniquely. Some examples:

-   With respect to the data type of a data object, there are naming conventions where "v" and "c" as prefixes stand for "variable" or "constant" elementary data objects. Similarly, "s" and "t" as prefixes stand for "structures" and internal "tables". The type attribute "elementary" is wrongly equated with "variable" or "constant". If the attributes "static variable" and "sorted table" are also supposed to be expressed using "s", this is very likely to cause mistakes with name assignments. This makes it much harder to achieve the goal of readable, self-documenting source codes.

-   With respect to the validity area or the context of a data object, the naming conventions often stipulate the prefixes g\_ and l\_ for the names of global and local data objects. We identified g\_ for global data objects as the only convention that is actually required for program-internal names. However, the simultaneously labeling of all non-global objects with the prefix l\_ for the local validity area is almost never necessary. l\_ should only be used if a local name is to be the same as a more global name and the corresponding lack of obscuring component selectors would produce unreadable source code. The latter case only occurs for long class names in front of \=>. If me-> is used in front of the names of instance attributes, the method does not become any less unreadable than when an l\_ is placed in front of the name of a local data object.

It would actually be completely misleading to label static attributes of classes as global, using the prefix g\_. These attributes are only valid within the class and have completely different semantics than global data objects. The use of these attributes does not indicate a design weakness as it is generally the case for global data objects today.

-   With respect to the method parameters, we identified the prefixes i\_, e\_, c\_, and r\_ for importing, exporting, changing, and returning parameters as possible characteristics for distinguishing from data objects declared in the method. Apart from this, no further technical information needs to be expressed with additional prefixes. With method parameters in particular, technical information in prefixes tends to cause confusion rather than improve readability. For example, a prefix is\_ for "importing structure" would conflict with the prefix is\_ for "truth values", and a prefix it\_ for "importing table" could easily be understood as a general abbreviation of "internal table". If the role the parameter plays cannot be known from the descriptive name of a parameter and the procedure name, the names assigned are completely wrong and/or the procedure does not fulfill any clearly defined tasks. This type of conceptual weakness cannot be fixed (even with technical prefixes).

In summary, we recommend that you should use name additions cautiously, particularly additions with technical information. Of course, every organization is free to use these conventions, which can supplement our basic rules. In the ABAP environment - with its high versatility of types, many contexts, the distinction between pass by reference and pass by value - it is probably not an easy task to create a complete, self-contained, consistent, technically correct, and — above all — easy-to-understand set of rules for prefixes and suffixes. The known results are just pure conventions that are usually incomplete and are not always applicable.

Bad Example

The example shown below demonstrates how to obscure names in different contexts. The fact that no descriptive names were used for the data objects (for the sake of simplicity) can be disregarded here.

DATA a1 TYPE string VALUE \`a1 global\`.
DATA a2 TYPE string VALUE \`a2 global\`.
DATA a3 TYPE string VALUE \`a3 global\`.
DATA a4 TYPE string VALUE \`a4 global\`.
DATA a5 TYPE string VALUE \`a5 global\`.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    METHODS main
      IMPORTING a1 TYPE string DEFAULT 'a1 imported'
      RETURNING value(a6) TYPE string.
    CLASS-DATA a1  TYPE string VALUE \`a1 class\`.
    CLASS-DATA a2  TYPE string VALUE \`a2 class\`.
    DATA a3        TYPE string VALUE \`a3 class\`.
    DATA a4        TYPE string VALUE \`a4 class\`.
ENDCLASS.

CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA a3 TYPE string VALUE \`a3 local\`.
    DATA a4 TYPE string VALUE \`a4 local\`.
    CONCATENATE a1 demo=>a2 me->a3 a4 a5
      INTO a6 SEPARATED BY \`, \`.
  ENDMETHOD.
ENDCLASS.

If you just consider the implementation of the main method in the CONCATENATE statement, it is clearly evident only for the demo=>a2 and me->a3 operands that they are attributes of the class and that a4 is a local data object of the method. It is only possible in the general overview to see that a1 describes an importing parameter, a5 describes a global data object of the program, and a6 describes a returning parameter. The global data objects a1 to a4 cannot be addressed in the method because they are obscured by local data objects or attributes of the class.

Good Example

Unlike the source code above, the following source code includes the previously discussed prefixes, to prevent obscuring and to distinguish method parameters from local data objects. Again, descriptive names were not used here to focus on aspects that are essential for this example.

DATA g\_a1 TYPE string VALUE \`g\_a1 global\`.
DATA g\_a2 TYPE string VALUE \`g\_a2 global\`.
DATA g\_a3 TYPE string VALUE \`g\_a3 global\`.
DATA g\_a4 TYPE string VALUE \`g\_a4 global\`.
DATA g\_a5 TYPE string VALUE \`g\_a5 global\`.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    METHODS main
      IMPORTING i\_a1 TYPE string DEFAULT 'i\_a1 imported'
      RETURNING value(r\_a6) TYPE string.
    CLASS-DATA a1  TYPE string VALUE \`a1 class\`.
    CLASS-DATA a2  TYPE string VALUE \`a2 class\`.
    DATA a3        TYPE string VALUE \`a3 class\`.
    DATA a4        TYPE string VALUE \`a4 class\`.
ENDCLASS.

CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA a3 TYPE string VALUE \`a3 local\`.
    DATA a4 TYPE string VALUE \`a4 local\`.
    CONCATENATE i\_a1 demo=>a2 me->a3 a4 g\_a5
     INTO r\_a6 SEPARATED BY \`, \`.
  ENDMETHOD.
ENDCLASS.

All operands are now clearly known in the CONCATENATE statement. A prefix (l\_) can be implemented for the local names, but this is unnecessary for two reasons:

-   The declaration is defined near the place of usage and is always visible to the reader.

-   If you consistently use the selectors \-> and \=> to address the attributes of a class, all names without a prefix and with no specified class or a reference variable are known as local data objects.

By applying the minimal naming convention used here, you can address all data objects that are declared in the displayed source code section in the method. Of course, the declaration of the global data objects is only implemented to demonstrate obscuring and how to prevent it. Global data objects should [no longer be used](ABENDECLARATION_VARIABLES_GUIDL.md "Guideline") in programs that do not work with classic dynpros.
