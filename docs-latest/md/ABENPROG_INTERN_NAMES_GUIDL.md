---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPROG_INTERN_NAMES_GUIDL.html"
abapFile: "ABENPROG_INTERN_NAMES_GUIDL.html"
type: "abap-reference"
---

## Background

Program-internal names describe entities that are declared in the program and are called within the program or called by other programs. Typical examples include identifiers for data types and data objects as well as methods and method interface parameters.

Program-internal declarations can be configured in different contexts that all span a separate namespace. These contexts are arranged in the order from local to global:

1.  Local declarations in a procedure ([Method](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md))
2.  Declarations of instance components and static components in a class
3.  Global declarations in the declaration part of a program

Here local declarations always hide the more global declarations of higher contexts. Different types of declarations each span a separate namespace in their context, except the class components, which are all located in one single namespace, regardless of their type.

The identifiers used in ABAP programs are must comply with the syntactic requirements for classes (in accordance with the rule [Use ABAP Objects](ABENABAP_OBJ_PROGR_MODEL_GUIDL.md) and the rule [Applying Default Settings to Program Properties](ABENPROGRAM_PROPERTY_GUIDL.md)). In other words, the identifiers must begin with a letter, which is followed other letters and numbers that can be separated by underscores.

## Rule

**Prevent program-internal names from being confused or hidden**

Choose program-internal names that cannot be confused with ABAP words or other declarations. In addition, a local name must not hide a more global name. Global entities and interface parameters of procedures should have a prefix for identification purposes.

## Details

Besides using the general rule of assigning [meaningful names](ABENTELLING_NAMES_GUIDL.md), it is also important for program-internal declarations that you stick to the above rule of eliminating human error (avoiding name confusion). Unlike a human reader, the compiler usually knows exactly what an identifier is referring to. Use the following prefixes to avoid the danger of unwanted hiding and name confusion:

-   `g_` for global data objects
-   `l_` for local data objects that hide static attributes
-   `i_` for `IMPORTING` parameters
-   `e_` for `EXPORTING` parameters
-   `c_` for `CHANGING` parameters
-   `r_` for `RETURNING` parameters

Further measures are the use of compound identifiers and component selectors.

The following sections discuss the different aspects of program-internal names in detail and with a systematic approach.

Naming conventions are frequently established for names within the source code that define specifications for naming, including potential prefixes and suffixes. These specifications often get bogged down in excessive formal strictness. Names created this way contain redundant information, are difficult to maintain and often do not achieve the main aim of readability and self-documenting sources. Therefore, we limited our discussion to the naming-related aspects that we consider essential and universal. Further specifications are only useful at the level of development groups/organizations.

If prefixes and/or suffixes are used, it is common practice to store the technical properties of the described object in these prefixes/suffixes. Apart from the fact that we do not consider it necessary to specify technical information in names, there are so many technical properties of an object in ABAP that they cannot be mapped using simple rules for short prefixes/suffixes. Or combinations of different technical additions often cannot be interpreted uniquely. Some examples:

-   With respect to the *data type* of a data object, there are naming conventions where *v* and *c* as prefixes stand for *variable* or *constant* elementary data objects. Similarly, *s* and *t* as prefixes stand for *structures* and internal *tables*. The type property *elementary* is wrongly equated with *variable* or *constant*. If the properties *static variable* and *sorted table* are also supposed to be expressed using *s*, this is very likely to cause mistakes with name assignments. This makes it much harder to achieve the goal of readable, self-documenting source codes.
-   With respect to the *validity area* or the *context* of a data object, the naming conventions often stipulate the prefixes `g_` and `l_` for the names of global and local data objects. We identified `g_` for global data objects as the only convention that is actually required for program-internal names. However, the simultaneous labeling of all non-global objects with the prefix `l_` for the local validity area is almost never necessary. `l_` should only be used if a local name is to be the same as a more global name and the corresponding lack of hiding component selectors would produce unreadable source code. The latter case only occurs for long class names in front of `=>`. If `me->` is used in front of the names of instance attributes, the method does not become any less unreadable than when an `l_` is placed in front of the name of a local data object.
-   It would actually be completely misleading to label static attributes of classes as global, using the prefix `g_`. These attributes are only valid within the class and have completely different semantics than global data objects. The use of these attributes does not indicate a design weakness as it is generally the case for global data objects today.
-   With respect to the *method parameters*, we identified the prefixes `i_`, `e_`, `c_`, and `r_` for importing, exporting, changing, and returning parameters as possible characteristics for distinguishing from data objects declared in the method. Apart from this, no further technical information needs to be expressed with additional prefixes. With method parameters in particular, technical information in prefixes tends to cause confusion rather than improve readability. For example, a prefix `is_` for *importing structure* would conflict with the prefix `is_` for *truth values*, and a prefix `it_` for *importing table* could easily be understood as a general abbreviation of *internal table*. If the role the parameter plays cannot be known from the descriptive name of a parameter and the procedure name, the names assigned are completely wrong and/or the procedure does not fulfill any clearly defined tasks. This type of conceptual weakness cannot be fixed (even with technical prefixes).

In summary, we recommend that you should use name additions cautiously, particularly additions with technical information. Of course, every organization is free to use these conventions, which can supplement our basic rules. In ABAP - with its high versatility of types, many contexts, the distinction between pass by reference and pass by value - it is probably not an easy task to create a complete, self-contained, consistent, technically correct, and - above all - easy-to-understand set of rules for prefixes and suffixes. The known results are just pure conventions that are usually incomplete and are not always applicable.

## Bad Example

The example shown below demonstrates how to hide names in different contexts. The fact that no descriptive names were used for the data objects (for the sake of simplicity) can be disregarded here.

```
DATA a1 TYPE string VALUE `a1 global`. 
DATA a2 TYPE string VALUE `a2 global`. 
DATA a3 TYPE string VALUE `a3 global`. 
DATA a4 TYPE string VALUE `a4 global`. 
DATA a5 TYPE string VALUE `a5 global`.CLASS demo DEFINITION. 
  PUBLIC SECTION. 
    METHODS main 
      IMPORTING a1 TYPE string DEFAULT 'a1 imported' 
      RETURNING value(a6) TYPE string. 
    CLASS-DATA a1  TYPE string VALUE `a1 class`. 
    CLASS-DATA a2  TYPE string VALUE `a2 class`. 
    DATA a3        TYPE string VALUE `a3 class`. 
    DATA a4        TYPE string VALUE `a4 class`. 
ENDCLASS.CLASS demo IMPLEMENTATION. 
  METHOD main. 
    DATA a3 TYPE string VALUE `a3 local`. 
    DATA a4 TYPE string VALUE `a4 local`. 
    CONCATENATE a1 demo=>a2 me->a3 a4 a5 
      INTO a6 SEPARATED BY `, `. 
  ENDMETHOD. 
ENDCLASS.
```

If you just consider the implementation of the `main` method in the `CONCATENATE` statement, it is clearly evident only for the `demo=>a2` and `me->a3` operands that they are attributes of the class and that a4 is a local data object of the method. It is only possible in the general overview to see that `a1` describes an importing parameter, `a5` describes a global data object of the program, and a6 describes a returning parameter. The global data objects a1 to a4 cannot be addressed in the method because they are hidden by local data objects or attributes of the class.

## Good Example

Unlike the source code above, the following source code includes the previously discussed prefixes, to prevent hiding and to distinguish method parameters from local data objects. Again, descriptive names were not used here to focus on aspects that are essential for this example.

```
DATA g_a1 TYPE string VALUE `g_a1 global`. 
DATA g_a2 TYPE string VALUE `g_a2 global`. 
DATA g_a3 TYPE string VALUE `g_a3 global`. 
DATA g_a4 TYPE string VALUE `g_a4 global`. 
DATA g_a5 TYPE string VALUE `g_a5 global`.CLASS demo DEFINITION. 
  PUBLIC SECTION. 
    METHODS main 
      IMPORTING i_a1 TYPE string DEFAULT 'i_a1 imported' 
      RETURNING value(r_a6) TYPE string. 
    CLASS-DATA a1  TYPE string VALUE `a1 class`. 
    CLASS-DATA a2  TYPE string VALUE `a2 class`. 
    DATA a3        TYPE string VALUE `a3 class`. 
    DATA a4        TYPE string VALUE `a4 class`. 
ENDCLASS.CLASS demo IMPLEMENTATION. 
  METHOD main. 
    DATA a3 TYPE string VALUE `a3 local`. 
    DATA a4 TYPE string VALUE `a4 local`. 
    CONCATENATE i_a1 demo=>a2 me->a3 a4 g_a5 
     INTO r_a6 SEPARATED BY `, `. 
  ENDMETHOD. 
ENDCLASS.
```

All operands are now clearly known in the `CONCATENATE` statement. A prefix (`l_`) can be implemented for the local names, but this is unnecessary for two reasons:

-   The declaration is defined near the place of usage and is always visible to the reader.
-   If you consistently use the selectors `->` and `=>` to address the attributes of a class, all names without a prefix and with no specified class or a reference variable are known as local data objects.

By applying the minimal naming convention used here, you can address all data objects that are declared in the above source code section in the method. Of course, the declaration of the global data objects is only implemented to demonstrate hiding and how to prevent it. Global data objects should [no longer be used](ABENDECLARATION_VARIABLES_GUIDL.md) in programs that do not work with classic dynpros.
