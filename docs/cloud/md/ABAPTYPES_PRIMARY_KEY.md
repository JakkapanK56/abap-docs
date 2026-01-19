---
title: "ABAPTYPES_PRIMARY_KEY"
description: |
  ABAPTYPES_PRIMARY_KEY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPTYPES_PRIMARY_KEY.htm"
abapFile: "ABAPTYPES_PRIMARY_KEY.html"
keywords: ["select", "loop", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "field-symbol", "ABAPTYPES", "PRIMARY", "KEY"]
---

`... \{\ [UNIQUE | NON-UNIQUE]`\\ 
      `\{\ \{KEY [primary_key [ALIAS alias_name] COMPONENTS] comp1 comp2 ...\}`\\ 
      `|\ \{DEFAULT KEY\}\ \}  \}`\\ 
  `|\ \{ EMPTY KEY \} ...`

[1. `... [UNIQUE|NON-UNIQUE]\ \{KEY ...\}|\{DEFAULT KEY\}`](#ABAP_ALTERNATIVE_1@2@)

[2. `... EMPTY KEY`](#ABAP_ALTERNATIVE_2@2@)

[1.  `... primary_key COMPONENTS`](#ABAP_ADDITION_1@3@)

[2. `... ALIAS alias_name`](#ABAP_ADDITION_2@3@)

Definition of the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) of a table type by specifying components or by specifying it as a standard key.

**Name of the Primary Key**

Like [secondary keys](ABAPTYPES_SECONDARY_KEY.html), the primary key also has a name with which it can be addressed. This name cannot be freely selected and is specified as `primary_key` instead. It does not have to be explicitly specified when the table is defined since it is always set implicitly. However, it can also be specified before the addition `COMPONENTS`.

**Key Fields**

The key fields of the primary key can be defined in the following ways, whereby the order is significant:

The key fields of the primary table key are generally read-only in all operations that change the content of individual lines of a sorted table or hashed table.

**Uniqueness of the Primary Key**

The specifications `UNIQUE` or `NON-UNIQUE` determine the uniqueness of the primary table key. In the case of a primary table key specified with `UNIQUE`, a line with specific content of the key fields can occur only once in an internal table of this type. Only `NON-UNIQUE` can be used for [standard tables](ABENSTANDARD_TABLE_GLOSRY.html). `UNIQUE` must be used for [hashed tables](ABENHASHED_TABLE_GLOSRY.html) and both can be specified for [sorted tables](ABENSORTED_TABLE_GLOSRY.html).

Uniqueness does not have to be specified, which makes the table type partially generic with respect to the entry of the primary key. The table type can then only be used for [typing](ABENTYPING_GLOSRY.html) of formal parameters or field symbols. The table categories differ as follows:

Definition of a primary key without explicit name specification. The statement has the same meaning as in the following example.

If the key fields are defined by specifying components, the name of the primary key can be specified explicitly in the statement `TYPES`. However, the predefined name `primary_key` must be specified for `primary_key`. The addition `COMPONENTS` must then also be specified before the component is specified.

Explicitly specifying the name `primary_key` does not enable the predefined name `primary_key` to be changed but enables an alias name to be specified using the addition `ALIAS`.

Definition of a primary key with explicit name specification. The statement has the same meaning as in the previous example.

An alias name `alias_name` can be defined for the primary key in sorted tables and hashed tables, for as long as the primary key is not generic. The alias name is in the namespace of the secondary key, must comply with the [naming conventions](ABENNAMING_CONVENTIONS.html), and must be unique. It cannot be one of the predefined names `primary_key` or `loop_key`. It enables the primary key to be addressed like a secondary key by means of a user-defined name. The syntax requires the name `primary_key` to be specified explicitly when defining an alias name.

An alias name is part of the technical type properties of a table type. Two table types with otherwise identical technical properties, but different alias names, are not [compatible](ABENCOMPATIBLE_GLOSRY.html).

A primary key with an alias name can be addressed by the alias name `alias_name` as well as by the predefined name `primary_key`.

Definition of a primary key with an explicit name specification and its use in a [table expression](ABENTABLE_EXPRESSION_GLOSRY.html).

Definition of an [empty primary key](ABENITAB_EMPTY_KEY.html) of a table type. This variant is only possible for standard tables. An empty table key does not contain any key fields.

The table in the example below is only intended for loop processing in which all lines of the table are processed in a random order.

-   Individual components `comp1 comp2 ...` of the line type are listed after `KEY`. The line type must be structured, and the components cannot be table types, nor can they contain table types as components. For elementary line types, `table_line` is the only component that can be specified.
-   If the whole table line is to be defined as a key, the [pseudo component](ABENPSEUDO_COMPONENT_GLOSRY.html)\\ `table_line` can be specified as the only component `comp` after `KEY`. This is possible for all line types that are not table types or that do not contain table types as components. For structured line types, `table_line` works like a listing of each individual component.
-   Specification of the [standard key](ABENSTANDARD_KEY_GLOSRY.html)\\ `DEFAULT KEY`. The standard key fields of a structured line type are all fields with a non-numeric elementary data type. The standard key for non-structured line types is the entire table line if the line type itself is not a table type. If there is no corresponding component or if the line type is itself a table type, the standard key is [empty](ABENITAB_EMPTY_KEY.html), which is only possible for standard tables.

-   The addition `NON-UNIQUE` is added implicitly for types for standard tables. A standard table is never generic with respect to uniqueness.
-   Types for sorted tables can be completely generic with respect to uniqueness.
-   Types for hashed tables can be completely generic with respect to uniqueness, but a concrete hashed table always has a unique primary key.
-   Uniqueness cannot be specified for the generic table categories `ANY TABLE` or `INDEX TABLE`.

-   The declaration of the primary table key as a [standard key](ABENSTANDARD_KEY_GLOSRY.html) can be [critical](ABENITAB_STANDARD_KEY.html) for various reasons. Instead, key fields should be specified explicitly.
-   Structured components can be explicitly specified when specifying key fields, provided that the components meet the other requirements. When a structured key field is evaluated, the rules for [structure comparisons](ABENLOGEXP_RULES_OPERANDS_STRUC.html) apply.
-   Key fields can also have [reference types](ABENREFERENCE_TYPE_GLOSRY.html). However, this is not recommended particularly for sorted keys, since sorting reference variables is questionable. For non-initial invalid references, no order is defined. A runtime error occurs if such a reference must be compared in the context of a key access.
-   The addition `DEFAULT KEY` must not be confused with the addition `EMPTY KEY`. A standard key declared using the addition `DEFAULT KEY` can be [empty](ABENITAB_EMPTY_KEY.html) unexpectedly in a standard table, whereas `EMPTY KEY` declares explicitly empty primary table keys explicitly for tables with any line types.
-   [Static boxes](ABENSTATIC_BOX_GLOSRY.html) and their components can be key fields of internal tables.

-   When an empty table key is defined explicitly, this means that the internal table is to be handled like an array in which there is no order specified by key values.
-   The order of a standard table with an empty primary key is determined primarily by the [primary index](ABENPRIMARY_TABLE_INDEX_GLOSRY.html). There are no restrictions on related index accesses and loop processing.
-   In statements that evaluate the primary table key to identify lines to be processed, an empty table key generally produces unexpected behavior and therefore a syntax check warning. For a list of these statements, see [Empty Table Key](ABENITAB_EMPTY_KEY.html).
-   A table key where `EMPTY KEY` is used to declare an empty table key explicitly is not generic with respect to its primary key. This means that the addition `EMPTY KEY` can be used to prevent a table type from being too generic with respect to its primary key.
-   The explicit declaration of an empty table key using `EMPTY KEY` is independent of the line type.
-   A standard table with an empty primary key can have non-empty [secondary keys](ABENSECONDARY_KEY_GLOSRY.html).
-   Empty table keys can also be created implicitly when the [standard key](ABENITAB_STANDARD_KEY.html) is used for standard tables. If an empty table key is required, it is preferable to declare it explicitly using `EMPTY KEY`.

TYPES sbook\_tab \\n TYPE SORTED TABLE \\n OF sbook \\n WITH UNIQUE KEY carrid connid fldate bookid. TYPES sbook\_tab \\n TYPE SORTED TABLE \\n OF sbook \\n WITH UNIQUE KEY primary\_key \\n COMPONENTS carrid connid fldate bookid. TYPES sbook\_tab \\n TYPE SORTED TABLE \\n OF sbook \\n WITH UNIQUE KEY primary\_key ALIAS full\_table\_key \\n COMPONENTS carrid connid fldate bookid. \\n\\ \\nDATA bookings TYPE sbook\_tab. \\n\\ \\nFINAL(customid) = bookings\[ KEY full\_table\_key COMPONENTS \\n carrid = 'LH' \\n connid = '400' \\n fldate = '20240905' \\n bookid = '12345678' \]-customid. CLASS mail\_manager DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS send \\n IMPORTING \\n address TYPE s\_email \\n text TYPE string. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS mail\_manager IMPLEMENTATION. \\n METHOD send. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n TYPES addresses TYPE STANDARD TABLE OF scustom-email WITH EMPTY KEY. \\n\\ \\n DATA email\_tab TYPE addresses. \\n\\ \\n FIELD-SYMBOLS LIKE LINE OF email\_tab. \\n\\ \\n ... \\n\\ \\n SELECT email \\n FROM scustom \\n INTO TABLE @email\_tab. \\n ... \\n\\ \\n LOOP AT email\_tab ASSIGNING USING KEY primary\_key. \\n mail\_manager=>send( address = text = \`text\` ). \\n ENDLOOP. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abentypes\_statements.html abaptypes.html abaptypes\_itab.html abaptypes\_keydef.html