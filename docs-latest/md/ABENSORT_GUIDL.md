---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSORT_GUIDL.html"
abapFile: "ABENSORT_GUIDL.html"
type: "abap-reference"
---

## Background

The statement `APPEND` for attaching lines to an internal table has the addition `SORTED BY`. This addition can be used to fill a standard table by using sorted filling. The prerequisites are:

-   A value greater than zero must be specified for the addition [`INITIAL SIZE`](ABENINITIAL_MEMORY_REQU_GUIDL.md).
-   Only the statement `APPEND` with the addition `SORTED BY` can be used to fill the internal table.

Once these prerequisites have been met, a ranking list is created that contains at most the same number of lines as specified with `INITIAL SIZE`. This list is sorted by the component specified after `SORTED BY` in descending order.

## Rule

**Create ranking lists with unsorted filling**

Do not use the addition `SORTED BY` of the statement `APPEND` to create ranking lists. Use the statement `SORT` instead.

## Details

If the statement `APPEND` is used with the addition `SORTED BY`, you cannot simply append lines (contrary to what the name implies). Instead, a complicated process is started that only creates a ranking list if specific prerequisites are met. Otherwise incomprehensible results are returned. In addition, it is not possible to sort by more than one column.

The statement `SORT` is more robust, more powerful and easier to comprehend when used in this scenario.

## Bad Example

The following source code shows how to create a ranking list of the ten longest distances from a table of flight connections, by using the rule `APPEND SORTED BY`. This rule is no longer recommended, as described above. When declaring the ranking list table, you need to specify the addition `INITIAL SIZE`.

```
... 
DATA distance_list TYPE TABLE OF spfli-distance 
                   INITIAL SIZE 10. 
FIELD-SYMBOLS  LIKE LINE OF spfli_tab. 
... 
LOOP AT spfli_tab ASSIGNING . 
  APPEND -distance TO distance_list 
    SORTED BY table_line. 
ENDLOOP. 
...
```

## Good Example

The following source code shows how to create the same ranking list in the previous example, but using the more robust statement `SORT`.

```
... 
DATA distance_list TYPE TABLE OF spfli-distance. 
FIELD-SYMBOLS  LIKE LINE OF spfli_tab. 
... 
SORT spfli_tab BY distance DESCENDING. 
LOOP AT spfli_tab TO 10 ASSIGNING . 
  APPEND -distance TO distance_list. 
ENDLOOP. 
...
```
