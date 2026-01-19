---
title: "ABENCDS_GENERAL_SYNTAX_RULES"
description: |
  ABENCDS_GENERAL_SYNTAX_RULES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_GENERAL_SYNTAX_RULES.htm"
abapFile: "ABENCDS_GENERAL_SYNTAX_RULES.html"
keywords: ["select", "do", "if", "case", "method", "data", "types", "ABENCDS", "GENERAL", "SYNTAX", "RULES"]
---

The general syntax rules for the [CDS DDL](ABENCDS_DDL_GLOSRY.html) and [CDS DCL](ABENCDS_DCL_GLOSRY.html) for defining [CDS objects](ABENCDS_OBJECT_GLOSRY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) are as follows:

-   Keywords

-   Keywords must be all uppercase, all lowercase, or in lowercase with an uppercase initial letter. Other mixes of uppercase and lowercase are not allowed.

-   Names

-   Names are not case-sensitive.
-   A name must contain at least 2 characters but no more than 30 characters.
-   A name can consist of letters, numbers, underscores (`_`), and slashes (`/`).
-   A name must start with a letter, slash character, or underscore. Underscores are recommended as the naming convention for [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html).
-   The separator for names with multiple parts is a period (`.`). Names with multiple parts can be paths, columns with a prefixed data source, and structured annotations.
-   The following CDS keywords cannot be used as names:
-   \\ `ALL`, `AND`, `AS`, `ASSOCIATION`, `AVG`, `CASE`, `CAST`, `COUNT`, `CROSS`, `DISTINCT`, `EXISTS`, `EXTEND`, `FROM`, `FULL`, `GROUP`, `HAVING`, `INNER`, `JOIN`, `KEY`, `LEFT`, `MAX`, `MIN`, `NOT`, `NULL`, `ON`, `OR`, `ORDER`, `RIGHT`, `SELECT`, `SUM`, `UNION`, `VIEW`, `WHEN`, `WHERE`

-   Literals

-   In general ABAP CDS, [untyped](ABENUNTYPED_LITERAL_GLOSRY.html) numeric and untyped character literals are available:
-   An untyped character literal is a character string enclosed in single quotation marks (`'`).
    An untyped numeric literal is a series of digits between 0 and 9. It can be directly prefixed by a `+` or `-` sign and can contain a decimal point (`.`) after the first digit.
-   In [CDS DDL](ABENCDS_DDL_GLOSRY.html), [typed literals](ABENTYPED_LITERAL_GLOSRY.html) are available for [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) and [CDS hierarchies](ABENCDS_HIERARCHY_GLOSRY.html). Typed literals are available for almost all built-in ABAP Dictionary data types. A typed literal is specified by writing an ABAP Dictionary data type with the type namespace `abap.` as prefix followed by the character-like representation of the value in single quotation marks (`'`).
-   Example: `abap.dats'20200101'`
-   Escaping literals in ABAP CDS:
-   A single quote (') is escaped with a single quote:`'...''...'`.
    A backslash (\\\\) is escaped with a backslash: `'...\\\\\...'`
-   **Exception:** Escaping with a backslash is not supported in [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html).
-   For more information about literals in ABAP CDS, see the topic [CDS DDL - CDS View Entity, `literal`](ABENCDS_LITERAL_V2.html).

-   Comments

-   Two forward slashes (`//`) introduce a comment, which continues until the end of the line.
-   Comments within lines or that span multiple lines are enclosed by the characters `/*` and `*/`.

-   Suppressing syntax check warnings

-   To suppress syntax check warnings in a [CDS object](ABENCDS_OBJECT_GLOSRY.html), surround the warning with the following comments:
-   `/* start suppress warning *identifier* */ *warning*\ /* end supporess warning *identifier* */`
-   The identifier for suppressing a particular warning can be found in the long text of the error message of the warning. Not all warnings can be suppressed.
-   For further details, see the [Knowledge Transfer Document](ABENKTD_GLOSRY.html)\\ `DD_SUPPRESS_WARNING`.

-   Separators

-   Statements can be closed using a semicolon (`;`). Sometimes this is mandatory.

-   Protected words

-   Certain keywords are protected and cannot be used as user-defined names. The reserved names that cannot be used are specified in the DDIC database table `TRESE`.

-   The closing semicolon after a statement is sometimes optional because one piece of CDS source code can currently only contain a single statement.
-   In [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) for [CDS data definitions](ABENCDS_DATA_DEFINITION_GLOSRY.html) and [DCL source code](ABENDCL_SOURCE_CODE_GLOSRY.html) for [CDS roles](ABENCDS_ROLE_GLOSRY.html), as well as two slashes, two dashes (`--`) can also be used to introduce a comment. Slashes (`//`), however, are the recommended method. Two dashes are not allowed in [`DDLA` source code](ABENDDLA_SOURCE_CODE_GLOSRY.html) for [annotation definitions](ABENCDS_ANNO_DEFINITION_GLOSRY.html) and in [`DDLX` source code](ABENDDLX_SOURCE_CODE_GLOSRY.html) for [metadata extensions](ABENCDS_METADATA_EXTENSION_GLOSRY.html).

-   `SELECT`, `select`, and `Select` are all valid ways of specifying a keyword. `seLect` and `SeLect`, on the other hand, produce syntax errors.
-   `MYVIEW`, `myview`, and `myView` all identify the same operand.
-   `0.5` is a valid numeric literal, but `.5` is not.

abenabap.html abencds.html abencds\_syntax.html