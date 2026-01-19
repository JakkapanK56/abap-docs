---
title: "ABENFUNCTIONAL_POSITIONS"
description: |
  ABENFUNCTIONAL_POSITIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENFUNCTIONAL_POSITIONS.htm"
abapFile: "ABENFUNCTIONAL_POSITIONS.html"
keywords: ["insert", "delete", "loop", "do", "if", "method", "data", "internal-table", "ABENFUNCTIONAL", "POSITIONS"]
---

Functional operand positions are [read positions](ABENREAD_POSITION_GLOSRY.html) that expect appropriate [data objects](ABENDATA_OBJECT_GLOSRY.html) and [functional method calls](ABENFUNCTIONAL_METHOD_CALL_GLOSRY.html) or [method chainings](ABENMETHOD_CHAINING_GLOSRY.html), as well as [constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) and [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html) whose return value or result has a suitable data type. The following functional operand positions exist:

Calls a functional method `cl_abap_tstmp=>normalize` in a functional operand position.

-   Functional operand positions in ABAP Objects

-   Operand `oref` of the statement
-   [`SET HANDLER ... FOR oref`](ABAPSET_HANDLER_INSTANCE.html).

-   Functional operand positions in relational expressions

-   Operand `ref` of the predicate expression
-   [`... ref IS [NOT] BOUND ...`](ABENLOGEXP_BOUND.html)

-   Functional operand positions in assignments

-   Operand `struc1` of the statement
-   [`MOVE-CORRESPONDING struc1 TO ...`](ABAPMOVE-CORRESPONDING.html)
-   Operand `val` of the statement
-   [`CLEAR ... WITH val`](ABAPCLEAR.html)

-   Functional Operand Positions in String Processing and Byte String Processing

-   Character-like or byte-like arguments of the built-in functions
-   [`dbmaxlen`](ABENLENGTH_FUNCTIONS.html), [`xstrlen`](ABENDESCRIPTIVE_FUNCTIONS_BINARY.html)
-   Operand `itab` of the statement
-   [`CONCATENATE LINES OF itab INTO ...`](ABAPCONCATENATE.html)
-   Operand `itab` of the statement
-   [`FIND ... IN TABLE itab ...`](ABAPFIND_ITAB.html)

-   Functional operand positions in statements for internal tables

-   Internal table `itab` of the statement
-   [`READ TABLE itab ...`](ABAPREAD_TABLE.html)
-   Work area `wa` of the statement
-   [`READ TABLE ... FROM wa ...`](ABAPREAD_TABLE_KEY.html)
-   Internal table `itab` of the statement
-   [`LOOP AT itab ...`](ABAPLOOP_AT_ITAB.html)
-   Internal table `jtab` of the statement
-   [`INSERT LINES OF jtab INTO ...`](ABAPINSERT_ITAB_LINESPEC.html)
-   Work area `wa` of the statement
-   [`COLLECT wa INTO ...`](ABAPCOLLECT.html)
-   Internal table `jtab` of the statement
-   [`APPEND LINES OF jtab TO ...`](ABAPAPPEND_LINESPEC.html)
-   Work area `wa` of the statement
-   [`DELETE TABLE ... FROM wa ...`](ABAPDELETE_ITAB_KEY.html)

-   Functional operand positions in statements for UTC time stamps

-   Operand `tz` of the statement
-   [`CONVERT UTCLONG time_stamp TIME ZONE tz INTO...`](ABAPCONVERT_UTCLONG.html)
-   Operands `dat`, `tim`, `dst`, and `tz` of the statement
-   [`CONVERT DATE dat TIME tim DAYLIGHT SAVING TIME dst INTO UTCLONG ... TIME ZONE tz`](ABAPCONVERT_DATE_UTCLONG.html)
-   Operands `time_stamp` and `tz` of the statement
-   [`CONVERT TIME STAMP time_stamp TIME ZONE tz INTO ...`](ABAPCONVERT_TIME-STAMP.html)
-   Operands `dat`, `tim`, `dst`, and `tz` of the statement
-   [`CONVERT DATE dat TIME tim DAYLIGHT SAVING TIME dst INTO TIME STAMP ... TIME ZONE tz`](ABAPCONVERT_DATE_TIME-STAMP.html)

-   Functional operand positions in message processing

-   Operand `oref` of the statement
-   `MESSAGE [oref](ABAPMESSAGE_MSG.html) ...`
-   Operands `dobj1` to `dobj4` of the statement
-   `MESSAGE ...[WITH dobj1 ... dobj4](ABAPMESSAGE.html)`

-   Functional operand positions in statements for checkpoints

-   Operands `val1 val2` of the statement
-   [`ASSERT ... FIELDS val1 val2 ...`](ABAPASSERT.html)
-   Operands `val1 val2 ...` of the statement
-   [`LOG-POINT ... FIELDS val1 val2 ...`](ABAPLOG-POINT.html)

-   In addition to the standard functional operand positions, there are three [extended functional operand positions](ABENEXTENDED_FUNCTIONAL_POSITIONS.html) that can be used to specify certain built-in functions. These operand positions are obsolete and should not be used.
-   Special functional operand positions are all places in which a [relational expression](ABENRELATIONAL_EXPRESSION_GLOSRY.html) can be specified. Here, a single [functional method call](ABENFUNCTIONAL_METHOD_CALL_GLOSRY.html) can be specified as a [predicative method call](ABENPREDICATIVE_METHOD_CALL_GLOSRY.html). Other expressions with the exception of [predicate functions](ABENPREDICATE_FUNCTION_GLOSRY.html) or single data objects, again with the exception of an [obsolete short form](ABENLOGEXP_IN_SHORT_FORM.html), cannot be specified as [predicates](ABENPREDICATE_GLOSRY.html) of a relational expression.
-   In the [formatting options](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) of embedded expressions in string templates, the specification of `(dobj)` and `expr` for fixed values represents a combination of functional operand positions.

DATA ts TYPE timestamp. \\n... \\nCONVERT TIME STAMP cl\_abap\_tstmp=>normalize( ts ) TIME ZONE 'UTC' \\n INTO DATE FINAL(date) TIME FINAL(time). abenabap.html abenabap\_reference.html abenabap\_syntax.html abenabap\_statements.html abenoperand\_positions.html abenexpression\_positions.html abenexpression\_positions\_read.html