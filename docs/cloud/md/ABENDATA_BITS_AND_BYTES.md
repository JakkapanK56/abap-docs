---
title: "ABENDATA_BITS_AND_BYTES"
description: |
  ABENDATA_BITS_AND_BYTES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDATA_BITS_AND_BYTES.htm"
abapFile: "ABENDATA_BITS_AND_BYTES.html"
keywords: ["do", "if", "case", "class", "data", "types", "field-symbol", "ABENDATA", "BITS", "AND", "BYTES"]
---

This topic explains the technical background of data types and data objects. It can be helpful for a better understanding of how to handle data in ABAP including a glance on casting and conversions.

After its declaration, a [data object](ABENDATA_OBJECT_GLOSRY.html) is usable in its context (procedure, class, program) according to its type. For example, a numeric data object can be assigned the result of a calculation.

After this assignment, the data object `num` contains the calculated value *3604530*, which is also displayed accordingly with a type-compliant output as, for example, `cl_demo_output=>display`. And of course the same can be seen in the display of the variable in the ABAP Debugger when setting a breakpoint at the last statement.

The ABAP Debugger also shows the hexadecimal value *32003700* of the data object. This directly represents the binary value *0011 0010 0000 0000 0011 0111 0000 0000* stored in the 4 bytes allocated to the 4-byte integer number in the memory. This value is platform dependent and for numeric types is defined by the [byte order](ABENBYTE_ORDER_GLOSRY.html) order, where either the most significant (big endian) or least significant (little endian) byte is written to the first memory location. The decimal value of the hexadecimal value *32003700* shown here would be `838874880` and is not the integer value `3604530` that ABAP deals with. This shows the meaning of data types. A data object is a sequence of bytes stored in memory at its address, which is interpreted by the ABAP runtime framework according to the data type. The hexadecimal value is in most cases irrelevant to the programmer.

Let us consider a character-like field text with a length of two characters.

This field can be assigned the result of a string operation as shown and the result shown by `cl_demo_output=>display` as well as in the ABAP Debugger is the character string `27`. Again, it is the data type, that derives the value *27* from the actual hexadecimal content, which is `32003700` as in the previous example! In this case, `32003700` is the encoding of the string `27` in the Unicode character representation [UCS-2](ABENUCS2_GLOSRY.html), which is supported by ABAP in Unicode systems. The Unicode character representation also depends on the platform-dependent byte order.

Only for a byte-type data type does the value as interpreted by ABAP directly correspond to the hexadecimal content.

The following lines modify the bits of a byte string with a bit operation.

Here, the output with `cl_demo_output=>display`, the value display of the ABAP Debugger as well as the hexadecimal value are the same, namely `32003700`.

In the above examples, we presented three data objects that all occupy 4 bytes in memory that have the same binary values, but are handled differently by ABAP due to their data type. The data type is also responsible for the fact, that different kind of operations (numeric calculation, string concatenation, bit operation) can be applied to the respective data objects. Using these examples we can have now look at the basic concepts of [casting](ABENCAST_CASTING_GLOSRY.html) and [type conversion](ABENTYPE_CONVERSION_GLOSRY.html) and their relation to bits and bytes.

In ABAP, the term casting means nothing more than treating a data object according to a different data type than the one that is permanently assigned to it. This can be done using [field symbols](ABENFIELD_SYMBOL_GLOSRY.html), with which a new (symbolic) name and a new type can be defined for the memory area of a data object. When the memory area is accessed using a field symbol, it is handled according to the type of the field symbol.

Handling a memory area according to the type of a field symbol.

The bit string in `hex` is cast to a numeric field when accessed using the name `<num>` and to a text field when accessed using the name `<text>`. The outputs are `32003700`, `3604530` and `27`, clearly showing the effect of the data type on handling one and the same hexadecimal content.

In contrast, in a type conversion (or conversion for short), the actual binary content of a data object is converted so that it fits another data type. Type conversions usually occur in assignments between data objects of different data types. The goal of such a conversion is to preserve the type-specific meaning of the content in the source field as far as possible for the data type of the target field. For this purpose, ABAP contains a large set of [conversion rules](ABENCONVERSION_RULES.html).

Simple example for a conversion rule.

We are assigning the character-like field `text` to the numeric field `num` and display the result that can also be checked in the ABAP Debugger. The ABAP runtime framework recognizes that the character string `27` in text can be interpreted as the integer number `27`, generates the hexadecimal value *1B000000* in which this number is encoded for the numeric type of `num`, and assigns it to the memory location of `num`. Thus, the actual conversion takes place for the original hexadecimal content `32003700` of `text` to the new hexadecimal content `1B000000` of `num`. For character strings in text fields, for which no such meaningful conversion is possible, an exception occurs. The field symbols `<hex_text>` and `<hex_num>` are used to show the hexadecimal content of the fields `text` and `num` by casting them to a byte-like type.

For reasons of simplicity this topic is restricted to named elementary variables. Note that in particular the same holds for [literals](ABENABAP_LITERAL_GLOSRY.html) that are handled internally in such a way as if they were constants of the data type assigned to the literal. In the preceding example, `text` can be replaced by a literal `'27'` yielding the same results.

DATA num TYPE i. \\n\\ \\nnum = 2 \* 3 \* 5 \* 53 \* 2267. \\n\\ \\ncl\_demo\_output=>display( num ). DATA text TYPE c LENGTH 2. \\n\\ \\ntext = '2' && '7'. \\n\\ \\ncl\_demo\_output=>display( text ). DATA hex TYPE x LENGTH 4 VALUE 'CDFFC8FF'. \\n\\ \\nhex = BIT-NOT hex. \\n\\ \\ncl\_demo\_output=>display( hex ). DATA hex TYPE x LENGTH 4 VALUE '32003700'. \\nFIELD-SYMBOLS: TYPE i, \\n TYPE c. \\nASSIGN hex TO CASTING. \\nASSIGN hex TO CASTING. \\n\\ \\ncl\_demo\_output=>new( \\n )->write\_data( hex \\n )->write\_data( \\ \\n )->write\_data( )->display( ). TYPES hex TYPE x LENGTH 4. \\nFIELD-SYMBOLS: \\n TYPE hex, \\n TYPE hex. \\n\\ \\nDATA: text TYPE c LENGTH 2 VALUE '27', \\n num TYPE i. \\n\\ \\nnum = text. \\n\\ \\nASSIGN text TO CASTING. \\nASSIGN num TO CASTING. \\n\\ \\ncl\_demo\_output=>new( \\n )->write\_data( text \\n )->write\_data( \\ \\n )->write\_data( num \\n )->write\_data( )->display( ). abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html