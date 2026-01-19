---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSELECT_INLINE_DECL_ABEXA.htm"
abapFile: "ABENSELECT_INLINE_DECL_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "internal-table", "ABENSELECT", "INLINE", "DECL", "ABEXA"]
---

This example demonstrates inline declarations in the statement `SELECT`.

The inline declarations of the first two `SELECT` statements create the same internal tables. The row type of the internal tables is a structure with the two substructures `scarr` and `spfli` that each have the columns of the two joined DDIC database tables as components. The substructures are resolved in a table comprehension in the output.

The inline declaration of the third `SELECT` statement creates an internal table with a non-nested row structure. The components of the row are determined directly using the columns specified in the `SELECT` list.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_inline\_dclrtn DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_inline\_dclrtn IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA carrier TYPE scarr-carrid VALUE 'LH'. \\n cl\_demo\_input=>new( )->request( CHANGING field = carrier ). \\n\\ \\n SELECT \* \\n FROM scarr INNER JOIN spfli ON scarr~carrid = spfli~carrid \\n WHERE scarr~carrid = @carrier \\n ORDER BY scarr~carrid \\n INTO TABLE @FINAL(result1). \\n\\ \\n SELECT scarr~\*, spfli~\* \\n FROM scarr INNER JOIN spfli ON scarr~carrid = spfli~carrid \\n WHERE scarr~carrid = @carrier \\n ORDER BY scarr~carrid \\n INTO TABLE @FINAL(result2). \\n\\ \\n ASSERT result1 = result2. \\n\\ \\n out->write( result1 ). \\n\\ \\n SELECT scarr~carrname, \\n spfli~connid, spfli~cityfrom, spfli~cityto \\n FROM scarr INNER JOIN spfli ON scarr~carrid = spfli~carrid \\n WHERE scarr~carrid = @carrier \\n ORDER BY scarr~carrid \\n INTO TABLE @FINAL(result3). \\n\\ \\n out->write( result3 ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_inline\_dclrtn DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_inline\_dclrtn IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA carrier TYPE scarr-carrid VALUE 'LH'. \\n cl\_demo\_input=>new( )->request( CHANGING field = carrier ). \\n\\ \\n SELECT \* \\n FROM scarr INNER JOIN spfli ON scarr~carrid = spfli~carrid \\n WHERE scarr~carrid = @carrier \\n ORDER BY scarr~carrid \\n INTO TABLE @FINAL(result1). \\n\\ \\n SELECT scarr~\*, spfli~\* \\n FROM scarr INNER JOIN spfli ON scarr~carrid = spfli~carrid \\n WHERE scarr~carrid = @carrier \\n ORDER BY scarr~carrid \\n INTO TABLE @FINAL(result2). \\n\\ \\n ASSERT result1 = result2. \\n\\ \\n out->write( result1 ). \\n\\ \\n SELECT scarr~carrname, \\n spfli~connid, spfli~cityfrom, spfli~cityto \\n FROM scarr INNER JOIN spfli ON scarr~carrid = spfli~carrid \\n WHERE scarr~carrid = @carrier \\n ORDER BY scarr~carrid \\n INTO TABLE @FINAL(result3). \\n\\ \\n out->write( result3 ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapinto\_clause.html abapselect\_into\_target.html