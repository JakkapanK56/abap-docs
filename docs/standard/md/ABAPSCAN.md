---
title: "I (identifier)"
description: |
  S (string, i.e. character literal) L (list, enclosed in parentheses) C (comment) B (beginning of a list) D (separator between list elements) E (end of a list)  Types B, D, and E can only occur if the addition WITH LIST TOKENIZATION is specified. `ROW` Number of row where token occurs or where it
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSCAN.htm"
abapFile: "ABAPSCAN.html"
keywords: ["select", "insert", "delete", "loop", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "ABAPSCAN"]
---

**This statement is for internal use only. \\nIt must not be used in application programs.**

[1. `SCAN ABAP-SOURCE itab1 ... TOKENS INTO itab2`](#ABAP_VARIANT_1@1@)

[`... STATEMENTS INTO itab3.`](#ABAP_VARIANT_1@1@)

[2. `SCAN AND CHECK ABAP-SOURCE itab1 ... RESULT INTO itab2.`](#ABAP_VARIANT_2@1@)

[1. `... FROM n1`](#ABAP_ADDITION_1@3@)

[2. `... TO n2`](#ABAP_ADDITION_2@3@)

[3. `... KEYWORDS FROM itab`](#ABAP_ADDITION_3@3@)

[4. `... LEVELS INTO itab`](#ABAP_ADDITION_4@3@)

[5. `... STRUCTURES INTO itab`](#ABAP_ADDITION_5@3@)

[6. `... OVERFLOW INTO c1`](#ABAP_ADDITION_6@3@)

[7. `... WITH ANALYSIS`](#ABAP_ADDITION_7@3@)

[8. `... WITH DECLARATIONS`](#ABAP_ADDITION_8@3@)

[9. `... WITH BLOCKS`](#ABAP_ADDITION_9@3@)

[10. `... WITH COMMENTS`](#ABAP_ADDITION_10@3@)

[11. `... WITH PRAGMAS pragmas`](#ABAP_ADDITION_11@3@)

[12. `... WITH INCLUDES [IMPLEMENTATIONS FROM itab]`](#ABAP_ADDITION_12@3@)

[13.  `... WITH TYPE-POOLS`](#ABAP_ADDITION_13@3@)

[14. `... WITH LIST TOKENIZATION`](#ABAP_ADDITION_14@3@)

[15. `... PRESERVING IDENTIFIER ESCAPING`](#ABAP_ADDITION_15@3@)

[16. `... WITHOUT TRMAC`](#ABAP_ADDITION_16@3@)

[17. `... [INCLUDE] PROGRAM FROM c2`](#ABAP_ADDITION_17@3@)

[18. `... INCLUDE INTO c3`](#ABAP_ADDITION_18@3@)

[19. `... MESSAGE INTO c4`](#ABAP_ADDITION_19@3@)

[20. `... WORD INTO c5`](#ABAP_ADDITION_20@3@)

[21. `... LINE INTO n3`](#ABAP_ADDITION_21@3@)

[22. `... OFFSET INTO n4`](#ABAP_ADDITION_22@3@)

[23. `... WITH EXPLICIT ENHANCEMENTS [IMPLEMENTATIONS FROM itab]`](#ABAP_ADDITION_23@3@)

[24. `... WITH IMPLICIT ENHANCEMENTS [IMPLEMENTATIONS FROM itab]`](#ABAP_ADDITION_24@3@)

[25. `... ENHANCEMENT OPTIONS INTO itab`](#ABAP_ADDITION_25@3@)

[26. `... ENHANCEMENTS INTO itab`](#ABAP_ADDITION_26@3@)

[27. `... WITH INACTIVE ENHANCEMENTS`](#ABAP_ADDITION_27@3@)

[28. `... FRAME PROGRAM FROM c2`](#ABAP_ADDITION_28@3@)

[29. `... REPLACING itab`](#ABAP_ADDITION_29@3@)

Breaks down the ABAP source code contained in the source code table `itab1` into tokens according to the rules of the ABAP scanner. The tokens are returned (one for each line) in the token table `itab2`. The source code to be broken down must not necessarily be contained in an internal table. It can be specified in any character-like field. Especially fields of the type `STRING` can be used. However, this variant only makes sense if the program to be broken down does not contain any comments. When an internal table is specified, `itab1` must be a standard table.
\\
The token table `itab2` must be a standard table and have the structure `STOKES`. If the addition `WITH ANALYSIS` is specified, the token table must have the extended structure `STOKESX`.
(For reasons of downward compatibility, `STOKEN` and `STOKEX` can still be used. The main difference is that in the new structures the character string which makes up the token is typed with the data type `string`. With the structures `STOKEN` and `STOKEX`, a `c` field of length 30 and an `OVERFLOW` area are used instead.)
\\
Normally, comments are filtered out and subordinate source code units ([include programs](ABENINCLUDE_PROGRAM_GLOSRY.html), called [macros](ABENMACRO_GLOSRY.html)) are ignored. These semantics can be affected by using the additions `WITH COMMENTS` and `WITH ANALYSIS`.
\\
In addition to subdividing the source code into tokens, the tokens are combined into statements respecting the colon-comma logic to form chained statements and the statement table `itab3` contains a statement description for each line. Here, a [three-part chained statement](ABENCHAINED_STATEMENT_GLOSRY.html)\\ *a: b, c1 c2, d.* produces the three entries *a b,*, *a c1 c2,*, and *a d.* in the statement table `itab3`.
\\
The statement table `itab3` must be a standard table without secondary keys and have the structure `SSTMNT`.
\\
The statement classification characters colon, comma, and period are not returned in the token table `itab2`. Instead, the table `itab3` contains information about the position of a colon or the type (comma or period) and position of the end marker in the statement description.

If a runtime error occurs in the scanner (`sy-subrc` has the value 8), a database rollback is executed as usual.

**Components of the Structure `STOKES`**

The fields of the structure `STOKES`, and thus the columns of the token table `itab2`, have the following meaning:

`TYPE`

Type of token with possible values: 
\\ 
I (identifier) 
S (string, i.e. character literal) 
L (list, enclosed in parentheses) 
C (comment) 
B (beginning of a list) 
D (separator between list elements) 
E (end of a list) 
\\ 
Types B, D, and E can only occur if the addition WITH\\ 
LIST TOKENIZATION is specified. 

`ROW`

Number of row where token occurs or where it begins (>= 1) \\n

`COL`

Offset of first character of token relative to start of row (>= 0) \\n

`STR`

Character string forming the token.

If the structure `STOKEN` is specified, three more fields are filled and the following must be considered:

`STR`

The character string forming the token contains only the first part if the character string is longer than 30. \\n

`LEN`

Length of the token \\n

`OVFL`

Overflow flag for field STR with the following possible values: 
\\ 
SPACE (no overflow, token fits completely in field STR) 
*X* (overflow, either not caught (no overflow area specified) or token fits in overflow area c1) 
O (overflow of token and overflow of overflow area c1) 

`OFF1`

Offset in overflow area, if 
\\ 
token does not fit completely in field STR and 
an overflow area c1 is specified and 
token fits completely into the overflow area c1.

**Components of the Structure `SSTMNT`**

The fields of the structure `SSTMNT`, and thus the columns of the statement table `itab3`, have the following meaning:

`TYPE`

Type of statement with possible values: 
\\ 
E ([Native SQL](ABENNATIVE_SQL_GLOSRY.html) statement between [`EXEC SQL`](ABAPEXEC.html) and ENDEXEC or implementation of an [AMDP method](ABENAMDP_METHOD_GLOSRY.html) between [`METHOD - BY DATABASE PROCEDURE, FUNCTION`](ABAPMETHOD_BY_DB_PROC.html) and ENDMETHOD) 
I (INCLUDE prog) 
J (INCLUDE prog, prog does not exist, can occur only in connection with the addition WITH INCLUDES) 
T (TYPE-POOLS pool) 
V (TYPE-POOLS pool, pool does not exist) 
R (call a macro from table TRMAC) 
D (call a macro created internally with DEFINE) 
M (macro definition between DEFINE and END-OF-DEFINITION) 
C (COMPUTE statement, sometimes without COMPUTE as first token) 
A (method call in short form) 
K (other ABAP key word) 
N (empty statement) 
P (comment between statements) 
S (comment within statements) 
U (unknown, non-empty statement) 

`LEVEL`

Index of the associated source code unit in the level table itab specified after LEVELS INTO (>= 1, if level table specified, else 0). 

`STRUC`

Index of the statement in the structure table itab specified after STRUCTURES INTO (0 if the structure table is not specified or the structure in which the statement occurs could not be constructed). 

`FROM`

Index of first token of the statement in the token table itab2 (FROM = TO + 1, if the statement consists only of the end marker (comma or period)) 

`TO`

Index of last token of the statement in the token table itab2 (the end marker of the statement no longer counts as a token) 

`NUMBER`

Sequential statement counter within a source code unit. Covers all statements, regardless of how many are actually selected in cases where a keyword table itab is specified after KEYWORDS FROM\\ 

`PREFIXLEN`

Number of tokens before the colon (with chained statements >= 1, otherwise 0) \\n

`COLONROW`

Row number of colon (with chained statements >= 1, otherwise 0) \\n

`COLONCOL`

Column number of colon (with chained statements >= 0, otherwise 0) \\n

`TERMINATOR`

 End marker of a statement (normally a period or a comma, but space in the case of embedded Native SQL statements and internal macro definitions) 

`TROW`

Row number of the end marker  (>= 1, if TERMINATOR <> SPACE, else 0) 

`TCOL`

Column position of the end marker (>= 0, if TERMINATOR <> SPACE, else 0) 

`ENHMT`

Index in the enhancement table of type SENHMT, if the statement was enhanced or originates completely from an enhancement implementation. If addition ENHANCEMENTS INTO itab is not specified, this value is always 0.

Breaks down the source code table `itab1` into tokens not from start to finish, but only from line `n1` to line `n2`.
\\
The additions `FROM n1` and `TO n2` must, in this order, follow the specified source code table `itab1`.

Does not return all statements, only those specified in the keyword table `itab`.
\\
If the key word table is empty (i.e. it contains 0 lines), all the statements are selected.
\\
The lines of the key word table are handled like a text field. It must be a standard table without secondary keys.
\\
To select an embedded [Native SQL](ABENNATIVE_SQL_GLOSRY.html) statement or a macro definition, the pseudo keywords `EXEC_SQL` or `DEFINE_MACRO` can be specified. It makes no difference whether the statements `EXEC` or `DEFINE` occur as well. Native SQL statements and macro definitions are returned as one statement of type E or M, even if the expansion of a macro definition results in more than one statement.
\\
If the key word table contains an empty line, empty statements are also selected.

Stores details about each processed source code unit (source code table `itab1` itself, resolved [include programs](ABENINCLUDE_PROGRAM_GLOSRY.html), resolved macro definitions) in the level table `itab`.
\\
A level table should only be specified with the additions `WITH INCLUDES` or `WITH IMPLICIT ENHANCEMENTS`.
\\
The level table `itab` must have the structure `SLEVEL`. It must be a standard table without secondary keys.

The fields of the structure `SLEVEL`, and therefore the columns of the level table `itab`, have the following meaning:

`TYPE`

Type of source code unit with possible values: 
\\ 
P (program) 
D (program-internal DEFINE macro) 
R (macro from table TRMAC) 

`NAME`

Name of source code unit (name of include program, macro name) \\n

`DEPTH`

Current nesting depth of source code unit (>= 1) \\n

`LEVEL`

Index of superior (i.e. including or calling) source code unit in the level table (>= 1, if DEPTH >= 2, otherwise 0) 

`STMNT`

Index of superior (i.e. including or calling) statement in the statement table (>= 1, if DEPTH >= 2, otherwise 0) 

`FROM`

Index of first statement of source code unit in the statement table (>= 1) \\n

`TO`

Index of last statement of source code unit in the statement table (>= 1) \\n

If the source code unit contains include programs or macro calls, the line interval \[`FROM, TO`\] in the statement table also covers the statements in subordinate source code units.

Enhancements of type E are stored as regular includes in the level table.

Details of the construction of the source code table `itab1` are written to the structure table `itab`.
\\
The structure table `itab` must have the structure `SSTRUC`. It must be a standard table without secondary keys.

If the addition `STRUCTURES INTO` is used, it is essential that `itab2` has the type `STOKES` or `STOXESX`. If not, tokens may be cut off and the structure analysis could terminate in the worst case.

The fields in `SSTRUC`, and therefore the columns of structure table `itab`) have the following meanings:

`TYPE`

Type of structure with possible values: 
P (beginning of the source code) 
R (subroutine) 
M (macro, EXEC SQL) 
I (loop) 
A (case distinction) 
C (condition in a case distinction) 
J (jump command) 
D (structured declaration) 
E (event) 
S (sequence of statements with simple structures) 

`STMNT_TYPE`

The statement type of the beginning of the structure. The values are listed in the type pool SCAN in structure SCAN\_STRUC\_STMNT\_TYPE. 

`KEY_START`

Flags whether the start of the structure is described syntactically ('X' if there is a special statement, otherwise ' '). 

`KEY_END`

Flags whether the end of the structure is described syntactically ('X' if there is a special statement, otherwise ' '). 

`STMNT_FROM`

Index of the first statement of the structure in the statement table itab3. 

`STMNT_TO`

Index of the last statement of the structure in the statement table itab3. 

`STRUC_FROM`

Index of the first substructure of the structure in structure table itab. 

`STRUC_TO`

Index of the last substructure of the structure in structure table itab. 

`BACK`

Index of the structure in the structure table itab that contains the structure as a substructure (0 if the structure is the root structure of a structure tree). 

If the program that is executed for the statement has incorrect syntax, the behavior is undefined.

This addition is only allowed and required if the token table `itab2` has the structure `STOKEN` or `STOKEX`.
If a token is too large to be stored in the token table in the field `STR`, it is stored in the overflow area `c1`. The offset of the token in the overflow area then lies in the token table in the field `OFF1`.

Breaks down each token `t = a+b(c)` according to the logic of the RSYN key word `ANALYSIS` into its three components a, b, and c.
\\
Offset and length of components a, b and, c are stored in the fields `LEN1`, `OFF2`, `LEN2`, `OFF3`, and `LEN3` in the token table. (The offset of `OFF1` is always 0 and therefore not required.)
\\
If the addition `WITH ANALYSIS` is specified, the token table `itab2` must have the structure `STOKESX`, so that the fields `LEN1`, `OFF2`, `LEN2`, `OFF3` and `LEN3` are available.

If the token table has the structure `STOKEX`, the following must be noted:
If the token exists completely in the token table, the offset specifications are relative to the token start. If the token is in the overflow area `c1`, the offsets specified are relative to the start of the overflow area.

Returns all declarative statements and all statements with [inline declarations](ABENINLINE_DECLARATION_GLOSRY.html).

Returns all statements that define a processing block or a statement block.

Also returns comments, with each individual comment representing a token. Also writes entries for each cohesive block of comments to the table `itab3`. Here, a distinction is made between comments within statements and comments at program level. In `itab3`, an entry for a comment within a statement always comes before the statement containing the comment.

Assuming the following program fragment. The prefixed numbers are the indexes of the tokens. \\n

1    \* An example\\ 
2    \* with scattered comments\\ 
6    MOVE\\ 
3    \* inserted comment 1\\ 
7    X\\ 
4    \* inserted comment 2\\ 
8    TO\\ 
9    Y\\ 
5    \* inserted comment 3.

`SCAN` then enters the following values for the components `TYPE`, `FROM` and `TO` (in this order from left to right) into `itab3`.

If the addition `WITH COMMENTS` is used, the table `itab2` must have the line type `STOKES` or `STOKESX`.

This addition returns all relevant pragmas for each statement before the first correct token of the statement but after a block of comments collected using the addition `WITH COMMENTS`. `pragmas` expects a data object of the type `c` with length 1, usually containing the value *\**. Other values are intended for and recognized by special test tools.

A block of pragmas is combined in the statement table under the statement type *G*. In this way, the block sequence applies to a statement which contains comments and matching pragmas *S-G-K*.

Pragmas that are not intended for the ABAP Compiler are searched for in the `TRPRAGMA` database table.

Illegal (for example, unknown or lexically incorrect) pragmas are processed in the same way as legal pragmas, that is, they are summarized in a block preceding the actual statement (ID *G*). This corresponds to the behavior of the scanner in the compiler.

Also breaks down subordinate source code units (include programs, called macros) into tokens.

In particular, any existing [source code plug-ins](ABENSOURCE_CODE_PLUGIN_GLOSRY.html) of explicit and implicit [enhancement options](ABENENHANCEMENT_POINT_GLOSRY.html) which may exist are automatically inserted into the source code to be broken down. The optional addition `IMPLEMENTATIONS FROM itab` can be used to limit the number of inserted enhancements to the number specified in `itab`. If `itab` is empty, any enhancements are ignored. `itab` must be a standard table without secondary keys.

This addition has the same effect as the `WITH INCLUDES` addition, whereby include programs belonging to [type pools](ABENTYPE_POOL_GLOSRY.html) are broken down into tokens.

Tokens of the form `(a1, a2, a3)` are not returned as tokens but broken down into the elementary components.

By default, exclamation marks in front of labels are deleted. Exclamation marks can be used to distinguish between labels and key words. This addition prevents their deletion.

If a statement does not start with an `ABAP` keyword or with a `DEFINE` macro, the system does not check whether this is a `TRMAC` macro but assumes that the statement is unknown. (Unknown statements are flagged in the statement table `itab3` with a U in the field `TYPE`.)
\\
To avoid unnecessary database accesses to the table `TRMAC`, the addition `WITHOUT TRMAC` should be used whenever it is assumed that the source code to be scanned contains unknown statements. Unknown statements are particularly likely to occur if the addition `FROM n1` is used, because the scanner does not start at the beginning of the source code, but within the source code.

If `WITHOUT TRMAC` is combined with `WITH INCLUDES`, `TRMAC` macros are not resolved because the system does not recognize them as subordinate source code units.

The above additions have the same effect as the corresponding additions in the statement [`SYNTAX-CHECK`](ABAPSYNTAX-CHECK_FOR_ITAB.html): `c2` is an input field for a program name to be assigned to the source code, the fields `c3, c4, c5, n3`, and `n4` are output fields, used when errors occur.

In ABAP release 7.00, the addition `PROGRAM FROM` was renamed as `INCLUDE PROGRAM FROM` to clarify the difference between the compilation unit and the source code unit to be broken down. If the addition is used in its previous form `PROGRAM FROM`, it sets the compilation unit and the source code text unit to be scanned at the same time.
\\
To be able to analyze error situations without modifying programs, it is vital that the additions `INCLUDE INTO`, `MESSAGE INTO`, `WORD INTO`, `LINE INTO`, and `OFFSET INTO` are specified. These additions return information about the error that occurred.

When `WITH EXPLICIT ENHANCEMENTS` is specified, the existing [source code plug-ins](ABENSOURCE_CODE_PLUGIN_GLOSRY.html) for explicit [enhancement points](ABENENHANCEMENT_POINT_GLOSRY.html) are automatically inserted into the source code to be broken down.

The optional addition `IMPLEMENTATIONS FROM` can limit the number of inserted enhancements to the number specified in `itab`. If `itab` is empty, any enhancements are ignored.

When `WITH IMPLICIT ENHANCEMENTS` is specified, the existing [source code plug-ins](ABENSOURCE_CODE_PLUGIN_GLOSRY.html) for implicit [enhancement points](ABENENHANCEMENT_POINT_GLOSRY.html) are automatically inserted into the source code to be broken down.

The optional addition `IMPLEMENTATIONS FROM` can limit the number of inserted enhancements to the number specified in `itab`. If `itab` is empty, any enhancements are ignored.

The description table `itab` stores information about the enhancement options available in the source code unit. Specifying the addition is therefore only useful together with the additions `WITH INCLUDES`, `WITH EXPLICIT ENHANCEMENTS`, or `WITH IMPLICIT ENHANCEMENTS`.

The level table `itab` must be a standard table without a secondary key and must have the line structure `SEOPTN` whose fields have the following meaning:

`LEVEL`

Index of the associated entry in the level table. If this information is required, the addition LEVELS INTO must be specified at the same time to fill the level table.

`ROW`, `COL`

Position of the enhancement option in the source code. This position is not unique, since enhancements can be inserted into all blanks around the position specified by ROW and COLUMN.

`FULL_NAME`

Full name of the enhancement option. This name uniquely identifies an implicit enhancement option.

`TYPE`

The type of enhancement option. I stands for an implicit enhancement option and E for an explicit enhancement option.

`MODE`

The mode of the enhancement option. Type S is for static, type D is for dynamic, and type A is for any enhancement option.

`ENHMT`

Index of the first associated enhancement implementation in the enhancement table or 0 if the enhancement option is not implemented. If this information is required, the addition ENHANCEMENTS INTO must be specified at the same time to fill the enhancement table.

Details about the enhancement implementations in the source code that is being processed are stored in the enhancement table `itab`. It therefore only makes sense to specify an enhancement table together with additions `WITH INCLUDES`, `WITH EXPLICIT ENHANCEMENTS`, or `WITH IMPLICIT ENHANCEMENTS`.

The enhancement table `itab` must be a standard table without secondary keys and have the line structure `SENHMT`, whose fields have the following meaning:

`ENHMT`

The index of the superior enhancement. \\n

`STMNT`

The index of the statement in the statement table to which the enhancement is connected (such as ENHANCEMENT-POINT for explicit enhancements or METHOD for an implicit enhancement of a method implementation). 

`FROM`

For regular enhancements (type *E*), this is the index of the first statement of the enhancement in the statement table. For fragmentary enhancements (type *F*), this is the index of the first token of the enhancement in the token table. \\n

`TO`

For regular enhancements (type *E*), this is the index of the last statement of the enhancement in the statement table. For fragmentary enhancements (type *F*), this is the index of the first token of the enhancement in the token table. \\n

`NAME`

Name of the enhancement. \\n

`INCLUDE`

Name of the include that contains the implementation of the enhancement. \\n

`ID`

Internal ID of the enhancement implementation within the implementation include. \\n

`TYPE`

Type of the enhancement. Type *E* stands for a regular enhancement with one or more complete statements. Type *F* stands for a fragmentary enhancement of one or more tokens within an individual statement. \\n

`MODE`

Mode of the enhancement: *D* (dynamic) or *S* (static).

This addition is only possible with `ENHANCEMENTS INTO`. If `WITH INACTIVE ENHANCEMENTS` is specified as well, deactivated or overwritten enhancement implementations are respected. For these, the values *e* and *f* are stored instead of *E* and *F* in the `TYPE` column of the `itab` enhancement table.

Using this addition, the compilation unit is specified to the source code unit to be broken down. This is necessary, especially for inserting [source code plug-ins](ABENSOURCE_CODE_PLUGIN_GLOSRY.html) correctly.

With regard to the compilation unit, it is important to note that even if this addition is specified, the `SCAN` statement is not processed. The statement `SCAN` always only processes the passed source code and any included type pools or include programs. To process an include program in its context, the compilation unit itself must be passed, whereby any non-relevant include programs can be hidden using the addition `REPLACING`. As an alternative to using `REPLACING`, a mock compilation unit, which creates the correct context for include programs to be processed but remains empty the rest of the time, is also possible.

Individual `INCLUDE` statements can be overridden by specifying an internal table of type `SREPTAB`. If `itab` contains an entry *INCL* in column `name`, the statement `INCLUDE incl` does not read the include `INCL`. Instead the source code from column `itab-source` is inserted.

It has the same effect as the addition `REPLACING` of the internal statement [`SYNTAX-CHECK FOR PROGRAM`](ABAPSYNTAX-CHECK_FOR_PROGRAM.html). However, the entry `itab-trdir` is ignored.

`itab` must be a standard table without secondary keys.

[1. `... PROGRAM FROM c1`](#ABAP_ADDITION_1@3@)

[2. `... INCLUDE INTO c2`](#ABAP_ADDITION_2@3@)

[3. `... MESSAGE INTO c3`](#ABAP_ADDITION_3@3@)

[4. `... WORD INTO c4`](#ABAP_ADDITION_4@3@)

[5. `... LINE INTO n1`](#ABAP_ADDITION_5@3@)

[6. `... OFFSET INTO n2`](#ABAP_ADDITION_6@3@)

Checks the syntax of the program in table `itab1`. This check writes all information collected about the program, such as statement structures, statements, tokens, data objects, or types, to the variable `result`. Here, `result` must have the type `SYSCH_RESULT`, defined in the [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `SYSCH`.

The above additions have the same meaning as the corresponding additions in the statement [`SYNTAX-CHECK`](ABAPSYNTAX-CHECK_FOR_ITAB.html): `c1` is an input field for a program name to be assigned to the source code, the fields `c2, c3, c4, n1`, and `n2` are output fields, used when errors occur.
\\
To enable errors to be analyzed without the program being modified, the additions `INCLUDE`, `MESSAGE`, `WORD`, `LINE`, and `OFFSET` must be specified to return information about the error that occurred.

`CX_SY_SCAN_SOURCE_TOO_WIDE`

-   When macro calls are expanded, no position specifications are available. The corresponding fields in the token table `itab2` and in the statement table `itab3` are then set to 0.
-   Unlike in the usual syntax check, the following are **not** handled as errors:
-   Comma without preceding colon (the comma then acts as a punctuation mark),
-   Open chained statement sequence at end of source code, that is, the last statement is closed by a comma, not by a period,
-   Open sentence at the end of the source code, that is, the last statement is closed neither by a period nor by a comma.
-   To enable errors to be analyzed without the program being modified, the additions `INCLUDE`, `MESSAGE`, `WORD`, `LINE`, and `OFFSET` must be specified to return information about the error that occurred.

-   When using the specified start `n1`, the addition `WITHOUT TRMAC` must be used to ensure that there are no unnecessary database accesses to the table `TRMAC`.
-   The specified end `n2` is handled as *soft*, meaning a statement that begins on a line <= `n2`, but ends only on a line >\\ `n2`, is returned completely.
-   If the specified end `n2` splits a [chained statement](ABENCHAINED_STATEMENT_GLOSRY.html), only the split part up to the next comma is returned completely, not the entire chained statement up to the next period.
-   Negative line specifications are not allowed and result in a runtime error.
-   A line specification of 0 is essentially equivalent to no specification.
-   If `n1` > number of lines in source code table, the scanner is not called (`sy-subrc` = 2).
-   If `n1` >\\ `n2` and `n2` > 0, the scanner is not called (`sy-subrc = 2`).

-   The addition `WITH INCLUDES` should normally be combined with the addition `LEVELS INTO`\\ `itab`.
-   If (at least) one include program does not exist, `sy-subrc` is set to 1 and the corresponding `INCLUDE` statement is flagged in the statement table `itab3` by the statement type J (instead of I), but the breakdown process continues. The level table `itab` contains no entry for [include programs](ABENINCLUDE_PROGRAM_GLOSRY.html) that do not exist.
-   If `WITH INCLUDES` is combined with the addition `WITHOUT TRMAC`, `TRMAC`\\ [macros](ABENMACRO_GLOSRY.html) are not expanded because the system does not recognize them as subordinate source code units.
-   When macro calls are expanded, no position specifications are available. The corresponding fields in the token table `itab2` and in the statement table `itab3` are then set to 0.
-   The additions `FRAME PROGRAM FROM` and `INCLUDE PROGRAM FROM` are required to correctly resolve the source code enhancements.
-   The addition `INCLUDE PROGRAM FROM` is required to resolve the include programs for methods of global classes.

-   The additions `FRAME PROGRAM FROM` and `INCLUDE PROGRAM FROM` can be used, especially for explicit enhancement points, to find out the name of the compilation unit or the name of the current include program. These names are used to determine the full names of explicit enhancement options.
-   The addition `ENHANCEMENT OPTIONS INTO` is independent of the addition `ENHANCEMENTS INTO` and they can be used at the same time.

-   For enhancements to be identified correctly, it is imperative that the additions `FRAME PROGRAM FROM` and `INCLUDE PROGRAM FROM` are specified correctly.
-   Multiple fragmentary enhancements can exist for a statement. In this case, the statement table refers to the entry in the first enhancement in the enhancement table. All other enhancements are connected directly to this and can be identified uniquely using the `STMNT` field.
-   The addition `ENHANCEMENT INTO` is independent of the addition `ENHANCEMENTS OPTIONS INTO` and they can be used at the same time.

-   *Cause:* A string was passed that is longer than 32767 characters, or a string table that contains a line with more than 32767 characters.
    *Runtime error:*\\ `SCAN_SOURCE_TOO_WIDE`

`**sy-subrc**` **Meaning** 0 Non-empty source code table broken down into tokens without errors. 1 Non-empty source code table broken down into tokens, but at least one include program did not exist (can occur only in connection with the addition `WITH INCLUDES`). 2 Source code table `itab1` is empty or a blank line interval was selected (with the additions `FROM` and `TO`). 4 Scanner detects errors in the source code. 8 Other error or runtime error in scanner. 'P' 1 2 'S' 3 5 'K' 6 9 abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_language\_dynamic.html abenabap\_generic\_program.html abengeneric\_internal.html