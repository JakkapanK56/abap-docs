---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTABLE_OUTPUT_GUIDL.html"
abapFile: "ABENTABLE_OUTPUT_GUIDL.html"
type: "abap-reference"
---

## Background

Internal tables can be read by accessing individual lines using `READ TABLE` or [table expressions](ABENTABLE_EXPRESSION_GLOSRY.md), or sequentially using `LOOP AT`. In both cases, the following output behavior can be defined by using the statements with the following additions:

-   The addition `INTO` copies the content of the line to an appropriate data object.
-   The addition `ASSIGNING` assigns the read line to a [field symbol](ABENDYN_ACCESS_DATA_OBJ_GUIDL.md), which enables the line to be addressed directly.
-   The `REFERENCE INTO` addition sets a [data reference](ABENDYN_ACCESS_DATA_OBJ_GUIDL.md) to the read line.

In the case of [table expressions](ABENTABLE_EXPRESSIONS.md), the output behavior is controlled by the [category of the result](ABENTABLE_EXP_RESULT.md).

As well as for exports, the `ASSIGNING` and `REFERENCE INTO` additions can also be used for the `APPEND`, `COLLECT`, `INSERT`, and `MODIFY` statements, where they create references to the line being processed.

## Rule

**Choose appropriate output behavior**

When reading lines of internal tables, select an appropriate output behavior. The rule of thumb is:

-   Copy to a work area if the line type is narrow and the read line is not to be modified.
-   Assign to a field symbol if the line type is wide or deep and the read line is to be modified.
-   Set a data reference if the line type is wide or deep and a reference to the read line is to be passed.

## Details

The criteria for selecting the output behavior are the processing speed, on the one hand, and what is to be done with the read line, on the other hand:

-   If the content of the read line is to be modified, the addition `ASSIGNING` or (in the case of table expressions) the appropriate [result](ABENTABLE_EXP_RESULT.md) should usually be used. This allows direct access to the line using the value semantics and removes the need for a `MODIFY` operation later on.
-   If a reference to the read line is required that can be processed using reference semantics, the addition `REFERENCE INTO` or (in the case of table expressions) the appropriate [result](ABENTABLE_EXP_RESULT.md) is to be used.
-   If the content of the read line is not to be modified, any of these procedures can be used. The line type of the table is significant for performance. If the table line is wide or contains deep components (for example, strings or other tables), reads are usually faster if `ASSIGNING` or `REFERENCE INTO` is used instead of `INTO`. The [way they are used](ABENDYN_ACCESS_DATA_OBJ_GUIDL.md) is the determining factor for selecting which of the two should be used.
-   When working with tables whose lines are flat and do not occupy more than approximately 1KB, copying with `INTO` is faster (at least for the `READ` statement) than configuring the administration that is required for dynamic access. For the statement `LOOP`, these costs are incurred only once, so that using `ASSIGNING` or `REFERENCE INTO` is always recommended above a certain number of lines. In contrast, `INTO` should always be used if the target area is to be modified without this affecting the internal table.

Besides the processing speed, it is also important that the source code can be understood. If the recommendations mentioned are followed, reading a table with the addition `ASSIGNING` (but also `REFERENCE INTO`) indicates to the reader that the table content is potentially changed. Reading a table with the `INTO` addition, on the other hand, indicates that the table will not be modified.

For table expressions, the information here applies to the selection of the appropriate [result](ABENTABLE_EXP_RESULT.md).

## Bad Example

The following source code shows the assignment of lines of an internal table to a work area with the aim of modifying the read lines. For this modification, however, an additional statement, `MODIFY`, is required, and two unnecessary copy processes take place for each loop pass.

```
LOOP AT itab INTO wa. 
   ... 
   wa = ... 
   MODIFY itab FROM wa. 
ENDLOOP.
```

## Good Example

The following source code corrects the above example; here, a field symbol is used for direct access to modify the read lines. No unnecessary copy costs are incurred.

```
LOOP AT itab ASSIGNING . 
   ... 
    = ... 
ENDLOOP.
```
