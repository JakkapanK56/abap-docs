---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOOP_GROUP_BY_METHOD_ABEXA.htm"
abapFile: "ABENLOOP_GROUP_BY_METHOD_ABEXA.html"
keywords: ["select", "loop", "do", "if", "case", "try", "catch", "method", "class", "data", "internal-table", "field-symbol", "ABENLOOP", "GROUP", "METHOD", "ABEXA"]
---

This example demonstrates the construction of the group key using the assignment of return values.

[Grouping](ABAPLOOP_AT_ITAB_GROUP_BY.html) of an internal table `flights` with [group key binding](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html). The group key of the [group loop](ABENGROUP_LOOP_GLOSRY.html) is constructed as a structure. The return values of the functional method `get_time_zone` are assigned to the components `tz_from` and `tz_to`. The values of the columns `airpfrom` or `airpto` are passed to the input parameter of the method. This creates groups of lines that have the same combinations of time zones for the departure and destination airport.

In the simple case shown here, the table expression from the method could of course also be specified directly:

LOOP AT flights INTO DATA(wa) \\n     GROUP BY ( tz\_from = airports\[ id = wa-airpfrom \]-time\_zone \\n                tz\_to   = airports\[ id = wa-airpto   \]-time\_zone ) \\n     ASSIGNING FIELD-SYMBOL(<group>).

Furthermore, the components `size` and `index` are created for the special language elements `GROUP SIZE` or `GROUP INDEX` to determine the size and index of each group.

The group key that is bound to a field symbol `<group>` and the additional components are produced in the group loop. In a [member loop](ABENMEMBER_LOOP_GLOSRY.html), the lines of each group are placed in an internal table `members` using the [value operator](ABENVALUE_OPERATOR_GLOSRY.html) with the addition [`BASE`](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html). This table is also displayed.

`members` could also be filled by evaluating a table comprehension using [`FOR ... IN GROUP`](ABENFOR_IN_GROUP.html), instead of in a [member loop](ABENMEMBER_LOOP_GLOSRY.html)\\ [`LOOP AT GROUP`](ABAPLOOP_AT_GROUP.html):

members = VALUE #( FOR <member> IN GROUP <group> ( <member> ) ).

The executable example for [grouping with `FOR`](ABENFOR_GROUP_BY_METHOD_ABEXA.html) demonstrates how the entire group loop can be implemented using expressions.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_loop\_grp\_by\_method DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA: \\n flights TYPE TABLE OF spfli WITH EMPTY KEY, \\n airports TYPE TABLE OF sairport WITH EMPTY KEY. \\n METHODS \\n get\_time\_zone IMPORTING id TYPE sairport-id \\n RETURNING VALUE(time\_zone) TYPE sairport-time\_zone. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_loop\_grp\_by\_method IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA members LIKE flights. \\n LOOP AT flights INTO FINAL(wa) \\n GROUP BY ( tz\_from = get\_time\_zone( wa-airpfrom ) \\n tz\_to = get\_time\_zone( wa-airpto ) \\n size = GROUP SIZE index = GROUP INDEX ) \\n ASSIGNING FIELD-SYMBOL(). \\n out->write( name = \`Group key\` \\n data = ). \\n CLEAR members. \\n LOOP AT GROUP ASSIGNING FIELD-SYMBOL(). \\n members = VALUE #( BASE members ( ) ). \\n ENDLOOP. \\n out->write( members )->line( ). \\n ENDLOOP. \\n ENDMETHOD. \\n METHOD get\_time\_zone. \\n TRY. \\n time\_zone = airports\[ id = id \]-time\_zone. \\n CATCH cx\_sy\_itab\_line\_not\_found. \\n time\_zone = 'ERROR'. \\n ENDTRY. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n SELECT \* FROM spfli INTO TABLE @flights. \\n SELECT \* FROM sairport INTO TABLE @airports. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_loop\_grp\_by\_method DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA: \\n flights TYPE TABLE OF spfli WITH EMPTY KEY, \\n airports TYPE TABLE OF sairport WITH EMPTY KEY. \\n METHODS \\n get\_time\_zone IMPORTING id TYPE sairport-id \\n RETURNING VALUE(time\_zone) TYPE sairport-time\_zone. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_loop\_grp\_by\_method IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA members LIKE flights. \\n LOOP AT flights INTO FINAL(wa) \\n GROUP BY ( tz\_from = get\_time\_zone( wa-airpfrom ) \\n tz\_to = get\_time\_zone( wa-airpto ) \\n size = GROUP SIZE index = GROUP INDEX ) \\n ASSIGNING FIELD-SYMBOL(). \\n out->write( name = \`Group key\` \\n data = ). \\n CLEAR members. \\n LOOP AT GROUP ASSIGNING FIELD-SYMBOL(). \\n members = VALUE #( BASE members ( ) ). \\n ENDLOOP. \\n out->write( members )->line( ). \\n ENDLOOP. \\n ENDMETHOD. \\n METHOD get\_time\_zone. \\n TRY. \\n time\_zone = airports\[ id = id \]-time\_zone. \\n CATCH cx\_sy\_itab\_line\_not\_found. \\n time\_zone = 'ERROR'. \\n ENDTRY. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n SELECT \* FROM spfli INTO TABLE @flights. \\n SELECT \* FROM sairport INTO TABLE @airports. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abaploop\_at\_itab\_variants.html abaploop\_at\_itab\_group\_by.html abenloop\_group\_by\_abexas.html