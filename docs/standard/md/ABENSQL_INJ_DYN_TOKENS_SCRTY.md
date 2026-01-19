---
title: "ABENSQL_INJ_DYN_TOKENS_SCRTY"
description: |
  ABENSQL_INJ_DYN_TOKENS_SCRTY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_INJ_DYN_TOKENS_SCRTY.htm"
abapFile: "ABENSQL_INJ_DYN_TOKENS_SCRTY.html"
keywords: ["select", "update", "do", "if", "try", "catch", "method", "class", "data", "ABENSQL", "INJ", "DYN", "TOKENS", "SCRTY"]
---

The [ABAP SQL](ABENABAP_SQL_GLOSRY.html) syntax allows almost every clause of an ABAP SQL statement to be specified dynamically as the content of a data object specified in parentheses. If all or part of the content of one of these data objects originates from outside of the program, there is a risk of one of the following SQL injections:

In a dynamic token, it is more secure to specify the name of an ABAP data object as an operand, instead of entering a value as a literal.

The first dynamic `WHERE` condition is insecure against an SQL injection, if `input` is an external input, which is not checked or escaped beforehand. This is not necessary for the second dynamic `WHERE` condition.

If dynamically specified database tables [`source_syntax`](ABAPFROM_CLAUSE.html) for the statement [`SELECT`](ABAPSELECT.html) or `target_syntax` for [writes](ABENABAP_SQL_WRITING.html) originate in full or in part from outside the program, users could potentially access databases for which they usually do not have authorization. If the use of external input in dynamically specified database tables is unavoidable, the input must be properly checked. For example, the class `CL_ABAP_DYN_PRG` can be used to make a comparison with a include list.

In the following program section, the method `CHECK_TABLE_NAME_STR` only allows access to tables of the flight data model. Input from other or nonexistent database tables are rejected. Access to oversized database tables is also not allowed, to avoid putting too much strain on system performance.

If the dynamically specified table columns `column_syntax` in the [`SELECT` list](ABAPSELECT_LIST.html) of the statement [`SELECT`](ABAPSELECT.html) originate fully or in part from outside the program, users could potentially access table columns for which they usually do not have authorization. Users could also rename columns without permission or use aggregate functions to perform unauthorized calculations. If the use of external input in a dynamically specified table columns is unavoidable, the input must be properly checked. For example, the class `CL_ABAP_DYN_PRG` can be used to make a comparison with an include list.

When specifying columns after [`GROUP BY`](ABAPGROUPBY_CLAUSE.html), the same security advice applies as to columns specified dynamically directly after `SELECT`.

See the example in [`column _syntax`](ABAPSELECT_LIST.html). Here only columns from an include list are allowed to be read.

If a dynamic `WHERE` condition [`cond_syntax`](ABENWHERE_LOGEXP_DYNAMIC.html) originates completely or partially from outside the program, then users could potentially access data for which they usually do not have authorization. If the use of external input in a dynamic `WHERE` condition cannot be avoided, the input must be properly checked and usually escaped as well. To do this, you can sue the methods of class `CL_ABAP_DYN_PRG`.

When dynamically specifying a [`HAVING`](ABAPHAVING_CLAUSE.html) condition, the same security advice applies as for the dynamic `WHERE` condition.

In the following program section, a potential SQL injection is prevented by using the method `QUOTE` of the class `CL_ABAP_DYN_PRG`, which adds quotation marks at the beginning and end. If this method is not used, and if *x' OR name <> '* is entered, for example, all the data in the `SCUSTOM` table would be displayed.

More examples under [dynamic `WHERE` condition](ABENWHERE_LOGEXP_DYNAMIC.html).

The dynamic forms of statements [`WITH`](ABAPWITH.html) and [`OPEN CURSOR`](ABAPOPEN_CURSOR.html) enable the specification of all of the above clauses within one dynamic token. If all of part of the dynamic token originates from outside of the program, there is a risk of an SQL injection.

To prevent SQL Injections, make sure that the `SELECT` statement within the dynamic token contains as few parts as possible that originate from outside of the program. If the statement does contain parts from outside the program, the content of these parts must be checked thoroughly using the `CL_ABAP_DYN_PRG` class as described for the individual dynamic tokens above.

If a dynamic set expression [`expr_syntax`](ABAPUPDATE_SET_EXPRESSION.html) for the statement [`UPDATE`](ABAPUPDATE.html) originates completely or partially from outside the program, then users could potentially change data for which they usually do not have authorization. If the use of external input in a dynamic set expression cannot be avoided, the input must be properly checked and usually escaped as well. To do this, you can sue the methods of class `CL_ABAP_DYN_PRG`.

In the following program section, a potential SQL injection is prevented by using the method `QUOTE` of the class `CL_ABAP_DYN_PRG`, which adds quotation marks at the beginning and end. If this method is not used, and if *...' discount = '90*, for example, is entered in one of the input fields, the discount for the relevant customer would be set to 90.

DATA(sql\_cond1) = \`CARRID = '\` && input && \`'\`. \\nSELECT SINGLE \* FROM scarr WHERE (sql\_cond1) INTO @wa. \\n\\ \\nDATA(sql\_cond2) = \`CARRID = @input\`. \\nSELECT SINGLE \* FROM scarr WHERE (sql\_cond2) INTO @wa. DATA dbtab TYPE string. \\ncl\_demo\_input=>request( CHANGING field = dbtab ). \\n\\ \\nTRY. \\n dbtab = \\n cl\_abap\_dyn\_prg=>check\_table\_name\_str( \\n val = to\_upper( dbtab ) \\n packages = 'SAPBC\_DATAMODEL' ). \\n CATCH cx\_abap\_not\_a\_table cx\_abap\_not\_in\_package. \\n cl\_demo\_output=>display( 'Wrong input' ). \\n RETURN. \\nENDTRY. \\n\\ \\nDATA dref TYPE REF TO data. \\nCREATE DATA dref TYPE STANDARD TABLE OF (dbtab) \\n WITH EMPTY KEY. \\n\\ \\nDATA lines TYPE i. \\nSELECT COUNT(\*) \\n FROM (dbtab) \\n INTO (@lines). \\nIF lines > 1000. \\n cl\_demo\_output=>display( 'Table too large' ). \\n RETURN. \\nENDIF. \\n\\ \\nSELECT \* \\n FROM (dbtab) \\n INTO TABLE @dref->\*. \\ncl\_demo\_output=>display( dref->\* ). DATA name TYPE string. \\nDATA customers TYPE TABLE OF scustom WITH EMPTY KEY. \\n\\ \\ncl\_demo\_input=>request( CHANGING field = name ). \\n\\ \\nFINAL(cond) = \`country = 'DE' AND name = \` && \\n cl\_abap\_dyn\_prg=>quote( CONV scustom-name( name ) ). \\n\\ \\nTRY. \\n SELECT \* FROM scustom \\n WHERE (cond) \\n INTO TABLE @customers. \\n cl\_demo\_output=>display( customers ). \\n CATCH cx\_sy\_dynamic\_osql\_syntax. \\n cl\_demo\_output=>display( 'Wrong input' ). \\nENDTRY. DATA in TYPE REF TO if\_demo\_input. \\n\\ \\nDATA customer TYPE scustom. \\n\\ \\nDATA: id TYPE scustom-id, \\n name TYPE string, \\n street TYPE string, \\n city TYPE string, \\n postcode TYPE string. \\n\\ \\nid = '00000001'. \\nSELECT SINGLE \* \\n FROM scustom \\n WHERE id = @id \\n INTO @customer. \\n\\ \\nname = customer-name. \\nstreet = customer-street. \\ncity = customer-city. \\npostcode = customer-postcode. \\n\\ \\nin = cl\_demo\_input=>new( ). \\nin->add\_field( CHANGING field = name \\n )->add\_field( CHANGING field = street \\n )->add\_field( CHANGING field = city \\n )->add\_field( CHANGING field = postcode \\n )->request( ). \\n\\ \\nFINAL(set\_expr) = \\n COND string( WHEN name IS NOT INITIAL \\n THEN \` NAME = \` && \\n cl\_abap\_dyn\_prg=>quote( name ) ) && \\n COND string( WHEN street IS NOT INITIAL \\n THEN \` STREET = \` && \\n cl\_abap\_dyn\_prg=>quote( street ) ) && \\n COND string( WHEN city IS NOT INITIAL \\n THEN \` CITY = \` && \\n cl\_abap\_dyn\_prg=>quote( city ) ) && \\n COND string( WHEN postcode IS NOT INITIAL \\n THEN \` POSTCODE = \` && \\n cl\_abap\_dyn\_prg=>quote( postcode ) ). \\n\\ \\nTRY. \\n UPDATE scustom SET (set\_expr) WHERE id = @id. \\n CATCH cx\_sy\_dynamic\_osql\_syntax. \\n cl\_demo\_output=>display( 'Wrong input' ). \\nENDTRY. abenabap.html abenabap\_reference.html abenabap\_security.html abendynamic\_programming\_scrty.html abensql\_injections\_scrty.html