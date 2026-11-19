# declarative-instructions

> **Declarative JSONPath transformation rules, AST assembly steps, and collection mapping pipelines for declarative JSON-to-DOM compilers.**

Part of the **KeshavSoft Declarative UI Architecture** (Tier 3: Assembly Pipeline).

---

## 📖 The Story

In imperative UI compilers, DOM assembly logic is hardcoded inside loops: finding target parents, creating elements, looping arrays, and appending children. When DOM requirements evolve (such as wrapping headers in a container or inserting column groups), developers are forced to rewrite compiler source code.

`declarative-instructions` completely replaces imperative code with **declarative transformation instructions**:
1. **JSONPath Queries**: Finds target mount points using declarative JSONPath selectors (`$..*[?@.attributes['data-role'] == 'headerRoot']`).
2. **Dynamic Collection Mapping**: Uses pure transformation functions (`fromCollection`, `oneDimension`, `twoDimensions`) to map columns and data rows into structured DOM trees.
3. **Template Key Bindings**: Dynamically references blueprints from `declarative-spec` (`buildColgroup`, `buildHeader`, `buildBody`) without hardcoding them.

---

## 📦 Installation

```bash
npm install declarative-instructions
```

---

## 🚀 Usage

### 1. Import Instructions in ES Modules

```javascript
import instructions from "declarative-instructions";

// Inspect assembly rules for buildColgroup
console.log(instructions.buildColgroup);
```

### 2. Import Specific Version

```javascript
import instructions from "declarative-instructions/v1";
```

### 3. Direct JSON Import

```javascript
import instructions from "declarative-instructions/instructions.json" with { type: "json" };
```

---

## 🏛️ Instruction Contract Example

```json
{
  "buildColgroup": [
    {
      "destinationPath": "$",
      "templateKey": "buildColGroup",
      "type": "single"
    },
    {
      "destinationPath": "$..*[?@.tag == 'colgroup']",
      "sourcePath": "$.columns",
      "templateKey": "col",
      "func": "fromCollection"
    }
  ]
}
```

---

## 🌐 Interactive Monaco Studio & Documentation

Explore, edit, and trace all compiler instructions live:
* **Documentation & Story:** [https://keshavsoft.github.io/declarative-instructions/](https://keshavsoft.github.io/declarative-instructions/)
* **Monaco Instructions Studio:** [https://keshavsoft.github.io/declarative-instructions/monaco/v1/](https://keshavsoft.github.io/declarative-instructions/monaco/v1/)

---

## 📄 License

MIT © [KeshavSoft](https://github.com/keshavsoft)
