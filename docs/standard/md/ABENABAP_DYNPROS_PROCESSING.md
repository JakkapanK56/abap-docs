---
title: "ABENABAP_DYNPROS_PROCESSING"
description: |
  ABENABAP_DYNPROS_PROCESSING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_DYNPROS_PROCESSING.htm"
abapFile: "ABENABAP_DYNPROS_PROCESSING.html"
keywords: ["select", "insert", "do", "while", "if", "case", "ABENABAP", "DYNPROS", "PROCESSING"]
---

**Dynpro Flow**

**Dynpro Sequence**

**Dynpro Flow and Sequences in Detail**

For the user, an application program consists of a series of dynpros that are displayed one after the other. The major difference between the program flow of an executable program and a dialog program is that, in a dialog program, dynpros can be programmed to appear in any sequence required. In executable programs, the dynpro sequence is controlled by events, which occur in a fixed order. In a dialog program, the programmer is free to program any sequence of dynpros, and the user can affect the program flow by his or her actions. However, it is still possible to call a freely defined dynpro sequence within an executable program and hence to branch into a form of dialog program.

Dynpros are always part of an ABAP program. The dialog modules in an ABAP program can only be called from the dynpros in the same program. The system field `sy-dynnr` always contains the number of the current dynpro. Any number of complex dynpro sequences can be called from the dynpros in a single program. For example, it is possible to navigate from one dynpro to any other dynpro in the same program, or repeat part of a sequence any number of times.

A dynpro sequence is started by calling its first dynpro. This is done either by starting a transaction where the first dynpro is defined or by using the statement `CALL SCREEN` in an ABAP program. When a dynpro sequence is called using the statement `CALL SCREEN`, it is always embedded in the dynpro sequence of the application program that is already running.

The actual sequence of dynpros is defined by setting the next dynpro for each dynpro in the chain. The dynpro attributes of every dynpro in Screen Painter contain a static next dynpro. This defines a static dynpro sequence. The value of the static next dynpro can be overwritten dynamically in the ABAP processing logic. This enables dynamic dynpro sequences to be defined that change according to user actions.

Dynpro sequences can also be executed without displaying all of the screens. The statement `SUPPRESS DIALOG`, used in a PBO module, prevents a dynpro from being displayed. In this case, the entire PBO and PAI logic is executed, but the dynpro is not displayed. It can be useful to suppress dynpros if lists are to be displayed in a dynpro sequence.

Dynpro sequences always end when they the number of the next dynpro is zero. For this reason, it is not possible to create dynpros with the number zero. The dynpro number zero is used only to end a dynpro sequence. When a dynpro sequence ends, the system returns to the point from which the first dynpro in the sequence was called. If a transaction code was called, this is the point where the transaction started. If `CALL SCREEN` was called, this is a point in the associated ABAP program.

The following sections describe in more detail how to define dynpro sequences.

**Static Next Dynpro**

In the Screen Painter tool, the dynpro attribute Next Dynpro is defined for every dynpro. This attribute contains the number of the dynpro that follows the current dynpro statically. However, the static attribute is always bypassed if the next dynpro is overwritten dynamically while the dynpro is being executed.

The default next dynpro in Screen Painter is always the number of the dynpro itself. If the default value is used and not overwritten dynamically, the dynpro calls itself recursively. In this case, the sequence consists of a single dynpro only.

If the next dynpro specified has the value zero (or no value at all) and it is not overridden dynamically, the current dynpro is the last in the dynpro sequence. After the dynpro has been processed, control returns to the point from which the dynpro sequence was called. If the dynpro sequence was embedded, the system returns to the calling dynpro sequence. If the dynpro sequence is not embedded, the application program terminates.

**Dynamic Next Dynpro**

Every dynpro has a static next dynpro that specifies the next dynpro to be called after the current one, as long as it is not overwritten dynamically. In the processing logic, that is, a dialog module called by the dynpro, you can use the `SET SCREEN` statement to overwrite the statically defined next dynpro dynamically:

`SET SCREEN ....`

This statement defines a new next dynpro for the current program run. You can also specify the number of the next dynpro as a field containing a dynpro number. The statically defined next dynpro is ignored. However, this only overrides the static dynpro sequence temporarily. The static value for the next dynpro, as defined in the Screen Painter, is always retained.

If you specify the value 0 for next dynpro, the current dynpro becomes the last in the dynpro chain. After the dynpro has been processed, control returns to the point from which the dynpro sequence was called. If the dynpro sequence was embedded, the system returns to the previous dynpro sequence containing the relevant `CALL SCREEN` statement. If the dynpro sequence was not embedded, the application program terminates.

The `SET SCREEN` statement does not interrupt the current dynpro processing. To leave a dynpro, use the ABAP statement `LEAVE ...`.

**Leaving a Dynpro from a Program**

In a program, you can use one of the two following ABAP statements to leave a dynpro:

`LEAVE SCREEN.` or `LEAVE TO SCREEN ....`

The `LEAVE SCREEN` statement ends the current dynpro and calls the subsequent dynpro. The next dynpro is either the static next dynpro or a dynamic next dynpro. In the second case, you must override the static next dynpro using the `SET SCREEN` statement before the `LEAVE SCREEN` statement. The `LEAVE TO SCREEN` statement exits the current dynpro and calls the dynamic next dynpro, which you specify as part of the statement.

The `LEAVE TO SCREEN` statement is nothing more than a contraction of the two statements `SET SCREEN` and `LEAVE SCREEN`. These statements do not end the entire dynpro sequence. They merely branch to another dynpro in the same sequence. The dynpro sequence only ends when you leave to next dynpro 0.

**Calling Dynpro Sequences**

There are two ways of calling a dynpro sequence. Starting a sequence from an ABAP program allows you to insert a sequence of dynpros into the existing program flow.

*Using a Transaction Code*

When you use a transaction code to start a dynpro sequence, the corresponding ABAP program is automatically loaded as well. The processing logic of the program is controlled by the dynpro flow logic. On reaching the end of the dynpro sequence (next dynpro 0), the entire application program terminates at the same time. Control returns to the point from which the transaction was called.

*From a program*

You can start a dynpro sequence from an ABAP program using the `CALL SCREEN ....` statement. At the end of the dynpro sequence (next dynpro 0), the program continues processing directly after the `CALL SCREEN` statement.

*Inserting sequences*

If you use the `CALL SCREEN` statement within a dynpro sequence that is already running, the new dynpro sequence is inserted into the current sequence.

This works as a kind of stack, since the `CALL SCREEN` statement interrupts the current dynpro sequence and starts a new one. When you start a dynpro sequence with a transaction code, you can stack up to 50 other dynpro sequences on top of it. However, you should not exceed 40 sequences, since help and error dialogs also use internally implemented dynpro sequences.

Since during an SAP Web AS ABAP session you are always in a dynpro sequence of some kind, each `CALL SCREEN` statement leads to one dynpro sequence being inserted into another. For example, if you use the statement in an executable program, the dynpro sequence is normally inserted into the normal dynpro sequence for executable programs, that is, the predetermined selection screen list.

**Embedding Modal Dialog Boxes**

Calling a single dynpro is a special case of embedding a dynpro sequence. If you want to prevent the called dynpro from covering the current dynpro completely, you can use the `CALL SCREEN` statement with the `STARTING AT` and `ENDING AT` options:

CALL SCREEN scrn \\nSTARTING AT x1 y1 \\nENDING AT x2 y2.

This calls the dynpro number `scrn` as a modal dialog box. This means that during the dialog box display the dynpro behind it is visible but inactive. The options `STARTING AT` and `ENDING AT` define the start and end positions of the dialog box. In the dynpro attributes of dynpro `scrn`, you must set the modal dialog box attribute. This defines how the interface elements are positioned on the dynpro.

-   [Dynpros](ABENDYNPRO_GLOSRY.html) are called either using [transaction codes](ABENTRANSACTION_CODE_GLOSRY.html) or using the statement [`CALL SCREEN`](ABAPCALL_SCREEN.html). The call raises the event [PBO](ABENPBO_GLOSRY.html) and its event block is processed in the [dynpro flow logic](ABENDYNPRO_FLOW_LOGIC_GLOSRY.html). Afterwards, the [screen layout](ABENSCREEN_GLOSRY.html) of the dynpro is displayed in the current [popup level](ABENPOP-UP_LEVEL_GLOSRY.html) or in a new level (in the case of modal dialog boxes). After a user action in the user interface of this GUI window, the event [PAI](ABENPAI_GLOSRY.html) (or [POH](ABENPOH_GLOSRY.html) or [POV](ABENPOV_GLOSRY.html)) is raised and its event block is processed in the dynpro flow logic. In the event blocks of the dynpro flow logic, dialog modules of the associated ABAP program are called. When PAI processing is complete, the [next dynpro](ABENNEXT_DYNPRO_GLOSRY.html) of the current dynpro is called.
-   The display language of a general dynpro is the [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) and not the [text environment language](ABENTEXT_ENV_LANGU_GLOSRY.html), which can be set with statement [`SET LOCALE LANGUAGE`](ABAPSET_LOCALE.html).

-   Each dynpro has a next dynpro. In particular, a dynpro can also be its own special next dynpro. The next dynpro is either statically predefined or it is set in the ABAP program using the statements [`SET SCREEN`](ABAPSET_SCREEN.html) or [`LEAVE TO SCREEN`](ABAPLEAVE_SCREEN.html). In this way, a dynpro is automatically part of a dynpro sequence. Each next dynpro always belongs to a single popup level and is executed in a single GUI window. The number of the current dynpro can be taken from the system field `sy-dynnr`.
-   The flow of a dynpro sequence is determined by the respective next dynpro of the dynpro involved. During processing, a dynpro always has a next dynpro. At the start of processing, this is statically predefined, but it can be overwritten in the program. The first dynpro of a dynpro sequence is the initial dynpro. A dynpro sequence is ended by calling the next dynpro with the dynpro number 0.
-   If a dynpro sequence is embedded in another sequence, the calling dynpro sequence is continued after completion of a dynpro sequence. If the dynpro sequence is not embedded, the current program is ended.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html