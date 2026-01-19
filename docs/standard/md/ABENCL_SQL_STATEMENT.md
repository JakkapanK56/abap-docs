---
title: "ABENCL_SQL_STATEMENT"
description: |
  ABENCL_SQL_STATEMENT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCL_SQL_STATEMENT.htm"
abapFile: "ABENCL_SQL_STATEMENT.html"
keywords: ["if", "case", "method", "class", "data", "ABENCL", "SQL", "STATEMENT"]
---

The class `CL_SQL_STATEMENT` contains instance methods that receive and execute dynamically created SQL statements.

Instances of the class `CL_SQL_STATEMENT` can be created using the statement [`CREATE OBJECT`](ABAPCREATE_OBJECT.html) or the instance operator [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html), which allow a reference to an object of the class [`CL_SQL_CONNECTION`](ABENCL_SQL_CONNECTION.html) to be passed to the constructor. If no database connection is passed, the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html) from the database interface to the [standard AS ABAP database](ABENSTANDARD_DB_GLOSRY.html) is used.

-   [ADBC - DDL and DML Statements](ABENADBC_DDL_DML.html)
-   [ADBC - DQL Statements](ABENADBC_QUERY.html)
-   [ADBC - Stored Procedures](ABENADBC_PROCEDURE.html)
-   [ADBC - All Statements](ABENADBC_EXECUTE.html)

-   Exactly one SQL statement can be passed to each method of the class `CL_SQL_STATEMENT` to be executed. Passing multiple SQL statements separated by delimiters such as `;` is not possible.
-   The class `CL_SQL_STATEMENT` allows the statement passed to be executed once. The subclass [`CL_SQL_PREPARED_STATEMENT`](ABENCL_SQL_PREPARED_STATEMENT.html) can be used to execute a statement multiple times with different parameters.
-   An object of the class `CL_SQL_STATEMENT` is often only intended to be used once, which means it is also only addressed once. In this case, the instance operator [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) with appended method call can be used to create the instance. This removes the need to declare a reference variable explicitly.
-   The methods in the class `CL_SQL_STATEMENT` should not be used to execute transaction control statements (`COMMIT`, `ROLLBACK`) because they are not detected by the database interface, which then might not execute the actions required at the end of a transaction. Only the corresponding [methods](ABENADBC_TRANSACTION.html) in the class [`CL_SQL_CONNECTION`](ABENCL_SQL_CONNECTION.html) can be used for transaction control.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abennative\_sql\_obsolete.html abenadbc.html