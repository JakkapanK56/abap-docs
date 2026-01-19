---
title: "ABENOPERANDS_NAMES"
description: |
  ABENOPERANDS_NAMES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENOPERANDS_NAMES.htm"
abapFile: "ABENOPERANDS_NAMES.html"
keywords: ["select", "if", "class", "data", "types", "ABENOPERANDS", "NAMES"]
---

A single operand, that is, an operand that is not an expression, can either be elementary or be a combination of components. Composite operands are:

As a consequence, names for operands are either elementary names or names constructed from multiple names separated by component selectors. An elementary name is used for addressing the following:

[Naming conventions](ABENNAMING_CONVENTIONS.html) apply to the elementary names. Composite names with component selectors are used for addressing individual components. A component can itself be a superunit of further components. Subcomponents can be addressed by [chaining](ABENCHAINING_GLOSRY.html) multiple names.

In addition to the component selectors listed here, [ABAP SQL](ABENABAP_SQL_GLOSRY.html) also has a [column selector](ABENTABLE_COMP_SELECTOR_GLOSRY.html) (`~`).

-   Structured data types or data objects (structure)
-   Instances of classes (objects)
-   Classes
-   Interfaces

-   Elementary operands
-   Components that are unique in the current context
-   Superunits made up of components

-   [Structure Component Selector](ABENSTRUCTURE_COMPONENT_SELECTOR.html)
-   [Object Component Selector](ABENOBJECT_COMPONENT_SELECTOR.html)
-   [Class Component Selector](ABENCLASS_COMPONENT_SELECTOR.html)
-   [Interface Component Selector](ABENINTERFACE_COMPONENT_SELECTOR.html)
-   [Dereferencing Operator](ABENDEREFERENCING_OPERATOR.html)
-   [Chainings](ABENCOMPONENT_CHAINING_SELECTOR.html)
-   [Offset/Length Specifications for Substring Access](ABENOFFSET_LENGTH.html)

abenabap.html abenabap\_reference.html abenoperands.html abenoperands\_data\_objects.html