---
title: "ABAPUPDATE_SHORTREF"
description: |
  ABAPUPDATE_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPUPDATE_SHORTREF.htm"
abapFile: "ABAPUPDATE_SHORTREF.html"
keywords: ["select", "update", "if", "data", "internal-table", "ABAPUPDATE", "SHORTREF"]
---

[Reference](ABAPUPDATE.html)

``UPDATE dbtab|view|(target_syntax)         [USING CLIENT clnt]\ |\ [CLIENT SPECIFIED]\         [CONNECTION con|(con_syntax)]\         \{\ \{ SET \{col1 = f\}|\{col1 = col1 + f\}|\{col1 = col1 - f\}|\{(expr_syntax1)\},                 \{col2 = f\}|\{col2 = col2 + f\}|\{col2 = col2 - f\}|\{(expr_syntax2)\},                  ...                 [WHERE [`sql_cond`](ABENSQL_COND_SHORTREF.html)]\ \}\         |\ \{ FROM wa|\{TABLE itab\}\ \}\                  [INDICATORS [NOT] SET STRUCTURE set_ind                             | (indicator_syntax)]\ \}.``

[ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement. Changes lines in a database table or in a DDIC table view.

-   [`dbtab|view|(target_syntax)`](ABAPIUMD_TARGET.html)\\
    Specifies the database table and/or view statically or dynamically.
-   [`USING CLIENT`](ABAPIUMD_CLIENT.html)\\
    Switches implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) to the client specified in `clnt`.
-   [`CLIENT SPECIFIED`](ABAPIUMD_CLIENT.html)\\
    Switches implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) to the client specified in the data source.
-   `[CONNECTION con|(con_syntax)](ABAPIUMD_CONN.html)`\\
    Makes the change on a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html).
-   [`SET ... col = f ...`](ABAPUPDATE_SET_EXPRESSION.html)\\
    Assigns the content of `f` to the column `col`.
-   [`SET ... col = col + f ...`](ABAPUPDATE_SET_EXPRESSION.html)\\
    Adds the content of `f` to the column `col`.
-   [`SET ... col = col - f ...`](ABAPUPDATE_SET_EXPRESSION.html)\\
    Subtracts the content of `f` from the column `col`.
-   [`SET ... (expr_syntax) ...`](ABAPUPDATE_SOURCE.html)\\
    Changed specified dynamically in `expr_syntax`.
-   [`WHERE sql_cond`](ABAPUPDATE_SOURCE.html)\\
    Specifies the lines to be changed using a condition `sql_cond`.
-   [`\{FROM wa\}|\{FROM TABLE itab\}`](ABAPUPDATE_SOURCE.html)\\
    Overwrites rows with a work area `wa` or with the lines of an internal table `itab`.
-   [`INDICATORS [NOT] SET STRUCTURE set_ind`](ABAPUPDATE_SET_INDICATOR.html)\\
    Allows individual fields to be selected for updating instead of updating all fields of a line.

abenabap.html abenabap\_reference.html abenabap\_shortref.html