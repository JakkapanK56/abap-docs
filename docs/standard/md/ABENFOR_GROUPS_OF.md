---
title: "ABENFOR_GROUPS_OF"
description: |
  ABENFOR_GROUPS_OF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENFOR_GROUPS_OF.htm"
abapFile: "ABENFOR_GROUPS_OF.html"
keywords: ["select", "loop", "do", "if", "case", "data", "types", "internal-table", "field-symbol", "ABENFOR", "GROUPS"]
---

``... FOR GROUPS [group|<group>] OF wa|<fs> IN itab          [INDEX INTO idx]\ [[`cond`](ABENFOR_COND.html)]\          GROUP BY [`group_key`](ABAPLOOP_AT_ITAB_GROUP_BY_KEY.html)\          [ASCENDING|DESCENDING [AS TEXT]]\          [WITHOUT MEMBERS]\          [[`let_exp`](ABAPLET.html)] ...``

[`... INDEX INTO idx`](#ABAP_ONE_ADD@1@)

This variant of an [iteration expression](ABENITERATION_EXPRESSION_GLOSRY.html) for [table iterations](ABENTABLE_ITERATION_GLOSRY.html) with [`FOR`](ABENFOR_ITAB.html) evaluates an internal table `itab` in the same way as a [`LOOP`](ABAPLOOP_AT_ITAB_VARIANTS.html) with the addition [`GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html) in two phases:

`itab` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html). The same applies to the additions `ASCENDING`, `DESCENDING`, and `WITHOUT MEMBERS` as in [`LOOP AT ... GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html). In particular, `WITHOUT MEMBERS` can be specified only if a group key binding is defined after `GROUPS` by specifying `group` or `<group>`.

Depending on the type of binding, the work area `wa` or `group` or the field symbol `<fs>` or `<group>` after the `FOR` expression can either be used in further subexpressions or to construct the result of a [table comprehension](ABENTABLE_COMPREHENSION_GLOSRY.html) or [table reduction](ABENTABLE_REDUCTION_GLOSRY.html). In particular, it can be specified in the expression [`FOR ... IN GROUP`](ABENFOR_IN_GROUP.html) to evaluate the members of the current group.

If a constructor expression contains a `FOR` expression with group key binding and the group key is to be used as the result of the constructor expression, a suitable data type or a data object with this type must exist for this expression explicitly. It is not possible to derive this type here using an inline declaration as in [`LOOP AT`](ABAPLOOP_AT_ITAB_GROUP_BY.html).

Display of all values of the column `carrid` that occur in `spfli`. The result of the [table comprehension](ABENTABLE_COMPREHENSION_GLOSRY.html) is a single-column internal table that contains all group key values. The `FOR` loop works with a group key binding. Here, each group key is assigned to the local data object `carrier`.

For each evaluated group, this addition sets the helper variable `idx` as follows:

The same applies to the local data object `idx` as in the variant [`FOR ... IN itab`](ABENFOR_IN_ITAB.html).

`idx` cannot be addressed in [`group_key`](ABAPLOOP_AT_ITAB_GROUP_BY_KEY.html).

Grouping and sorting of an internal table with random numbers by the numbers and sorts it. The differences between the group number in `i` and the random number demonstrate the deviation from the uniform distribution.

-   Grouping of all lines that meet the condition in [`cond`](ABENFOR_COND.html) by the group key specified in [`group_key`](ABAPLOOP_AT_ITAB_GROUP_BY_KEY.html). The same applies to `group_key` as in [`LOOP AT ...GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html). In this phase, each line read is either written to the local work area `wa` or assigned to the local field symbol `<fs>` and can then be evaluated when the group key is constructed.
-   Evaluation of the groups. Specifying `group` or `<group>` (optional) results in the [group key binding](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html) in which the current group key is written to the local data object `group` or assigned to the local field symbol `<group>`. If `group` or `<group>` is not specified, the [representative binding](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html) applies, in which the first line of a group is written to the local work area `wa` or assigned to the local field symbol `<fs>`. In the group key binding, `wa` or `<fs>` are initial after the `FOR` expression.

-   In the case of [representative bindings](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html), to the value that would be set by the addition `INDEX INTO` in evaluations using [`FOR ... IN itab`](ABENFOR_IN_ITAB.html) for the representative line.
-   In the case of [group key bindings](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html), the groups are counted from the value 1.

SELECT \* FROM spfli INTO TABLE @FINAL(spfli). \\n\\ \\nTYPES group\_keys TYPE STANDARD TABLE OF spfli-carrid WITH EMPTY KEY. \\n\\ \\ncl\_demo\_output=>display( \\n VALUE group\_keys( \\n FOR GROUPS carrier OF wa IN spfli \\n GROUP BY wa-carrid \\n ASCENDING \\n WITHOUT MEMBERS \\n ( carrier ) ) ). DATA itab TYPE TABLE OF i WITH NON-UNIQUE KEY table\_line. \\n\\ \\nFINAL(t) = cl\_demo\_date\_time=>get\_utc\_time( ). \\nFINAL(rnd) = cl\_abap\_random\_int=>create( seed = CONV i( t ) \\n min = 1 \\n max = 10 ). \\n\\ \\nitab = VALUE #( FOR i = 1 UNTIL i > 10 ( rnd->get\_next( ) ) ). \\n\\ \\nDATA jtab LIKE itab. \\njtab = VALUE #( FOR GROUPS OF wa IN itab \\n INDEX INTO i \\n GROUP BY wa \\n ASCENDING \\n ( i - ) ). \\n\\ \\ncl\_demo\_output=>display( jtab ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenfor\_itab.html