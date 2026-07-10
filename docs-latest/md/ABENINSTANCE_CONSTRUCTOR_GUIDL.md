---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENINSTANCE_CONSTRUCTOR_GUIDL.html"
abapFile: "ABENINSTANCE_CONSTRUCTOR_GUIDL.html"
type: "abap-reference"
---

## Background

When you define an ABAP class, you specify who can create an instance of this class or who may access the instance constructor of the class. To do this, you use the addition `CREATE` of the statement `CLASS ... DEFINITION`. The addition `CREATE PUBLIC` is the default setting and allows for the instantiation by any user of the class. By specifying `CREATE PROTECTED`, you can restrict the object creation to the class itself and its subclasses. Using the addition `CREATE PRIVATE` addition, objects can only be created by the class itself. The restriction of the object creation to the class itself is useful in connection with the [singleton design pattern](ABENSTATIC_CLASS_SINGLETON_GUIDL.md), for example, where the class itself performs the object creation.

From a technical point of view, the instance constructor can be declared in all visibility sections that are more general or equal to the instantiation specified in the addition `CREATE` of the statement `CLASS ... DEFINITION`, using the statement `METHODS` `constructor`. However, the actual visibility is controlled by the addition `CREATE`.

## Rule

**Declare the instance constructor of global classes in the public visibility section.**

Always declare the instance constructor of a global class in its public visibility section and independently of the instantiation specified by the addition `CREATE` in the class definition.

## Details

The components of global classes are stored internally separated according to the visibility section they belong to. Depending on the usage type of the class, only parts of the class are respected by ABAP Compiler in compilations. This procedure requires that the constructor of a global class is always declared in the public visibility section of the class. For these technical reasons, the instance constructor of a global class is always supposed to be declared in the public visibility section (`PUBLIC SECTION`). If it is declared in another visibility section, this may produce unjustified syntax errors in individual cases when global classes are used.

## Use

The technical restrictions mentioned only apply to the processing of global classes. Within local classes, the instance constructor can also be defined in other visibility sections and the positioning should correspond with the visibility section specified using the addition `CREATE`. This enables you to use types for the interface of the instance constructor of a local class that are only accessible in a restricted visibility section.
