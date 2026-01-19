---
title: "ABENCDS_ST_ABEXA"
description: |
  ABENCDS_ST_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_ST_ABEXA.htm"
abapFile: "ABENCDS_ST_ABEXA.html"
keywords: ["method", "class", "data", "types", "ABENCDS", "ABEXA"]
---

This example demonstrates how to use CDS simple types for declaring data objects in an ABAP class.

The following CDS simple types are used:

@EndUserText.heading: 'First name' \\ndefine type demo\_bt\_first\_name: abap.char( 30 );

@EndUserText.heading: 'Last name' \\ndefine type DEMO\_BT\_LAST\_NAME: abap.char( 30 );

@EndUserText.heading: 'Assets' \\ndefine type demo\_bt\_assets: abap.dec( 10,2 );

@EndUserText.heading: 'Liabilities' \\ndefine type DEMO\_BT\_LIABILITIES: abap.dec( 10,2 );

In this example, CDS simple types are used to type variables in an ABAP class.

-   First name

-   Last name

-   Assets

-   Liabilities

-   First, variables are declared with reference to CDS simple types.
-   Then, actual parameters are requested.
-   A calculation is performed, i.e. a customer's liabilities are subtracted from their assets.
-   A screen output is generated.

\* Public class definition \\nCLASS cl\_demo\_simple\_type\_exec DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n DATA: result TYPE demo\_bt\_assets, \\n fname TYPE demo\_bt\_first\_name VALUE 'Lisa', \\n lname TYPE demo\_bt\_last\_name VALUE 'Mustermann', \\n activ TYPE demo\_bt\_assets VALUE '27.5', \\n liabs TYPE demo\_bt\_liabilities VALUE '33'. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_simple\_type\_exec IMPLEMENTATION. \\n METHOD main. \\n\\ \\n "Request input parameters \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = fname \\n )->add\_line( \\n )->add\_field( CHANGING field = lname \\n )->add\_line( \\n )->add\_field( CHANGING field = activ \\n )->add\_line( \\n )->add\_field( CHANGING field = liabs \\n )->request( ). \\n\\ \\n "Perform calculation \\n result = activ - liabs. \\n\\ \\n "Generate screen output \\n out->write( |Client:| && | | && fname && | | && lname ). \\n out->write( |Finance:| && | | && activ && | | && |-| && \\n | | && liabs && | | && |=| && | | && result ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_simple\_type\_exec DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n DATA: result TYPE demo\_bt\_assets, \\n fname TYPE demo\_bt\_first\_name VALUE 'Lisa', \\n lname TYPE demo\_bt\_last\_name VALUE 'Mustermann', \\n activ TYPE demo\_bt\_assets VALUE '27.5', \\n liabs TYPE demo\_bt\_liabilities VALUE '33'. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_simple\_type\_exec IMPLEMENTATION. \\n METHOD main. \\n\\ \\n "Request input parameters \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = fname \\n )->add\_line( \\n )->add\_field( CHANGING field = lname \\n )->add\_line( \\n )->add\_field( CHANGING field = activ \\n )->add\_line( \\n )->add\_field( CHANGING field = liabs \\n )->request( ). \\n\\ \\n "Perform calculation \\n result = activ - liabs. \\n\\ \\n "Generate screen output \\n out->write( |Client:| && | | && fname && | | && lname ). \\n out->write( |Finance:| && | | && activ && | | && |-| && \\n | | && liabs && | | && |=| && | | && result ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abencds.html abencds\_tdl.html abencds\_types.html abencds\_define\_type.html abencds\_simple\_types.html abencds\_define\_simple\_type.html