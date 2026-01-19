---
title: "ABENCX_SQL_EXCEPTION"
description: |
  ABENCX_SQL_EXCEPTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCX_SQL_EXCEPTION.htm"
abapFile: "ABENCX_SQL_EXCEPTION.html"
keywords: ["do", "if", "case", "class", "data", "ABENCX", "SQL", "EXCEPTION"]
---

Any errors that occur when using dynamic SQL statements with ADBC raise exceptions of the class `CX_SQL_EXCEPTION`. Alongside its [exception texts](ABENEXCEPTION_TEXT_GLOSRY.html), this class has the following instance attributes, whose content indicates the cause of the error:

**Attribute** **Meaning** `DB_ERROR` *X*, if an SQL statement was not executed by DBMS. `SQL_CODE` and `SQL_MESSAGE` contain further information in this case. `DBOBJECT_EXISTS` *X*, if a database object that already exists is created. `DB_ERROR` is also *X* in this case. `DBOBJECT_NOT_EXISTS` *X*, if a database object that does not exist is accessed. `DB_ERROR` is also *X* in this case. `DUPLICATE_KEY` *X*, if a DML statement would violate a unique table key. `DB_ERROR` is also *X* in this case. `INTERNAL_ERROR` Internal error code in the DBMS. Further troubleshooting is possible by reading the log files and trace files. `INVALID_CURSOR` *X*, if an invalid or closed database cursor is used. `SQL_CODE` Database-specific error code, if `DB_ERROR` is *X*. `SQL_MESSAGE` Database-specific error message, if `DB_ERROR` is *X*. abenabap.html abenabap\_reference.html abendb\_access.html abennative\_sql.html abenadbc\_intf.html