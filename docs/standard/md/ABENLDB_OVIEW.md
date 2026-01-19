---
title: "The main features of a logical database are"
description: |
  When an executable program is created, it can be assigned to exactly one logical database using the Logical Database property. This combines the standard selection screen and the program flow with the selection screen and flow of the logical database. Furthermore, logical databases can call the fu
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLDB_OVIEW.htm"
abapFile: "ABENLDB_OVIEW.html"
keywords: ["select", "if", "data", "ABENLDB", "OVIEW"]
---

The main features of a logical database are

When an executable program is created, it can be assigned to exactly one logical database using the *Logical Database* property. This combines the standard selection screen and the program flow with the selection screen and flow of the logical database.

Furthermore, logical databases can call the function module `LDB_PROCESS`. This function module can be used to call multiple logical database from a single program and nest them as required. A logical database can also be called more than once in a program, if programmed accordingly.

When creating a logical database in the Logical Database Builder, the following order should be kept, since this then makes it easier to generate proposal for the remaining components from successively existing components. Some of the most important properties of a logical database are defined at the same time as its structure. After the definition of the structure, a proposal is created for the selection include. The structure and selection include are used to generate a template for the database program. These components can then quickly be used to create an executable logical database, in which further requirements can be implemented.

-   a hierarchical [structure](ABENLDB_STRUCTURE.html)
-   The structure defines the data view of the logical database. It generally inherits the given hierarchy of database tables defined by foreign key dependencies and controls the order in which the data is passed to the application program. In this way, the structure determines the structure of the other subobjects and the runtime behavior.
-   [selections](ABENLDB_SELECTIONS.html) as a standalone standard selection screen
-   The selections define a standard selection screen as the user interface for programs that use the logical database. The construction of the screen is defined by the structure by default. The selections can be adjusted and enhanced to meet the requirements of the user.
-   a [database program](ABENLDB_PROGRAM.html) written in ABAP
-   The database program contains the ABAP statements for reading the data and passing it to an application program. It is basically a container for special subroutines in which the functions of the logical database are implemented. The [reporting processor](ABENREPORTING_PROCESS.html) of the runtime framework calls these subroutines in the order defined by the structure. The database program is defined by the structure and the selections and can be modified or enhanced to meet the requirements of the user.
-   [Further elements](ABENLDB_OTHERS.html), which add to the functions.

1.  Creating the structure based on a root node.
2.  Associating it with a search help.
3.  Generating and editing the selection include.
4.  Generating and editing the database program.
5.  Editing further elements.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html