---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDECLARATION_INLINE_GUIDL.html"
abapFile: "ABENDECLARATION_INLINE_GUIDL.html"
type: "abap-reference"
---

## Background

The declaration operators

-   [`DATA(var)`](ABENDATA_INLINE.md) for variables
-   [`FINAL(var)`](ABENFINAL_INLINE.md) for immutable variables
-   [`FIELD-SYMBOL(<fs>)`](ABENFIELD-SYMBOL_INLINE.md) for field symbols

can be used to make inline declarations in [write positions](ABENWRITE_POSITION_GLOSRY.md). In this way, declarations are made in operational statements rather than in [declaration statements](ABENDECLARATION_STATEMENT_GLOSRY.md). The declaration is made when the program is compiled, regardless of whether the statement is actually executed.

## Rule

**Only use inline declarations locally**

Only make inline declarations in processing blocks that support [local data](ABENLOCAL_DATA_GLOSRY.md). Use them as if they were local declarations in the current statement block. For inline declared variables that are written only once in the current context, [`FINAL(var)`](ABENFINAL_INLINE.md) is preferred over [`DATA(var)`](ABENDATA_INLINE.md).

## Details

If used correctly, inline declarations are an excellent way of making programs leaner and easier to understand. An inline declaration in a statement works like a short form of a declaration statement directly in front of the statement, which is why the guidelines for declaration statements must be followed:

-   The rule dictating that [no global program variables and field symbols](ABENDECLARATION_VARIABLES_GUIDL.md) are to be declared also applies to inline declarations, without restrictions. For this reason, statements with inline declarations should only be specified in processing blocks with local data, namely procedures and preferably methods. If not, the variables and field symbols declared inline would be global in the program, with all the drawbacks listed in the description of the rule.
-   Inline declarations are an exception to the rule that [local declarations](ABENLOCAL_DECLAR_GUIDL.md) should only be made at the start of a procedure. They are specified in operational statements, which means that, unlike declaration statements, they cannot be specified at the start of the procedure. Despite this, the restrictions stated in the rule for local declarations are still valid for inline declarations. In particular, the validity of inline declarations is not limited to their current statement block. Inline declarations should, therefore, only be specified in less complex procedures, so making them easier to understand. The variables and field symbols declared inline should only be used in the direct vicinity of their declaration. Under no circumstances should a variable declared inline be accessed dynamically before the declaration. When an inline declaration is specified in a (conditional) control structure, it should usually only be accessed within this statement block.
-   Using [`FINAL(var)`](ABENFINAL_INLINE.md) instead of [`DATA(var)`](ABENDATA_INLINE.md) whenever possible can improve the robustness of a program.

## Bad Example

Inline declaration of a field symbol `<pattern>` and two variables `moff` and `mlen` in a `LOOP` and their later reuse in a different loop. At first glance, it appears that the declarations are only valid in the first loop and only conditionally, but they are valid for the whole method and unconditionally.

```
METHOD demo_method. 
  "IMPORTING i_tab1 TYPE TANDARD TABLE OF string 
  "IMPORTING i_tab2 TYPE TANDARD TABLE OF string 
  "IMPORTING i_text TYPE string 
 
  IF i_tab1 IS NOT INITIAL. 
    LOOP AT i_tab1 ASSIGNING FIELD-SYMBOL(). 
      FIND  IN i_text MATCH OFFSET DATA(moff) 
                               MATCH LENGTH DATA(mlen). 
      ... 
    ENDLOOP. 
  ENDIF. 
 
  IF i_tab2 IS NOT INITIAL. 
    LOOP AT i_tab2 ASSIGNING . 
      FIND  IN i_text MATCH OFFSET moff 
                               MATCH LENGTH mlen. 
      ... 
    ENDLOOP. 
  ENDIF. 
 
ENDMETHOD.
```

## Good Example

The field symbols and variables declared inline are only used locally in the respective loops. The fact that they are valid in the whole method is ignored, for the sake of simplicity. If the field symbol and the variables are only to be declared once for both loops, they should be declared at the start of the method using declaration statements.

```
METHOD demo_method. 
  "IMPORTING i_tab1 TYPE TANDARD TABLE OF string 
  "IMPORTING i_tab2 TYPE TANDARD TABLE OF string 
  "IMPORTING i_text TYPE string 
 
  IF i_tab1 IS NOT INITIAL. 
    LOOP AT i_tab1 ASSIGNING FIELD-SYMBOL(). 
      FIND  IN i_text MATCH OFFSET DATA(moff1) 
                                MATCH LENGTH DATA(mlen1). 
      ... 
    ENDLOOP. 
  ENDIF. 
 
  IF i_tab2 IS NOT INITIAL. 
    LOOP AT i_tab2 ASSIGNING FIELD-SYMBOL(. 
      FIND  IN i_text MATCH OFFSET DATA(moff2) 
                                MATCH LENGTH DATA(mlen2). 
      ... 
    ENDLOOP. 
  ENDIF. 
 
ENDMETHOD.
```
