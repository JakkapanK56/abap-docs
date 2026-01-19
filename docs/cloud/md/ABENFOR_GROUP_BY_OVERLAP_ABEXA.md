---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENFOR_GROUP_BY_OVERLAP_ABEXA.htm"
abapFile: "ABENFOR_GROUP_BY_OVERLAP_ABEXA.html"
keywords: ["loop", "do", "if", "case", "method", "class", "data", "types", "ABENFOR", "GROUP", "OVERLAP", "ABEXA"]
---

This example demonstrates the construction of the group key if conditions overlap.

This example works in the same way as the corresponding [executable example](ABENLOOP_GROUP_BY_OVERLAP_ABEXA.html) for [`LOOP AT ... GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html), but uses the expression [`FOR GROUPS ... OF`](ABENFOR_GROUPS_OF.html) for a [table reduction](ABENTABLE_REDUCTION_GLOSRY.html) with [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html) instead of the [group loop](ABENGROUP_LOOP_GLOSRY.html). In both cases, the group key after `GROUP BY` is constructed in exactly the same way.

The result of the table reduction is a reference to an object of the class `CL_DEMO_OUTPUT` to which the results of the grouping are written. The group members are written to a local auxiliary table `members` using a [table comprehension](ABENTABLE_COMPREHENSION_GLOSRY.html) with [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html). This table comprehension could also be used in the [executable example](ABENLOOP_GROUP_BY_OVERLAP_ABEXA.html) for `LOOP AT ... GROUP BY` instead of the [member loop](ABENMEMBER_LOOP_GLOSRY.html).

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_for\_grps\_by\_overlap DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n TYPES \\n i\_tab TYPE STANDARD TABLE OF i WITH EMPTY KEY. \\n DATA \\n itab TYPE i\_tab. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_for\_grps\_by\_overlap IMPLEMENTATION. \\n METHOD main. \\n TYPES ot TYPE REF TO if\_demo\_output. \\n\\ \\n out->begin\_section( \`LE 5, BT 3 AND 7, GT 5\` ). \\n\\ \\n out = REDUCE #( \\n INIT ol TYPE ot \\n FOR GROUPS OF wa IN itab \\n GROUP BY COND string( WHEN wa <= 5 THEN \`LE 5\` \\n WHEN wa BETWEEN 3 AND 7 \\n THEN \`BT 3 AND 7\` \\n WHEN wa > 5 THEN \`GT 5\` ) \\n LET members = VALUE i\_tab( \\n FOR IN GROUP ( ) ) IN \\n NEXT ol = out->begin\_section( \\ \\n )->write( members )->end\_section( ) ). \\n\\ \\n out->next\_section( \`BT 3 AND 7, LE 5, GT 5\` ). \\n\\ \\n out = REDUCE #( \\n INIT ol TYPE ot \\n FOR GROUPS OF wa IN itab \\n GROUP BY COND string( WHEN wa BETWEEN 3 AND 7 \\n THEN \`BT 3 AND 7\` \\n WHEN wa <= 5 THEN \`LE 5\` \\n ELSE \`GT 5\` ) \\n LET members = VALUE i\_tab( \\n FOR IN GROUP ( ) ) \\n IN NEXT ol = out->begin\_section( \\ \\n )->write( members )->end\_section( ) ). \\n\\ \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n itab = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_for\_grps\_by\_overlap DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n TYPES \\n i\_tab TYPE STANDARD TABLE OF i WITH EMPTY KEY. \\n DATA \\n itab TYPE i\_tab. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_for\_grps\_by\_overlap IMPLEMENTATION. \\n METHOD main. \\n TYPES ot TYPE REF TO if\_demo\_output. \\n\\ \\n out->begin\_section( \`LE 5, BT 3 AND 7, GT 5\` ). \\n\\ \\n out = REDUCE #( \\n INIT ol TYPE ot \\n FOR GROUPS OF wa IN itab \\n GROUP BY COND string( WHEN wa <= 5 THEN \`LE 5\` \\n WHEN wa BETWEEN 3 AND 7 \\n THEN \`BT 3 AND 7\` \\n WHEN wa > 5 THEN \`GT 5\` ) \\n LET members = VALUE i\_tab( \\n FOR IN GROUP ( ) ) IN \\n NEXT ol = out->begin\_section( \\ \\n )->write( members )->end\_section( ) ). \\n\\ \\n out->next\_section( \`BT 3 AND 7, LE 5, GT 5\` ). \\n\\ \\n out = REDUCE #( \\n INIT ol TYPE ot \\n FOR GROUPS OF wa IN itab \\n GROUP BY COND string( WHEN wa BETWEEN 3 AND 7 \\n THEN \`BT 3 AND 7\` \\n WHEN wa <= 5 THEN \`LE 5\` \\n ELSE \`GT 5\` ) \\n LET members = VALUE i\_tab( \\n FOR IN GROUP ( ) ) \\n IN NEXT ol = out->begin\_section( \\ \\n )->write( members )->end\_section( ) ). \\n\\ \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n itab = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenfor\_itab.html abenfor\_grouping\_abexas.html