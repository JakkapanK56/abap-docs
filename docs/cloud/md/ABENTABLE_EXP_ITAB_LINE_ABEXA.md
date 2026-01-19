---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTABLE_EXP_ITAB_LINE_ABEXA.htm"
abapFile: "ABENTABLE_EXP_ITAB_LINE_ABEXA.html"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "ABENTABLE", "EXP", "ITAB", "LINE", "ABEXA"]
---

This example demonstrates how the line is specified in table expressions.

Table expressions that specify different lines are used as input parameters of the method `WRITE_DATA` of the output class `CL_DEMO_OUTPUT`. The following output is produced:

1.  The first line of the [primary table index](ABENPRIMARY_TABLE_INDEX_GLOSRY.html)
2.  The first line of the [secondary table index](ABENSECONDARY_TABLE_INDEX_GLOSRY.html) that is assigned to the [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html)\\ `cities`.
3.  A line with specific content in the columns `CARRID` and `CONNID`. This search with a free key is not optimized and the associated syntax check warning is hidden here using a [pragma](ABENPRAGMA_GLOSRY.html).
4.  The same line as before, but with a read that is fully optimized by using the secondary hash key `id`. All key fields must be specified.
5.  The same line as before, where the secondary hash key `id` is used by the syntax `TABLE KEY`. For hash keys, there is no difference between using `KEY` and `TABLE KEY`.
6.  A line with specific content in the columns `CITYFROM` and `CITYTO`. The search is partly optimized using the secondary sorted key `cities` and specifying the first key field.
7.  The same line as before, where the secondary sorted key `cities` is used by the syntax `TABLE KEY`. Here all key fields must be specified and the search is fully optimized.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_tab\_exp\_line DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA \\n flight\_tab \\n TYPE STANDARD TABLE OF spfli \\n WITH EMPTY KEY \\n WITH UNIQUE HASHED KEY id COMPONENTS carrid connid \\n WITH NON-UNIQUE SORTED KEY cities COMPONENTS cityfrom cityto. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_tab\_exp\_line IMPLEMENTATION. \\n METHOD main. \\n TRY. \\n out->begin\_section( \\n \`Primary index line 1\` \\n )->write( \\n flight\_tab\[ 1 \] ). \\n\\ \\n out->next\_section( \\n \`Secondary index CITIES line 1\` \\n )->write( \\n flight\_tab\[ KEY cities INDEX 1 \] ). \\n\\ \\n out->next\_section( \\n \`Free key CARRID, CONNID not optimized\` \\n )->write( \\n flight\_tab\[ carrid = 'UA' \\n connid = '0941' \] ) ##primkey\[id\]. \\n\\ \\n out->next\_section( \\n \`Secondary key ID fully optimized\` \\n )->write( \\n flight\_tab\[ KEY id COMPONENTS carrid = 'UA' \\n connid = '0941' \] ). \\n\\ \\n out->next\_section( \\n \`Secondary key ID fully optimized\` \\n )->write( \\n flight\_tab\[ TABLE KEY id COMPONENTS carrid = 'UA' \\n connid = '0941' \] ). \\n\\ \\n out->next\_section( \\n \`Secondary key CITIES partly optimized\` \\n )->write( \\n flight\_tab\[ KEY cities cityfrom = 'FRANKFURT' \] ). \\n\\ \\n out->next\_section( \\n \`Secondary key CITIES fully optimized\` \\n )->write( \\n flight\_tab\[ TABLE KEY cities cityfrom = 'FRANKFURT' \\n cityto = 'NEW YORK' \] ). \\n\\ \\n CATCH cx\_sy\_itab\_line\_not\_found. \\n out->write( \`Nothing found\` ). \\n ENDTRY. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n SELECT \* \\n FROM spfli \\n ORDER BY carrid, connid \\n INTO TABLE @flight\_tab. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_tab\_exp\_line DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA \\n flight\_tab \\n TYPE STANDARD TABLE OF spfli \\n WITH EMPTY KEY \\n WITH UNIQUE HASHED KEY id COMPONENTS carrid connid \\n WITH NON-UNIQUE SORTED KEY cities COMPONENTS cityfrom cityto. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_tab\_exp\_line IMPLEMENTATION. \\n METHOD main. \\n TRY. \\n out->begin\_section( \\n \`Primary index line 1\` \\n )->write( \\n flight\_tab\[ 1 \] ). \\n\\ \\n out->next\_section( \\n \`Secondary index CITIES line 1\` \\n )->write( \\n flight\_tab\[ KEY cities INDEX 1 \] ). \\n\\ \\n out->next\_section( \\n \`Free key CARRID, CONNID not optimized\` \\n )->write( \\n flight\_tab\[ carrid = 'UA' \\n connid = '0941' \] ) ##primkey\[id\]. \\n\\ \\n out->next\_section( \\n \`Secondary key ID fully optimized\` \\n )->write( \\n flight\_tab\[ KEY id COMPONENTS carrid = 'UA' \\n connid = '0941' \] ). \\n\\ \\n out->next\_section( \\n \`Secondary key ID fully optimized\` \\n )->write( \\n flight\_tab\[ TABLE KEY id COMPONENTS carrid = 'UA' \\n connid = '0941' \] ). \\n\\ \\n out->next\_section( \\n \`Secondary key CITIES partly optimized\` \\n )->write( \\n flight\_tab\[ KEY cities cityfrom = 'FRANKFURT' \] ). \\n\\ \\n out->next\_section( \\n \`Secondary key CITIES fully optimized\` \\n )->write( \\n flight\_tab\[ TABLE KEY cities cityfrom = 'FRANKFURT' \\n cityto = 'NEW YORK' \] ). \\n\\ \\n CATCH cx\_sy\_itab\_line\_not\_found. \\n out->write( \`Nothing found\` ). \\n ENDTRY. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n SELECT \* \\n FROM spfli \\n ORDER BY carrid, connid \\n INTO TABLE @flight\_tab. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abentable\_expressions.html abentable\_exp\_itab\_line.html