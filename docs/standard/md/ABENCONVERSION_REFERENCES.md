---
title: "ABENCONVERSION_REFERENCES"
description: |
  ABENCONVERSION_REFERENCES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONVERSION_REFERENCES.htm"
abapFile: "ABENCONVERSION_REFERENCES.html"
keywords: ["insert", "do", "while", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "ABENCONVERSION", "REFERENCES"]
---

The content of a reference variable can only be assigned to another reference variable and the following rules apply:

No conversion takes place when variables are assigned. For an assignment to take place, the [static type](ABENSTATIC_TYPE_GLOSRY.html) of the target reference variable must be more general than or the same as the [dynamic type](ABENDYNAMIC_TYPE_GLOSRY.html) of the source reference variable. After a successful assignment, the target reference variable points to the same object as the source reference variable, that is, the target reference variable inherits the dynamic type of the source reference variable.

Assignments between reference variables and data objects that are not reference variables lead to a syntax error or the runtime error `OBJECTS_MOVE_NOT_SUPPORTED`.

Reference variables can point to [objects](ABENOBJECT_GLOSRY.html) in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) or in the [shared objects memory](ABENSHARED_OBJECTS_MEMORY_GLOSRY.html). While an [area handle](ABENAREA_HANDLE_GLOSRY.html) is used to bind an [area instance version](ABENAREA_INSTANCE_VERSION_GLOSRY.html) to a program, however, references from the program can be made to [shared objects](ABENSHARED_OBJECTS_GLOSRY.html) and vice versa (if it is a read or write access). In other cases, an area instance version is closed, which means that no references can point to the internal session from an area instance version. References that point from the internal session to shared objects can be saved, but not dereferenced. Object references and data references are possible within a completed area instance version, although data references are subject to restrictions with respect to the dynamic type.

Each reference variable has a dynamic type and a static type.

The static type of a reference variable is always less specific or the same as the dynamic type. This basic rule determines all assignments between reference variables.

An initial reference variable contains the [null reference](ABENNULL_REFERENCE_GLOSRY.html), which does not point to any objects. This means that it does not have a data type or a class as a dynamic type. The same applies to a non-initial reference variable that contains an invalid reference that no longer points to an object.

The object reference variable `oref` has the static type `super_class`. After the object is generated with `NEW`, its dynamic type is the special class `sub_class` - as shown by [RTTI](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html).

In an assignment between reference variables, the target variable inherits the dynamic type of the source variable. An assignment is possible if the static type of the target variable is less specific or the same as the dynamic type of the source variable.

If the static type of the target variables is less specific or the same as the static type of the source variable, an assignment is always possible. The name upcast comes from the fact that the movement within the inheritance tree is upwards. Since the target variable can have more dynamic types in comparison to the source variables, this assignment is also referred to as a widening cast. An upcast is possible in all ABAP statements in which the content of a data object is assigned to another data object. This includes, for example, assignments with the regular assignment operator ([`=`](ABAPMOVE_CAST.html)), the insertion of lines in internal tables, or passes from actual to formal parameters.

Explicit castings using the [casting operator](ABENCASTING_OPERATOR_GLOSRY.html)\\ [`?=`](ABAPMOVE_CAST.html) are also possible, but not usually necessary. Using the [casting operators](ABENCASTING_OPERATOR_GLOSRY.html)\\ [`CAST`](ABENCONSTRUCTOR_EXPRESSION_CAST.html) for an upcast in combination with [inline declarations](ABENINLINE_DECLARATIONS.html), however, can be a good way of providing a reference variable with a more general type.

See the previous example. The statement `iref = NEW class( )` is an upcast, because it is followed by an reference variable of the static type of a superclass that points to an object of a subclass.

If the static type of the target variable is more specific than the static type of the source variable, a check must be made at runtime, before the assignment is executed, whether it is less specific or the same as the dynamic type of the source variable. The name downcast comes from the fact that the movement in the inheritance space is downwards. Since the target variable can accept fewer dynamic types in comparison to the source variable, this assignment is also referred to as a narrowing cast. A downcast must always be performed explicitly. The following options are available:

If this prerequisite is not met, a catchable exception is raised, and the reference variable keeps its original value during the assignment.

The following example shows the three ways of performing a downcast for object reference variables.

In each of the three cases, `oref` is assigned to the class reference variable that is reached first. A check with `IS INSTANCE OF` would of course also be possible before the use of the casting operator `?=`.

-   [data references can only be assigned to data reference variables](ABENCONVERSION_REFERENCES_DATA.html)
-   [object references can only be assigned to object reference variables](ABENCONVERSION_REFERENCES_OBJECTS.html)

-   The dynamic type is defined at runtime of the program, and is the data type of the data object or the class of the object to which the reference variable points. It determines the components the object contains.
-   The static type is determined in the declaration of the reference variable. In data references, the static type is either a non-generic data type or the predefined generic type `data`. In object references, the static type is either a class or an interface, so an object reference can also be referred to as a class reference or an interface reference.

-   Special assignment with the [casting operator](ABENCASTING_OPERATOR_GLOSRY.html)\\ [`?=`](ABAPMOVE_CAST.html).
-   Use of a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) with the [casting operator](ABENCASTING_OPERATOR_GLOSRY.html)\\ [`CAST`](ABENCONSTRUCTOR_EXPRESSION_CAST.html).
-   Use of the addition `INTO` of the statement [`WHEN TYPE`](ABAPWHEN_TYPE.html) in a case distinction with [`CASE TYPE OF`](ABAPCASE_TYPE.html) for object reference variables.

-   For non-initial source variables, the predicate expression [`IS INSTANCE OF`](ABENLOGEXP_INSTANCE_OF.html) or the case distinction [`CASE TYPE OF`](ABAPCASE_TYPE.html) can be used to check whether a downcast is possible in specific classes or interfaces.
-   The dynamic type of an initial or invalid source variable is undefined. In a downcast, the [null reference](ABENNULL_REFERENCE_GLOSRY.html) or an invalid reference that does not point to an object can be assigned to every target variable that can be specified here.
-   When a subclass is instantiated, an associated object reference variable cannot be cast to the subclass until the [instance constructors](ABENINSTANCE_CONSTRUCTOR_GLOSRY.html) of all superclasses have been executed. When an instance constructor is executed, the dynamic type of the object reference variable is the current superclass.

-   If the casting operator [`?=`](ABAPMOVE_CAST.html) is used, the exception `CX_SY_MOVE_CAST_ERROR` is caught if a downcast is not possible.
-   If the casting operator [`CAST`](ABENCONSTRUCTOR_EXPRESSION_CAST.html) is used, the predicate expression [`IS INSTANCE OF`](ABENLOGEXP_INSTANCE_OF.html) is used in advance to check whether the downcast is possible.
-   The use of the addition `INTO` of the statement [`WHEN TYPE`](ABAPWHEN_TYPE.html) in a case distinction with [`CASE TYPE OF`](ABAPCASE_TYPE.html) combines the check and the downcast.

CLASS super\_class DEFINITION. \\nENDCLASS. \\n\\ \\nCLASS sub\_class DEFINITION INHERITING FROM super\_class. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n DATA oref TYPE REF TO super\_class. \\n oref = NEW sub\_class( ). \\n\\ \\n cl\_demo\_output=>display( CAST cl\_abap\_classdescr( \\n cl\_abap\_refdescr=>describe\_by\_object\_ref( oref ) \\n )->absolute\_name ). \\n ENDMETHOD. \\nENDCLASS. CLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n DATA a1 TYPE string VALUE \`C1\`. \\nENDCLASS. \\nCLASS c2 DEFINITION INHERITING FROM c1. \\n PUBLIC SECTION. \\n DATA a2 TYPE string VALUE \`C2\`. \\nENDCLASS. \\nCLASS c3 DEFINITION INHERITING FROM c2. \\n PUBLIC SECTION. \\n DATA a3 TYPE string VALUE \`C3\`. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(o) = cl\_demo\_output=>new( ). \\n\\ \\n DATA oref TYPE REF TO object. \\n\\ \\n oref = NEW c1( ). \\n DATA: \\n cref11 TYPE REF TO c1, \\n cref12 TYPE REF TO c2, \\n cref13 TYPE REF TO c3. \\n TRY. \\n cref13 ?= oref. \\n o->write( cref13->a3 ). \\n CATCH cx\_sy\_move\_cast\_error. \\n TRY. \\n cref12 ?= oref. \\n o->write( cref12->a2 ). \\n CATCH cx\_sy\_move\_cast\_error. \\n TRY. \\n cref11 ?= oref. \\n o->write( cref11->a1 ). \\n CATCH cx\_sy\_move\_cast\_error. \\n ENDTRY. \\n ENDTRY. \\n ENDTRY. \\n\\ \\n oref = NEW c2( ). \\n IF oref IS INSTANCE OF c3. \\n FINAL(cref23) = CAST c3( oref ). \\n o->write( cref23->a3 ). \\n ELSEIF oref IS INSTANCE OF c2. \\n FINAL(cref22) = CAST c2( oref ). \\n o->write( cref22->a2 ). \\n ELSEIF oref IS INSTANCE OF c1. \\n FINAL(cref21) = CAST c1( oref ). \\n o->write( cref21->a1 ). \\n ENDIF. \\n\\ \\n oref = NEW c3( ). \\n CASE TYPE OF oref. \\n WHEN TYPE c3 INTO FINAL(cref33). \\n o->write( cref33->a3 ). \\n WHEN TYPE c2 INTO FINAL(cref32). \\n o->write( cref32->a2 ). \\n WHEN TYPE c1 INTO FINAL(cref31). \\n o->write( cref31->a1 ). \\n ENDCASE. \\n\\ \\n o->display( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenreference\_assignments.html abenset\_references.html