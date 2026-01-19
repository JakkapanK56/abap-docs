---
title: "ABAPIUMD_TARGET"
description: |
  ABAPIUMD_TARGET - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPIUMD_TARGET.htm"
abapFile: "ABAPIUMD_TARGET.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "try", "catch", "class", "data", "internal-table", "ABAPIUMD", "TARGET"]
---

``... writable_obj | (target_syntax) [[`client_handling`](ABAPIUMD_CLIENT.html)] ...``

[1. `... writable_obj`](#ABAP_ALTERNATIVE_1@2@)

[2. `... (target_syntax)`](#ABAP_ALTERNATIVE_2@2@)

In the modifying ABAP SQL statements [`INSERT`](ABAPINSERT_DBTAB.html), [`UPDATE`](ABAPUPDATE.html), [`MODIFY`](ABAPMODIFY_DBTAB.html), and [`DELETE`](ABAPDELETE_DBTAB.html), these elements specify statically or dynamically which [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) is accessed. Optional additions [`client_handling`](ABAPIUMD_CLIENT.html) control [client handling](ABENCLIENT_HANDLING_GLOSRY.html).

Write access to DDIC database tables or DDIC table views with [replacement objects](ABENDDIC_REPLACEMENT_OBJECTS.html) is still performed on the DDIC database table or the DDIC view and produce a syntax warning.

`writable_obj` can be a [CDS table entity](ABENCDS_TABLE_ENTITY_GLOSRY.html), a [writable CDS view entity](ABENWRITABLE_V2_GLOSRY.html), a DDIC database table defined in the ABAP Dictionary or a [DDIC table view](ABENTABLE_VIEW_GLOSRY.html).

Only DDIC table views that refer to a single DDIC database table and whose status in the ABAP Dictionary allows changes can be specified. No [DDIC external views](ABENEXTERNAL_VIEW_GLOSRY.html) can be specified.

The [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) must be specified using the exact name defined for it. More specifically, no name for the [database schema](ABENDATABASE_SCHEMA_GLOSRY.html) can be prefixed. An ABAP SQL statement always accesses the database schema assigned to the current [database user name](ABENDATABASE_USER_NAME_GLOSRY.html). In cases where the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html) or a [service connection](ABENSERVICE_CONNECTION_GLOSRY.html) is used, this is the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html). In cases where a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) is used, this is the database schema assigned to the [database user](ABENDATABASE_USER_GLOSRY.html) defined in the secondary connection. Here, each access requires the database table or view to exist under this exact name in the ABAP Dictionary of the current AS ABAP, regardless of the connection.

Static specification of a CDS table entity in different writing ABAP SQL statements.

Instead of specifying an object statically, a parenthesized data object `target_syntax` can be specified that must contain the name of the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) when the statement is executed. A character-like data object or a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) with a character-like row type can be specified for the data object `target_syntax`. The syntax in `target_syntax` is not case-sensitive. Invalid syntax raises a catchable exception from the class `CX_SY_DYNAMIC_OSQL_ERROR`.

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class `CL_ABAP_DYN_PRG` or the built-in function [`escape`](ABENESCAPE_FUNCTIONS.html).

When specified dynamically, ABAP SQL statements can contain the comment characters [`*`](ABENCOMMENT.html) and [`"`](ABENCOMMENT.html) as follows:

Specification of a DDIC database table in a `DELETE` statement to delete all rows of the [current client](ABENCURRENT_CLIENT_GLOSRY.html) dynamically. A check is made to verify whether the object entered is in a particular package and any exceptions are handled.

-   In a dynamic token specified as a character-like data object, all content is ignored from the first comment character `"`.
-   In a dynamic token specified as an internal table, all rows are ignored that start with the comment character `*`. In the row, all content is ignored from the first comment character `"`.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_cds\_expressions. \\n\\ \\nINSERT demo\_cds\_expressions FROM TABLE @( VALUE #( \\n ( id = 'X' num1 = 1 num2 = 10 ) \\n ( id = 'Y' num1 = 2 num2 = 20 ) \\n ( id = 'Z' num1 = 3 num2 = 30 ) ) ). \\n\\ \\nUPDATE demo\_cds\_expressions \\n SET num2 = num2 + demo\_cds\_expressions~num1 \\n WHERE id = 'X'. \\n\\ \\nMODIFY demo\_cds\_expressions FROM @( VALUE #( \\n id = 'Y' num1 = 20 num2 = 200 ) ). \\n\\ \\nDELETE FROM demo\_cds\_expressions WHERE id = 'Z'. \\n\\ \\nSELECT id, num1, num2 \\n FROM demo\_cds\_expressions \\n INTO TABLE @FINAL(itab). \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(dbtab) = \`demo\_update\`. \\ncl\_demo\_input=>request( CHANGING field = dbtab ). \\nTRY. \\n dbtab = \\n cl\_abap\_dyn\_prg=>check\_table\_name\_str( \\n val = to\_upper( dbtab ) \\n packages = 'SABAPDEMOS' ). \\n CATCH cx\_abap\_not\_a\_table cx\_abap\_not\_in\_package. \\n out->write( 'Object must be in package SABAPDEMOS' \\n )->display( ). \\n RETURN. \\nENDTRY. \\n\\ \\nTRY. \\n DELETE FROM (dbtab). \\n out->write( |Deleted \\{ sy-dbcnt \\} lines| ). \\n CATCH cx\_sy\_dynamic\_osql\_semantics. \\n out->write( 'Deletion failed' ). \\nENDTRY. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_writing.html