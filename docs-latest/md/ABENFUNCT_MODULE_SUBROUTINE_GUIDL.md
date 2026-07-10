---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENFUNCT_MODULE_SUBROUTINE_GUIDL.html"
abapFile: "ABENFUNCT_MODULE_SUBROUTINE_GUIDL.html"
type: "abap-reference"
---

## Background

Function modules and subroutines are the [procedures](ABENMODULARIZATION_GUIDL.md) of the structured programming model that already existed before the introduction of ABAP Objects.

-   Function modules in function pools are independent repository objects that the structured model provides for [external calls](ABENINTERN_EXTERN_PROC_CALL_GUIDL.md) or for the provision of reusable functions.
-   Before the introduction of ABAP Objects, subroutines could be created in any programs and were intended for internal calls or for the internal modularization of programs in the structured model.

The introduction of ABAP Objects means that methods now have both roles.

## Rule

**No implementations in function modules and subroutines**

Only use function modules and subroutines if they are necessary from a technical viewpoint. In these cases, do not implement the required function. Instead, call the relevant (local) methods.

## Details

This rule is directly derived from rule [Use ABAP Objects](ABENABAP_OBJ_PROGR_MODEL_GUIDL.md). This rule states that only methods should be created. You are only [allowed](ABENABAP_OBJ_PROGR_MODEL_GUIDL.md) to create other types of procedures if is technically not possible to use a method:

-   Function modules for RFC, updates, and access to classic dynpros or selection screens
-   Subroutines for `PERFORM ON COMMIT`/`ROLLBACK` and `GENERATE SUBROUTINE` `POOL`

These subroutines should only be used for wrapping method calls to ensure that ABAP Objects is also used in these cases.

All the rules in these programming guidelines that relate to procedures actually refer to methods because, strictly speaking, no other procedures with nontrivial code are supposed to occur. If you strictly adhere to the above rule, is almost impossible for any of the rules that refer to implementations of procedures to be applied to function modules and subroutines, because they are only used to wrap calls. For example, function modules and subroutines should no longer contain any of the local declarations that are described in [Defining Local Declarations at the Start of a Procedure](ABENLOCAL_DECLAR_GUIDL.md).

If you cannot adhere to the rule [Use ABAP Objects](ABENABAP_OBJ_PROGR_MODEL_GUIDL.md) and the above rule because, for example, existing legacy function modules and subroutines need to be maintained or enhanced and you cannot switch to methods, the rules in these programming guidelines that refer to procedures also apply to function modules and subroutines.
