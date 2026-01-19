---
title: "ABENC1_DEMO_1"
description: |
  ABENC1_DEMO_1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENC1_DEMO_1.htm"
abapFile: "ABENC1_DEMO_1.html"
keywords: ["select", "insert", "do", "if", "data", "types", "ABENC1", "DEMO"]
---

The first part of the example simulates data types from the ABAP Dictionary by data types defined in the program. The second part represents consumer code working with these data types in an unfavorable way by mixing them with locally defined types. If changes allowed by C1 contract< are applied to the pseudo external types, syntax errors and exceptions occur.

\*Pseudo DDIC types \\n\\ \\nTYPES: \\n ddic\_de\_i TYPE i, \\n ddic\_de\_c TYPE c LENGTH 3, \\n\\ \\n BEGIN OF ddic\_struc, \\n text TYPE ddic\_de\_c, \\n int TYPE ddic\_de\_i, \\n END OF ddic\_struc. \\n\\ \\nDATA ddic\_dbtab TYPE HASHED TABLE OF ddic\_struc WITH UNIQUE key text. \\n\\ \\n\*Consumer Code \\n\\ \\nDATA int TYPE ddic\_de\_i. \\n\\ \\n"Exception when DDIC\_DE\_I is changed to int8 \\n"and int exceeds value range of i \\nDO int TIMES. \\n ... \\nENDDO. \\n\\ \\n"Syntax error when DDDIC\_DE\_I is changed to int8 \\nDATA dref TYPE REF TO i. \\ndref = REF #( int ). \\n\\ \\n"Syntax error when DDIC\_DE\_I is changed to int8 \\nDATA itab TYPE SORTED TABLE OF i WITH NON-UNIQUE KEY table\_line. \\nINSERT int INTO TABLE itab. \\n\\ \\nDATA char TYPE ddic\_de\_c. \\n\\ \\n"Exception when length of DDIC\_DE\_C is increased \\n"and char contains more than three relevant characters \\nSELECT carrname \\n FROM scarr \\n WHERE carrid = @char \\n INTO TABLE @FINAL(result). \\n\\ \\nDATA: \\n struc1 TYPE ddic\_struc, \\n BEGIN OF struc2, \\n text TYPE c LENGTH 3, \\n int TYPE i, \\n END OF struc2. \\n\\ \\n"Syntax errors when DDIC\_DE\_I is changed to int8 \\n"or when the length of DDIC\_DE\_C is increased \\n"or when a component is added to DDIC\_STRUC \\nstruc1 = struc2. \\nIF struc1 = struc2. \\n ... \\nENDIF. \\n\\ \\n"Syntax error when DDIC\_DE\_I is changed to int8 \\n"or when the length of DDIC\_DE\_C is increased \\n"or when a component is added to DDIC\_STRUC \\nFIELD-SYMBOLS TYPE ddic\_struc. \\nASSIGN struc2 TO CASTING. \\n\\ \\n"Syntax error when DDIC\_DE\_I is changed to int8 \\n"or when the length of DDIC\_DE\_C is increased \\n"or when a component is added to DDIC\_STRUC \\nSELECT single \* \\n from @ddic\_dbtab as dbtab \\n into @struc2. abenabap.html abenabap\_versions\_and\_apis.html abenabap\_release\_contracts.html abenconsumer\_rules.html