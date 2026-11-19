import { initRightEditor } from './components/right/js/index.js';
import { initLeftWorkspace } from './components/left/js/index.js';

async function boot() {
  try {
    const instructions = window.ks?.declarative?.instructions?.data;
    const editor = await initRightEditor(instructions);
    await initLeftWorkspace({ instructions, editor });
  } catch (error) {
    console.error('[Instructions Explorer V2]', error);
  }
}

boot();
