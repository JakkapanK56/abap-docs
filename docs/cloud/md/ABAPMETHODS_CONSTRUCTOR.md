---
title: "ABAPMETHODS_CONSTRUCTOR"
description: |
  ABAPMETHODS_CONSTRUCTOR - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPMETHODS_CONSTRUCTOR.htm"
abapFile: "ABAPMETHODS_CONSTRUCTOR.html"
keywords: ["select", "do", "while", "if", "method", "class", "data", "ABAPMETHODS", "CONSTRUCTOR"]
---

``METHODS constructor [[`FINAL`](ABAPMETHODS_ABSTRACT_FINAL.html)]``\\ 
  ``[IMPORTING [`parameters`](ABAPMETHODS_PARAMETERS.html)\ [PREFERRED PARAMETER p]]``\\ 
  `[\{RAISING exc1|RESUMABLE(exc1) exc2|RESUMABLE(exc2) ...\}`\\ 
  `|\{EXCEPTIONS exc1 exc2 ...\}].`

[1. `... IMPORTING parameters`](#ABAP_ADDITION_1@3@)

[2. `... RAISING exc1|RESUMABLE(exc1) exc2|RESUMABLE(exc2) ...`](#ABAP_ADDITION_2@3@)

[3. `... EXCEPTIONS exc1 exc2 ...`](#ABAP_ADDITION_3@3@)

[4. `... FINAL`](#ABAP_ADDITION_4@3@)

This statement declares the instance constructor `constructor` of a class. In a local class, it can be specified in all [visibility sections](ABENVISIBILITY_SECTION_GLOSRY.html) that are more general than or equal to the instantiability specified in the [`CREATE`](ABAPCLASS_OPTIONS.html) addition of the statement [`CLASS DEFINITION`](ABAPCLASS_DEFINITION.html):

In a global class, the instance constructor must always be declared in the public visibility section, for technical reasons. In principle, the declaration can be made in the same visibility sections as in the table above, however the internal organization of a global class can cause incorrect syntax errors when the class is used.

Each class has a predefined method called `constructor`. By declaring this explicitly, the interface of the method `constructor` can be defined as class-specific, and its functions can be implemented. Without explicit declaration, the instance constructor assumes the parameter interface of the direct superclass and calls it implicitly.

If the instance constructor is implemented in a subclass, the instance constructor of the superclass must be called explicitly using [`super->constructor`](ABAPCALL_METHOD_METH_SUPER.html), even if the latter is not explicitly declared. The exception to this are direct subclasses of the root node `object`. The following restrictions apply before the superclass constructor is called:

After the superclass constructor has been called, the self-reference `me->` can be used and instance components can be accessed.

For each instance of a class, the instance constructor is called only once using the statement [`CREATE OBJECT`](ABAPCREATE_OBJECT.html) immediately after it has been created. Here, appropriate actual parameters must be assigned to all non-optional input parameters, return values can be assigned to non-class-based exceptions, and class-based exceptions can be declared. It is not possible to call the instance constructor explicitly, unless the superclass constructor is called using `super->constructor` in the redefined constructor of a subclass.

When an instance constructor is executed, the current instance is temporarily the type of the class in which the constructor is defined. This has the following effects:

The addition `IMPORTING` can be used to define input parameters according to the same rules as for general methods. The additions `RAISING` and `EXCEPTIONS` for the declaration of class-based exceptions or the definition of non-class-based exceptions also have the same meaning as for general methods.

When the instance constructor is executed, the same applies to [resumable exceptions](ABENRESUMABLE_EXCEPTION_GLOSRY.html) as to all other methods. If processing can be resumed successfully, the system continues to create the object.

Instance constructors are implicitly final. The addition [`FINAL`](ABAPMETHODS_ABSTRACT_FINAL.html) can be specified, but it is not necessary.

The class `c3` inherits from class `c2`, which inherits from class `c1`. The instance constructor `constructor` is explicitly declared in all classes and must be implemented in all classes, whereby the implementation in a subclass must contain the call of the superclass constructor. The predicate expression [`IS INSTANCE OF`](ABENLOGEXP_INSTANCE_OF.html) shows that every instance constructor for an instance of its own class is executed when an object of class `c3` is instantiated.

-   The instance constructor does not have access to the instance components of its class. The self-reference [`me->`](ABENME.html) must not be used. The static components of its class can be accessed, but not using `me->`.
-   Before the superclass constructor is called, an instance constructor cannot be exited using statements such as `RETURN` or `CHECK`.

-   If methods are called when a superclass constructor is executed, the implementations of the superclass are executed and not the redefinitions of subclasses. The specification of `me->` to address a redefined method in the new subclass has no effect.
-   Abstract methods of the same class cannot be called in an instance constructor.
-   When a superclass constructor is executed, attempts to access components of the subclass using a [downcast](ABENDOWN_CAST_GLOSRY.html) produce a runtime error.
-   While the superclass constructor is being executed, the predicate expression [`IS INSTANCE OF`](ABENLOGEXP_INSTANCE_OF.html) is true for the current superclass and not true for the subclass that has just been created.

-   Instance constructors are an exception to the rule that all non-private components on a path in the inheritance hierarchy are in the same namespace. The instance constructor of each class has its own interface and its own implementation. An instance constructor cannot be redefined.
-   Instance constructors are declared in the public [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html) of a class purely for technical reasons. The actual visibility is controlled by the addition `CREATE \{PUBLIC|PROTECTED|PRIVATE\}` of the statement [`CLASS DEFINITION`](ABAPCLASS_DEFINITION.html). It is recommended that the instance constructor of a local class is declared in the visibility section that corresponds to the instantiability, because this allows the components declared there to be used in the constructor interface. However, for global classes, only the public section is possible.
-   Before the superclass constructor is called, static components of the same class cannot be accessed using `me->` in the instance constructor of a subclass. However, access to the components without using `me->` or using the class name and the class component selector `=>` is always possible.

CLASS output DEFINITION. \\n PUBLIC SECTION. \\n CLASS-DATA out TYPE REF TO if\_demo\_output. \\n CLASS-METHODS class\_constructor. \\nENDCLASS. \\n\\ \\nCLASS output IMPLEMENTATION. \\n METHOD class\_constructor. \\n out = cl\_demo\_output=>new( ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\nCLASS c2 DEFINITION INHERITING FROM c1. \\n PUBLIC SECTION. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\nCLASS c3 DEFINITION INHERITING FROM c2. \\n PUBLIC SECTION. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS c1 IMPLEMENTATION. \\n METHOD constructor. \\n IF me IS INSTANCE OF c1. \\n output=>out->write( 'C1' ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS c2 IMPLEMENTATION. \\n METHOD constructor. \\n super->constructor( ). \\n IF me IS INSTANCE OF c2. \\n output=>out->write( 'C2' ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS c3 IMPLEMENTATION. \\n METHOD constructor. \\n super->constructor( ). \\n IF me IS INSTANCE OF c3. \\n output=>out->write( 'C3' ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n NEW c3( ). \\n output=>out->display( ). \\n ENDMETHOD. \\nENDCLASS. \\ `CREATE PUBLIC` `CREATE PROTECTED` \\ `CREATE PRIVATE` `PUBLIC SECTION` X X X `PROTECTED SECTION` - X X `PRIVATE SECTION` - - X abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abenclass\_ifac\_components.html abenmethods.html abapmethods.html