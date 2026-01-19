---
title: "ABENIF_SQL_STATEMENT"
description: |
  ABENIF_SQL_STATEMENT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENIF_SQL_STATEMENT.htm"
abapFile: "ABENIF_SQL_STATEMENT.html"
keywords: ["if", "case", "method", "data", "ABENIF", "SQL", "STATEMENT"]
---

The `IF_SQL_STMT*` interfaces provide methods that receive and execute dynamically created SQL statements. They support regular statements (RGLR) and prepared statements (PRPD). Prepared statements permanently register the input parameters in the database management system. This speeds up frequently processed statements. However, the disadvantage is the complexity that occurs when the session is rolled or due to implicit commits. After the work process has been switched (see [implicit database commit](ABENDB_COMMIT.html)), a prepared statement can no longer be used. Therefore, regular statements are recommended. If a prepared statement is no longer needed, it should be closed using the instance method `CLOSE` so that all resources required in the database are released.

To build the statement text, methods of the `IF_SQL_STMT_BUILDER` interface must be used. The following instance methods add tokens to the statement text:

-   `COMMENT`: Specifies an SQL comment. The method adds necessary quotes itself.
-   `CREATE_PREPARED`: Specifies a prepared statement. The first keyword of the SQL statement is checked against the value. Resources are permanently registered in the database management system, which makes the statement faster. However, the registered resources must be released using one of the [closing methods](ABENIF_SQL_CONNECTION.html).
-   `CREATE_REGULAR`: Specifies a regular statement. The first keyword of the SQL statement is checked against the value.
-   `GET_PLAIN_TEXT`: Returns the text of the SQL statement.
-   `IDENTIFIER`: Specifies an identifier like the case-sensitive name of a column.
-   `KEYWORD`: Specifies an SQL keyword.
-   `LITERAL`: Specifies a value.
-   `PLACEHOLDER`: Specifies `?` as a parameter, which will be bound to an ABAP variable.
-   `SEQUENCE`: Specifies text unchanged. The tokens are added by one of the other methods.
-   `SYMBOL`: Specifies allowed symbols that are not alphanumeric and have a special meaning in SQL, like a blank. Characters like `;` are not allowed.
-   `TABLE`: Specifies the identifier for a name of the table or data source, such as a view.

-   Exactly one SQL statement can be passed to the methods of the `IF_SQL_STMT_BUILDER` interface. Passing multiple SQL statements separated by delimiters such as `;` is not possible.
-   The methods of the regular statement interfaces allow the statement passed to be executed once. The methods of the prepared statement interfaces can be used to execute a statement multiple times with different parameters.
-   Unlike in JDBC, the use of `?` placeholders in ADBC is not restricted to prepared statements. In ADBC, using prepared statements is not a prerequisite for using placeholders to prevent [SQL injections](ABENSQL_INJECTION_GLOSRY.html). Prepared statements are used only to improve performance in ADBC.
-   For all statements except DDL, the method `TABLE` must be used. `TABLE` cannot be provided by `SEQUENCE`. Tracing is limited to the first `TABLE` using the `TABLE_FOR_TRACING_ONLY` method.
-   Procedure calls must be implemented using [ABAP Managed Database Procedures](ABENAMDP.html).

abenabap.html abenabap\_reference.html abendb\_access.html abennative\_sql.html abenadbc\_intf.html