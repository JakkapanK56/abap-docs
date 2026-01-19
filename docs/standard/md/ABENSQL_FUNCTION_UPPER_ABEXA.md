---
title: "ABENSQL_FUNCTION_UPPER_ABEXA"
description: |
  ABENSQL_FUNCTION_UPPER_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_FUNCTION_UPPER_ABEXA.htm"
abapFile: "ABENSQL_FUNCTION_UPPER_ABEXA.html"
keywords: ["select", "if", "case", "method", "class", "data", "ABENSQL", "FUNCTION", "UPPER", "ABEXA"]
---

This example demonstrates the SQL function `UPPER` in ABAP SQL and ABAP CDS.

A `SELECT` statement accesses the following CDS view entity, which uses the SQL function `UPPER`:

Another `SELECT` statement uses the SQL function `UPPER` directly to access the same data source `T100`.

Since SQL functions cannot yet be used on the left side of `LIKE` in the DDL of ABAP CDS, the view returns a helper field, which is evaluated in ABAP SQL. The results are the same. The search effected by the examples is not case-sensitive.

\* Public class definition \\nCLASS cl\_demo\_sql\_upper DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_upper IMPLEMENTATION. \\n METHOD main. \\n DATA: \\n query TYPE string VALUE \`ERROR\`, \\n rows TYPE i VALUE 100. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = query \\n )->request( CHANGING field = rows ). \\n query = \`%\` && to\_upper( query ) && \`%\`. \\n IF rows < 1 OR rows > 1000. \\n out->write( 'Enter rows between 1 and 1000' ). \\n RETURN. \\n ENDIF. \\n\\ \\n "UPPER in CDS view entity \\n SELECT arbgb, msgnr, text \\n FROM demo\_cds\_upper\_ve \\n WHERE sprsl = 'E' AND \\n upper\_text LIKE @query \\n ORDER BY arbgb, msgnr, text \\n INTO TABLE @FINAL(result1) \\n UP TO @rows ROWS. \\n\\ \\n "UPPER in ABAP SQL \\n SELECT arbgb, msgnr, text \\n FROM t100 "#EC CI\_GENBUFF \\n WHERE sprsl = 'E' AND \\n upper( text ) LIKE @query \\n ORDER BY arbgb, msgnr, text \\n INTO TABLE @FINAL(result2) \\n UP TO @rows ROWS. \\n\\ \\n ASSERT result1 = result2. \\n\\ \\n out->write( result1 ). \\n ENDMETHOD. \\nENDCLASS. @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_UPPER\_VE\\n as select from t100\\n\\{\\n key sprsl,\\n key arbgb,\\n key msgnr,\\n text,\\n upper(text) as upper\_text\\n\\}\\n \* Public class definition \\nCLASS cl\_demo\_sql\_upper DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_upper IMPLEMENTATION. \\n METHOD main. \\n DATA: \\n query TYPE string VALUE \`ERROR\`, \\n rows TYPE i VALUE 100. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = query \\n )->request( CHANGING field = rows ). \\n query = \`%\` && to\_upper( query ) && \`%\`. \\n IF rows < 1 OR rows > 1000. \\n out->write( 'Enter rows between 1 and 1000' ). \\n RETURN. \\n ENDIF. \\n\\ \\n "UPPER in CDS view entity \\n SELECT arbgb, msgnr, text \\n FROM demo\_cds\_upper\_ve \\n WHERE sprsl = 'E' AND \\n upper\_text LIKE @query \\n ORDER BY arbgb, msgnr, text \\n INTO TABLE @FINAL(result1) \\n UP TO @rows ROWS. \\n\\ \\n "UPPER in ABAP SQL \\n SELECT arbgb, msgnr, text \\n FROM t100 "#EC CI\_GENBUFF \\n WHERE sprsl = 'E' AND \\n upper( text ) LIKE @query \\n ORDER BY arbgb, msgnr, text \\n INTO TABLE @FINAL(result2) \\n UP TO @rows ROWS. \\n\\ \\n ASSERT result1 = result2. \\n\\ \\n out->write( result1 ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_dictionary.html abenddic\_builtin\_functions.html abensql\_functions.html abensql\_functions\_string.html