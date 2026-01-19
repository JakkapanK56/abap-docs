---
title: "This would result in the access condition"
description: |
  This still requires that also `C` has the parameter `DEMO`. By adding `INCLUDING PARAMETERS` you apply a parameter replacement and the result is This replacement step searches for left side CDS elements matching the given `source_match` and replaces them by the given `target`. Both `source_match` an
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_COND_INHERIT_RPL_STEP.htm"
abapFile: "ABENCDS_F1_COND_INHERIT_RPL_STEP.html"
keywords: ["select", "insert", "update", "do", "while", "if", "case", "try", "data", "ABENCDS", "COND", "INHERIT", "RPL", "STEP"]
---

`... \{ PFCG_FILTER [ OBJECT auth_object ] FIELD auth_field VALUE  old WITH new \}\    |\ \{ PARAMETERS WITH ( param1 : value1 [, param2 : value2 ...]  ) \}\    |\ \{ ROOT WITH path_expr [INCLUDING PARAMETERS ]\ \}\    |\ \{ ELEMENT source_match WITH target \}\    |\ \{ PREFIX WITH prefix \}\    |\ \{ CONDITIONS ON ANY OF ( element1 [, element2 ... ] ) WITH (TRUE|FALSE |VOID ) \}\    |\ \{ IF ALL CONDITIONS VOID THEN (TRUE|FALSE|VOID) \} ...`

[1. `... PFCG_FILTER [OBJECT auth_object] FIELD auth_field VALUE old WITH new`](#ABAP_VARIANT_1@1@)

[2. `... PARAMETERS WITH ( param1 : value1 [, param2 : value2 ...] )`](#ABAP_VARIANT_2@1@)

[3. `... ROOT WITH path_expr [INCLUDING PARAMETERS ]`](#ABAP_VARIANT_3@1@)

[4. `... ELEMENT source_match WITH target`](#ABAP_VARIANT_4@1@)

[5. `... PREFIX WITH prefix`](#ABAP_VARIANT_5@1@)

[6. `... CONDITIONS ON ANY OF (element1 [, element2 ...]) WITH (TRUE |FALSE |VOID)`](#ABAP_VARIANT_6@1@)

[7. `... IF ALL CONDITIONS VOID THEN (TRUE |FALSE |VOID)`](#ABAP_VARIANT_7@1@)

A replacement step operates on a set of inherited [access conditions](ABENACCESS_CONDITION_GLOSRY.html) and can update or replace them.

[`... OBJECT auth_object`](#ABAP_ONE_ADD@1@)

This replacement step processes the literal values which are mapped to authorization fields in PFCG conditions.

`auth_field` selects the authorization field. Occurrences of the value `old` are then replaced with the value `new`. Both values must be written as literals in single quotes.

With this addition, the replacement process can be restricted to the authorization object `auth_object`.

Replacement based on authorization field name independent of authorization object.

**Input:**

**Replacement step:**

**Output:**

Replacement of authorization field in a dedicated authorization object only.

**Input:**

**Replacement step:**

**Output:**

Exchange of two authorization field values using a temporary helper value.

**Input:**

**Replacement step:**

**Output:**

References to CDS parameters (`$parameters param...`) used in the inherited access conditions (either within path filters of left side elements or as left side host expressions) are replaced by new parameter values `value`.

For `value` you can insert:

Replacement of the parameters `P1` and `P2` or the source entity with a parameter of the target entity and a literal.

**Input:**

**Replacement step:**

**Output:**\\
`toX ( F = $PARAMETERS.P2 OR G = 'U' )`

The same result would have been created with two separate steps:

[`...INCLUDING PARAMETERS`](#ABAP_ONE_ADD@2@)

This replacement step processes left side CDS elements and relocates them into the provided association `path_expr`.

The path expression can have one or more levels and can be specified in the same way as in the CDS entity.

The entity of the last path component must be the source entity of the inheritance condition.

When the entity of the last association component of `path_expr` has parameters and some of them are specified as part of the `ROOT WITH` statement, this parameter binding is used to perform parameter replacement in the condition set.

You have a base entity `S` (for example a released SAP entity) and create a custom entity `C` using `S` as datasource.

Using the association `toS`, access control of `S` can now be taken over to `C`:

An access condition of `S` like

will then be executed for `C` as

In the example above, `S` has a parameter `DEMO` and the access condition is

In entity `C`, this parameter is supplied with a fixed value 'P'

In the access control, the usage of the unchanged `toS` allows and eventually even requires the parameter to be supplied.

This would result in the access condition

This still requires that also `C` has the parameter `DEMO`.

By adding `INCLUDING PARAMETERS`

you apply a parameter replacement and the result is

This replacement step searches for left side CDS elements matching the given `source_match` and replaces them by the given `target`.

Both `source_match` and `target` must together belong to one of the following categories:

The source matching process has the following properties:

Instead of full examples for each possible case, the following table shows in compact form various combinations of source match and target in the `ELEMENT WITH` operator and how they operate on incoming left side elements.

**This replacement step is not released for usage in customer created access controls but only internally at SAP.**

This replacement step processes left side CDS elements and changes the name of the first component such that it starts with the provided `prefix`.

When the concatenation of prefix and component name exceeds the maximum component name length of 30 characters, a name compression algorithm will shorten the component name accordingly in a way that ensures name uniqueness but preserves some readability.

The prefix can contain the ampersand character `&` at a single location. Then, this location of the resulting component name will contain an upwards counting number which is used when the same component name is handled with this replacement step again.

The following table demonstrates the effects of the statement.

This replacement step replaces an entire access condition with one of the given operators `TRUE`, `FALSE` or `VOID`, when any of its left side elements matches one of the given elements `element1`, `element2`, ... .

The match elements can be either fields or path expressions, also open associations are supported.

Parameter bindings and path filters must not be specified, as a match element only considers the component names and matches incoming path expressions irrespectively of whether they contain parameter bindings or path filters.

The inherited condition

will be replaced by `TRUE` with any of the following steps:

This step analyzes the current state of the condition set in the inheritance/replacement procedure. When it comprises only the `VOID` operator, the entire condition set is replaced by the given replacement value

-   Specifying nonexistent authorization objects or authorization fields produces a syntax error.
-   The values in `old` and `new` may be validated against a set of fixed value if the authorization field has such (for example ACTVT). Non-existing values produce a warning.
-   To swap values, three replacements must be made. First, the first value is set to a temporary helper value that must be different from the existing values. This helper value must be replaced again after the second value is replaced. The helper value can have no more than 40 characters.
-   This step raises a warning when it was reached by at least one PFCG filter with matching field name (and, if given, authorization object), but none of them had a matching filter value.

-   Literals
-   Session variables (`$SESSION...`)
-   Parameter references of the target entity.

-   When you replace a parameter reference of the source with a parameter reference of the target entity, successive steps in the same `REPLACING` section will not touch this parameter any further.
-   When you have multiple parameters to replace, you can so in individual steps, or within a single step as comma separated list (or in any mixture of both).
-   This step raises a warning when it has been reached by at least one parameter reference, but none of them could be updated by it. When you have specified multiple replacements in a single step, the applicability of one of them already suppresses this warning.

-   Left side CDS elements that were produced by a preceding replacement step (`ROOT WITH`, `ELEMENT WITH`, `PREFIX WITH`) are not updated.
-   When the last path component points to a view with parameters, those can be specified in a parameter binding. For all non-optional parameter this is mandatory
-   A path expression prefix makes it possible to protect a CDS entity with the access rules of the association target of one of its CDS association.
-   This step emits a warning when it is reached by at least one left side element but updated none.
-   The optionality property of the inbound CDS element is lost during this replacement step because the formerly optional element is after this replacement step no longer the first component of the resulting path expression. However, you can declare optionality for the first component of `path_expr`.
-   An incoming condition using DCL function `OPTIONAL_ELEMENT_EXIST` is replaced depending on the comparison operator:

-   `OPTIONAL_ELEMENT_EXISTS( ... ) IS INITIAL --> FALSE`
-   `OPTIONAL_ELEMENT_EXISTS( ... ) IS NOT INITIAL --> TRUE`

-   This statement is a short form of the sequence `ROOT WITH` with a parameter binding for the last component and `PARAMETER WITH` with the same parameter binding.
-   In contrast to the explicit form, the short form does not produce a warning when there are no parameters that can be replaced.

-   A plain entity field or a path expression ending with a field.
-   In this flavor, the statement replaces dedicated left side CDS elements.
-   An association with an arbitrary number of path components.
-   In this flavor, the statement allows renaming of associations, while preserving all parts after the matching source components.
-   Parameter bindings or path filters of the last source match component can either by specified in the source match and by this get consumed or can remain unmentioned in the source match in which case they are taken over to the resulting element.
-   The provided target may contain parameter bindings or path filters at all locations.

-   The components of the source match must be fully present in the incoming element.
-   Parameter bindings and path filters for all but the last path component must be present/absent identically, and when present must be literally the same, that is except case insensitivity for identifiers there is no further normalization. For example the path filter *a = 1 and b = 1* will not match the path filter *b = 1 and a = 1*.

-   Left side CDS elements that were produced by a preceding replacement step (`ROOT WITH`, `ELEMENT WITH`, `PREFIX WITH`) are never matched.
-   This step emits a warning when it matched with no left side element, irrespective of whether the inherited condition set contains left side elements at all.
-   When a processed left side element contains parameter bindings or path filters and is matched by a source match which does not consume either of them, and the target also provides an object of the same type, an error occurs.
-   The optionality property of the inbound CDS element is lost during this replacement step because the formerly optional element is replaced by this step by a new target element explicitly declared in the current access control. However, you can declare optionality for the first component of `target`.
-   Due to the treatment of optionality, a statement `ELEMENT X WITH X` may have an effect:

-   When the inbound element was optional, the outbound element *X* is no longer optional (unless you make it optional itself in the current access control).
-   When the inbound element is not optional, this statement allows it to make the output element optional by a declaration in the current access control (remember that `WITH OPTIONAL ELEMENTS` only operates on left side CDS elements written in the current access control).

-   An incoming condition using DCL function `OPTIONAL_ELEMENT_EXISTS` is replaced depending on the comparison operator:

-   `OPTIONAL_ELEMENT_EXISTS( ... ) IS INITIAL --> FALSE`
-   `OPTIONAL_ELEMENT_EXISTS( ... ) IS NOT INITIAL --> TRUE`

-   Left side CDS elements that were produced by a preceding replacement step `(ROOT WITH, ELEMENT WITH, PREFIX WITH)` are not updated.
-   This step emits a warning when it is reached by at least one left side element but updated none.
-   Optionality of the inbound left side CDS element is preserved by this step.
-   DCL function `OPTIONAL_ELEMENT_EXISTS` is preserved with the updated element name.

-   Left side CDS elements that were produced by a preceding replacement step (`ROOT WITH`, `ELEMENT WITH`, `PREFIX WITH`) are not updated.
-   The usage of an element list is a short form or multiple `CONDITIONS ON ANY OF` statements for the individual elements.
-   The step generates a warning when it could not match any of the given elements with an incoming left side element.
-   When using this statement with the replacement option `VOID`, later changes in the inherited condition set may let the own access control become syntactically invalid when all conditions get replaced by `VOID`. To protect against this situation, you can use step `IF ALL CONDITIONS VOID THEN` as guard.
-   All elements of the element list must exist in the inheriting CDS entity. This statement is therefore not suitable to suppress nonexistent CDS elements in the future.

-   `CONDITIONS ON ANY OF ( toA ) WITH TRUE`
-   `CONDITIONS ON ANY OF ( toA.B ) WITH TRUE`
-   `CONDITIONS ON ANY OF ( C ) WITH TRUE`

-   This step is intended as a guard step when using `CONDITIONS ON ANY OF ... WITH VOID`.
-   The possibility to replace the condition set in this situation again with `VOID` exists for symmetry only, it is not sensible to do so.
-   This step does not generate a warning when it is not used. A good firefighter does not complain when there is no work to do.

(...) = ASPECT PFCG\_AUTH( OBJECT\_1, ..., ACTVT = '03' ) OR \\n (...) = ASPECT PFCG\_AUTH( OBJECT\_2, ..., ACTVT = '03' ) PFCG\_FILTER FIELD ACTVT VALUE '03' WITH 'F4' (...) = ASPECT PFCG\_AUTH( OBJECT\_1, ..., ACTVT = 'F4' ) OR \\n(...) = ASPECT PFCG\_AUTH( OBJECT\_2, ..., ACTVT = 'F4' ) (...) = ASPECT PFCG\_AUTH( OBJECT\_1, ..., ACTVT = '03' ) OR \\n(...) = ASPECT PFCG\_AUTH( OBJECT\_2, ..., ACTVT = '03' ) PFCG\_FILTER OBJECT OBJECT\_1 FIELD ACTVT VALUE '03' WITH 'F4' (...) = ASPECT PFCG\_AUTH( OBJECT\_1, ..., ACTVT = 'F4' ) OR \\n(...) = ASPECT PFCG\_AUTH( OBJECT\_2, ..., ACTVT = '03' ) (...) = ASPECT PFCG\_AUTH( OBJECT\_1, ..., ACTVT = '01' ) OR \\n (...) = ASPECT PFCG\_AUTH( OBJECT\_2, ..., ACTVT = '02' ) PFCG\_FILTER FIELD ACTVT VALUE '02' WITH 'TEMP', \\nPFCG\_FILTER FIELD ACTVT VALUE '01' WITH '02', \\nPFCG\_FILTER FIELD ACTVT VALUE 'TEMP' WITH '01' (...) = ASPECT PFCG\_AUTH( OBJECT\_1, ..., ACTVT = '02' ) OR \\n(...) = ASPECT PFCG\_AUTH( OBJECT\_2, ..., ACTVT = '01' ) toX ( F = $PARAMETERS.P1 OR G = $PARAMETERS.P2 ) PARAMETERS WITH ( P1 : $PARAMETERS.P2, P2 : 'U' ) PARAMETERS WITH ( P1 : $PARAMETERS.P2 ), \\nPARAMETERS WITH ( P2 : 'U' ) DEFINE VIEW ENTITY C \\n AS SELECT FROM S \\n ASSOCIATION \[1..1\] TO S AS toS ON ... \\n \\{ ... \\} GRANT SELECT ON C WHERE INHERITING CONDITIONS FROM ENTITY S \\n REPLACING \\{ ROOT WITH toS \\}; state = 'X' toS.state = 'X' toState\[ f = $parameters.DEMO \].value = 'A' DEFINE VIEW ENTITY C AS SELECT FROM S( DEMO : 'P' ) ... GRANT SELECT ON C WHERE INHERITING CONDITIONS FROM ENTITY S \\n REPLACING \\{ ROOT WITH toS( DEMO : 'P' ) \\}; toS.toState\[ f = $parameters.DEMO \].value = 'X' GRANT SELECT ON C WHERE INHERITING CONDITIONS FROM ENTITY S \\n REPLACING \\{ ROOT WITH toS( DEMO : 'P' ) INCLUDING PARAMETERS \\}; toS.toState\[ f = 'P' \].value = 'X' ( toA\[F = 1\].B, C ) = ASPECT PFCG\_AUTH( ... ) **source\_match** **Input Left Side Element** **Match** **target** **Output Left Side Element** **Explanation** **Input element** **Prefix** **Output element**\\ **Comment** *A* *A* Yes `B` `B` Simple entity field *A* `B` No Must match exactly. *A* `toB` Error You cannot replace a field with an association. *A* `toB.A` No Match must be complete. That the left-side ends with a field named *A* is different from a field named *A*. *A* *A* Yes `toB.C` `toB.C` You can replace a field with a path expression. *A* *A* Yes `toB (p:'x' ).toC [i=3 ].toD(q:'Y') [j=5].E` `toB (p:'X').toC [i=3].toD(q:'Y') [j=5].E` Parameters and filters are supported in the target. *A* *A* Yes *A* *A* At first, this looks like a `NOOP`, but it isn't. It has a meaning when optional elements are involved. \\
\\
With this replacing, the author of the DCL source containing the `ELEMENT A WITH A` explicitly declares that he/she knows that the inherited entity containes element *A* (otherwise, the own DCL source would be syntactically incorrect already here). Optionality for *A* from the inherited source is therefore removed, as from that point on, the existence of *A* is certain. \\
\\
Similarly, when the inherited source contains *A* and the author of the current DCL source wants to have *A* optional from this point on, this statement is the only way to let the own `WITH OPTIONAL ELEMENTS (A DEFAULT ...)` become applicable to the inherited *A*. `toA.B` `toA.B` Yes `?` `?` You can match path expressions and replace them as above with anything you like (`?` can be field or path expression, the latter with parameters and filters, see above). `toA.B` `toA.C` No Match must be complete. `toA.B` `toB.B` No Match must be complete. `toA.B` `toC` Error You cannot replace a (terminated) path expression with an (open) association. `toA(p:'X').toB[i=3].C,` `toA(p:'X').toB[i=3].C` Yes \\ `?` \\ `?` Source matcher can have parameter bindings and filters `toA(p:'X').toB[i=3].C` `toA(p:'Y').toB[i=3].C` No Parameter bindings must be literally the same (name-case and technical whitespace ignored, but count, order and values are relevant). `toA(p:'X').toB[i=3].C` `toA(p:'X').toB[3=i].C` No \\ Filters are not semantically normalized. `toA` `toA.B` Yes `toX` `toX.B` Replacement of an (open) association with another one in the target entity. The trailing part after the match is taken over after the target fragment. `toA.toB` `toA.toB.toC.toD.E` Yes `toX.toY` \\ `toX.toY.toC.toD.E` The same with longer chains. `toA[i=3]` `toA[i=3].B` Yes `toX` `toX.B` The filter from the left-side has been consumed by the source matcher (this and the following examples use a path filter for demonstration, with parameter bindings the same would happen, and when parameter bindings and filters come together, both operate independently from each other). `toA[i=3]` `toA[i=3].B` Yes `toX[i=4]` `toX[i=4].B` The target fragment can supply the resulting left-side with its own path filter. `toA[i=3]` `toA[i=4].B` No When filters are present in the source matcher, they must match. `toA` `toA[i=3].B` Yes `toX` `toX[i=3].B` The filter has not been consumed by the matcher and is therefore taken over from the left-side and attached to the target fragment. `toA` `toA[i=3].B` Yes `toX[i=3]` Error As the filter from the left side has not been consumed, it must be taken over to the target fragment. But this one already has a filter. This potential conflict is not permissive (even when both are literally the same). *A* `P_` `P_A` `toB.C` `P_` `P_toB.C` `ALREADY_LONG_ELEMENT_NAME` `LONGPF` \\ `LONGPFALREAD_F3BD3673_ENT_NAME` The exact syntax of the shortening may look different, this shall only provide the idea. The algorithm of the shortening is not published and only available internally at SAP as API for the components eligible to use this feature. *A* `SAP_&_` `SAP_1_A` Initial prefix for view stacks. `SAP_1_A` `SAP_&_` `SAP_2_A` Follow-up prefix for view stacks. abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_role.html abencds\_dcl\_role\_conditions.html abencds\_f1\_cond\_inherit.html abencds\_f1\_cond\_inherit\_replacing.html