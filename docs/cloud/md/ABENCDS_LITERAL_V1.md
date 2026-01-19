---
title: "ABENCDS_LITERAL_V1"
description: |
  ABENCDS_LITERAL_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_LITERAL_V1.htm"
abapFile: "ABENCDS_LITERAL_V1.html"
keywords: ["select", "do", "if", "case", "data", "types", "ABENCDS", "LITERAL"]
---

`... [#|:domain.]'character_literal'|numeric_literal ...`

[`... #|:domain.`](#ABAP_ONE_ADD@1@)

Literal in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). It is either a character literal or a numeric literal:

Literals can be used at all operand positions where this is documented.

Escape characters:
A single quote (') must be used to escape a single quote (`'...''...'`) in a character literal.

The CDS view demonstrates various literals at operand positions.

In certain operand positions, a literal can be prefixed with a name of a [DDIC domain](ABENDOMAIN_GLOSRY.html)\\ `domain` introduced using the character `#` or `:` and separated by a period (`.`). In this case, a check is made to verify whether the value of the literal is defined as a [fixed value](ABENFIXED_VALUE_GLOSRY.html) in the [value range](ABENDDIC_DOMAINS_SEMA.html) of the domain. If this is not the case or if the domain does not exist as an active domain, a syntax check warning occurs. Apart from this, the literal is handled like a regular literal.

A domain can be specified in front of a literal in the following operand positions:

Fixed value `EXA` of the domain `ABDOCTYPE` as the operand of the `WHERE` condition of a view.

-   A character literal `'character_literal'` is a character string enclosed in quotation marks. If the character string consists exclusively of digits, the data type of the literal is [`NUMC`](ABENDDIC_BUILTIN_TYPES.html). If this is not the case, the data type is [`CHAR`](ABENDDIC_BUILTIN_TYPES.html). When activated, the length of the corresponding field in the database system is set to a size at least as large as the actual length of the literal. A character literal can have a maximum of 1333 characters.
-   A numeric literal `numeric_literal` is a series of digits between 0 and 9. It can be directly prefixed by a `+` or `-` sign and can contain a decimal point (`.`) after the first digit. A numeric literal without a decimal point is handled as a field of the type [`INT1`](ABENDDIC_BUILTIN_TYPES.html), [`INT2`](ABENDDIC_BUILTIN_TYPES.html), [`INT4`](ABENDDIC_BUILTIN_TYPES.html), or [`INT8`](ABENDDIC_BUILTIN_TYPES.html), depending on the value. A numeric literal with a decimal point is floating point number of type [`FLTP`](ABENDDIC_BUILTIN_TYPES.html). The value of a numeric literal cannot be greater than the value range of the valid types.

-   `0.5` is a valid numeric literal, but `.5` is not.
-   Byte-like literals are currently not supported.
-   A literal prefixed with a sign is interpreted as an [arithmetic expression](ABENCDS_ARITHMETIC_EXPRESSION_V1.html) and can be specified in all operand positions where [arithmetic expressions](ABENCDS_ARITHMETIC_EXPRESSION_V1.html) are allowed.
-   The built-in conversion function [`FLTP_TO_DEC`](ABENCDS_CONV_FUNC_TYPES_V1.html) can be used to convert literals with a decimal point to a packed number.
-   It is **not** possible to specify a literal in an operand position that expects a type-compliant operand in a data type that is not numeric or character-like, such as `UTCLONG`.
-   In the following example, the operand after `when` cannot be specified as literal and therefore, the syntax is invalid:
-   `case utcl_current( ) when '2020020720162345' then 'ok' else 'no' end as demo`

-   Element of the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html)
-   Right side of a [comparison condition](ABENCDS_COND_EXPR_COMP_V1.html)
-   Parameters passed to [built-in functions](ABENCDS_BUILTIN_FUNCTIONS_V1.html)

-   In the case of character literals consisting only of letters, numbers, underscores (`_`), and slashes (`/`) and that start with a letter, underscore, or slash, the quotation marks can be omitted after the domain.

-   `#domain.xXx` has the same semantics as
-   `#domain.'xXx'`.

-   Numeric literals can only be checked using fixed values of numeric domains.
-   Currently, not all potential literal values can be represented as fixed values of domains. For example, a numeric domain can only have positive integers as fixed values and there are no fixed values for domains of type `FLTP`.

@AbapCatalog.sqlViewName: 'DEMO\_CORPSO\_VW'\\ndefine view demo\_corp\_sales\_order\\n as select from snwd\_so\\n association \[1..1\] \\n to snwd\_bpa as \_partner \\n on snwd\_so.buyer\_guid = \_partner.node\_key\\n\\{\\n key snwd\_so.so\_id as sales\_order\_id,\\n snwd\_so.buyer\_guid,\\n \_partner.bp\_id as corporation\_id,\\n \_partner.company\_name as corporation\_name,\\n 'corporation' as legal\_form,\\n @Semantics.currencyCode\\n cast( 'EUR' as abap.cuky ) as currency\_code,\\n @Semantics.amount.currencyCode: 'currency\_code'\\n snwd\_so.gross\_amount as sales\_order\_gross\_amount\\n\\}\\nwhere\\n \_partner.legal\_form = 'Inc.' //Corporations only\\n and snwd\_so.currency\_code = 'EUR'\\n and snwd\_so.gross\_amount > 100000\\n @AbapCatalog.sqlViewName: 'DEMO\_ABAPDOCTREE'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view demo\_abapdoc\_tree as\\nselect from abapdocu\_tree\\n \\{ \* \\}\\n where node\_type = #ABDOCTYPE.'EXA';\\n abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_operands\_v1.html