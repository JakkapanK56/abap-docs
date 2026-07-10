---
title: "Original Language - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoriginal_langu_guidl.htm"
abapFile: "abenoriginal_langu_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [ABAP-Specific Rules](ABENABAP_SPECIFIC_RULES_GUIDL.md) →  [Programm Type and Program Properties](ABENPROGR_TYPE_FEATURES_GUIDL.md) → 

Original Language

Background

When a new repository object is created, such as a program, class, or database table in ABAP Dictionary, its original language must be specified. This is specified implicitly by the current logon language. All translatable texts created as part of a development object in a development project (including descriptive short texts and long texts, the text elements of a program, and the documentation of data types or interfaces) are assigned the specified original language. The texts are created in other languages in a translation process (triggered by development) from the original language into the target languages.

Once specified, there is currently no technical support for replacing an original language with another language across an entire project.

Rule

Define the original language at project level

Consider carefully at the beginning which original language you want to use for your repository objects at project level. Developers may only create their development objects in the original language defined for this project (or subproject).

Details

Proceed as follows when defining the original language:

-   If all development groups involved in a project share a single native language, define this language as the original language of all development objects (this is known as monolingual development).

-   If the development groups are multilingual,

-   the original language of all development objects is either a language understood by all developers involved (usually English, also called monolingual development)

-   or the original language in parts of the project is the native language of the majority of developers working in them (multilingual development).

Monolingual development groups are a best-case scenario, but are not always possible nowadays. The two possible scenarios for multilingual development groups, either monolingual or multilingual development, meet two different and contradictory requirements:

-   When you log on to a system in a language other than the original language, there is no effective way of working with development objects (either new or being developed) until a translation of the relevant texts has been created in the appropriate target language. Translation usually takes place in a follow-on translation system and has to be transported back to the development system. This means that an efficient development process is only possible if a single original language is defined at the beginning for the entire project, particularly in international development groups (often working in more than one location). All people involved in the development and validation process can then use the product, even if only for test purposes. If monolingual development is implemented in multilingual development groups, therefore, some (if not all) developers in a project need to create texts in a language other than their native language.

-   There are usually no tools or processes available for linguistic and stylistic checks on UI texts and documentation written by developers in a language other than their native language. Ideally, developers working on user dialogs and documentation should create texts in their native language and these texts should then be translated by trained translators into their own native language, using predefined terminology.

This second point is the reason why English is not required to be the one and only original language for all development projects, and why monolingual development groups should be free to work in their native language, with follow-on translation if required.

If a development group is multilingual, the original language of each development object must be decided case by case. Generally, the approach with single understood development language is used, since international development teams require monolingual development to be able to use their development resources most effectively for a particular project. In some cases, for example where subprojects require large volumes of text to be created, it might be preferable to define the native language of the developers as the original language. This is particularly relevant in SAP's in-house development teams, which still have a high proportion of German-speaking workers.

In multilingual projects, it is best develop associated business functions in a single language (at least at package level). Table contents should also be created in a single language.

Notes

-   When a repository object is created, its original language is the language selected at logon. It is therefore necessary to agree on a specific logon language when creating or editing repository languages.

-   Regardless of whether a development project is monolingual or multilingual, consistent terminology must be defined for all texts created in the project and used across the board. In multilingual development projects, the translation of the terminology into the relevant languages should be completed before development start if possible, so that the terms can be used by the developers. The existing [standards](ABENCORRECTNESS_QUALITY_GUIDL.md "Guideline") for UI texts and documents must also be followed.
