---
title: "The statement"
description: |
  WHEN TYPE classintf INTO ref. is a semantically identical short form of WHEN TYPE classintf. n  ref = oref. The statement WHEN TYPE classintf INTO DATA(ref). is a semantically identical short form of WHEN TYPE classintf. n  DATA(ref) = CAST classintf( oref ). The following case distinction
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCASE_TYPE.htm"
abapFile: "ABAPCASE_TYPE.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABAPCASE", "TYPE"]
---

`CASE TYPE OF oref.`\\ 
  `[WHEN TYPE class|intf [INTO target1].`\\ 
    `[statement_block1]]`\\ 
  `[WHEN TYPE class|intf [INTO target2].`\\ 
    `[statement_block2]]`\\ 
  `...`\\ 
  `[WHEN OTHERS.`\\ 
    `[statement_blockn]]`\\ 
`ENDCASE.`

[`... INTO target`](#ABAP_ONE_ADD@1@)

Special [case distinction](ABENCASE_DISTINCTION_GLOSRY.html) for [object reference variables](ABENOBJECT_REFER_VARIABLE_GLOSRY.html). This form of a control structure introduced using [`CASE`](ABAPCASE.html) checks the [dynamic type](ABENDYNAMIC_TYPE_GLOSRY.html) of a non-initial object reference variable and the [static type](ABENSTATIC_TYPE_GLOSRY.html) of an initial object reference variable `oref`. `oref` expects an object reference variable with the static type of a class or an interface. `oref` is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html).

A class `class` or an interface `intf` that can be used at this position must be specified after `WHEN TYPE`. The first statement block `statement_block` is executed for which the class `class` or the interface `intf` is more general than or equal to the following:

If this does not apply to any class `class` or interface `intf`, the statement block is executed after `WHEN OTHERS`. No object type `class` or `intf` can be specified if it is known statically that it does not fulfill the condition.

Case distinction for the dynamic type of an object reference variable `oref`, from more specific to more general classes. In the case shown, `c2` is the first class that fulfills the condition. `oref` can be assigned to `ref2` with static type `c2` without raising an exception.

[Case Distinction `CASE TYPE OF` for Exceptions](ABENCASE_TYPE_OF_EXCEPTION_ABEXA.html)

For every statement `WHEN TYPE` of a case distinction introduced using `CASE TYPE OF`, a target variable `target` can be specified after the optional addition `INTO` as follows:

If the addition `INTO` is specified in the first `WHEN` statement that fulfills the condition, the reference `oref` is assigned to `ref` before the statement block is executed, whereby both [upcasts](ABENUP_CAST_GLOSRY.html) and [downcasts](ABENDOWN_CAST_GLOSRY.html) can be performed.

The statement

WHEN TYPE class|intf INTO ref.

is a semantically identical short form of

WHEN TYPE class|intf. \\n  ref = oref.

The statement

WHEN TYPE class|intf INTO DATA(ref).

is a semantically identical short form of

WHEN TYPE class|intf. \\n  DATA(ref) = CAST class|intf( oref ).

The following case distinction shows the short form of the case distinction of the previous example.

[Case Distinction `CASE TYPE OF` for RTTI](ABENCASE_TYPE_OF_RTTI_ABEXA.html)

-   A dynamic type of a non-initial object reference variable `oref`
-   A static type of an initial object reference variable `oref`

-   A case distinction using `CASE TYPE OF` is another way of writing the following branch using [`IF`](ABAPIF.html) and the predicate expression [`IS INSTANCE OF`](ABENLOGEXP_INSTANCE_OF.html) and the corresponding rules and notes apply:
-   `IF oref [IS INSTANCE OF](ABENLOGEXP_INSTANCE_OF.html) class|intf. [statement_block1]\ ELSEIF oref [IS INSTANCE OF](ABENLOGEXP_INSTANCE_OF.html) class|intf. [statement_block2]\ ... ELSE. [statement_blockn]\ ENDIF.`
-   In the control structure, more specific classes `class` or interfaces `intf` must be listed before more general classes or interfaces to enable the associated statement block to be executed.

-   An existing [object reference variable](ABENOBJECT_REFER_VARIABLE_GLOSRY.html)\\ `ref` whose [static type](ABENSTATIC_TYPE_GLOSRY.html) is more general than or equal to the class `class` or interface `intf` specified in the statement.
-   An inline declaration [`DATA(ref)`](ABENDATA_INLINE.html) or [`FINAL(ref)`](ABENFINAL_INLINE.html). In this case, an object reference variable with the static type of the class `class` or the interface `intf` is declared.

CLASS c1 DEFINITION. \\nENDCLASS. \\n\\ \\nCLASS c2 DEFINITION INHERITING FROM c1. \\nENDCLASS. \\n\\ \\nCLASS c3 DEFINITION INHERITING FROM c2. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA oref TYPE REF TO object. \\n\\ \\n DATA: ref1 TYPE REF TO c1, \\n ref2 TYPE REF TO c2, \\n ref3 TYPE REF TO c3. \\n\\ \\n oref = NEW c2( ). \\n\\ \\n CASE TYPE OF oref. \\n WHEN TYPE c3. \\n ref3 ?= oref. \\n WHEN TYPE c2. \\n ref2 ?= oref. \\n WHEN TYPE c1. \\n ref1 ?= oref. \\n WHEN OTHERS. \\n ... \\n ENDCASE. \\n\\ \\n ENDMETHOD. \\nENDCLASS. CLASS c1 DEFINITION. \\nENDCLASS. \\n\\ \\nCLASS c2 DEFINITION INHERITING FROM c1. \\nENDCLASS. \\n\\ \\nCLASS c3 DEFINITION INHERITING FROM c2. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA oref TYPE REF TO object. \\n\\ \\n DATA: ref1 TYPE REF TO c1, \\n ref2 TYPE REF TO c2, \\n ref3 TYPE REF TO c3. \\n\\ \\n oref = NEW c2( ). \\n\\ \\n CASE TYPE OF oref. \\n WHEN TYPE c3 INTO ref3. \\n WHEN TYPE c2 INTO ref2. \\n WHEN TYPE c1 INTO ref1. \\n WHEN OTHERS. \\n ... \\n ENDCASE. \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abencontrol\_structures.html abenabap\_branches.html