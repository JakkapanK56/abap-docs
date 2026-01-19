---
title: "ABENNAMING_CONVENTIONS"
description: |
  ABENNAMING_CONVENTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNAMING_CONVENTIONS.htm"
abapFile: "ABENNAMING_CONVENTIONS.html"
keywords: ["loop", "do", "if", "case", "method", "class", "data", "types", "internal-table", "field-symbol", "ABENNAMING", "CONVENTIONS"]
---

The following conventions apply to the names of all definable objects within ABAP programs, such as data types, data objects, classes, macros, and [procedures](ABENPROCEDURE_GLOSRY.html):

Since ABAP is not case-sensitive, the names of program-internal objects are not case-sensitive either.

[Program-Internal Names](ABENPROG_INTERN_NAMES_GUIDL.html)

Outside of class declarations, different objects have separate namespaces, so that it is possible that data types, data objects or procedures can have the same name. Classes and interfaces thereby lie within the same namespace as data types. The namespace is valid for the respective context. Within a context, the names of the same objects must be unique. For example, there can only be one subroutine with the same name in an ABAP program and only one function module with the same name in the entire AS ABAP.

Within a class declaration, the name of every class component - data type, attribute, method, event, or alias name - must be unique.

The following names are reserved and must not be used in personal declarations:

The names of the following built-in data objects are not reserved and are hidden by any identically named declarations. It is strongly advised to not create any data objects with the names of these built-in data objects:

-   A name can be up to 30 characters long.
-   Permitted are letters from *A* to *Z*, digits from *0* to *9*, and underscores (`_`).
-   The name must start with a letter or an underscore (`_`). Only outside of ABAP objects can the name also start with a different character.
-   The name can have a [namespace prefix](ABENNAME_SPACE_PREFIX_GLOSRY.html). A namespace prefix consists of at least three characters that are enclosed by two forward slashes (`/.../`). The entire length of prefix and name must not exceed 30 characters.
-   The names of predefined ABAP types or predefined data objects must not be used for data types or data objects.
-   The use of names that are reserved for [ABAP words](ABENABAP_WORD_GLOSRY.html) and so on for custom definitions is not actually forbidden, but is strongly advised against.
-   Field symbols are special in that their names have to be enclosed in angle brackets (`<...>`). The angle brackets are part of the name, which means that a field symbol could be called `<>`, but this is not recommended.

-   All types possible in ABAP are in a namespace. In particular, data types and object types do not have separate namespaces. A global class, for example, cannot be created with a name that is already assigned to a data type in the ABAP Dictionary.
-   The naming conventions presented here must be followed. The syntax check does not check them completely, but this should not be exploited unnecessarily.
-   The program `DEMO_CHARACTERS_IN_ABAP_NAMES` demonstrates how these checks run in the current system.

-   User-defined data types must not have the name of a [built-in ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html). This applies to type definitions in the ABAP language and in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html).
-   The name of a structure component must not have the name of the [pseudo component](ABENPSEUDO_COMPONENT_GLOSRY.html)\\ `table_line`. This applies to type definitions in ABAP and in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) as well as to data declarations and when creating data objects in ABAP.
-   A [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) of an internal table must not have the predefined names `primary_key` or `loop_key`.
-   The name of the [built-in data object](ABENBUILT_IN_OBJECTS.html)\\ [`space`](ABENSPACE.html) must not be used in any positions for other declarations or data objects, except in the case of the obsolete [anonymous components](ABENANONYMOUS_COMPONENTS.html).
-   The name of the [built-in data object](ABENBUILT_IN_OBJECTS.html)\\ [`me`](ABENME.html) must not be used in classes for attributes, formal parameters, and local data objects.

-   The structures of the [ABAP system fields](ABENSYSTEM_FIELDS.html)\\ `sy` and `syst` and the system fields themselves.
-   The [obsolete built-in data object](ABENBUILT_IN_OBSOLETE.html)\\ [`screen`](ABENSCREEN_STRUCTURE_OBSOLETE.html).

abenabap.html abenabap\_reference.html abenabap\_syntax.html