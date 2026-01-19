---
title: "ABAPINFOTYPES"
description: |
  ABAPINFOTYPES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINFOTYPES.htm"
abapFile: "ABAPINFOTYPES.html"
keywords: ["select", "do", "while", "if", "class", "data", "types", "internal-table", "ABAPINFOTYPES"]
---

**This statement should be used by specialists only.**\\ \\n**In-depth knowledge of the corresponding environment is essential.**\\ \\n**This environment is not part of ABAP and is not documented here.**

[Short Reference](ABAPINFOTYPES_SHORTREF.html)

`INFOTYPES nnnn [NAME name]`\\ 
               `[OCCURS n]`\\ 
               `[MODE N|P]`\\ 
               `[AS PERSON TABLE]`\\ 
               `[VALID FROM date_begin TO date_end].`

[1. `... NAME name`](#ABAP_ADDITION_1@3@)

[2. `... OCCURS n`](#ABAP_ADDITION_2@3@)

[3. `... MODE N|P`](#ABAP_ADDITION_3@3@)

[4. `... AS PERSON TABLE`](#ABAP_ADDITION_4@3@)

[5. `... VALID FROM date_begin TO date_end`](#ABAP_ADDITION_5@3@)

Declaration of an internal table for HR [info types](ABENINFO_TYPE_GLOSRY.html) that is forbidden in classes. Without the addition `NAME`, an internal table `pnnnn` or `ppnnnn` is created with the structure of the info type `Pnnnn` and a [header](ABENHEADER_LINE_GLOSRY.html). The name `ppnnnn` is used when the addition `AS PERSON TABLE` is specified, otherwise it is `pnnnn`.

As long as the addition `MODE N` is not specified, the statement `INFOTYPES` affects the behavior of the special [logical databases](ABENLOGICAL_DATA_BASE_GLOSRY.html)\\ `PAP`, `PCH`, `PNP`, and `PNPCE` of the human resources component HR by default and is the prerequisite for them to function correctly.

A four-digit numeric key of an info type of the SAP ERP component Human Resources (HR) must be specified for `nnnn`. Each info type is represented in the HR component by a special structure called `Pnnnn` in the ABAP Dictionary. Each info type contains the character-like components `BEGDA` and `ENDDA`.

Using the addition `NAME`, a `name` of up to 20 characters can be specified that is then used for the internal table instead of `pnnnn` or `ppnnnn`.

Without the addition `OCCURS`, the [initial memory requirement](ABENINITIAL_MEM_REQ_GLOSRY.html) of the internal table is set to ten rows. The addition `OCCURS` can be used to specify a numeric literal directly or a numeric constant `n`, to determine a different initial memory requirement.

These additions affect the behavior of the special logical databases `PAP`, `PCH`, `PNP`, and `PNPCE` of the Human Resources component, whereby `AS PERSON TABLE` and `MODE P` only have an effect on the logical database `PNPCE`.

If the addition `MODE N` is not specified, the properties of the internal table are stored in an internal system table that is accessed in this logical database. If the statement `INFOTYPES` is listed without the addition `MODE N` in an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) that is linked to one of these logical databases, the behavior is as follows:

If the addition `MODE N` is specified, the table is not linked to the logical databases and is not filled during the `GET` events.

For more information, see the documentation about the logical databases and particularly about the `PNPCE` documentation.

With `VALID FROM`, two dates `date_begin` and `date_end` can be specified in order to restrict the result set of the special logical databases to that interval. For `date_begin` and `date_end` valid [calendar dates](ABENCALENDAR_DATE_GLOSRY.html) must be specified, where `date_begin` is smaller than `date_end`. Otherwise, the result set of the logical databases is empty.

It is not recommended using the addition `VALID FROM`. It mixes a data declaration with values for selection criteria of logical databases and can produce unexpected results.

-   The internal table created by the statement `INFOTYPES` can also be declared using the following (obsolete) statement sequence, but has no effect on the special logical databases.
-   `[DATA BEGIN OF](ABAPDATA_BEGIN_OF_OCCURS.html)\ \{pnnnn|ppnnnn|name\}\ [OCCURS](ABAPDATA_BEGIN_OF_OCCURS.html)\ \{ 10 | n \}. [INCLUDE TYPE](ABAPINCLUDE_TYPE.html) pnnnn. DATA END OF \{pnnnn|ppnnnn|name\}\ [VALID BETWEEN](ABAPDATA_BEGIN_OF_OCCURS.html) begda AND endda.`
-   Here, `begda` and `endda` specify the predefined components `BEGDA` and `ENDDA` as interval limits.
-   No internal tables with header lines can be declared in classes. For this reason, the statement `INFOTYPES` is forbidden here.
-   In executable programs that are linked to the special logical databases `PAP`, `PCH`, `PNP`, and `PNPCE` of the Human Resources component, the statement `INFOTYPES` is still required and should only be used here.
-   `PNPCE` is by far the most important of the logical databases `PAP`, `PCH`, `PNP`, and `PNPCE`. The logical database `PAP`, on the other hand, is hardly used anymore.
-   Info types enable an HR application to effectively process employee-related data. The special statement [`PROVIDE`](ABAPPROVIDE.html) is used for this.
-   To ensure that the statement works correctly on the logical databases, it must be executed in the [global declaration part](ABENGLOBAL_DECLARATION_SECT_GLOSRY.html) and before the first operational statements of an executable program.
-   The properties of the special logical databases determined by the statement `INFOTYPES` can be changed by macros defined there while the program is executed. For the logical database `PNPCE`, these are the macros `pnp_set_infty_mode_by_name` and `pnp_set_infty_mode_by_number` for changing the mode and `rp_set_data_interval`, `rp_set_data_interval_infty`, and `rp_set_data_interval_all` for setting the validity period.

-   The logical database `PAP` fills the internal table for the event [`GET`](ABAPGET-.html)\\ `applicant`.
-   The logical database `PCH` fills the internal table for the event [`GET`](ABAPGET-.html)\\ `object`.
-   The logical database `PNP` fills the internal table for the event [`GET`](ABAPGET-.html)\\ `pernr`.
-   The behavior of the logical database `PNPCE` can also be controlled using the additions `AS PERSON TABLE` and `MODE P`:

-   Without one of these additions, the internal table is filled at the event [`GET`](ABAPGET-.html)\\ `pernr`. Only those data records are provided that fall within the specified evaluation period on the selection screen (this is a difference to the logical database `PNP`, which provides all data records by default). Alternatively, the macros `rp_set_data_interval`, `rp_set_data_interval_infty`, and `rp_set_data_interval_all` defined in the logical database can be used in the program to specify the data records that are to be provided.
-   If only the addition `AS PERSON TABLE` is specified, the internal table is filled with the event [`GET`](ABAPGET-.html)\\ `group`. The data records of all personnel numbers that are in the included structure `all_pernrs` of the structure `group` and for which there is authorization are provided. Only those data records are provided which fall in the evaluation period specified on the selection screen. Alternatively, the macros `rp_set_data_interval`, `rp_set_data_interval_infty`, and `rp_set_data_interval_all` defined in the logical database can be used in the program to specify the data records that are to be provided.
-   If only the addition `AS PERSON TABLE` is specified together with `MODE P`, the internal table is filled at the event [`GET` `person`](ABAPGET-.html). The data records of all personnel numbers that are in the included structure `all_pernrs` of the structure `person` are provided. No authorization check is executed and all existing data records are provided regardless of how the evaluation period was set on the selection screen. The use of the macros `rp_set_data_interval`, `rp_set_data_interval_infty`, and `rp_set_data_interval_all` has no effect on this.

abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abendeclarations\_spcl.html