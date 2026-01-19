---
title: "ABAPTYPES_SECONDARY_KEY"
description: |
  ABAPTYPES_SECONDARY_KEY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTYPES_SECONDARY_KEY.htm"
abapFile: "ABAPTYPES_SECONDARY_KEY.html"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "data", "types", "internal-table", "ABAPTYPES", "SECONDARY", "KEY"]
---

[Short Reference](ABAPTYPES_SHORTREF.html)\\ \\n

`... \{UNIQUE HASHED\}|\{UNIQUE SORTED\}|\{NON-UNIQUE SORTED\}`\\ 
    `KEY key_name [ALIAS alias_name] COMPONENTS comp1 comp2 ...`

[`... ALIAS alias_name`](#ABAP_ONE_ADD@1@)

Definition of a [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) with an internal table type. An internal table can have up to 15 secondary keys.

**Types of Secondary Keys**

There are three types of secondary keys that are distinguished by the type of access and their uniqueness:

**Names of Secondary Keys**

Each secondary key has a unique name with which it can be addressed. The name must be specified directly as `key_name` and must comply with the [naming conventions](ABENNAMING_CONVENTIONS.html). The name specified cannot be one of the predefined names `primary_key` or `loop_key`. In addition, the names of secondary keys and any alias name for the [primary key](ABAPTYPES_PRIMARY_KEY.html) must be unique.

**Key Fields**

The key fields of the secondary key can be defined in the following ways, whereby the order is significant:

In an operation that changes the content of individual lines of an internal table, the key fields of a secondary table key are read-only only if the secondary key is used during this operation.

[Use secondary keys in a way that benefits the table.](ABENSECONDARY_KEY_GUIDL.html)

The program `DEMO_SECONDARY_KEYS` demonstrates the declaration and use of a secondary table key and the resulting performance gains.

Definition of a table type with a primary key and two secondary keys `hash_key` and `sort_key`. The primary key in a standard table must not be unique. The secondary key `hash_key` has the same components as the primary key and must be a unique hash key. The sorted key `sort_key` could also be defined as unique, but this is not beneficial in the example shown here, since a customer ID can appear more than once in the reservation table. The two syntax forms shown here differ in the specification of the name `primary_key` for the primary key, but they have the same meaning.

Syntax form without the name `primary_key` specified:

Syntax form with the name `primary_key` specified:

An alias name `alias_name` can be defined for each secondary key of an internal table. The alias name is in the namespace of the secondary key, must comply with the [naming conventions](ABENNAMING_CONVENTIONS.html), and must be unique. It cannot be one of the predefined names `primary_key` or `loop_key`. It enables the secondary key to be addressed by means of an additional user-defined name.

An alias name is part of the technical type properties of a table type. Two table types with otherwise identical technical properties, but different alias names, are not [compatible](ABENCOMPATIBLE_GLOSRY.html).

Definition of a secondary key `carrname` with an alias name `carriername`. Both names can be used in the `USING KEY` addition of a `LOOP` statement.

-   Unique secondary [hash keys](ABENHASH_KEY_GLOSRY.html) defined using `UNIQUE HASHED` that are linked to table lines using a [hash algorithm](ABENHASH_ALGORITHM_GLOSRY.html).
-   Unique secondary [sorted keys](ABENSORTED_KEY_GLOSRY.html) defined using `UNIQUE SORTED` that are linked to table lines using a [secondary table index](ABENSECONDARY_TABLE_INDEX_GLOSRY.html) in which the key fields are sorted in ascending order.
-   Non-unique secondary [sorted keys](ABENSORTED_KEY_GLOSRY.html) defined using `NON-UNIQUE SORTED` that are linked to table lines using a [secondary table index](ABENSECONDARY_TABLE_INDEX_GLOSRY.html) in which the key fields are sorted in ascending order.

-   Individual components `comp1 comp2 ...` of the line type are listed after `KEY`. The line type must be structured, and the components cannot be table types nor can they contain table types as components.
-   If the whole table line is to be defined as a key, the [pseudo component](ABENPSEUDO_COMPONENT_GLOSRY.html)\\ `table_line` can be specified as the only component `comp` after `KEY`. This is possible for all line types that are not table types or that do not contain table types as components.

-   When internal tables are accessed using the statements [`READ TABLE itab`](ABAPREAD_TABLE.html), [`LOOP AT itab`](ABAPLOOP_AT_ITAB.html), [`MODIFY itab`](ABAPMODIFY_ITAB.html), and [`DELETE itab`](ABAPDELETE_ITAB.html) or in reads using [table expressions](ABENTABLE_EXPRESSIONS.html) and in [mesh types](ABAPTYPES_MESH.html) and [mesh paths](ABENMESH_PATHES.html), a secondary key can be used to determine the lines to be processed or the processing order. To do this, the additions `WITH [TABLE] KEY ... COMPONENTS` or `USING KEY` must be specified. A secondary key is never used implicitly.
-   The statement [`INSERT itab`](ABAPINSERT_ITAB.html) determines the insert position exclusively using the primary key and primary index only. A secondary key can only be specified for the source table from which multiple lines are copied. The latter also applies to the statement [`APPEND`](ABAPAPPEND.html).
-   A secondary key is never generic. When it is defined, all key fields and the uniqueness must be specified completely. An internal table type can, however, be generic with respect to its number of secondary keys.
-   [`DEFAULT KEY`](ABAPTYPES_PRIMARY_KEY.html) cannot be specified for secondary keys.
-   Structured components can be specified as key fields, provided that the components meet the other requirements. When a structured key field is evaluated, the rules for [structure comparisons](ABENLOGEXP_RULES_OPERANDS_STRUC.html) apply.
-   If different table keys for an internal table contain the same components, a syntax check warning occurs, which can be hidden using a pragma.
-   Apart from the restrictions described above, the names of secondary keys can be freely selected, but they should not use the component names of the internal table. The name `loop_key` is reserved for the explicitly specifying the key used for [`LOOP`](ABAPLOOP_AT_ITAB.html) processing.
-   Key fields can also have [reference types](ABENREFERENCE_TYPE_GLOSRY.html). However, particularly for sorted keys this is not recommended, as sorting reference variables is questionable. For non-initial invalid references, no order is defined. A runtime error occurs if such a reference must be compared in the context of a key access.
-   The internal management of secondary keys in an internal table can involve significant [memory consumption](ABENITAB_KEY_MEMORY.html) and [updates](ABENITAB_KEY_SECONDARY_UPDATE.html). For this reason, secondary keys should be used sparingly and only be implemented if their benefits outweigh the costs.
-   See, for example, the executable example [Deleting Lines Using Keys](ABENDELETE_ITAB_USING_KEY_ABEXA.html).

-   A secondary key with an alias name can be addressed by the alias name `alias_name` as well as by its name `key_name`.
-   An alias name can be used when changing the secondary keys of an existing table type in order to avoid the invalidation of existing users.

TYPES sbook\_tab \\n TYPE STANDARD TABLE \\n OF sbook \\n WITH NON-UNIQUE KEY carrid connid fldate bookid \\n WITH UNIQUE HASHED KEY hash\_key \\n COMPONENTS carrid connid fldate bookid \\n WITH NON-UNIQUE SORTED KEY sort\_key \\n COMPONENTS customid. TYPES sbook\_tab \\n TYPE STANDARD TABLE \\n OF sbook \\n WITH NON-UNIQUE KEY primary\_key \\n COMPONENTS carrid connid fldate bookid \\n WITH UNIQUE HASHED KEY hash\_key \\n COMPONENTS carrid connid fldate bookid \\n WITH NON-UNIQUE SORTED KEY sort\_key \\n COMPONENTS customid. TYPES scarr\_tab \\n TYPE HASHED TABLE OF scarr \\n WITH UNIQUE KEY carrid \\n WITH UNIQUE SORTED KEY \\n carrname ALIAS carrier\_name COMPONENTS carrname. \\n\\ \\nDATA carriers TYPE scarr\_tab. \\n\\ \\n... \\n\\ \\nLOOP AT carriers ASSIGNING FIELD-SYMBOL() \\n USING KEY carrname. \\n ... \\nENDLOOP. \\n\\ \\nLOOP AT carriers ASSIGNING \\ \\n USING KEY carrier\_name. \\n ... \\nENDLOOP. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abentypes\_statements.html abaptypes.html abaptypes\_itab.html abaptypes\_keydef.html