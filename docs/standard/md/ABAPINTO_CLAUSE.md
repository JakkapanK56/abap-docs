---
title: "ABAPINTO_CLAUSE"
description: |
  ABAPINTO_CLAUSE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINTO_CLAUSE.htm"
abapFile: "ABAPINTO_CLAUSE.html"
keywords: ["select", "insert", "loop", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "field-symbol", "ABAPINTO", "CLAUSE"]
---

[Short Reference](ABAPSELECT_SHORTREF.html)

``... \{ INTO          ([`elem1`](ABAPSELECT_INTO_TARGET.html), [`elem2`](ABAPSELECT_INTO_TARGET.html),  ...) \}\    |\ \{ INTO          [CORRESPONDING FIELDS OF]\ [`wa`](ABAPSELECT_INTO_TARGET.html)\ [[`indicators`](ABAPSELECT_INDICATORS.html)]\ \}\    |\ \{ INTO|APPENDING          [CORRESPONDING FIELDS OF] TABLE [`itab`](ABAPSELECT_INTO_TARGET.html)\ [[`indicators`](ABAPSELECT_INDICATORS.html)]\                                               [PACKAGE SIZE n]\ \}\      [\ [`extended_result`](ABAPSELECT_EXTENDED_RESULT.html)\ ]\      [\ [`creating`](ABAPSELECT_CREATING.html)\ ] ... .``

[1. `... INTO (elem1, elem2, ...)`](#ABAP_ALTERNATIVE_1@2@)

[2. `... INTO [CORRESPONDING FIELDS OF] wa ...`](#ABAP_ALTERNATIVE_2@2@)

[3. `... INTO|APPENDING [CORRESPONDING FIELDS OF] TABLE itab ...`](#ABAP_ALTERNATIVE_3@2@)

The additions `INTO` or `APPENDING` construct the `INTO` clause of a [`SELECT`](ABAPSELECT.html), [`WITH`](ABAPWITH.html), or [`FETCH`](ABAPFETCH.html) statement. They define which ABAP data objects are assigned the data of the result set of a query and how this assignment is made. The following options are available:

The data objects [`elem1`](ABAPSELECT_INTO_TARGET.html), [`elem2`](ABAPSELECT_INTO_TARGET.html), ...., [`wa`](ABAPSELECT_INTO_TARGET.html), and [`itab`](ABAPSELECT_INTO_TARGET.html) can be specified as existing [host variables](ABENABAP_SQL_HOST_VARIABLES.html) or declared inline using [`@DATA`](ABAPSELECT_INTO_TARGET.html) or [`@FINAL`](ABAPSELECT_INTO_TARGET.html). An addition [`NEW`](ABAPSELECT_INTO_TARGET.html) makes it possible to create target areas implicitly as [anonymous data objects](ABENANONYMOUS_DATA_OBJECT_GLOSRY.html).

The additions have the following meaning:

These additions can all be used together with the following exceptions:

If the target area is specified using field symbols or reference variables, and a `SELECT` loop is closed using [`ENDSELECT`](ABAPENDSELECT.html), the data object referenced by a field symbol or reference variable is identified exactly once when the loop is entered. This data object is used as a target area in each loop pass. Any modifications to the assignment of a field symbol or reference variable within the loop are ignored.

The `INTO` clause must be the final clause of a [main query](ABENMAINQUERY_GLOSRY.html) and the additions [`UP TO`](ABAPSELECT_UP_TO_OFFSET.html), [`OFFSET`](ABAPSELECT_UP_TO_OFFSET.html), and [`abap_options`](ABAPSELECT_OPTIONS.html) must be placed after the `INTO` clause.

**Note** The *INTO* clause does not affect the result set defined by other clauses. Any optimizations do not change the scope of the specified result set.

Specifies a parenthesized and comma-separated list of elementary data objects [`elem1`](ABAPSELECT_INTO_TARGET.html), [`elem2`](ABAPSELECT_INTO_TARGET.html), ... as target areas of the `INTO` clause. This specification is only possible if the columns of the result set are defined using one or more explicitly specified columns [`col_spec`](ABAPSELECT_CLAUSE_COL_SPEC.html) in the [`SELECT` list](ABAPSELECT_LIST.html). Each of the data objects [`elem1`](ABAPSELECT_INTO_TARGET.html), [`elem2`](ABAPSELECT_INTO_TARGET.html), ... can be specified as existing [host variables](ABENABAP_SQL_HOST_VARIABLES.html) or declared inline using [`@DATA`](ABAPSELECT_INTO_TARGET.html) or [`@FINAL`](ABAPSELECT_INTO_TARGET.html). The addition [`NEW`](ABAPSELECT_INTO_TARGET.html) allows the creation of anonymous data objects.

The comma-separated list must have the same number of elements as columns in the result set. The content of the columns in the result set is assigned to the data objects specified in the list from left to right in accordance with the order specified after `SELECT`. [Assignment rules](ABENSELECT_INTO_CONVERSION.html) apply to the individual assignments. If an [LOB](ABENLOB_GLOSRY.html) is assigned to a reference variable for [LOB handles](ABENLOB_HANDLE_GLOSRY.html), an [LOB handle is created](ABENSELECT_INTO_LOB_HANDLES.html). If an [offset/length is specified](ABENOFFSET_LENGTH.html) to access a data object, `+off` must not be omitted. If the result set is empty, the data objects remain unchanged. If a catchable exception is raised when the data objects are written to, their content is undefined when the exception is handled.

If the result set consists of one row, the columns of this row are assigned to the data objects. If the result set has multiple rows, the statements [`SELECT`](ABAPSELECT.html) and [`WITH`](ABAPWITH.html) are used to open a `SELECT` loop that itself must be closed using [`ENDSELECT`](ABAPENDSELECT.html) or [`ENDWITH`](ABAPENDWITH.html). A `SELECT` loop assigns the columns of the result set to the data objects row by row and evaluates them. If used in the statement [`FETCH`](ABAPFETCH.html), the columns of the row are extracted at the current cursor position.

Reading of the three columns of a result set to three elementary data objects. The first data object `carrid` is a previously declared host variable. The second data object `carrname` is a host variable declared inline. The third data object is an anonymous data object created using [`NEW`](ABAPSELECT_INTO_TARGET.html) and to which a data reference variable `dref` declared inline points.

Reading of the four columns of a result set into four individually specified components of a structure. Unlike when writing to a work area using `CORRESPONDING FIELDS` (see below), the runtime framework does not compare names here.

Specifies a single work area [`wa`](ABAPSELECT_INTO_TARGET.html) as a target area of the `INTO` clause. This can be specified for all result sets. The data object [`wa`](ABAPSELECT_INTO_TARGET.html) can be specified as an existing [host variable](ABENABAP_SQL_HOST_VARIABLES.html) or declared inline using [`@DATA`](ABAPSELECT_INTO_TARGET.html) or [`@FINAL`](ABAPSELECT_INTO_TARGET.html). The addition [`NEW`](ABAPSELECT_INTO_TARGET.html) allows the creation of an anonymous data object.

If the result set consists of a single row, this row is assigned to the work area `wa`. If the result set has multiple rows, the statements [`SELECT`](ABAPSELECT.html) and [`WITH`](ABAPWITH.html) are used to open a `SELECT` loop that itself must be closed using [`ENDSELECT`](ABAPENDSELECT.html) or [`ENDWITH`](ABAPENDWITH.html). A `SELECT` loop assigns the result set to the work area `wa` row by row and evaluates it. After `ENDSELECT` or `ENDWITH`, the work area `wa` contains the row that was assigned last. If used in the [`FETCH`](ABAPFETCH.html) statement, a row is extracted at the current cursor position. If the result is empty, the work area remains unchanged. If a catchable exception is raised when the work area is filled, its content is undefined when the exception is handled.

If the optional addition `CORRESPONDING FIELDS OF` is specified, `wa` must be a [structure](ABENSTRUCTURE_GLOSRY.html). This addition specifies that only the content of columns that have identically named components in `wa` is assigned to them. If the addition `CORRESPONDING FIELDS OF` is not specified, `wa` must meet the prerequisites described under [Work Areas in Statements](ABENABAP_SQL_WA.html). The rows of the result set are assigned as follows, based on the definition of the result set in the [`SELECT` list](ABAPSELECT_LIST.html):

[Assignment rules](ABENSELECT_INTO_CONVERSION.html) apply to the individual assignments. If an [LOB](ABENLOB_GLOSRY.html) of a reference variable for [LOB handles](ABENLOB_HANDLE_GLOSRY.html) is assigned, an [LOB handle is created](ABENSELECT_INTO_LOB_HANDLES.html). If an [offset/length is specified](ABENOFFSET_LENGTH.html) to access a substring of `wa`, `+off` must not be omitted.

If `CORRESPONDING FIELDS` is used, the columns of the result set defined in the [`SELECT` list](ABAPSELECT_LIST.html) must match the components of the target area on a certain level. Among other things, there must be at least one name match or there must be an identically named component in the target area for each explicitly specified column.

If `CORRESPONDING FIELDS` is used, an optimization takes place that removes columns that are not needed for the complete query from the result set: If one or more names match all the columns for which there are no name match and that are not required by other clauses of the ABAP SQL statement are not included in the result set. This is also true for `*` in the [`SELECT` list](ABAPSELECT_LIST.html). If there are no name matches, none of the columns are removed from the result set.

**Note** The addition *CORRESPONDING FIELDS* does not violate the rule that an *INTO* clause does not affect the result set defined by other clauses.

Reading of all columns of a row of a result set into structured work areas. In the first `SELECT` statement, `wa` is a previously declared host variable. In the second `SELECT` statement, `wa_inl` is a host variable declared inline. In the third `SELECT` statement, the work area is created as an anonymous data object using [`NEW`](ABAPSELECT_INTO_TARGET.html). This object is pointed to using a data reference variable `dref` declared inline.

Reading of the four columns of a result set into four respective components of the same name in a work area in a different order.

[`... PACKAGE SIZE n`](#ABAP_ONE_ADD@1@)

Specifies an internal table [`itab`](ABAPSELECT_INTO_TARGET.html) as a target area of the `INTO` clause. This can be specified for all result sets. The data object [`itab`](ABAPSELECT_INTO_TARGET.html) can be specified as an existing [host variable](ABENABAP_SQL_HOST_VARIABLES.html) or declared inline using [`@DATA`](ABAPSELECT_INTO_TARGET.html) or [`@FINAL`](ABAPSELECT_INTO_TARGET.html). The addition [`NEW`](ABAPSELECT_INTO_TARGET.html) makes it possible to create an anonymous data object.

An internal table can only be specified after `INTO TABLE` or after `APPENDING TABLE` if the result set has multiple rows. The internal table can have any [table category](ABENTABLE_CATEGORY_GLOSRY.html). Its row type must meet the same [prerequisites](ABENABAP_SQL_WA.html) as a work area `wa`.

The result set with multiple rows is inserted into the internal table `itab` row-by-row in accordance with the rules of [`INSERT`](ABAPINSERT_ITAB.html). A sorting process is executed in the case of a [sorted table](ABENSORTED_TABLE_GLOSRY.html).

If there is a conflict with an existing unique table key, an uncatchable exception is raised like in the case of the statement [`INSERT LINES OF`](ABAPINSERT_ITAB_LINESPEC.html).

Before any assignment of a row of the result set, an initial row of the internal table `itab` is created and the row of the result set is assigned to this row. When assigning a row of the result set to a row of the internal table with or without `CORRESPONDING FIELDS`, the same rules apply as when assigning to an individual work area `wa` (see above) with the exception that when inserting into internal tables, [LOB handles](ABENLOB_HANDLE_GLOSRY.html) can be [created](ABENSELECT_INTO_LOB_HANDLES.html) as [locators](ABENLOCATOR_GLOSRY.html) but not as [reader streams](ABENREADER_STREAM_GLOSRY.html).

If the addition `PACKAGE SIZE` is not specified, all rows of the result set are inserted into the internal table `itab` and the statements `ENDSELECT` or `ENDWITH` statement must not be specified after `SELECT` or `WITH`.

If the result set is empty, the internal table is initialized when `INTO` is used, and remains unchanged when `APPENDING` is used. If a catchable exception is raised when the internal table is filled, its content is undefined when the exception is handled.

Reading of all columns of all rows of a result set into structured internal tables. In the first `SELECT` statement, `itab` is a previously declared host variable. In the second `SELECT` statement, `itab_inl` is a host variable declared inline. In the third `SELECT` statement, the internal table is created as an anonymous data object using [`NEW`](ABAPSELECT_INTO_TARGET.html). This object is pointed to using a data reference variable `dref` declared inline.

Reading of the four columns of a result set into four respective components of the same name in an internal table in a different order.

The following example for `APPENDING TABLE` creates the same internal table as the example for [`UNION`](ABAPUNION.html).

If the addition `PACKAGE SIZE` is specified after `INTO|APPENDING TABLE`, the rows of the result set are inserted into the internal table `itab` in packages of `n` rows. In the case of the statements [`SELECT`](ABAPSELECT.html) and [`WITH`](ABAPWITH.html), a `SELECT` loop is opened that itself must be closed using [`ENDSELECT`](ABAPENDSELECT.html) or [`ENDWITH`](ABAPENDWITH.html). `n` expects a [host variable](ABENABAP_SQL_HOST_VARIABLES.html), a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html), or a [literal](ABENABAP_SQL_LITERALS.html) of type `i` that contains the number of rows. If `n` is an untyped literal or a host variable, its content must match the data type `i` in accordance with the rules for a [lossless assignment](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html). `n` must have the type `b`, `s`, `i`, or `int8`. This is checked in [strict mode](ABENABAP_SQL_STRICTMODE_763.html) of the syntax check from ABAP release 7.63. If the value of `n` is less than 0, an exception is raised that cannot be handled. If `n` is equal to 0, all rows of the result set are inserted into the internal table `itab`. If used in the statement [`FETCH`](ABAPFETCH.html), `n` rows are extracted from the current cursor position.

If `INTO` is used, the internal table is initialized before each insertion and, in the `SELECT` loop, it only contains the rows of the current package. If `APPENDING` is used, a further package is added to the existing rows of the internal table for each `SELECT` loop or for each extraction using `FETCH`.

After `ENDSELECT` or `ENDWITH`, the content of `itab` is not defined if `INTO` is used. That is, the table can either contain the rows of the last package or it can be initial. If `APPENDING` is used, the content of `itab` retains the state of the last loop pass.

Reading and output of the columns of the DDIC database table `SPFLI` in packages of 10 rows.

-   An assignment to a parenthesized comma-separated list of individual elementary data objects [`elem1`](ABAPSELECT_INTO_TARGET.html), [`elem2`](ABAPSELECT_INTO_TARGET.html), .... specified after `INTO`.
-   An assignment to a single work area [`wa`](ABAPSELECT_INTO_TARGET.html) specified after `INTO`.
-   An assignment to an internal table [`itab`](ABAPSELECT_INTO_TARGET.html) specified after `INTO` or `APPENDING`.

-   In writes to work areas `wa` and internal tables `itab`, `CORRESPONDING FIELDS OF` can be used to assign columns of the result set to identically named components of structured target areas.
-   In writes to internal tables, `PACKAGE SIZE` can be used to split lines of the result set into packages.
-   [`indicators`](ABAPSELECT_INDICATORS.html) can be used to specify indicators. Currently, a [null indicator](ABENNULL_INDICATOR_GLOSRY.html) can be specified with information about whether a column of the result set contains the null value.
-   [`extended_result`](ABAPSELECT_EXTENDED_RESULT.html) can be used to provide an extended result in a result object.
-   It may be necessary to use [`creating`](ABAPSELECT_CREATING.html) to define whether an [LOB](ABENLOB_GLOSRY.html) of the result set linked with an [LOB handle](ABENLOB_HANDLE_GLOSRY.html) is a [data stream](ABENDATA_STREAM_GLOSRY.html) or a [locator](ABENLOCATOR_GLOSRY.html).

-   The addition `CORRESPONDING FIELDS OF` cannot be used together with inline declarations [`@DATA`](ABAPSELECT_INTO_TARGET.html) or [`@FINAL`](ABAPSELECT_INTO_TARGET.html) for `wa` or `itab`.
-   The addition `APPENDING` cannot be specified together with [`NEW`](ABAPSELECT_INTO_TARGET.html).

-   The addition [`NEW`](ABAPSELECT_INTO_TARGET.html) or other methods for creating [anonymous data objects](ABENANONYMOUS_DATA_OBJECT_GLOSRY.html) can be used to create suitable data objects for dynamically specified [`FROM` clauses](ABAPFROM_CLAUSE.html) or [`SELECT` lists](ABAPSELECT_LIST.html).
-   Whether data should better be read into an internal table or a work area depends on the type of further processing: If data is required only once in a program, it should be imported into a work area, row by row, using a `SELECT` loop. Reading data into an internal table requires more memory space without compensating this disadvantage with a considerably higher reading speed. If, on the other hand, data is required many times in a program, it should be read into an internal table. The disadvantage of the increased memory requirement is more than compensated for here by the advantage of a once-only selection.
-   If data is to be imported into an internal table, it is better to import it once into an internal table than to read it, row by row, into a work area and insert its content in the internal table.
-   The `INTO` clause and its rules are not affected by the implicit [client handling](ABENABAP_SQL_CLIENT_HANDLING.html) of ABAP SQL. In particular, the client column of a target structure can be filled with other values than the client ID, for example when assigning individually specified columns of a [select list](ABAPSELECT_LIST.html).
-   Reference variables for LOB handles or LOB handle structures cannot currently be specified after the statement `FETCH`.
-   The statement `SELECT` also has an obsolete [short form](ABAPSELECT_OBSOLETE.html), in which `INTO` or `APPENDING` can be omitted.
-   Outside the [strict mode](ABENABAP_SQL_STRICTMODE_760.html) of the syntax check from ABAP release 7.60, the `INTO` clause does not have to be the last clause of a [main query](ABENMAINQUERY_GLOSRY.html).
-   Host variables without the escape character `@` are [obsolete](ABENABAP_SQL_HOSTVAR_OBSOLETE.html). The escape character `@` must be specified in the [strict modes](ABENABAP_SQL_STRICT_MODES.html) of the syntax check from ABAP release 7.40, SP05.

-   If the result set is defined in the [`SELECT` list](ABAPSELECT_LIST.html) by specifying `*` or `data_source~*`, it is not possible to specify a comma-separated list of data objects.
-   Generally, whitespace characters are ignored within the parentheses and the comma-separated list can span multiple program lines. But if the opening bracket is followed by a whitespace, there also must be a whitespace in front of the closing bracket.

-   **Definition of the result set using `*` without the addition `CORRESPONDING FIELDS OF`** in the `INTO` clause:
-   If all columns of the data sources are read using `*`, `CORRESPONDING FIELDS` is not specified and the `SELECT` statement is not the main query of a [`WITH`](ABAPWITH.html) statement, `SELECT` behaves as follows:

-   A work area without [LOB handle components](ABENLOB_HANDLE_COMPONENT_GLOSRY.html) is assigned the row of the result set, left-aligned and unconverted and in accordance with the structure of the result set. Unaffected parts of `wa` retain their previous content. To be able to access the components of the result set according to type after the assignment, the work area `wa` must be structured like the result set.
-   When an [LOB handle structure](ABENLOB_HANDLE_STRUCTURE_GLOSRY.html) is specified, it must be constructed exactly like the structure of the [data source](ABAPSELECT_DATA_SOURCE.html), in accordance with the [prerequisites](ABENABAP_SQL_WA.html). The content of the columns of the result set that are not assigned to any [LOB handle components](ABENLOB_HANDLE_COMPONENT_GLOSRY.html) are directly assigned to the corresponding components of the work area. One [LOB handle](ABENSELECT_INTO_LOB_HANDLES.html) is created for each LOB handle component.

-   **All Other Combinations**
-   If the result set consists of a single column specified explicitly after `SELECT` or a single [SQL expression](ABENSQL_EXPRESSION_GLOSRY.html) or a single [aggregate expression](ABENAGGREGATE_EXPRESSION_GLOSRY.html), `wa` can be an elementary data object or a structure. If the result set consists of multiple columns, it must be a structure and the following rules apply:

-   If the addition `CORRESPONDING FIELDS` is not specified, `wa` must contain enough components and the content of the columns are assigned to the components of `wa` from left to right in the order specified after `SELECT`. The content of surplus components of `wa` is not changed.
-   If the addition `CORRESPONDING FIELDS` is specified, only those content of columns for which there are identically named components in `wa` are assigned to them. The alias names defined using [`AS`](ABAPSELECT_LIST.html) are respected. Columns and aggregate expressions that appear multiple times can only be assigned using alias names, if `CORRESPONDING FIELDS` is specified. If `wa` contains substructures, these are resolved by the addition `CORRESPONDING FIELDS` and the full names linked using the structure component selector are considered. If a column name occurs multiple times and no alias name was assigned, the last column listed is assigned.

-   The second point of the enumeration above, [All Other Combinations](ABAPINTO_CLAUSE.html), also includes [`data_source~*`](ABAPSELECT_LIST.html) when specified in the [`SELECT` list](ABAPSELECT_LIST.html). In this case, `wa` must be a structure. This is particularly valid when only one data source [`data_source~*`](ABAPSELECT_DATA_SOURCE.html) is specified. Therefore, if a single `data_source~*` is specified, other rules apply than in the case where `*` is specified, even if the same result sets are defined both times.
-   The addition `CORRESPONDING FIELDS` ignores names that were only defined using the addition `AS name` of the statement [`INCLUDE`](ABAPINCLUDE_TYPE.html) or when integrating the structures in the ABAP Dictionary. Any components renamed using the addition `RENAMING WITH SUFFIX` of the statement `INCLUDE` or renamed similarly in the ABAP Dictionary are, however, not ignored.
-   If the addition `CORRESPONDING FIELDS` is used, fields with matching names (if known statically) are assigned when the program is generated or are otherwise assigned once when the `SELECT` statement is executed.
-   If individual columns are read and the structure of the result set is known statically, it is recommended that a list of data objects or inline declarations is used instead of using the addition `CORRESPONDING FIELDS`.
-   If the addition `INTO CORRESPONDING` is used and all the required information exists statically, the fields are assigned when the program is generated. Otherwise, the fields are assigned once when the `SELECT` statement is executed, which causes a slight increase in the required runtime.
-   The fact, that the addition `INTO CORRESPONDING` does not affect the result set defined by other clauses, can be demonstrated by using it together with [`DISTINCT`](ABAPSELECT_CLAUSE.html), [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) or any other construct that requires the selection of specific columns. Then the optimization of the result set does not remove columns required by these constructs and their values are taken into account. This is shown by class `CL_DEMO_SELECT_DISTINCT_CORRES`. The additions `DISTINCT` and `FOR ALL ENTRIES` remove duplicate values as defined by the explicitly given `SELECT` list and not by the columns that match the names of the target area.
-   The variants with the addition `INTO CORRESPONDING FIELDS` run the risk of having target areas with more components than are actually filled. This should only be the case if the components that are not filled are then filled in the program. Otherwise appropriately sized work areas should be used to avoid a large amount of memory being filled by initial values, especially in internal tables.

-   If `INTO` is used, the internal table is initialized before the rows are inserted.
-   Preceding rows are preserved if `APPENDING` is used. `APPENDING` cannot be used together with the addition [`NEW`](ABAPSELECT_INTO_TARGET.html).

-   When specifying an internal table with a unique [primary](ABENPRIMARY_TABLE_KEY_GLOSRY.html) or [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html), an uncatchable exception is raised if an attempt is made to create a duplicate entry.
-   If the internal table contains more columns than required when using the addition `CORRESPONDING FIELDS`, generally too much memory is being used by initial fields and a warning is raised by the syntax check. In cases where the columns are needed, for example, when they are filled with derived values by the program, a [pragma](ABENPRAGMA.html) can be used to bypass the warning.
-   The maximum number of [data streams](ABENDATA_STREAM_GLOSRY.html) that can be assigned to an ABAP SQL statement is limited to 16. This means that reader streams should not be created when importing internal tables.
-   It is not recommended that a data object `itab` is declared inline with `@FINAL`.
-   Instead of using `APPENDING TABLE` to form union sets on the AS ABAP, this can now be done directly in the database using [`UNION`](ABAPUNION.html), and [SQL expressions](ABAPSQL_EXPR.html) can be used to calculate column values.

-   The addition `PACKAGE SIZE` can be used after `INTO` to limit the amount of data read at once. Otherwise, a runtime error can occur when reading a data set that is too large into an internal table so that its [maximum size](ABENMEMORY_CONSUMPTION_2.html) is exceeded. `PACKAGE SIZE` cannot prevent this runtime error after `APPENDING`.
-   If the addition `PACKAGE SIZE` is specified with the addition [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html), all selected rows are read into an internal system table initially and the packages are only created when they are passed from the system table to the actual target table. The addition `FOR ALL ENTRIES` thereby negates the effect of `PACKAGE SIZE` in preventing memory overflow.
-   The addition `PACKAGE SIZE` does not affect the size of the [packages](ABENABAP_SQL_OVIEW.html) configurable in the profile parameters used to transport data between the database server and AS ABAP.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA carrid TYPE scarr-carrid. \\n\\ \\nSELECT carrid, carrname, url \\n FROM scarr \\n ORDER BY carrid \\n INTO (@carrid, \\n @FINAL(carrname), \\n NEW @FINAL(dref)). \\n out->write( |\\{ carrid \\n \\}, \\{ carrname \\n \\}, \\{ dref->\* \\} | ). \\nENDSELECT. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: \\n BEGIN OF wa, \\n cityfrom TYPE spfli-cityfrom, \\n cityto TYPE spfli-cityto, \\n carrid TYPE spfli-carrid, \\n connid TYPE spfli-connid, \\n END OF wa. \\n\\ \\nSELECT SINGLE \\n FROM spfli \\n FIELDS carrid, connid, cityfrom, cityto \\n WHERE carrid = 'LH' AND connid = '400' \\n INTO (@wa-carrid, \\n @wa-connid, \\n @wa-cityfrom, \\n @wa-cityto). \\n\\ \\nout->write( wa ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA wa TYPE scarr. \\nSELECT SINGLE \* \\n FROM scarr \\n WHERE carrid = 'LH' \\n INTO @wa. \\n\\ \\nSELECT SINGLE \* \\n FROM scarr \\n WHERE carrid = 'LH' \\n INTO @FINAL(wa\_inl). \\nASSERT wa\_inl = wa. \\n\\ \\nSELECT SINGLE \* \\n FROM scarr \\n WHERE carrid = 'LH' \\n INTO NEW @FINAL(dref). \\nASSERT dref->\* = wa. \\n\\ \\nout->write( dref->\* ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: \\n BEGIN OF wa, \\n cityfrom TYPE spfli-cityfrom, \\n cityto TYPE spfli-cityto, \\n carrid TYPE spfli-carrid, \\n connid TYPE spfli-connid, \\n END OF wa. \\n\\ \\nSELECT SINGLE \\n FROM spfli \\n FIELDS carrid, connid, cityfrom, cityto \\n WHERE carrid = 'LH' AND connid = '400' \\n INTO CORRESPONDING FIELDS OF @wa. \\n\\ \\nout->write( wa ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA itab TYPE STANDARD TABLE OF scarr \\n WITH EMPTY KEY. \\nSELECT \* \\n FROM scarr \\n ORDER BY carrid \\n INTO TABLE @itab. \\n\\ \\nSELECT \* \\n FROM scarr \\n ORDER BY carrid \\n INTO TABLE @FINAL(itab\_inl). \\nASSERT itab\_inl = itab. \\n\\ \\nSELECT \* \\n FROM scarr \\n ORDER BY carrid \\n INTO TABLE NEW @FINAL(dref). \\nASSERT dref->\* = itab. \\n\\ \\nout->write( dref->\* ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF wa, \\n cityfrom TYPE spfli-cityfrom, \\n cityto TYPE spfli-cityto, \\n carrid TYPE spfli-carrid, \\n connid TYPE spfli-connid, \\n END OF wa. \\n\\ \\nDATA itab TYPE SORTED TABLE OF wa WITH UNIQUE KEY table\_line. \\n\\ \\nSELECT FROM spfli \\n FIELDS carrid, connid, cityfrom, cityto \\n INTO CORRESPONDING FIELDS OF TABLE @itab. \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT FROM scarr \\n FIELDS carrname, \\n CAST( '-' AS CHAR( 4 ) ) AS connid, \\n CAST( '-' AS CHAR( 20 ) ) AS cityfrom, \\n CAST( '-' AS CHAR( 20 ) ) AS cityto \\n WHERE carrid = 'LH' \\n INTO TABLE @DATA(result). \\n\\ \\nSELECT FROM spfli \\n FIELDS '-' AS carrname, \\n connid, \\n cityfrom, \\n cityto \\n WHERE carrid = 'LH' \\n APPENDING TABLE @result. \\n\\ \\nSORT result BY carrname DESCENDING connid cityfrom cityto. \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\nSELECT carrid, connid, cityfrom, cityto \\n FROM spfli \\n ORDER BY carrid, connid, cityfrom, cityto \\n INTO TABLE @FINAL(result) PACKAGE SIZE 10. \\n out->next\_section( |Package \\{ sy-dbcnt / 10 \\}| \\n )->write( result ). \\nENDSELECT. \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html