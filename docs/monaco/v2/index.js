import { initRightEditor } from './components/right/js/index.js';
import { initLeftWorkspace } from './components/left/js/index.js';

async function boot() {
  try {
    let instructions = window.ks?.declarative?.instructions?.data;

    if (!instructions) {
      try {
        const res = await fetch('../../../src/v2/instructions.json');
        if (res.ok) instructions = await res.json();
      } catch (_) {}
    }

    if (!instructions) {
      try {
        const res = await fetch('../../../src/v1/instructions.json');
        if (res.ok) instructions = await res.json();
      } catch (_) {}
    }

    if (!instructions) {
      instructions = window.ks?.declarative?.spec?.data;
    }

    if (!instructions) {
      try {
        const mod = await import('../../dist/v2/min.js');
        instructions = mod.instructions || mod.default || mod.spec || window.ks?.declarative?.instructions?.data || window.ks?.declarative?.spec?.data;
      } catch (_) {}
    }

    instructions = instructions || {};

    const editor = await initRightEditor(instructions);
    await initLeftWorkspace({ spec: instructions, editor });
  } catch (error) {
    console.error('[Instructions Explorer V2]', error);
  }
}

boot();
