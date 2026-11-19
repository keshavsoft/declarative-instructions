import { initRightEditor } from './components/right/js/index.js';
import { initLeftWorkspace } from './components/left/js/index.js';

async function boot() {
  try {
    let instructions = window.ks?.declarative?.instructions?.data;

    const editor = await initRightEditor(instructions);
    await initLeftWorkspace({ spec: instructions, editor });
  } catch (error) {
    console.error('[Spec Explorer V5]', error);
  }
}

boot();