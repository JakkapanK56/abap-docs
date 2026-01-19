---
title: "ABENTYPE_P_VALUE_RANGE_ABEXA"
description: |
  ABENTYPE_P_VALUE_RANGE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTYPE_P_VALUE_RANGE_ABEXA.htm"
abapFile: "ABENTYPE_P_VALUE_RANGE_ABEXA.html"
keywords: ["if", "try", "catch", "method", "class", "data", "types", "ABENTYPE", "VALUE", "RANGE", "ABEXA"]
---

This example demonstrates the value ranges of packed numbers with different lengths and decimal places.

The value range of a packed number with the length `length` and `decimals` decimal places is one of the following according to the formula in this [table](ABENBUILTIN_TYPES_NUMERIC.html)):

`( -10^(2xlength-1) +1 ) / ( 10^decimals )`

to

`( +10^(2xlength-1) -1 ) / ( 10^decimals )`

The method creates a packed number with a length and decimal places that can be entered from outside. The minimum and maximum values of the number are determined using methods of the system class `CL_ABAP_EXCEPTIONAL_VALUES` and compared with self-calculated values.

\* Public class definition \\nCLASS cl\_demo\_type\_p\_value\_range DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_type\_p\_value\_range IMPLEMENTATION. \\n METHOD main. \\n DATA:length TYPE i VALUE 2, \\n decimals TYPE i VALUE 2. \\n cl\_demo\_input=>new( \\n )->add\_field( EXPORTING text = \`Length\` \\n CHANGING field = length \\n )->request( EXPORTING text = \`Decimals\` \\n CHANGING field = decimals ). \\n\\ \\n DATA dref TYPE REF TO data. \\n TRY. \\n IF decimals > 2 \* length - 1. \\n RAISE EXCEPTION TYPE cx\_sy\_create\_data\_error. \\n ENDIF. \\n CREATE DATA dref TYPE p LENGTH length DECIMALS decimals. \\n CATCH cx\_sy\_create\_data\_error. \\n out->write( 'Wrong input values ...' ). \\n RETURN. \\n ENDTRY. \\n\\ \\n FINAL(lower) \\n = cl\_abap\_exceptional\_values=>get\_min\_value( dref->\* ). \\n IF lower IS NOT INITIAL. \\n ASSIGN lower->\* TO FIELD-SYMBOL(). \\n out->write\_data( ). \\n ENDIF. \\n\\ \\n ASSERT \= CONV decfloat34( \\n ( ipow( base = -10 exp = 2 \* length - 1 ) + 1 ) / \\n ipow( base = 10 exp = decimals ) ). \\n\\ \\n FINAL(upper) \\n = cl\_abap\_exceptional\_values=>get\_max\_value( dref->\* ). \\n IF upper IS NOT INITIAL. \\n ASSIGN upper->\* TO FIELD-SYMBOL(). \\n out->write\_data( ). \\n ENDIF. \\n\\ \\n ASSERT \= CONV decfloat34( \\n ( ipow( base = +10 exp = 2 \* length - 1 ) - 1 ) / \\n ipow( base = 10 exp = decimals ) ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_type\_p\_value\_range DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_type\_p\_value\_range IMPLEMENTATION. \\n METHOD main. \\n DATA:length TYPE i VALUE 2, \\n decimals TYPE i VALUE 2. \\n cl\_demo\_input=>new( \\n )->add\_field( EXPORTING text = \`Length\` \\n CHANGING field = length \\n )->request( EXPORTING text = \`Decimals\` \\n CHANGING field = decimals ). \\n\\ \\n DATA dref TYPE REF TO data. \\n TRY. \\n IF decimals > 2 \* length - 1. \\n RAISE EXCEPTION TYPE cx\_sy\_create\_data\_error. \\n ENDIF. \\n CREATE DATA dref TYPE p LENGTH length DECIMALS decimals. \\n CATCH cx\_sy\_create\_data\_error. \\n out->write( 'Wrong input values ...' ). \\n RETURN. \\n ENDTRY. \\n\\ \\n FINAL(lower) \\n = cl\_abap\_exceptional\_values=>get\_min\_value( dref->\* ). \\n IF lower IS NOT INITIAL. \\n ASSIGN lower->\* TO FIELD-SYMBOL(). \\n out->write\_data( ). \\n ENDIF. \\n\\ \\n ASSERT \= CONV decfloat34( \\n ( ipow( base = -10 exp = 2 \* length - 1 ) + 1 ) / \\n ipow( base = 10 exp = decimals ) ). \\n\\ \\n FINAL(upper) \\n = cl\_abap\_exceptional\_values=>get\_max\_value( dref->\* ). \\n IF upper IS NOT INITIAL. \\n ASSIGN upper->\* TO FIELD-SYMBOL(). \\n out->write\_data( ). \\n ENDIF. \\n\\ \\n ASSERT \= CONV decfloat34( \\n ( ipow( base = +10 exp = 2 \* length - 1 ) - 1 ) / \\n ipow( base = 10 exp = decimals ) ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenbuilt\_in.html abenbuilt\_in\_types.html abenbuilt\_in\_types\_complete.html abenbuiltin\_types\_numeric.html