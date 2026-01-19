---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCORRESPONDING_MAPPING_ABEXA.htm"
abapFile: "ABENCORRESPONDING_MAPPING_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENCORRESPONDING", "MAPPING", "ABEXA"]
---

This example demonstrates the [component operator](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html) with explicit mapping rules.

The example assigns the [basic form](ABENCORRESPONDING_CONSTR_ARG_TYPE.html) of the result of a constructor expression with the component operator `CORRESPONDING` with the parameter `struct1` to a compatible structure `struct2`. Various [mapping rules](ABENCORRESPONDING_CONSTR_MAPPING.html) are demonstrated.

-   If no mapping rule is used, the identically named components `a1` and `a2` are assigned and the other components remain initial.
-   The mapping rule `MAPPING b4 = a3` also assigns the component `a3` to the component `b4`.
-   The mapping rule `MAPPING b4 = a1` assigns the component `a1` twice, to `b4` and to the identically named component `a1`.
-   The mapping rule `EXCEPT a1` assigns only the component `a2` to the identically named component, since the component `a1` is excluded.
-   In addition to the identically named assignment, the mapping rule `MAPPING b4 = a3 EXCEPT a1` assigns the component `a3` to the component `b4` and `a1` is excluded from the identically named assignment.
-   The mapping rule `EXCEPT *` does not assign any components and all components of the result remain initial.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_crrspndng\_mapping DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n DATA: \\n BEGIN OF struct1, \\n a1 TYPE string VALUE \`a1\_XX\`, \\n a2 TYPE string VALUE \`a2\_XX\`, \\n a3 TYPE string VALUE \`a3\_XX\`, \\n a4 TYPE string VALUE \`a4\_XX\`, \\n END OF struct1, \\n BEGIN OF struct2, \\n a1 TYPE string VALUE \`a1\_YY\`, \\n a2 TYPE string VALUE \`a2\_YY\`, \\n b3 TYPE string VALUE \`b3\_YY\`, \\n b4 TYPE string VALUE \`b4\_YY\`, \\n END OF struct2. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_crrspndng\_mapping IMPLEMENTATION. \\n METHOD main. \\n out->begin\_section( \`struct1\` \\n )->write( struct1 \\n )->next\_section( \`struct2\` \\n )->write( struct2 ). \\n\\ \\n struct2 = CORRESPONDING #( struct1 ). \\n out->begin\_section( \\n \`struct2 = CORRESPONDING #( struct1 )\` \\n )->write( struct2 ). \\n\\ \\n struct2 = CORRESPONDING #( struct1 MAPPING b4 = a3 ). \\n out->begin\_section( \\n \`struct2 = CORRESPONDING #( struct1 MAPPING b4 = a3 )\` \\n )->write( struct2 ). \\n\\ \\n struct2 = CORRESPONDING #( struct1 MAPPING b4 = a1 ). \\n out->begin\_section( \\n \`struct2 = CORRESPONDING #( struct1 MAPPING b4 = a1 )\` \\n )->write( struct2 ). \\n\\ \\n struct2 = CORRESPONDING #( struct1 EXCEPT a1 ). \\n out->begin\_section( \\n \`struct2 = CORRESPONDING #( struct1 EXCEPT a1 )\` \\n )->write( struct2 ). \\n\\ \\n struct2 = CORRESPONDING #( struct1 MAPPING b4 = a3 EXCEPT a1 ). \\n out->begin\_section( \\n \`struct2 = CORRESPONDING #( struct1 MAPPING b4 = a3 EXCEPT a1 )\` \\n )->write( struct2 ). \\n\\ \\n struct2 = CORRESPONDING #( struct1 MAPPING b4 = a3 EXCEPT \* ). \\n out->begin\_section( \\n \`struct2 = CORRESPONDING #( struct1 MAPPING b4 = a3 EXCEPT \* )\` \\n )->write( struct2 ). \\n\\ \\n struct2 = CORRESPONDING #( struct1 EXCEPT \* ). \\n out->begin\_section( \\n \`struct2 = CORRESPONDING #( struct1 EXCEPT \* )\` \\n )->write( struct2 ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_crrspndng\_mapping DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n DATA: \\n BEGIN OF struct1, \\n a1 TYPE string VALUE \`a1\_XX\`, \\n a2 TYPE string VALUE \`a2\_XX\`, \\n a3 TYPE string VALUE \`a3\_XX\`, \\n a4 TYPE string VALUE \`a4\_XX\`, \\n END OF struct1, \\n BEGIN OF struct2, \\n a1 TYPE string VALUE \`a1\_YY\`, \\n a2 TYPE string VALUE \`a2\_YY\`, \\n b3 TYPE string VALUE \`b3\_YY\`, \\n b4 TYPE string VALUE \`b4\_YY\`, \\n END OF struct2. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_crrspndng\_mapping IMPLEMENTATION. \\n METHOD main. \\n out->begin\_section( \`struct1\` \\n )->write( struct1 \\n )->next\_section( \`struct2\` \\n )->write( struct2 ). \\n\\ \\n struct2 = CORRESPONDING #( struct1 ). \\n out->begin\_section( \\n \`struct2 = CORRESPONDING #( struct1 )\` \\n )->write( struct2 ). \\n\\ \\n struct2 = CORRESPONDING #( struct1 MAPPING b4 = a3 ). \\n out->begin\_section( \\n \`struct2 = CORRESPONDING #( struct1 MAPPING b4 = a3 )\` \\n )->write( struct2 ). \\n\\ \\n struct2 = CORRESPONDING #( struct1 MAPPING b4 = a1 ). \\n out->begin\_section( \\n \`struct2 = CORRESPONDING #( struct1 MAPPING b4 = a1 )\` \\n )->write( struct2 ). \\n\\ \\n struct2 = CORRESPONDING #( struct1 EXCEPT a1 ). \\n out->begin\_section( \\n \`struct2 = CORRESPONDING #( struct1 EXCEPT a1 )\` \\n )->write( struct2 ). \\n\\ \\n struct2 = CORRESPONDING #( struct1 MAPPING b4 = a3 EXCEPT a1 ). \\n out->begin\_section( \\n \`struct2 = CORRESPONDING #( struct1 MAPPING b4 = a3 EXCEPT a1 )\` \\n )->write( struct2 ). \\n\\ \\n struct2 = CORRESPONDING #( struct1 MAPPING b4 = a3 EXCEPT \* ). \\n out->begin\_section( \\n \`struct2 = CORRESPONDING #( struct1 MAPPING b4 = a3 EXCEPT \* )\` \\n )->write( struct2 ). \\n\\ \\n struct2 = CORRESPONDING #( struct1 EXCEPT \* ). \\n out->begin\_section( \\n \`struct2 = CORRESPONDING #( struct1 EXCEPT \* )\` \\n )->write( struct2 ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abencorresponding.html abencorresponding\_abexas.html