---
title: "ABENCDS_UNTYPED_LITERAL_V2"
description: |
  ABENCDS_UNTYPED_LITERAL_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_UNTYPED_LITERAL_V2.htm"
abapFile: "ABENCDS_UNTYPED_LITERAL_V2.html"
keywords: ["select", "do", "while", "if", "case", "try", "class", "data", "types", "ABENCDS", "UNTYPED", "LITERAL"]
---

`... 'character_literal'|numeric_literal ...`

[Untyped literal](ABENUNTYPED_LITERAL_GLOSRY.html) in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). It is either a [character literal](ABENCHARACTER_LITERAL_GLOSRY.html) or a [numeric literal](ABENNUMERIC_LITERAL_GLOSRY.html):

Literals can be used at all operand positions where this is documented.

The CDS view entity demonstrates various literals at operand positions while making use of the database table `SPFLI`. The class `CL_DEMO_CDS_LITERALS_VE` uses `SELECT` to access the view entity.

-   **Untyped character literal**
-   A character literal `'character_literal'` is a character string enclosed in quotation marks. If the character string consists exclusively of digits, it is handled as a [numeric text literal](ABENNUMERIC_TEXT_LITERAL_GLOSRY.html) and the data type of the literal is [`NUMC`](ABENDDIC_BUILTIN_TYPES.html). If this is not the case, the data type is [`CHAR`](ABENDDIC_BUILTIN_TYPES.html). When activated, the length of the corresponding field in the database system is set to a size at least as large as the actual length of the literal. A character literal can have a maximum of 1333 characters.
-   **Untyped numeric literal**
-   A numeric literal `numeric_literal` is a series of digits between 0 and 9. It can be directly prefixed by a `+` or `-` sign and can contain a decimal point (`.`) after the first digit. A numeric literal without a decimal point is handled as an [integer literal](ABENINTEGER_LITERAL_GLOSRY.html) of the type [`INT1`](ABENDDIC_BUILTIN_TYPES.html), [`INT2`](ABENDDIC_BUILTIN_TYPES.html), [`INT4`](ABENDDIC_BUILTIN_TYPES.html), or [`INT8`](ABENDDIC_BUILTIN_TYPES.html), depending on the value. A numeric literal with a decimal point is a [binary floating point literal](ABENBINFLOAT_LITERAL_GLOSRY.html) of the type [`FLTP`](ABENDDIC_BUILTIN_TYPES.html). The value of a numeric literal must be within the value range of the valid types.

-   `0.5` is a valid numeric literal, but `.5` is not.
-   A literal prefixed with a sign is interpreted as an [arithmetic expression](ABENCDS_ARITHMETIC_EXPRESSION_V2.html) and can be specified in all operand positions where [arithmetic expressions](ABENCDS_ARITHMETIC_EXPRESSION_V2.html) are allowed.
-   The built-in conversion function [`FLTP_TO_DEC`](ABENCDS_CONV_FUNC_TYPES_V2.html) can be used to convert literals with a decimal point to a packed number.
-   Literals can be of data type `CHAR`, `NUMC`, `INT1`, `INT2`, `INT4`, `INT8`, or `FLTP`. If an operand expects input of any other data type, then a literal is not possible in this operand position. There are a few exceptions to this rule, for example, some date and time conversion functions accept literal input which is then interpreted as date or time data type. These exceptions are mentioned in the documentation of the respective functions.

@EndUserText.label: 'CDS View Entity with Literals'\\ndefine view entity DEMO\_CDS\_LITERALS\_VE\\n as select from spfli\\n\\{\\n airpfrom,\\n airpto,\\n deptime,\\n fltime,\\n 'Minutes' as fltime\_unit,\\n case countryfr\\n when countryto then 'Domestic'\\n else 'International'\\n end as fl\_form\\n\\}\\nwhere\\n fltime < 500\\n and deptime > '100000'\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_operands\_v2.html abencds\_literal\_v2.html