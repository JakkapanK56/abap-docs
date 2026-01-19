---
title: "ABAPREAD_TABLE_OUTDESC"
description: |
  ABAPREAD_TABLE_OUTDESC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREAD_TABLE_OUTDESC.htm"
abapFile: "ABAPREAD_TABLE_OUTDESC.html"
keywords: ["select", "update", "delete", "loop", "do", "while", "if", "case", "catch", "method", "class", "data", "types", "internal-table", "field-symbol", "ABAPREAD", "TABLE", "OUTDESC"]
---

[Short Reference](ABAPREAD_TABLE_ITAB_SHORTREF.html)

``... \{ INTO wa [[`transport_options`](ABAPREAD_TABLE_TRANSPORT_OPTIONS.html)]\ \}``\\ 
  `|\ \{ ASSIGNING <fs> [CASTING]\ [ELSE UNASSIGN]\ \}`\\ 
  `|\ \{ REFERENCE INTO dref \}`\\ 
  `|\ \{ TRANSPORTING NO FIELDS \} ...`

[1. `... INTO wa [transport_options]`](#ABAP_ALTERNATIVE_1@2@)

[2. `... ASSIGNING <fs> [CASTING]\ [ELSE UNASSIGN]`](#ABAP_ALTERNATIVE_2@2@)

[3. `... REFERENCE INTO dref`](#ABAP_ALTERNATIVE_3@2@)

[4. `... TRANSPORTING NO FIELDS`](#ABAP_ALTERNATIVE_4@2@)

[Output Behavior](ABENTABLE_OUTPUT_GUIDL.html)

Defines the output behavior of a [`READ` statement](ABAPREAD_TABLE.html) for an internal table. There are four alternatives for the output behavior:

Outside of classes, the addition `INTO` can also be specified together with `TRANSPORTING NO FIELDS`, but this produces a warning in the syntax check

The content of the found line is assigned to the work area `wa`. The following can be specified for `wa`:

If no line is found, `wa` remains unchanged or initial. If a conversion error occurs in the assignment to `wa`, the exception cannot be handled using `CX_SY_CONVERSION_ERROR` and the associated runtime error occurs instead.

If the additions [`transport_options`](ABAPREAD_TABLE_TRANSPORT_OPTIONS.html) are used, the work area `wa` must be compatible with the line type of the internal table.

For `READ TABLE`, an [obsolete short form](ABENITAB_SHORT_FORMS.html) exists where `INTO wa` can be omitted if the internal table has an identically named [header line](ABENHEADER_LINE_GLOSRY.html)\\ `itab`. `INTO itab` is then implicitly added to the statement. This short form is independent of the [obsolete key specification](ABAPREAD_TABLE_OBSOLET.html), which also evaluates the header line.

Reading of a particular line in the internal table `sflight_tab` and assignment to a work area `sflight_wa` declared inline. After a successful assignment, the content of a component of the line is changed in the internal table.

[1. `... CASTING`](#ABAP_ADDITION_1@3@)

[2. `... ELSE UNASSIGN`](#ABAP_ADDITION_2@3@)

The found table line is assigned to a field symbol. After the statement `READ TABLE`, the field symbol points to the table line in the memory. The addition cannot be specified if `itab` is specified as the return value or result of a [functional method](ABENFUNCTIONAL_METHOD_GLOSRY.html), a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html), or a [table expression](ABENTABLE_EXPRESSION_GLOSRY.html), since this value no longer exists once the statement has been executed.

The following can be specified for `<fs>`:

If no table line is found, the state of `<fs>` depends on the addition `ELSE UNASSIGN`.

As long as the field symbol points to the line, assignments to the field symbol modify the line in the internal table. The following restrictions apply with respect to modifications to key fields of the [primary](ABENPRIMARY_TABLE_KEY_GLOSRY.html) and [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html):

The administration of unique secondary keys is updated after modifications are made to individual lines using field symbols the next time the internal table is accessed ([delayed update](ABENDELAYED_UPDATE_GLOSRY.html)). The administration of non-unique secondary keys is updated after the next explicit use of the secondary key ([lazy update](ABENLAZY_UPDATE_GLOSRY.html)). The check on the uniqueness of a secondary key does not take place until the time of the update. An internal table might therefore be in an inconsistent state with respect to the secondary key after individual lines have been modified using field symbols, which does not raise an exception until the table is next used. If the next use is not directly after the modification, the secondary key can be explicitly updated using methods of the class `CL_ABAP_ITAB_UTILITIES` to handle any exceptions on the spot.

The addition `CASTING` has the same meaning as if it were specified without further additions in the statement [`ASSIGN`](ABAPASSIGN_CASTING.html): The field symbol must be either completely typed, or typed with one of the generic built-in ABAP types `c`, `n`, `p`, or `x`. The assigned table line is [cast](ABENCAST_CASTING_GLOSRY.html) to the type of the field symbol. The same exceptions can be raised here as with `ASSIGN`.

The addition `CASTING` cannot be used if the field symbol is declared inline with `FIELD-SYMBOL`.

The addition `ELSE UNASSIGN` sets the state of the field symbol to unassigned if no table line is found and `sy-subrc` is set to 4 or 8. If `ELSE UNASSIGN` is not specified, the field symbol keeps its previous state.

See also the addition [`ELSE UNASSIGN`](ABAPASSIGN_ELSE_UNASSIGN.html) of the statement `ASSIGN`.

Reading of a particular line in the internal table `sflight_tab` and assignment to a field symbol `<sflight>` declared inline. After a successful assignment, the content of a component of the line is changed in the internal table. See also the example of the assignment of a [table expression](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html) to a field symbol.

A reference to the found table line is made in the data reference variable `dref`. The addition cannot be specified if `itab` is specified as the return value or result of a [functional method](ABENFUNCTIONAL_METHOD_GLOSRY.html) or of a [table expression](ABENTABLE_EXPRESSION_GLOSRY.html) of a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html), since this value no longer exists once the statement has been executed.

The following can be specified for `dref`:

If no table line is found, `dref` remains unchanged or initial.

By dereferencing the data reference, the content of the found table line can be evaluated and changed. The same restrictions apply to the modification of key fields of the [primary](ABENPRIMARY_TABLE_KEY_GLOSRY.html) and [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) as to access using field symbols (see `ASSIGNING` addition).

Reading of a particular line of the internal table `sflight_tab` and assignment of a reference to the found line to the data reference variable `sflight_ref` (declared inline). After a successful assignment, the content of a component of the line is changed in the internal table.

If the addition `TRANSPORTING NO FIELDS` is used, the statement `READ TABLE` only checks whether the line that is being searched for exists and fills the system fields `sy-subrc` and `sy-tabix`. The system cannot access the content of the found line.

Check whether a particular line exists in the internal table `sflight_carr` and assignment of the line number in the primary table index of the found line in `sy-tabix` to `idx`.

-   The addition `INTO` assigns the content of the found line to a work area. This addition can be used regardless of how `itab` is specified.
-   The addition `ASSIGNING` assigns the found line to a field symbol `<fs>`. This addition is possibly only if an existing internal table is specified for `itab`.
-   The addition `REFERENCE INTO` creates a reference to the found line in a reference table. This addition is possibly only if an existing internal table is specified for `itab`.
-   The addition `TRANSPORTING NO FIELDS` specifies that only the relevant system fields are filled. This addition can be used regardless of how `itab` is specified.

-   An existing work area that matches the line type of the internal table. The line type must be compatible with or convertible to the data type of the work area. If the work area is incompatible with the line type of the internal table, the content of the table line is converted to the data type of the work area in accordance with the [conversion rules](ABENCONVERSION_RULES.html).
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a work area with the line type of the internal table is declared. The line type must be known statically and completely.

-   An existing field symbol whose typing matches the line type of the internal table. The optional addition `CASTING` can be used to perform a casting.
-   An inline declaration [`FIELD-SYMBOL(<fs>)`](ABENFIELD-SYMBOL_INLINE.html), where a field symbol with the line type of the internal table is declared. If this cannot be known statically, the field symbol is declared with the generic type `any` and is assigned the constant [`space`](ABENSPACE.html) initially. The addition `CASTING` is not possible after an inline declaration.

-   The key fields of the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) of [sorted tables](ABENSORTED_TABLE_GLOSRY.html) and [hashed tables](ABENHASHED_TABLE_GLOSRY.html) are read-only and must not be modified, since this would invalidate internal table administration. The processing statements for internal tables check whether writes are performed on individual key fields and a corresponding attempt raises an uncatchable exception. If writes are performed in write positions across the entire table line, for example, as a target field of assignments or as actual parameters for output parameters, an exception is always raised.
-   The key fields of a [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html), however, are only read-only, while the secondary table is used. This is the case for [`LOOP`](ABAPLOOP_AT_ITAB.html) and when using the [`MODIFY`](ABAPMODIFY_ITAB.html) statement where the secondary key is specified after `USING KEY`. Otherwise the key fields are not read-only.

-   The [typing](ABENTYPING_GLOSRY.html) of the field symbol must match the line type of the internal table.
-   If the `READ` statement is successful (`sy-subrc` has value 0), it is guaranteed that the field symbol immediately points to a memory area after the execution of the statement. A query using [`IS ASSIGNED`](ABENLOGEXP_ASSIGNED.html) is not necessary there.
-   If the addition `ELSE UNASSIGN` is not used, it is recommended that the return code `sy-subrc` is evaluated and that [`IS ASSIGNED`](ABENLOGEXP_ASSIGNED.html) is not used, since in case of an unsuccessful read, the field symbol keeps its previous state and a memory area can be assigned to field symbol. This applies in particular to inline declarations. If the addition `ELSE UNASSIGN` is used, `sy-subrc` as well as the predicate `IS ASSIGNED` can be used.
-   If the line to which the field symbol points is deleted, no more memory area is assigned to the field symbol and it can no longer be used instead of a data object. If the field symbol is not used directly after the `READ` statement, it may be useful to carry out a check using [`IS ASSIGNED`](ABENLOGEXP_ASSIGNED.html).
-   Another form of the statement `READ TABLE` using the addition `ASSIGNING` is the specification of a [table expression](ABENTABLE_EXPRESSION_GLOSRY.html)\\ [`table_exp`](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html) after the statement [`ASSIGN`](ABAPASSIGN.html).

-   An existing data reference variable whose static type is compatible with the line type of the internal table or is the generic type `data`.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a data reference variable is declared whose static type is the line type of the internal table. The line type must be known statically and completely.

-   If the `READ` statement is successful (`sy-subrc` has value 0), it is guaranteed that the data reference variable immediately points to a line after the execution of the statement. A query using [`IS BOUND`](ABENLOGEXP_BOUND.html) is not necessary here.
-   Alongside the statement [`GET REFERENCE`](ABAPGET_REFERENCE.html) and the reference operator [`REF`](ABENCONSTRUCTOR_EXPRESSION_REF.html), `REFERENCE INTO` is the only way of creating [stack references](ABENSTACK_REFERENCE_GLOSRY.html). Stack references can become invalid if the referenced data object is deleted.
-   When applied to internal tables in the [heap](ABENHEAP_GLOSRY.html)\\ `REFERENCE INTO` creates memory-retaining [heap references](ABENHEAP_REFERENCE_GLOSRY.html).
-   All references ([heap references](ABENHEAP_REFERENCE_GLOSRY.html) and [stack references](ABENSTACK_REFERENCE_GLOSRY.html)) that point to lines from internal tables can become invalid when lines are deleted. If a data reference variable is not used directly after the `READ` statement, it may be useful to carry out a check using [`IS BOUND`](ABENLOGEXP_BOUND.html).

-   The [predicate function](ABENPREDICATE_FUNCTION_GLOSRY.html)\\ [`line_exists`](ABENLINE_EXISTS_FUNCTION.html) can also be used to check the existence of a table line.
-   The built-in function [`line_index`](ABENLINE_INDEX_FUNCTION.html) can also be used to identify the line number in the table index.

DATA: carrid TYPE sflight-carrid, \\n connid TYPE sflight-connid, \\n fldate TYPE sflight-fldate. \\n\\ \\n... \\n\\ \\nDATA sflight\_tab TYPE SORTED TABLE OF sflight \\n WITH UNIQUE KEY carrid connid fldate. \\n\\ \\nSELECT \* \\n FROM sflight \\n WHERE carrid = @carrid AND \\n connid = @connid \\n INTO TABLE @sflight\_tab. \\n\\ \\nIF sy-subrc = 0. \\n READ TABLE sflight\_tab \\n WITH TABLE KEY carrid = carrid \\n connid = connid \\n fldate = fldate \\n INTO DATA(sflight\_wa). \\n IF sy-subrc = 0. \\n sflight\_wa-price \*= '0.9'. \\n MODIFY sflight\_tab FROM sflight\_wa INDEX sy-tabix. \\n ENDIF. \\nENDIF. DATA: carrid TYPE sflight-carrid, \\n connid TYPE sflight-connid, \\n fldate TYPE sflight-fldate. \\n\\ \\n... \\n\\ \\nDATA sflight\_tab TYPE SORTED TABLE OF sflight \\n WITH UNIQUE KEY carrid connid fldate. \\n\\ \\nSELECT \* \\n FROM sflight \\n WHERE carrid = @carrid AND \\n connid = @connid \\n INTO TABLE @sflight\_tab. \\n\\ \\nIF sy-subrc = 0. \\n READ TABLE sflight\_tab \\n WITH TABLE KEY carrid = carrid \\n connid = connid \\n fldate = fldate \\n ASSIGNING FIELD-SYMBOL() ELSE UNASSIGN. \\n IF IS ASSIGNED. \\n \-price \*= '0.9'. \\n ENDIF. \\nENDIF. DATA: carrid TYPE sflight-carrid, \\n connid TYPE sflight-connid, \\n fldate TYPE sflight-fldate. \\n\\ \\n... \\n\\ \\nDATA sflight\_tab TYPE SORTED TABLE OF sflight \\n WITH UNIQUE KEY carrid connid fldate. \\n\\ \\nSELECT \* \\n FROM sflight \\n WHERE carrid = @carrid AND \\n connid = @connid \\n INTO TABLE @sflight\_tab. \\n\\ \\nIF sy-subrc = 0. \\n READ TABLE sflight\_tab \\n WITH TABLE KEY carrid = carrid \\n connid = connid \\n fldate = fldate \\n REFERENCE INTO FINAL(sflight\_ref). \\n\\ \\n IF sy-subrc = 0. \\n sflight\_ref->price \*= '0.9'. \\n ENDIF. \\nENDIF. DATA carrid TYPE scarr-carrid. \\n\\ \\n... \\n\\ \\nDATA: scarr\_tab TYPE SORTED TABLE OF scarr \\n WITH UNIQUE KEY carrid, \\n idx TYPE i. \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO TABLE @scarr\_tab. \\n\\ \\nREAD TABLE scarr\_tab \\n WITH TABLE KEY carrid = carrid \\n TRANSPORTING NO FIELDS. \\nIF sy-subrc = 0. \\n idx = sy-tabix. \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapread\_table.html