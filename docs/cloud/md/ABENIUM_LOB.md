---
title: "ABENIUM_LOB"
description: |
  ABENIUM_LOB - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENIUM_LOB.htm"
abapFile: "ABENIUM_LOB.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "catch", "method", "class", "data", "ABENIUM", "LOB"]
---

In the [`INSERT`](ABAPINSERT_DBTAB.html), [`UPDATE`](ABAPUPDATE.html), or [`MODIFY`](ABAPMODIFY_DBTAB.html) statements, [LOB handles](ABENLOB_HANDLE_GLOSRY.html) can be created as [writer streams](ABENWRITER_STREAM_GLOSRY.html) and specified as [locators](ABENLOCATOR_GLOSRY.html).

An [LOB](ABENLOB_GLOSRY.html) in a row to be inserted or changed can be supplied from an [LOB handle component](ABENLOB_HANDLE_GLOSRY.html) of a work area or an individual reference variable for an LOB handle (at `UPDATE` with `SET`). The static type of each LOB handle component must be one of the following system classes for [streaming](ABENABAP_SQL_STREAMING.html) or [locators](ABENLOCATORS.html):

The [stream type](ABENSTREAM_TYPE_GLOSRY.html) or [locator type](ABENLOCATOR_TYPE_GLOSRY.html) must match the data type of the LOBs.

Unlike in [reads](ABENSELECT_INTO_LOB_HANDLES.html), the behavior for streams does not match the behavior for locators.

If, in a changing access, an [LOB](ABENLOB_GLOSRY.html) is linked with a reference variable of the type `CL_ABAP_DB_C_WRITER` or `CL_ABAP_DB_X_WRITER`, a corresponding writer stream is usually created, and the reference variable points to the object after execution. The LOB to be changed can be processed using the methods of the writer stream. When an LOB is linked with a writer stream that is referenced by an [LOB handle component](ABENLOB_HANDLE_COMPONENT_GLOSRY.html) from the source work area, the following various platform-dependent behavior may occur:

A writer stream created in this way exists until it is explicitly closed using its method `CLOSE` from the `IF_ABAP_CLOSE_RESOURCE` interface. As long as a writer stream for an ABAP SQL statement is still open, the corresponding database operation is not completed. The state of the ABAP SQL statement is described using an object of the `CL_ABAP_SQL_STATEMENT_HANDLE` class, for which the `GET_STATEMENT_HANDLE` method returns a reference for every writer stream.

When using writer streams, an uncatchable exception is raised in the following cases:

If, in a changing access, an [LOB](ABENLOB_GLOSRY.html) is linked with a reference variable of type `CL_ABAP_DB_C_LOCATOR` or `CL_ABAP_DB_X_LOCATOR`, this variable must point to an appropriate locator, [created](ABENSELECT_INTO_LOB_HANDLES.html) in a statement `SELECT` for a LOB in a different DDIC database table or the same table. If the statement can be executed (`sy-subrc` is 0), the LOB to be changed is replaced directly in the database system using the complete LOB of the locator.

The following restrictions apply:

A LOB handle should always be closed as soon as possible using its method `CLOSE`. See also [Streaming and Locators](ABENSTREAMS_LOCATORS.html).

Components `string1` and `string2` in structure `wa` are declared as LOB handles for character-like writer streams. The statement `MODIFY` creates the writer streams. Character strings are passed to both writer streams via reference variable `stmnt`. Once the writer streams have been closed, the associated database fields `STRING1` and `STRING2` contain the chained content of the streams.

In the statement `UPDATE`, column `STRING2` is modified with a locator, which was created in a `SELECT` statement for column `STRING1` of the same CDS table entity. Afterwards, `STRING1` and `STRING2` have the same content.

-   `CL_ABAP_DB_C_WRITER` or `CL_ABAP_DB_C_LOCATOR` in the case of [CLOBs](ABENCLOB_GLOSRY.html).
-   `CL_ABAP_DB_X_WRITER` or `CL_ABAP_DB_X_LOCATOR` in the case of [BLOBs](ABENBLOB_GLOSRY.html).

-   On some database systems (MaxDB, Oracle), the components of the work area that are not LOB handle components are written directly to the database when executing the statement. If the rows cannot be inserted or changed, `sy-subrc` and `sy-dbcnt` respectively are set immediately and no writer stream is created for the LOB handle components. If the rows can be inserted or changed, writer streams are created and their content is passed to the database when closing the last writer stream of the ABAP SQL statement at the latest.
-   On other database systems, the components of the work area that are not LOB handle components are not written directly to the database when executing the statement. Instead, writer streams are always created for the LOB handle components. The content of the remaining components is also delayed, that is, it is passed when closing the last writer stream of the ABAP SQL statement at the latest. Between executing the statement and actually writing the remaining components, the status is undefined since it is not yet determined whether the operation can be executed at all. In this case, `sy-subrc` is set to the value 2 and `sy-dbcnt` is set to -1 after the execution of the statement. Before a writer stream is closed, a reference to an object from the class `CL_ABAP_SQL_CHANGING_STMNT`, a subclass of `CL_ABAP_SQL_STATEMENT_HANDLE`, from the interface `IF_ABAP_DB_WRITER`, can be obtained using the method `GET_STATEMENT_HANDLE`. The `GET_STATE` method provides information about the status of the ABAP SQL statement and the `GET_DB_COUNT` method returns the number of inserted or changed rows after the last writer stream of the ABAP SQL statement was closed. The methods of the abstract superclass can be used to check the status of the ABAP SQL statement and all streams that are still open can be closed. If the ABAP SQL statement is not closed by the closing of the last writer stream, `GET_DB_COUNT` also returns the value -1. If the operation cannot be executed, for example, due to duplicate key entries, the exception `CX_STREAM_IO_EXCEPTION` or `CX_CLOSE_RESOURCE_ERROR` is raised when the data is passed to the database, depending on exactly when the data is passed.

-   If a writer stream is still open when closing a [database LUW](ABENDATABASE_LUW_GLOSRY.html) using a [database commit](ABENDATABASE_COMMIT_GLOSRY.html).
-   When accessing a writer stream that is already closed.

-   Exactly when the data of a writer stream is passed to the database is not defined. The data is passed at the latest when the last writer stream is closed but can also occur during writing in the stream, for example, because a buffer is no longer sufficient.
-   A writer stream should always be closed explicitly and as soon as possible using its method `CLOSE`. See also [Streaming and Locators](ABENSTREAMS_LOCATORS.html).

-   A maximum of 16 data streams can be opened for an ABAP SQL statement.
-   In a [database LUW](ABENDATABASE_LUW_GLOSRY.html) there can be a maximum of 16 ABAP SQL statements whose data streams are open at the same time.
-   A maximum of 1000 LOB handles can be open in a [database LUW](ABENDATABASE_LUW_GLOSRY.html).

-   [Locator, Copy Column](ABENDB_COPY_ABEXA.html)

FINAL(abcde) = \`abcdefghijklmnopqrstuvwxyz\`. \\nDATA wa TYPE demo\_expressions WRITER FOR COLUMNS string1 string2. \\n\\ \\nwa = VALUE #( id = 'X' ). \\n\\ \\nMODIFY demo\_expressions FROM @wa. \\n\\ \\nDATA(stmnt) = wa-string1->get\_statement\_handle( ). \\nDO 10 TIMES. \\n wa-string1->write( CONV #( sy-index ) ). \\nENDDO. \\nwa-string1->close( ). \\n\\ \\nstmnt = wa-string2->get\_statement\_handle( ). \\n\\ \\nDO 26 TIMES. \\n wa-string2->write( substring( val = abcde \\n off = sy-index - 1 \\n len = 1 ) ). \\nENDDO. \\nwa-string2->close( ). \\n\\ \\nSELECT SINGLE string1, string2 \\n FROM demo\_expressions \\n WHERE id = 'X' \\n INTO @FINAL(result). \\ncl\_demo\_output=>display( result ). FINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'. \\n\\ \\nDELETE FROM demo\_cds\_expressions. \\nINSERT demo\_cds\_expressions FROM @( VALUE #( id = 'X' string1 = abcde ) \\n). \\n\\ \\nDATA locator TYPE REF TO cl\_abap\_db\_c\_locator. \\n\\ \\nSELECT SINGLE string1 \\n FROM demo\_cds\_expressions \\n WHERE id = 'X' \\n INTO @locator. \\n\\ \\nUPDATE demo\_cds\_expressions SET string2 = @locator WHERE id = 'X'. \\n\\ \\nSELECT SINGLE string1, string2 \\n FROM demo\_cds\_expressions \\n WHERE id = 'X' \\n INTO @FINAL(result). \\n\\ \\ncl\_demo\_output=>display( result ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_writing.html