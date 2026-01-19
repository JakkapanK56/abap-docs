---
title: "ABAPDESCRIBE_FIELD"
description: |
  ABAPDESCRIBE_FIELD - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDESCRIBE_FIELD.htm"
abapFile: "ABAPDESCRIBE_FIELD.html"
keywords: ["select", "do", "while", "if", "case", "catch", "method", "class", "data", "types", "internal-table", "field-symbol", "ABAPDESCRIBE", "FIELD"]
---

[Short Reference](ABAPDESCRIBE_FIELD_SHORTREF.html)

`DESCRIBE FIELD dobj`\\ 
  `[TYPE typ [COMPONENTS com]]`\\ 
  `[LENGTH ilen IN \{BYTE|CHARACTER\} MODE]`\\ 
  `[DECIMALS dec]`\\ 
  `[OUTPUT-LENGTH olen]`\\ 
  `[HELP-ID hlp]`\\ 
  `[EDIT MASK mask].`

[1. `... TYPE typ [COMPONENTS com]`](#ABAP_ADDITION_1@3@)

[2. `... LENGTH ilen IN \{BYTE|CHARACTER\} MODE`](#ABAP_ADDITION_2@3@)

[3. `... DECIMALS dec`](#ABAP_ADDITION_3@3@)

[4. `... OUTPUT-LENGTH olen`](#ABAP_ADDITION_4@3@)

[5. `... HELP-ID hlp`](#ABAP_ADDITION_5@3@)

[6. `... EDIT MASK mask`](#ABAP_ADDITION_6@3@)

This statement determines some properties of the data object `dobj` and assigns them to the specified target fields. The following can be specified as target fields of each addition:

The different additions make it possible to determine the data type and the number of components for structures, the length used in the memory, the number of [decimal places](ABENDECIMAL_PLACE_GLOSRY.html), the output length, the name of the data type for a reference to a data element in the ABAP Dictionary, and any [conversion exits](ABENCONVERSION_EXIT_GLOSRY.html).

Determines the data type of the data object `dobj`. The return value is a single character ID. In an inline declaration for `typ`, a variable of the type `c` with length 1 is declared. The following tables list the assignment of return values for all possible data types. The ID is case-sensitive.

The type description classes of [Runtime Type Services (RTTS)](ABENRTTI.html) use constants with values that correspond to the internal, character-like IDs for all possible data types. These constants are defined in class `CL_ABAP_TYPEDESCR` and are listed in column *RTTS constant*.

The addition `COMPONENTS` determines the number of direct components of the data object `dobj`. The return value is of type `i`. For an inline declaration, a variable of type `i` is declared. If the data object `dobj` is not a structure, the value 0 is returned. If `dobj` is a nested structure, only the components of the highest hierarchy level are counted.

If `DESCRIBE FIELD` is applied directly to a [static box](ABENSTATIC_BOX_GLOSRY.html), its data type according to the above table is returned and not the internal ID `j` for the boxed component.

For the [deep](ABENDEEP_GLOSRY.html) nested structure `struc1`, the type ID *v* and three components are determined. For the [flat](ABENFLAT_GLOSRY.html) structure `struc2`, the type ID *u* and two components are determined.

Determines the length used directly by the data object `dobj` in the memory in bytes or characters depending on the addition `MODE`. The return value is of type `i`. For an inline declaration, a variable of type `i` is declared.

The variant with the addition `IN BYTE MODE` determines the length of the data object `dobj` in bytes. The variant with the addition `IN CHARACTER MODE` determines the length of the data object `dobj` in characters. When using `IN CHARACTER MODE`, the data type of `dobj` must be flat and character-like. For [deep](ABENDEEP_GLOSRY.html) data types, only `IN BYTE MODE` can be specified and the length of the references involved (eight bytes for each reference) is always determined.

Calculation of the bytes required for the representation of one character. The result is greater than 1 in multibyte systems.

The result `len` of the following `DESCRIBE` statement is 9, not 10, due to a trailing alignment gap in `struct`.

Determines the [number of decimal places](ABENDECIMAL_PLACE_GLOSRY.html) of the data object `dobj`. The return value is of type `i`. For an inline declaration, a variable of type `i` is declared.

Only data objects of the data type `p` can have decimal places. Therefore, the result in `dec` can differ from 0 only for these data objects.

The system recognizes 0 decimal places and then 4 decimal places.

For data objects with a fixed length, the output length of the data object `dobj` required for [screen layouts](ABENSCREEN_GLOSRY.html) is determined. The return value is of type `i`. For an inline declaration, a variable of type `i` is declared.

Generally, this result corresponds to the predefined output length of the data object in accordance with its data type in the output in the list buffer. In strings, `olen` is always set to 0. `olen` expects the data type `i`.

For `date1`, the output length 8 linked with the type `d` is determined. For `date2`, the output length 10 defined in the domain `SYDATS` is determined.

If the data type of the data object `dobj` is determined by a [DDIC data element](ABENDATA_ELEMENT_GLOSRY.html), the name of the data type is assigned that was used after the addition `TYPE` when defining the data object `dobj`. The return value is a string. In an inline declaration, a variable of the type `string` is declared.

If the data object does not refer to a data object in the ABAP Dictionary, `hlp` is initialized. `hlp` expects a character-like data object.

If a field symbol, to which a structure component is assigned using the statement `ASSIGN COMPONENT`, is specified for `dobj`, and if the structure component refers to a component of a DDIC structure, then the complete name of the structure component is returned.

The addition is called `HELP-ID` because the name of the data type in `hlp` can be used to call the field help or input help assigned in the ABAP Dictionary.

After `DESCRIBE FIELD`, `hlp` contains the value *SPFLI-CARRID*. Since an input help is assigned to this component in the ABAP Dictionary, the input help can be called using the function module `F4IF_FIELD_VALUE_REQUEST`. If the name `s_carr_id` is specified after `TYPE` when defining `carrid`, `hlp` contains the value *S\_CARR\_ID* and can be used, for example, to call the field help using the function module `HELP_OBJECT_SHOW`.

`hlp` also contains the value *SPFLI-CARRID* after `DESCRIBE FIELD` in this example.

If a [conversion exit](ABENCONVERSION_EXIT_GLOSRY.html) is assigned to the data object `dobj` by referring to a domain in the ABAP Dictionary, the name of the conversion exit is determined and prefixed with two equal signs *\==*. The return value is a string. In an inline declaration, a variable of the type `string` is declared. If no conversion exit is assigned to the data object, `mask` is initialized or remains initial.

If a data object `mask` meets these requirements, it can be used directly in the addition `USING EDIT MASK` of the statement `WRITE [TO]` to call the conversion exit.

Since the data element `S_FLTIME` in the ABAP Dictionary is linked with the conversion exit `SDURA` by the domain `S_DURA`, `msk` contains the value *\==SDURA* after `DESCRIBE FIELD` and the statement `WRITE TO` returns the value *5:33* after the conversion from seconds to minutes.

-   Existing variables to which the return value can be converted.
-   Inline declarations [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html).

-   Field symbols or formal parameters can be specified in [procedures](ABENPROCEDURE_GLOSRY.html) for `dobj` to determine the properties of the data object they represent when the statement is executed.
-   The statement `DESCRIBE` is mainly suitable for determining the properties of data objects of elementary data types. When `DESCRIBE` is used for structures or data objects of [deep](ABENDEEP_GLOSRY.html) data types like strings, internal tables, or reference variables, only elementary properties can be determined. Additional information, for example, the static or dynamic type of a reference variable cannot be determined using `DESCRIBE`. For this kind of information, the type description classes of runtime type services ([RTTS](ABENRUN_TIME_TYPE_SERVICES_GLOSRY.html)) should be used. These enable all data object properties of all data types to be determined.

-   For data objects with a fixed length, the length is determined that is specified when the data object is created. The [built-in function](ABENBUILTIN_FUNCTION_GLOSRY.html)\\ `strlen` can be used to determine the occupied length of character-like data objects while ignoring the trailing blanks.
-   In structures, the [alignment gaps](ABENALIGNMENT_GAP_GLOSRY.html) are part of the length. This is particularly significant in the case of alignment gaps that can occur before the end of the structure.
-   With [enumerated objects](ABENENUMERATED_OBJECT_GLOSRY.html), the addition `IN BYTE MODE` must be specified and the length of the actual [enumerated value](ABENENUMERATED_VALUE_GLOSRY.html) is determined in the [basic type](ABENBASE_TYPE_GLOSRY.html).

-   Normally, the required output length is determined sufficiently by the specification in the table for predefined [output lengths](ABENWRITE_OUTPUT_LENGTH.html), unless the data type of the data object is defined with a reference to ABAP Dictionary and an output length or a [conversion exit](ABENCONVERSION_EXIT_GLOSRY.html) is specified in the corresponding domain.
-   If the output length defined in a [dynpro](ABENDYNPRO_GLOSRY.html) for a [dynpro field](ABENDYNPRO_FIELD_GLOSRY.html) with the same name as `dobj` is shorter than the required output length, an overflow raises an uncatchable exception. When passed to the list buffer, the outputs are truncated if the output length is shorter than the required output length.
-   When separators or templates are defined in the user master record for the output of a data type, they are only displayed if the defined output length is sufficient. The required length can be longer than the output length determined by `OUTPUT-LENGTH`.
-   The output length for strings can be determined using the functions `strlen` or `xstrlen`.

DATA: BEGIN OF struc1, \\n comp1 TYPE c LENGTH 1, \\n comp2 TYPE string, \\n BEGIN OF struc2, \\n comp1 TYPE c LENGTH 1, \\n comp2 TYPE i, \\n END OF struc2, \\n END OF struc1. \\n\\ \\nDESCRIBE FIELD: struc1 TYPE FINAL(typ1) COMPONENTS FINAL(comp1), \\n struc1-struc2 TYPE FINAL(typ2) COMPONENTS FINAL(comp2). DATA: text TYPE c LENGTH 1, \\n bytes TYPE i. \\n\\ \\nDESCRIBE FIELD text LENGTH FINAL(blen) IN BYTE MODE. \\nDESCRIBE FIELD text LENGTH FINAL(clen) IN CHARACTER MODE. \\n\\ \\nbytes = blen / clen. DATA: \\n BEGIN OF struct, \\n text TYPE c LENGTH 3, \\n hex TYPE x LENGTH 3, \\n END OF struct. \\n\\ \\nDESCRIBE FIELD struct LENGTH FINAL(len) IN BYTE MODE. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nCLASS demo DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main IMPORTING pack TYPE p. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD main. \\n DESCRIBE FIELD pack DECIMALS FINAL(dec). \\n out->write( dec ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nDATA: \\n pack1 TYPE p LENGTH 8 DECIMALS 0, \\n pack2 TYPE p LENGTH 8 DECIMALS 4. \\n\\ \\nSTART-OF-SELECTION. \\n demo=>main( pack1 ). \\n demo=>main( pack2 ). \\n\\ \\n out->display( ). DATA: date1 TYPE d, \\n date2 TYPE sy-datum. \\n\\ \\nDESCRIBE FIELD date1 OUTPUT-LENGTH FINAL(olen1). \\nDESCRIBE FIELD date2 OUTPUT-LENGTH FINAL(olen2). DATA: carrid TYPE spfli-carrid, \\n struc TYPE dfies-tabname, \\n comp TYPE dfies-fieldname. \\n\\ \\nDESCRIBE FIELD carrid HELP-ID FINAL(hlp). \\n\\ \\nSPLIT hlp AT '-' INTO struc comp. \\nCALL FUNCTION 'F4IF\_FIELD\_VALUE\_REQUEST' \\n EXPORTING \\n tabname = struc \\n fieldname = comp \\n EXCEPTIONS \\n field\_not\_found = 1 \\n no\_help\_for\_field = 2 \\n inconsistent\_help = 3 \\n no\_values\_found = 4 \\n OTHERS = 5. DATA spfli TYPE spfli. \\n\\ \\nASSIGN spfli-('CARRID') TO FIELD-SYMBOL(). \\n\\ \\nDESCRIBE FIELD HELP-ID FINAL(hlp). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: time TYPE s\_fltime, \\n seconds TYPE i, \\n output TYPE c LENGTH 10. \\n\\ \\nDESCRIBE FIELD time EDIT MASK FINAL(msk). \\n\\ \\nseconds = 333. \\nWRITE seconds TO output USING EDIT MASK msk. \\nout->write\_data( output ). \\n\\ \\nout->display( ). **Numeric Data Type** **ID** **RTTS constant**\\ `b` `b` `TYPEKIND_INT1`\\ `s` `s` `TYPEKIND_INT2`\\ `i` *I* `TYPEKIND_INT`\\ `int8` `8` `TYPEKIND_INT8`\\ `p` `P` `TYPEKIND_PACKED`\\ `decfloat16` `a` `TYPEKIND_DECFLOAT16`\\ `decfloat34` `e` `TYPEKIND_DECFLOAT34`\\ `f` `F` `TYPEKIND_FLOAT` **Character-Like Data Type** **ID** **RTTS constant**\\ `c` `C` `TYPEKIND_CHAR`\\ `n` `N` `TYPEKIND_NUM`\\ `string` `g` `TYPEKIND_STRING` **Byte-Like Data Type** **ID** **RTTS constant**\\ `x` *X* `TYPEKIND_HEX`\\ `xstring` `y` `TYPEKIND_XSTRING` **Date, Time, Time Stamp Type** **ID** **RTTS constant**\\ `d` `D` `TYPEKIND_DATE`\\ `t` `T` `TYPEKIND_TIME`\\ `utclong` `p` `TYPEKIND_UTCLONG` **Enumerated Type** **ID** **RTTS constant**\\ Enumerated type `k` `TYPEKIND_ENUM` **Reference Type** **ID** **RTTS constant**\\ Data reference `l` `TYPEKIND_DREF`\\ Object reference `r` `TYPEKIND_OREF` **Complex Type** **ID** **RTTS constant**\\ Flat structure `u` `TYPEKIND_STRUCT1`\\ Deep structure `v` `TYPEKIND_STRUCT2`\\ Internal table `h` `TYPEKIND_TABLE` abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendescribe\_field.html abapdescribe.html