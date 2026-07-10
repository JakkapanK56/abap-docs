---
title: "Choosing the Language - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlangu_choice_guidl.htm"
abapFile: "abenlangu_choice_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Structure and Style](ABENSTRUCTURE_STYLE_GUIDL.md) →  [Comments](ABENCOMMENTS_GUIDL.md) → 

Choosing the Language

Background

The natural language that has established itself worldwide for computer programming is English. This is because the language elements in all significant programming languages have been taken from English and their syntax based on English grammar. ABAP is no exception. In fact, efforts have been made to guarantee correct English by giving additions of related statements different names, even if they have the same meaning. Well-known examples include the (now obsolete) additions VARYING and VARY of the statements DO and WHILE. Here, ABAP can even be viewed as a subset of the English language.

Rule

Write program comments in English

Write all comments in ABAP programs in English only, so that as many readers as possible can understand them and benefit from them.

Details

English comments are a basic prerequisite for distributed development at an international level. There are other good reasons for using English as the comment language:

-   If names are in [English](ABENCHOICE_LANGU_GUIDL.md "Guideline"), the statements of an ABAP program can be considered (with a little good will) to be English sentences. For the reader, English comments are best suited for the source code. If comments in another language were used, this would result in a continuous switching between the languages, which would be exhausting even for readers who can speak the languages used.

-   Frequently, the unwanted [retelling comments](ABENCONTENT_GUIDL.md "Guideline") are very similar to the described ABAP statements if they are written in English. This way, the author quickly realizes that his comment is superfluous.

Exception

Technical terms that originate from country-specific legislation (such as "Abgeltungssteuer" in German) or specific abbreviations (such as DÜVO) cannot be translated meaningfully or would no longer be recognizable after translation. Such terms should be placed in quotation marks and not be translated into English. In this case, it should be noted that [country-specific characters](ABENCHARACTER_SET_GUIDL.md "Guideline") can be replaced with 7-bit ASCII characters. The goal of the above rule is to enable as many users a possible to follow the program flow. This is still possible if non-IT terms are worded in another language.

Note

This rule applies regardless of the [original language](ABENORIGINAL_LANGU_GUIDL.md "Guideline") chosen.

Bad Example

The following source code shows a typical example of German comments, mixed with English terms, which usually do not even follow the required notation or terminology.

"Horizontales Splittercontrol im Hilfecontainer
CREATE OBJECT splitter\_h
  EXPORTING
    parent = help\_container
    rows = 1
    columns = 2.

"Vertikales Splittercontrol im linken Container
CREATE OBJECT splitter\_v
  EXPORTING
    parent = container\_left
    rows = 2
    columns = 1.

Good Example

The following source code shows the above source code with English comments, as set out in the above rule.

  "Horizontal splitter control in help container
CREATE OBJECT splitter\_h
  EXPORTING
    parent = help\_container
    rows = 1
    columns = 2.

  "Vertical splitter control in left container
CREATE OBJECT splitter\_v
  EXPORTING
    parent = container\_left
    rows = 2
    columns = 1.

The goal of this example is to show the difference between German and English comments. If more meaningful [names](ABENTELLING_NAMES_GUIDL.md "Guideline") had been chosen, that is splitter\_horizontal instead of splitter\_h, and so on, comments could be dispensed with altogether, thus complying with the following [rule](ABENCONTENT_GUIDL.md "Guideline").
