---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENIF_ABAP_SQL_CONNECTION_ABEXA.htm"
abapFile: "ABENIF_ABAP_SQL_CONNECTION_ABEXA.html"
keywords: ["select", "insert", "delete", "do", "if", "method", "class", "data", "ABENIF", "ABAP", "SQL", "CONNECTION", "ABEXA"]
---

The example demonstrates how an [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html) can be created and used.

The method `SERVICE` of class `CL_ABAP_SQL_CONNECTION_BUILDER` is used to create a [service connection](ABENSERVICE_CONNECTION_GLOSRY.html). The connection object is used behind the `CONNECTION` addition of DML statements, `COMMIT` and a DQL statement.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_abap\_sql\_conn\_object DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_abap\_sql\_conn\_object IMPLEMENTATION. \\n METHOD main. \\n\\ \\n out->begin\_section( 'ABAP SQL Connection Objects' \\n )->begin\_section( 'Create Connection Object' \\n )->begin\_code( \`conn\` ). \\n\\ \\n FINAL(conn) = \\n cl\_abap\_sql\_connection\_builder=>service( \\n \`R/3\*service\_conn\` )->create( ). \\n\\ \\n out->end\_code( \`conn\` \\n )->write( conn->describe( ) \\n )->next\_section( 'DML Statements' \\n )->begin\_code( \`DML\` ). \\n\\ \\n DELETE FROM scarr WHERE carrid = 'XX' \\n OPTIONS \\n CONNECTION @conn. \\n INSERT scarr \\n FROM @( VALUE #( carrid = 'XX' \\n carrname = 'Jefferson Airplane' ) ) \\n OPTIONS \\n CONNECTION @conn. \\n\\ \\n out->end\_code( \`DML\` \\n )->write( COND string( \\n WHEN conn->has\_uncommited\_changes( ) = 'X' \\n THEN 'Uncommitted changes' \\n ELSE 'No uncommited changes' ) \\n )->next\_section( 'Commit' \\n )->begin\_code( \`commit\` ). \\n\\ \\n "Both do the same \\n conn->commit( ). \\n COMMIT CONNECTION @conn. \\n\\ \\n out->end\_code( \`commit\` \\n )->write( COND string( \\n WHEN conn->has\_uncommited\_changes( ) = 'X' \\n THEN 'Uncommitted changes' \\n ELSE 'No uncommited changes' ) \\n )->next\_section( 'DQL Statement' \\n )->begin\_code( \`DQL\` ). \\n\\ \\n SELECT SINGLE \\n FROM scarr \\n FIELDS carrid, carrname \\n WHERE carrid = 'XX' \\n INTO @DATA(result) \\n OPTIONS \\n CONNECTION @conn. \\n\\ \\n out->end\_code( \`DQL\` \\n )->write( result \\n )->next\_section( 'Close Connection' \\n )->begin\_code( \`close\` ). \\n\\ \\n conn->close( ). \\n\\ \\n out->end\_code( \`close\` ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_abap\_sql\_conn\_object DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_abap\_sql\_conn\_object IMPLEMENTATION. \\n METHOD main. \\n\\ \\n out->begin\_section( 'ABAP SQL Connection Objects' \\n )->begin\_section( 'Create Connection Object' \\n )->begin\_code( \`conn\` ). \\n\\ \\n FINAL(conn) = \\n cl\_abap\_sql\_connection\_builder=>service( \\n \`R/3\*service\_conn\` )->create( ). \\n\\ \\n out->end\_code( \`conn\` \\n )->write( conn->describe( ) \\n )->next\_section( 'DML Statements' \\n )->begin\_code( \`DML\` ). \\n\\ \\n DELETE FROM scarr WHERE carrid = 'XX' \\n OPTIONS \\n CONNECTION @conn. \\n INSERT scarr \\n FROM @( VALUE #( carrid = 'XX' \\n carrname = 'Jefferson Airplane' ) ) \\n OPTIONS \\n CONNECTION @conn. \\n\\ \\n out->end\_code( \`DML\` \\n )->write( COND string( \\n WHEN conn->has\_uncommited\_changes( ) = 'X' \\n THEN 'Uncommitted changes' \\n ELSE 'No uncommited changes' ) \\n )->next\_section( 'Commit' \\n )->begin\_code( \`commit\` ). \\n\\ \\n "Both do the same \\n conn->commit( ). \\n COMMIT CONNECTION @conn. \\n\\ \\n out->end\_code( \`commit\` \\n )->write( COND string( \\n WHEN conn->has\_uncommited\_changes( ) = 'X' \\n THEN 'Uncommitted changes' \\n ELSE 'No uncommited changes' ) \\n )->next\_section( 'DQL Statement' \\n )->begin\_code( \`DQL\` ). \\n\\ \\n SELECT SINGLE \\n FROM scarr \\n FIELDS carrid, carrname \\n WHERE carrid = 'XX' \\n INTO @DATA(result) \\n OPTIONS \\n CONNECTION @conn. \\n\\ \\n out->end\_code( \`DQL\` \\n )->write( result \\n )->next\_section( 'Close Connection' \\n )->begin\_code( \`close\` ). \\n\\ \\n conn->close( ). \\n\\ \\n out->end\_code( \`close\` ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abencl\_osql.html abenif\_abap\_sql\_connection.html