---
title: Loop Invariant
description: Recap fundamentals from COMP 2804 and before.
sidebar_label: Lec 3 – Loop Invariant
---

## Class Material

- Slides can be found [here](../slides2.pdf).
<!-- - Lecture can be found [here](./LoopinvariantsDandCSept11.mp4). -->

---

### "Vacuously True"

In classical logic, a statement about something that doesn't exist can be considered **vacuously true** if it is structured as an implication or a universal quantification.

#### Example

1. **Implication**: A statement of the form "If $ P $, then $ Q $" is true if $ P $ is false. So, if $ P $ refers to a non-existent object, the implication is true regardless of whether $ Q $ is true or false.

2. **Universal Quantification**: A statement like "For all $ x $, $ P(x) $ holds" is considered true if there are no $ x $ for which $ P(x) $ is false. If there are no elements in the domain of discourse, the statement is vacuously true.

#### Example in Practice

- Consider the statement: "All unicorns are mythical creatures." Since unicorns do not exist, the statement is true by virtue of being vacuously true—there are no instances of unicorns that can be shown to contradict the claim.

#### Conclusion

In summary, in classical logic, statements about non-existent entities can indeed evaluate to true, particularly in the context of implications or universal quantifications.
