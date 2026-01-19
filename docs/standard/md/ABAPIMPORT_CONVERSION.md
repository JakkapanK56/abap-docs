---
title: "ABAPIMPORT_CONVERSION"
description: |
  ABAPIMPORT_CONVERSION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPIMPORT_CONVERSION.htm"
abapFile: "ABAPIMPORT_CONVERSION.html"
keywords: ["do", "if", "case", "class", "data", "types", "internal-table", "ABAPIMPORT", "CONVERSION"]
---

[Short Reference](ABAPIMPORT_SHORTREF.html)

`... \{\ \{\ \{\ \{[ACCEPTING PADDING]\ [ACCEPTING TRUNCATION]\}`\\ 
        `|\ [IGNORING STRUCTURE BOUNDARIES]\ \}`\\ 
        `[IGNORING CONVERSION ERRORS [REPLACEMENT CHARACTER rc]]\ \}`\\ 
    `|\ [IN CHAR-TO-HEX MODE]\ \}`\\ 
    `[CODE PAGE INTO cp]`\\ 
    `[ENDIAN INTO endian].`

[1. `... ACCEPTING PADDING`](#ABAP_ADDITION_1@3@)

[2. `... ACCEPTING TRUNCATION`](#ABAP_ADDITION_2@3@)

[3. `... IGNORING STRUCTURE BOUNDARIES`](#ABAP_ADDITION_3@3@)

[4. `... IGNORING CONVERSION ERRORS [REPLACEMENT CHARACTER rc]`](#ABAP_ADDITION_4@3@)

[5. `... IN CHAR-TO-HEX MODE`](#ABAP_ADDITION_5@3@)

[6. `... CODE PAGE INTO cp`](#ABAP_ADDITION_6@3@)

[7. `... ENDIAN INTO endian`](#ABAP_ADDITION_7@3@)

These additions allow the reading of data stored in [data clusters](ABENDATA_CLUSTER_GLOSRY.html) into non-type-compliant data objects and define associated conversion rules. The following table shows which of the additions may be used during imports from the various buffers. The column headers are abbreviations for the following storage locations: [`DATA BUFFER`](ABAPIMPORT_MEDIUM.html) (`B`), [`MEMORY`](ABAPIMPORT_MEDIUM.html) (`M`), [`SHARED MEMORY`](ABAPIMPORT_MEDIUM.html) (`SM`), [`SHARED BUFFER`](ABAPIMPORT_MEDIUM.html) (`SB`), [`DATABASE`](ABAPIMPORT_MEDIUM.html) (`DB`), and [`INTERNAL TABLE`](ABAPIMPORT_MEDIUM.html) (`IT`).

This addition extends the rules from [`parameter_list`](ABAPIMPORT_PARAMETERLIST.html) for different data types of source field and target field `dobj` in the data clusters:

The rule that substructures in a target structure can have more components than the source structure can cause problems in relation to structures defined in the ABAP Dictionary. This is the case if the structure there is marked as extendable. Therefore, this situation raises a warning from the extended program check.

Without the addition `ACCEPTING PADDING`, the structure `f1` in the data cluster could not be imported into the structure `f2` since a substructure of `f2` contains a surplus component.

This addition expands the rules from [`parameter_list`](ABAPIMPORT_PARAMETERLIST.html) for different data types of source field in the data cluster and target field `dobj` in the data cluster. This means that, in the case of structures that otherwise have the same type, if the source structure at the highest level has more components than the target structure in the data cluster, the surplus components are cut off. A substructure of the source structure must not have more components than the corresponding substructure in the target structure.

Without the addition `ACCEPTING TRUNCATION`, the structure `f1` in the data cluster could not be imported into the structure `f2` since `f2` contains fewer components.

This addition expands the rules from [`parameter_list`](ABAPIMPORT_PARAMETERLIST.html) for different data types of source field in the data cluster and target field `dobj` in the data cluster. In structures, this produces an insignificantly different setup, with the differences resulting from substructures or from various applied components of other structures with the statement [`INCLUDE`](ABAPINCLUDE_TYPE.html). The components of source and target structure are all considered on one level, regardless of the setup inherited from substructures or from components applied using `INCLUDE`. Any [alignment gaps](ABENALIGNMENT_GAP_GLOSRY.html) that have resulted from substructures are irrelevant.

The addition `IGNORING STRUCTURE BOUNDARIES`, however, restricts the rules from [`parameter_list`](ABAPIMPORT_PARAMETERLIST.html) in such a way that once the substructures or inherited components in the target structure are resolved, a last component of type `c` cannot have a different length and the target structure cannot have any additional components. The addition cannot be used together with the additions `ACCEPTING PADDING` and `ACCEPTING TRUNCATION`.

Without the addition `IGNORING STRUCTURE BOUNDARIES`, the structure `f1` in the data cluster could not be imported into the structure `f2` since `f1` and `f2` are set up differently from substructures.

This addition suppresses an exception of the class `CX_SY_CONVERSION_CODEPAGE`, which is raised when a conversion to another [code page](ABENCODEPAGE_GLOSRY.html) is carried out during the import, and a character does not exist in the target code page.

If the addition `REPLACEMENT CHARACTER` is specified, each non-convertible character is replaced during the conversion by the character in `rc`. `rc` expects a character-like data object containing a single character. If the addition is not specified, the character *#* is used as a replacement character.

The addition `IGNORING CONVERSION ERRORS` also suppresses the exception if the number of bytes of an imported character-like component increases during a conversion to another code page, and therefore does no longer fit into the target object. If the addition is specified, surplus characters are cut off on the right. If the addition is not specified, only superfluous blanks are cut off on the right without raising an exception.

This addition specifies that data that is stored in the data cluster under the data type `c` is assigned to target fields of the type `x`. The content of the source fields is not converted to the code page of the target system and are left unconverted and passed to the target fields instead. A single source field or a structure component of the type `c` can be assigned to a single target field or to a structure component of the type `x`, which has the same length in bytes. The addition is ignored by target fields of the type `c`.

This addition cannot be used together with the previous conversion additions.

A program using this addition cannot be transported between systems where character representations require different numbers of bytes. This addition is designed only for temporary programs, enabling them to import byte strings that were stored incorrectly in fields of the type `c` and to store them again in a type-compliant way.

See under Addition `ENDIAN INTO`.

This addition assigns the ID of the code page of the exported data to the data object `cp`. This object must have a character-like data type. The ID of the code page is the content of the column `CPCODEPAGE` of the database table `TCP00`.

The code page can be used to process data objects imported using `CHAR-TO-HEX MODE`. Conversions between code pages can be performed using system classes described in the section [Classes for Conversion of External Data Formats](ABENCL_ABAP_CONV.html).

See under Addition `ENDIAN INTO`.

This addition assigns the ID of the byte order of the exported data to the data object `ENDIAN`, which must have the data type `abap_endian` from the [type pool](ABENTYPE_POOL_GLOSRY.html) ABAP. The ID for big endian is *B* and *L* for little endian.

The byte order can be used to process data objects imported using `CHAR-TO-HEX MODE`, since code pages in which a character takes up more than one byte can be dependent on the byte order.

The target field `f2-col2` contains, after the import, the unconverted, binary content of `f1-col2`. The code page and the byte order in which the data is stored is in `cp` and `en`. Normally, the data in such a case is exported and imported in different programs. This example only works in a system in which a character is displayed using two bytes, since `f2-col2` is double the length of `f1-col2`.

-   In addition to data objects of the type `c`, the target field can be longer than the source field for data objects of the type `n`, `p`, or `x`.
-   Source fields of the type

-   `b` can be read into target fields of the types `s`, `i`, and `int8`
-   `s` can be read into target fields of the type `i` and `int8` (but negative numbers are handled incorrectly)
-   `i` can be read into target fields of the type `int8`

-   Source fields of the type `c` can be exported to target fields of the type `string` and source fields of the type `x` can be exported to target fields of the type `xstring`.
-   The rules above also apply if the component involved is the last component of a source structure or target structure that is otherwise set up in the same way.
-   In a target structure, substructures can also have more components than the substructures of the source structure if the structure is otherwise set up in the same way. The surplus components are provided with type-dependent [initial values](ABENINITIAL_VALUE_GLOSRY.html).

DATA: BEGIN OF f1, \\n col1 TYPE string, \\n BEGIN OF sub, \\n col2 TYPE decfloat16, \\n END OF sub, \\n col3 TYPE i, \\n END OF f1. \\n\\ \\nDATA: BEGIN OF f2, \\n col1 TYPE string, \\n BEGIN OF sub, \\n col2 TYPE decfloat16, \\n col3 TYPE xstring, \\n END OF sub, \\n col4 TYPE i, \\n END OF f2. \\n\\ \\nEXPORT para = f1 TO MEMORY ID 'HK'. \\n\\ \\n... \\n\\ \\nIMPORT para = f2 FROM MEMORY ID 'HK' ACCEPTING PADDING. DATA: BEGIN OF f1, \\n col1 TYPE string, \\n BEGIN OF sub, \\n col2 TYPE decfloat34, \\n END OF sub, \\n col3 TYPE i, \\n col4 TYPE xstring, \\n END OF f1. \\n\\ \\nDATA: BEGIN OF f2, \\n col1 TYPE string, \\n BEGIN OF sub, \\n col2 TYPE decfloat34, \\n END OF sub, \\n col3 TYPE i, \\n END OF f2. \\n\\ \\nEXPORT para = f1 TO MEMORY ID 'HK'. \\n\\ \\n... \\n\\ \\nIMPORT para = f2 FROM MEMORY ID 'HK' ACCEPTING TRUNCATION. DATA: BEGIN OF incl\_struc, \\n cola TYPE string, \\n colb TYPE i, \\n END OF incl\_struc. \\n\\ \\nDATA: BEGIN OF f1. \\n INCLUDE STRUCTURE incl\_struc. \\nDATA: col1 TYPE string, \\n BEGIN OF sub, \\n col2 TYPE decfloat16, \\n col3 TYPE decfloat34, \\n END OF sub, \\n col4 TYPE i, \\n END OF f1. \\n\\ \\nDATA: BEGIN OF f2, \\n cola TYPE string, \\n colb TYPE i, \\n col1 TYPE string, \\n BEGIN OF sub, \\n col2 TYPE decfloat16, \\n END OF sub, \\n col3 TYPE decfloat34, \\n col4 TYPE i, \\n END OF f2. \\n\\ \\nEXPORT para = f1 TO MEMORY ID 'HK'. \\n\\ \\n... \\n\\ \\nIMPORT para = f2 FROM MEMORY ID 'HK' \\n IGNORING STRUCTURE BOUNDARIES. DATA: BEGIN OF f1, \\n col1 TYPE c LENGTH 10 VALUE '1234567890', \\n col2 TYPE c LENGTH 10 VALUE '1234567890', \\n END OF f1. \\n\\ \\nDATA: BEGIN OF f2, \\n col1 TYPE c LENGTH 10, \\n col2 TYPE x LENGTH 20, \\n END OF f2. \\n\\ \\nDATA: cp TYPE string, \\n en TYPE abap\_endian. \\n\\ \\nEXPORT para = f1 TO DATABASE demo\_indx\_blob(hk) ID 'HK'. \\n\\ \\n... \\n\\ \\nIMPORT para = f2 FROM DATABASE demo\_indx\_blob(hk) ID 'HK' \\n IN CHAR-TO-HEX MODE \\n CODE PAGE INTO cp \\n ENDIAN INTO en. **Conversion Addition** `**B**` `**M**` `\ **IT**` `**DB**` `**SM**` `**SB**` `ACCEPTING PADDING` + + + + + + `ACCEPTING TRUNCATION` + + + + + + `IGNORING STRUCTURE BOUNDARIES` + + + + + + `IGNORING CONVERSION ERRORS` + - + + - - `REPLACEMENT CHARACTER rc` + - + + - - `IN CHAR-TO-HEX MODE` + - + + - - `CODE PAGE INTO cp` + - + + - - `ENDIAN INTO endian` + - + + - - abenabap.html abenabap\_reference.html abendata\_cluster.html abapimport\_data\_cluster.html