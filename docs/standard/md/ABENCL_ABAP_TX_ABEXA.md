---
title: "Number"
description: |
  Phase What is executed Expected Result 1 MODIFY RAP create operation` && n ` Ok 2 MODIFY ABAP SQL ` && n `database modification Violation 3 MODIFY Commit Violation 4 SAVE ABAP SQL database ` && n `modification Ok 5 SAVE Commit Violation 6 SAVE RAP create operation` && n ` Violation 7
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCL_ABAP_TX_ABEXA.htm"
abapFile: "ABENCL_ABAP_TX_ABEXA.html"
keywords: ["delete", "if", "case", "method", "class", "data", "ABENCL", "ABAP", "ABEXA"]
---

This example demonstrates the explicit setting of transactional phases using the `MODIFY` and `SAVE` methods of the class `CL_ABAP_TX`. It includes multiple showcase implementations after setting the transactional phase. In some cases, the implementations deliberately violate the transactional contract to demonstrate what is allowed and what not. Furthermore, the implementations include method calls. The methods are tagged with `IF_ABAP_TX*`.

**Note** The example can only be executed if the checkpoint group *CC\_STMT* is not active.

The example is executed based on an input parameter. For the details, see the code and the descriptions in the popup that is displayed when running the example.

\* Public class definition \\nCLASS cl\_demo\_cl\_abap\_tx DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n DATA input TYPE i. \\n\\ \\n PRIVATE SECTION. \\n METHODS get\_html RETURNING VALUE(html) TYPE string. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cl\_abap\_tx IMPLEMENTATION. \\n METHOD main. \\n\\ \\n cl\_demo\_input=>new( \\n )->add\_text( get\_html( ) \\n )->add\_field( EXPORTING \\n text = \`Number\` \\n CHANGING \\n field = input \\n )->request( ). \\n\\ \\n IF input > 7. \\n DATA(oref) = NEW cl\_demo\_classified\_apis( ). \\n ENDIF. \\n\\ \\n CASE input. \\n\\ \\n WHEN 1. \\n\\ \\n cl\_abap\_tx=>modify( ). \\n\\ \\n MODIFY ENTITY demo\_managed\_root \\n CREATE AUTO FILL CID \\n FIELDS ( key\_field data\_field1\_root data\_field2\_root ) \\n WITH VALUE #( \\n ( key\_field = 1 \\n data\_field1\_root = \`abc\` \\n data\_field2\_root = \`def\` ) ) \\n MAPPED DATA(m) \\n FAILED DATA(f) \\n REPORTED DATA(r). \\n\\ \\n out->write( \`RAP create operation in MODIFY phase: Ok!\` ). \\n\\ \\n WHEN 2. \\n\\ \\n cl\_abap\_tx=>modify( ). \\n\\ \\n DELETE FROM demo\_tab\_root. "#EC CI\_NOWHERE \\n\\ \\n out->write( \`Database modification operation in MODIFY \` && \\n \`phase: Violation!\` ). \\n\\ \\n WHEN 3. \\n\\ \\n cl\_abap\_tx=>modify( ). \\n\\ \\n COMMIT WORK. \\n\\ \\n out->write( \`Commit in MODIFY phase: Violation!\` ). \\n\\ \\n WHEN 4. \\n\\ \\n cl\_abap\_tx=>save( ). \\n\\ \\n DELETE FROM demo\_tab\_root. "#EC CI\_NOWHERE \\n\\ \\n out->write( \`Database modification operation in SAVE \` && \\n \`phase: Ok!\` ). \\n\\ \\n WHEN 5. \\n\\ \\n cl\_abap\_tx=>save( ). \\n\\ \\n COMMIT WORK. \\n\\ \\n out->write( \`Commit in (late) SAVE phase: Ok!\` ). \\n\\ \\n WHEN 6. \\n\\ \\n cl\_abap\_tx=>save( ). \\n\\ \\n MODIFY ENTITY demo\_managed\_root \\n CREATE AUTO FILL CID \\n FIELDS ( key\_field data\_field1\_root data\_field2\_root ) \\n WITH VALUE #( \\n ( key\_field = 1 \\n data\_field1\_root = \`abc\` \\n data\_field2\_root = \`def\` ) ) \\n MAPPED m \\n FAILED f \\n REPORTED r. \\n\\ \\n out->write( \`RAP create operation in SAVE phase: Violation!\` ). \\n\\ \\n\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* Classified APIs \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* \\n\\ \\n "if\_abap\_tx\_complete \\n WHEN 7. \\n\\ \\n cl\_abap\_tx=>modify( ). \\n\\ \\n oref->meth\_complete( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_COMPLETE in MODIFY phase: Violation!\` ). \\n\\ \\n WHEN 8. \\n\\ \\n cl\_abap\_tx=>save( ). \\n\\ \\n oref->meth\_complete( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_COMPLETE in SAVE phase: Violation!\` ). \\n\\ \\n WHEN 9. \\n\\ \\n oref->meth\_complete( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_COMPLETE (no transactional context set): Ok!\` ). \\n\\ \\n "if\_abap\_tx\_read \\n WHEN 10. \\n\\ \\n cl\_abap\_tx=>modify( ). \\n\\ \\n oref->meth\_read( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_READ in MODIFY phase: Ok!\` ). \\n\\ \\n WHEN 11. \\n\\ \\n cl\_abap\_tx=>save( ). \\n\\ \\n oref->meth\_read( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_READ in SAVE phase: Ok!\` ). \\n\\ \\n "if\_abap\_tx\_modify \\n WHEN 12. \\n\\ \\n cl\_abap\_tx=>modify( ). \\n\\ \\n oref->meth\_modify( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_MODIFY in MODIFY phase: Ok!\` ). \\n\\ \\n WHEN 13. \\n\\ \\n cl\_abap\_tx=>save( ). \\n\\ \\n oref->meth\_modify( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_MODIFY in SAVE phase: Violation!\` ). \\n\\ \\n "if\_abap\_tx\_save \\n WHEN 14. \\n\\ \\n cl\_abap\_tx=>modify( ). \\n\\ \\n oref->meth\_save( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_SAVE in MODIFY phase: Violation!\` ). \\n\\ \\n WHEN 15. \\n\\ \\n cl\_abap\_tx=>save( ). \\n\\ \\n oref->meth\_save( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_SAVE in SAVE phase: Ok!\` ). \\n\\ \\n "if\_abap\_tx\_functional \\n WHEN 16. \\n\\ \\n cl\_abap\_tx=>modify( ). \\n\\ \\n oref->meth\_functional( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_FUNCTIONAL in MODIFY phase: Ok!\` ). \\n\\ \\n WHEN 17. \\n\\ \\n cl\_abap\_tx=>save( ). \\n\\ \\n oref->meth\_functional( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_FUNCTIONAL in SAVE phase: Ok!\` ). \\n\\ \\n "if\_abap\_tx\_surface \\n WHEN 18. \\n\\ \\n cl\_abap\_tx=>modify( ). \\n\\ \\n oref->meth\_surface( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_SURFACE in MODIFY phase: Violation!\` ). \\n\\ \\n WHEN 19. \\n\\ \\n cl\_abap\_tx=>save( ). \\n\\ \\n oref->meth\_surface( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_SURFACE in SAVE phase: Violation!\` ). \\n\\ \\n WHEN OTHERS. \\n out->write( \`Enter one of the prededfined numbers.\` ). \\n ENDCASE. \\n\\ \\n ENDMETHOD. \\n METHOD get\_html. \\n html = \\n \`

For this example, the contract \` && \\n \`checks must not be activated.
For testing the \` && \\n \`effect of setting the transactional \` && \\n \`phase explicitly using the methods MODIFY and SAVE \` && \\n \`of the class CL\_ABAP\_TX, \` && \\n \`enter one of the following numbers (note that "Violation" \` && \\n \`can mean a runtime error.:

\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`

Number

Phase

What is executed

Expected Result

1

MODIFY

RAP create operation\` && \\n \`

Ok

2

MODIFY

ABAP SQL \` && \\n \`database modification

Violation

3

MODIFY

Commit

Violation

4

SAVE

ABAP SQL database \` && \\n \`modification

Ok

5

SAVE

Commit

Violation

6

SAVE

RAP create operation\` && \\n \`

Violation

7

MODIFY

Calling API tagged with \` && \\n \`IF\_ABAP\_TX\_COMPLETE

Violation

8

SAVE

Calling API tagged with \` && \\n \`IF\_ABAP\_TX\_COMPLETE

Violation

9

No phase set

Calling API \` && \\n \`tagged with IF\_ABAP\_TX\_COMPLETE\` && \\n \`

Ok

10

MODIFY

Calling API tagged with \` && \\n \`IF\_ABAP\_TX\_READ

Ok

11

SAVE

Calling API tagged with \` && \\n \`IF\_ABAP\_TX\_READ

Ok

12

MODIFY

Calling API tagged with \` && \\n \`IF\_ABAP\_TX\_MODIFY

Ok

13

SAVE

Calling API tagged with \` && \\n \`IF\_ABAP\_TX\_MODIFY

Violation

14

MODIFY

Calling API tagged with \` && \\n \`IF\_ABAP\_TX\_SAVE

Violation

15

SAVE

Calling API tagged with \` && \\n \`IF\_ABAP\_TX\_SAVE

Ok

16

MODIFY

Calling API tagged with \` && \\n \`IF\_ABAP\_TX\_FUNCTIONAL

Ok

17

SAVE

Calling API tagged with \` && \\n \`IF\_ABAP\_TX\_FUNCTIONAL

Ok

18

MODIFY

Calling API tagged with \` && \\n \`IF\_ABAP\_TX\_SURFACE

Violation

19

SAVE

Calling API tagged with \` && \\n \`IF\_ABAP\_TX\_SURFACE

Violation

\`. \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_cl\_abap\_tx DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n DATA input TYPE i. \\n\\ \\n PRIVATE SECTION. \\n METHODS get\_html RETURNING VALUE(html) TYPE string. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cl\_abap\_tx IMPLEMENTATION. \\n METHOD main. \\n\\ \\n cl\_demo\_input=>new( \\n )->add\_text( get\_html( ) \\n )->add\_field( EXPORTING \\n text = \`Number\` \\n CHANGING \\n field = input \\n )->request( ). \\n\\ \\n IF input > 7. \\n DATA(oref) = NEW cl\_demo\_classified\_apis( ). \\n ENDIF. \\n\\ \\n CASE input. \\n\\ \\n WHEN 1. \\n\\ \\n cl\_abap\_tx=>modify( ). \\n\\ \\n MODIFY ENTITY demo\_managed\_root \\n CREATE AUTO FILL CID \\n FIELDS ( key\_field data\_field1\_root data\_field2\_root ) \\n WITH VALUE #( \\n ( key\_field = 1 \\n data\_field1\_root = \`abc\` \\n data\_field2\_root = \`def\` ) ) \\n MAPPED DATA(m) \\n FAILED DATA(f) \\n REPORTED DATA(r). \\n\\ \\n out->write( \`RAP create operation in MODIFY phase: Ok!\` ). \\n\\ \\n WHEN 2. \\n\\ \\n cl\_abap\_tx=>modify( ). \\n\\ \\n DELETE FROM demo\_tab\_root. "#EC CI\_NOWHERE \\n\\ \\n out->write( \`Database modification operation in MODIFY \` && \\n \`phase: Violation!\` ). \\n\\ \\n WHEN 3. \\n\\ \\n cl\_abap\_tx=>modify( ). \\n\\ \\n COMMIT WORK. \\n\\ \\n out->write( \`Commit in MODIFY phase: Violation!\` ). \\n\\ \\n WHEN 4. \\n\\ \\n cl\_abap\_tx=>save( ). \\n\\ \\n DELETE FROM demo\_tab\_root. "#EC CI\_NOWHERE \\n\\ \\n out->write( \`Database modification operation in SAVE \` && \\n \`phase: Ok!\` ). \\n\\ \\n WHEN 5. \\n\\ \\n cl\_abap\_tx=>save( ). \\n\\ \\n COMMIT WORK. \\n\\ \\n out->write( \`Commit in (late) SAVE phase: Ok!\` ). \\n\\ \\n WHEN 6. \\n\\ \\n cl\_abap\_tx=>save( ). \\n\\ \\n MODIFY ENTITY demo\_managed\_root \\n CREATE AUTO FILL CID \\n FIELDS ( key\_field data\_field1\_root data\_field2\_root ) \\n WITH VALUE #( \\n ( key\_field = 1 \\n data\_field1\_root = \`abc\` \\n data\_field2\_root = \`def\` ) ) \\n MAPPED m \\n FAILED f \\n REPORTED r. \\n\\ \\n out->write( \`RAP create operation in SAVE phase: Violation!\` ). \\n\\ \\n\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* Classified APIs \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* \\n\\ \\n "if\_abap\_tx\_complete \\n WHEN 7. \\n\\ \\n cl\_abap\_tx=>modify( ). \\n\\ \\n oref->meth\_complete( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_COMPLETE in MODIFY phase: Violation!\` ). \\n\\ \\n WHEN 8. \\n\\ \\n cl\_abap\_tx=>save( ). \\n\\ \\n oref->meth\_complete( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_COMPLETE in SAVE phase: Violation!\` ). \\n\\ \\n WHEN 9. \\n\\ \\n oref->meth\_complete( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_COMPLETE (no transactional context set): Ok!\` ). \\n\\ \\n "if\_abap\_tx\_read \\n WHEN 10. \\n\\ \\n cl\_abap\_tx=>modify( ). \\n\\ \\n oref->meth\_read( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_READ in MODIFY phase: Ok!\` ). \\n\\ \\n WHEN 11. \\n\\ \\n cl\_abap\_tx=>save( ). \\n\\ \\n oref->meth\_read( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_READ in SAVE phase: Ok!\` ). \\n\\ \\n "if\_abap\_tx\_modify \\n WHEN 12. \\n\\ \\n cl\_abap\_tx=>modify( ). \\n\\ \\n oref->meth\_modify( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_MODIFY in MODIFY phase: Ok!\` ). \\n\\ \\n WHEN 13. \\n\\ \\n cl\_abap\_tx=>save( ). \\n\\ \\n oref->meth\_modify( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_MODIFY in SAVE phase: Violation!\` ). \\n\\ \\n "if\_abap\_tx\_save \\n WHEN 14. \\n\\ \\n cl\_abap\_tx=>modify( ). \\n\\ \\n oref->meth\_save( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_SAVE in MODIFY phase: Violation!\` ). \\n\\ \\n WHEN 15. \\n\\ \\n cl\_abap\_tx=>save( ). \\n\\ \\n oref->meth\_save( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_SAVE in SAVE phase: Ok!\` ). \\n\\ \\n "if\_abap\_tx\_functional \\n WHEN 16. \\n\\ \\n cl\_abap\_tx=>modify( ). \\n\\ \\n oref->meth\_functional( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_FUNCTIONAL in MODIFY phase: Ok!\` ). \\n\\ \\n WHEN 17. \\n\\ \\n cl\_abap\_tx=>save( ). \\n\\ \\n oref->meth\_functional( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_FUNCTIONAL in SAVE phase: Ok!\` ). \\n\\ \\n "if\_abap\_tx\_surface \\n WHEN 18. \\n\\ \\n cl\_abap\_tx=>modify( ). \\n\\ \\n oref->meth\_surface( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_SURFACE in MODIFY phase: Violation!\` ). \\n\\ \\n WHEN 19. \\n\\ \\n cl\_abap\_tx=>save( ). \\n\\ \\n oref->meth\_surface( ). \\n\\ \\n out->write( \`Calling API classified with \` && \\n \`IF\_ABAP\_TX\_SURFACE in SAVE phase: Violation!\` ). \\n\\ \\n WHEN OTHERS. \\n out->write( \`Enter one of the prededfined numbers.\` ). \\n ENDCASE. \\n\\ \\n ENDMETHOD. \\n METHOD get\_html. \\n html = \\n \`

For this example, the contract \` && \\n \`checks must not be activated.
For testing the \` && \\n \`effect of setting the transactional \` && \\n \`phase explicitly using the methods MODIFY and SAVE \` && \\n \`of the class CL\_ABAP\_TX, \` && \\n \`enter one of the following numbers (note that "Violation" \` && \\n \`can mean a runtime error.:

\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`

Number

Phase

What is executed

Expected Result

1

MODIFY

RAP create operation\` && \\n \`

Ok

2

MODIFY

ABAP SQL \` && \\n \`database modification

Violation

3

MODIFY

Commit

Violation

4

SAVE

ABAP SQL database \` && \\n \`modification

Ok

5

SAVE

Commit

Violation

6

SAVE

RAP create operation\` && \\n \`

Violation

7

MODIFY

Calling API tagged with \` && \\n \`IF\_ABAP\_TX\_COMPLETE

Violation

8

SAVE

Calling API tagged with \` && \\n \`IF\_ABAP\_TX\_COMPLETE

Violation

9

No phase set

Calling API \` && \\n \`tagged with IF\_ABAP\_TX\_COMPLETE\` && \\n \`

Ok

10

MODIFY

Calling API tagged with \` && \\n \`IF\_ABAP\_TX\_READ

Ok

11

SAVE

Calling API tagged with \` && \\n \`IF\_ABAP\_TX\_READ

Ok

12

MODIFY

Calling API tagged with \` && \\n \`IF\_ABAP\_TX\_MODIFY

Ok

13

SAVE

Calling API tagged with \` && \\n \`IF\_ABAP\_TX\_MODIFY

Violation

14

MODIFY

Calling API tagged with \` && \\n \`IF\_ABAP\_TX\_SAVE

Violation

15

SAVE

Calling API tagged with \` && \\n \`IF\_ABAP\_TX\_SAVE

Ok

16

MODIFY

Calling API tagged with \` && \\n \`IF\_ABAP\_TX\_FUNCTIONAL

Ok

17

SAVE

Calling API tagged with \` && \\n \`IF\_ABAP\_TX\_FUNCTIONAL

Ok

18

MODIFY

Calling API tagged with \` && \\n \`IF\_ABAP\_TX\_SURFACE

Violation

19

SAVE

Calling API tagged with \` && \\n \`IF\_ABAP\_TX\_SURFACE

Violation

\`. \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html abensap\_luw.html abencontrolling\_sap\_luw.html