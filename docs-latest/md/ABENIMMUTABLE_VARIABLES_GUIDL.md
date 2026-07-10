---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENIMMUTABLE_VARIABLES_GUIDL.html"
abapFile: "ABENIMMUTABLE_VARIABLES_GUIDL.html"
type: "abap-reference"
---

## Background

An [immutable variable](ABENIMMUTABLE_VARIABLE_GLOSRY.md) is a special variable that can be assigned a value at exactly one write position of a [context](ABENCONTEXT_GLOSRY.md) which cannot be changed at other write positions. Immutable variables can be declared inline with the declaration operator [`FINAL`](ABENFINAL_INLINE.md).

## Rule

**Consider using immutable variables**

Whenever you want a variable to be filled at exactly one write position and to be read only at all other positions, use an immutable variable.

## Details

An immutable variable prevents unwanted changes to the value of a variable. It combines the robustness of a constant with the flexibility of filling it at any write position. When reading the value of an immutable variable, it is guaranteed that it is filled with the value assigned during the inline declaration and that no other write access can have happened in between. If you are declaring an immutable variable inside a loop, you can be sure that its value is stable for each loop pass.

## Bad Example

An internal table is declared inline with the declaration operator `DATA` and filled with values that are not expected to be changed any more.

```
TYPES primary_colors TYPE HASHED TABLE OF string 
      WITH UNIQUE KEY table_line. 
 
DATA(primary_colors) = VALUE primary_colors( ( `yellow` ) 
                                             ( `red` ) 
                                             ( `blue` ) ).
```

## Good Example

Using the declaration operator `FINAL`, an immutable table is created, where any later change of the content is prevented in the current context.

```
TYPES primary_colors TYPE HASHED TABLE OF string 
      WITH UNIQUE KEY table_line. 
 
FINAL(primary_colors) = VALUE primary_colors( ( `yellow` ) 
                                              ( `red` ) 
                                              ( `blue` ) ).
```
