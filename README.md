## trmap-ts
Team Run Map interface for JS/TS

### Example
This code will generate start point and bridges that go up to the 2nd checkpoint
```ts
import { TRMap, Block, Checkpoint, Vector2, Bridge, Int } from "trmap-js";
import { writeFileSync } from "fs";

const map = new TRMap();

map.blocks.push(
  new Block({ size: new Vector2(3, 1) }), // Block under the checkpoint
  new Checkpoint({ position: new Vector2(0, 1.5) }), // Checkpoint 1
  ...Array.from({ length: 25 }, (_, i) => new Bridge({ position: new Vector2(0, i * 3 + 3), size: new Vector2(3, 1) })), // Bridges
  new Checkpoint({ position: new Vector2(0, 25 * 3 + 1.5), angle: Int(180) }) // Last checkpoint
);

writeFileSync("challenge.trmap", map.export(), "utf-8");
```

Good luck!
