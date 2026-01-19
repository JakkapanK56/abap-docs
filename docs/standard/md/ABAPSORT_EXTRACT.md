---
title: "ABAPSORT_EXTRACT"
description: |
  ABAPSORT_EXTRACT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSORT_EXTRACT.htm"
abapFile: "ABAPSORT_EXTRACT.html"
keywords: ["insert", "loop", "do", "if", "catch", "method", "class", "data", "types", "internal-table", "ABAPSORT", "EXTRACT"]
---

[Short Reference](ABAPSORT_SHORTREF.html)

`SORT [ASCENDING|DESCENDING]`\\ 
     `[AS TEXT]`\\ 
     `[STABLE]`\\ 
     `[[sort_key](ABAPSORT_KEY.html)].`

[1. `... ASCENDING|DESCENDING`](#ABAP_ADDITION_1@3@)

[2. `... AS TEXT`](#ABAP_ADDITION_2@3@)

[3. `... STABLE`](#ABAP_ADDITION_3@3@)

This statement sorts the [extract dataset](ABENEXTRACT_DATASET_GLOSRY.html) of the program. A prerequisite for executing the statement is that the field group `header` is defined using the statement [`FIELD-GROUPS`](ABAPFIELD-GROUPS.html), and is therefore a component of all field groups. If no explicit sort key [`sort_key`](ABAPSORT_KEY.html) is specified, the extract dataset is sorted by the components of the field group `header`. Numeric and byte-like components are sorted according to their value and character-like components are sorted by default according to their binary representation ([code page](ABENCODEPAGE_GLOSRY.html)). Here, components containing hexadecimal 0 are placed in front of other entries. Text sorting for character-like components can be done using the addition `AS TEXT`.

The priority of sorting is based on the order in which the components are inserted into the field group `header` using [`INSERT`](ABAPINSERT_FG.html).

Sorting is unstable by default, which means that the relative order of rows that do not differ in their sort keys is not preserved when they are sorted, and can change when a sort is performed multiple times. The addition `STABLE` can be used for stable sorting.

The statement `SORT` also completes the structure of the extract dataset. Executing the statement [`EXTRACT`](ABAPEXTRACT.html) after executing the statement `SORT` raises an uncatchable exception.

The addition `ASCENDING` or `DESCENDING` can be used to specify the sort direction explicitly as ascending or descending. If neither addition is specified, the data is sorted in ascending order by default. The sort direction can be overwritten for individual components in the explicit sort key `sort_key`.

The addition `AS TEXT` specifies that [text-like](ABENTEXTLIKE_DATA_TYPE_GLOSRY.html) components are sorted according to the [locale](ABENLOCALE_GLOSRY.html) of the current text environment. If `AS TEXT` is not specified, text-like components are sorted according to the encoding in the code page of the current text environment. For more information, see [`SORT` for internal tables](ABAPSORT_ITAB.html).

`STABLE` can be used to perform stable sorting. The relative order of rows, which is the same in the sort key, remains unchanged during sorting. Without the addition `STABLE`, the order is not stable and repeated sorting of the extract dataset with the same sort key can change the order in each sort.

[Extracts, Processing](ABENEXTRACT_AT_ABEXA.html)

-   The only difference between the syntax of the statement `SORT` for the [extract dataset](ABENEXTRACT_DATASET_GLOSRY.html) and the statement [`SORT` for internal tables](ABAPSORT_ITAB.html) is that no internal table is specified. Regardless of this, the two should not be confused with one another.
-   If components with the content hexadecimal 0 are placed in front of other entries, this can lead to unexpected behavior when sorting numeric data types.
-   In global classes, no field groups can be defined or processed. In methods of local classes of programs other than class pools, the statement `SORT` is possible for globally defined field groups.
-   Extracts are obsolete. [Internal tables](ABENITAB.html) should be used instead.

-   *Cause:* A sort field with the explicit addition `AS TEXT` is not text-like.
    *Runtime error:*\\ `SORT_AS_TEXT_EX_BAD_TYPE`
-   *Cause:* More than 50 sort criteria.
    *Runtime error:*\\ `SORT_EXTRACT_TOO_MANY_FIELDS`
-   *Cause:* The field group `HEADER` does not contain a sort criterion.
    *Runtime error:*\\ `SORT_FIELD_NOT_IN_HEADER`
-   *Cause:* The field group `HEADER` is not defined.
    *Runtime error:*\\ `SORT_NO_HEADER`
-   *Cause:* It is not possible to use `SORT` in a loop across an extract dataset.
    *Runtime error:*\\ `SORT_WITHIN_LOOP`
-   *Cause:* Insufficient memory space.
    *Runtime error:*\\ `SORT_EXTRACT_INDEX_NO_ROLL`

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenabap\_extracts\_extended.html