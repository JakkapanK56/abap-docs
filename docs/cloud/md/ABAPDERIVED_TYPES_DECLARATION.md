---
title: "ABAPDERIVED_TYPES_DECLARATION"
description: |
  ABAPDERIVED_TYPES_DECLARATION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPDERIVED_TYPES_DECLARATION.htm"
abapFile: "ABAPDERIVED_TYPES_DECLARATION.html"
keywords: ["update", "do", "if", "method", "class", "data", "types", "internal-table", "ABAPDERIVED", "TYPES", "DECLARATION"]
---

For the purpose of modularization, many [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html) can be used outside of the reserved handler methods by declaring variables, for example, in ABAP programs. The statements `TYPES`, `DATA` and `CREATE DATA` are supported. For example, an internal table can be declared with the type [`TYPE TABLE FOR`](ABAPTYPE_TABLE_FOR.html):

TYPES tab\_type TYPE TABLE FOR CREATE entity\_name. \\nDATA itab TYPE TABLE FOR CREATE entity\_name.

`entity_name` must be the full name of the entity, and not the alias defined in the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html), as there is no clear reference to a specific BDEF outside of handler methods in [behavior pools](ABENBEHAVIOR_POOL_GLOSRY.html).

Typing method parameters with BDEF derived types can be done by referencing an existing type, for example, as follows:

... \\nTYPES tab\_type TYPE TABLE FOR CREATE demo\_managed\_root. \\nMETHODS some\_meth IMPORTING itab TYPE tab\_type. \\n...

The following type declarations are supported in the context of BDEF derived types:

The following options are available for declaring types and data objects with BDEF derived types after `... FOR ...`:

**Note**

The following type and data object declarations with BDEF derived types demonstrate the described declaration options.

The class `CL_DEMO_RAP_EML_EXPLICIT_DECL` demonstrates the explicit declaration of variables with BDEF derived types with a simple EML `READ` statement.

-   [`TYPE TABLE FOR`](ABAPTYPE_TABLE_FOR.html)
-   [`TYPE STRUCTURE FOR`](ABAPTYPE_STRUCTURE_FOR.html)
-   [`TYPE REQUEST FOR`](ABAPTYPE_REQUEST_FOR.html)
-   [`TYPE RESPONSE FOR`](ABAPTYPE_RESPONSE_FOR.html)

-   Specifying the name of the [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html), followed by `\\\\` and an entity of the composition tree

-   After `\\\\`, an alias name must be specified if an alias is defined for the entity. Otherwise, the entity name can be specified.
-   For example, `TYPES t1 TYPE TABLE FOR CREATE demo_managed_root\\\\\demo_managed_root.`. The demo BDEF does not specify an alias name for the root entity. The example BDEF `DEMO_MANAGED_ROOT_WAS` specifies an alias for the root entity, therefore a type declaration can look like this: `TYPES t2 TYPE TABLE FOR CREATE demo_managed_root_was\\\\\_root.`

-   For convenience and as a shorter form of the previous declaration option, specifying [RAP BO entities](ABENRAP_BO_ENTITY_GLOSRY.html) such as the name of the [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html) (i.e. the name of the BDEF) or other [CDS entities](ABENCDS_ENTITY_GLOSRY.html) of a [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) is possible

-   For example, `TYPES t3 TYPE TABLE FOR CREATE demo_managed_root.` and `TYPES t4 TYPE TABLE FOR CREATE demo_managed_root_was.`, which are the same as *t1* and *t2* respectively.

-   Specifying [associations](ABENCDS_ASSOCIATION_GLOSRY.html) defined in a BDEF preceded by `\\`

-   For example, `TYPES t5 TYPE TABLE FOR CREATE demo_managed_root_was\\_child.`
-   Note that the longer version with `\\\\` followed by an entity name, `\\` and an association is also possible.

-   You can only declare types and data objects with specific BDEF derived types according to specifications in the BDEF. For example, you can only declare a type with `... FOR CREATE ...` when create operations are enabled in the BDEF.
-   Several BDEF derived types can only be used in [ABAP behavior pools](ABENBEHAVIOR_POOL_GLOSRY.html).
-   In [ABAP development tools for Eclipse](ABENADT_GLOSRY.html), you can display BDEF derived type information with F2, which typically shows the long version.

"Specifying RAP BO entities \\n"Specifying the RAP BO root entity \\nTYPES t1 TYPE TABLE FOR CREATE demo\_managed\_root\_was. \\nDATA d1 TYPE TABLE FOR CREATE demo\_managed\_root\_was. \\n"Specifying child entity \\nTYPES t2 TYPE TABLE FOR UPDATE demo\_managed\_child\_was. \\nDATA d2 TYPE TABLE FOR UPDATE demo\_managed\_child\_was. \\n\\ \\n"Specifying the name of the RAP BO root entity, followed by \\\\\\\\\\ and an \\n"entity of the composition tree \\n"If an alias name for the entity is specified, it must be specified \\n"after \\\\\\\\\\. Otherwise, the entity name can be specified. \\n"t3/d3 are the same as t1/d1. \\nTYPES t3 TYPE TABLE FOR CREATE demo\_managed\_root\_was\\\\\\\\\\\_Root. \\nDATA d3 TYPE TABLE FOR CREATE demo\_managed\_root\_was\\\\\\\\\\\_Root. \\n"In this example, t4/d4 are the same as t2/d2. \\nTYPES t4 TYPE TABLE FOR UPDATE demo\_managed\_root\_was\\\\\\\\\\\_Child. \\nDATA d4 TYPE TABLE FOR UPDATE demo\_managed\_root\_was\\\\\\\\\\\_Child. \\n\\ \\n"Specifying associations of the RAP BO preceded by \\\\ \\n"In this example, t5/d5 are the same as t6/d6. \\nTYPES t5 TYPE TABLE FOR CREATE demo\_managed\_root\_was\\\\\_child. \\nDATA d5 TYPE TABLE FOR CREATE demo\_managed\_root\_was\\\\\_child. \\nTYPES t6 TYPE TABLE FOR CREATE demo\_managed\_root\_was\\\\\\\\\\\_Root\\\\\_child. \\nDATA d6 TYPE TABLE FOR CREATE demo\_managed\_root\_was\\\\\\\\\\\_Root\\\\\_child. \\n"In this example, t7/d7 are the same as t8/d8. \\nTYPES t7 TYPE TABLE \\n FOR READ IMPORT demo\_managed\_root\_was\\\\\\\\\\\_Child\\\\\_parent. \\nDATA d7 TYPE TABLE \\n FOR READ IMPORT demo\_managed\_root\_was\\\\\\\\\\\_Child\\\\\_parent. \\nTYPES t8 TYPE TABLE FOR READ IMPORT demo\_managed\_child\_was\\\\\_parent. \\nDATA d8 TYPE TABLE FOR READ IMPORT demo\_managed\_child\_was\\\\\_parent. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html