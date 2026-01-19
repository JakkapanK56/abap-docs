---
title: "ABENSPA_GPA"
description: |
  ABENSPA_GPA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSPA_GPA.htm"
abapFile: "ABENSPA_GPA.html"
keywords: ["select", "do", "while", "if", "case", "data", "ABENSPA", "GPA"]
---

The [user memory](ABENUSER_MEMORY_GLOSRY.html) is a user-specific [memory area](ABENMEMORY_ORGANIZATION.html) of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html), which can be accessed by all [ABAP sessions](ABENABAP_SESSION_GLOSRY.html) of a user session simultaneously. ABAP programs have access to SPA/GPA parameters stored in the user memory (also referred to as SET/GET parameters).

Each SPA/GPA parameter is identified by an ID of up to 20 characters. SPA/GPA parameters can either be created explicitly using the statement [`SET PARAMETER`](ABAPSET_PARAMETER.html), or implicitly in a [PAI](ABENPAI_GLOSRY.html) event and are available to any programs and any sessions for the whole duration of a user session after they have been saved in the user memory. SPA/GPA parameters are usually evaluated by the ABAP runtime framework. In ABAP programs, they can be read using the statement [`GET PARAMETER`](ABAPGET_PARAMETER.html).

An example of a program that uses SPA/GPA parameters is the user maintenance (transaction `SU01`). In this transaction, user-specific parameters can be entered on the *Parameters* tab page, which are then set when the user logs on to [AS ABAP](ABENAS_ABAP_GLOSRY.html) and are evaluated by other programs.

The statements [`SET PARAMETER`](ABAPSET_PARAMETER.html) and [`GET PARAMETER`](ABAPGET_PARAMETER.html) of a program do not directly access the SPA/GPA parameters of the user memory.

The fact that ABAP programs do not access the user memory directly but all SPA/GPA parameters are imported or exported implicitly only at certain times, has consequences for programs that run in parallel in different ABAP sessions of the same user:

Premature rollouts can be forced by statements such as [`WAIT UP TO`](ABAPWAIT_UP_TO.html), but the fact that the state of the user memory is always determined by the program that was last rolled out creates a serious obstacle for cross-session use of SPA/GPA parameters in parallel programs. This type of programming is therefore not recommended.

The names of SPA/GPA parameters are managed in the database table `TPARA`. In the [Object Navigator](ABENOBJECT_NAVIGATOR_GLOSRY.html) of the [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html), the names of SPA/GPA parameters are created in uppercase letters in the database table `TPARA` and are linked to packages. The database table `TPARA` acts as a reservation table for SPA/GPA parameters. If SPA/GPA parameters are used in a program, the name of the parameter must be contained in the `PARAMID` column in the database table `TPARA`. SPA/GPA parameters from other applications should not be unintentionally overwritten.

If a name exists in the database table `TPARA`, this does not automatically mean that the corresponding parameter also exists in the user memory. SPA/GPA parameters are created only during the execution of ABAP programs.

When defining input fields, [dynpro fields](ABENDYNPRO_FIELD_GLOSRY.html) can be linked to SPA/GPA parameters by entering the name of an SPA/GPA parameter from the database table `TPARA` as the property `PARAMETER ID`. If the corresponding property *GET PARAMETER* is set, no other value is assigned to the input field, and the dynpro is not processed in a [batch input session](ABENBATCH_INPUT_SESSION_GLOSRY.html), the input field is filled with the value of the SPA/GPA parameter when the [screen layout](ABENSCREEN_GLOSRY.html) is sent. If the corresponding property *SET PARAMETER* is set, the content of the input field is assigned to the SPA/GPA parameter at the PAI event. If the parameter does not yet exist in the user memory, it is created implicitly in the PAI event. In the case of [selection screens](ABENSELECTION_SCREEN_GLOSRY.html), the addition `MEMORY ID` links the statements [`PARAMETERS`](ABAPPARAMETERS_VALUE.html) and [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS_VALUE.html).

-   As soon as an ABAP program is rolled in to the memory, all SPA/GPA parameters of the user memory are copied to the [session memory](ABENROLL_AREA_GLOSRY.html) of the program. The statements [`SET PARAMETER`](ABAPSET_PARAMETER.html) and [`GET PARAMETER`](ABAPGET_PARAMETER.html) of a program work with the local SPA/GPA parameters of the session memory.
-   As soon as a program is rolled out of the memory, all local SPA/GPA parameters are copied to the cross-session user memory, where they replace all SPA/GPA parameters. Any SPA/GPA parameters that do not exist in the session memory also do not exist in the user memory afterwards. A roll out is performed, for example:

-   When exiting a program.
-   When calling a new program using [`SUBMIT`](ABAPSUBMIT.html), [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html), or [`LEAVE TO TRANSACTION`](ABAPLEAVE_TO_TRANSACTION.html).
-   During any work process change A work process is changed in the same situations that cause implicit [database commits](ABENDB_COMMIT.html).
-   In the statement [`COMMIT WORK`](ABAPCOMMIT.html).

-   If a program sets a SPA/GPA parameter using [`SET PARAMETER`](ABAPSET_PARAMETER.html), a program in a parallel ABAP session can only be started after the rolling program has been rolled out if it needs to access the modified parameter.
-   If a program sets a SPA/GPA parameter using [`SET PARAMETER`](ABAPSET_PARAMETER.html) while another program in a parallel ABAP session is active, and the latter has been running longer than the setting program, these changes are overwritten when the program that has been running longer is rolled out.

-   A data transport between a dynpro field and an SPA/GPA parameter in the user memory only takes place if a global data object with the same name as the dynpro field is declared in the associated ABAP program.
-   If the PAI event is raised using a function of type *E*, no values are assigned to the SPA/GPA parameters linked to the dynpro and no parameters are created in the user memory.
-   The restriction that input fields are not filled with the value of SPA/GPA parameters during [batch input sessions](ABENBATCH_INPUT_SESSION_GLOSRY.html) is not valid for [batch input tables](ABENBATCH_INPUT_TABLE_GLOSRY.html) used with [`CALL TRANSACTION`](ABAPCALL_TRANSACTION_USING.html). Then, dynpro fields to which no value is assigned in the batch input table, are supplied from their SPA/GPA parameters.

abenabap.html abenabap\_reference.html abencreate\_objects.html