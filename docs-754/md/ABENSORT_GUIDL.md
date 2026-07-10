---
title: "Sorted Filling - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensort_guidl.htm"
abapFile: "abensort_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) →  [Internal Tables](ABENITAB_GUIDL.md) → 

Sorted Filling

Background

The statement APPEND for attaching rows to an internal table has the addition SORTED BY. This addition can be used to fill a standard table by using sorted filling. The prerequisites are:

-   A value greater than zero must be specified for the addition [INITIAL SIZE](ABENINITIAL_MEMORY_REQU_GUIDL.md "Guideline").

-   Only the statement APPEND with the addition SORTED BY can be used to fill the internal table.

Once these prerequisites have been met, a ranking list is created that contains at most the same number of rows as specified with INITIAL SIZE. This list is sorted by the component specified after SORTED BY in descending order.

Rule

Create ranking lists with unsorted filling

Do not use the addition SORTED BY of the statement APPEND to create ranking lists. Use the statement SORT instead.

Details

If the statement APPEND is used with the addition SORTED BY, you cannot simply append rows (contrary to what the name implies). Instead, a complicated process is started that only creates a ranking list if specific prerequisites are met. Otherwise incomprehensible results are returned. In addition, it is not possible to sort by more than one column.

The statement SORT is more robust, more powerful and easier to comprehend when used in this scenario.

Bad Example

The following source code shows how to create a ranking list of the ten longest distances from a table of flight connections, by using the rule APPEND SORTED BY. This rule is no longer recommended, as described above. When declaring the ranking list table, you need to specify the addition INITIAL SIZE.

...
DATA distance\_list TYPE TABLE OF spfli-distance
                   INITIAL SIZE 10.
FIELD-SYMBOLS <spfli\_wa> LIKE LINE OF spfli\_tab.
...
LOOP AT spfli\_tab ASSIGNING <spfli\_wa>.
  APPEND <spfli\_wa>-distance TO distance\_list
    SORTED BY table\_line.
ENDLOOP.
...

Good Example

The following source code shows how to create the same ranking list in the previous example, but using the more robust statement SORT.

...
DATA distance\_list TYPE TABLE OF spfli-distance.
FIELD-SYMBOLS <spfli\_wa> LIKE LINE OF spfli\_tab.
...
SORT spfli\_tab BY distance DESCENDING.
LOOP AT spfli\_tab TO 10 ASSIGNING <spfli\_wa>.
  APPEND <spfli\_wa>-distance TO distance\_list.
ENDLOOP.
...
