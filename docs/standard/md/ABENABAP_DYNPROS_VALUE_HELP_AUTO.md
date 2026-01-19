---
title: "ABENABAP_DYNPROS_VALUE_HELP_AUTO"
description: |
  ABENABAP_DYNPROS_VALUE_HELP_AUTO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_DYNPROS_VALUE_HELP_AUTO.htm"
abapFile: "ABENABAP_DYNPROS_VALUE_HELP_AUTO.html"
keywords: ["select", "do", "if", "case", "method", "data", "ABENABAP", "DYNPROS", "VALUE", "HELP", "AUTO"]
---

The primary input helps used in the ABAP Dictionary are [search helps](ABENSEARCH_HELP_GLOSRY.html). A search help is a standalone [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that is used specifically to provide input helps on screen fields. Search helps can be linked with table fields and data elements. The content of [check tables](ABENCHECK_TABLE_GLOSRY.html), [fixed values](ABENFIXED_VALUE_GLOSRY.html), or calendar helps and clock helps can be used instead of search helps.

Search helps can be bound in different ways to fields of database tables or components of ABAP Dictionary structures. The input help available to a user depends on the way a search help is bound. The following list shows, in ascending order of priority, the input help used:

If necessary, the input help is modified using methods of [flagging obsolete data in check tables](ABENDDIC_DEPRECATION.html).

Search helps have an interface (a search help parameter) that controls which input is respected by the screen layout and which screen fields can be filled with data from the selected line in the proposal list. Parameters of a search help can be defined as import and export parameters. A parameter can be both an input and an export parameter at the same time.

When the input help is called, data is transported between the dynpro fields and the import parameters of the search help. If a search help is bound to a data element or directly to a screen field of the dynpro, only a single search help parameter is assigned to the field. In this case, data is transported only between the field and this parameter. If the search help is bound to the table field or structure field or to the check table of the field, it may be necessary to fill multiple search help parameters. When the input help is called, an attempt is made to find an identically named field for each import parameter of the search help that is bound to a table field or structure field. If an appropriate field is found, its content is passed to the search help parameter.

When a line in the proposal list of the search help is selected, data is transported between the export parameters of the search help and the assigned dynpro fields. The values of the proposal list are passed only to input-enabled fields and to fields that are linked with only a single export parameter of the search help.

A search help exit can be used to modify the standard way an input help for a field works. A search help exit is a function module with a predefined interface and can be called at defined points within the input help process. A search help exit can be programmed to modify the program flow of the search help or replace certain steps.

The function module can affect data such as the properties of the search helps, the selection options that apply when preselecting from the proposal list, the proposal list itself, or the subsequent data in the program flow.

Each search help exit must have the same interface as the function module `F4IF_SHLP_EXIT_EXAMPLE`, which is used as a pattern for any new search exits to be created. Further optional parameters can also be defined, such as any export parameters. For more information, see the documentation for this function module.

If a search help exit is assigned to a search help, it is called by the help processor at the following events. These events are points where user actions are allowed, and it makes sense for the user to respond:

Some requirements for search helps occur repeatedly. One example is the option of determining a search help dynamically at POH time. Cases like this are covered by default function modules that are used either directly as search help exits or that can be called in search help exits. These function modules are prefixed with `F4UT_`.

[Input Helps from ABAP Dictionary](ABENDYNPRO_F4_HELP_DIC_ABEXA.html)

-   Search helps
-   There are two kinds of search helps: elementary and collective. An elementary search help represents a search path and defines where the data in the proposal list is read from, how data is transported between the screen layout and the infrastructure, and how the input help dialog is designed. A collective search help comprises multiple elementary search helps. A collective search help combines all search paths that are meaningful for a field.
-   Check tables
-   In the case of [foreign key relationships](ABENFOREIGN_KEY_DEPENDENCY_GLOSRY.html) defined in the ABAP Dictionary, the key fields of the check table can be used as input help for a [foreign key field](ABENFOREIGN_KEY_FIELD_GLOSRY.html) used as a dynpro field.
-   Fixed values
-   The [fixed values](ABENFIXED_VALUE_GLOSRY.html) of a domain can be used as an input help for dynpro fields that reference the domain. The [value table](ABENVALUE_TABLE_GLOSRY.html) of a domain, on the other hand, cannot be used for input helps.
-   Calendar helps and clock helps
-   Predefined calendar helps and clock helps can be used as input helps for fields of the type `DATS` and `TIMS`.

-   Calendar helps and clock helps
-   If no other input helps are defined for fields of the type `DATS` or `TIMS`, the calendar help or clock help is used.
-   Fixed values
-   If neither a check table nor a search help is defined for a field, any fixed values of the domain are used for the input help.
-   Search help of the data element
-   If neither a check table nor a search help is defined for a field, the search help linked with the data element of the field is used.
-   Check table
-   If the check table of a field does not have a [text table](ABENTEXT_TABLE_GLOSRY.html) nor its own search help, and no dedicated search help is specified for a field, the content of the key fields of the check table is used as an input help.
-   Check table with text table
-   If the [foreign key table](ABENFOREIGN_KEY_TABLE_GLOSRY.html) of the check table of the fields is a [text table](ABENTEXT_TABLE_GLOSRY.html), the associated text from the text table is displayed in the input help in the logon language of the user.
-   Check table with search help
-   If a search help is bound to the check table of a field, the search help is used with the values from the check table, but also enables a data transport of multiple parameters.
-   Search help of the field
-   If the dynpro field is defined with reference to a field of a structure or a database table and a search help is assigned to this field directly, this binding has the highest priority and is always used as an input help. To avoid errors in the [automatic input check](ABENABAP_DYNPROS_CHECKS_AUTO.html), the bound search help should only propose values that also exist in a check table.

-   Before the dialog box with a search path selection is displayed.
-   SELONE event; only in collective search helps. The search help exit can be used here, for example, to restrict which search helps are available. This is the only event in which the search help exit is called for collective search helps. All other events call the search help exit for the selected elementary search help.
-   After an elementary search help is selected.
-   PRESEL1 event. This is when the binding of the search help to the dynpro can be affected, for example by associating search help parameters with dynpro fields.
-   Before the dialog box for entering conditions is displayed.
-   PRESEL event. This is when the default content of the dialog box can be modified (or the dialog box hidden).
-   Before the data selection.
-   SELECT time. Some or all of the selected values can be passed from the search help exit.
-   Before displaying the proposal list.
-   DISP event. This is when the proposal list display can be affected by the search help exit. This makes it possible, for example, to hide certain entries or fields of a table from the user depending on the user's authorizations.
-   Before the values chosen by the user are passed to the screen layout.
-   RETURN event. It may be useful to modify the further program flow here depending on which value is chosen.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_processing\_screens.html abenabap\_dynpros\_help.html abenabap\_dynpros\_value\_help.html