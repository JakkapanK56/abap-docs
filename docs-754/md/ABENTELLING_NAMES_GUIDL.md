---
title: "Descriptive Names - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentelling_names_guidl.htm"
abapFile: "abentelling_names_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Structure and Style](ABENSTRUCTURE_STYLE_GUIDL.md) →  [Naming](ABENNAMING_GUIDL.md) → 

Descriptive Names

Background

A name can include technical and semantic information:

-   Technical information can be very versatile. Examples of options in a data object: data type, declaration context, whether a procedure parameter is passed by value or by reference.

-   The semantic information indicates the purpose of classes or data types, the content of data objects, how methods work, and so on.

The technical information about a repository object or internal program entity can be viewed directly in ABAP Workbench. This information is also displayed in tooltips or can be displayed with a simple double-click. However, in contrast to purely technical type information, the semantics of a variable are more difficult to identify without the relevant information in the name.

Rule

Use descriptive names

Always choose names that include the semantic information required for your context and that also easy to understand.

Details

The aim is to assign descriptive and self-documenting names. You should always follow a problem-oriented approach instead of an implementation-oriented approach. For example, a truth value should not be named flag. Instead it should have a name that indicates its meaning, such as is\_checked.

When you select a descriptive, problem-oriented name, you should consider the following aspects in particular:

-   Appropriate use of nouns, verbs, and adjectives

-   Meaningful use of abbreviations

-   Appropriate separation of name components

These points are discussed in detail in the following sections. The purely technical information for a named object can be displayed quickly and easily, using double-click navigation in ABAP Workbench. Therefore, this information can be omitted from names and semantic information can be used in names instead.

Any organizations (within SAP or external) that want to specify technical information in addition to semantic information in names, can define their own naming conventions that are based on our semantic rules. However, we believe that encoding technical attributes in names is not suitable for making ABAP programs (developed according to the present guidelines) easier to understand and maintain. This may be different in the context of other programming languages with fewer types and less powerful development environments.

The use of nouns, verbs, and adjectives for naming depends on the entity that you want to name:

-   Packages and package interfaces
    A package comprises a collection of repository objects for a specific subject area. The package name can either consist of one or more singular nouns that describe the subject area (such as sabp\_compiler), or one or more plural nouns that indicate the contained objects (such as sabp\_analyze\_tools). Subpackages start with the name of the super package and contain suffixes that indicate the specialization. The name of a package interface starts with the name of the package. Information about visibility or restrictions to certain consumers are attached as an optional suffix. For example, \_public, stands for public interface and \_verification stands for interface to verification tools.

-   Data types, classes, and interfaces
    They denote categories of things and are therefore named using nouns, for example, cl\_abap\_conv\_codepage. The greater the degree of specialization, the greater the number of nouns required for description. This can result in longer, combined names, for instance, if\_abap\_string\_writer or cl\_abap\_xml\_name\_converter. If necessary, the name can be further specified with an additional adjective, as in if\_serializable\_object and cl\_abap\_weak\_reference. The name of a category is usually written in the singular form. Therefore, a class name should generally consist of singular nouns. However, there are many examples of deviations from this rule, such as cl\_abap\_ memory\_utilities. These classes often do not model a category but instead provide a hodgepodge of loosely related functions, usually in the form of exclusively static methods.

-   Associations
    An association refers to a semantic relationship between a start object and a target object. To make sure this relationship is unambiguous when an association is used in a path, you should prefix the association with the \_ character. This should be followed by a name that contains the name of the target object (in the case of non-reflexive associations).

-   Variable data objects and procedure parameters
    These describe attributes and are therefore named with a noun, for instance, cl\_abap\_regex->pattern. Truth values are labeled using the is\_ prefix, which is consistent with natural language usage. If the attribute in question is a quantity (in ABAP, usually an internal table), this should be expressed using the plural form, for example in the interface parameter matches of the method cl\_abap\_matcher->find\_all.

-   Constants
    From a technical point of view, these are data objects with non-modifiable values at program runtime. They describe special, non-modifiable attributes. Values of constants are described with nouns. They are distinguished by a specific attribute (such as minimum size, start value) expressed by one or more additional adjectives. Some examples are cl\_abap\_exceptional\_values=>decfloat34\_max and cl\_abap\_format=>o\_sign\_as\_postfix.

-   Events
    They are named using an expression in present perfect that describes their occurrence, for example, cl\_dd\_form\_element->button\_clicked and cl\_gui\_alv\_ tree->selection\_changed. In this example, the noun is abbreviated significantly (o for output format). More information about useful abbreviations can be found below.

-   Procedures
    New procedures are methods according to the [use ABAP objects](ABENABAP_OBJ_PROGR_MODEL_GUIDL.md "Guideline") rule. Here, we distinguish between different cases:

-   Event handlers are named after the corresponding event. They are assigned a prefix that identifies them as handler methods. In ABAP, the on\_ prefix has established itself. This is consistent with natural language use and clearly labels a method as an event handler. For the two event examples above, the names of the corresponding handler methods would be on\_ button\_clicked and on\_selection\_changed.

-   The name of methods with a return value (functional methods) describes the returned result. The get\_ prefix is added to describe the task of the method. An example of this is the cl\_abap\_exceptional\_values=>get\_max\_value method. If the method returns a truth value, is\_ is used as a prefix instead of get\_. In ABAP, these get\_ methods are intended to identify the return value (by using a calculation, for example). Unlike in Java, for example, no own methods should be used to simply return attribute values. Instead you should use the [write-protected (READ-ONLY) attributes](ABENENCAPSULATION_GUIDL.md "Guideline") provided in ABAP.

-   In all other cases, the name of a method describes an activity to be performed. Therefore, the method name is a verb, generally expressed in the imperative. Examples: cl\_abap\_regex->create\_ matcher and cl\_abap\_memory\_utilities=>do\_garbage\_collection. Methods used to set attributes are described using the relevant attribute, which is prefixed with set\_. Other procedures ([function modules and subroutines](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md "Guideline")) required to wrap method calls are named accordingly.

-   Exception
    Exceptions describe unexpected states. Technically they are classes. [Classic exceptions](ABENCLASS_EXCEPTION_GUIDL.md "Guideline") should no longer be used. Except for the prefix, the same considerations apply here. To distinguish exceptions from normal classes, they are assigned their [own prefix](ABENNAMES_REPOS_OBJ_GUIDL.md "Guideline") cx\_, provided that they are global exception classes. The name of an exception reflects the rejected state as clearly as possible, for instance, cx\_sy\_offset\_not\_allowed. If an entire hierarchy of exception classes exists, the names of the superclasses do not describe special exception situations. Instead they describe error categories (such as cx\_ sy\_data\_access\_error in this example).

You should avoid using abbreviations as name components wherever possible. Exceptions to this rule are abbreviations that are usually used instead of the complete term, such as GUI or XML. However, if the use of certain abbreviations cannot be avoided due to restricted space, you should initially use common abbreviations.

If no common abbreviation exists, you should proceed as follows: Vowels are omitted, unless they are the first letter of the word. They are of minor significance for the recognition value. If a word starts with a double vowel, both letters are kept for ease of recognition (for example, outbnd as the abbreviation for outbound instead of otbnd). If further abbreviations are required, you can replace double consonants with single consonants. Even after this step, the word is generally still recognizable.

An example of a poorly chosen abbreviation would be tstmp for timestamp. This abbreviation does not follow the above rules and is not intuitive. Readers would probably initially think of the possible components tst or tmp, which would remind them of test or temporary. However, an association with timestamp is initially very difficult to identify. Therefore, if you create abbreviations, you must ensure that the result is not similar to another, possibly more common abbreviation for a completely different term.

When you create abbreviations in a foreign language, you run the risk that the result represents a word or abbreviation with a completely different meaning. If in doubt, you should enter the abbreviation in a search engine to check it. For example, you only have four characters available and you want to use the word button. In this case, you should select the abbreviation bttn (following the abbreviation rules above), instead of the first four characters.

As a rule, name components should be visually separated using underscores in ABAP. This makes the names easier to read. Separating name components with uppercase and lowercase (common in languages with C-like syntax) is [not useful](ABENLOWER_UPPER_CASE_GUIDL.md "Guideline") in ABAP. Underscores normally identify a name, because ABAP words are usually not formed this way. The only exceptions here are certain format options for character string templates (such as SCIENTIFIC\_ WITH\_LEADING\_ZERO), which can only occur within character string expressions, and certain additions of SELECTION-SCREEN and WRITE.

You should not use digits as name components. They are often a sign of poorly selected names (because they are not very descriptive) or indicate the use of multiple individual variables, where the use of an internal table would make more sense. Exceptions include the interface parameters of procedures. Numbering similar parameters definitely makes sense here.

The use of digits to form phonetic names is also problematic because they require a degree of familiarization, and their meaning is not always obvious to everyone. A particularly bad use of digits is the abbreviation trmn8r for terminator. The commonly used 2 for to is the only justifiable exception here. This is often found as a name component in conversion procedures and can be interpreted easily (convert\_itf\_2\_html, for example).

Notes

-   You must always keep in mind that the information included in a name must remain valid. This applies to semantic information, but especially to technical information. If, for example, technical information included in a name changes due to a refactoring measure, all relevant names and their consumers must be modified. However, this is not an easy task in released interfaces. If in doubt, remember that names containing incorrect information are worse than names that do not provide any information at all. This is why programming guidelines exist that suggest only using nondescript names. Since semantic attributes are less likely to change in the course of (further) development than technical attributes, our predominantly semantic specifications for naming are relatively well safeguarded from program changes.

-   Less is often more. Our suggestions indicate how to compose names to include the information that is necessary in a context. They should only be used when the meaning of the name is not completely obvious from the context. For example:

METHOD do\_something.
  CONSTANTS lcv\_maximum\_do\_loop\_count TYPE i VALUE 100.
  DO lcv\_maximum\_do\_loop\_count TIMES.
    ...
  ENDDO.
ENDMETHOD.

The long name lcv\_maximum\_do\_loop\_count is quite difficult to read. A method can only include a manageable [number of statements](ABENPROC_VOLUME_GUIDL.md "Guideline"). Therefore, you can select a very simple name in simple cases:

METHOD do\_something.
  CONSTANTS nmax TYPE i VALUE 100.
  DO nmax TIMES.
    ...
  ENDDO.
ENDMETHOD.

A further example of where short names are useful is helper fields declared in [LET expressions](ABAPLET.md).

Bad Example

The following source code shows the declaration of a class that executes arithmetic calculations. This should be understood as a synthetic naming example. Of course, in ABAP, it makes absolutely no sense to [wrap](ABENMODULARIZATION_GUIDL.md "Guideline") the arithmetic operations on elementary numeric data types using a class. The names of the class and its methods are unnecessarily short, and the names of the method parameters have no semantic meaning at all.

CLASS calcltr DEFINITION.
  PUBLIC SECTION.
    METHODS: add IMPORTING a        TYPE i
                           b        TYPE i
                 RETURNING VALUE(c) TYPE i,
             sub IMPORTING a        TYPE i
                           b        TYPE i
                 RETURNING VALUE(c) TYPE i,
             mul IMPORTING a        TYPE i
                           b        TYPE i
                 RETURNING VALUE(c) TYPE i,
             div IMPORTING a        TYPE i
                           b        TYPE i
                 RETURNING VALUE(c) TYPE f.
ENDCLASS.

Good Example

The following source code shows the same class as in the code above, but the names of the class and its methods are now spelled in full, and the names of the method parameters indicate their semantic meaning.

CLASS calculator DEFINITION.
  PUBLIC SECTION.
    METHODS: add IMPORTING addend1           TYPE i
                           addend2           TYPE i
                 RETURNING VALUE(sum)        TYPE i,
        subtract IMPORTING minuend           TYPE i
                           subtrahend        TYPE i
                 RETURNING VALUE(difference) TYPE i,
        multiply IMPORTING factor1           TYPE i
                           factor2           TYPE i
                 RETURNING VALUE(product)    TYPE i,
          divide IMPORTING dividend          TYPE i
                           divisor           TYPE i
                 RETURNING VALUE(quotient)   TYPE f.
ENDCLASS.

The addition and multiplication operands are commutative, which means you can use digits here to distinguish them.
