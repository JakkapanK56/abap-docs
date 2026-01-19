---
title: "ABENDECLARATIONS"
description: |
  ABENDECLARATIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDECLARATIONS.htm"
abapFile: "ABENDECLARATIONS.html"
keywords: ["class", "data", "types", "field-symbol", "ABENDECLARATIONS"]
---

Declarations define the properties of program local [classes](ABENCLASS_GLOSRY.html), [interfaces](ABENOO_INTF_GLOSRY.html), [data types](ABENDATA_TYPE_GLOSRY.html), [data objects](ABENDATA_OBJECT_GLOSRY.html) and [field symbols](ABENFIELD_SYMBOL_GLOSRY.html). Declarations are made either with [declaration statements](ABENDECLARATION_STATEMENT_GLOSRY.html) or as [inline declarations](ABENINLINE_DECLARATION_GLOSRY.html) using [declaration expressions](ABENDECLARATION_EXPRESSION_GLOSRY.html). Furthermore, inside [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) local helper variables can be declared with `LET` expressions.

Besides the declarations shown here, the [formal parameters](ABENFORMAL_PARAMETER_GLOSRY.html) of the [parameter interface](ABENPARAMETER_INTERFACE_GLOSRY.html) of a [procedure](ABENPROCEDURE_GLOSRY.html) can be declared with the respective [modularization statements](ABENABAP_LANGUAGE_MODULARIZATION.html). For those and also for field symbols, the date type can be either [complete](ABENCOMPLETE_TYPING_GLOSRY.html) or [generic](ABENGENERIC_TYPING_GLOSRY.html) and the definition of that type is called [typing](ABENTYPING_GLOSRY.html).

-   [Declaration Statements](ABENABAP_DECLARATIONS.html)
-   [Inline Declarations](ABENINLINE_DECLARATIONS.html)
-   [Local Declarations in Constructor Expressions](ABENLOCAL_EXPR_DECLARATIONS.html)
-   [Typing](ABENTYPING.html)

-   The declared entity is visible statically as soon as it is declared and is valid throughout its entire [context](ABENOBJ_CONTEXT_GLOSRY.html).
-   Entities declared in [class pools](ABENCLASS_POOL_GLOSRY.html) and [interface pools](ABENINTERFACE_POOL_GLOSRY.html) are program local within these but can be made public for external usage. This involves [global classes](ABENGLOBAL_CLASS_GLOSRY.html), [global interfaces](ABENGLOBAL_INTERFACE_GLOSRY.html) and their [public](ABENPUBLIC_GLOSRY.html) components.
-   Local declarations always hide the more global declarations of the superordinate contexts.

abenabap.html abenabap\_reference.html