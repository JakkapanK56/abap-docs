---
title: "ABENDDICDDL_DEFINE_DYNAMIC_CACHE"
description: |
  ABENDDICDDL_DEFINE_DYNAMIC_CACHE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDICDDL_DEFINE_DYNAMIC_CACHE.htm"
abapFile: "ABENDDICDDL_DEFINE_DYNAMIC_CACHE.html"
keywords: ["do", "if", "case", "data", "types", "ABENDDICDDL", "DEFINE", "DYNAMIC", "CACHE"]
---

`DEFINE DYNAMIC CACHE cache_name    ON dbtab  \{ projection_list \}    [WHERE filter_cond]\    [SEGREGATE CACHE DATA BY filter_cond]\    [CREATION CONFIGURABLE DEFAULT \{ON|OFF\}];`

[Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html) statement used to define a [dynamic cache](ABENDYNAMIC_CACHE_GLOSRY.html) for a [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html).

The name `cache_name` of a dynamic cache must comply with the [naming conventions for DDIC data types](ABENDDIC_TYPES_NAMES.html) and can have a maximum of 30 characters. The name is in the namespace of the [DDIC data types](ABENDDIC_DATA_TYPES.html) and must match the name of the [`DTDC` source code](ABENDDTDC_SOURCE_CODE_GLOSRY.html).

A dynamic cache can be defined for exactly one DDIC database table `dbtab`, which is specified after `ON`. Tables with [data aging](ABENDATA_AGING_GLOSRY.html) are not supported. Multiple dynamic caches can be defined for the same database table.

The projection list `projection_list` of a dynamic cache consists of a restricted subquery which is applied to the DDIC database table to be tuned. It can consist of the following components:

In a `WHERE` filter condition `filter_cond`, the cache result can be restricted as follows:

`lhs = rhs [\{AND | OR\} lhs = rhs]`

Optionally, a further filter condition `filter_cond` can be added after `SEGREGATE CACHE DATA BY` to define which filtered results should be cached as follows:

`lhs = rhs [AND lhs = rhs]`

**`CREATION CONFIGURABLE DEFAULT \{ON|OFF\}`**: Optional addition to activate or deactivate the dynamic cache.

If this clause is not used, the default is `ON`.

If the dynamic cache is deactivated, the consumer can later on decide when the cache should be used. This configuration can be done with transaction `S_DBCACHE_CONFIG`.

The following source code shows an example for a dynamic cache for the database table `DEMO_DDIC_TYPES`.

This cache is generated as SQL view on the database. Client handling is added automatically.

-   Fields of `dbtab` can optionally be specified.
-   **Caution** Client fields must not be specified. Client handling takes place implicitly.
-   At least one aggregate function must be specified in the projection list. The following aggregate functions can be specified:

-   `SUM(arg)`
-   `AVG(arg)`
-   `MIN(arg)`
-   `MAX(arg)`
-   `COUNT(arg)`
-   `COUNT(*)`

-   The argument `arg` of the aggregate function can be a field of `dbtab`, an untyped numeric or character literal, an arithmetic expression, or a case expression. The arithmetic expression can, in turn, have fields or literals as operands. The case expression can have fields, literals, or arithmetic expressions as operands.

-   It is possible to join multiple expressions using `AND` and `OR`.
-   `lhs` can be a field of `dbtab`.
-   `rhs` can be a field of `dbtab` or an untyped numeric or character literal.
-   The fields evaluated in the condition do not need to be defined as elements in the projection list.

-   It is possible to join multiple expressions using `AND`.
-   `lhs` must be a field of `dbtab`.
-   `rhs` can be a character or numeric literal or a numbered placeholder `$1`, `$2`, ...
-   The fields evaluated in the condition must be defined as elements in the projection list.

-   `ON`: the dynamic cache is created on SAP HANA as soon as the DDIC definition is activated.
-   `OFF`: creation of the dynamic cache on SAP HANA is deferred to a later point in time.

DEFINE DYNAMIC CACHE demo\_ddic\_dynamic\_cache \\n ON demo\_ddic\_types \\n \\{ \\n int4, \\n sum( int8 ) \\n \\} \\nWHERE int1 = 4 \\nSEGREGATE CACHE DATA BY int4 = $1 \\n CREATION CONFIGURABLE DEFAULT OFF; abenabap.html abenabap\_dictionary.html abenddic\_tuning\_objects.html abenddic\_dynamic\_caches.html abenddic\_define\_dynamic\_cache.html