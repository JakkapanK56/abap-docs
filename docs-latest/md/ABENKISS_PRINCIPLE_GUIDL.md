---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENKISS_PRINCIPLE_GUIDL.html"
abapFile: "ABENKISS_PRINCIPLE_GUIDL.html"
type: "abap-reference"
---

## Background

The KISS principle says that you should always choose the simplest solution for a problem. KISS is an acronym and can have any of the following meanings (the list is not exhaustive):

-   `Keep it simple, stupid.`
-   `Keep it small and simple.`
-   `Keep it sweet and simple.`
-   `Keep it simple and straightforward.`
-   `Keep it short and simple.`
-   `Keep it simple and smart.`
-   `Keep it strictly simple.`

The basic statement of the KISS principle is similar to Occam's razor, which says that in science the preferred theory is the one that makes fewest assumptions to explain observations (see Wikipedia entry on the KISS principle).

## Rule

**Follow the KISS principle**

Follow the KISS principle, and limit the complexity of your programs as far as possible.

## Details

The best solution to a problem is usually the one that is as simple, minimalist, and easy to understand as possible, while ensuring stability, understandability, and maintainability in addition to functional correctness.

There are plenty of bad examples of the KISS principle. Why is this?

-   Programs are too complex right from the start. This can be due to poor design or simply a rash, undisciplined programming style.
-   Programs are maintained for lengthy periods. Instead of creating new implementations for old and new functions together, new functions are simply added (usually using `IF` control structures) to old functions. Programs that were initially simple thus become ever more complex, although this is not justified by the complexity of the task at hand.

To develop according to the KISS principle, you should ensure right from the start that the complexity of the program remains manageable. Rules that support this approach relate to the [structure and style](ABENSTRUCTURE_STYLE_GDL.md) of programs, in particular [comments](ABENCOMMENTS_GDL.md) and [complexity](ABENCOMPLEXITY_GDL.md).

## Hint

If existing programs do not follow the KISS principle, and these programs need to be further developed, we recommend refactoring as appropriate. Refactoring refers to the process of manually or automatically improving the structure of programs while retaining the observable program behavior. It improves legibility, understandability, maintainability, and extensibility, as well as considerably reducing the related effort for troubleshooting and functional enhancements (see Wikipedia entry on refactoring). The (incremental) refactoring of an existing program is not only useful for following the above rule, but also for all following rules.

The refactoring of existing code is supported by the required coverage by [unit tests](ABENCORRECTNESS_QUALITY_GUIDL.md). Comprehensive unit tests can ensure that a program behaves in the same way after the refactoring process.

## Example

The figure below shows the structure of a method that does not follow the KISS principle. The method consists of approximately 160 statements and reaches a [nesting depth](ABENNESTING_DEPTH_GUIDL.md) of 12 levels. The method, which is only illustrated schematically, is a real example from a live ABAP program, which reached the state shown on the left after continuous additional developments. The method had become so complex that it was practically impossible to make another necessary change, and the developer was forced to refactor in line with the KISS principle.

The result is illustrated on the right of the figure. By splitting the method M into three methods, each with less than 100 statements and a maximum nesting depth of 5 levels, manageable modularization units were created, which follow the rules for [complexity](ABENCOMPLEXITY_GDL.md), and allow the required modification to be made. Ideally, however, the state shown on the left side of the figure should never occur.
