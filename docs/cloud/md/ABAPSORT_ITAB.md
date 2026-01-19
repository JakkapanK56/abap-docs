---
title: "ABAPSORT_ITAB"
description: |
  ABAPSORT_ITAB - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPSORT_ITAB.htm"
abapFile: "ABAPSORT_ITAB.html"
keywords: ["select", "insert", "loop", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "ABAPSORT", "ITAB"]
---

``SORT itab [STABLE]\            \{\ \{\ [ASCENDING|DESCENDING]\                [AS TEXT]\                [BY \{[`comp1`](ABENITAB_COMPONENTS.html)\ [ASCENDING|DESCENDING]\ [AS TEXT]\}\                    \{[`comp2`](ABENITAB_COMPONENTS.html)\ [ASCENDING|DESCENDING]\ [AS TEXT]\}\                    ... ]\ \}\            |\ \{\ [BY (otab)]\ \}\            |\ \{\ [BY expr]\ \}\ \}.``

[1. `... STABLE`](#ABAP_ADDITION_1@3@)

[2. `... ASCENDING|DESCENDING`](#ABAP_ADDITION_2@3@)

[3. `... AS TEXT`](#ABAP_ADDITION_3@3@)

[4. `... BY compi [ASCENDING|DESCENDING]\ [AS TEXT]`](#ABAP_ADDITION_4@3@)

[5. `... BY (otab)`](#ABAP_ADDITION_5@3@)

[6. `... BY expr`](#ABAP_ADDITION_6@3@)

This statement sorts an internal table `itab` according to the content of its components. Here, size comparisons are performed by default using the general [comparison rules](ABENLOGEXP_RULES.html), that is:

If no explicit sort key is specified using the addition `BY`, the internal table `itab` is sorted by the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html). The priority of the sort depends on the order in which the [key fields](ABAPTYPES_KEYDEF.html) are specified in the table definition. In [standard keys](ABENSTANDARD_KEY_GLOSRY.html), the sort is prioritized according to the order of the key fields in the line type of the table. If the primary table key of a standard table is [empty](ABENITAB_EMPTY_KEY.html), no sort takes place. If this is known statically, the syntax check produces a warning.

Sorting is unstable by default, which means that the relative order of lines that do not differ in sort keys is not preserved when they are sorted. The order can be different depending on the platform or when sorted multiple times. The addition `STABLE` can be used for stable sorting.

`itab` expects a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) or a [hashed table](ABENHASHED_TABLE_GLOSRY.html).

In both table categories, `SORT` specifies the order in which a subsequent [`LOOP`](ABAPLOOP_AT_ITAB.html) runs without the addition `USING KEY`.

Sorted tables cannot be sorted using `SORT` and applying the statement `SORT` to [sorted tables](ABENSORTED_TABLE_GLOSRY.html) is forbidden by the syntax. If it is not determined until runtime that a sorted table is to be sorted, an uncatchable exception is raised if this action could modify the existing sorting. The latter occurs in the following cases:

Otherwise, the statement `SORT` is ignored for sorted tables.

Simplest form of the statement `SORT` for internal tables. The hashed table `carriers` is sorted by its primary key, that is by the column `carrid`.

`STABLE` is used to achieve stable sorting, which means that the relative order of lines that do not differ in the sort key remains unchanged in the sort. If the addition `STABLE` is not specified, the order is not stable:

Stable sorting of the internal table `flights` by columns `cityfrom`\\ `cityto`, whereby the order within this sorting with respect to `carrid` and `connid` is preserved.

The addition `ASCENDING` or `DESCENDING` can be used to specify the sort direction explicitly as ascending or descending. If neither of the additions is specified, the table is sorted in ascending order. This sort direction can be overwritten after the addition `BY` for components listed individually here.

The internal table `itab` is sorted by its primary key in descending order, that is, by its lines. Next, [`LOOP AT GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html) can be used for grouping and determine the number of lines per group.

The addition `AS TEXT` specifies that [text-like](ABENTEXTLIKE_DATA_TYPE_GLOSRY.html) components are sorted in accordance with the [locale](ABENLOCALE_GLOSRY.html) of the current [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html). If `AS TEXT` is not specified, text-like components are sorted according to the encoding in the code page of the current text environment. This can be overwritten after the addition `BY` for the components listed individually here. The text environment is set when an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) is opened or by using the statement `SET LOCALE`.

Sorting of a [hashed table](ABENHASHED_TABLE_GLOSRY.html)\\ `text_tab` by the order in the code page and in accordance with the locale of the current [text environment](ABENTEXT_ENVIRONMENT.html). If a western European text environment is configured, the sorts produce the orders `Miller`, `Moller`, `Muller`, `Möller` and `Miller`, `Moller`, `Möller`, `Muller` respectively (see also the executable example for `SET LOCALE`).

[Sorting Internal Tables Alphabetically](ABENSORT_TEXT_ABEXA.html)

The addition `BY compi` does not sort the table by the [primary table key](ABAPTYPES_KEYDEF.html), but by the components `comp1 comp2...` specified after it. The components are specified as described under [Specifying Components](ABENITAB_COMPONENTS.html). If all components are specified using `name` variables and these contain only blanks, no sort takes place. The priority of the sort depends on the order in which the components `comp1 comp2 ...` are specified from left to right. The specified components can also be duplicated or overlapping. The specified components can have any data type. The relevant [comparison rules](ABENLOGEXP_RULES.html) apply to the evaluation.

If neither of the additions `ASCENDING` or `DESCENDING` are specified after `compi`, the sort direction specified by addition 2 is used. If one of the additions `ASCENDING` or `DESCENDING` is specified, it overwrites the default for this component.

If the addition `AS TEXT` is not specified after a text-like component `compi`, the default specified by addition 3 is used. If the addition `AS TEXT` is specified after a text-like component, it overwrites the default for this component. In non-text-like components, `AS TEXT` cannot be specified, unless a structured component is specified. In structured components, `AS TEXT` only affects text-like components.

Sorting of the internal table `itab` in ascending order by column `col1` and in descending order by column `col2`.

The addition `BY (otab)` does not sort the table by the [primary table key](ABAPTYPES_KEYDEF.html), but by the component specified dynamically in the internal table `otab`. Each line of the table `otab` defines a component of the sort key. The priority of the sort is based on the order of the lines in `otab`. If the table `otab` is initial, the table is not sorted.

For `otab`, a standard table of the table type `ABAP_SORTORDER_TAB` from the ABAP Dictionary must be specified. The line type of this table is the dictionary structure `ABAP_SORTORDER` with the following components:

If a column of `otab` has invalid content, that is, if `NAME` contains the name of a component that does not exist or an incorrect offset/length or if `DESCENDING` and `ASTEXT` do not contain *X* or the initial value, a catchable exception of the class `CX_SY_DYN_TABLE_ILL_COMP_VAL` is raised.

Reading of a database table into a dynamic internal table dynamically and sorting its content dynamically. The name of the database table and the names of the columns by which the table sorted can be entered.

The addition `BY expr` can be used to specify an expression or a functional method call `expr` whose result is an internal table with the same type and content as in the preceding addition `BY (otab)`. `expr` is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html). The behavior is the same as when specifying a parenthesized internal table directly.

Parentheses cannot be placed around `expr`.

The above example for specifying `BY (otab)` can be written shorter as shown below. Instead of specifying the unnecessary internal table `order`, it is possible to directly specify the tabular value constructed using the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) of the required content.

[Sorting Internal Tables Dynamically](ABENSORT_ITAB_EXP_ABEXA.html).

`CX_SY_DYN_TABLE_ILL_LINE_TYPE`

`CX_SY_DYN_TABLE_ILL_COMP_VAL`

-   Numeric and byte-like components are sorted by their values.
-   Character-like components are sorted by default by their binary representation ([code page](ABENCODEPAGE_GLOSRY.html)). Textual sorting of character-like components can be performed using the addition `AS TEXT`.
-   The sizes of other component types are compared using the corresponding rules for [reference variables](ABENLOGEXP_RULES_OPERANDS_REF.html), [structures](ABENLOGEXP_RULES_OPERANDS_STRUC.html), and [internal tables](ABENLOGEXP_RULES_OPERANDS_ITAB.html).

-   In standard tables, the [primary table index](ABENPRIMARY_TABLE_INDEX_GLOSRY.html) is applied in accordance with the sort order
-   In hashed tables, the internal order is modified. This internal order was defined either by inserting lines into the internal table or by a previous sort using the statement `SORT`.

-   if the addition `BY` is used to specify a different sort key as the initial part of the table key.
-   if the addition `DESCENDING` is used.
-   if the addition `AS TEXT` is used.
-   if an attribute of an object is specified as a component in the addition `BY`.

-   It is best to specify an explicit sort key behind `BY`, if possible. An implicit sort behind the [primary table key](ABENTABLE_KEY_GLOSRY.html), which can itself, in standard tables, be defined implicitly as a [standard key](ABENSTANDARD_KEY_GLOSRY.html), makes a program difficult to understand and possibly unpredictable.
-   When using the primary table key, it should be noted that this key can be the [standard key](ABENSTANDARD_KEY_GLOSRY.html), which can also have unexpected consequences:

-   If the line type is structured, the table is sorted by all character-like and byte-like components.
-   The standard key of a standard table can be [empty](ABENITAB_EMPTY_KEY.html).

-   Secondary table keys cannot be specified as sort keys.
-   Sorting using `SORT` does not affect the assignment of lines to a [secondary table index](ABENSECONDARY_TABLE_INDEX_GLOSRY.html).
-   It is possible to sort columns with [reference types](ABENREFERENCE_TYPE_GLOSRY.html) but doing this is questionable. Here, it is important to note that no comparison rule is defined for non-initial invalid references. An internal table can only be sorted by valid or initial references. A non-initial, invalid reference leads to a runtime error if it is involved in sorting.
-   The addition [`GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html) of the statement [`LOOP AT itab`](ABAPLOOP_AT_ITAB.html) or of a [`FOR` expression](ABENFOR_GROUPS_OF.html) also has the additions `ASCENDING` and `DESCENDING` for sorting groups. These can be used as an extension to the statement `SORT` if its sort criteria are not sufficient.

-   [Sorting Internal Tables](ABENSORT_STABLE_ABEXA.html)
-   [Sorting Internal Tables with Secondary Keys](ABENSORT_ITAB_SEC_KEY_ABEXA.html)

-   The order can depend on the platform.
-   Multiple sorting of a table using the same sort key can produce a different order each time the table is sorted.

-   The result of a sorting without the addition `AS TEXT` depends on the operating system of the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html). Although the sequence of individual letters that belong to the activated language remains the same across different operating systems, there are differences in terms of the characters that do not belong to the alphabet of the activated language. Even if only the letters from the alphabet of the activated language are used, some slight differences occur when sorting complete words. Furthermore, the order of uppercase and lowercase letters is specific to the operating system.
-   The use of the addition `AS TEXT` usually makes the statement [`CONVERT TEXT`](ABAPCONVERT_TEXT.html) superfluous in the context of internal tables.
-   A sort without the addition `AS TEXT` is considerably faster than a sort with this addition. If it is certain that both sorts produce the same order, the addition `AS TEXT` is not necessary. The latter can be the case if, for example, text-like components contain characters from the [ASCII](ABENASCII_GLOSRY.html) character set only and only lowercase or uppercase letters.

-   If the line type of the internal table is not known statically, the components can only be specified dynamically and not directly.
-   Instead of individual dynamic components, an internal table can be specified directly as `otab` or as the result of an expression `expr` as a dynamic sort key (see additions 5 and 6). Using a table like this has the advantage that any exceptions are catchable. When specifying the table, the number of components of the sort key is also dynamic. In contrast, when individual dynamic components are used, a character-like data object must be specified for any required component, which is ignored if it only contains blank characters.

-   `NAME` of the type [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html)
-   for specifying a component of the sort key. The component is specified in the form *comp\_name\[+off(len)\]*, where *comp\_name* must be the name of a component in `itab` in uppercase letters. The component name may contain [offsets and lengths](ABENOFFSET_LENGTH.html), structure component selectors, and component selectors for assigning structured data objects and attributes in classes or objects.
-   `DESCENDING` of the type `CHAR` with length 1
-   for specifying the sort direction for the current component. If `DESCENDING` is initial, the sort is performed in ascending order. If `DESCENDING` has the value *X*, the table is sorted in descending order.
-   `ASTEXT` of the type `CHAR` with length 1
-   for the text sorting of the current component. If `ASTEXT` has the value *X*, the sort is performed as with the addition `AS TEXT`. This is only possible for character-like components. If `ASTEXT` is initial, character-like components are sorted in accordance with their binary representation.

-   The addition `BY (otab)` cannot be combined with `BY compi`.
-   When using the addition `BY (otab)`, it is not possible to use `DESCENDING` or `AS TEXT` to specify a descending sort direction or textual sorting for all components.
-   If a single parenthesized data object `(dobj)` is specified after the addition `BY`, its data type decides whether its content is used to specify a [single dynamic component](ABENITAB_COMPONENTS.html) or multiple components. In either case, no sort takes place if `dobj` is initial.

-   *Cause:* The table `otab` has an invalid line type.
    *Runtime error:*\\ `DYN_TABLE_ILL_LINE_TYPE`

-   *Cause:* A column of the table `otab` contains an invalid value.
    *Runtime error:*\\ `DYN_TABLE_ILL_COMP_VAL`

DATA carriers TYPE HASHED TABLE OF scarr \\n WITH UNIQUE KEY carrid. \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO TABLE @carriers. \\n\\ \\nSORT carriers. SELECT carrid, connid, cityfrom, cityto \\n FROM spfli \\n ORDER BY carrid, connid \\n INTO TABLE @DATA(flights). \\n\\ \\nSORT flights STABLE BY cityfrom cityto. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA itab TYPE TABLE OF i WITH NON-UNIQUE KEY table\_line. \\n\\ \\nFINAL(t) = cl\_demo\_date\_time=>get\_utc\_time( ). \\nFINAL(rnd) = cl\_abap\_random\_int=>create( seed = CONV i( t ) \\n min = 1 \\n max = 10 ). \\n\\ \\nitab = VALUE #( FOR i = 1 UNTIL i > 100 ( rnd->get\_next( ) ) ). \\n\\ \\nSORT itab DESCENDING. \\n\\ \\nLOOP AT itab ASSIGNING FIELD-SYMBOL() \\n GROUP BY ( key = size = GROUP SIZE ) \\n ASSIGNING FIELD-SYMBOL(). \\n out->write( |\\{ \-key WIDTH = 4 \\n \\}\\{ \-size \\}| ). \\nENDLOOP. \\n\\ \\nout->display( ). CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS meth. \\n PRIVATE SECTION. \\n CLASS-DATA text\_tab TYPE HASHED TABLE OF string \\n WITH UNIQUE KEY table\_line. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD meth. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n text\_tab = VALUE #( \\n ( \`Muller\` ) \\n ( \`Möller\` ) \\n ( \`Moller\` ) \\n ( \`Miller\` ) ). \\n SORT text\_tab. \\n out->write\_data( text\_tab ). \\n SORT text\_tab AS TEXT. \\n out->write\_data( text\_tab ). \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n demo=>meth( ). \\n ENDMETHOD. \\nENDCLASS. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF line, \\n col1 TYPE c LENGTH 1, \\n col2 TYPE i, \\n END OF line. \\n\\ \\nDATA itab TYPE STANDARD TABLE OF line WITH EMPTY KEY. \\n\\ \\nitab = VALUE #( ( col1 = 'A' col2 = 6 ) \\n ( col1 = 'B' col2 = 4 ) \\n ( col1 = 'B' col2 = 7 ) \\n ( col1 = 'C' col2 = 1 ) \\n ( col1 = 'C' col2 = 3 ) \\n ( col1 = 'B' col2 = 9 ) \\n ( col1 = 'A' col2 = 2 ) \\n ( col1 = 'A' col2 = 5 ) \\n ( col1 = 'C' col2 = 8 ) ). \\n\\ \\nSORT itab BY col1 ASCENDING col2 DESCENDING. \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA dbtab TYPE c LENGTH 30 VALUE 'spfli'. \\ncl\_demo\_input=>add\_field( CHANGING field = dbtab ). \\nDATA columns TYPE string VALUE \`cityfrom, cityto\`. \\ncl\_demo\_input=>request( CHANGING field = columns ). \\ndbtab = condense( to\_upper( dbtab ) ). \\n\\ \\nDATA dref TYPE REF TO data. \\n\\ \\nTRY. \\n CREATE DATA dref TYPE STANDARD TABLE OF (dbtab). \\n CATCH cx\_sy\_create\_data\_error. \\n out->write( 'Wrong data type!' ). \\nENDTRY. \\n\\ \\nTRY. \\n SELECT \* \\n FROM (dbtab) \\n INTO TABLE @dref->\*. \\n CATCH cx\_sy\_dynamic\_osql\_semantics. \\n out->write( 'Wrong database table!' ). \\nENDTRY. \\n\\ \\nSPLIT columns AT \`,\` INTO TABLE FINAL(column\_tab). \\nFINAL(order) = VALUE abap\_sortorder\_tab( \\n FOR wa IN column\_tab \\n ( name = condense( to\_upper( wa ) ) ) ). \\n\\ \\nTRY. \\n SORT dref->\* BY (order). \\n CATCH cx\_sy\_dyn\_table\_ill\_comp\_val. \\n out->write( 'Wrong column name!' ). \\nENDTRY. \\n\\ \\nout->write( dref->\* ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA dbtab TYPE c LENGTH 30 VALUE 'spfli'. \\ncl\_demo\_input=>add\_field( CHANGING field = dbtab ). \\nDATA columns TYPE string VALUE \`cityfrom, cityto\`. \\ncl\_demo\_input=>request( CHANGING field = columns ). \\ndbtab = condense( to\_upper( dbtab ) ). \\n\\ \\nDATA dref TYPE REF TO data. \\n\\ \\nTRY. \\n CREATE DATA dref TYPE STANDARD TABLE OF (dbtab). \\n CATCH cx\_sy\_create\_data\_error. \\n out->write( 'Wrong data type!' ). \\nENDTRY. \\n\\ \\nTRY. \\n SELECT \* \\n FROM (dbtab) \\n INTO TABLE @dref->\*. \\n CATCH cx\_sy\_dynamic\_osql\_semantics. \\n out->write( 'Wrong database table!' ). \\nENDTRY. \\n\\ \\nSPLIT columns AT \`,\` INTO TABLE DATA(column\_tab). \\nTRY. \\n SORT dref->\* BY VALUE #( FOR wa IN column\_tab \\n ( name = condense( to\_upper( wa ) ) ) ). \\n CATCH cx\_sy\_dyn\_table\_ill\_comp\_val. \\n out->write( 'Wrong column name!' ). \\nENDTRY. \\n\\ \\nout->write( dref->\* ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html