/* eslint-disable unicorn/no-useless-undefined, no-await-in-loop, unicorn/filename-case, eslint-comments/disable-enable-pair */
import * as inquirer from 'inquirer';
import { drawLayout } from '@modules/layouts';
import { applyAction } from '@modules/action';
import { paintOutline } from '@utils/outline.paint';

drawLayout(undefined).then(async (layout) => {
  paintOutline(layout);
  let keepDrawing = true;
  while (keepDrawing) {
    const newLayout = <string[][]><unknown>await applyAction(layout);
    paintOutline(newLayout);
    const answers = await inquirer.prompt({
      name: 'continue',
      type: 'confirm'
    });
    keepDrawing = answers.continue;
  }

  return undefined;
}).catch(error => {
  console.error(error)
});
