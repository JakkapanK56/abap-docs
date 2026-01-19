---
title: "ABAPINSERT_REPORT"
description: |
  ABAPINSERT_REPORT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINSERT_REPORT.htm"
abapFile: "ABAPINSERT_REPORT.html"
keywords: ["select", "insert", "loop", "do", "while", "if", "case", "try", "class", "data", "types", "ABAPINSERT", "REPORT"]
---

[Short Reference](ABAPINSERT_REPORT_SHORTREF.html)

`INSERT REPORT prog FROM itab`\\ 
              `[MAXIMUM WIDTH INTO wid]`\\ 
              `\{\ [KEEPING DIRECTORY ENTRY]`\\ 
              `|\ \{\ [PROGRAM TYPE pt]`\\ 
                  `[FIXED-POINT ARITHMETIC fp]`\\ 
                  `[VERSION vs]\ \}`\\ 
              `|\ [DIRECTORY ENTRY dir]\ \}.`

[1. `... MAXIMUM WIDTH INTO wid`](#ABAP_ADDITION_1@3@)

[2. `... KEEPING DIRECTORY ENTRY`](#ABAP_ADDITION_2@3@)

[3. `... PROGRAM TYPE pt`](#ABAP_ADDITION_3@3@)

[4. `... FIXED-POINT ARITHMETIC fp`](#ABAP_ADDITION_4@3@)

[5. `... VERSION vs`](#ABAP_ADDITION_5@3@)

[6. `... DIRECTORY ENTRY dir`](#ABAP_ADDITION_6@3@)

This statement passes the content of `itab` to the ABAP program specified in `prog` in the [repository](ABENREPOSITORY_GLOSRY.html) as source code. If a program with the specified name already exists, its source code is overwritten. Otherwise a new program with the name specified in `prog` and the source code from `itab` is created in the repository.

The additions for determining the [program properties](ABENPROGRAM_PROPERTY_GLOSRY.html) create the program properties in the system table `TRDIR`.

If none of the additions are specified, the following default values are set when a new program is created:

If none of the additions are specified, the properties of an existing program are preserved if it is overwritten, with the following exceptions:

For `itab`, only a standard table without [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html) is allowed. A source code line in `itab` must be character-like and can have a maximum of 255 characters. Trailing blanks are ignored for line types with a fixed length. `prog` must be a character-like flat data object, which can contain no more than 30 characters, and whose content is not case-sensitive.

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class `CL_ABAP_DYN_PRG` or the built-in function [`escape`](ABENESCAPE_FUNCTIONS.html).

If the addition `MAXIMUM WIDTH` is used, the number of characters of the longest source code line in `itab` is assigned to the variable `wid`, which must have data type `i`.

This addition is only effective when a program is overwritten. The statement behaves as if no additions are specified (see above), with the exception that the [ABAP language version](ABENABAP_VERSION_GLOSRY.html) remains intact in the overwritten program.

This addition defines the [program type](ABENPROGRAM_TYPE_GLOSRY.html) of the new or overwritten program in accordance with the content of `pt`. `pt` must be a data object of data type `c` with length 1 that contains a valid ID for a program type. The following table shows the case-sensitive IDs of all ABAP program types.

This addition defines the [fixed-point arithmetic](ABENFIXED_POINT_ARITHMETIC_GLOSRY.html) property of the new or overwritten program in accordance with the content of `fp`. `fp` must be a data object of data type `c` with length 1 that contains either the value *X* or blank. The value *X* sets the fixed-point arithmetic property, while the value blank deactivates it.

This addition specifies the [ABAP language version](ABENABAP_VERSIONS.html) for the new or overwritten program in accordance with the content of `vs`. `vs` must be a data object of data type `c` with a length of 1, which can have the following values as version ID:

Technically, the addition supplies the column `UCCHECK` of database table `TRDIR`. Values other than the ones shown here should not be specified. If incorrect values are specified as a literal and this is known statically, a syntax error occurs. Unknown values, on the other hand, are always saved in the database table `TRDIR`. Values not contained in the above table act as a version that does not support language elements.

An obsolete addition [`UNICODE ENABLING`](ABAPINSERT_REPORT_OBSOLETE.html) has the same meaning as `VERSION`.

This addition defines the [program properties](ABENPROGRAM_PROPERTY_GLOSRY.html) for the new or overwritten program in accordance with the content of `dir`. `dir` must be a structure of data type `TRDIR` from the ABAP Dictionary. The required program properties can be specified in the components of this structure. Invalid content produces invalid program properties. All program properties are obtained from `dir`, except for the creation and change dates, and the corresponding times, properties `program author` or `last changed by` properties, and the version numbers. The latter are set to the same values as if nothing were specified.

When using the addition `DIRECTORY ENTRY`, it is strongly recommended that the content of structure `dir` is set only by reading the properties of an existing program from database table `TRDIR`, and subsequently making specific changes to individual components.

Switches parts of a program to [Unicode](ABENUNICODE_GLOSRY.html). A program with the obsolete language version [Non-Unicode ABAP](ABENNON_UNICODE_ABAP_GLOSRY.html) is imported and the statement `DESCRIBE FIELD` is switched to the syntax for [Unicode systems](ABENUNICODE_SYSTEM_GLOSRY.html) as an example. The source code of the program is then overwritten with the modified source code and the [ABAP language version](ABENABAP_VERSION_GLOSRY.html) is set to [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html).

`CX_SY_WRITE_SRC_LINE_TOO_LONG`

-   The original language is set to the system language stored in the [profile parameter](ABENPROFILE_PARAMETER_GLOSRY.html)\\ `zcsa/system_language`.
-   The creation date and the date of last change, along with the corresponding times, are set to the current value.
-   The program properties `author` and `last changed by` are set to the current user.
-   The program status is set to active by default. The program is compiled when it is first executed.
-   The program type is set to [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html).
-   The application is set to the value of the current program.
-   No [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html) is linked with the program.
-   Fixed point arithmetic is activated.
-   The setting for the [ABAP language version](ABENABAP_VERSION_GLOSRY.html) is taken from the current program.

-   The date and time of the last change are set to the current value.
-   The property `last changed by` is set to the current user.
-   The version number is increased by one.
-   The [ABAP language version](ABENABAP_VERSION_GLOSRY.html) is set as follows:

-   If the current program is from the ABAP language version [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html), the overwritten program is always set to this language version.
-   The statement `INSERT REPORT` cannot currently be used in other ABAP language versions.

-   The statement `INSERT REPORT` must be used with extreme caution, because it can completely overwrite existing programs without warning. Any inadvertent overwriting can be prevented by checking whether the specified name already exists in the `NAME` column of the system table `TRDIR`.
-   If `INSERT REPORT` is used to create a new program, this program is not assigned to a package, which means it is not connected to the [Change and Transport System (CTS)](ABENCTS_GLOSRY.html). The program must either be assigned to a package in the ABAP Workbench or it is only suitable for temporary tasks in the current system.
-   It is vital to have a precise working knowledge of the structures and names of the program when using the statement `INSERT REPORT` for programs organized in a [master program](ABENMASTER_PROGRAM_GLOSRY.html) and using [include programs](ABENINCLUDE_PROGRAM_GLOSRY.html), if they were created in the ABAP Workbench.
-   The [program name](ABENPROGRAM_NAME_GLOSRY.html) that is created should comply with the naming conventions of the [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html) if it is to be processed using the tools in the workbench.
-   `INSERT REPORT` should be used in application programs in exceptional cases only. ABAP provides many other means of dynamic programming, which generally make creating source code dynamically unnecessary (see the list in [dynamic program processing](ABENABAP_LANGUAGE_DYNAMIC.html)).

-   *Cause:* A line in the source code contains more than 255 characters.
    *Runtime error:*\\ `INSERT_REPORT_LINE_TOO_LONG`\\
    

-   *Cause:* The program name `prog` begins with `'%_T'`. This prefix is reserved for temporary subroutine pools.
    *Runtime error:*\\ `INSERT_PROGRAM_INTERNAL_NAME`
-   *Cause:* The program name `prog` begins with a blank. This is not allowed.
    *Runtime error:*\\ `INSERT_PROGRAM_NAME_BLANK`
-   *Cause:* The program name `prog` is too long; it cannot be more than 40 characters long.
    *Runtime error:*\\ `INSERT_PROGRAM_NAME_TOO_LONG`
-   *Cause:* Suffix 2 in the program name `prog` is invalid or does not correspond to the specification `apptype`.
    *Runtime error:*\\ `INSERT_REPORT_BAD_APPENDAGE`
-   *Cause:* The specification `apptype` is invalid. Valid values are defined in the type pool `SREXT`.
    *Runtime error:*\\ `INSERT_REPORT_BAD_APPTYPE`
-   *Cause:* Suffix 1 in the program name `prog` is invalid or does not correspond to the specification `exttype`.
    *Runtime error:*\\ `INSERT_REPORT_BAD_EXTENSION`
-   *Cause:* The specification `exttype` is invalid. Valid values are defined in the type pool `SREXT`.
    *Runtime error:*\\ `INSERT_REPORT_BAD_EXTTYPE`
-   *Cause:* The value of the field `uc` is not `'X'` or `' '`.
    *Runtime error:*\\ `INSERT_REPORT_ILLEGAL_FLAG`
-   *Cause:* The value of the field `pt` is not `'1'`, `'I'`, `'S'`, `'M'`, `'F'`, `'J'`, or `'K'`.
    *Runtime error:*\\ `INSERT_REPORT_ILLEGAL_PROGTYPE`
-   *Cause:* The program name `prog` is longer than 30 characters and the program does not yet exist in the library. Without the addition `... APPENDAGE TYPE apptype`, the program cannot be inserted.
    *Runtime error:*\\ `INSERT_REPORT_NO_APPTYPE`
-   *Cause:* The program name `prog` is longer than 30 characters and the program does not yet exist in the library. Without the addition `... EXTENSION TYPE exttype`, the program cannot be inserted.
    *Runtime error:*\\ `INSERT_REPORT_NO_EXTTYPE`

DATA: itab TYPE TABLE OF string, \\n prog TYPE sy-repid, \\n uc TYPE trdir-uccheck. \\n\\ \\nFIELD-SYMBOLS TYPE string. \\n\\ \\nprog = ... \\nSELECT SINGLE uccheck \\n FROM trdir \\n WHERE name = @prog AND \\n uccheck = ' ' \\n INTO (@uc). \\n\\ \\nIF sy-subrc = 0. \\n READ REPORT prog INTO itab. \\n LOOP AT itab ASSIGNING . \\n TRANSLATE TO UPPER CASE. \\n IF CS 'DESCRIBE FIELD' AND \\n CS 'LENGTH' AND \\n NS 'MODE'. \\n REPLACE '.' IN WITH ' IN CHARACTER MODE.'. \\n ENDIF. \\n ... \\n ENDLOOP. \\n SYNTAX-CHECK FOR itab ... \\n IF sy-subrc = 0. \\n INSERT REPORT prog FROM itab VERSION 'X'. \\n ENDIF. \\nENDIF. `**sy-subrc**` **Meaning** 0 The program specified in `prog` was successfully created or overwritten. 4 An error occurred when creating or overwriting the program specified in `prog`. **ID** **Program Type**\\ 1 [Executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html)\\ F [Function pool](ABENFUNCTION_POOL_GLOSRY.html) (or function group) I [Include program](ABENINCLUDE_PROGRAM_GLOSRY.html)\\ J [Interface pool](ABENINTERFACE_POOL_GLOSRY.html)\\ K [Class pool](ABENCLASS_POOL_GLOSRY.html)\\ M [Module pool](ABENMODUL_POOL_GLOSRY.html)\\ S [Subroutine pool](ABENSUBROUTINE_POOL_GLOSRY.html)\\ T [Type pool](ABENTYPE_POOL_GLOSRY.html) or type group **vs** **ABAP Language Version** **Meaning**\\ `X` [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html) Basic version, [Unicode check](ABENUNICODE_CHECK_GLOSRY.html) activated `2` \\ [ABAP for Key Users](ABENABAP_FOR_KEY_USERS_GLOSRY.html) Restricted language scope for enhancements by key users `3` \\ [Static ABAP with restricted object use](ABENABAP_STATIC_RESTR_GLOSRY.html) Restricted use of external [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html), dynamic language elements are not allowed `4` \\ [Standard ABAP with restricted object use](ABENSTANDARD_ABAP_RESTR_OBJ_GLOSRY.html) Restricted use of external [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html), dynamic language elements are allowed `5` \\ [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html) Restricted language scope for developments in the [SAP Business Technology Platform](ABENSAP_BTP_GLOSRY.html). `-` [Non-Unicode ABAP](ABENNON_UNICODE_ABAP_GLOSRY.html) Obsolete, [Unicode check](ABENUNICODE_CHECK_GLOSRY.html) deactivated abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_language\_dynamic.html abenabap\_generic\_program.html