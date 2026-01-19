---
title: "Most security issues in ABAP programs are caused by because input injected into a program from outside, that is"
description: |
  is used wrongly or carelessly. More specifically, security risks arise here whenever full statements, parts of statements, or objects accessed in statements are specified dynamically and hence are not subject to static checks. Dynamically specified items of this nature occur, for example, in the fol
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDYNAMIC_PROGRAMMING_SCRTY.htm"
abapFile: "ABENDYNAMIC_PROGRAMMING_SCRTY.html"
keywords: ["loop", "do", "if", "case", "class", "data", "internal-table", "ABENDYNAMIC", "PROGRAMMING", "SCRTY"]
---

Most security issues in ABAP programs are caused by because input injected into a program from outside, that is

is used wrongly or carelessly. More specifically, security risks arise here whenever full statements, parts of statements, or objects accessed in statements are specified dynamically and hence are not subject to static checks. Dynamically specified items of this nature occur, for example, in the following cases:

Two main cases must be distinguished here:

If assuming that the developer of a program does so without malicious intent, dynamically specified objects are uncritical in the former case.

The latter case, on the other hand, is critical. If external input is specified dynamically in an ABAP statement without being checked or escaped, damage can be incurred (whether unintentional or malicious). The damage can range from exceptions being raised, the absence of system resources (*Denial of Service* attacks), to the manipulation of persistent data.

The following sections provide examples of the most significant security risks when input from outside is used in statements:

The global principle in these sections of always checking and/or escaping external input also applies in all cases not listed separately here, such as using a dynamic [`WHERE`](ABAPLOOP_AT_ITAB_COND.html) condition when accessing internal tables.

Back doors, implemented by malicious developers using dynamically specified information, are not discussed here. These cannot be checked statically, since they do not originate outside the program, and are not usually classified as dangerous by static checks. The two-man rule code inspections are probably the only solution here. See also [Obscuring ABAP Source Code](ABENOBSCURE_CODE_SCRTY.html).

-   from a user interface
-   from a parameter interface
-   from a persistent repository,

-   Dynamically specified objects are anchored in the syntax of a statement in a natural way. For example, file names specified dynamically using a variable in a statement from the ABAP file interface are the norm, and not exceptions.
-   Frameworks are fully dynamic (for example ADBC) if they use dynamic SQL statements only.
-   Here, information is specified dynamically to make the programming of functions more compact than if they were programmed statically (perhaps due to a large number of case distinctions).

-   The dynamic information is created in full in the same program and does not contain any parts that originate outside the program.
-   Some or all of the dynamically created information originates outside the program, meaning that it is taking from a UI, a parameter interface, or a repository.

-   [SQL Injections](ABENSQL_INJECTIONS_SCRTY.html)
-   [Dynamic Calls](ABENDYN_CALL_SCRTY.html)

abenabap.html abenabap\_reference.html abenabap\_security.html