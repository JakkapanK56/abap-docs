---
title: "ABENCLASS_COMPONENTS"
description: |
  ABENCLASS_COMPONENTS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCLASS_COMPONENTS.htm"
abapFile: "ABENCLASS_COMPONENTS.html"
keywords: ["select", "if", "method", "class", "types", "ABENCLASS", "COMPONENTS"]
---

The content of a class is composed of components. The components define the properties of the [objects](ABENOBJECT.html) of a class. Each component is declared in the [definition](ABENCLASS_INTERFACE_DEFINITION.html) of the class in one of the four [visibility sections](ABENCLASS_VISIBILITY.html) that the interfaces define externally. Within a class, all its components are visible. All components are in the same namespace, which means that the names of all components in the class must be different.

The individual components are:

There is a distinction between those components that exist on an instance-dependent basis for every object, and those that exist only once in each class, independent of the instance. The instance-dependent components are known as [instance components](ABENINSTANCE_COMPONENT_GLOSRY.html) and the instance-independent components are referred to as [static components](ABENSTATIC_COMPONENT_GLOSRY.html).

In ABAP Objects, classes can define the components listed above. This description also applies to interfaces, since all components that can be declared in classes can also be declared in interfaces.

The components of classes can be [accessed](ABENCLASS_COMPONENTS_ADDRESSING.html) internally and, depending on the visibility, also from outside the class. If accessed externally, [component selectors](ABENCOMPONENT_SELECTOR_GLOSRY.html) must be used to address the components.

-   [Attributes](ABENCLASS_ATTRIBUTES.html)
-   [Methods](ABENCLASS_METHODS.html)
-   [Events](ABENCLASS_EVENTS.html)
-   [Types and constants](ABENCLASS_TYPES_CONSTANTS.html)

abenabap.html abenabap\_reference.html abenabap\_objects.html abenclasses.html