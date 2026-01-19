---
title: "ABAPTYPES_KEYDEF"
description: |
  ABAPTYPES_KEYDEF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTYPES_KEYDEF.htm"
abapFile: "ABAPTYPES_KEYDEF.html"
keywords: ["if", "method", "class", "data", "types", "internal-table", "field-symbol", "ABAPTYPES", "KEYDEF"]
---

[Short Reference](ABAPTYPES_SHORTREF.html)\\ \\n

``... [ WITH [`key`](ABAPTYPES_PRIMARY_KEY.html)\ ]``\\ 
    ``[ WITH [`secondary_key1`](ABAPTYPES_SECONDARY_KEY.html)\ ]\ [ WITH [`secondary_key2`](ABAPTYPES_SECONDARY_KEY.html)\ ] ...``\\ 
    `[\ \{WITH|WITHOUT\} FURTHER SECONDARY KEYS ] ...`

[1. `... WITH FURTHER SECONDARY KEYS`](#ABAP_ADDITION_1@3@)

[2. `... WITHOUT FURTHER SECONDARY KEYS`](#ABAP_ADDITION_2@3@)

Definition of the table key of a table type. The following can be defined:

The order in which the components of a table key are defined is significant for the table type. The additions `WITH|WITHOUT FURTHER SECONDARY KEYS` determine the genericness with respect to the secondary table key.

An internal table type that has no table key or an incomplete table key is generic with respect to the table key. Such a table type can only be used for [typing](ABENTYPING_GLOSRY.html) formal parameters or field symbols. A standard table type with a generic primary table key only can be specified for [`DATA`](ABAPDATA_REFERRING.html) after `TYPE`. This creates a bound table type with a [standard key](ABENSTANDARD_KEY_GLOSRY.html).

**Primary Key**

The genericity of a table type with respect to the primary key is determined as follows:

The non-generic table categories can be split up as follows:

**Secondary Key**

The genericity of a table type with respect to the secondary keys depends on that of the primary key by default and can be overridden using the additions `WITH|WITHOUT FURTHER SECONDARY KEYS`.

A generic table type must not be used as a component of a [structured type](ABAPTYPES_STRUC.html).

Definition of a table type for a [hashed table](ABENHASHED_TABLE_GLOSRY.html) with a unique primary key as well as two non-unique secondary [sorted keys](ABENSORTED_KEY_GLOSRY.html), `cityfrom_to` and `airp_from_to`.

This addition explicitly specifies that the table type is generic with respect to the secondary key. This means that it includes table types that can have further secondary keys in addition to the optional secondary keys specified using `WITH [secondary_key](ABAPTYPES_SECONDARY_KEY.html) ...`.

If 15 secondary keys are already defined, the addition `WITH FURTHER SECONDARY KEYS` cannot be specified.

This addition explicitly specifies that the table type is not generic with respect to the secondary key. This means that it includes only table types that have exactly those secondary keys specified using `WITH [secondary_key](ABAPTYPES_SECONDARY_KEY.html) ...`.

This addition expresses the default behavior in table types with a generic primary key.

The addition `WITH FURTHER SECONDARY KEYS` in the declaration of the tabular type `itab` enables the passing of internal tables with any secondary keys to the parameter `p` of the method `meth`. Without this addition, the addition `WITHOUT FURTHER SECONDARY KEYS` would be used implicitly and the method call shown would not be possible.

-   A [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) using [`key`](ABAPTYPES_PRIMARY_KEY.html)
-   Up to 15 [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html) using [`secondary_key1`](ABAPTYPES_SECONDARY_KEY.html), [`secondary_key2`](ABAPTYPES_SECONDARY_KEY.html), `...`

-   If `WITH [key](ABAPTYPES_PRIMARY_KEY.html)` is not specified, a table type is fully generic with respect to the primary key.
-   If there is no declaration about the uniqueness of the key in `[key](ABAPTYPES_PRIMARY_KEY.html)`, a table type is partly generic with respect to the key.
-   If a key declaration with a uniqueness declaration is made in `[key](ABAPTYPES_PRIMARY_KEY.html)`, a table type is not generic with respect to the primary key.

-   If no primary key is declared for standard tables, this primary key is generic with respect to the key fields and defined implicitly as non-unique.
-   If no primary key is declared for sorted tables, this primary key is generic with respect to the key fields and uniqueness.
-   If no primary key is declared for hashed tables, this primary key is generic with respect to the key fields and uniqueness. However, it is important to note that concrete hashed tables can have only one unique key.

-   If the primary key is completely or partially generic, the table type is by default generic with respect to the secondary keys. The default behavior can be expressed using the addition `WITH FURTHER SECONDARY KEYS`. However, if the addition `WITHOUT FURTHER SECONDARY KEYS` is specified, the table type is generic with respect to the primary key but not with respect to the secondary key.
-   If the primary key is not generic, then the table type is by default not generic with respect to the secondary key either. The default behavior can be expressed using the addition `WITHOUT FURTHER SECONDARY KEYS`. However, if the addition `WITH FURTHER SECONDARY KEYS` is specified, the table type is generic with respect to the secondary key but not with respect to the primary key.

-   This addition expresses the default behavior in table types with a generic primary key.
-   In table types with a non-generic primary key, `WITH FURTHER SECONDARY KEYS` can be used to override the default behavior and make it generic with respect to the secondary keys.

TYPES spfli\_tab TYPE HASHED TABLE OF spfli \\n WITH UNIQUE KEY carrid connid \\n WITH NON-UNIQUE SORTED KEY cityfrom\_to COMPONENTS cityfrom cityto \\n WITH NON-UNIQUE SORTED KEY airp\_from\_to COMPONENTS airpfrom airpto. CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n TYPES itab TYPE SORTED TABLE OF scarr \\n WITH UNIQUE KEY carrid \\n WITH FURTHER SECONDARY KEYS. \\n CLASS-METHODS meth IMPORTING p TYPE itab. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD meth. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n DATA itab TYPE SORTED TABLE OF scarr \\n WITH UNIQUE KEY carrid \\n WITH NON-UNIQUE SORTED KEY name COMPONENTS carrname. \\n\\ \\n demo=>meth( itab ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abentypes\_statements.html abaptypes.html abaptypes\_itab.html