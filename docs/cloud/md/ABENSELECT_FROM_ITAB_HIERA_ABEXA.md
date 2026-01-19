---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSELECT_FROM_ITAB_HIERA_ABEXA.htm"
abapFile: "ABENSELECT_FROM_ITAB_HIERA_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "types", "internal-table", "ABENSELECT", "FROM", "ITAB", "HIERA", "ABEXA"]
---

This example demonstrates how an internal table is accessed in a common table expression with self association and how the table is used as a data source of the hierarchy generator.

An internal table `parent_child_tab` is used as a data source of the common table expression `+parent_child_source` in a [`WITH`](ABAPWITH.html) statement. A [CTE association](ABENCTE_ASSOCIATION_GLOSRY.html)\\ `_relat` is [defined and exposed](ABAPWITH_ASSOCIATIONS_DEFINING.html) for the common table expression. The CTE association is a [self-association](ABENSELF_ASSOCIATION_GLOSRY.html). The common table expression can be used as a data source and the CTE association can be used as a [hierarchy association](ABENHIERARCHY_ASSOCIATION_GLOSRY.html) of the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html) used in the main query of the `WITH` statement. [Hierarchy functions](ABENHIERARCHY_FUNCTION_GLOSRY.html) cannot be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html) and the internal table must be transported to the database.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_from\_itab\_hiera DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n TYPES: \\n BEGIN OF parent\_child, \\n cnt TYPE i, \\n id TYPE c LENGTH 2, \\n parent\_id TYPE c LENGTH 2, \\n END OF parent\_child. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_from\_itab\_hiera IMPLEMENTATION. \\n METHOD main. \\n DATA(start\_id) = CONV demo\_parent\_chld-id( 'A' ). \\n cl\_demo\_input=>new( )->request( CHANGING field = start\_id ). \\n\\ \\n DATA parent\_child\_tab TYPE HASHED TABLE OF parent\_child \\n WITH UNIQUE KEY cnt. \\n\\ \\n parent\_child\_tab = VALUE #( \\n ( cnt = 1 id = 'A' parent\_id = ' ' ) \\n ( cnt = 2 id = 'B' parent\_id = 'A' ) \\n ( cnt = 3 id = 'C' parent\_id = 'A' ) \\n ( cnt = 4 id = 'D' parent\_id = 'C' ) \\n ( cnt = 5 id = 'D' parent\_id = 'B' ) \\n ( cnt = 6 id = 'D' parent\_id = 'A' ) ). \\n\\ \\n WITH \\n +parent\_child\_source AS \\n ( SELECT FROM @parent\_child\_tab AS parent\_child\_tab \\n FIELDS id, \\n parent\_id AS parent ) \\n WITH ASSOCIATIONS ( \\n JOIN MANY TO MANY +parent\_child\_source AS \_relat \\n ON +parent\_child\_source~parent = \_relat~id ) \\n SELECT FROM HIERARCHY( SOURCE +parent\_child\_source \\n CHILD TO PARENT ASSOCIATION \_relat \\n START WHERE id = @start\_id \\n SIBLINGS ORDER BY id \\n MULTIPLE PARENTS ALLOWED ) \\n FIELDS id, \\n parent, \\n hierarchy\_rank, \\n hierarchy\_tree\_size, \\n hierarchy\_parent\_rank, \\n hierarchy\_level, \\n hierarchy\_is\_cycle, \\n hierarchy\_is\_orphan, \\n node\_id, \\n parent\_id \\n INTO TABLE @FINAL(result) ##itab\_db\_select. \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_from\_itab\_hiera DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n TYPES: \\n BEGIN OF parent\_child, \\n cnt TYPE i, \\n id TYPE c LENGTH 2, \\n parent\_id TYPE c LENGTH 2, \\n END OF parent\_child. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_from\_itab\_hiera IMPLEMENTATION. \\n METHOD main. \\n DATA(start\_id) = CONV demo\_parent\_chld-id( 'A' ). \\n cl\_demo\_input=>new( )->request( CHANGING field = start\_id ). \\n\\ \\n DATA parent\_child\_tab TYPE HASHED TABLE OF parent\_child \\n WITH UNIQUE KEY cnt. \\n\\ \\n parent\_child\_tab = VALUE #( \\n ( cnt = 1 id = 'A' parent\_id = ' ' ) \\n ( cnt = 2 id = 'B' parent\_id = 'A' ) \\n ( cnt = 3 id = 'C' parent\_id = 'A' ) \\n ( cnt = 4 id = 'D' parent\_id = 'C' ) \\n ( cnt = 5 id = 'D' parent\_id = 'B' ) \\n ( cnt = 6 id = 'D' parent\_id = 'A' ) ). \\n\\ \\n WITH \\n +parent\_child\_source AS \\n ( SELECT FROM @parent\_child\_tab AS parent\_child\_tab \\n FIELDS id, \\n parent\_id AS parent ) \\n WITH ASSOCIATIONS ( \\n JOIN MANY TO MANY +parent\_child\_source AS \_relat \\n ON +parent\_child\_source~parent = \_relat~id ) \\n SELECT FROM HIERARCHY( SOURCE +parent\_child\_source \\n CHILD TO PARENT ASSOCIATION \_relat \\n START WHERE id = @start\_id \\n SIBLINGS ORDER BY id \\n MULTIPLE PARENTS ALLOWED ) \\n FIELDS id, \\n parent, \\n hierarchy\_rank, \\n hierarchy\_tree\_size, \\n hierarchy\_parent\_rank, \\n hierarchy\_level, \\n hierarchy\_is\_cycle, \\n hierarchy\_is\_orphan, \\n node\_id, \\n parent\_id \\n INTO TABLE @FINAL(result) ##itab\_db\_select. \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapfrom\_clause.html abapselect\_data\_source.html abapselect\_itab.html