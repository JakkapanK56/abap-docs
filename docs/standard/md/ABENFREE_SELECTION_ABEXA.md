---
title: "ABENFREE_SELECTION_ABEXA"
description: |
  ABENFREE_SELECTION_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENFREE_SELECTION_ABEXA.htm"
abapFile: "ABENFREE_SELECTION_ABEXA.html"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "ABENFREE", "SELECTION", "ABEXA"]
---

This example demonstrates how a dynamic selection is used in a program.

This example shows the simplest way to use a [dynamic selection](ABENFREE_SELECTIONS.html) in a program. When the value *T* of the parameter `KIND` is passed, the function module `FREE_SELECTIONS_INIT` is set to prepare dynamic selections for database tables in the ABAP Dictionary. The names of the database tables (here only one freely selectable table) are passed to the table parameter `TABLES_TAB`.

The result of `FREE_SELECTIONS_INIT` is passed to the function module `FREE_SELECTIONS_DIALOG`, which displays a selection screen for entering dynamic selections for the database table. The user can select which database fields are used for dynamic selections and can then make these selections.

Once the user confirms the selected dynamic selections by choosing *Save*, the program inherits them as a dynamic `WHERE` clause and then uses this clause in a dynamic `SELECT` statement to read the data accordingly. The result is displayed in an ALV list.

The method `CHECK_TABLE_NAME_STR` of the class `CL_ABAP_DYN_PRG` is used to check whether the database table specified exists and can be used.

REPORT demo\_free\_selections.\\n\\nPARAMETERS dbtab TYPE tabname DEFAULT 'SPFLI'.\\n\\nCLASS demo DEFINITION.\\n PUBLIC SECTION.\\n CLASS-METHODS main.\\n PRIVATE SECTION.\\n CLASS-METHODS check\_existence\_and\_authority\\n RETURNING VALUE(checked\_dbtab) TYPE tabname.\\nENDCLASS.\\n\\nCLASS demo IMPLEMENTATION.\\n METHOD main.\\n DATA selid TYPE rsdynsel-selid.\\n DATA field\_tab TYPE TABLE OF rsdsfields.\\n DATA table\_tab TYPE TABLE OF rsdstabs.\\n DATA cond\_tab TYPE rsds\_twhere.\\n DATA dref TYPE REF TO data.\\n\\n FIELD-SYMBOLS LIKE LINE OF cond\_tab.\\n\\n FINAL(checked\_dbtab) = demo=>check\_existence\_and\_authority( ).\\n\\n table\_tab = VALUE #( ( prim\_tab = checked\_dbtab ) ).\\n CALL FUNCTION 'FREE\_SELECTIONS\_INIT'\\n EXPORTING\\n kind = 'T'\\n IMPORTING\\n selection\_id = selid\\n TABLES\\n tables\_tab = table\_tab\\n EXCEPTIONS\\n OTHERS = 4.\\n IF sy-subrc <> 0.\\n MESSAGE 'Error in initialization' TYPE 'I' DISPLAY LIKE 'E'.\\n LEAVE PROGRAM.\\n ENDIF.\\n\\n CALL FUNCTION 'FREE\_SELECTIONS\_DIALOG'\\n EXPORTING\\n selection\_id = selid\\n title = 'Free Selection'\\n as\_window = ' '\\n IMPORTING\\n where\_clauses = cond\_tab\\n TABLES\\n fields\_tab = field\_tab\\n EXCEPTIONS\\n OTHERS = 4.\\n IF sy-subrc <> 0.\\n MESSAGE 'No free selection created' TYPE 'I'.\\n LEAVE PROGRAM.\\n ENDIF.\\n\\n ASSIGN cond\_tab\[ tablename = checked\_dbtab \] TO .\\n IF sy-subrc <> 0.\\n MESSAGE 'Error in condition' TYPE 'I' DISPLAY LIKE 'E'.\\n LEAVE PROGRAM.\\n ENDIF.\\n\\n CREATE DATA dref TYPE TABLE OF (checked\_dbtab).\\n\\n TRY.\\n SELECT \*\\n FROM (checked\_dbtab)\\n WHERE (\-where\_tab)\\n INTO TABLE @dref->\*.\\n CATCH cx\_sy\_dynamic\_osql\_error.\\n MESSAGE 'Error in dynamic ABAP SQL' TYPE 'I' DISPLAY LIKE 'E'.\\n LEAVE PROGRAM.\\n ENDTRY.\\n\\n TRY.\\n cl\_salv\_table=>factory(\\n IMPORTING r\_salv\_table = FINAL(alv)\\n CHANGING t\_table = dref->\* ).\\n alv->display( ).\\n CATCH cx\_salv\_msg.\\n MESSAGE 'Error in ALV display' TYPE 'I' DISPLAY LIKE 'E'.\\n ENDTRY.\\n ENDMETHOD.\\n METHOD check\_existence\_and\_authority.\\n TRY.\\n checked\_dbtab = cl\_abap\_dyn\_prg=>check\_table\_name\_str(\\n val = dbtab\\n packages = 'SAPBC\_DATAMODEL' ).\\n CATCH cx\_abap\_not\_a\_table.\\n MESSAGE 'Database table not found' TYPE 'I' DISPLAY LIKE 'E'.\\n LEAVE PROGRAM.\\n CATCH cx\_abap\_not\_in\_package.\\n MESSAGE 'Only tables from the flight data model are allowed'\\n TYPE 'I' DISPLAY LIKE 'E'.\\n LEAVE PROGRAM.\\n ENDTRY.\\n ENDMETHOD.\\nENDCLASS.\\n\\nSTART-OF-SELECTION.\\n demo=>main( ).\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenfree\_selections.html