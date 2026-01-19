---
title: "ABAPAT_EXTRACT"
description: |
  ABAPAT_EXTRACT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPAT_EXTRACT.htm"
abapFile: "ABAPAT_EXTRACT.html"
keywords: ["loop", "if", "case", "catch", "data", "internal-table", "field-symbol", "ABAPAT", "EXTRACT"]
---

[Short Reference](ABAPAT_SHORTREF.html)

`LOOP.`\\ 
  `[AT FIRST.`\\ 
     `...`\\ 
   `ENDAT.]`\\ 
  `[AT field_groupi [WITH field_groupj]`\\ 
     `...`\\ 
   `ENDAT.]`\\ 
    `[AT NEW field1.`\\ 
       `...`\\ 
     `ENDAT.`\\ 
      `[AT NEW field2.`\\ 
         `...`\\ 
       `ENDAT.`\\ 
         `[...]]]`\\ 
           `[ ... ]`\\ 
        `[[[...]`\\ 
        `AT END OF field2.`\\ 
         `...`\\ 
       `ENDAT.]`\\ 
     `AT END OF field1.`\\ 
       `...`\\ 
     `ENDAT.]`\\ 
  `[AT LAST.`\\ 
     `...`\\ 
  `ENDAT.]`\\ 
`ENDLOOP.`

[1. `... FIRST`](#ABAP_ADDITION_1@3@)

[2. `... field_groupi [WITH field_groupj]`](#ABAP_ADDITION_2@3@)

[3. `... \{NEW\}|\{END OF\} fieldi`](#ABAP_ADDITION_3@3@)

[4. `... LAST`](#ABAP_ADDITION_4@3@)

The statement block of a [`LOOP`](ABAPLOOP-.html) for extracts can contain control structures for [group level processing](ABENGROUP_LEVEL_PROCESSING_GLOSRY.html). The corresponding control statement is `AT`. The statements `AT` and `ENDAT` define statement blocks that are executed at [group breaks](ABENGROUP_BREAK_GLOSRY.html). Group breaks between group levels are a result of the line structure and the processing order in which the `LOOP` reads the lines of the [extract dataset](ABENEXTRACT_DATASET_GLOSRY.html). Within some of the statement blocks, it is possible to access the automatically created data objects [`sum(field)`](ABAPSUM_EXTRACT.html) and [`cnt(field)`](ABAPCNT.html).

Apart from the special variants `AT FIRST`, `AT field_group`, and `AT LAST`, group levels are defined using the variant `AT NEW` and using the consecutive lines of the extract. These are the lines that have the same content in a group key defined in their initial parts. It is possible, from a syntax point of view, to arrange `AT` control structures in any order and to nest them, however effective group level processing is usually only achieved by the arrangement above. Here, the control structures are specified in accordance with the arrangement of the components in the group key and are not nested.

The statement blocks within the `AT`\-`ENDAT` control structures are executed if an appropriate group break occurs in the current line. Statements in the `LOOP`\-`ENDLOOP` control structure that are not listed within an `AT`\-`ENDAT` control structure are executed in each loop pass.

The group level is defined by the first line of the extract dataset.

A line that was appended to the extract dataset using the statement [`EXTRACT field_groupi`](ABAPEXTRACT.html). If the `WITH` addition is specified, the next line must be defined by the field group `field_groupj`.

The group level is defined by the beginning or end of a group of lines with the same content in the component `fieldi` and in the component left of `fieldi`. The content of these components determines the group key. The component `field` must be part of the field group `header`. Components whose content is hexadecimal 0 are not included as a group break criterion.

For `fieldi`, a field symbol can also be specified. If a component of field group `header` is assigned to the field symbol when the statement is executed, this has the same effect as specifying the corresponding component. If no data object is assigned to the field symbol, the specification is ignored. If another data object is assigned to the field symbol, an uncatchable exception is raised.

The group level is defined by the last line of the extraction dataset.

[Extracts, Processing](ABENEXTRACT_AT_ABEXA.html)

-   In one very common case, the extract dataset is sorted exactly by the group key.
-   Extracts are obsolete. [Internal tables](ABENITAB.html) should be used instead.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenabap\_extracts\_extended.html