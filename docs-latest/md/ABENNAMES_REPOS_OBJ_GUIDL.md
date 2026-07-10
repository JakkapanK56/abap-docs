---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNAMES_REPOS_OBJ_GUIDL.html"
abapFile: "ABENNAMES_REPOS_OBJ_GUIDL.html"
type: "abap-reference"
---

## Background

Repository objects are development objects maintained using the tools in ADT or ABAP Workbench. Each repository object is assigned to a package. Packages encapsulate the repository objects contained and use package interfaces to make objects available that should be usable outside the package. This complies with the [SoC principle](ABENSEPARATION_CONCERNS_GUIDL.md).

From a semantic point of view, packages represent a context for declarations, which is one level above the contexts of an ABAP program. Unlike the contexts of an ABAP program (programs, classes, procedures), a package does not generate a separate namespace.

The namespace for repository objects is defined as follows:

-   [Prefix namespace](ABENPREFIX_NAME_SPACE_GLOSRY.md)
-   Development organizations (SAP departments, SAP partners, and SAP customers) can request a [prefix namespace](ABENPREFIX_NAME_SPACE_GLOSRY.md) for their own development systems. A prefix namespace has a name with at least 5 and a maximum of 10 digits, and the first digit and last digit must be slashes (/.../). After the namespace has been assigned, repository objects only can be created in systems, where the namespace is enabled by prefixing the namespace name /.../. If a package is created in this type of prefix namespace, it can only contain repository objects belonging to the same namespace. However, multiple packages can be created within a single prefix namespace. The available length for the actual name is reduced by the length of the [namespace prefix](ABENNAME_SPACE_PREFIX_GLOSRY.md), including the slashes.
-   [Partner namespace](ABENPARTNER_NAMESPACE_GLOSRY.md)
-   If no prefix namespace is available, the names of repository objects created in partner systems should have a J as the first character. This means they are located in the partner namespace. For more information, see [SAP Note 38781](https://launchpad.support.sap.com/#/notes/38781).
-   [Customer namespace](ABENCUSTOMER_NAMESPACE_GLOSRY.md)
-   If no prefix namespace is available, the names of repository objects created in customer systems or non-SAP development systems must have Y or Z as the first character. This means they are located in the customer namespace. Repository objects whose names start with Z can also be located within packages whose names start with Y and the other way round. For more information, see [SAP Note 16466](https://launchpad.support.sap.com/#/notes/16466).
-   [SAP namespace](ABENSAP_NAMESPACE_GLOSRY.md)
-   If no prefix namespace is available, there are no real restrictions for the names of repository objects that are created in SAP's own development systems. The SAP namespace comprises the entire AS ABAP. Regardless of the namespace where a repository object resides, the name of the repository object is unique in the current AS ABAP. Therefore, when the object is addressed, nothing else needs to be specified. The namespaces (particularly the prefix namespace) were implemented to avoid namespace conflicts during transports between systems and upgrades. For SAP's own development systems, there is a cross-system table that ensures the uniqueness of names within the SAP namespace.

## Hint

There is also a technical namespace for the global types, namely the global [object types](ABENOBJECT_TYPE_GLOSRY.md) of the [class library](ABENCLASS_LIBRARY_GLOSRY.md) and the global [data types](ABENDATA_TYPE_GLOSRY.md) of [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.md) and [ABAP CDS](ABENABAP_CDS_GLOSRY.md). These must also be unique in order to be globally used for declaring reference variables.

## Rule

**Clarify the type and affiliation of repository objects in names**

Use common naming conventions for repository objects. The predefined name prefixes, `CL_`, `IF_`, and `CX_`, apply to objects of the class library. If possible, create all repository objects in the prefix namespaces only. In addition, use a naming convention to clearly indicate which package or component the objects belong to.

## Details

Classes and interfaces are the most important entities for [programming with ABAP Objects](ABENABAP_OBJ_PROGR_MODEL_GUIDL.md). Either a class type or an interface type can be used to type a object reference. It is useful to uniquely flag these two types in the class library by means of a prefix. Global exception classes should also be uniquely identified by a prefix. The following naming conventions apply. These conventions are sometimes enforced by Class Builder but are sometimes only evaluated:

-   `CL_` for global classes
-   `IF_` for global interfaces
-   `CX_` for global exception classes
-   `CL_BADI_`, `IF_BADI_`, `CX_BADI_` for classes, interfaces, and exception classes of Business Add-Ins (BAdI)

These naming conventions distinguish [object types](ABENOBJECT_TYPE_GLOSRY.md) from the global [data types](ABENDATA_TYPE_GLOSRY.md) of [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.md), with which they share a namespace.

In addition, the names of all repository objects should clearly identify the package or component they belong to. Technically speaking, a package does not generate its own namespace and therefore naming requires strict discipline. Using prefix namespaces is very helpful in itself. However, they are not intended for the package level but for bigger development projects, which usually comprise numerous packages.

Therefore, the names of the repository objects contained in a package should be labeled with a shared name component, which indicates the affiliation to a package or at least to an application component. The length of names is restricted to 30 characters or less, and the namespace prefix is included. Therefore, an abbreviation should be used for this name component and not the complete package name.

A global name should never be given for a package-specific or component-specific repository object. This would render the name useless for further general use. For example, general names of the SAP namespace (such as `CHAR60` for a data element or `CL_ABAP_MATH` for a class) should only be declared in absolutely fundamental basis packages delivered by SAP and exposed by these packages in a generally available interface.

If developers find a repository object with a global name, they naturally assume that they can freely use the object in the way indicated by the name. Since the application of package boundaries is not checked thoroughly, repository objects with overly global names (particularly in the SAP namespace and also in the customer namespace) are now used throughout all AS ABAP packages. This can cause considerable difficulties when implementing real package encapsulation.

The above rule supplements the global rule regarding [descriptive names](ABENTELLING_NAMES_GUIDL.md). With regard to technical information in repository object names, the same information stated in section on descriptive names also applies here (also refer to the discussion on prefixes and suffixes in [program-internal names](ABENPROG_INTERN_NAMES_GUIDL.md)).

All development organizations are free to create own naming conventions on the basis of the above rule regarding [descriptive names](ABENTELLING_NAMES_GUIDL.md). However, note that the use of a namespace prefix only leaves limited space for the remaining name components. For example, the names of database tables are restricted to 16 characters. Therefore, the namespace prefix should not be too long. It should simply describe a product line using an abbreviation

## Use

Not all repository objects can be created in prefix namespaces. Some examples are authorization objects and type pools. In these cases, an additional package should be created that includes all of these objects. The object names and package names should, if possible, contain a relevant, normal prefix instead of the real namespace prefix /.../.

A similar guideline applies if further development is performed in areas that are traditionally located in the SAP namespace or the customer namespace. Instead of using a real namespace prefix, this can be simulated by using uniform prefixes when new packages and development objects are created.

If ABAP Workbench itself allocates [names](ABENSOURCE_CODE_ORGA_GDL.md), for instance, for include programs, which are assigned to specific master programs (such as function pools or class pools), this name allocation always has priority over all other rules. This ensures that the workbench and the compiler run correctly.

## Example

Refer to the repository objects of the example application in the package `SABAP_DEMOS_CAR_RENTAL`.

The subpackages of the `SABAP_DEMOS_CAR_RENTAL` package start with the same name as the superpackage (as [recommended](ABENTELLING_NAMES_GUIDL.md) in these guidelines). A suffix indicates their specialization. The same applies to the package interfaces. Instead of a real namespace prefix, the repository objects of the packages have the `DEMO_` prefix. This indicates that the objects are part of a demo package. The affiliation with the car rental application is indicated by the abbreviation `CR` (car rental).
