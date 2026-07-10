---
title: "Object-Oriented Programming - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobj_oriented_guidl.htm"
abapFile: "abenobj_oriented_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Architecture](ABENARCHITECTURE_GUIDL.md) → 

Object-Oriented Programming

Achieving an optimal object-oriented design is not an easy task and this is not the subject of these programming guidelines. It is definitely worth consulting the relevant literature for this topic. The rules below are limited to basic recommendations (for making source codes easier to understand and maintain) and ABAP specifics on working with global and local classes.

Developers who have experience with object-oriented development in other programming languages should be aware of the differences between ABAP Objects and Java:

-   In Java, all superior data objects (especially container variables such as strings) are modeled using classes. By contrast, ABAP provides very powerful, predefined types. Besides the predefined ABAP strings, internal tables are also provided that are used for structured data storage. These tables represent the most powerful ABAP type. Therefore, it is generally not beneficial to implement own container types using ABAP classes.

-   Java reaches a high processing speed for methods, by using optimizations and JIT compilation. In ABAP, however, the high processing speed is primarily attained using very powerful and complex individual statements. This is another reason why implementing own container classes is usually not beneficial. Direct access to a suitable internal table, for example, is always faster than handwritten access logic in ABAP.

Of course, you can transfer algorithms and a general class structure to ABAP, from an application written in another object-oriented programming language. However, the greater the depth, the greater the differences. Therefore, you need to make appropriate modifications, in order to transfer a detailed design in a different language to ABAP Objects.

-   [Encapsulation](ABENENCAPSULATION_GUIDL.md "Guideline")

-   [Modularization](ABENMODULARIZATION_GUIDL.md "Guideline")

-   [Static Classes and Singletons](ABENSTATIC_CLASS_SINGLETON_GUIDL.md "Guideline")

-   [Inheritance](ABENINHERITANCE_GUIDL.md "Guideline")

-   [Class References and Interface References](ABENCLASS_REF_INTERF_REF_GUIDL.md "Guideline")

-   [Local Types for Global Classes](ABENLOCAL_TYPE_GLOB_CLASS_GUIDL.md "Guideline")

-   [Instance Constructor](ABENINSTANCE_CONSTRUCTOR_GUIDL.md "Guideline")

Continue
[Encapsulation](ABENENCAPSULATION_GUIDL.md)
[Modularization](ABENMODULARIZATION_GUIDL.md)
[Static Classes and Singletons](ABENSTATIC_CLASS_SINGLETON_GUIDL.md)
[Inheritance](ABENINHERITANCE_GUIDL.md)
[Class References and Interface References](ABENCLASS_REF_INTERF_REF_GUIDL.md)
[Local Types for Global Classes](ABENLOCAL_TYPE_GLOB_CLASS_GUIDL.md)
[Instance Constructor](ABENINSTANCE_CONSTRUCTOR_GUIDL.md)
