---
title: "ABENSORT_GUIDL"
description: |
  ABENSORT_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSORT_GUIDL.htm"
abapFile: "ABENSORT_GUIDL.html"
keywords: ["loop", "do", "if", "data", "internal-table", "ABENSORT", "GUIDL"]
---

The statement `APPEND` for attaching lines to an internal table has the addition `SORTED BY`. This addition can be used to fill a standard table by using sorted filling. The prerequisites are:

Once these prerequisites have been met, a ranking list is created that contains at most the same number of lines as specified with `INITIAL SIZE`. This list is sorted by the component specified after `SORTED BY` in descending order.

**Create ranking lists with unsorted filling**

Do not use the addition `SORTED BY` of the statement `APPEND` to create ranking lists. Use the statement `SORT` instead.

If the statement `APPEND` is used with the addition `SORTED BY`, you cannot simply append lines (contrary to what the name implies). Instead, a complicated process is started that only creates a ranking list if specific prerequisites are met. Otherwise incomprehensible results are returned. In addition, it is not possible to sort by more than one column.

The statement `SORT` is more robust, more powerful and easier to comprehend when used in this scenario.

The following source code shows how to create a ranking list of the ten longest distances from a table of flight connections, by using the rule `APPEND SORTED BY`. This rule is no longer recommended, as described above. When declaring the ranking list table, you need to specify the addition `INITIAL SIZE`.

The following source code shows how to create the same ranking list in the previous example, but using the more robust statement `SORT`.

-   A value greater than zero must be specified for the addition [`INITIAL SIZE`](ABENINITIAL_MEMORY_REQU_GUIDL.html).
-   Only the statement `APPEND` with the addition `SORTED BY` can be used to fill the internal table.

... \\nDATA distance\_list TYPE TABLE OF spfli-distance \\n INITIAL SIZE 10. \\nFIELD-SYMBOLS LIKE LINE OF spfli\_tab. \\n... \\nLOOP AT spfli\_tab ASSIGNING . \\n APPEND \-distance TO distance\_list \\n SORTED BY table\_line. \\nENDLOOP. \\n... ... \\nDATA distance\_list TYPE TABLE OF spfli-distance. \\nFIELD-SYMBOLS LIKE LINE OF spfli\_tab. \\n... \\nSORT spfli\_tab BY distance DESCENDING. \\nLOOP AT spfli\_tab TO 10 ASSIGNING . \\n APPEND \-distance TO distance\_list. \\nENDLOOP. \\n... abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abenitab\_gdl.html