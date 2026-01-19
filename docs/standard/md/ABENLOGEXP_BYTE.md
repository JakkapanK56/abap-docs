---
title: "ABENLOGEXP_BYTE"
description: |
  ABENLOGEXP_BYTE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOGEXP_BYTE.htm"
abapFile: "ABENLOGEXP_BYTE.html"
keywords: ["do", "if", "case", "data", "types", "ABENLOGEXP", "BYTE"]
---

The following tables show the [comparison types](ABENCOMPARISON_TYPE_GLOSRY.html) for comparisons between byte-like data types and other data types. If the type of an operand is not the same as the comparison type, it is [converted](ABENCONVERSION_ELEMENTARY.html) to this type. The [comparison rules for the comparison types](ABENCOMPARISON_TYPE.html) determine how the comparison is performed.

**Length Adjustments**

The comparison type `p` has 31 places and the number of decimal places for the operand of type `p`.

In [conversions](ABENBYTE_SOURCE_FIELDS.html) of byte-like data types to any numeric type except `int8`, only the last four bytes are respected. In the case of `int8`, the last 8 bytes are respected.

Since the decimal places are lost in the conversion between numeric and byte-like types, the comparison for inequality is true.

**Length Adjustments**

The comparison uses the appropriate [conversion rules](ABENCONVERSION_TYPE_X.html) to convert the hexadecimal content *FF00* of `hex` to the string *FF00*, which is then compared with *FFxx*. The operands are not equal.

**Length Adjustments**

Before the comparison, the appropriate [conversion rules](ABENCONVERSION_TYPE_C.html) are used to convert the content of *FFxx* from `text` to the hexadecimal value *FF00* in the helper variable `hex_helper`, and this value is compared with the content of `hex`.

A hexadecimal number that is the result of the conversion of a valid date is equal to this date.

-   In comparisons of data type `c` with `x` or `xstring`, the shorter field is adjusted to the length of the longer field after conversions from `x` to `c` or `xstring` to `string`. Blanks are used as padding on the right.
-   Lengths are not adjusted in comparisons between the data type `string` on one side and `x` or `xstring` on the other.

-   Operands of the data type `xstring` with different lengths never match. If the content of the operands matches the length of the shorter operand, the shorter operand is smaller than the longer one. Otherwise the surplus bytes in the longer field are truncated on the right, and then the content is compared.
-   In comparisons between two operands of the data type `x`, the shorter field is [converted](ABENCONVERSION_TYPE_X.html) to the longer field, with hexadecimal 0 used as padding on the right.

TYPES pack TYPE p LENGTH 6 DECIMALS 2. \\n\\ \\nDATA pack TYPE pack VALUE '1234.56'. \\nFINAL(hex) = CONV xstring( pack ). \\n\\ \\nIF hex <> pack. \\n cl\_demo\_output=>display( |\\{ CONV pack( hex ) \\} <> \\{ pack \\}| ). \\nENDIF. DATA hex TYPE x LENGTH 2. \\nDATA text TYPE c LENGTH 4. \\n\\ \\nhex = 'FF00'. \\ntext = 'FFxx'. \\n\\ \\nIF hex <> text. \\n cl\_demo\_output=>display( |\\{ hex \\} <> \\{ text \\} | ). \\nENDIF. DATA hex TYPE x LENGTH 2. \\nDATA text TYPE c LENGTH 4. \\n\\ \\nhex = 'FF00'. \\ntext = 'FFxx'. \\n\\ \\n... \\n\\ \\nDATA hex\_helper TYPE x LENGTH 2. \\nhex\_helper = text. \\nIF hex = hex\_helper. \\n cl\_demo\_output=>display( |\\{ hex \\} = \\{ hex\_helper \\} | ). \\nENDIF. FINAL(date) = cl\_demo\_date\_time=>get\_user\_date( ). \\nFINAL(hex) = CONV xstring( date ). \\n\\ \\nASSERT hex = date. \\ncl\_demo\_output=>display( |\\{ date \\} \\{ hex \\}| ). - **xstring**, **x**\\ **decfloat16**, **decfloat34** `decfloat34`\\ **f** `f`\\ **p** `p`\\ **int8** `int8`\\ **i**, **s**, **b** `i` - **xstring** **x**\\ **string** `string` `string`\\ **c** `string` `c`\\ **n** `p` `p` - **xstring** **x**\\ **xstring** `xstring` `xstring`\\ **x** `xstring` `x` - **xstring**, **x**\\ **d**, **t** `i`\\ **utclong** `-` abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_rules.html abenlogexp\_rules\_operands.html abenlogexp\_rules\_operands\_dobj.html